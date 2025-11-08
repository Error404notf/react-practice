import { useState} from 'react';

function LikeButton(){
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handeClick = () =>{
    if(isLiked) {
      setIsLiked(false);
      setLikeCount(likeCount - 1)
    }else {
      setIsLiked(true)
      setLikeCount(likeCount + 1)
    }
  };
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '15px',
      textAlign: 'center',
      width: '300px',
      margin: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  }} >
      <h3>Like this post!</h3>
      <button  onClick={handeClick}
                style={{
                    backgroundColor: isLiked ? '#e74c3c' : '#95a5a6',
                    color: 'white',
                    padding: '15px 30px',
                    fontSize: '24px',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                }}>{isLiked ? '❤️' : '🤍'} {likeCount}</button>
      <p style={{ marginTop: '15px', color: '#7f8c8d' }}> {isLiked ? 'You liked this!' : 'Click to like'}</p>
    </div>
  )
}
export default LikeButton;