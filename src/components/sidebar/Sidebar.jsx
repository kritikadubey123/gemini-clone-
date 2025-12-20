import React, { useState } from 'react'
import './sidebar.css'
import menu1 from "../../assets/menu1.png";
import plus from "../../assets/plus.png";
import comment from "../../assets/comment.png";
import question from "../../assets/question.png";
import history from "../../assets/history.png";
import setting from "../../assets/setting.png";

const Sidebar = () => {

  const [extended, setExtended] = useState(false);
  return (
        <div className='sidebar'>
        <div className="top">
          <img onClick={()=>{setExtended(prev=>!prev)}} className='menu' src={menu1} alt="not possible" />
          <div className="chat">
            <img src={plus} alt="nooo" />
           {extended? <p>New Chat</p>:null}
          </div>
          
          {extended
          ?
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={comment} alt="" />
              <p>What is react...</p>
            </div>
          </div>
          :null
        }

        </div>

        <div className="bottom">
             <div className="bottom-item recent-entry" >
              <img src={question} alt="" />
            {extended? <p>Help</p>:null}
             </div>
             <div className="bottom-item recent-entry" >
              <img src={history} alt="" />
             {extended? <p>Activity</p>:null}
             </div>
             <div className="bottom-item recent-entry" >
              <img src={setting} alt="" />
              {extended? <p>Setting</p>:null}
             </div>
        </div>
    </div>
  )
}

export default Sidebar