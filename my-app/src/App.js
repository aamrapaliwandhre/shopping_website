import logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/Navbar/navbar';
import{BrowserRouter , Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';

function App() {
  return (
    <div >
      {/* routes for pages */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* shop is a home page */}
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSingup/>}/>
      </Routes>



      </BrowserRouter>

    </div>
  );
}

export default App;
