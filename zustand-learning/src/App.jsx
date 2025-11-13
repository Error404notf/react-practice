import ShoppingCart from "./ShoppingCart";
import ProductList from './ProductList'

function App() {
  return (
    <div style={{ 
      backgroundColor: '#ecf0f1', 
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>
      🛍️ Zustand Shopping Cart
      </h1>
      <ShoppingCart />
      <ProductList />
    </div>
  );
}

export default App;