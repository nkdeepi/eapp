import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './Pages/Category';
import Header from './Pages/Header';
import Home from './Pages/Home';
import About from './Pages/About'
import Registration from './Pages/Registration';

function App() {
  return (
    <>
    <div>

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='About' element={<About/>}></Route>
      {/* this route is for products */}
      <Route path='Category' element={<Category/>}></Route>    
      <Route path='Registration' element={<Registration/>}></Route>  

    </Routes>
   
    </BrowserRouter>
    
    </div>
    </>
    
  );
}

export default App;
