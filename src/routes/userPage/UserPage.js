import React from 'react';
import { Link } from 'react-router-dom';
import UserPageContext from '../../context/userContext/userContext';
import UserApiCalls from '../../services/api-calls/user-api-calls';
import characterInfoApiCalls from '../../services/api-calls/character-info-api-calls';
import TableHeader from '../../components/tableHeader/TableHeader';
import CharacterShortContent from '../../components/characterinfo/characterShortContent/CharacterShortContent'
import testpfp from '../../img/testpfp.jpg'  
import { NiceDate } from '../../components/utility/utility'



export default class UserPage extends React.Component{


    static defaultProps ={
        match : { params : {} },
    }

    static contextType = UserPageContext;

    componentDidMount(){
        const { user_id } = this.props.match.params
        this.context.clearError()
        UserApiCalls.getUserById(user_id)
            .then(this.context.setUserInfo)
            .catch(this.context.error)
        characterInfoApiCalls.getAllCharactersOfUser(user_id)
            .then(this.context.setCharacterList) 
            .catch(this.context.setError)
    }

    componentWillUnmount(){
        this.context.clearError();
        this.context.clearCharterList();
    }

    renderUsersCharterList(){
        const {characterList = []} = this.context
        return characterList.map( char => 
            <div key={char.id}>
            <Link
            to={`character/${char.id}`}>
            <CharacterShortContent
                key={char.id}
                character = {char}
            />
            </Link>
            </div>
        ) 
    }

    // formatDate = (date) => {
    //     toString(date).split(/\T/).unshift()
    // }

    render() {
        const { userInfo } = this.context
        const  {user_name, date_created }= userInfo


        return(
            <div className='user__page'>
                <div className="user__info_wrapper">
                    <img 
                    src={testpfp} 
                    alt={user_name}/>
                <div className='user__info'>
                    <div className='user__name_wrap'>
                        <span>user name - </span>
                        <span className='user__name'>{user_name}</span>
                    </div>
                    <div className='start__date_wrap'>
                        <span>date_created - </span>
                        <span className='users__start__date'>{date_created}</span>
                    </div>

                    
                </div>
                       
                </div>
                <div className="users_chars">
                    <TableHeader
                    />
                    {this.renderUsersCharterList()}
                </div>
            </div>

        )
    }

        
}