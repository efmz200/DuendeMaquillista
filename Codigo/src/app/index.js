/*import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(<App />);*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();