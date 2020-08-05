import React from 'react';
import ReactDOM from 'react-dom';
import CharacterCreatePage from './CharacterCreatepage'


it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CharacterCreatePage/>, div);
    ReactDOM.unmountComponentAtNode(div);
});