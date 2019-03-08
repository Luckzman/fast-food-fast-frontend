import React from 'react';
import { Link } from 'react-router-dom';
import './topOrder.scss';

const TopOrder = () => (
  <div className="top-order">
    <div className="container">
      <h1>top order</h1>
      <p>Customer's Top Most Choice</p>
      <div className="order-row">
        <div className="order-card">
          <div className="order-img">
            <img src="./image-3.jpg" alt="" />
            <Link to="./html/order-details.html">view details</Link>
          </div>
          <div className="card-content">
            <h3>meat</h3>
            <div className="star-rating">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </div>
            <p>Very testy and delicious with nice blend of fried plantain</p>
          </div>
        </div>
        <div className="order-card">
          <div className="order-img">
            <img src="../../../assets/images/image-17.jpg" alt="" />
            <a href="./html/order-details.html">view details</a>
          </div>
          <div className="card-content">
            <h3>plantain sauce</h3>
            <div className="star-rating">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </div>
            <p>Very testy and delicious with nice blend of fried plantain</p>
          </div>
        </div>
        <div className="order-card">
          <div className="order-img">
            <img src="../../../assets/images/image-5.jpg" alt="" />
            <a href="./html/order-details.html">view details</a>
          </div>
          <div className="card-content">
            <h3>meat</h3>
            <div className="star-rating">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star unchecked" />
            </div>
            <p>Very testy and delicious with nice blend of fried plantain</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TopOrder;
