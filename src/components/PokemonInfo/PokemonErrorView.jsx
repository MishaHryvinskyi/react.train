import { LoadingContainer, SadCat, ParagraphMessage } from './PokemonForm.styled';

export default function PokemonErrorView({ message }) {
    const img = "https://i.kym-cdn.com/entries/icons/mobile/000/026/489/crying.jpg";
    return(
        <LoadingContainer rele="alert">
            <SadCat src={img} width="240" alt="sadCat" />
            <ParagraphMessage>{message}</ParagraphMessage>
        </LoadingContainer>
    )
}