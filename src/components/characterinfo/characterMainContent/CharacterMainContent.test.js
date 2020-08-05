import React from 'react';
import ReactDOM from 'react-dom';
import CharacterMainContent from './CharacterMainContent'


it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterMainContent/>, div);
    ReactDOM.unmountComponentAtNode(div);
});