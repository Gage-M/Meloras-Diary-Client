import React from 'react';
import CharacterCreatorForm from '../../components/characterCreatorForm/CharacterCreatorForm'
import './characterCreatePage.css'
export default class CharacterCreatePage extends React.Component {
        static defaultProps = {
            location : {},
            history : {
                push : () => {}
            }
        }

        render () {

            return(
                <section className='character_creator'>
                    <h2>Character creator</h2>
                    <CharacterCreatorForm
                    props = {this.props}
                    />
                </section>
            )
        }
}