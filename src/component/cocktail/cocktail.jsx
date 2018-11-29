import React, { Component} from 'react'
import AddCocktail from './add-cocktail'
import { BASE_URL } from './constant'
import axios from 'axios'
import './cocktail.css'


class Cocktail extends Component{

  state = {
    cocktail: []
  }

  async getCocktail() {
    let {data} = await axios.get(`${BASE_URL}cocktail`)
    this.setState({cocktail: data})
    // console.log(data)
    }

  componentDidMount(){
    this.getCocktail();
  }

  addCocktailToState = (something) => {
    console.log(`this test should result in ${something}`)
    this.setState({
      cocktail: [...this.state.cocktail, {
        name: something,
        id: this.state.cocktail.length
      }]
    })
  }

  renderCocktail = () => {
    return this
      .state
      .cocktail
      .map((cocktail, key) =>
        <p key={key} className='cocktail__item'>
          <span>{cocktail.name}</span>
          <span 
            onClick={() => this.deleteCocktail(cocktail.id)}>
            &times;
          </span>
        </p>
      )
  }

  async deleteCocktail(id) {
    console.log(id)
    await axios.delete(`${BASE_URL}cocktail`, {
      id: this.id
    })
  }

  render(){
    return (
      <div>
        <div>{this.renderCocktail()}</div>,
        <AddCocktail orice=
        {this.addCocktailToState} />
      </div>
    )
  }
}

export default Cocktail;