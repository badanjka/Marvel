import React, { Component } from 'react';
import "./Search.css"

class Search extends Component {
    searchByButton=(event)=>{
        console.log("test")
            // // const value = event.target.value;
            // let searchValue = izvuci iz state;
            // this.props.filterSearch(value)        
    }
    searchByEnter = (event) => {
        console.log("TEST")
        if (event.key === 'Enter') {
            const value = event.target.value;
            console.log(value)
            // upisati u stejt 
            this.props.getSearchInput(value)
        }
    }
    render() {
        return (
            <div className="search">
                <input type="text" placeholder="search" className="searchInput" onKeyPress={this.searchByEnter}  ></input>
                <button className="goButton" onClick={this.searchByButton}>GO</button>
            </div>
        );
    }
}
export default Search;