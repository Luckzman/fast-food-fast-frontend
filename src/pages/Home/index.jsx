import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import TopOrderContainer from '../../components/TopOrderContainer';
import HowToOrderContainer from '../../components/HowToOrderContainer';
import HomePageReview from '../../components/HomePageReview';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import './home.scss';

class Home extends React.Component {
  state = {
    isOpen: false,
  }

  onToggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="home">
        <Navbar path="/">
          <li className="link"><a href="#order">how to order</a></li>
          <li className="link"><Link to="">Catalog</Link></li>
          <li className="link--btn">
            <Button
              name="LOGIN"
              className="button"
              handleClick={this.onToggle} />
          </li>
        </Navbar>
        {isOpen && (
          <Modal
            content={<div>Modal Content</div>}
            onCloseModal={this.onToggle}
          />
        )}
        <Banner />
        <TopOrderContainer />
        <HowToOrderContainer />
        <HomePageReview />
        <Footer />
      </div>
    );
  }
}


export default Home;
