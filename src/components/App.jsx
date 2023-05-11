import "../style.css"
import "./reset.css"
function App() {
  return (
    <>
    <div className='containerCima'>
      <img src="./assets/forca0.png" alt="forca" />

      <div className="boxButton">
        <button>Escolher palvra</button>
        <div className="palavra">
          <span>_ </span>
          <span>_ </span>
          <span>_ </span>
        </div>
      </div>
    </div>

    <div className="containerLetras">
      <div className="letras">
        A B C D E F G H I J K L M N O P Q R S T U 
      </div>
      
    </div>
    </>
  );
}

export default App;
