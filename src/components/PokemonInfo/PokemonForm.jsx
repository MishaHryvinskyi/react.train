import { Component } from "react";
import { ImSearch } from "react-icons/im";
import { toast } from "react-toastify";
import { FormPokemon, PokemonInput, BtnSearchPokemon } from './PokemonForm.styled';

const style = { form: {marginBottom: 20} };

export default class PokemonForm extends Component {
    state = {
        pokemonName: '',
    };
    handleNameChenge = e => {
        this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.pokemonName.trim() === '') {
            toast('Введіть імя покемона');
            return;
        }
        this.props.onSubmit(this.state.pokemonName);
        this.setState({ pokemonName: '' });
    };

    render() {
        return (
            <FormPokemon onSubmit={this.handleSubmit} style={style.form}>
                <PokemonInput type="text"
                    name="pokemonName"
                    value={this.state.pokemonName}
                    onChange={this.handleNameChenge} 
                />
                <BtnSearchPokemon type="submit">
                    <ImSearch style={{ marginRight: 8 }} />
                    Знайти</BtnSearchPokemon>
            </FormPokemon>
        )
    }
}