import React from 'react'

export default class CharacterMainContent extends React.Component {
    static defaultProps = {
        character : {
            player_id : 0 ,
            character_name : null,
            race : null ,
            background : null,
            alignment : null,
            gender: null,
            personality_traits : null ,
            ideals : null ,
            fears : null ,
            notes : null
        }
    }

    renderCharacter(){
        const { character } = this.props
        return (
            <>
                <h4>{character.character_name}</h4>
                <div className='char_background'>
                    <div className='race_dis details'>
                        <span className='char_per_details'>Race - </span><span>{character.race}</span>
                    </div>
                    <div className='background_dis details'>
                        <span className='char_per_details'>Background/Role - </span><span>{character.background}</span>
                    </div>
                    <div className='alignment_dis details'>
                        <span className='char_per_details'>Alignment - </span><span>{character.alignment}</span> 
                    </div>
                    <div className='gender_dis details'>
                        <span className='char_per_details'>Gender - </span><span>{character.gender}</span> 
                    </div>
                </div>
                <div className='char_personality'>
                    <div className='personality_traits_dis details'>
                        <span className='char_per_details'>Personality Traits - </span><p>{character.personality_traits}</p>
                    </div>
                    <div className='ideals_dis details'>
                        <span className='char_per_details'>Ideals - </span><p>{character.ideals}</p>
                    </div>
                    <div className='fears_dis details'>
                        <span className='char_per_details'>fears - </span><p>{character.fears}</p>
                    </div>
                    <div className='notes_dis details'>
                        <span className='char_per_details'>Notes - </span><p>{character.notes}</p>
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