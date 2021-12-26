import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import DownloadPage from './pages/DownloadPage/DownloadPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import NavMenu from './components/NavMenu/NavMenu';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='nav'>
          <NavMenu />
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route path="/download" exact element={<DownloadPage />} />
      </Routes>
    </div>
  );
}

export default App;
