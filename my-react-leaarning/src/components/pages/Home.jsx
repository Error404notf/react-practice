function Home(){
  return(
    <div style={{
      padding: '40px',
            textAlign: 'center',
            minHeight: '80vh'
    }}>
      <h1 style={{
         fontSize: '48px', 
         color: '#2c3e50',
         marginBottom: '20px' 
      }}>🏠 Welcome Home!</h1>
      <p style={{
         fontSize: '20px', 
         color: '#7f8c8d',
         maxWidth: '600px',
         margin: '0 auto'
      }}>
        This is the home page of our awesome React app. 
        Click the links in the navigation to explore!
      </p>
    </div>
  )
}
export default Home;