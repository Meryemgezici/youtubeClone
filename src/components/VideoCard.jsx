import millify from 'millify';
import React from 'react'
import { FiMoreVertical } from "react-icons/fi"
import { Link, useParams } from 'react-router-dom';

const VideoCard = ({ video }) => {
    
  
    return (
        <Link to={`/watch/${video.videoId}`} className='bg-[#0f0f0f] text-white '>
            <div className='relative'>
                <img className='rounded-lg w-full' src={video.thumbnails[1] ? video.thumbnails[1].url : video.thumbnails[0].url} alt="" />
                <span className='absolute p-1 bg-black rounded-lg right-2 bottom-2 '>{video.lengthSeconds
                }</span>
            </div>

            <div className='flex gap-3 mt-5 justify-between'>
                <img className='rounded-full w-12 h-12' src={video.author.avatar[0].url} alt="" />
                <div>
                    <h3 className='font-bold text-1xl'>{video.title}</h3>
                    <p>{video.author.title}</p>
                    <div className='flex gap-3'>
                        <p>{millify(video.stats.views) 
                        }</p>
                        <p>{video.publishedTimeText}</p>
                    </div>

                </div>
               
                  <FiMoreVertical />

            </div>
        </Link>
    )
}

export default VideoCard
