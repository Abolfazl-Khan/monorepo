import React from 'react';
import ReactDOM from 'react-dom';

import { Color } from '@ds.e/react';
import '@ds.e/scss/lib/Button.css';

ReactDOM.render(
  <Color hexCode='#000' height='1rem' width='1rem' />,
  document.querySelector('#root')
);
