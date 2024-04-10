import axios from 'axios';

const ChannelVideosApi = async({channelId}) => {

    const options = {
      method: 'GET',
      url: 'https://youtube-v31.p.rapidapi.com/search',
      params: {
        channelId: channelId,
        part: 'snippet,id',
        order: 'date',
        maxResults: '50'
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      }
    };
    
    try {
        const response = await axios.request(options);
        const data = response.data.items;
        return data;
    } catch (error) {
        console.error(error);
    }
}

export default ChannelVideosApi
