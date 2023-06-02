import React, { Component } from "react";

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading: false,
    }
componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
    .then(res => res.json())
    .then(pokemon => this.setState({ pokemon }))
    .finally(() => this.setState({ loading: false })); 
    }, 1000)
   
}

    render() {
        return (
        <div>
            {this.state.loading && <h1>Загружаємо...</h1>}
           {this.state.pokemon && <div>{this.state.pokemon.name}
           <img src={this.state.pokemon.sprites.front_shiny} width="200" height="200"></img>
           </div>}
        </div>
        );

    }
}