import React, { Component } from 'react';
import "./Hero.css"
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Hero extends Component {
    render() {
        return (
            <li className="oneHero">
                <div className="setFlex">
                    <div className="name">
                        <span>{this.props.data.name}  </span> <br></br>
                    </div>
                    <img className="img" src={this.props.data.thumbnail.path + '.jpg'}></img>
                    <span className="buttons">
                        <button className="infoButton"><Link to={"/singleHeroPage/" + this.props.data.id} className="info">Info</Link></button>
                        <button className="add" onClick={() => this.props.addToMyTeam(this.props.data)}>Add</button></span>
                </div>
            </li>
        );
    }
}
export default Hero;