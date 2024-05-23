//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import React from 'react';
function Card({ input1, input2 }) {
  return (
    <div>
      <h2>Hola {input1}!</h2>
      <p>Tu nombre: {input1}</p>
      <p>Tu comida favorita: {input2}</p>
    </div>
  );
}

export default Card;
