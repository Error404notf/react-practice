import useStore from './store'

function Counter(){
  const count = useStore((state) => state.count)
  const increment = useStore((state)=> state.increment);
  const decrement = useStore((state)=> state.decrement);
  const reset = useStore((state)=> state.reset);
  
  return (
    <div style={{
      textAlign: 'center',
      padding: '40px',
      backgroundColor: 'white',
      borderRadius: '15px',
      maxWidth: '400px',
      margin: '50px auto',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#2c3e50' }}>Zustand Counter</h2>
      
      <p style={{ 
        fontSize: '64px', 
        color: '#3498db',
        margin: '30px 0',
        fontWeight: 'bold'
      }}>
        {count}
      </p>
      
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button 
          onClick={decrement}
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          ➖ Decrease
        </button>
        
        <button 
          onClick={reset}
          style={{
            backgroundColor: '#95a5a6',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          🔄 Reset
        </button>
        
        <button 
          onClick={increment}
          style={{
            backgroundColor: '#2ecc71',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold'
          }}
        >
          ➕ Increase
        </button>
      </div>
    </div>
  );
}
export default Counter;