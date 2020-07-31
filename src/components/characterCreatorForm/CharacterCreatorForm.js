import React from 'react';
import { Input, Button, Required, Option } from '../utility/utility'
import characterInfoApiCall from  '../../services/api-calls/character-info-api-calls'
import TokenService from '../../services/TokenService';



export default class CharacterCreatorForm extends React.Component {

    // static defaultProps = {
    //     onCreateSuccess: () => {}
    // }

    state = { error : null}

    

    handleCharacterCreateSubmit = ev => {
        ev.preventDefault()
        const { character_name,
                race,
                background,
                alignment,
                personality_traits,
                ideals,
                bonds,
                flaws } = ev.target

        const charInfo = {character_name: character_name.value,
                        race : race.value,
                        background : background.value ,
                        alignment : alignment.value ,
                        personality_traits : personality_traits.value ,
                        ideals : ideals.value ,
                        bonds : bonds.value ,
                        flaws :  flaws.value}

                        

        const { player_id } = TokenService.hasAuthToken()
            ? ''    /*REEEE how the hell do i get User_id if there logged in *sobs* */
            : 1 

        characterInfoApiCall.CharacterCreator( charInfo ,player_id)
            .then(this.context.addCharacter)
            .then(() => {
                character_name.value=''
                race.value=''
                background.value=''
                alignment.value=''
                personality_traits.value=''
                ideals.value=''
                bonds.value=''
                flaws.value=''
            })
            .catch(this.context.setError);
            
    
    }

    renderOptions(){
        const alignmentOptions = ['Lawful-Good','Neutral-Good','Chaotic-Good','Lawful-Neutral','Neutral','Chaotic-Neutral','Lawful-Evil','Neutral-Evil','Chaotic-Evil',]
        return alignmentOptions.map(ali => {
           return(
               <Option
                name={ali}
                value={ali}>
            {`${ali}`}
            </Option>
           ) 
        })
    }

    render(){
        const { error } = this.state
        return (
        <form
        className='Character__Form'
        onSubmit={this.handleCharacterCreateSubmit}>
            <div role='alert'>
                {error && <p className='error'>{error}</p>}
            </div>
            <div className='character_name'>
                <label htmlFor='char_name'> Character Name</label>
                <Input
                name='character_name'
                type='text'
                required
                id='char_name'>
                </Input>
            </div>
            <div className='race'>
                <label></label>
                <Input
                name='race'
                type='text'
                required>
                </Input>
            </div>
            <div className='background'>
                <label></label>
                <Input
                name='background'
                type='text'
                required>
                </Input>
            </div>
            <div className='alignment'>
                <label htmlFor='alignment'>Alignment</label>
                <select
                name='alignment' 
                 id='alignment'>
                    {this.renderOptions()}
                </select>
            </div>
            <div className='personality_traits'>
                <label htmlFor='personality__traits'></label>
                <Input
                name='personality_traits'
                type='text'
                id='personality__traits'
                required>
                </Input>
            </div>
            <div className='ideals'>
                <label htmlFor='ideal'></label>
                <Input
                name='ideals'
                type='text'
                id='ideal'
                required>
                </Input>
            </div>
            <div className='bonds'>
                <label htmlFor='bond'>Bond</label>
                <Input
                name='bonds'
                type='text'
                id='bond'
                required>
                </Input>
            </div>
            <div className='flaws'>
                <label htmlFor='flaw'>Flaw</label>
                <Input
                name='flaws'
                type='text'
                id='flaw'
                required>
                </Input>
            </div>
            <Button type='submit'>
                Create & Save
            </Button>
        </form>
        )
    }
}