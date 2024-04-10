import React, { useEffect, useState } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";
import SuggestedvideoApi from "../utils/SuggestedvideoApi";
import Youtube from "./Youtube";
import OptionsBar from "./OptionsBar";

const Home = ({ setmainVideoId, mainVideoId, setchannelId }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const relatedVideosData = await fetchRelatedVideos(mainVideoId);
        setRelatedVideos(relatedVideosData);
          setLoading(false);
      } catch (error) {
        setError("Failed to fetch videos");
        setLoading(false);
        console.error("Error fetching videos:", error);
      }
    };
  
    fetchVideos();
  }, [mainVideoId]);

  const fetchRelatedVideos = async (mainVideoId) => {
    try {
      return await SuggestedvideoApi({ mainVideoId });
    } catch (error) {
      console.error("Error fetching related videos:", error);
      return [];
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-16 bg-black text-white w-full">
      <OptionsBar />
      {loading ? (
        // <Loader />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 p-5 md:px-10 mx-auto gap-5 ">
          {[...Array(6)].map((_, index) => (
            <Youtube key={index}/>
          ))}
        </div>
      ) : error ? (
        <p>Error: {error}</p> // Display error message
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 p-5 md:px-10 mx-auto gap-5">
          {relatedVideos.map((video) => (
            <Link
              key={video.id.videoId}
              to="/VideoDetails"
              onClick={() => {
                setmainVideoId(video.id.videoId);
                setchannelId(video.snippet.channelId);
                scrollToTop();
              }}
            >
              <Video
                videoDirection={false}
                title={video.snippet.title}
                thumbnail={
                  (video.snippet.thumbnails.maxres &&
                    video.snippet.thumbnails.maxres.url) ||
                  (video.snippet.thumbnails.high &&
                    video.snippet.thumbnails.high.url) ||
                  video.snippet.thumbnails.default.url
                }
                channelTitle={video.snippet.channelTitle}
                publishedAt={video.snippet.publishedAt}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
