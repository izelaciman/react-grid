import React, { PureComponent } from 'react';


export default class Pagination extends PureComponent {

    calculateTotalPage() {
        if(this.props.size === 0) return 0;
        return Math.floor((this.props.count + this.props.size - 1) / this.props.size);
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