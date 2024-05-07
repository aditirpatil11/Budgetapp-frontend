import React from 'react';
import { Link } from 'react-router-dom'; 
import './NotificationBar.css';

const NotificationBar = () => {
  return (
    <div className="noti">
            Need help with budgeting? Discover our future plans tailored to your financial requirements. &nbsp;
            <Link to="/login">
              Login
            </Link>
            &nbsp;|&nbsp;
            <Link to="/signUp">
              SignUp
            </Link>
    </div>
  );
};

export default NotificationBar;
