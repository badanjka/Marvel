import React, { Component } from 'react';
import "./Heroes.css"
import Hero from "../Hero/Hero"


class Heroes extends Component {
    renderHeroes = () => {
        return <ul className="allData" >
            {this.props.filteredHeroes.map(userData => <Hero addToMyTeam={this.props.addToMyTeam} data={userData}></Hero>)}
        </ul>
    }
    render() {
        return (
            <>{this.renderHeroes()}</>
        );
    }
}
export default Heroes;