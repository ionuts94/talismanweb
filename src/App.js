import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import DownloadPage from './pages/DownloadPage/DownloadPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import PVPEvent from './pages/PVPEvent/PVPEvent';
import ItemsPage from './pages/ItemsPage/ItemsPage';
import ShopPage from './pages/ShopPage/ShopPage';
import NavMenu from './components/NavMenu/NavMenu';
import Mobile from './pages/Mobile/Mobile';
import './App.css';
import ChangePasswordPage from './pages/ChangePasswordPage/ChangePasswordPage';

function App() {
  const [showMobile, setShowMobile] = useState(false);

  window.addEventListener('resize', function(){
    if (this.window.innerWidth < 1000) {
      setShowMobile(true);
    } else {
      if (showMobile) setShowMobile(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth < 1000) {
      setShowMobile(true);
    } else {
      if (showMobile) setShowMobile(false);
    }
  }, [])

  if (showMobile) return <Mobile />
  return (
    <div className="App">
      <div className='nav'>
          <NavMenu />
      </div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route path="/download" exact element={<DownloadPage />} />
        <Route path="/shop" exact element={<ShopPage />} />
        <Route path="/shop/:category" exact element={<ItemsPage />} />
        <Route path="/pvp" exact element={<PVPEvent />} />
        <Route path="/change-password" exact element={<ChangePasswordPage />} />
      </Routes> 
    </div>
  );
}

export default App;
