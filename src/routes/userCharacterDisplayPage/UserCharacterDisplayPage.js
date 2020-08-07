import React from 'react'
import UserPageContext from '../../context/userContext/userContext'
import characterInfoApiCalls from '../../services/api-calls/character-info-api-calls'
import CharacterMainContent from '../../components/characterinfo/characterMainContent/CharacterMainContent'
// import { Link } from 'react-router-dom'
import { Button } from '../../components/utility/utility'


export default  class CharacterDisplayPage extends React.Component {

    static defaultProps = {
        match : { params : {}},
        history : {
            goBack : () => {}
        }
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

    handelDelete = () =>{
        const { char_id } = this.props.match.params
        characterInfoApiCalls.characterDelete(char_id)
            .catch(this.context.setError);
        characterInfoApiCalls.getAllCharacters(char_id)
            .then(this.context.setCharacterInfo)
            .catch(this.context.setError)
            this.props.history.goBack();
    }


    handelBackUp = () => {
        this.props.history.goBack();
    }

    render(){
        const { characterInfo } = this.context 
        return(
            <section>
                <h3> character details </h3>
                <CharacterMainContent
                    character = {characterInfo}
                />
                <Button
                onClick={this.handelDelete}
                >Delete</Button>
                <Button onClick={this.handelBackUp}>
                    back
                </Button>
            </section>
        )
    }
}