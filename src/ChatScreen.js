import React, {useState} from 'react'
import Avatar from '@mui/material/Avatar';

import "./ChatScreen.css"

function ChatScreen() {
    const [input,setInput] = useState('')
    const [messages, setMessages] = useState([
        {
            name: "Ellen",
            image: "https://ca-times.brightspotcdn.com/dims4/default/d879f2a/2147483647/strip/true/crop/3000x2122+0+0/resize/840x594!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2F09%2Fde2d210e4e7f859c06ef033b27aa%2F2e74578dd19d42e8aebb178d3201692a.jpg",
            message: "YO What's up"
        },
        {
            name: "Ellen",
            image: "https://ca-times.brightspotcdn.com/dims4/default/d879f2a/2147483647/strip/true/crop/3000x2122+0+0/resize/840x594!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2F09%2Fde2d210e4e7f859c06ef033b27aa%2F2e74578dd19d42e8aebb178d3201692a.jpg",
            message: "How's it going"
        },
        {
            message: "Hi! How are you Ellen?"
        },
    ])

    const handleSend = (e) => {
        e.preventDefault()

        setMessages([...messages, { message: input }])

        setInput('')
    }


    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 26/1/22</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar 
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                
            ))}

            
            <form className="chatScreen__input">
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..." 
                    type="text" 
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>
            
        </div>
    )


}

export default ChatScreen
