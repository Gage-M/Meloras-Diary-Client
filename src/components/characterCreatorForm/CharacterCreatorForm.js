import React from 'react';
import { Input, Button, Option, Textarea } from '../utility/utility'
import characterInfoApiCalls from '../../services/api-calls/character-info-api-calls';



export default class CharacterCreatorForm extends React.Component {

    static defaultProps = {
        onCreateSuccess: () => {},
        history : {
            goBack: () => {} 
        }
    }

    state = { error : null}

    

    handleCharacterCreateSubmit = ev => {
        ev.preventDefault()
        const { character_name,
                race,
                background,
                alignment,
                gender,
                personality_traits,
                ideals,
                fears,
                notes } = ev.target

        const charInfo = {
                        character_name: character_name.value,
                        race : race.value,
                        background : background.value ,
                        alignment : alignment.value ,
                        gender : gender.value, 
                        personality_traits : personality_traits.value ,
                        ideals : ideals.value ,
                        fears : fears.value ,
                        notes :  notes.value}

                characterInfoApiCalls.characterCreation(charInfo)
            .then(this.context.addCharacter)
            .then(() => {
                character_name.value=''
                race.value=''
                background.value=''
                alignment.value=''
                gender.value=''
                personality_traits.value=''
                ideals.value=''
                fears.value=''
                notes.value=''
            })
            .catch(this.context.setError);
            
            this.props.props.history.goBack();
    }

    renderAlignmentOptions(){
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

    renderGenderOptions(){
        const genderOptions = ['Male','Female','Other']
        return genderOptions.map( (ali , i) => {
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
                        <label htmlFor='background_field'> Background/role </label>
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
                            {this.renderAlignmentOptions()}
                        </select>
                    </div>
                    <div className=' p_an_b_form gender_form'>
                        <label htmlFor='gender'>Gender</label>
                        <select
                        name='gender' 
                         id='gender'>
                            {this.renderGenderOptions()}
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
                    <div className='p_an_b_form fears_form '>
                        <label htmlFor='bond'> Fear </label>
                        <Textarea
                        className='personality_form'
                        name='fears'
                        type='text'
                        id='bond'
                        required>
                        </Textarea>
                    </div>
                    <div className='p_an_b_form notes_form'>
                        <label htmlFor='notes'> Notes </label>
                        <Textarea
                        className='personality_form'
                        name='notes'
                        type='text'
                        id='notes'
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