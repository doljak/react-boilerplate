import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from '../_config.mam/registerServiceWorker';
import './sass/style.scss'

ReactDOM.render(<App />, document.getElementById('mam'));
registerServiceWorker();
