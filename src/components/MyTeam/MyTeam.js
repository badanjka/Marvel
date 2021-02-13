import React, { Component } from 'react';
import "./MyTeam.css"
import FavHero from "../../components/FavHero/FavHero"

class MyTeam extends Component {
    renderFavoriteHeroes = () => {
        return <ul className="favorite" >
            {this.props.favoriteHeroes.map(heroData => <FavHero  data={heroData} onDelete={this.props.onDelete} ></FavHero>)}
        </ul>
    }
    render() {
        return (
            <div className="myTeam">
                <h3 className="team">My Team</h3>
                <div>{this.renderFavoriteHeroes()}</div>
            </div>
        );
    }
}
export default MyTeam;