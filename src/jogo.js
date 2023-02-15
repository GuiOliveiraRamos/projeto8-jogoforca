import forca0 from "./assets/forca0.png"


export default function Jogo () {
    return(
        <div key ="container" className="container">
            <img src={forca0} alt={forca0}></img>
            <button>Escolher Palavra</button>
        </div>
    )
}