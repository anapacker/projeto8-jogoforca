import { useState } from "react"
import Letra from "./Letra"

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const isDesabilitado = props.isDesabilitado
    const letrasSelecionadas = props.letrasSelecionadas
    const setLetrasSelecionadas = props.setLetrasSelecionadas
    
    return (
        <div className="letras">
           {alfabeto.map(letra => <Letra key={letra} letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} isDesabilitado={isDesabilitado } letra={letra}/>)}
        </div>
    )
}
