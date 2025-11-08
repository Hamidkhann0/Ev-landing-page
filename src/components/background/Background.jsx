import React from 'react'
import Video1 from '../../assets/video1.mp4'
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'

const Background = ({ playstatus, herocount }) => {
    if (playstatus) {
        return (
            <video
                className="h-full w-full fixed p-0 object-cover -z-1"  autoPlay
                loop
                muted
            >
                <source src={Video1} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
    } else if (herocount === 0) {
        return <img src={Image1} className="h-full w-full fixed p-0 object-cover -z-1" alt="backgroundimage1" />
    } else if (herocount === 1) {
        return <img src={Image2} className="h-full w-full fixed p-0 object-cover -z-1" alt="backgroundimage2" />
    } else if (herocount === 2) {
        return <img src={Image3} className="h-full w-full fixed p-0 object-cover -z-1" alt="backgroundimage3" />
    }

    return null
}

export default Background
