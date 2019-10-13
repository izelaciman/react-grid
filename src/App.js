import React from 'react';
import axios from 'axios';
import Grid from './components/grid/grid';

const CancelToken = axios.CancelToken;
let cancel;

function fetchData(params) {
  if(cancel !== undefined) {
    cancel('request cancelled');
  }
  const querystring = new URLSearchParams(params);
  console.log(querystring.toString());
  return axios.get(`https://swapi.co/api/people/?${querystring.toString()}`, {
    cancelToken: new CancelToken(function executor(c) { cancel = c})
  });
}

const columns = [{columnHeader: 'Name', columnField:'name'}, 
                 {columnHeader: 'Hair Color', columnField:'hair_color'},
                 {columnHeader: 'Birth Year', columnField:'birth_year'},
                 {columnHeader: 'Height', columnField:'height'},
                 {columnHeader: 'Eye Color', columnField:'eye_color'},
                 {columnHeader: 'Skin Color', columnField:'skin_color'},
                ]

function App() {
  return (
    <div className="mt-5">
      <Grid dataHandler={fetchData}
            paginationParam={'page'}
            searchParam={'search'}
            columns={columns}
      />
    </div>
  );
}

export default App;
