import React, { useState } from 'react';
import BasicCard from '../BasicCard/BasicCard';
import SearchBar from '../searchbar/SearchBar';
import Box from '@mui/material/Box';
import CommonButton from '../CommonButton/CommonButton';
import GridWrapper from '../GridWrapper/GridWrapper';
import { cardheaderStyles } from './styles';
import { ResetSearch } from '../ResetSearch/Resetsearch';

const DisplaySearch = () => {

    // react capturing input
    const [searchValue, setSearchValue] = useState("");

    const getSearchBar = () => {

        // Search area Listener
        function handleChange(event) {
            setSearchValue(event.target.value);
            console.log(searchValue);

            const { name, value } = event.target;
            setSearchValue((prevState) => {
                return {
                    ...prevState,
                    [name]: value,
                };
            });    
        };

        // Function to clear text field
        function onClick() {
            setSearchValue('');
            console.log('in onclick function');
        }


        // ====== Start searching Job Here with API =======
        const searchBtn = () => {  
                
            // ==== For now use the "searchValue" variable returned   ==== //
            // ==== in React Hook - useState("") - on code line No 13 ==== //


            //const userSearchedInput = searchValue;
            //console.log(userSearchedInput);
            console.log('click');
            
            // Need to clear search field here within this function!!
            onClick();   
        }

        return (
            <Box sx={cardheaderStyles.wrapper}>
                <SearchBar
                    placeholder='Search your next job... '
                    value={searchValue}
                    onChange={handleChange}
                    searchBarWidth='720px'
                />
                <ResetSearch 
                    searchValue={searchValue} 
                    setSearchValue={setSearchValue}
                    handleChange={handleChange} />
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