import { useState } from 'react';

function Counter(){
  const [count, setCount] = useState(0);
  return (
    <div  style={{
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '15px',
      textAlign: 'center',
      width: '300px',
      margin: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  }}>
      <h2 style={{ color: '#2c3e50', marginTop: '0' }}>Counter App</h2>
      <p style={{ fontSize: '48px', margin: '20px 0', color: '#3498db' }}>
      {count}</p>
      <button 
        onClick ={()=> setCount(count + 1)} 
        style = { 
          {
            backgroundColor: '#3498db',
            color: 'white',
            padding: '15px 30px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }
        }> 
        Click Me! 🚀
      </button>
      <button onClick ={()=> setCount(count - 1)}
         style={
          {
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '15px 30px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            margin: '5px'
         }
        }>
          Subtract
      </button>
      <button onClick = {() => setCount(0)}
        style={{
          backgroundColor: '#95a5a6',
          color: 'white',
          padding: '15px 30px',
          fontSize: '18px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          margin: '5px'
      }}>
        🔄 Reset
      </button>
    </div>
  )
}
export default Counter;