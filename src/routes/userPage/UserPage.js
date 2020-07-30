import React from 'react';
import {Link} from 'react-router-dom';



export default function UserPage(props){
    
const { character_info, user_info } = props;

    // for(let [key, prop] of Object.entries({ character_info})){
    //     if(!prop){
    //          key = ' '; 
    //     }
    // }

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
                    <div className='table__header'>
                        <div className='info_cap character_name'><p>Character name</p></div>
                        <div className='info_cap background'><p>Background</p></div>
                        <div className='info_cap race'><p>Race</p></div>
                        <div className='info_cap alignment'><p>Alignment</p></div>
                    </div>
                    {/* character_info.map(char => {
                        <CharacterShortContent
                            character={char}
                        /> 
                    })*/}
                </div>
            </div>

        )
}