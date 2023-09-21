import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getData } from '../utils/helpers';
import ReactPlayer from 'react-player';
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";
import ChannelDetail from '../components/ChannelDetail';

const VideoDetail = () => {
  const { videoId } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relateds, setRelateds] = useState(null);
  // console.log(videoDetail);

  useEffect(() => {

    setVideoDetail(null);
    setRelateds(null);

    getData(`/details/?id=${videoId}`)
      .then((data) => setVideoDetail(data));

    getData(`/related-contents/?id=${videoId}`)
      .then((data) => setRelateds(data.contents
      ));

  }, [videoId]);

  return (

    <div className='lg:px-[100px] flex flex-col gap-5 lg:flex-row min-h-[100vh] bg-[#0f0f0f] text-white p-3'>
      <div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width={"100%"}
          height={"470px"}
        //  playing={true}
        />

        {!videoDetail ? <Loading /> : (
          <ChannelDetail videoDetail={videoDetail} />
        )}
      </div>


      <div className='flex flex-col justify-center gap-10 lg:max-w-[400px] sm:m-auto'>
        {!relateds ? "..." :
          relateds.map((item) => {
            if (item.type !== "video") return;
            return <VideoCard key={item.video.videoId} video={item.video}/>;
          })}


      </div>

    </div>




  )
}

export default VideoDetail
