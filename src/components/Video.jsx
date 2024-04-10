import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

const Video = ({
  thumbnail,
  title,
  channelTitle,
  publishedAt,
  id,
  videoDirection
}) => {
  const formattedDate = formatDistanceToNow(new Date(publishedAt), {
    addSuffix: true,
  });

  return (
    <div
      className={`mx-auto my-1 shadow-2xl ${
        videoDirection ? "grid grid-cols-2 gap-2" : ""
      }`}
      id={id}
      onClick={(e) => {
        console.log(id);
      }}
    >
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt="Thumbnail"
          className={`w-full rounded-3xl object-cover ${
            videoDirection ? "h-32 sm:h-40 lg:h-28 md:h-60" : " h-64 sm:h-48 md:h-52"
          }`}
        />
      </div>
      <div className="py-2">
        <h2 className="font-bold text-sm">
          {title.length > 30
            ? `${
                videoDirection ? title.substring(0, 30) : title.substring(0, 60)
              }...`
            : title}
        </h2>
        <Link
          to="/ChannelDetail"
          onClick={() => {
            // scrollToTop();
          }}
        >
          <h4 className="text-sm text-gray-300 hover:underline">
            {channelTitle}
          </h4>
        </Link>
        <h4 className="text-sm text-gray-300">• {formattedDate}</h4>
      </div>
    </div>
  );
};

export default Video;
