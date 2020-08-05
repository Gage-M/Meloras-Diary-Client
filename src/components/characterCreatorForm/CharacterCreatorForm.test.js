import React from 'react';
import ReactDOM from 'react-dom';
import CharacterCreatorForm from './CharacterCreatorForm'


it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterCreatorForm/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

