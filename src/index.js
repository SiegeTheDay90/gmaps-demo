import React from 'react';
import {createRoot} from 'react-dom/client';
import { Wrapper } from '@googlemaps/react-wrapper';
import './index.css';
import App from './App';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <App />
    </Wrapper>
  </React.StrictMode>
)
