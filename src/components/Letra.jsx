import { useState } from "react"

export default function Letra(props){
    const letra = props.letra
    const isDesabilitado = props.isDesabilitado
    const letrasSelecionadas = props.letrasSelecionadas
    const setLetrasSelecionadas = props.setLetrasSelecionadas
    const palavraSorteada = props.palavraSorteada
    const setQtdErros = props.setQtdErros
    const qtdErros = props.qtdErros
    const jogoPerdido = props.jogoPerdido
    const setJogoPerdido = props.setJogoPerdido
    const jogoGanho = props.jogoGanho
    const setJogoGanho = props.setJogoGanho

    const arrayDeCaracteres = palavraSorteada.split("")

    const isLetraClicada = verificaSeLetraJaFoiClicada()

    function escolherLetra(){
        setLetrasSelecionadas([...letrasSelecionadas, letra])
        verificarSeExisteLetra()
        verificarSeGanhou()
    }
    function verificarSeExisteLetra(){
        let existeLetra = arrayDeCaracteres.some(function(caracter) {
            if(caracter == letra)
                return true
            else return false
        })
        if(existeLetra == false){
            setQtdErros(qtdErros +1)
            verificarSePerdeuOJogo()
        }
    }
    function verificarSePerdeuOJogo(){
        if(qtdErros == 5){
            setJogoPerdido(true)
        }
    }
    function verificarSeGanhou(){
        let achouOCaracter = false
        const letrasSelecionadasAtualizado = [...letrasSelecionadas, letra]

        for(let i = 0;i<arrayDeCaracteres.length; i++){
            achouOCaracter = false
            for(let j=0;j<letrasSelecionadasAtualizado.length;j++){
                if(letrasSelecionadasAtualizado[j] == arrayDeCaracteres[i]){
                    achouOCaracter = true
                }
            }
            if(!achouOCaracter){
                return 
            }
        }
        setJogoGanho(true)
        console.log("ganhou o jogo")
    }
    function verificaSeLetraJaFoiClicada(){
        for(let i = 0; i<letrasSelecionadas.length; i++){
            if(letrasSelecionadas[i] == letra)
                return true
        }
        return false
    }

    return(
        <button data-test="letter" onClick={escolherLetra} disabled={isLetraClicada || isDesabilitado || jogoPerdido || jogoGanho}>{letra}</button>
    )
}