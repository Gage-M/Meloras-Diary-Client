import React from 'react';
import ReactDOM from 'react-dom';
import SighUpPage from './SighUpPage'


it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SighUpPage/>, div);
    ReactDOM.unmountComponentAtNode(div);
});