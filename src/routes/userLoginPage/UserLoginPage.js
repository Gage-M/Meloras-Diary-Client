import React from 'react'
import LoginForm from '../../components/loginForm/LoginForm'


export default class UserLoginPage extends React.Component {
    
    static defaultProps ={
        location : {},
        history : {
            push : () => {},
        }
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
      }

    render(){
        return(
            <section>
                <h2>Login</h2>
                <LoginForm
                loginSuccess={this.handleLoginSuccess}/>
            </section>
        )
    }
}