export default function Letras({ verificarLetra, ativarLetras, letrasEscolhidas}) {
    
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
    return (
      <div className="alfabeto">
        {alfabeto.map((letra) => (
          <button data-test="letter" className={`botao ${ativarLetras || letrasEscolhidas.includes(letra.toLowerCase())? 'desabilitado' : 'habilitado'}` } disabled={ativarLetras ||letrasEscolhidas.includes(letra.toLowerCase())} key={letra} onClick={() => verificarLetra(letra)}>
            {letra}
          </button>
        ))}
      </div>
    );
  }
  

