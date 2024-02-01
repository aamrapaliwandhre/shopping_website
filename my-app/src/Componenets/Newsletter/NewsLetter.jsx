import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='your Email' />
            <button>Subscrivbe</button>
        </div>
    </div>
  )
}

export default NewsLetter