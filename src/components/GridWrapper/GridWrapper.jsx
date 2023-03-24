import React from 'react'
import Grid from '@mui/material/Grid';
import { gridWrapperStyles } from './styles.js';

const GridWrapper = ({children}) => {

    return (
        <Grid item xs={8} sx={gridWrapperStyles}>
            {children}
        </Grid>
    )
}

export default GridWrapper