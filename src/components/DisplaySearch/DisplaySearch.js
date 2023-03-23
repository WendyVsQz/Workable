import React from 'react'
import BasicCard from '../BasicCard/BasicCard';
import { Grid } from '@mui/material';
import SearchBar from '../Searchbar/SearchBar';
import Box from '@mui/material/Box';
import CommonButton from '../CommonButton/CommonButton';
import GridWrapper from '../GridWrapper/GridWrapper';
import { cardheaderStyles } from './styles';

const DisplaySearch = () => {

    const getSearchBar = () => {
        const handleChange = (value) => {
            console.log(value);
        };

        const searchBtn = () => {
            console.log('click')
        };


        return (
            <Box sx={cardheaderStyles.wrapper}>
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
                        sx={cardheaderStyles.searchButton}
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