import React from 'react';
import {Link} from 'react-router-dom';
import UserPageContext from '../../context/userContext';
import UserApiCalls from '../../services/api-calls/user-api-calls';
import TableHeader from '../../components/tableHeader/TableHeader';




export default class UserPage extends React.Component{

    // for(let [key, prop] of Object.entries({ character_info})){
    //     if(!prop){
    //          key = ' '; 
    //     }
    // }

    static defaultProps ={
        match : {params : {} },
    }

    static contextType = UserPageContext;

    componentDidMount(){
        const { user_id } = this.props.match.params
        this.context.clearError()
        UserApiCalls.getUserById(user_id)
            .then(this.context.setUserInfo)
            .catch(this.context.error)

    }

    render() {
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
                    {/* character_info.map(char => {
                        <CharacterShortContent
                            character={char}
                        /> 
                    })*/}
                </div>
            </div>

        )
    }

        
}