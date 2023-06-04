import styled from "@emotion/styled";

export const FormPokemon = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-right: auto;
    margin-left: auto;
`;

export const PokemonInput = styled.input`
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    background-color: yellow;
    color: blue;
    border: none;
    &:hover {
        background-color: blue;
        color: yellow;
    }
`;

export const BtnSearchPokemon =styled.button`
    width: 150px;
    margin-right: auto;
    margin-left: auto;
    padding: 8px 8px;
    border-radius: 10px;
    background-color: yellow;
    color: blue;
    cursor: pointer;
    border: none;
    &:hover {
        background-color: blue;
        color: yellow;
    }
`;

export const PokemonInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    background-color: skyblue;
    border-radius: 100px;
    border: solid 7px grey;
    padding: 20px;
    width: 500px;
`;

export const PokemonList = styled.ul`
    margin-right: auto;
    margin-left: auto;
    list-style: none;
`;

export const PokemonListItem = styled.ul`
    &:not(:last-child) {
        margin-bottom: 12px;
    }
    padding: 0;
    font-size: 20px;
`;

export const PokemonTitle = styled.h2`
    margin-right: auto;
    margin-left: auto;
    font-size: 40px;
    color: grey;
`;

export const PokemonImges = styled.img`
    margin-right: auto;
    margin-left: auto;
    background-color: grey;
    border: solid 5px white;
    border-radius: 90px;
    padding: 20px;
`;

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
`;

export const LoadingInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
`;

export const ParagraphMessage = styled.p`
    margin-right: auto;
    margin-left: auto;
`;

export const SadCat = styled.img`
    margin-right: auto;
    margin-left: auto;
`;

export const PokemonName = styled.div`
    text-align: center;
    width: 200px;   
    margin-right: auto;
    margin-left: auto;
`;