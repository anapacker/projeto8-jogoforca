import palavras from "../palavras.js"

export default function Jogo(props) {
    const setIsDesabilitado = props.setIsDesabilitado
    
    function handleClick(){
        habilitarLetras()
        sortearPalavras(palavras)
        console.log(sortearPalavras(palavras))

    }
    
    function habilitarLetras(){
        setIsDesabilitado(false)

    }

    function sortearPalavras(palavras){
        const indiceAleatorio = Math.floor(Math.random() * palavras.length)
        return palavras[indiceAleatorio]
    }
    return (
        <>
            <img src="./assets/forca0.png" alt="forca" />
            <div className="boxButton">
                <button onClick={handleClick}>Escolher palvra</button>
                <div className="palavra">
                    <span>_ </span>
                    <span>_ </span>
                    <span>_ </span>
                </div>
            </div>

        </>
    )
}