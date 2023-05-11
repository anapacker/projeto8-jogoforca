export default function Jogo(props) {
    const setIsDesabilitado = props.setIsDesabilitado
    
    function habilitarLetras(){
        setIsDesabilitado(false)
    }
    return (
        <>
            <img src="./assets/forca0.png" alt="forca" />
            <div className="boxButton">
                <button onClick={habilitarLetras}>Escolher palvra</button>
                <div className="palavra">
                    <span>_ </span>
                    <span>_ </span>
                    <span>_ </span>
                </div>
            </div>

        </>
    )
}