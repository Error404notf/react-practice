import useStore from './store'

function ShoppingCart(){
  const cart = useStore((state)=> state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ 
      padding: '20px',
      maxWidth: '600px',
      margin: '20px auto',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    }}>
      <h2 style={{ color: '#2c3e50' }}>
        Shopping Cart ({cart.length} items)
      </h2>
      
      {cart.length === 0 ? (
        <p style={{ color: '#7f8c8d', textAlign: 'center', padding: '20px' }}>
          Your cart is empty! 🛒
        </p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div 
              key={index}
              style={{
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <strong>{item.name}</strong>
                <p style={{ margin: '5px 0 0 0', color: '#7f8c8d' }}>
                  ${item.price}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          ))}
          
          <div style={{ 
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '2px solid #ecf0f1'
          }}>
            <div style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}>
              <span>Total:</span>
              <span style={{ color: '#27ae60' }}>${total.toFixed(2)}</span>
            </div>
            
            <button
              onClick={clearCart}
              style={{
                backgroundColor: '#95a5a6',
                color: 'white',
                padding: '12px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
                fontSize: '16px'
              }}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;