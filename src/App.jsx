import React, { useState } from 'react';
import Card from './Card';

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [error, setError] = useState('');
    const [isValid, setIsValid] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (input1.length <= 3 || input1.startsWith(' ') || input2.length <= 6) {
        setError('Por favor chequea que la información sea correcta.');
        setIsValid(false);
      } else {
        setError('');
        setIsValid(true);
      }
    };
  return (
    <div className="App">
      <h1>Dime tu nombre y comida favorita!</h1>
      <form onSubmit={handleSubmit}><div>
          <label>Opcion 1:</label>
          <input 
            type="text" 
            value={input1} 
            onChange={(e) => setInput1(e.target.value)}
            placeholder='Ingresa tu nombre' 
          />
        </div>
        <div>
          <label>Opcion 2:</label>
          <input 
            type="text" 
            value={input2} 
            onChange={(e) => setInput2(e.target.value)}
            placeholder='Ingresa tu comida favorita' 
          />
        </div>
        <button type="submit">Enviar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {isValid && <Card input1={input1} input2={input2} />}
    </div>
  );
}

export default App;
