import React from "react";

const ImprovedSec = () => {
  const list = [
    "Learn new receipes",
    "Experiment with food",
    "write your own receipes",
    "know nutrition facts",
    "Get cooking tips",
    "get ranked",
  ];
  return (
    <section className="section improved-sec">
      <div className="col improved-img-container pr">
        <img src="/img/15.jpg" alt="img" />
      </div>
      <div className="col pl">
        <h1 className="title">Improve your culinary skills</h1>
        <ul className="improved-ul-list">
          {list.map((item, index) => {
            return (
              <li className="single-item" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
        <button className="btn">Sign up now</button>
      </div>
    </section>
  );
};

export default ImprovedSec;
