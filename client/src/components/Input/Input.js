import React, {useState} from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import './Input.css'


const Input = ({message, setMessage, sendMessage}) => {
    const [emoji, setEmoji] = useState('')
    const addEmoji = e => {
        let emoji = e.native;
        setEmoji(emoji);
        console.log(emoji);
        
      };
    return (
    <div className="outer">
        <form className="form">
            <input 
                className="input"
                type="text"
                placeholder="请输入消息。。。"
                value={message}
                onChange={event => setMessage(event.target.value + emoji)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="sendButton" onClick={event => sendMessage(event)}>发送</button>
        </form>
        {/* <span className="emojiSpan">
            <Picker onSelect={addEmoji} />
        </span> */}
    </div>
   
)}

export default Input