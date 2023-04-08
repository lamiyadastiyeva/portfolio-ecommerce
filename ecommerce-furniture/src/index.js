import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../src/assets/sass/style.scss';
import App from './App';
import BacktoButton from './components/BacktoButton';
import './main'


ReactDOM.render(
  <React.StrictMode>
  <App />
  <BacktoButton/>
</React.StrictMode>,
document.getElementById('root')
);






