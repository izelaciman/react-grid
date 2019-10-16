
## Why React.js ?

Firstly using create react app, react gives a quick bootstrap project to instantly start developing and prototyping projects. Major reason grid/pagination easly could be component which can be used across all projects. It is a good practive where we can create multiple components and use seperation of conncerns. Also in this example I used state lift up patterm to share data across different components.
Pagination, table, and search dumb components are sharing same state through props controlled by the Grid smart controller/Component where all the child componets come together. For the sake of displaying javascript usage skill, I have implemented all the grid from ground, otherwise react has many different grid component libraries for usage. 

## Why Bootstrap ?
I used traditional bootstrap package for the styling, there is also react based bootstrap library, where components are react components. I thought displaying little bit of css usage would be nicer.  for this example Bootstrap has all the styles needed paginationn, table and form controls therefore I didn't have to write any css. If you would like to see more css I would be happy to discuss during the interview as well I normally use sass :)

## Known issues
Search could be implemented 2 ways with button click and user typing the input box, I chose input typing method, this can be api costly but I prevent that with cancelling in progress ajax requests.  
Fixed typing search issues with cancelling axios request if any request is in process.  
During development, I noticed swapi api sometimes responds really slowly, this has nothing to do with application's performance, You can double check it with browser's network tab if api request is pending or not. It can go up 30 secs sometimes, I believe this is because it's a free api. Also you can track cancelled requests from console.log.
Currently only one search field is supported.

## Example usage of Grid Component 

```
// Final component and usage
<Grid dataHandler={fetchPersonData}
      paginationParam={'page'}
      searchParam={'search'}
      columns={columns}
/>
```


## Component Props

**dataHandler:** function type which expects two parameters parameters
params: for query building if static data is used it can be ignored, it's optional.
setStateCallBack: this is a callback function where grid state is updated expects data.
data structure should be a json object containinng results and total count {data: {}, count:10}  

```
function fetchPersonData(params, setStateCallBack) {
    //Build api query parameters with params parameter.
    const querystring = new URLSearchParams(params);
    return axios.get(`https://swapi.co/api/people/?${querystring.toString()}`, {
      cancelToken: new CancelToken(function executor(c) { cancel = c})
    }).then((res) => {
        // This is a callback function from grid component to update the state.
        setStateCallBack(res.data);
    }).catch((thrown) => {
        console.log('Request error', thrown.message);
    });
}
```

**columns:** Column fieldnames and header label mapping for diffrent scenerios.  

```
const columnMapping = [{columnHeader: 'Name', columnField:'name'}, 
                 {columnHeader: 'Birth Year', columnField:'birth_year'},
                 {columnHeader: 'Hair Color', columnField:'hair_color'},
                 {columnHeader: 'Height', columnField:'height'},
                 {columnHeader: 'Eye Color', columnField:'eye_color'},
                 {columnHeader: 'Skin Color', columnField:'skin_color'}];
```

**paginationParam:** Matching name of the api query parameter for pagination, it can be customized for different api end points. 
   
**searchParam:** Matching name of the api query parameter for search, it can be customized for different api end points.  


## Available Scripts

In the project directory, you can run:

### `yarn`

Run yarn command to install dependencies.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
