import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { Api_Key,value_converter } from '../../data'
import moment from 'moment'
function PlayVideo({videoId}) {
    const [apiData,setApiData]=useState(null);
    const FetchVideo = async ()=>{
        const VideoApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${Api_Key}`
        await fetch(VideoApi).then(response=>response.json()).then(data=>setApiData(data.items[0]))
    }
    useEffect(()=>{
        FetchVideo();
    },[])
  return (
    <div className='play-video'>
    <iframe width="1263" height="480" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
        <div className="play-video-info">
            <p>
                {value_converter(apiData?apiData.statistics.viewCount:"16k")} views &bull; {moment(apiData?apiData.snippet.publishedAt:"2 days ago").fromNow()}
            </p>
            <div>
                 <span>
                    <img src={like} alt="" />
                    {value_converter(apiData?apiData.statistics.likeCount:"125")}
                 </span>
                 <span>
                    <img src={dislike} alt="" />
                    12
                 </span>
                 <span>
                    <img src={share} alt="" />
                    share
                 </span>
                 <span>
                    <img src={save} alt="" />
                    save
                 </span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>{apiData?apiData.snippet.channelTitle:"Abubakar khan"}</p>
                <span>
                    1M subsucriber
                </span>
            </div>
            <button>Subsucribe</button>
        </div>
        <div className="vid-discription">
            <p>
               {apiData?apiData.snippet.description.slice(0,250):"Description here"}
            </p>
            <hr />
            <h4>
                {value_converter(apiData?apiData.statistics.commentCount:"130")} comments 
            </h4>
            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>
                        jack <span>1 day ago</span>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Nihil officiis quis, tempora, ipsam, pariatur delectus 
                        accusantium rem eius qui earum quaerat laborum optio 
                        cumque corrupti consectetur culpa provident voluptate numquam.
                    </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>
                        jack <span>1 day ago</span>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Nihil officiis quis, tempora, ipsam, pariatur delectus 
                        accusantium rem eius qui earum quaerat laborum optio 
                        cumque corrupti consectetur culpa provident voluptate numquam.
                    </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>
                        jack <span>1 day ago</span>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Nihil officiis quis, tempora, ipsam, pariatur delectus 
                        accusantium rem eius qui earum quaerat laborum optio 
                        cumque corrupti consectetur culpa provident voluptate numquam.
                    </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>
                        jack <span>1 day ago</span>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Nihil officiis quis, tempora, ipsam, pariatur delectus 
                        accusantium rem eius qui earum quaerat laborum optio 
                        cumque corrupti consectetur culpa provident voluptate numquam.
                    </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comments">
                <img src={user_profile} alt="" />
                <div>
                    <h3>
                        jack <span>1 day ago</span>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Nihil officiis quis, tempora, ipsam, pariatur delectus 
                        accusantium rem eius qui earum quaerat laborum optio 
                        cumque corrupti consectetur culpa provident voluptate numquam.
                    </p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PlayVideo
