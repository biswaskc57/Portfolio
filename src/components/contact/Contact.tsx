import React, { useState } from "react";
import emailjs from "emailjs-com";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./contact.module.scss";
import { countryCodes } from "../../data";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  countryCode: string;
}

// Access environment variables
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID || "";

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();
  const [phone, setPhone] = useState<string>("");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { name, email, phone, subject, countryCode } = data;

    const templateParams = {
      from_name: name,
      from_email: email,
      phone_number: `${countryCode} ${phone}`,
      message: subject,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID)
      .then(
        (response) => {
          alert("Message sent! I'll get back to you ASAP!.");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  const formatFinnishPhone = (value: string): string => {
    const cleaned = value.replace(/\D+/g, "").slice(0, 10);
    const formatted = cleaned.replace(/(\d{3})(\d{4})(\d{3})/, "$1 $2 $3");
    return formatted;
  };

  const renderLabel = (text: string, required: boolean) => (
    <label className={styles.label}>
      {text} {required && <span className={styles.required}>*</span>}
    </label>
  );

  return (
    <div className={styles.contactFormContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {renderLabel("Name", true)}
        <input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          placeholder="Your Name"
          className={styles.input}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        {renderLabel("Email", true)}
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
          placeholder="Your Email"
          className={styles.input}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        {renderLabel("Phone Number", false)}
        <div className={styles.phoneContainer}>
          <select
            {...register("countryCode")}
            defaultValue="+358"
            className={styles.countryCode}
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.code} ({country.name})
              </option>
            ))}
          </select>
          <input
            id="phone"
            type="tel"
            {...register("phone", {
              pattern: {
                value: /^\d{3} \d{4} \d{3}$/,
                message: "Please enter a valid phone number in the format 045 1234 567",
              },
            })}
            placeholder="045 1234 567"
            className={styles.phoneInput}
            value={phone}
            onChange={(e) => {
              const formattedPhone = formatFinnishPhone(e.target.value);
              setPhone(formattedPhone);
              setValue("phone", formattedPhone, { shouldValidate: true });
            }}
          />
        </div>
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}

        {renderLabel("Subject", true)}
        <textarea
          id="subject"
          {...register("subject", {
            required: "Subject is required",
            maxLength: {
              value: 500,
              message: "Subject cannot exceed 500 characters",
            },
          })}
          placeholder="How can I help? (up to 500 characters)"
          className={styles.textarea}
        />
        {errors.subject && <p className={styles.error}>{errors.subject.message}</p>}

        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
