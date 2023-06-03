import { ImSpinner } from "react-icons/im";


const style = {
    spinner: {
      animation: "spin 1s linear infinite",
    },
  };

export default function PokemonPendingView () {
    

    return (
        <div role="alert">
            <div style={style.spinner}>
                <ImSpinner size="32" className="icons-spin"/>
                Загружаємо...
            </div>
        </div>
    )
}