import React from 'react'
import Button from '@mui/material/Button';

const CommonButton = ({children, onClick, color, disabled, size, variant, sx}) => {
    return (
        <Button
            onClick={onClick}
            color={color}
            disabled={disabled}
            size={size}
            variant={variant}
            sx={sx}
        >
            {children}
        </Button>
    )
}

export default CommonButton