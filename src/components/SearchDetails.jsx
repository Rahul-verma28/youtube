import React, { useEffect, useState } from "react";
import Video from "./Video";
import { Link } from "react-router-dom";
import Youtube from "./Youtube";
import SearchedvideoApi from "../utils/SearchedvideoApi";

const SearchDetails = ({ setmainVideoId, searchedText, setchannelId}) => {
  const [SearchedVideos, setSearchedVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const relatedVideosData = await fetchSearchVideos(searchedText);
        setSearchedVideos(relatedVideosData);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch videos");
        setLoading(false);
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [searchedText]);

  const fetchSearchVideos = async (searchedText) => {
    try {
      return await SearchedvideoApi({ searchedText });
    } catch (error) {
      console.error("Error fetching related videos:", error);
      return [];
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-20 px-5 bg-black text-white w-full">
      <p className="text-lg md:p-5">Looking for - <span className=" underline font-semibold text-xl ">{searchedText}</span></p>
      {loading ? (
        // <Loader />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 p-5 md:px-10 mx-auto gap-5 ">
          {[...Array(6)].map((_, index) => (
            <Youtube key={index}/>
          ))}
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : SearchedVideos.length === 0 ? (
        <p>No related videos found.</p>
      ) :
      (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 py-5 md:px-10 mx-auto gap-5">
          {SearchedVideos.map((video) => (
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
              videoDirection= {false}
                title={video.snippet.title}
                thumbnail={
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
      {setSearchedVideos.length === 0 && 
      <p className="text-red-500 font-bold  ps-10">No results</p>}
    </div>
  );
};

export default SearchDetails;
