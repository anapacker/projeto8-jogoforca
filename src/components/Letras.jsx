export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const isDesabilitado = props.isDesabilitado

    return (
        <div className="letras">
           {alfabeto.map(letra => <button disabled={isDesabilitado}>{letra}</button>)}
        </div>
    )
}
