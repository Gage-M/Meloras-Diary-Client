import React from 'react';
import ReactDOM from 'react-dom';
import PublicRoute from '../PublicRoute'


it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PublicRoute/>, div);
    ReactDOM.unmountComponentAtNode(div);
});