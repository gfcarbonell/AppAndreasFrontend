import axios from 'axios';
import {sessionService} from 'redux-react-session';
export const URL = 'http://127.0.0.1:8000';
export const API = 'api/v1';

export function login (user, history) {
    return (dispatch) => {
        //Begin Request
        dispatch({type: 'FETCH_LOGIN_REQUEST'});
        return axios
            .post(`${URL}/api-token-auth/`, user, {
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                }
            })  
            .then((response)=>{
                const token = response.data;
                sessionService.saveSession({ token })
                .then(() => {
                    sessionService.saveUser(response.data)
                    .then(() => {
                        history.push('/main-menu');
                        dispatch({type: 'FETCH_SESSION', loading:false}); 
                    })
                    .catch(err => console.error(err));
                }).catch(err => console.error(err));
            }).catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'FETCH_LOGIN_ERROR', error:newError});
                } 
            });
    };
}

export function logout (history){
    return (dispatch) => {
        return new Promise(resolve => {
            console.log('Logout!')
            sessionService.deleteSession();
            sessionService.deleteUser();
            
        }).catch(err => {
            throw (err);
        });
    };
};
