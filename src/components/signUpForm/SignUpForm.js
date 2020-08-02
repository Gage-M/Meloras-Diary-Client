import React from 'react';
import {Input, Button} from '../utility/utility'
import ApiService from '../../services/api-calls/user-api-calls' 

export default class SignUpForm extends React.Component{

    static defaultProps = {
        createUserSuccess : () => {} 
    }

    state = { error : null }

    handleSubmitBasicAuth = ev=> {
        ev.preventDefault()
        const {user_name, password , irl_name} = ev.target
        this.setState({error : null})
        ApiService.createNewUser({
            user_name : user_name.value,
            password : password.value,
            irl_name : irl_name.value
        })
        .then(user => {
            irl_name.value=''
            user_name.value = ''
            password.value = ''
            this.props.registrationSuccess()
        })
        .catch(res => {
            this.setState({error: res.error})
        })
            
            
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
                <div className='irl_name'>
                    <label htmlFor='irl_name'>
                        Real Name
                    </label>
                    <Input
                    name='real-name'
                    type='text'
                    id='irl_name'>
                    </Input>
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
                <div className='password_again'>
                    <label htmlFor='LoginForm_password_again'>
                        Password Check
                    </label>
                    <Input
                        name='password_again'
                        type='password_again'
                        id='LoginForm_password_again'>
                    </Input>
                </div>
                <Button type='submit'>
                    Login
                </Button>
            </form>
        )
    }
}