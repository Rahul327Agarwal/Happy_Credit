import React from "react";
import "./Catogories.css";
const Catogories = () => {
  return (
    <div>
      <div className="upper">
        <h3>Catogories</h3>
        <a href="#">All</a>
        <a href="#">Babies & Kids</a>
        <a href="#">Clothing & Apparel</a>
        <a href="#">Clothing & Apparel</a>
        <a href="#">Consumer Electronics</a>
        <a href="#">Education</a>
        <a href="#">Gifts</a>
        <a href="#">Health & Beauty</a>
        <a href="#">Holidays & Occasions</a>
        <a href="#">Household</a>
        <a href="#">Sporting Goods</a>
        <a href="#">Travel</a>
        <a href="#">Womens</a>
      </div>
      <hr />
      <div>
        <div className="filter">Filter</div>
        <div className="filterType">Type</div>
        <div>
          <input type="checkbox" /> <span>Only Coupons</span>
          <br />
          <input type="checkbox" /> <span>Exclusive</span>
          <br />
          <input type="checkbox" /> <span>BOGO and more</span>
          <br />
        </div>
      </div>
      <hr />
      <div>
        <div className="filterType">Discount</div>
        <div>
          <input type="checkbox" /> <span>0-49% off</span>
          <br />
          <input type="checkbox" /> <span>50-80% off</span>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Catogories;
