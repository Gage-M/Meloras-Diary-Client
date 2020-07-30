import config from '../../config'
//import TokenService from '../TokenService'

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

const CharacterInfoApiCalls ={
    getAllCharacters() {
        return fetch(`${config.API_ENDPOINT}/character`)
        .then(res => (!res.ok) 
        ?res.json().then(e=> Promise.reject(e))
        :res.json() 
        )
    },
    
    characterCreation(newCharacter, player_id){
        if(!player_id){player_id = 1}/*<=safety Net for now, delete later */
    return fetch(`${config.API_ENDPOINT}/character/`,{
        method: 'POST',
        headers:{
            'content-type': 'application-json',
        },
        body : JSON.stringify({
            player_id : player_id,
            newCharacter ,
        })
    })        
    },

    getCharacter(character_id){
        return fetch(`${config.API_ENDPOINT}/character/${character_id}`)
        .then(res => (!res.ok)
            ?res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    
    characterUpdate(character_id, updateContent){
        return fetch(`${config.API_ENDPOINT}/character/${character_id}`)
    },

    characterDelete(character_id){
        return fetch(`${config.API_ENDPOINT}/character/${character_id}`)
    }

}

export default CharacterInfoApiCalls 