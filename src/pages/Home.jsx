import { Link } from "react-router-dom";
import Main from "../components/main";
import Row from "../components/row/row";
import VideoPlayer from "../components/video/videoplayer";
import request from "../request";

function Home() {
  return (
    <div>
      <Main />
      <Row title="Trending" fetchURL={request?.requestTrending} />
      <Row title="Top Rated" fetchURL={request.requestTopRated} />
      <Row title="More To Know" fetchURL={request?.requestpopularTwo} />
      {/* <VideoPlayer fetchURL={request?.requestVideos} /> */}
     
     
    </div>
  );
}

export default Home;
