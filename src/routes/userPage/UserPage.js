import React from 'react';
import { Link } from 'react-router-dom';
import UserPageContext from '../../context/userContext/userContext';
import UserApiCalls from '../../services/api-calls/user-api-calls';
import characterInfoApiCalls from '../../services/api-calls/character-info-api-calls';
import TableHeader from '../../components/tableHeader/TableHeader';
import CharacterShortContent from '../../components/characterinfo/characterShortContent/CharacterShortContent'



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
            .then(this.context.setCharterList) 
    }

    renderUsersCharterList(){
        const {characterList = []} = this.context
        return characterList.map( char => 
            <Link
            to={`character/${char.id}`}>
            <CharacterShortContent
                key={char.id}
                character = {char}
            />
            </Link>
        ) 
    }

    render() {
        const { userInfo } = this.context
        const  {user_name, date_created }= userInfo
        return(
            <div className='user__page'>
                <div className="user__info_wrapper">
                    <img 
                    src='img/test-pfp.jpg' 
                    alt={user_name}/>
                    <span className='user__name'>{user_name}</span>
                <span className='users__start__date'>{date_created}</span>
                <span className='proffered__class'>{'*add column for this....lol sigh*'}</span>    
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