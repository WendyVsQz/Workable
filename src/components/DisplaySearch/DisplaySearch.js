import React, { useEffect, useRef, useState } from 'react';
import BasicCard from '../BasicCard/BasicCard';
import SearchBar from '../Searchbar/SearchBar';
import Box from '@mui/material/Box';
import CommonButton from '../CommonButton/CommonButton';
import GridWrapper from '../GridWrapper/GridWrapper';
import { cardheaderStyles } from './styles';

const DisplaySearch = () => {

    // react capturing input
    const [searchValue, setSearchValue] = useState("");

    const inputRef = useRef();
    console.log({ inputRef });

    const getSearchBar = () => {

        // Search area Listener
        function handleChange(event) {
            setSearchValue(event.target.value);
            console.log(event.target.value);
        }

        // const handleChange = (value) => {
        //     console.log(value);
        // };

        const searchBtn = () => {
            console.log('click')
        };

        return (
            <Box sx={cardheaderStyles.wrapper}>
                <SearchBar
                    ref={inputRef}
                    placeholder='Search your next job... '
                    value={searchValue}
                    onChange={handleChange}
                    //onChange={(event) => handleChange(event.target.value)}
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