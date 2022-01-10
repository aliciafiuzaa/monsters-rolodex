import React from 'react';
import { Card } from '../card/Card';
import './card-list.css';

// responsible for listing the cards

export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

// export default CardList;