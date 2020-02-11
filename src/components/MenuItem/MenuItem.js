import React from "react";
import './MenuItem.scss'

export default function MenuItem({title, imageUrl}) {
  return (
    <div className="menu-item" style={{backgroundImage: `url(${imageUrl})`}}>
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
