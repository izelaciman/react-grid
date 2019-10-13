import React, { Component } from 'react'; 
import Table from './table';
import Pagination from './pagination';
import Search from './search';


export default class grid extends Component {
    render() {
        return (
            <div className="container">
                 <div className="row">
                    <div className="col">
                        <Search/>
                    </div>
                 </div>
                 <div className="row">
                    <div className="col">
                        <Table />
                    </div>
                 </div>
                 <div className="row">
                    <div className="col align-self-center">
                        <Pagination />
                    </div>
                 </div>
            </div>
        )
    }

}