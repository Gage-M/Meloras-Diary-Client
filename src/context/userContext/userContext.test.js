import React from 'react';
import ReactDOM from 'react-dom';
import userContext from './userContext'




it.only('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<userContext/>, div);
    ReactDOM.unmountComponentAtNode(div);
});