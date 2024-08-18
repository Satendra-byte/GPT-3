import React from 'react'
import {Feature} from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What Is GPT-3" text="To speak German confidently pronounce words coch should help when pronouncing a lot of German words.To speak German confidently, it’s helpful to know how to pronounce words correctly. German has lots of similar phonemes to English, which should help when pronouncing a lot of German words." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient-text'>
        Try Pro free for 1 month and get background functions, password-protected sites, email support, and more.
        </h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="chatbots" text="A phoneme is a unit of sound. When you put the different sounds together, they make words."/>
        <Feature title="knowedgebase" text="A phoneme is a unit of sound. When you put the different sounds together, they make words."/>
        <Feature title="education" text="A phoneme is a unit of sound. When you put the different sounds together, they make words."/>
      </div>
    </div>
  )
}

export default WhatGPT3