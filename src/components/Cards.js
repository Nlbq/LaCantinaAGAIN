import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Mes projets récents</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/neptune.jpg'
              text='Neptune'
              path='/services'
            />
            <CardItem
              src='images/summer.jpg'
              text='Summer'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/west.jpg'
              text=' West Wild Wild'
              path='/services'
            />
            <CardItem
              src='images/morphée.jpg'
              text='Morphée'
              path='/products'
            />
            <CardItem
              src='images/inkyo.jpg'
              text='Inkyo'            
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
