import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'Abstract', 'TeamMembers','LogIn','SignUp'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const navLinkStyles=({isActive})=>{
    return {
        textDecoration:isActive?"underline":"none",
        // color:isActive===true?"black":"none",
        // backgroundColor:isActive===true?"yellow":"none"       
    };
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        VFood
      </Typography>
      <Divider />
      <div >
        {navItems.map((item) => (
            <div style={{display:"block", marginTop:"10px",textAlign:"center"}} key={item} >
                <Button   component={NavLink} to={`/${item}`} style={navLinkStyles}>{item}</Button>
            </div>
        ))}
      </div>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
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
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{marginLeft:"3vw"}}>
            VFood
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }}} >
            {navItems.map((item) => (
              <Button key={item} component={NavLink} to={`/${item}`} sx={{ color: '#fff' }} style={navLinkStyles}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar> 
      </AppBar>
      <Box component="nav">
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
      </Box>
    </Box>
  );
}



export default DrawerAppBar;