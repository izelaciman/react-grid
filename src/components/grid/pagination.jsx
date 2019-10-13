import React, { Component } from 'react';


export default class Pagination extends Component {
    constructor(props){
        super(props);
        this.state = {count: 0, size:0, totalPage: 0};
    }
    static getDerivedStateFromProps(props, state) {
        if (props.count !== state.count) {
            return {
                count: props.count,
                size: props.size
                };
        }
        return [];
    }
    calculateTotalPage() {
        if(this.state.size === 0) return 0;
        return Math.floor((this.state.count + this.state.size - 1) / this.state.size);
    }
    buildPageNumbers() {
        const totalPages = this.calculateTotalPage();
        return [...Array(totalPages)].map((value, index) => 
        <li className="page-item" key={index}>
            <button onClick={this.props.paginationHandler} value={index+1} className="page-link" >{index + 1}
            </button>
        </li> )
    }
    render() {
        return (
         this.calculateTotalPage() > 1 &&
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    {this.buildPageNumbers()}      
                </ul>
            </nav>
        )
    }
}