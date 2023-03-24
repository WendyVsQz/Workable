import axios from 'axios';

export const apiCall = () => {


    axios.get('/api/1.0/search', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Basic Yzc5YmE0MTgtNGNkNi00Y2FjLTk5NDUtODUwZWNjYzU2ZTJmOg=='
        },
        params: {
            keywords: 'Qa',
            location: 'London'
        }
    }).then(response => {
        console.log(response.data);
        // do something with the response data
    }).catch(error => {
        console.log(error);
    });

}
