// index.js hoặc App.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyCMS from './tina-config'; // Đường dẫn đến file cấu hình TinaCMS

ReactDOM.render(
  <React.StrictMode>
    <MyCMS>
      <App />
    </MyCMS>
  </React.StrictMode>,
  document.getElementById('root')
);
