import React, { useContext } from "react";
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from "../context/ChatContext";


const Chat = () => {
    const { data } = useContext(ChatContext);
    return ( 
    <div className='chat'>
    <div id='chatInfo'>
    <strong><span>{data.user?.displayName}</span></strong>
            <div className='chatIcons' >
                <img className='info-img' src= "https://img.icons8.com/material-outlined/512/call-male.png" style={{objectFit:"contain"}} alt = ""/>
                <button id = "mode-btn"  name= "light"><img className='info-img' src= "https://img.icons8.com/ios-glyphs/512/day-and-night.png" onClick = {modeChange} alt = ""/></button>
                
                <img className='info-img' src= "https://img.icons8.com/external-anggara-filled-outline-anggara-putra/512/external-setting-basic-user-interface-anggara-filled-outline-anggara-putra.png" alt = ""/>
            </div>
        
    </div>
    <Messages/>
    <Input/>
    </div>
    );
}





function modeChange()
{
    const modeBtn = document.getElementById('mode-btn')
    const infoId =  document.getElementById('chatInfo');

    console.log(modeBtn)

     if(modeBtn.name === "light")
     {
       
    
                           modeBtn.name = "dark"
        
                           document.body.style.backgroundImage = "linear-gradient(to right, #232526, #414345)";
                           document.body.style.opacity = "0.6";
     }

     else
     {
    
                           modeBtn.name = "light"

                           document.body.style.backgroundImage =   "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)";
                           document.body.style.opacity = "1";
     }
}
export default Chat;