import React from 'react'
import { Link } from 'react-router-dom'
import CharacterShortContent from '../../components/characterinfo/characterShortContent/CharacterShortContent'
import UserPageContext from '../../context/userContext/userContext'
import characterInfoApiCalls from '../../services/api-calls/character-info-api-calls'
import TableHeader from '../../components/tableHeader/TableHeader'
// import areYouWinning from '../../components/utility/are-you-winning-son'


export default class Home extends React.Component {

    static defaultProps = {
        match : { params : {} } 
    } 

    static contextType = UserPageContext

    componentDidMount(){
        //areYouWinning()
        this.context.clearError()
        characterInfoApiCalls.getAllCharacters()
        .then(i => this.context.setCharacterList(i))
        .catch(this.context.setError)
    }


    renderCharterList(){
        
        const { characterList = [] } = this.context
        return characterList.map( char => 
            <div className='table_row' key={char.id}>
                <Link
                to={`character/${char.id}`}>
                    <CharacterShortContent
                        key={char.id}
                        character = {char}
                    />
                </Link> 
            </div>
            
            )
    }

    render(){
        return (
            <div className='home__wrapper'>
                <div className="introduction">
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