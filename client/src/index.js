import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Color1 from './Color1';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Project1 from './Project1';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Theme>
        <Project1/>
    </Theme>
  </React.StrictMode>
);
