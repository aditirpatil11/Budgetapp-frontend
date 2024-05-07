// Homepage.js
import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import NotificationBar from '../NotificationBar/NotificationBar';

const Homepage = () => {
  return (
    <div>
        <NotificationBar/>
    <div className="homepageContainer">
      <div className="textSection">
        <h2>Achieve financial freedom your way. Monitor every transaction closely.</h2>
        <p>Develop a personalized financial plan to eliminate debt using either the snowball or avalanche approach. With our debt payoff planner, easily track the remaining payment cycles until you're debt-free.</p>
        <p>Consolidate all your financial accounts - banks, credit cards, loans, and investments - in one convenient location. Stay informed about your account balances, net worth, and more.</p>
        <button className="contactButton">Contact Us</button>
      </div>
      <div className="imageSection">
        <img src="homepage.png" alt="Description" />
      </div>
    </div>
    </div>
  );
};

export default Homepage;
