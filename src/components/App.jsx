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
  const [jogoPerdido, setJogoPerdido] = useState(false)
  const [jogoGanho, setJogoGanho] = useState(false)

  return (
    <>
      <div className='containerCima'>
        <Jogo setIsDesabilitado={setIsDesabilitado} palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada} letrasSelecionadas={letrasSelecionadas} qtdErros={qtdErros} jogoPerdido={jogoPerdido} setJogoPerdido={setJogoPerdido} jogoGanho={jogoGanho} setJogoGanho={setJogoGanho}/>
      </div>

      <div className="containerLetras">
        <Letras isDesabilitado={isDesabilitado} letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} qtdErros={qtdErros} setQtdErros={setQtdErros} palavraSorteada={palavraSorteada} jogoPerdido={jogoPerdido} setJogoPerdido={setJogoPerdido} jogoGanho={jogoGanho} setJogoGanho={setJogoGanho}/>

      </div>
    </>
  );
}

export default App;
