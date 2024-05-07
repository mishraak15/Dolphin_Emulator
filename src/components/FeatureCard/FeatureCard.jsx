import React from 'react';
import "./FeatureCard.css";

export default function FeatureCard({title}) {
  return (
    <div className="FeatureCard">
            <div className="feature-icon-container"><i class="fa-solid fa-bolt"></i></div>
            <span>{title}</span>
        </div>
  )
}
