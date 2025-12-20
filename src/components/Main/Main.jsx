import React, { useContext, useState } from 'react'
import './Main.css'
import profile from '../../assets/profile.png';
import idea from '../../assets/idea.png';
import comment from '../../assets/comment.png';
import code from '../../assets/code.png';
import compass from '../../assets/compass.png';
import mic from '../../assets/mic.png';
import send  from '../../assets/send.png';
import gall from '../../assets/gall.png';
import runGemini  from '../../config/gemini';
import  {Context}  from '../../context/context';



const Main = () => {
   const { onSent, recentPrompt, showResult, loading, resultData, setInput, input, prevPrompts} = useContext(Context)

    const handleSend = () => {
        onSent(input);
    };


  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={profile} alt="noo" />
        </div>

       <div className="main-cont">
        {resultData.length === 0 ? (
                    <>
       <div className="greet">
            <p><span>Hello, Kritika.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={compass} alt="" />
            </div>
             <div className="card">
                <p>Briefly summarize this concept: urban planning</p>
                <img src={idea} alt="" />
            </div>
             <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={comment} alt="" />
            </div>
             <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={code} alt="" />
            </div>
        </div>
                    </>
        ):
        (
          <div className='result'>
             {prevPrompts.map((message, index) => (
                <div key={index} className={`result-message ${message.sender}`}>                        <p>{message.text}</p>
                     </div>
                  ))}
                        {loading && (
                            <div className='typing-indicator'>
                                <p>Gemini is typing...</p>
                            </div>
                        )}
                    </div>
                )}
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a promt here' 
                          value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && input.trim() !== '' && !loading) {
                                    handleSend();
                                }
                            }}
                            disabled={loading}
                />
                <div>
                   <img src={gall} alt="" />
                   <img src={mic} alt="" />
                   {input.trim() !== '' && !loading && (
                                <img 
                                    src={send} 
                                    alt="Send" 
                                    onClick={handleSend}
                                    className='send-icon'
                                />
                            )}
                            {(input.trim() === '' || loading) && (
                                <img 
                                    src={send} 
                                    alt="Send" 
                                    className='send-icon disabled'
                                />
                            )}
                </div>
            </div>
            <p className='bottom-info'>
                Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
            </p>
        </div>
       </div>

    </div>

  )
}

export default Main