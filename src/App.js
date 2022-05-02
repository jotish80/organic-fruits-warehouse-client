
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Items from './components/Items/Items';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Blogs from './components/Blogs/Blogs';
import Navigation from './components/Navigation/Navigation';

import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ItemDetails from './components/ItemDetails/ItemDetails';


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/items' element={<Items />}></Route>
        <Route path='/items/:itemsId' element={
          <RequireAuth>
            <ItemDetails />
          </RequireAuth>
        }></Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={<MyItems />}></Route>
        <Route path='/Login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/blogs' element={<Blogs />} ></Route>
        <Route path='*' element={<NotFound />} ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
