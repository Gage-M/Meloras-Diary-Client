import React from 'react';
import { Input, Button, Option, Textarea } from '../utility/utility'
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
        return alignmentOptions.map( (ali , i) => {
           return( 
               <Option
                    key={i}
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
            <div className='form_wrap'>
                <div className='character__gist form'>
                    <div className=' p_an_b_form character_name_form '>
                        <label htmlFor='char_name'> Character Name</label>
                        <Input
                        name='character_name'
                        type='text'
                        required
                        id='char_name'>
                        </Input>
                    </div>
                    <div className=' p_an_b_form race_form'>
                        <label htmlFor='race_field_form'> Race </label>
                        <Input
                        name='race'
                        type='text'
                        id='race_field'
                        required>
                        </Input>
                    </div>
                    <div className=' p_an_b_form background_form'>
                        <label htmlFor='background_field'> Background </label>
                        <Input
                        name='background'
                        type='text'
                        id='background_field'
                        required>
                        </Input>
                    </div>
                    <div className=' p_an_b_form alignment_form'>
                        <label htmlFor='alignment'>Alignment</label>
                        <select
                        name='alignment' 
                         id='alignment'>
                            {this.renderOptions()}
                        </select>
                    </div>
                </div>
                <div className='personality_wrapper form'>
                    <div className='p_an_b_form personality_traits_form '>
                        <label htmlFor='personality__traits'>Personality Traits</label>
                        <Textarea
                        className='personality_form'
                        name='personality_traits'
                        type='text'
                        id='personality__traits'
                        required>
                        </Textarea>
                    </div>
                    <div className='p_an_b_form ideals_form '>
                        <label htmlFor='ideal'> Ideals </label>
                        <Textarea
                        className='personality_form'
                        name='ideals'
                        type='text'
                        id='ideal'
                        required>
                        </Textarea>
                    </div>
                    <div className='p_an_b_form bonds_form '>
                        <label htmlFor='bond'> Bond </label>
                        <Textarea
                        className='personality_form'
                        name='bonds'
                        type='text'
                        id='bond'
                        required>
                        </Textarea>
                    </div>
                    <div className='p_an_b_form flaws_form'>
                        <label htmlFor='flaw'> Flaw </label>
                        <Textarea
                        className='personality_form'
                        name='flaws'
                        type='text'
                        id='flaw'
                        required>
                        </Textarea>
                    </div>
                </div>
            </div>
            <Button type='submit'>
                Create & Save
            </Button>
        </form>
        )
    }
}