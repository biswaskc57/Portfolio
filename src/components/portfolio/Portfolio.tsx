import { useEffect, useState } from "react";
import React from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  MernPortfolio,
  ReactPortfolio,
  designPortfolio,
  javaPortfolio,
} from "../../data";

// Define the structure of portfolio items
export interface PortfolioItem {
  id: number;
  title: string;
  img: string;
  url: string;
}

export default function Portfolio() {
  const [selected, setSelected] = useState<string>("features");
  const [data, setData] = useState<PortfolioItem[]>([]);
  
  const list = [
    {
      id: "features",
      title: "Featured",
    },
    {
      id: "MERN-Projects",
      title: "MERN Projects",
    },
    {
      id: "React-Projects",
      title: "React Projects",
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
    case "features":
      setData(featuredPortfolio);
      break;
    case "MERN-Projects":
      setData(MernPortfolio);
      break;
    case "React-Projects":
      setData(ReactPortfolio);
      break;
    case "Java-Projects":
      setData(javaPortfolio);
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
            key={item.id} // Add a unique key for each list item
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}> {/* Add a unique key for each portfolio item */}
            <a href={d.url} target="_blank" rel="noopener noreferrer"> {/* Add rel attribute for security */}
              <img src={d.img} alt={d.title} /> {/* Use alt text for accessibility */}
            </a>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
