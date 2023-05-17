import React, { useState } from "react";
import data from "./data";
import "./portfolio.css";

const uniqueCategories = [
  "All",
  ...new Set(
    data.map((item) => {
      return item.category;
    })
  ),
];
const Portfolio = () => {
  const [portfolioArray, setPortfolioArray] = useState(data);

  const handleClick = (e) => {
    const category = e.target.textContent;
    if (category === "All") {
      setPortfolioArray(data);
      return;
    }
    setPortfolioArray(data.filter((item) => item.category === category));
  };
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="btn__container-categories">
        {uniqueCategories.map((cat) => {
          return (
            <button onClick={(e) => handleClick(e)} className="btn__category">
              {cat}
            </button>
          );
        })}
      </div>
      <div className="container portfolio__container">
        {portfolioArray.length > 0 &&
          portfolioArray.map((item) => {
            return (
              <article key={item.id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={item.image} alt="p1" />
                  <h3>{item.title}</h3>
                  <small>{item.category}</small>
                  <div className="portfolio__item-cta">
                    <a className="btn" href={item.github} target="_blank">
                      GitHub
                    </a>
                    <a
                      href={item.demo}
                      className="btn btn-primary"
                      target="_blank"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Portfolio;
