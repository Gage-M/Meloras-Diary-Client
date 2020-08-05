import React from 'react';
import ReactDOM from 'react-dom';
import UserCharacterDisplayPage from './UserCharacterDisplayPage'


it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserCharacterDisplayPage/>, div);
    ReactDOM.unmountComponentAtNode(div);
});