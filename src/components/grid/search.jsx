import React, { Component } from 'react';


export default class Search extends Component {
    render() {
        return (
            <form class="form-inline">
                <div class="form-group mx-sm-3 mb-2">
                    <input type="text" class="form-control" id="search" placeholder="Search" />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Search</button>
            </form>
        )
    }
}