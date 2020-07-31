import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {UserPageProvider} from './context/userContext/userContext'
import App from './App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <UserPageProvider>
            <App />
        </UserPageProvider>
    </BrowserRouter>
,
 document.getElementById('root'));