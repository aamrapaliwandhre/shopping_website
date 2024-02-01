import logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/Navbar/navbar';
import{BrowserRouter , Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';
import Footer from './Componenets/Footer/Footer';
import men_banner from "./Componenets/Assests/banner_mens.png"
import women_banner from "./Componenets/Assests/banner_women.png"
import kids_banner from "./Componenets/Assests/banner_kids.png"

function App() {
  return (
    <div >
      {/* routes for pages */}
      <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* shop is a home page */}
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSingup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
