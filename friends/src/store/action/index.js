import axios from 'axios';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';

const url = 'http://localhost:5000';

export const getFriends=() => dispatch => { //
    return axios.get(`${url}/api/friends`)
    .then(res => {
        dispatch({type: FETCH_FRIENDS, payload: res.data}); 
    })
    .catch(err => {
        console.log(err);
    }) 
} 

export const addFriend=(friend) => dispatch => {
    return axios.post(`${url}/api/friends/`, friend)
    .then(res => {
        dispatch({type: ADD_FRIEND, payload: res.data});
    })
    .catch(err => {
        console.log(err);
    })
}