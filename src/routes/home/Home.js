import React from 'react'
import { Link } from 'react-router-dom'
import CharacterShortContent from '../../components/characterinfo/characterShortContent/CharacterShortContent'
import UserPageContext from '../../context/userContext/userContext'
import characterInfoApiCalls from '../../services/api-calls/character-info-api-calls'
import TableHeader from '../../components/tableHeader/TableHeader'
// import areYouWinning from '../../components/utility/are-you-winning-son'
import './home.css'


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
                    <p>Welcome to Meloras Diary, a free to use NPC management system for the popular tabletop role playing game called Dungeons and Dragons. This app will help the Game Master keep track of any homebrewed characters for whatever campaign they are running. When it’s for a small group of friends or that for a larger group, that might be sharing their adventure on a PodCast. 
                    </p>
                    <p>
                        Just logon and you should be ready to start making some characters, 
                        Feel free to borrow/ browse any of the characters that other users might have made below. 
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