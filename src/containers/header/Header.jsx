import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
          Let's Build Something Amazing With GPT-3
        </h1>
        <p>
           Discover how the new generation of AI can create new opportunities for your organisation
           Discover how the new generation of AI can create new opportunities for your organisation
        </p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder="Your Email Address" />
          <button>
            Get Started
          </button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>
            1600 people requested access
          </p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header;