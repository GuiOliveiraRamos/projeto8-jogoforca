
export default function Letras() {
    
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    return(
        <div className="alfabeto">
            {alfabeto.map((a) => <button>{a}</button>)}
        </div>
    )
}
