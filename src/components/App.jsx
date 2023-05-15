import "../style.css"
import Jogo from "./Jogo";
import Letras from "./Letras";
import "./reset.css"
import palavras from "../palavras.js";
import { useState } from "react";

function App() {
  const [isDesabilitado, setIsDesabilitado] = useState(true);
  const [palavraSorteada, setPalavraSorteada] = useState("")
  const [letrasSelecionadas, setLetrasSelecionadas] = useState([])
  const [qtdErros, setQtdErros] = useState(0)


  return (
    <>
      <div className='containerCima'>
        <Jogo setIsDesabilitado={setIsDesabilitado} palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada} letrasSelecionadas={letrasSelecionadas} qtdErros={qtdErros}/>
      </div>

      <div className="containerLetras">
        <Letras isDesabilitado={isDesabilitado} letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} qtdErros={qtdErros} setQtdErros={setQtdErros} palavraSorteada={palavraSorteada}/>

      </div>
    </>
  );
}

export default App;
