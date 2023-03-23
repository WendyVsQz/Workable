import React from 'react'
import Grid from '@mui/material/Grid';

const GridWrapper = ({children}) => {
    const gridWrapperStyles = {
            marginLeft: '200px', 
            marginRight: '200px', 
            backgroundColor: '#eaeff1', 
            padding: '250px 32px', 
            minHeight: 'calc(100vh - 50px)', 
            position: 'relative',
    };

    return (
        <Grid item xs={12} sx={gridWrapperStyles}>
            {children}
        </Grid>

    )
}

export default GridWrapper