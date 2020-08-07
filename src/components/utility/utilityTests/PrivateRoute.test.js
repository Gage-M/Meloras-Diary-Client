import React from 'react';
import ReactDOM from 'react-dom';
import PrivateRoute from '../PrivateRoute'
import { BrowserRouter } from 'react-router-dom';
const Somediv = () =>{
    return(
        <div>
            <h1>text</h1>
        </div>
    )
}

/*SKIPPED because auth token need, and need to learn how to set up a temp AUTH token for gist test*/
it.skip('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <PrivateRoute
                            component={Somediv} 
                        />
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});