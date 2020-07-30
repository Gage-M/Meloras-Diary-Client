import config from '../../config';
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

    },
    updateUserInfo(user_id, updateContent){

    },
    deleteUser(user_id){

    }
}

export default UserApiCalls