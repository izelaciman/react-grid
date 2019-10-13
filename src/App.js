import React from 'react';
import Grid from './components/grid/grid';

function fetchData(params) {
  const querystring = new URLSearchParams(params);
  console.log(querystring.toString());
  return fetch(`https://swapi.co/api/people/?${querystring.toString()}`).then((res) => res.json());
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
