function ProfileCard(){
  const cardStyle = {
    backgroundColor : 'purple',
    padding : '20px',
    borderRadius: '10px',
    width: '300px',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };
  const titleStyle = {
    color: '#333',
    marginTop: '0',
    fontSize: '24px'
  }
  const textStyle = {
    color: '#766',
    lineHeight: '1.6'
  }
  return (
    <div style ={cardStyle}>
      <h2  sytle={titleStyle}>Neon Muthoni</h2>
      <p style={textStyle}>Age : 25</p>
      <p style ={textStyle}>Job : Software Engineer</p>
    </div>
  )
}

export default ProfileCard;