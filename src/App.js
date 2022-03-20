import { Box, Toolbar } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home/Home/Home';
import Footer from './page/share/Footer/Footer';
import HeaderNav from './page/share/HeaderNav/HeaderNav';

function App() {
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <HeaderNav />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 1, width: { sm: `calc(100% - ${120}px)` } }}
        >
          <Toolbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          <Footer/>
        </Box>
      </Box>
    </div>
  );
}

export default App;
