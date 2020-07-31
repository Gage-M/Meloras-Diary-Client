import React from 'react';
import CharacterCreatorForm from '../../components/characterCreatorForm/CharacterCreatorForm'

export default class CharacterCreatePage extends React.Component {
        static defaultProps = {
            location : {},
            history : {
                push : () => {}
            }
        }

        handleCharacterCreation = ev =>{
            
        }

        render () {
            return(
                <section className='character_creator'>
                    <h2>Character creator</h2>
                    <CharacterCreatorForm/>
                </section>
            )
        }
}