import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getData } from '../utils/helpers';
import ReactPlayer from 'react-player';

const VideoDetail = () => {
    const {videoId} =useParams();
    const [videoDetail, setVideoDetail] =useState(null);

    useEffect(()=>{

        setVideoDetail(null);

        getData(`/details/?id=${videoId}`)
        .then((data)=>setVideoDetail(data));

    },[videoId]);

  return (
    <div className='flex h-[100vh] bg-[#0f0f0f] text-white'>
      <ReactPlayer
         url={`https://www.youtube.com/watch?v=${videoId}`}
         controls
         playing={true}
      />
    </div>
  )
}

export default VideoDetail
