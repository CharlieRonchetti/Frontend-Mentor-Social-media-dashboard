import React from 'react'
import './overviewCard.css'
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

function setArrowSVG(cardPercentage) {
  if(cardPercentage >= 0) {
      return increaseArrow
  } else {
      return decreaseArrow
  }
}

function setCardPercentageColor(followerIncrease) {
  if(followerIncrease >= 0) {
      return "card-percent-increase"
  } else {
      return "card-percent-decrease"
  }
}

const OverviewCard = ({cardTitle, logoImage, cardStatistic, cardPercentage, getCurrentTheme}) => {
  	return (
    	<div className={`overview-card ${getCurrentTheme ? "light-theme" : "dark-theme"}`}>
              <div className="overview-card-top-row row">
                <h2 className="overview-card-title">{cardTitle}</h2>
                <img src={setLogo(logoImage)} alt="logo"/>
              </div>
              <div className="overview-card-bottom-row row">
                <p className="overview-card-statistic">{cardStatistic}</p>
                <div className="overview-card-percentage row">
                  <img src={setArrowSVG(cardPercentage)} alt="logo"/>
                  <p className={`${setCardPercentageColor(cardPercentage)}`}>{Math.abs(cardPercentage)}%</p>
                </div>
              </div>
        </div>
  	)
}

export default OverviewCard