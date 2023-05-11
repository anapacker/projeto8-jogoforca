import "../style.css"
import Jogo from "./Jogo";
import Letras from "./Letras";
import "./reset.css"
import palavras from "../palavras.js";
import { useState } from "react";

function App() {
  const [isDesabilitado, setIsDesabilitado] = useState(true);
  const [palavraSorteada, setPalavraSorteada] = useState("")

  return (
    <>
      <div className='containerCima'>
        <Jogo setIsDesabilitado={setIsDesabilitado} palavraSorteada={palavraSorteada} setPalavraSorteada={setPalavraSorteada}/>
      </div>

      <div className="containerLetras">
        <Letras isDesabilitado={isDesabilitado} />

      </div>
    </>
  );
}

export default App;
