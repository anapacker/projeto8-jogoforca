import { useState } from "react"

export default function Letra(props){
    const letra = props.letra
    const isDesabilitado = props.isDesabilitado
    const letrasSelecionadas = props.letrasSelecionadas
    const setLetrasSelecionadas = props.setLetrasSelecionadas
    const [isLetraClicada, setIsLetraClicada] = useState(false)

    function escolherLetra(){
        setLetrasSelecionadas([...letrasSelecionadas, letra])
        setIsLetraClicada(true)
        console.log(letrasSelecionadas)
    }


    return(
        <button onClick={escolherLetra} disabled={isLetraClicada || isDesabilitado}>{letra}</button>
    )
}