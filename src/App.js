 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import Items from './components/Items/Items';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Blogs from './components/Blogs/Blogs';
import Navigation from './components/Navigation/Navigation';
 
 
 function App() {
  return (
    <div>
       <Navigation />
       <Banner />
       <Login />
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/items' element={<Items />}></Route>
         <Route path='/manageitems' element={ <ManageItems />}></Route>
         <Route path='/myitems' element={<MyItems /> }></Route>
         <Route path='/Login' element={ <Login />} ></Route>
         <Route path='/register' element={ <Register />} ></Route>
         <Route path='/blogs' element={ <Blogs />} ></Route>
       </Routes>
        
    </div>
  );
}

export default App;
