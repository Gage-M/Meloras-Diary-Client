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
                    <div className='race_dis details'>
                        <span>Race - </span><span>{character.race}</span>
                    </div>
                    <div className='background_dis details'>
                        <span>Background - </span><span>{character.background}</span>
                    </div>
                    <div className='alignment_dis details'>
                        <span>Alignment - </span><span>{character.alignment}</span> 
                    </div>
                </div>
                <div className='char_personality'>
                    <div className='personality_traits_dis details'>
                        <span>Personality Traits - </span><p>{character.personality_traits}</p>
                    </div>
                    <div className='ideals_dis details'>
                        <span>Ideals - </span><p>{character.ideals}</p>
                    </div>
                    <div className='bonds_dis details'>
                        <span>Bonds - </span><p>{character.bonds}</p>
                    </div>
                    <div className='flaws_dis details'>
                        <span>Flaws - </span><p>{character.flaws}</p>
                    </div>
                
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