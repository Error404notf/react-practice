import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#2c3e50',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h2 style={{ 
                    color: 'white', 
                    margin: '0',
                    fontSize: '24px' 
                }}>
                    My React App 🚀
                </h2>
                
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Link 
                        to="/" 
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '18px',
                            padding: '8px 16px',
                            borderRadius: '5px',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        Home
                    </Link>
                    
                    <Link 
                        to="/about" 
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '18px',
                            padding: '8px 16px',
                            borderRadius: '5px',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        About
                    </Link>
                    
                    <Link 
                        to="/contact" 
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '18px',
                            padding: '8px 16px',
                            borderRadius: '5px',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        Contact
                    </Link>
                    
                    <Link 
                        to="/profile" 
                        style={{
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '18px',
                            padding: '8px 16px',
                            borderRadius: '5px',
                            transition: 'background-color 0.3s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
                        onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        Profile
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;