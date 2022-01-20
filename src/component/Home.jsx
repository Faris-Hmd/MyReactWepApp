/** @format */

import React from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";
///////////////// SLIDER COMPONENT ////////////////
const HorizontalSlider = () => {
  return (
    <div className="horizontalCardContainer">
      <div className="card">
        <img src="./image/3559503.jpg" alt="" />
      </div>
      <div className="card">
        <img src="./image/3559503.jpg" alt="" />
      </div>
      <div className="card">
        <img src="./image/3559503.jpg" alt="" />
      </div>
      <div className="card">
        <img src="./image/3559503.jpg" alt="" />
      </div>
    </div>
  );
};

///////////////// HOME COMPONENT ////////////////
const Home = (props) => {
  return (
    <div className="homeContainer">
      <div className="welcome">
        <div className="nav-bar">
          <div className="nav-con">About Us</div>
          <div className="nav-con">Contact</div>
          <div className="nav-con">Servies</div>
          <div className="nav-con">Home</div>
          <span></span>
        </div>
        <div className="txt">
          <h2>Welcome In</h2>
          <h1>ElNeelen Restaurant</h1>
          <h4>
            Burger, pizza, Sandwich, Ice cream, Hot Drinks, Cold Drinks, Public
            Meals, Fish, Meats...etc
          </h4>
          <Link className="Link" to="/menu">
            <div className="btn-order">Order Now</div>
          </Link>
        </div>
      </div>
      <div className="label">Offers </div>
      <HorizontalSlider />
      <div className="label">Categories </div>
      <Categories categories={props.categories} />
      <div className="label">Top Paied </div>
      <HorizontalSlider />
    </div>
  );
};

export default Home;
