import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import "./SingleHeroPage.css"
var md5 = require('md5');

class SingleHeroPage extends Component {
    state = {
        hero: []
    }
    componentDidMount() {
        this.getData()
    }
    printComics = (oneComic) => {
    console.log("test")
        }
    getData = () => {
        let timestamp = Date.now();
        let publicKey = 'ebfb4f6c996694afe16733d4dcac42b5';
        let privateKey = '3ee43a6d44c476f2099938e4e52f94d29e2ea034';
        let hash = md5(timestamp + privateKey + publicKey);
        fetch("https://gateway.marvel.com/v1/public/characters/" + this.props.match.params.id + "?ts=" + timestamp + "&apikey=" + publicKey + "&hash=" + hash)
            .then(data => data.json())
            .then(result => {
                console.log(result)
                console.log(result.data)
                console.log(result.data.results)         
                console.log("test")
                this.setState({
                    hero: result.data.results[0],
                });
                console.log(this.state.hero.comics.items)
                this.state.hero.comics.items.forEach(oneComic=>{
                   this.printComics(oneComic)
                })
            },
        )
    }
    render() {
        return (
            <div className="singleHeroPage" >
              <Header/>
                <div className="hero">
                <div className="heroPageName">{this.state.hero.name}</div>
                    {this.state.hero.thumbnail && <img className="heroImg" src={this.state.hero.thumbnail.path + '.jpg'}></img>}                   
                    <div className="heroDescription">{this.state.hero.description}</div>                                                    
                </div>
            </div>
        );
    }
}
export default SingleHeroPage;