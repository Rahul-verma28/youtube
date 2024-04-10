import axios from 'axios';

const ChannelDetailsApi = async({channelId}) => {

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/channels',
  params: {
    part: 'snippet,statistics',
    id: channelId
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data.items[0]);
    return response.data.items[0];
} catch (error) {
	console.error(error);
}
}

export default ChannelDetailsApi
