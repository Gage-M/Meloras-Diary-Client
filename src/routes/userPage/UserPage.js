import React from 'react';
import { Link } from 'react-router-dom';
import UserPageContext from '../../context/userContext';
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
        const { characterList } = this.context
        return(
            <div className='user__page'>
                <div className="user__info_wrapper">
                    {/* <img 
                    src='' 
                    alt={user_name}/> */}
                    <span className='user__name'>{/*user_info.user_name */ '[user_name here]' }</span>
                <span className='users__start__date'>{/*user_info.date_created*/ ' [start date here]'}</span>
                <span className='proffered__class'>{/*would need DB update[again] for user_info.pro_class */ '[user\'s proffered class]'}</span>    
                </div>
                <div className="users_chars">
                    <TableHeader/>
                    {this.renderUsersCharterList()}
                </div>
            </div>

        )
    }

        
}