import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import TopOrder from '../../components/TopOrder';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <TopOrder />
    </div>
  );
}

export default Home;
