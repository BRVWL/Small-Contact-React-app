import React from 'react';

const Item = props => (
  <div className="item">
    <img src={props.photo} alt={props.name} />
    <span className="name">{props.name}</span>
    <span className="phone">{props.phone}</span>
  </div>
);

export default Item;
