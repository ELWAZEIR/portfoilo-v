import React from 'react'
import { Link } from 'react-router-dom'
import "./CardPrice.css"
export default function CardPrice() {
  return (
    <div className='pricing'>
      <div className="card-container">
        <div className="card">
          <h3>- Premium -</h3>
          <span className='bar'></span>
          <div className="btc">$ 200</div>
          <p>- 3 Days -</p>
          <p>- 5 Pages -</p>
          <p>- featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className='btn'>
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>- Business -</h3>
          <span className='bar'></span>
          <div className="btc">$ 300</div>
          <p>- 5 Days -</p>
          <p>- 9 Pages -</p>
          <p>- featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className='btn'>
            PURCHASE NOW
          </Link>
        </div>
        <div className="card">
          <h3>- Basic -</h3>
          <span className='bar'></span>
          <div className="btc">$ 100</div>
          <p>- 2 Days -</p>
          <p>- 3 Pages -</p>
          <p>- featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className='btn'>
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  )
}
