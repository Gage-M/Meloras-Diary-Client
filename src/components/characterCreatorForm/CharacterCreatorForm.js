import React from 'react';
import { Input, Button, Option } from '../utility/utility'
import characterInfoApiCalls from '../../services/api-calls/character-info-api-calls';



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

        const charInfo = {
                        character_name: character_name.value,
                        race : race.value,
                        background : background.value ,
                        alignment : alignment.value ,
                        personality_traits : personality_traits.value ,
                        ideals : ideals.value ,
                        bonds : bonds.value ,
                        flaws :  flaws.value}
                        console.log(charInfo)

                characterInfoApiCalls.characterCreation(charInfo)
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
                <label htmlFor='race_field'> Race </label>
                <Input
                name='race'
                type='text'
                id='race_field'
                required>
                </Input>
            </div>
            <div className='background'>
                <label htmlFor='background_field'> Background </label>
                <Input
                name='background'
                type='text'
                id='background_field'
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
                <label htmlFor='personality__traits'>Personality Traits</label>
                <Input
                name='personality_traits'
                type='text'
                id='personality__traits'
                required>
                </Input>
            </div>
            <div className='ideals'>
                <label htmlFor='ideal'> Ideals </label>
                <Input
                name='ideals'
                type='text'
                id='ideal'
                required>
                </Input>
            </div>
            <div className='bonds'>
                <label htmlFor='bond'> Bond </label>
                <Input
                name='bonds'
                type='text'
                id='bond'
                required>
                </Input>
            </div>
            <div className='flaws'>
                <label htmlFor='flaw'> Flaw </label>
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