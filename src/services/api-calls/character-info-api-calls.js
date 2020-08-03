import config from '../../config'
import TokenService from '../TokenService'

/*
/==============================================================/
vvvv for auth when TokenService is up and running vvvvvvvvvvvv
,{
            headers : {
                'authorization' : `basic ${TokenService.getAuthToken()}`,
            },
        }
/=============================================================/        
*/

const characterInfoApiCalls ={
    getAllCharacters() {
        return fetch(`${config.API_ENDPOINT}character`,{
            headers : {
                'authorization' : `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => (!res.ok) 
        ?res.json().then(e=> Promise.reject(e))
        :res.json() 
        )
    },
    getAllCharactersOfUser(user_id)  {
        return fetch(`${config.API_ENDPOINT}${user_id}/character`,{
            headers : {
                'authorization' : `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => (!res.ok)
        ?res.json().then(e=> Promise.reject(e))
        :res.json()
        )
    },
    
    characterCreation(newCharacter){
    return fetch(`${config.API_ENDPOINT}character/`,{
        method: 'POST',
        headers:{
            'authorization' : `basic ${TokenService.getAuthToken()}`,
            'content-type': 'application/json',
        },
        body : JSON.stringify({newCharacter})
    })        
    },

    getCharacter(character_id){
        return fetch(`${config.API_ENDPOINT}character/${character_id}`,{
            headers : {
                'authorization' : `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    
    characterUpdate(character_id, updateContent){
        return fetch(`${config.API_ENDPOINT}character/${character_id}`,{
            headers : {
                'authorization' : `basic ${TokenService.getAuthToken()}`,
            },
        })
    },

    characterDelete(character_id){
        return fetch(`${config.API_ENDPOINT}character/${character_id}`,{
            headers : {
                'authorization' : `basic ${TokenService.getAuthToken()}`,
            },
        })
    }

}

export default characterInfoApiCalls 