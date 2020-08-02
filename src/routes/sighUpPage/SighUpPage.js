import React from 'react'
import SignUpForm from '../../components/signUpForm/SignUpForm'


export default class SighUpPage extends React.Component {
    static defaultProps = {
        history : {
            push : () => {}
        },
    }

    handleRegistrationSuccess = user =>{
        const { history } = this.props
        history.push('/login')
    } 

    render(){
        return(
            <div className='SighUpPage'>
                <h2>Sign up </h2>
                <SignUpForm
                registrationSuccess={this.handleRegistrationSuccess}
                />
            </div>
        )
    }
}