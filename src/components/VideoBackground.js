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
    <>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?controls=0&autoplay=1&mute=1&showinfo=0&loop=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </>
  );
};

export default VideoBackground;
