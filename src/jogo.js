import palavras from "./palavras"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import { useState } from "react"
import Letras from "./Letras"

export default function Jogo({}) {

  const [escolherPalavra, setEscolherPalavra] = useState("")
  const [palavraEscolhida, setPalavraEscolhida] = useState([])
  const [erros, setErros] = useState(0)

  const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

  const palavraAleatoria = () => {

    const aleatoria = Math.floor(Math.random() * palavras.length)

    return palavras[aleatoria]
  };

  const comecarJogo = () => {

    const pegarAleatoria = palavraAleatoria()

    setEscolherPalavra(pegarAleatoria)
    
    setPalavraEscolhida(
      pegarAleatoria.split("").map((letra) => ({ valor: letra, acertou: false }))
    )

    setErros(0)

  }
    
  const underline = () => {
    return <span className="editar-underline">_</span>
  }

  const verificarLetra = (letra) => {

    let acertou = false

    const novaPalavra = palavraEscolhida.map((l) => {

      if (l.valor === letra) {

        acertou = true

        console.log("acertou")

        return { ...l, acertou: true }

      }
      console.log("errou")

      return l

    })
    setPalavraEscolhida(novaPalavra)

    if (!acertou) {

      setErros(erros + 1)

    }
  }
  
  return (
    <div className="container-pai">
      <div key="container" className="container">
        <img className="" src={images[erros]} alt={images[erros]}></img>
        <div className="container-right">
          <button onClick={comecarJogo}>Escolher Palavra</button>
          <div >
            {palavraEscolhida.map((letra, index) => (
              <span key={index}>
                {letra.acertou ? letra.valor : underline("_")}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Letras verificarLetra={verificarLetra} />
    </div>
  )
}
