import axios from 'axios';

const VideoDetailsApi = async({mainVideoId}) => {
    const options = {
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/videos",
        params: {
          part: "contentDetails,snippet,statistics",
          id: mainVideoId,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };
  
      try {
        const response = await axios.request(options);
        return response.data.items[0];
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch video details.");
      }
}

export default VideoDetailsApi
