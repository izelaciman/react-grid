import React, { Component } from 'react';


export default class Pagination extends Component {
    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" >Previous</a></li>
                    <li className="page-item"><a className="page-link" >1</a></li>
                    <li className="page-item"><a className="page-link" >2</a></li>
                    <li className="page-item"><a className="page-link" >3</a></li>
                    <li className="page-item"><a className="page-link">Next</a></li>
                </ul>
            </nav>
        )
    }
}