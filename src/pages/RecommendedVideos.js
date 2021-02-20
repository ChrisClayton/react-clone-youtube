import React, {useEffect, useState} from "react";
import "./RecommendedVideos.css";
import VideoCard from "../components/VideoCard";

function RecommendedVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
      //TODO: GET:{DATA} from a backend API
      const videos=setVideos([
        {
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        },{
          title:"The CRAZIEST Moments On Hotel Hell",
          views:"3.4M views",
          timestamp:"1 year ago",
          channelImage:"https://yt3.ggpht.com/a-/AOh14GiSRnvI7p7Ko9dKPqg6bh--qMkK2Ej3Huk4BQ=s68-c-k-c0x00ffffff-no-rj-mo",
          channel:"Gordon Ramsay",
          image:"https://i.ytimg.com/an_webp/qhCHbPxkUws/mqdefault_6s_480x270.webp?du=3000&sqp=CKLVkfwF&rs=AOn4CLCJO4qjYnuXdcrmEv9aosX52n4nGg",
        }
      ]);  
  });

  return (
    <section className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">

        {videos.map((video) => (
          <VideoCard
          title={video.title} 
          views={video.views}
          timestamp={video.timestamp}
          channelImage={video.channelImage}
          channel={video.channel}
          image={video.image}  />
        ))}

      </div>
    </section>
  );
}

export default RecommendedVideos;