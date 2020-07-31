import React from 'react'
import CharacterShortContent from '../../components/characterinfo/characterShortContent/CharacterShortContent'
import UserPageContext from '../../context/userContext/userContext'
// import UserApiCalls from '../../services/api-calls/user-api-calls'
import CharacterInfoApiCalls from '../../services/api-calls/character-info-api-calls'
import TableHeader from '../../components/tableHeader/TableHeader'

export default class Home extends React.Component {

    static defaultProps = {
        match : { params : {} } 
    } 

    static contextType = UserPageContext

    componentDidMount(){
        this.context.clearError()
        CharacterInfoApiCalls.getAllCharacters()
        .then(i => this.context.setCharacterList(i))
        .catch(this.context.setError)
    }

    componentWillUnmount(){
        this.context.clearCharterList()
    }

    renderCharterList(){
        
        const { characterList = [] } = this.context
        return characterList.map( char => 
            <CharacterShortContent
                key={char.id}
                character={char}
            />
            )
    }

    render(){
        console.log(this.context)
        return (
            <div className='home__wrapper'>
                <div class="introduction">
                    <p>{"Hello and welcome to Meloras Diary, a free to use, simple(as it can get) Character creation / management system for popular tabletop RPG game Dungeons & Dragons *5th edition."}
                    </p>
                </div>
                <div className='character__table'>
                    <TableHeader/>
                    {this.renderCharterList()}
                </div>
            </div>
        )
    }


    
}