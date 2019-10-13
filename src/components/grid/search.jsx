import React from 'react';

export default function Search(props) {
    return (
        <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <input type="text" onChange={props.searchHandler} className="form-control" id="search" placeholder="Search" />
            </div>
        </form>
    ) 
}