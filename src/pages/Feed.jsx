import { useContext } from "react"
import SideNav from "../components/SideNav"
import { YoutubeContext } from "../context/youtubeContext"
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const Feed = () => {
    const {videos}= useContext(YoutubeContext);
     console.log(videos);
    // const m=true;
    return (
        <div className="flex bg-[#0f0f0f] text-white " >
            <SideNav/>
            <div className="w-full videos">
                {!videos ? (
                <Loading/>
                ) : (videos.map((item,index)=>{
                    if(item.type!=="video") return;
                    return <VideoCard key={index} video={item.video}/>;
                })
                )
                }
            </div>
        </div>
     
    )
}

export default Feed
