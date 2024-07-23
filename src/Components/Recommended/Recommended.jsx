import React, { useEffect, useState } from 'react'
import './Recommended.css'
import {Api_Key,value_converter} from '../../data'
import { Link } from 'react-router-dom'
function Recommended({categoryId}) {
  const [recommendedData,setrecommendedData]=useState([]);

  const fetchrecommendedData = async ()=>{
    const recommendedDataApi= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${Api_Key}`
    await fetch(recommendedDataApi).then(res=>res.json()).then(data=>setrecommendedData(data.items))
  }
  useEffect(()=>{
    fetchrecommendedData();
  },[])
  return (
    <div className='recommended'>
      {recommendedData.map((item,index)=>{
        return(
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
                <h4>{item.snippet.title}</h4>
                <p>
                    {item.snippet.channelTitle}
                </p>
                <p>{value_converter(item.statistics.viewCount)} views</p>
            </div>
          </Link>
        )
      })}
      
    </div>
  )
}

export default Recommended
