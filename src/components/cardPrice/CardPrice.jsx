import React from 'react';
import { Link } from 'react-router-dom';
import "./CardPrice.css";

export default function CardPrice() {
  return (
    <div className='pricing'>
      <div className="card-container">
        <div className="card">
          <h3>- Premium Plan -</h3>
          <span className='bar'></span>
          <div className="btc">$ 200</div>
          <p>Get a high-end website built with the latest technologies.</p>
          <p><strong>Duration:</strong> 3 Days</p>
          <p><strong>Pages:</strong> 5 Pages</p>
          <p><strong>Features:</strong> SEO Optimized, Responsive Design, Fast Performance</p>
          <p><strong>Best For:</strong> Businesses and individuals looking for a premium website.</p>
          <Link 
            to="/contact" 
            className='btn' 
            aria-label="Purchase Premium Plan"
          >
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>- Business Plan -</h3>
          <span className='bar'></span>
          <div className="btc">$ 300</div>
          <p>Perfect for growing businesses that need a custom-designed website.</p>
          <p><strong>Duration:</strong> 5 Days</p>
          <p><strong>Pages:</strong> 9 Pages</p>
          <p><strong>Features:</strong> SEO Friendly, Mobile Optimized, Custom Designs, Fast Loading Speed</p>
          <p><strong>Best For:</strong> Small to medium-sized businesses seeking a professional website.</p>
          <Link 
            to="/contact" 
            className='btn' 
            aria-label="Purchase Business Plan"
          >
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>- Basic Plan -</h3>
          <span className='bar'></span>
          <div className="btc">$ 100</div>
          <p>Get started with a basic but professional website at an affordable price.</p>
          <p><strong>Duration:</strong> 2 Days</p>
          <p><strong>Pages:</strong> 3 Pages</p>
          <p><strong>Features:</strong> Mobile-Friendly, Basic SEO Optimization, Fast Performance</p>
          <p><strong>Best For:</strong> Individuals or small businesses just starting out.</p>
          <Link 
            to="/contact" 
            className='btn' 
            aria-label="Purchase Basic Plan"
          >
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
