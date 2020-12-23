import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1> Climate Hub Services </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Home/YouthEngagement.jpg'
              text='Connect youth with support to drive climate action.'
              label='Youth Engagement'
              path='/services'
            />
            <CardItem
              src='images/Home/BestPractice.png'
              text='Summarize best practices in a range of topics relevant to local climate action'
              label='Best Practices'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Home/StoryTelling.jpeg'
              text='Communicate the need for climate change solutions by telling your story'
              label='Climate Story telling'
              path='/services'
            />
            <CardItem
              src='images/Home/ClimateHub_Roadmap2.jpg'
              text='The mandate and activities of a Climate Hub step-by-step'
              label='Climate Hub Roadmap'
              path='/products'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;