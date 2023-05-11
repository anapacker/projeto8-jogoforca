import palavras from "../palavras.js"

export default function Jogo(props) {
    const setIsDesabilitado = props.setIsDesabilitado
    const setPalavraSorteada = props.setPalavraSorteada
    const palavraSorteada = props.palavraSorteada
    const arrayDeCaracteres = palavraSorteada.split("")


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
            <img src="./assets/forca0.png" alt="forca" />
            <div className="boxButton">
                <button onClick={handleClick}>Escolher palvra</button>
                <div className="palavra">
                    {arrayDeCaracteres.map(caracter => 
                        <span>_ </span>)}
  
                </div>
            </div>

        </>
    )
}