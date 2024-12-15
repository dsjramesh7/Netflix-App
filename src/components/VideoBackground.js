import { useSelector } from "react-redux";

import useNowPlayingTrailerMovie from "../hooks/useNowPlayingTrailerMovie";

const VideoBackground = ({ movieId, title }) => {
  // const [trailer, setTrailer] = useState(null); // haam zindagi lol

  // mentos zindagi
  useNowPlayingTrailerMovie(movieId);
  const movieTrailer = useSelector(
    (store) => store.movies?.nowPlayingMovieTrailer
  );

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?controls=0&autoplay=1&mute=1&showinfo=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
