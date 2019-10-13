import React from 'react';
import Grid from './components/grid/grid';

function fetchAll() {
    return fetch('https://swapi.co/api/people/').then((res) => res.json());
}
function searchByName(name) {
  return fetch(`https://swapi.co/api/people/?search=${name}`).then((res) => res.json());
}
function paginationHandler(params) {
  const querystring = new URLSearchParams(params);
  return fetch(`https://swapi.co/api/people/?${querystring}`).then((res) => res.json());
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
      <Grid dataHandler={fetchAll} 
            searchHandler={searchByName}
            paginationHandler={paginationHandler}
            columns={columns}
      />
    </div>
  );
}

export default App;
