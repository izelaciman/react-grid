import React, { Component } from 'react'; 

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    static getDerivedStateFromProps(props, state) {
        return {
            data: props.data,
          };
    }

    buildHeader() {
     return <tr>{this.props.columns.map((column, index) => <th  key={index}>{column.columnHeader}</th>)}</tr>
    }
    buildColums(row) {
       return this.props.columns.map((column, index) => <td  key={index}>{row[column.columnField]}</td>)
    }
    buildBody() {
       return this.state.data.map((value, index) => <tr key={index}>{this.buildColums(value)}</tr>)      
    }
    render() {
        return (
            <table className="table">
                <thead>
                    {this.buildHeader()}
                </thead>
                <tbody>
                    { this.state.data.length > 0  ? 
                    this.buildBody() : 
                    <tr><td>No Data has been found...</td></tr>
                    }
                </tbody>
            </table>
        )
    }
}