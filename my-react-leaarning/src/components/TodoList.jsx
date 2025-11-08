import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '15px',
            width: '400px',
            margin: '20px',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ color: '#2c3e50', marginTop: '0' }}>
                📝 My Todo List
            </h2>
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="What needs to be done?"
                    style={{
                        flex: '1',
                        padding: '12px',
                        fontSize: '16px',
                        border: '2px solid #3498db',
                        borderRadius: '8px'
                    }}
                />
                
                <button 
                    onClick={addTodo}
                    style={{
                        backgroundColor: '#3498db',
                        color: 'white',
                        padding: '12px 24px',
                        fontSize: '16px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    Add
                </button>
            </div>
            
            <div>
                {todos.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#95a5a6' }}>
                        No todos yet! Add one above 👆
                    </p>
                ) : (
                    todos.map((todo, index) => (
                        <div 
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '15px',
                                backgroundColor: '#ecf0f1',
                                borderRadius: '8px',
                                marginBottom: '10px'
                            }}
                        >
                            <span style={{ fontSize: '16px' }}>{todo}</span>
                            
                            <button 
                                onClick={() => deleteTodo(index)}
                                style={{
                                    backgroundColor: '#e74c3c',
                                    color: 'white',
                                    padding: '8px 16px',
                                    fontSize: '14px',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer'
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>
            
            <p style={{ 
                marginTop: '20px', 
                textAlign: 'center', 
                color: '#7f8c8d',
                fontSize: '14px' 
            }}>
                Total tasks: {todos.length}
            </p>
        </div>
    );
}

export default TodoList;