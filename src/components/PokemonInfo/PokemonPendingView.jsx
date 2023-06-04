import { ImSpinner } from "react-icons/im";
import { LoadingInfo, LoadingContainer } from './PokemonForm.styled';

const style = {
    spinner: {
      animation: "spin 1s linear infinite",
    },
  };

export default function PokemonPendingView () {
    

    return (
        <LoadingContainer role="alert">
            <LoadingInfo style={style.spinner}>
                <ImSpinner size="32" className="icons-spin"/>
                Загружаємо...
            </LoadingInfo>
        </LoadingContainer>
    )
}