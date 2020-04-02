import React from 'react';

export function Card (props){
  return (
  <div className="card">
    <div className="all_body_card">
      <div className="row img">
        <img src={props.data.img} className="card-img-top img_crd" alt="author icon"/>
      </div>
      <div className="info">
        <div className="card-body card_b">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text describe">{props.data.describe}</p>
          <p className="card-text"><small className="text-muted">{props.data.price}</small></p>
        </div>
      </div>
    </div>
  </div>);
}
