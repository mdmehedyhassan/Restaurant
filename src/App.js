import { Box, Toolbar } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/home/Home/Home';
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
          </Routes>

        </Box>
      </Box>
    </div>
  );
}

export default App;
