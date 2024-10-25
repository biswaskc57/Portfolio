import './Topbar.scss';
import React from 'react';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';

// Define the props interface for the Topbar component
interface TopbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Convert the function to use the defined props type
const Topbar: React.FC<TopbarProps> = ({ open, setOpen }) => (
  <div className={`topbar ${open ? 'active' : ''}`}>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">
          Portfolio.
        </a>
        <div className="itemContainer">
          <PersonIcon className="icon" />
          <span>Biswas KC</span>
        </div>
        <div className="itemContainer">
          <EmailIcon className="icon" />
          <span>biswaskc57@gmail.com</span>
        </div>
      </div>
      <div className="right">
        <button
          type="button"
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {/* You can include an icon or text here */}
          Hamburger
        </button>
        <span className="line1" />
        <span className="line2" />
        <span className="line3" />

      </div>
    </div>
  </div>
);

export default Topbar;
