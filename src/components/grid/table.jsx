import React, { PureComponent } from 'react'; 

export default class Table extends PureComponent {

    buildHeader() {
     return <tr>{this.props.columns.map((column, index) => <th  key={index}>{column.columnHeader}</th>)}</tr>
    }
    buildColums(row) {
       return this.props.columns.map((column, index) => <td className={index === 0 ? 'font-weight-bold': ''}  key={index}>{row[column.columnField]}</td>)
    }
    buildBody() {
       return this.props.data.map((value, index) => <tr key={index} >{this.buildColums(value)}</tr>)      
    }
    buildNoData(){
        return <tr><td>No Data has been found...</td></tr>
    }
    buildLoading(){
        return <tr><td>Loding...</td></tr>
    }
    render() {
        return (
            <table className="table">
                <thead>
                    {this.buildHeader()}
                </thead>
                <tbody>
                    { this.props.isLoading ? 
                      this.buildLoading() :
                      this.props.data.length > 0 ?
                      this.buildBody() :
                      this.buildNoData()
                    }
                </tbody>
            </table>
        )
    }
}