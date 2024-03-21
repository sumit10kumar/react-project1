import React from 'react'
import './Play.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
const Play = () => {
    return (
        <div className='play-video'>
            <video src={video} controls autoPlay muted></video>
            <h3>Best Youtube Channle to learn web development</h3>
            <div className="play-video-info">
                <p>12 views &bull;  2 daya ago</p>
                <div className='react'>
                    <span><img src={like} alt="" />12</span>
                    <span><img src={dislike} alt="" />12</span>
                    <span><img src={share} alt="" />12</span>
                    <span><img src={save} alt="" />12</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>Blogger Jack </p>
                    <span>1M subscribers</span>
                </div>
                <div>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="video-discription">
                <p>Channels Than make learnig easy</p>
                <p> subscribe Greatstack to watch more tutorial on web development</p>
                <hr />
                <h4>120 Commnets</h4>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>USer name <span>1 day ago</span></h3>
                        <p>Content  djkfjaksjdfa sjdfkjasdjfkas djfkasjd fjasdkf</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>24</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>USer name <span>1 day ago</span></h3>
                        <p>Content  djkfjaksjdfa sjdfkjasdjfkas djfkasjd fjasdkf</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>24</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>USer name <span>1 day ago</span></h3>
                        <p>Content  djkfjaksjdfa sjdfkjasdjfkas djfkasjd fjasdkf</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>24</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>USer name <span>1 day ago</span></h3>
                        <p>Content  djkfjaksjdfa sjdfkjasdjfkas djfkasjd fjasdkf</p>
                        <div className="comment-action">
                            <img src={like} alt="" />
                            <span>24</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Play