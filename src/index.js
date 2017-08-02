import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, } from 'react-router';
import { BrowserRouter} from 'react-router-dom';

import App from './components/App';


let rootElement = document.getElementById('root');


ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), rootElement);

