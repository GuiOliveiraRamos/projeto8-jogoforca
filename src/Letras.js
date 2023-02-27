export default function Letras({ verificarLetra, ativarLetras}) {
    
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
    return (
      <div className="alfabeto">
        {alfabeto.map((letra) => (
          <button data-test="letter" disabled={ativarLetras} key={letra} onClick={() => verificarLetra(letra)}>
            {letra}
          </button>
        ))}
      </div>
    );
  }
  

