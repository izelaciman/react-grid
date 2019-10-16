import axios from 'axios';
const CancelToken = axios.CancelToken;
let cancel;

async function fetchPersonData(params, setStateCallBack) {
  if(cancel !== undefined) {
    cancel('request cancelled');
  }
  const querystring = new URLSearchParams(params);
  console.log(querystring.toString());
  try {
    const res = await axios.get(`https://swapi.co/api/people/?${querystring.toString()}`, {
      cancelToken: new CancelToken(function executor(c) { cancel = c; })
    });
    setStateCallBack(res.data);
  }
  catch (thrown) {
    console.log('Request error', thrown.message);
  }
}

const columnMapping = [{columnHeader: 'Name', columnField:'name'}, 
                 {columnHeader: 'Birth Year', columnField:'birth_year'},
                 {columnHeader: 'Hair Color', columnField:'hair_color'},
                 {columnHeader: 'Height', columnField:'height'},
                 {columnHeader: 'Eye Color', columnField:'eye_color'},
                 {columnHeader: 'Skin Color', columnField:'skin_color'}];

export {fetchPersonData, columnMapping};