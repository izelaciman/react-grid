import React, { Component } from 'react'; 
import Table from './table';
import Pagination from './pagination';
import Search from './search';


export default class grid extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [], count: 0, size: 0, search: ''};
    }
    componentDidMount(){
        this.props.dataHandler().then((data) => {
            this.setDataState(data);
        });
    }
    searchHandler = (event) => {
        this.setState({search : event.target.value}, () => {
            this.props.searchHandler(this.state.search).then((data) => {
                this.setDataState(data);
            })
        })
    }
    paginationHandler = (event) => {
        const params = {page: event.target.value, search: this.state.search};
        this.props.paginationHandler(params).then((data) => {
            this.setDataState(data);
        })
    }
    setDataState(data) {
        this.setState({data: data.results, count: data.count, size: data.results.length});
    }
    render() {
        return (
            <div className="container">
                 <div className="row">
                    <div className="col">
                        <Search searchHandler={this.searchHandler} />
                    </div>
                 </div>
                 <div className="row">
                    <div className="col">
                        <Table data={this.state.data} columns={this.props.columns} />
                    </div>
                 </div>
                 <div className="row">
                    <div className="col align-self-center">
                        <Pagination 
                            count={this.state.count} 
                            size={this.state.size} 
                            paginationHandler={this.paginationHandler} 
                        />
                    </div>
                 </div>
            </div>
        )
    }
}