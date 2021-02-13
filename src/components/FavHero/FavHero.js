import React, { Component } from 'react';
import "./FavHero.css"

class FavHero extends Component {
    render() {
        return (
            <div className="teamWrapper">
                <img className="icon" src={this.props.data.thumbnail.path + '.jpg'}></img>
                <span className="heroName">{this.props.data.name} </span>
                <i class="far fa-trash-alt del" onClick={() => this.props.onDelete(this.props.data.id)}></i>
            </div>
        );
    }
}
export default FavHero;