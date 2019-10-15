import React, { Component } from 'react'; 
import Table from './table';
import Pagination from './pagination';
import Search from './search';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {data: [], count: 0, size: 0, page: 1, search: '', isLoading: true};
    }
    componentDidMount(){
        this.apiFetch();
    }
    updateHandler = (event) => {
        if(event.target.name === 'search')  {
            this.setState({page :1, search: event.target.value, isLoading: true},this.apiFetch);
        }
        else if(event.target.name === 'page') {
            this.setState({page: parseInt(event.target.value), isLoading: true},this.apiFetch);
        }
    }
    apiFetch() {
        this.props.dataHandler(this.buildDataParams()).then((res) => {
            this.setDataState(res.data);
        }).catch((thrown) => {
            console.log('Request error', thrown.message);
        });
    }
    buildDataParams(){
        return {[this.props.searchParam]: this.state.search, [this.props.paginationParam]: this.state.page}
    }
    setDataState(data) {
        this.setState((state) => {
            let newState = {...this.state};
            if(state.count !== data.count){
                newState.size = data.results.length;
            } 
            newState.data = data.results;
            newState.count = data.count;
            newState.isLoading = false;
            return newState;
        });
    }
    render() {
        return (
            <div className="container">
                {this.props.searchParam &&
                 <div className="row">
                    <div className="col">
                        <Search searchHandler={this.updateHandler} searchParam={this.props.searchParam} />
                    </div>
                 </div>
                }
                 <div className="row">
                    <div className="col">
                        <Table data={this.state.data} columns={this.props.columns} isLoading={this.state.isLoading} />
                    </div>
                 </div>
                 <div className="row">
                    {!this.state.isLoading &&
                    <div className="col align-self-center">
                        <Pagination 
                            count={this.state.count} 
                            currentPage={this.state.page}
                            size={this.state.size} 
                            paginationHandler={this.updateHandler}
                            paginationParam={this.props.paginationParam}
                        />
                    </div>
                    }
                 </div>
            </div>
        )
    }
}