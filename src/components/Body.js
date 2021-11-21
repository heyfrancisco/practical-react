import React from 'react';

export const Body = (props) => (
  <div>
    <p className="app-intro">{props.mainText}</p>
    <p className="app-intro">{props.myFunc(1, 2)}</p>
  </div>
);

export const Body2 = () => (
  <div>
    <div>
      <p>Hi!</p>
    </div>
  </div>
);
