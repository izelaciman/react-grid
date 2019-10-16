
## Why React.js ?

Using create react app enables a quick bootstrap project to instantly start developing and prototyping projects. Major reason grid/pagination could be a good component example which can be used across all projects. It is a good practice to use components and make sure seperation of conncerns is in place. Also in this example I used state lift up pattern to share data across different components.
Pagination, table, and search dumb components are sharing same state through props controlled by the Index smart component, this component enables all the child componets come together and share the same state. For the sake of displaying javascript skill, I have implemented all the grid from ground, otherwise react has many different grid component libraries for our disposal. 

## Why Bootstrap ?
I used traditional bootstrap package for the styling, there is also react based bootstrap library, where usage is based on react components. I thought displaying little bit of css usage would be nicer.  for this example Bootstrap had all the styles I needed such as paginationn, table and form controls therefore I didn't have to write any css. If you would like to see more css I would be happy to discuss further :)

## Example usage of Grid Component 

```
<Grid dataHandler={fetchPersonData}
      paginationParam={'page'}
      searchParam={'search'}
      columns={columns} />
```


## Component Props

**dataHandler:** Function type  
Expects two parameters.  
params: for query building if static data is used it can be ignored, it's optional.  
setStateCallBack: this is a callback function where grid state is updated expects data.  
Returned data structure should be a json object containinng results and total count.  
exampleData= {results: [{birth_year:1990,name:'luke',height:180}], count:1}  
```
function fetchPersonData(params, setStateCallBack) {
    //Build api query parameters with params.
    //Example: https://swapi.co/api/people/?page=1&search=luke
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

**columns:** Object type   
Column fieldnames and header label mapping for diffrent scenerios.  

```
const columnMapping = [{columnHeader: 'Name', columnField:'name'}, 
                 {columnHeader: 'Birth Year', columnField:'birth_year'},
                 {columnHeader: 'Hair Color', columnField:'hair_color'},
                 {columnHeader: 'Height', columnField:'height'},
                 {columnHeader: 'Eye Color', columnField:'eye_color'},
                 {columnHeader: 'Skin Color', columnField:'skin_color'}];
```

**paginationParam:** String type    
Matching name of the api query parameter for pagination, it can be customized for different api end points. 
   
**searchParam:** String type    
Matching name of the api query parameter for search, it can be customized for different api end points.  


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

## Known issues
Search could of been implemented at least 2 different ways with button click and user typing. I have chosen input typing method, This is better in terms of UX, but this can be api costly, I prevent that with cancelling in progress ajax requests.  
  
During development, I noticed swapi api sometimes responds really slowly, this has nothing to do with application's performance, You can double check it with browser's network tab if api request is pending or not. It can go up to 30 seconds sometimes, I believe this is because it's a free api. Also you can track cancelled requests from console.log.  
  
Currently only one search field is supported.
