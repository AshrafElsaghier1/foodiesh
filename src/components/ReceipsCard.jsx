import React from "react";
import { Link } from "react-router-dom";

const ReceipsCard = ({ receip }) => {
  const { title, image, authorImg } = receip;
  return (
    <div className="single-card">
      <div className="header-img">
        <img
          src={`${process.env.PUBLIC_URL}${image}`}
          alt=""
          className="food-img"
        />
      </div>
      <div className="food-info">
        <img src={authorImg} alt=" " className="img-auther" />
        <h4 className="title">{title}</h4>
        <p className="info">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <Link to="/" className="view-btn">
          View Receipe
        </Link>
      </div>
    </div>
  );
};

export default ReceipsCard;
