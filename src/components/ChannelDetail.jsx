import React from 'react'
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import millify from 'millify';
import 'moment/locale/tr';
import moment from 'moment/moment';
import StringArea from './StringArea';

const ChannelDetail = ({ videoDetail }) => {
  return (
    <>
      <h2 className="mt-3 text-xl  font-bold p-3">{videoDetail.title}</h2>
      {/*  kanal hakkında bilgiler */}
      <div className='flex justify-between items-center p-3'>
        <div className='flex items-center gap-4'>
          <img className='rounded-full w-12 h-12' src={videoDetail.author.avatar[0].url} alt="" />

          <div>
            <h4 className="font-bold">{videoDetail.author.title}</h4>
            <p>{videoDetail.author.stats.subscribersText}</p>
          </div>
          <button className='bg-white h-9 rounded-full text-black px-3 transition hover:bg-[#bebebe]'>Abone ol</button>
        </div>

        <div className="flex items-center rounded-full py-1 px-6 text-lg bg-[#4b4a4a] cursor-pointer">
          <div className="flex gap-2 items-center pr-3 border-r-2 border-white">
            <AiFillLike />
            <span>{millify(videoDetail.stats.likes)}</span>
          </div>
          <div className="pl-2">
            <AiFillDislike />
          </div>
        </div>
      </div>

      {/* Video hakkında bilgiler */}
      <div className='bg-[#383838] rounded p-2 mt-2 cursor-pointer hover:bg-[#535353]'>
        <div className='flex gap-3'>
          <p>{millify(videoDetail.stats.views)}</p>
          <p>{moment(videoDetail.publishedDate).fromNow()}</p>
          <ul className='flex gap-3'>
            {videoDetail.superTitle.items.slice(0, 3).map((item, index) => (<li key={index}>{item}</li>))}
          </ul>
        </div>
        <StringArea text={videoDetail.description} max={200} />
      </div>

    </>
  )
}

export default ChannelDetail
