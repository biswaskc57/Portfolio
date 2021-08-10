import { useEffect, useState } from "react";
import React from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  MernPortfolio,
  ReactPortfolio,
  designPortfolio,
} from "../../db";

export default function Portfolio() {
  const [selected, setSelected] = useState("features");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "features",
      title: "Featured",
    },
    {
      id: "MERN-Projects",
      title: "MERNApp",
    },
    {
      id: "React-Projects",
      title: "React-App",
    },
    {
      id: "Java-Projects",
      title: "Java Projects",
    },
    {
      id: "Design-Projects",
      title: "Design Projects",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "MERN-Projects":
        setData(MernPortfolio);
        break;
      case "React-Projects":
        setData(ReactPortfolio);
        break;
      case "Design-Projects":
        setData(designPortfolio);
        break;

      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <a href={d.url}>
              <img src={d.img} alt="" />
            </a>

            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
