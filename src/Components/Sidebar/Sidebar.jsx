import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobile from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="sortcut-links">
            <div className="side-links">
                <img src={home}  /><p>Home</p>
            </div>
            <div className="side-links">
                <img src={game_icon}  /><p>Games</p>
            </div>
            <div className="side-links">
                <img src={automobile}  /><p>automobiles</p>
            </div>
            <div className="side-links">
                <img src={sports}  /><p>Sports</p>
            </div>
            <div className="side-links">
                <img src={entertainment}  /><p>Entertainment</p>
            </div>
            <div className="side-links">
                <img src={tech}  /><p>Technology</p>
            </div>
            <div className="side-links">
                <img src={music}  /><p>music</p>
            </div>
            <div className="side-links">
                <img src={blogs}  /><p>Blogs</p>
            </div>
            <div className="side-links">
                <img src={news}  /><p>News</p>
            </div>
            
        </div>
        <hr />
        <div className="subscribe-list">
            <h3>Subscribe</h3>
            <div className="side-link">
                <img src={jack} alt="" />
                <p>Jack</p>
            </div>
            <div className="side-link">
                <img src={simon} alt="" />
                <p>Simon</p>
            </div>
            <div className="side-link">
                <img src={tom} alt="" />
                <p>Tom</p>
            </div>
            <div className="side-link">
                <img src={megan} alt="" />
                <p>megan</p>
            </div>
            <div className="side-link">
                <img src={cameron} alt="" />
                <p>cameron</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar