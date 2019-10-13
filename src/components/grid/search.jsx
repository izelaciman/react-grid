import React from 'react';

export default function Search(props) {
    return (
        <input type="text" onChange={props.searchHandler} className="form-control" id="search" placeholder="Search by name" />                
    ) 
}