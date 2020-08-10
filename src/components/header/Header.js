import React from 'react';
import { Link } from 'react-router-dom';
import UserPageContext from '../../context/userContext/userContext';
import TokenService from '../../services/TokenService';
import UserApiCalls from '../../services/api-calls/user-api-calls';



export default class Header extends React.Component {

    static defaultProps = {
        location : {},
        history : {
            push : () => {}
        } 
    }

    static contextType = UserPageContext

    componentDidMount(){
        UserApiCalls.getUserById()
            .then(this.context.setUserInfo)
            .catch(e => console.error(e))

    }

    
    
    handleLogoutClick = () => {
        this.props.history.push('/')
        TokenService.clearAuthToken()
        this.context.setIsLoggedIn(false)
        //window.location.reload()
    }


    renderUserPageLink(){
        const { userInfo } = this.context
        
        return(
            <div className='user_page'>
                <Link
                className='char_page link'
                to={`/user/${userInfo.id}`}>
                    Your Character Page
                </Link>
            </div>
        )
    }

    renderLogoutLink(){
        return (
            <div className='header_logout'>
                <Link
                className='logout link'
                onClick={this.handleLogoutClick}
                to='/'>
                Logout
                </Link>
            </div>
        )
    }
    renderLoginLink() { 
        return (
            <div className='header_login'>
                {/*

                    ### TODO finish register when i have time, since it wasn't a requirement but i would like it done  ###
                 <Link
                className='registration link'
                to='/register'>
                    Register
                </Link> 
                */}
                {/* <span className='spacer'>{' - '}</span> */}
                <Link
                className='login link'
                to={`/login`}> 
                    Login
                </Link>
            </div>
        )
    }

    renderCharMakerLink(){
        return(
            <div className='character_creator'>
                <span>
                  <Link
                  className='character_creation link'
                    to='/char-Create'>
                    Create A Character
                </Link>  
                </span>
            </div>
        )
    }

    renderPackage(){
        return(
            <>
            {this.renderCharMakerLink()}
            {this.renderUserPageLink()}
            {this.renderLogoutLink()}
            </>
        )
    }

    render() {
        

        return(
            <div className='header_wrapper'>
                <h1>
                    <Link
                    className='meloras_root link'
                    to='/'>
                        Melora's-Diary
                    </Link>
                </h1>
                <div className='render_links'>
                {
                    TokenService.hasAuthToken()
                    ?  this.renderPackage() 
                    : this.renderLoginLink()
                }
                </div>
            </div>
        )
    }


}