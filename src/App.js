import React from 'react';
import {fetchPersonData, columnMapping} from'./api/swapi';
import Grid from './components/grid';


function App() {
  return (
    <div className="mt-2">
      <h1 className="text-center">Star Wars Characters</h1>
      <Grid dataHandler={fetchPersonData}
            paginationParam={'page'}
            searchParam={'search'}
            columns={columnMapping} />
    </div>
  );
}

export default App;
