import config from '../../config';
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
const UserApiCalls ={
    /*for Admin use only*/
    getAllUser(){  
        return fetch(`${config.API_ENDPOINT}/user`)
            .then(res => 
                (res.ok)
                ?  res.json().them(e=> Promise.reject(e))
                :  res.json()
                )
    },
    getUserById(user_id){
        return fetch(`${config.API_ENDPOINT}/user/${user_id}`)
            .then(res => 
                (!res.ok)
                ? res.json().then(e=> Promise.reject(e))
                : res.json()
                )
    },
    createNewUser(newUser){
        return fetch(`${config.API_ENDPOINT}/user`,{
            method : 'POST',
            headers: {
                'authorization' : `basic ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body : JSON.stringify(newUser)
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json
            )
    },
    updateUserInfo(user_id, updateContent){

    },
    deleteUser(user_id){
        return fetch(`${config.API_ENDPOINT}/user`,{
            'authorization' : `basic ${TokenService.getAuthToken()}`,
            method : 'DELETE'
        })
    }
}

export default UserApiCalls