import React from 'react';
import ReactDOM from 'react-dom';
import UserLoginPage from './UserLoginPage'


it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserLoginPage/>, div);
    ReactDOM.unmountComponentAtNode(div);
});