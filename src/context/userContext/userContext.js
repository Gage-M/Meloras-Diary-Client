import React from 'react';

const UserPageContext = React.createContext({
    userInfo : {},
    characterList : [],
    error : null,
    setError : ()=>{},
    clearError: ()=>{},
    setCharacterList:()=>{}, 
})

export default UserPageContext

export class UserPageProvider extends React.Component {
    state = {
        userInfo : {},
        characterList : [],
        error : null,
    };

    setUserInfo = userInfo => this.setState( { userInfo } )

    setCharacterList = characterList => this.setState({characterList})

    clearCharterList = () => this.setState({ characterList : [] })

    setError = error =>  this.setState({error})

    clearError = () => this.setState( {error:null} )

    render(){
        const value = {
            userInfo : this.state.userInfo,
            characterList : this.state.characterList,
            error : this.state.error,
            setError : this.setError,
            setUserInfo : this.setUserInfo, 
            setCharacterList : this.setCharacterList,
            clearError : this.clearError
        }
        return(
            <UserPageContext.Provider value={value}>
                {this.props.children}
            </UserPageContext.Provider>
        )

    }

}