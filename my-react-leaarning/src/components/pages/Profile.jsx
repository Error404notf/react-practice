function Profile(){
  return(
    <div style={{
      padding: '40px',
      textAlign: 'center',
      minHeight: '80vh'
    }}>
      <h1 style={{
        fontSize: '48px', 
        color: '#9b59b6',
        marginBottom: '20px' 
      }}>👤 My Profile</h1>
            <div style={{
                maxWidth: '400px',
                margin: '30px auto',
                backgroundColor: 'white',
                padding: '40px',
                borderRadius: '20px',
                boxShadow: '0 8px 16px rgba(0,0,0,0.15)'
            }}>
                <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: '#9b59b6',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '48px',
                    fontWeight: 'bold'
                }}>
                    ME
                </div>
                <h2 style={{ color: '#2c3e50', marginBottom: '10px' }}>
                    Your Name
                </h2>
                <p style={{ color: '#7f8c8d', marginBottom: '20px' }}>
                    React Developer in Training 🚀
                </p>
                <p style={{ color: '#34495e', lineHeight: '1.6' }}>
                    Learning React Router and building awesome applications!
                </p>
            </div>
    </div>
  )
}