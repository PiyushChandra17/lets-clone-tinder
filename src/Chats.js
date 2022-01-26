import React from 'react'
import Chat from './Chat'
import './Chats.css'

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Sarah" 
                message="Hey! how are you?" 
                timestamp="35 minutes ago" 
                profilePic="https://assets.vogue.com/photos/602ae8426da2d9ae5efbd99f/1:1/w_3648,h_3648,c_limit/IMG_5056.jpg"
            />
            <Chat 
                name="Ellen" 
                message="YO! what's up?" 
                timestamp="55 minutes ago" 
                profilePic="https://ca-times.brightspotcdn.com/dims4/default/d879f2a/2147483647/strip/true/crop/3000x2122+0+0/resize/840x594!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2F09%2Fde2d210e4e7f859c06ef033b27aa%2F2e74578dd19d42e8aebb178d3201692a.jpg"
            />
            <Chat 
                name="Sandra" 
                message="Ola" 
                timestamp="3 days ago" 
                profilePic="https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg"
            />
            <Chat 
                name="Natasha" 
                message="Oopsie" 
                timestamp="35 minutes ago" 
                profilePic="https://i.ytimg.com/vi/g-HWIXXvIQo/maxresdefault.jpg"
            />
        </div>
    )
}

export default Chats
