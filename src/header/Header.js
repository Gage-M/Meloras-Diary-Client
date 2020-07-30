import React from 'react';
import {Link} from 'react-router-dom';


export default class Header extends React.Component {
    handleLogoutClick = () => {
        /*clear token */
    }

    renderLogoutLink(){
        return (
            <div className='Header__Logged_in'>
                <Link
                onClick={this.handleLogoutClick}
                to='/'>
                Logout
                </Link>
            </div>
        )
    }
    renderLoginLink() { 
        return (
            <div>
                <Link
                to='/register'>
                    Register
                </Link>
                <span className='spacer'>{' - '}</span>
                <Link
                to={`/`}> {/*<= '/login' */}
                    Log in
                </Link>
            </div>
        )
    }

    render() {
        return(
            <nav>
                <h1>
                    <Link to='/'>
                        Melora's-Diary
                    </Link>
                </h1>
                {
                    /*when have Auth working*/
                    /*this.renderLogoutLink()*/
                    this.renderLoginLink()
                }
            </nav>
        )
    }


}