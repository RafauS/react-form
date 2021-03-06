import React from 'react';
import ReactDOM from 'react-dom';
import './App/index.css';
import App from './App/App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render
            (
            <App />,
            document.getElementById("root")
            )

serviceWorker.unregister();
