import React from 'react';


export const nullCharacter ={
    player_id : 0 ,
    character_name : null,
    race : null ,
    background : null,
    alignment : null,
    personality_traits : null ,
    ideals : null ,
    bonds : null ,
    flaws : null 
 }

const UserPageContext = React.createContext({
    characterInfo : nullCharacter,
    userInfo : {},
    characterList : [],
    error : null,
    isLoggedIn:  false,
    setError : ()=>{},
    clearError: ()=>{},
    clearCharacterInfo: ()=> {},
    setCharacterList:()=>{},
    addCharacter: () => {}, 
    setIsLoggedIn: () => {}
})

export default UserPageContext

export class UserPageProvider extends React.Component {
    state = {
        characterInfo : nullCharacter,
        userInfo : {},
        characterList : [],
        error : null,
    };

    setCharacterInfo = characterInfo => this.setState({characterInfo})

    setUserInfo = userInfo => this.setState( { userInfo } )

    setCharacterList = characterList => this.setState({characterList})

    addCharacter = character => this.setCharacterList([...this.state.characterList , character])

    clearCharacterInfo = () => this.setCharacterInfo(nullCharacter)

    clearCharterList = () => this.setState({ characterList : [] })

    setError = error =>  this.setState({error})

    clearError = () => this.setState( {error:null} )

    setIsLoggedIn = isLoggedIn => this.setState({ isLoggedIn })

    render(){
        const value = {
            isLoggedIn : this.state.isLoggedIn,
            characterInfo: this.state.characterInfo, 
            userInfo : this.state.userInfo,
            characterList : this.state.characterList,
            error : this.state.error,
            setIsLoggedIn : this.setIsLoggedIn,
            setError : this.setError,
            setUserInfo : this.setUserInfo,
            setCharacterInfo : this.setCharacterInfo,  
            setCharacterList : this.setCharacterList,
            addCharacter : this.addCharacter,
            clearCharacterInfo : this.clearCharacterInfo,
            clearCharterList: this.clearCharterList, 
            clearError : this.clearError
        }
        return(
            <UserPageContext.Provider value={value}>
                {this.props.children}
            </UserPageContext.Provider>
        )

    }

}