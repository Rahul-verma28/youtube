import axios from 'axios';

const CommentsApi =async () => {

    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
      params: {
        part: 'snippet',
        videoId: '7ghhRHRP6t4',
        maxResults: '100'
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export default CommentsApi
