import React from 'react';
import {Link} from 'react-router-dom';
import UserPageContext from '../../context/userContext/userContext';
import TokenService from '../../services/TokenService';
import UserApiCalls from '../../services/api-calls/user-api-calls';



export default class Header extends React.Component {

    static contextType = UserPageContext

    componentDidMount(){
        UserApiCalls.getUserById()
            .then(this.context.setUserInfo)
            .catch(e => console.error(e))

    }

    
    
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }


    renderUserPageLink(){
        const { userInfo } = this.context
        console.log(userInfo)
        return(
            <div>
                <Link
                to={`/user/${userInfo.id}`}>
                    Your Character Page
                </Link>
            </div>
        )
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
                to={`/login`}> 
                    Log in
                </Link>
            </div>
        )
    }

    renderCharMakerLink(){
        return(
            <div>
                <span>
                  <Link
                to='/char-Create'>
                    Create A Character
                </Link>  
                </span>
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
                    TokenService.hasAuthToken()
                    ? this.renderCharMakerLink() && this.renderUserPageLink && this.renderLogoutLink()
                    : this.renderLoginLink()
                }
            </nav>
        )
    }


}