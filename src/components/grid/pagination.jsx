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
    buildPrevious() {
        if(this.props.currentPage > 1) {
        return ( 
            <li>
                <button name='page' onClick={this.props.paginationHandler} value={this.props.currentPage-1} className="page-link" >Previous
                </button>
            </li>)
        } else {
            return []
        }
    }
    buildNext() {
        if(this.props.currentPage < this.calculateTotalPage()) {
        return ( 
            <li>
                <button name='page' onClick={this.props.paginationHandler} value={this.props.currentPage+1} className="page-link" >Next
                </button>
            </li>)
        } else {
            return []
        }
    }
    render() {
        return (
         this.calculateTotalPage() > 1 &&
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    {this.buildPrevious()}
                    {this.buildPageNumbers()}      
                    {this.buildNext()}
                </ul>
            </nav>
        )
    }
}