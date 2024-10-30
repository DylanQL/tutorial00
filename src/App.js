import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Persona(props) {
  //console.log(props);
  return (
    <div className='persona' style={{backgroundColor : props.color}}>
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad}</p>
      <p>Institucion : Tecsup</p>

    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className='text-center mt-4'> 
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Disminuir</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
    <h1>Desarrollo de aplicaciones Tecsup</h1>
    
    <Persona nombre="Juan León S." edad="45" color="red"/>
    <Persona nombre="Jaime Farfan" edad="48" color="blue"/>
    <Persona nombre="Fidel Matos" edad="60" color="green"/>
    <Counter/>
    </div>
  );

}

export default App;
