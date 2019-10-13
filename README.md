This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Why I used react.js

Firstly using create react app, react gives a quick bootstrap project to instantly start developing and prototyping projects. Major reason grid/pagination easly could be component which can be used across whole projects.It'is a good example where we can create multiple components and use seperation of conncerns. Also in grid example I had to lift up the state to share across different components.
In this case pagination, table, and search are using same state through props controlled by the Grid 
smart controller/Component where all the child componets come together. For the sake of displaying javascript usage skill, I have implemented all the grid from ground,  otherwise react has tons of different grid component libraries for usage. 

## Why I used Bootstrap
I used traditional bootstrap package for styling, there is also react based bootstrap library, where components are react components. I thought displaying little bit of css usage would be nicer. Bootstrap has all the styles needed for this example paginationn, table and form controls therefore I didn't have to write any css. If you would like to see more css I would be happy to discuss during the interview as well :)


## Example Grid Component Usage

1. dataHandler: is an event based propery and  makes a ajax request to the api based on query parameters.
2. paginationParam: it's the name of the api query parameter for pagination, it can be customized for different api end points.
3. searchParam:it's the name of the api search parameter, it can be customized for different api end points. if user do not provide this parameter search textbox won't be displayed.
4. columns: Column structure and headers for generic grid usage for diffrent scenerios.

Fetching Data example , this can be customized based on the usage.
```
function fetchData(params) {
  const querystring = new URLSearchParams(params);
  console.log(querystring.toString());
  return fetch(`https://swapi.co/api/people/?${querystring.toString()}`).then((res) => res.json());
}

```

Column structure example
```
const columns = [{columnHeader: 'Name', columnField:'name'}, 
                 {columnHeader: 'Hair Color', columnField:'hair_color'},
                 {columnHeader: 'Birth Year', columnField:'birth_year'},
                 {columnHeader: 'Height', columnField:'height'},
                 {columnHeader: 'Eye Color', columnField:'eye_color'},
                 {columnHeader: 'Skin Color', columnField:'skin_color'},
                ]
```

Grid Example
```
      <Grid dataHandler={fetchData}
            paginationParam={'page'}
            searchParam={'search'}
            columns={columns}
      />
```


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
