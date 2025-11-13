import useStore from './store'

function ProductList(){
  const addToCart = useStore((state)=> state.addToCart);

  const products = [
    {
      id: 1,
      name: 'React Book',
      price: 29.99
    },
    {
      id: 2,
      name: 'JavaScript Guide',
      price: 34.99
    },
    {
      id: 3,
      name: 'CSS Mastery',
      price: 24.99
    }
  ];

  return(
    <div style={{ 
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h2 style={{ color: '#2c3e50' }}>Products</h2>
      {products.map(product => (
        <div 
          key={product.id}
          style={{
            backgroundColor: 'white',
            padding: '20px',
            marginBottom: '15px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <h3 style={{ margin: '0 0 10px 0', color: '#34495e' }}>
              {product.name}
            </h3>
            <p style={{ margin: 0, color: '#7f8c8d', fontSize: '18px', fontWeight: 'bold' }}>
              ${product.price}
            </p>
          </div>
          <button
            onClick={() => addToCart(product)}
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}
export default ProductList;