import React, { Component } from "react";
import PokemonErrorView from './PokemonErrorView';
import PokemonDataiew from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';

export default class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: 'idle',
    }

componentDidUpdate(prevProps, prevState) {

    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;
    if(prevName !== nextName) {

        this.setState({ status: 'pending' });
       
        setTimeout(() => { 
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
            .then(res => {
                if(res.ok) {
                    return res.json()
                } 

                return Promise.reject(
                    new Error(`О Дідько!!! Покемона з ім'ям ${nextName} немає`)
                );
            })
            .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
            .catch(error => this.setState({ error, status: 'rejected' }))
            // .finally(() => this.setState({ loading: false }))
        }, 1000);

    }
}

    render() {
        const { pokemon, error, status } = this.state;
        

        if(status === 'idle') {
            return <div>Введіть імя покемона</div>;
        }
        if(status === 'pending') {
            return <PokemonPendingView />

            // return <div>Загружаємо...</div>;
        }
        if(status === 'rejected') {
            return <PokemonErrorView message={error.message} />;
        }
        if(status === 'resolved') {
            return <PokemonDataiew pokemon={pokemon}/>
            // return <div>
            // <p>{pokemon.name}</p>
            // <img 
            // src={pokemon.sprites.other['official-artwork'].front_default} 
            // width="300" 
            // alt={pokemon.name}/>
            // </div>;
        }
        
        // return (
        // <div>
        //     {error && <h1 style={{ color: 'red'}}>{error.message}</h1>}
        //     {loading && <div>Загружаємо...</div>}
        //     {!pokemonName && <div>Введіть імя покемона</div>}
        //     {pokemon && <div>
        //         <p>{pokemon.name}</p>
        //         <img 
        //         src={pokemon.sprites.other['official-artwork'].front_default} 
        //         width="300" 
        //         alt={pokemon.name}/>
        //         </div>}
        // </div>
        // );
    }
}