import { useState } from "react";

function GreetingApp(){
  const [name, setName] = ''

  return (
    <div>
      <h2>What's your name?</h2>
      <input type='text' value={name} onChange={(e)=> setName(e.target.value)}
      placeholder='Type your name here...' 
      style={{
        width: '100%',
        padding: '15px',
        fontSize: '16px',
        border: '2px solid #3498db',
        borderRadius: '8px',
        boxSizing: 'border-box'
    }}/>{name&& (
      <div style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: '#3498db',
          borderRadius: '8px',
          color: 'white',
          fontSize: '20px',
          textAlign: 'center'
      }}>
          Hello, {name}! 👋
      </div>
 

    )}
    </div>
  );
}
export default GreetingApp;