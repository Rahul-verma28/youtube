import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import SuggestedvideoApi from "../utils/SuggestedvideoApi";
import Video from "./Video";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import Youtube from "./Youtube"; 
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Button from "@mui/material/Button";
import VideoDetailsApi from "../utils/VideoDetailsApi";

const VideoDetails = ({
  mainVideoId,
  setmainVideoId,
  setchannelId,
}) => {
  const [videoData, setVideoData] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const mainVideoData = await fetchVideo(mainVideoId);
        setVideoData(mainVideoData);

        const relatedVideosData = await fetchRelatedVideos(mainVideoId);
        setRelatedVideos(relatedVideosData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching video details:", error);
        setError("Failed to fetch video details. Please try again later.");
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, [mainVideoId]);

  const fetchVideo = async (mainVideoId) => {
    try {
      return await VideoDetailsApi({ mainVideoId });
    } catch (error) {
      console.error("Error fetching related videos:", error);
      return [];
    }
  };

  const fetchRelatedVideos = async (mainVideoId) => {
    try {
      return await SuggestedvideoApi({ mainVideoId });
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

  if (loading) {
    // Display a skeleton using Youtube component while loading
    return (
      <div className="pt-20 p-5 lg:px-20 lg:flex overflow-hidden w-full gap-6 bg-black text-white mx-auto">
        <div className="lg:w-[70%] h-full">
          <Youtube />
        </div>
        {/* <div className="lg:w-[30%]">
          <Youtube/>
        </div> */}
        <div className="lg:w-[30%] grid ">
          {[...Array(2)].map((_, index) => (
            <Youtube key={index}/>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const formattedDate = formatDistanceToNow(
    new Date(videoData.snippet.publishedAt)
    // { addSuffix: true }
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="pt-20 p-5 md:px-10 lg:px-20 lg:flex overflow-hidden w-full gap-6 bg-black text-white mx-auto">
        <div className="lg:w-[70%]">
          <div className=" ">
            <div className="relative  w-full sm:h-full">
            {videoData && (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${mainVideoId}`}
                className="react-player mx-auto rounded-2xl"
                width="100%"
                controls
              />
            )}
            </div>
          </div>

          <div className="w-full px-2">
            {videoData && (
              <div>
                <h1 className="text-base md:text-xl font-bold mt-5 cursor-default select-none">
                  {videoData.snippet.title}
                </h1>
                <div className="flex items-center justify-between">
                  <div>
                    <Link
                      to="/ChannelDetail"
                      onClick={() => {
                        scrollToTop();
                      }}
                    >
                      <p className="text-base sm:text-lg font-semibold py-3">
                        <AccountCircleOutlinedIcon sx={{ fontSize: 40 }} />{" "}
                        <span className="hover:underline">
                          {videoData.snippet.channelTitle}
                        </span>
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ borderRadius: 10, mr: 3 }}
                    >
                      Subscribe
                    </Button>
                    <ThumbUpOffAltIcon />{" "}
                    {formatViews(parseInt(videoData.statistics.likeCount))}
                  </div>
                </div>
                <div className="bg-gray-900 p-5 rounded-lg my-5">
                  <p>
                    <span>
                      • {formatViews(parseInt(videoData.statistics.viewCount))}{" "}
                      views{" "}
                    </span>
                    <span> • {formattedDate} </span>
                  </p>
                  <p className="text-sm text-blue-300 py-5">
                    {videoData.snippet.tags &&
                      videoData.snippet.tags.map((tag) => (
                        <span key={tag}>#{tag} </span>
                      ))}
                  </p>
                  <p className="text-sm text-gray-300 py-5 leading-relaxed overflow-hidden">
                    {videoData.snippet.description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:w-[30%] px-5 w-full">
          <h2 className=" text-xl py-3 font-bold">Suggested Videos</h2>
          {relatedVideos.map((video, index) => (
            <Link
              key={index}
              to="/VideoDetails"
              onClick={() => {
                setmainVideoId(video.id.videoId);
                setchannelId(video.snippet.channelId);
                scrollToTop();
              }}
            >
              <Video
                videoDirection={true}
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
      </div>
    </>
  );
};

export default VideoDetails;