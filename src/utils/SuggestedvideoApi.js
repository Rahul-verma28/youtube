import axios from "axios";

const SuggestedvideoApi = async ({ mainVideoId }) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      relatedToVideoId: mainVideoId,
      part: "id,snippet",
      type: "video",
      maxResults: "50",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    if (response.data && response.data.items) {
      console.log(mainVideoId);
      return response.data.items;
    } else {
      throw new Error("No video items found in the response");
    }
  } catch (error) {
    throw new Error(`Failed to fetch suggested videos: ${error.message}`);
  }
};

export default SuggestedvideoApi;
