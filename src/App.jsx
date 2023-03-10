import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
