import React from 'react';
import './Success.scss'
import { Link } from 'react-router-dom';
const Message = () => {
    return (
        <div className="success-message">
        <h2>Thank you! Your payment was successful.</h2>
        <Link to={'/order-details'}>
        <button> SEE ORDER DETAILS</button>

        </Link>
      </div>
    );
};

export default Message;