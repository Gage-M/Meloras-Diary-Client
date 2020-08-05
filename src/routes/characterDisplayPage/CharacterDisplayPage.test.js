import React from 'react';
import ReactDOM from 'react-dom';
import CharacterDisplayPage from './CharacterDisplayPage'


it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterDisplayPage/>, div);
    ReactDOM.unmountComponentAtNode(div);
});