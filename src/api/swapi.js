import axios from 'axios';
const CancelToken = axios.CancelToken;
let cancel;

function fetchPersonData(params) {
    if(cancel !== undefined) {
      cancel('request cancelled');
    }
    const querystring = new URLSearchParams(params);
    console.log(querystring.toString());
    return axios.get(`https://swapi.co/api/people/?${querystring.toString()}`, {
      cancelToken: new CancelToken(function executor(c) { cancel = c})
    });
}

export {fetchPersonData};