import React from 'react';
import ReactDOM from 'react-dom';
import {UserPageProvider} from './userContext'




it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <UserPageProvider>
            <div>
            </div>
    </UserPageProvider>
    
    , div);
    ReactDOM.unmountComponentAtNode(div);
});