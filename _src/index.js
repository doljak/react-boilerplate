import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from '../_config.webpack/registerServiceWorker';
import './sass/style.scss'

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
