export default function LetraDaForca(props){
    const caracter = props.caracter
    const letrasSelecionadas = props.letrasSelecionadas

   
    if(letrasSelecionadas.some(letra => {
        if(letra == caracter)
            return true
        else 
            return false
    }))
        return (
            <span>{caracter}</span>
        )
    else return(
        <span>_ </span>
    )
}