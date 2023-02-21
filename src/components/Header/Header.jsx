import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


// import useStyles from './styles.js';

const Header = () => {
  // const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar sx={{p:3, display:'flex', justifyContent:'space-between' }}>
        <Typography variant="h5" >
          Travel Advisor
        </Typography>
        <Box sx={{display:"flex"}}>

          <Typography variant="h6" > Explore new places </Typography>
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
            
              <div >
                <SearchIcon  sx={{ml:2}}/>
              </div>
              <InputBase placeholder="Search…"/>
            
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
