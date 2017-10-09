import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity>
    <Entity camera="userHeight: 1.6" universal-controls="fly: true; movementEasingY: 15" look-controls qz-keyboard-controls {...props}/>
  </Entity>
);
