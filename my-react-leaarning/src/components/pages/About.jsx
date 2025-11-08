function About(){
  return(
    <div  style={{
      padding: '40px',
      textAlign: 'center',
      minHeight: '80vh'
  }}>
    <h1 style={{
        fontSize: '48px', 
        color: '#3498db',
        marginBottom: '20px' 
    }}>📖 About Us</h1>
    <p style={{
       fontSize: '18px', 
       color: '#34495e',
       maxWidth: '700px',
       margin: '0 auto',
       lineHeight: '1.8'
    }}>We are a team of passionate developers learning React! 
                This app demonstrates routing and navigation in a 
                single-page application. Pretty cool, right?</p>
    </div>
  )
}
export default About;