import { useState, useEffect } from 'react';

function TitleChanger() {
    const [count, setCount] = useState(0);

    // This runs every time count changes!
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center',
            width: '300px',
            margin: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
            <h3>Click and watch the browser tab! 👆</h3>
            
            <p style={{ fontSize: '48px', margin: '20px 0', color: '#3498db' }}>
                {count}
            </p>
            
            <button 
                onClick={() => setCount(count + 1)}
                style={{
                    backgroundColor: '#3498db',
                    color: 'white',
                    padding: '15px 30px',
                    fontSize: '18px',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                }}
            >
                Click Me!
            </button>
        </div>
    );
}

export default TitleChanger;