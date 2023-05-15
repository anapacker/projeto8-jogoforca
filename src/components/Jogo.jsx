import palavras from "../palavras.js"
import LetraDaForca from "./LetraDaForca.jsx"

export default function Jogo(props) {
    const setIsDesabilitado = props.setIsDesabilitado
    const setPalavraSorteada = props.setPalavraSorteada
    const palavraSorteada = props.palavraSorteada
    const letrasSelecionadas = props.letrasSelecionadas
    const setLetrasSelecionadas = props.setLetrasSelecionadas
    const qtdErros = props.qtdErros
    const setQtdErros = props.setQtdErros
    const jogoPerdido = props.jogoPerdido
    const jogoGanho = props.jogoGanho
    const setJogoGanho = props.setJogoGanho
    const setJogoPerdido = props.setJogoPerdido

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
        if(jogoPerdido || jogoGanho){
            setQtdErros(0)
            setJogoGanho(false)
            setJogoPerdido(false)
            setLetrasSelecionadas([])
                      
        }
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
            <img data-test="game-image" src={imagensForca[qtdErros]} alt="forca" />
            <div className="boxButton">
                <button data-test="choose-word" onClick={handleClick}>Escolher palvra</button>
                <div data-test="word" className="palavra">
                    {arrayDeCaracteres.map(caracter => {
                        if(jogoPerdido)
                            return <span className="vermelho">{caracter}</span>
                        else if(jogoGanho)
                            return <span className="verde">{caracter}</span>
                        else
                            return <LetraDaForca caracter={caracter} letrasSelecionadas={letrasSelecionadas}/>
                    })}
  
                </div>
            </div>

        </>
    )
}