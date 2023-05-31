
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './components/pages/AuthPage/AuthPage';
import ProductListPage from './components/pages/ProductListPage/ProductListPage';
import ProductPage from './components/pages/ProductPage/ProductPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductListPage />} />
        <Route path='/signIn' element={<AuthPage signIn />} />
        <Route path='/signUp' element={<AuthPage signUp />} />
        <Route path='/product/:productId' element={<ProductPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
