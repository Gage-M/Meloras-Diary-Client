import React from 'react'
import UserPageContext from '../../context/userContext/userContext'
import characterInfoApiCalls from '../../services/api-calls/character-info-api-calls'
import CharacterMainContent from '../../components/characterinfo/characterMainContent/CharacterMainContent'
import './charactersDisplayPage.css'

export default  class CharacterDisplayPage extends React.Component {

    static defaultProps = {
        match : { params : {}}
    }

    static contextType = UserPageContext

    componentDidMount(){
        const { char_id } = this.props.match.params
        this.context.clearError()
        characterInfoApiCalls.getCharacter(char_id)
            .then(this.context.setCharacterInfo)
            .catch(this.context.setError)
    }

    componentWillUnmount(){
        this.context.clearCharacterInfo()
    }

    render(){
        const { characterInfo } = this.context 
        return(
            <section>
                <h3> character details </h3>
                <CharacterMainContent
                    character = {characterInfo}
                />
            </section>
        )
    }
}