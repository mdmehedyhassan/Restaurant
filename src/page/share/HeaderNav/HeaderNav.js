import * as React from 'react';
import './HeaderNav.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';
import brandImg2 from '../../../images/icon/brand-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faHeadset, faHouse, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-regular-svg-icons';

const drawerWidth = 120;

function HeaderNav(props) {
  const location = useLocation();
  const path = location.pathname;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //active-btn-style
  const drawer = (
    <div style={{ backgroundColor: '#2b2b2b', height: '250%' }}>
      <div className="text-center">
        <img style={{ width: '50%', padding: '10px 0' }} src={brandImg2} alt="" />
      </div>
      <List>
        <Link to="/home" className={`nav-link-style ${path === '/home' ? 'active-btn-style' : ''} `}>
          <FontAwesomeIcon icon={faHouse} /> Home
        </Link>
      </List>
      <List>
        <Link to="/about" className={`nav-link-style ${path === '/about' ? 'active-btn-style' : ''} `}>
          <FontAwesomeIcon icon={faCircleInfo} /> About us
        </Link>
      </List>
      <List>
        <Link to="/menu" className={`nav-link-style ${path === '/menu' ? 'active-btn-style' : ''} `}>
          <FontAwesomeIcon icon={faTableCellsLarge} /> Menu
        </Link>
      </List>
      <List>
        <Link to="/gallery" className={`nav-link-style ${path === '/gallery' ? 'active-btn-style' : ''} `}>
          <FontAwesomeIcon icon={faImage} /> Gallery
        </Link>
      </List>
      <List>
        <Link to="/contact" className={`nav-link-style ${path === '/contact' ? 'active-btn-style' : ''} `}>
          <FontAwesomeIcon icon={faHeadset} /> Contact us
        </Link>
      </List>
      <List>
        <a href="https://github.com/mdmehedyhassan/restaurant" target="_blank" rel="noopener noreferrer" className="mt-2 btn btn-outline-light">
          Github code
        </a>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'gray'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ fontWeight: 800 }} noWrap component="div">
            Restaurant
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

HeaderNav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default HeaderNav;