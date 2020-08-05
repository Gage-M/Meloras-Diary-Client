import React from 'react';
import ReactDOM from 'react-dom';
import CharacterShortContent from './CharacterShortContent'


it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterShortContent/>, div);
    ReactDOM.unmountComponentAtNode(div);
});