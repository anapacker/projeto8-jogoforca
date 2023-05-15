import { useState } from "react"

export default function Letra(props){
    const letra = props.letra
    const isDesabilitado = props.isDesabilitado
    const letrasSelecionadas = props.letrasSelecionadas
    const setLetrasSelecionadas = props.setLetrasSelecionadas
    const palavraSorteada = props.palavraSorteada
    const setQtdErros = props.setQtdErros
    const qtdErros = props.qtdErros

    const arrayDeCaracteres = palavraSorteada.split("")

    const [isLetraClicada, setIsLetraClicada] = useState(false)

    function escolherLetra(){
        setLetrasSelecionadas([...letrasSelecionadas, letra])
        setIsLetraClicada(true)
        verificarSeExisteLetra()
    }
    function verificarSeExisteLetra(){
        let existeLetra = arrayDeCaracteres.some(function(caracter) {
            if(caracter == letra)
                return true
            else return false
        })
        if(existeLetra == false){
            setQtdErros(qtdErros +1)
        }
    }

    return(
        <button onClick={escolherLetra} disabled={isLetraClicada || isDesabilitado}>{letra}</button>
    )
}