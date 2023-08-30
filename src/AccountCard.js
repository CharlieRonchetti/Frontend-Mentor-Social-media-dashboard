import React from 'react'
import './accountCard.css'
import facebookLogo from './svgs/icon-facebook.svg'
import twitterLogo from './svgs/icon-twitter.svg'
import instagramLogo from './svgs/icon-instagram.svg'
import youtubeLogo from './svgs/icon-youtube.svg'
import increaseArrow from './svgs/icon-up.svg'
import decreaseArrow from './svgs/icon-down.svg'

function setLogo(platform) {
    if(platform === "facebook") {
        return facebookLogo
    } else if (platform === "twitter") {
        return twitterLogo
    } else if (platform === "instagram") {
        return instagramLogo
    } else if (platform === "youtube") {
        return youtubeLogo
    }
}

function setArrowSVG(followerIncrease) {
    if(followerIncrease >= 0) {
        return increaseArrow
    } else {
        return decreaseArrow
    }
}

function setDailyFollowsColor(followerIncrease) {
    if(followerIncrease >= 0) {
        return "increase"
    } else {
        return "decrease"
    }
}

const AccountCard = ({username, followerCount, followerIncrease, followerType, platform, getCurrentTheme}) => {
  	return (
    	<div className={`account-card center ${getCurrentTheme ? "light-theme" : "dark-theme"}`}>
            <div className={`account-card-highlight ${platform}`}></div>
            <div className="username-row row">
                <img src={setLogo(platform)} alt="logo"/>
                <h2 className="username">{username}</h2>
            </div>
            <p className="follower-count">{followerCount}</p>
            <p className="follower-type">{followerType}</p>
            <div className="follower-increase-row row">
                <img src={setArrowSVG(followerIncrease)} alt="logo"/>
                <h3 className={`daily-follows ${setDailyFollowsColor(followerIncrease)}`}>{Math.abs(followerIncrease)} Today</h3>
            </div>
        </div>
  	)
}

export default AccountCard