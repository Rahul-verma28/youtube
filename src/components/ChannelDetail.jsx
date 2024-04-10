import React, { useEffect, useState } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";
import ChannelDetailsApi from "../utils/ChannelDetailsApi";
import Loader from "./Loader";
import Button from "@mui/material/Button";
import ChannelVideosApi from "../utils/ChannelVideosApi";

const ChannelDetail = ({ setmainVideoId, channelId }) => {
  const [channel, setchannel] = useState({});
  const [channelVideos, setchannelVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelVideos = await fetchChannelVideo({ channelId });
        setchannelVideos(channelVideos);

        const data = await ChannelDetailsApi({ channelId });
        if (data && data.statistics.videoCount > 0) {
          // Check if channelVideos exist for the channel
          setchannel(data);
          console.log(data);
          setLoading(false);
        } else {
          console.log(data);
          setError("No videos found for this channel.");
          setLoading(false);
        }
      } catch (error) {
        setError("Failed to fetch videos");
        setLoading(false);
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos(channelId);
  }, [channelId]);

  const fetchChannelVideo = async ({ channelId }) => {
    try {
      return await ChannelVideosApi({ channelId });
    } catch (error) {
      console.error("Error fetching related videos:", error);
      return [];
    }
  };

  const formatViews = (views) => {
    if (views < 1000) {
      return views;
    } else if (views < 1000000) {
      return `${(views / 1000).toFixed(1)}K`;
    } else {
      return `${(views / 1000000).toFixed(1)}M`;
    }
  };

  return (
    <div className="md:pt-20 bg-black text-white w-full h-full ">
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <div className="w-full md:w-[90%] mx-auto">
            {channel?.brandingSettings?.image?.bannerExternalUrl ? (
              <img
                src={channel.brandingSettings.image.bannerExternalUrl}
                alt="banner"
                className="w-full  md:h-[200px] object-cover p-2 px-10 rounded-3xl"
              />
            ) : (
              <div className="w-full h-[200px] px-10 rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
            )}
            <div className="lg:flex px-10 md:py-5 gap-5">
              <div>
                <img
                  src={
                    channel.snippet.thumbnails.high?.url ||
                    channel.snippet.thumbnails.default.url
                  }
                  alt="logo"
                  className="w-[200px] h-[200px] rounded-full"
                />
              </div>
              <div>
                <h2 className="text-5xl font-bold pb-3">
                  {channel.snippet.title}
                </h2>
                <p className="flex text-gray-300 py-2">
                  {channel.snippet.customUrl} •{" "}
                  {formatViews(parseInt(channel.statistics.subscriberCount))}{" "}
                  subscribers • {channel.statistics.videoCount} videos
                </p>
                <p className="text-gray-300 ">
                  {channel.snippet.description.substring(0, 100)}..
                </p>

                <Button
                  variant="contained"
                  color="error"
                  sx={{ borderRadius: 10, my: 3 }}
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 p-5 md:px-10 mx-auto gap-5">
              {channelVideos.map((channelVideos) => (
                <Link
                  key={channelVideos.id.videoId}
                  to="/VideoDetails"
                  onClick={() => setmainVideoId(channelVideos.id.videoId)}
                >
                  <Video
                    videoDirection={false}
                    title={channelVideos.snippet.title}
                    thumbnail={
                      (channelVideos.snippet.thumbnails.maxres &&
                        channelVideos.snippet.thumbnails.maxres.url) ||
                      (channelVideos.snippet.thumbnails.high &&
                        channelVideos.snippet.thumbnails.high.url) ||
                      channelVideos.snippet.thumbnails.default.url
                    }
                    // channelTitle={channelVideos.snippet.channelTitle}
                    publishedAt={channelVideos.snippet.publishedAt}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChannelDetail;
