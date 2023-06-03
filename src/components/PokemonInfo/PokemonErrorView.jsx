export default function PokemonErrorView({ message }) {
    const img = "https://i.kym-cdn.com/entries/icons/mobile/000/026/489/crying.jpg";
    return(
        <div rele="alert">
            <img src={img} width="240" alt="sadCat" />
            <p>{message}</p>
        </div>
    )
}