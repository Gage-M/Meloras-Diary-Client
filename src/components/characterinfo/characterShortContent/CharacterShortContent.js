import React from 'react';

export default function CharacterShortContent(props){

        const { character } = props
        return (
            <div 
            key={`character-${character.id}`}
            className='table__row'>
                <div className='row__wrapper'>

                </div>
        <div className='row-content character_name'><p>{character.character_name}</p></div>
                <div className='row-content background'><p>{character.background}</p></div>
                <div className='row-content race'><p>{character.race}</p></div>
                <div className='row-content alignment'><p>{character.alignment}</p></div>
            </div>
        )
    

}