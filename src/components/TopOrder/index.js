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
            <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1552050529/image-4.jpg" alt="" />
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
            <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1552050505/image-12.jpg" alt="" />
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
            <img src="https://res.cloudinary.com/dx0nauane/image/upload/v1544280158/x5cu9owt6sx4vxhdoz23.jpg" alt="" />
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
