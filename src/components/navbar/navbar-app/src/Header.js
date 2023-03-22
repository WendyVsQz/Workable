import React from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import WorkIcon from '@mui/icons-material/Work';


const Header = () => {
  return (
    <React.Fragment>
        <AppBar sx={{background:'#1C94D9'}}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Typography sx={{ border: '1px' }}>
                     Workable <WorkIcon/>
                </Typography>
                <Tabs sx={{marginLeft: '20px'}} textColor='inherit'>
                    <Tab label="Home"/>
                    <Tab label="Career Tips"/>
                    <Tab label="Wishlist"/>
                </Tabs>
            </Toolbar>
            
        </AppBar>


    </React.Fragment>
    
  )
}

export default Header