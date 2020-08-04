import React from 'react'

export default class CharacterMainContent extends React.Component {
    static defaultProps = {
        character : {
            player_id : 0 ,
            character_name : null,
            race : null ,
            background : null,
            alignment : null,
            personality_traits : null ,
            ideals : null ,
            bonds : null ,
            flaws : null
        }
    }

    renderCharacter(){
        const { character } = this.props
        return (
            <>
                <h4>{character.character_name}</h4>
                <div className='char_background'>
                    <span>{character.race}</span><span>{character.background}</span>
                    <p>{character.alignment}</p> 
                </div>
                <div className='char_personality'>
                    <span>Personality Traits - </span><p>{character.personality_traits}</p>
                    <span>Ideals - </span><p>{character.ideals}</p>
                    <span>Bonds - </span><p>{character.bonds}</p>
                    <span>Flaws - </span><p>{character.flaws}</p>
                </div>
            </>
        )
    }

    render(){
        return(
            <div className="Character_full">
                {this.renderCharacter()}
            </div>
        )
    }
}