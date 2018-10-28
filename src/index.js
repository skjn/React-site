import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './Page';
import './bootstrap-4.1.3-dist/css/bootstrap.min.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pages />, document.getElementById('root'));
registerServiceWorker();
