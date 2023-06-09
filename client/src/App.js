import './App.css';
import Home from './MyComponents/home/Home';
import ForMen from './MyComponents/shopnow/ForMen';
import ForWomen from './MyComponents/shopnow/ForWomen'
import Cart from './MyComponents/cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './MyComponents/header/Header';
import Wishlist from './MyComponents/wishlist/Wishlist';
import Checkout from './MyComponents/placedetail/Checkout'
import Profile from './MyComponents/myprofile/Profile'
import Order from './MyComponents/orders/Order';
import ProductDetail from './MyComponents/details/ProductDetail';
import { Provider } from 'react-redux';
import store from './MyComponents/cart/Store';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <Provider store={store}>
              <BrowserRouter>
                <Header/>
                  <Routes>
                      <Route path='/' element={<Home/>}/>
                      <Route path='/product/:id' element={<ProductDetail/>}/>
                      <Route path='/men' element={<ForMen/>}/>
                      <Route path='/women' element={<ForWomen/>}/>
                      <Route path='/cart' element={<Cart/>}/>
                      <Route path='/wishlist' element={<Wishlist/>}/>
                      <Route path='/detail' element={<Checkout/>}/>
                      <Route path='/account' element={<Profile/>}/>
                      <Route path='/orders' element={<Order/>}/>
                    </Routes>
                    <ToastContainer/>
            </BrowserRouter>
      </Provider>

        
       
      
  );
}

export default App;
