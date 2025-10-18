import { Products } from './components/Products.jsx'
import './App.css'
import { products } from './data/products.json' 

function App() {

  return (
   <Products products={ products }/>
  )
}

export default App
