import "../style.css"
import Jogo from "./Jogo";
import Letras from "./Letras";
import "./reset.css"

function App() {
  return (
    <>
      <div className='containerCima'>
        <Jogo/>
      </div>

      <div className="containerLetras">
        <Letras />

      </div>
    </>
  );
}

export default App;
