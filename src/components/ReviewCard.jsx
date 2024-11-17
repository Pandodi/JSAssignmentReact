import React, { useEffect, useState } from 'react'

const ReviewCard = ({card}) => {
    const [fileSource, setFileSource] = useState('')

    const giveStars = (starRating) => {
        switch(starRating) {
            case 1:
                return './src/assets/images/1stars.svg'
            case 2:
                return './src/assets/images/2stars.svg'
            case 3:
                return './src/assets/images/3stars.svg'
            case 4: 
                return './src/assets/images/4stars.svg'
            case 5: 
                return './src/assets/images/5stars.svg'
            default:
                return console.log('Error occured')
        }
    }

    useEffect(() => {
        setFileSource(giveStars(card.starRating));
    }, [card.starRating])
    

    return (
        <div className="review-card">
            <img className="quotemark" src="./src/assets/images/quotes.svg" alt="qoute-mark"/>
            <img className="stars" src={fileSource} alt="4starRating"/>
            <p>{card.comment}</p>
            <div className="profile">
                <img src={card.avatarUrl} alt="FannieProfilePic"/>
                    <div className="profile-info">
                        <h3>{card.author}</h3>
                        <h4>{card.jobRole}</h4>
                    </div>
            </div>
        </div>
  )
}

export default ReviewCard