import React from 'react';
import {fetchPersonData} from'./service/swapi';
import Grid from './components/grid/grid';

const columns = [{columnHeader: 'Name', columnField:'name'}, 
                 {columnHeader: 'Birth Year', columnField:'birth_year'},
                 {columnHeader: 'Hair Color', columnField:'hair_color'},
                 {columnHeader: 'Height', columnField:'height'},
                 {columnHeader: 'Eye Color', columnField:'eye_color'},
                 {columnHeader: 'Skin Color', columnField:'skin_color'},
                ]

function App() {
  return (
    <div className="mt-2">
      <h1 className="text-center">Star Wars Characters</h1>
      <Grid dataHandler={fetchPersonData}
            paginationParam={'page'}
            searchParam={'search'}
            columns={columns}
      />
    </div>
  );
}

export default App;
