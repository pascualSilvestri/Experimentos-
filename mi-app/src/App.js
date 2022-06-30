
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import './hojasDeEstilo/Boton.css'
import {useState} from 'react';


function App() {

  const [numClics,setNumClics] = useState(0);


  const manejarClic=()=>{
    setNumClics(numClics + 1);
    
  };

  const reiniciarContador = ()=>{
    setNumClics(0);
  };


  return (
    <div className="App">
      <div className='titulo'>
        <h1>Boton Contador De Clips</h1>
      </div>
      <div className='contenedor-contador'>
        <Contador numClics={numClics} />
        <Boton 
        texto='Clic'
        esBotonDeclic={true} 
        manejarClic={manejarClic}/>
        <Boton
         texto='Reiniciar'
         esBotonDeclic={false} 
         manejarClic={reiniciarContador}/> 
      </div>
    </div>
  );
}

export default App;
