import React from 'react'
import UserPageContext from '../../context/userContext/userContext'
import CharacterInfoApiCalls from '../../services/api-calls/character-info-api-calls'


export default  class CharacterDisplayPage extends React.Component {

    static defaultProps = {
        match : { params : {}}
    }

    static contextType = UserPageContext

    componentDidMount(){
        const { char_id } = this.props.match.params
        this.context.clearError()
        CharacterInfoApiCalls.getCharacter(char_id)
            .then(this.context.setCharacter)
            .catch(this.context.setError)
    }

    render(){
        return(
<></>
        )
    }
}