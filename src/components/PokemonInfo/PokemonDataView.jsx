import { PokemonInfo, PokemonListItem, PokemonList, PokemonTitle, PokemonImges } from './PokemonForm.styled'

export default function PokemonDataiew({ pokemon: { sprites, name, stats } }) {
    return(
        <PokemonInfo>
            <PokemonImges 
            src={sprites.other['official-artwork'].front_default}
            width="240"
            alt={name}
            />
            <PokemonTitle>{name}</PokemonTitle>
            <PokemonList>
                {stats.map(entry => (
                    <PokemonListItem key={entry.stat.name}>
                        {entry.stat.name} : {entry.base_stat}
                    </PokemonListItem>
                ))}
            </PokemonList>
        </PokemonInfo>
    )
}