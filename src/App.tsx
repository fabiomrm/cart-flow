import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { Header } from './components/Header';



function App() {
  return (
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
   </BrowserRouter>
    
  );
}

export default App;
