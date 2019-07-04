import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import TopOrderContainer from '../../components/TopOrderContainer';
import HowToOrderContainer from '../../components/HowToOrderContainer';
import './home.scss';

function Home() {
  return (
    <div className="home">
      <Navbar path="/">
        <li className="link"><Link to="#order">how to order</Link></li>
        <li className="link"><Link to="#">Catalog</Link></li>
        <li className="link--btn"><button type="button" className="button">SIGNIN / SIGNUP</button></li>
      </Navbar>
      <Banner />
      <TopOrderContainer />
      <HowToOrderContainer />
    </div>
  );
}

export default Home;
