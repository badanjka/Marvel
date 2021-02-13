import React, { Component } from 'react';
import "./MainPage.css"
import Header from "../../components/Header/Header"
import Search from "../../components/Search/Search"
import Heroes from "../../components/Heroes/Heroes"
import MyTeam from '../../components/MyTeam/MyTeam';
var md5 = require('md5');

class MainPage extends Component {
  state = {
    searchValue: "",
    heroes: [],
    filteredHeroes: [],
    favoriteHeroes:[]
  }
  componentDidMount() {
    if (!this.state.heroes.length) {
      this.getData()
    }
  }
  componentWillUpdate = (nextProps, nextState) => {
    console.log('usao u component will update')
    console.log(nextState.searchValue);
    console.log(this.state.searchValue);
    if (nextState.searchValue !== this.state.searchValue) {
      const filtered = this.state.heroes.filter(user => user.name.toLowerCase().includes(nextState.searchValue.toLowerCase()))
      this.setState({
        filteredHeroes: filtered
      })
    }
  }
  getData = () => {
    let timestamp = Date.now();
    let publicKey = 'ebfb4f6c996694afe16733d4dcac42b5';
    let privateKey = '3ee43a6d44c476f2099938e4e52f94d29e2ea034';
    let hash = md5(timestamp + privateKey + publicKey);
    fetch("https://gateway.marvel.com/v1/public/characters?ts=" + timestamp + "&apikey=" + publicKey + "&hash=" + hash)
      .then(data => data.json())
      .then(
        (result) => {
          this.setState({
            heroes: result.data.results,
            filteredHeroes: result.data.results
          });
          console.log(this.state);
        },
      )
  }
  sacuvatiStateIzSearcha = (value) => {
    this.setState({
      searchValue: value
    })    
  } 
add=(hero)=>{
console.log(hero)
this.setState({
  favoriteHeroes:[...this.state.favoriteHeroes,hero]})
}
onReportDelete = (id) => {
  const newList = [...this.state.favoriteHeroes].filter(report => report.id !== id)
  this.setState({
      favoriteHeroes: newList
  })
}
  render() {
    return (
      <div className="mainPage">
        <Header />
        <Search getSearchInput={this.sacuvatiStateIzSearcha}></Search>
        <div className="wrapper">
          <Heroes
          heroes={this.state.heroes}
          filteredHeroes={this.state.filteredHeroes}
          addToMyTeam={this.add} />
          <MyTeam favoriteHeroes={this.state.favoriteHeroes} onDelete={this.onReportDelete}/>
        </div>        
      </div>
    );
  }
}
export default MainPage;