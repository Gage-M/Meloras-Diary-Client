import React from 'react';
import {Input, Button} from '../utility/utility'
import TokenService from '../../services/TokenService'

export default class LoginForm extends React.Component{

    static defaultProps = {
        LoginSuccess : () => {} 
    }

    state = { error : null }

    handleSubmitBasicAuth = ev=> {
        ev.preventDefault()
        const {user_name, password } = ev.target

        TokenService.saveAuthToken(
                TokenService.makeBasicAuthToken(user_name.value, password.value)
            )

            user_name.value = ''
            password.value = ''
            this.props.LoginSuccess()
    }


    render(){
        const {error} = this.state
        return (
            <form
            className='Login_Form'
            onSubmit={this.handleSubmitBasicAuth}
            >
                <div role='alert'>
                    {error && <p className = 'error'>{error}</p> }
                </div>
                <div className='user_name'>
                    <label htmlFor='LoginForm_user_name'>
                        User Name
                    </label>
                    <Input
                        name='user_name'
                        id='LoginForm_user_name'>
                    </Input>
                </div>
                <div className='password'>
                    <label htmlFor='LoginForm_password'>
                        Password
                    </label>
                    <Input
                        name='password'
                        type='password'
                        id='LoginForm_password'>
                    </Input>
                </div>
                <Button type='submit'>
                    Login
                </Button>
            </form>
        )
    }
}