import palavras from "../palavras.js"
import LetraDaForca from "./LetraDaForca.jsx"

export default function Jogo(props) {
    const setIsDesabilitado = props.setIsDesabilitado
    const setPalavraSorteada = props.setPalavraSorteada
    const palavraSorteada = props.palavraSorteada
    const letrasSelecionadas = props.letrasSelecionadas
    const qtdErros = props.qtdErros
    const setJogoPerdido = props.setJogoPerdido
    const jogoPerdido = props.jogoPerdido

    const arrayDeCaracteres = palavraSorteada.split("")

    const imagensForca = [
        "./assets/forca0.png", 
        "./assets/forca1.png", 
        "./assets/forca2.png", 
        "./assets/forca3.png", 
        "./assets/forca4.png",
        "./assets/forca5.png",
        "./assets/forca6.png"
    ]

    function handleClick(){
        habilitarLetras()
        const palavraSorteada = sortearPalavra(palavras)
        setPalavraSorteada(palavraSorteada)
        console.log(palavraSorteada)

    }
    
    function habilitarLetras(){
        setIsDesabilitado(false)

    }

    function sortearPalavra(palavras){
        const indiceAleatorio = Math.floor(Math.random() * palavras.length)
        return palavras[indiceAleatorio]
    }

    return (
        <>
            <img src={imagensForca[qtdErros]} alt="forca" />
            <div className="boxButton">
                <button onClick={handleClick}>Escolher palvra</button>
                <div className="palavra">
                    {arrayDeCaracteres.map(caracter => {
                        if(jogoPerdido)
                            return <span className="vermelho">{caracter}</span>
                        else
                            return <LetraDaForca caracter={caracter} letrasSelecionadas={letrasSelecionadas}/>
                    })}
  
                </div>
            </div>

        </>
    )
}