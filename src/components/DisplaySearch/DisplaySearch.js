import React from 'react'
import BasicCard from '../BasicCard/BasicCard';
import { Grid } from '@mui/material';
import SearchBar from '../Searchbar/SearchBar';
import Box from '@mui/material/Box';
import CommonButton from '../CommonButton/CommonButton';
import GridWrapper from '../GridWrapper/GridWrapper';

const DisplaySearch = () => {

    const getSearchBar = () => {
        const handleChange = (value) => {
            console.log(value);
        };

        const searchBtn = () => {
            console.log('click')
        };

        const headerStyles = {
            wrapper: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: '20px',
                paddingRight: '20px',
                height: '65px',
                backgroundColor: '#f5f5f5',
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            },
            searchButton: {
                fontSize: '1.05rem',
                borderRadius: '2.05rem',
            },
        }

        return (
            <Box sx={headerStyles.wrapper}>
                <SearchBar
                    placeholder='Search your next job...'
                    onChange={(event) => handleChange(event.target.value)}
                    searchBarWidth='720px'
                />
                <Box>
                    <CommonButton
                        variant="contained"
                        onClick={searchBtn}
                        size="large"
                        sx={headerStyles.searchButton}
                    >
                        Search
                    </CommonButton>
                </Box>
            </Box>
        )
    };

    return (
        <GridWrapper>
            <BasicCard 
                header={getSearchBar()}           
            />
        </GridWrapper>
    )
}

export default DisplaySearch