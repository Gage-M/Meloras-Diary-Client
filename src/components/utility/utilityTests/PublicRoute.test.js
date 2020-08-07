import React from 'react';
import ReactDOM from 'react-dom';
import PublicRoute from '../PublicRoute'
import { BrowserRouter } from 'react-router-dom';


const Somediv = () =>{
    return(
        <div>
            <h1>text</h1>
        </div>
    )
}

it('renders with out crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                        <PublicRoute
                            path={'/'}
                            component={Somediv} 
                        />
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});