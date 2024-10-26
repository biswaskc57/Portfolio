import React from "react";
import "./portfolioList.scss";

// Define the props type for PortfolioList
interface PortfolioListProps {
  title: string;
  active: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  id: string;
}

const PortfolioList: React.FC<PortfolioListProps> = ({ title, active, setSelected, id }) => {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default PortfolioList;