import React, { PureComponent } from 'react';


export default class Pagination extends PureComponent {
    calculateTotalPage() {
        if(this.props.size === 0) return 0;
        return Math.floor((this.props.count + this.props.size - 1) / this.props.size);
    }
    buildPageNumbers() {
        const totalPages = this.calculateTotalPage();
        return [...Array(totalPages)].map((value, index) => {
            const pageNumber = index +1;
            return (
                <li className={`page-item ${this.props.currentPage === pageNumber ? "active" : ""}`} key={index}>
                    <button name='page' onClick={this.props.paginationHandler} value={pageNumber} className="page-link" >{pageNumber}
                    </button>
                </li> 
            )
        })
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