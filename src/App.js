


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Header from './Header';
import Footer from './components/Footer';
import Products from './components/products/Products';
import Contacts from './components/products/Contacts';
import Certifications from './components/Certifications';
import Production from './components/products/Production';
function App() {
 
  
  
  return (
<div >
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/продукты" element={<Products />} />
    <Route path="/документы" element={<Certifications/>} />
    <Route path="/контакты" element={<Contacts/>} />
    <Route path="/Опредприятии" element={<Production/>} />

    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
