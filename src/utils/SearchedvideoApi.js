import axios from 'axios';

const SearchedvideoApi = async ({searchedText}) => {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            q: searchedText,
            part: 'snippet,id',
            regionCode: 'US',
            maxResults: '50',
            order: 'date'
        },
        headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data.items;
    } catch (error) {
        console.error(error);
    }

    //     const options = {
    //         method: 'GET',
    //         url: 'https://youtube-v31.p.rapidapi.com/search',
    //         params: {
    //             q: searchedText,
    //             part: 'snippet,id',
    //             regionCode: 'US',
    //             maxResults: '50',
    //             order: 'date'
    //         },
    //         headers: {
    //             "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    //             'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await axios.request(options);
    //         const data = response.data.items;
    //         console.log(searchedText)
    //         return data;

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

}

export default SearchedvideoApi
