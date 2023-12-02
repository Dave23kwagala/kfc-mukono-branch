import React from 'react';
import Navbar from '../Navbar';
import './LandingPage.css'; // Import the CSS file for LandingPage

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />

      <main className="main">
        <section className="hero">
          <h1>Hello Our Customers</h1>
        </section>

        <section className="welcome-message">
          <h2>We're Delighted to Have You By DAVE!</h2>
          <p>Experience the finger-lickin' goodness of our world-famous fried chicken. Explore our menu and treat yourself to a delightful feast.</p>
        </section>

        <section className="small-images">
          <img src="https://images.bolt.eu/store/2022/2022-11-02/ee2fe1fa-5146-4aa8-a91b-38369fd501c2.jpeg" alt="Small Image 1" />
          <img src="https://paulothewriter.files.wordpress.com/2017/10/chicken_originalrecipe_21pce.jpg?w=442&h=316" alt="Small Image 2" />
          <img src="https://www.yellow.ug/img/ug/n/1602349003-35-kfc-kabalagala.jpg" alt="Small Image 3" />
        
        
        
        
        </section>
      </main>
    </div>
  );
}

export default LandingPage;
