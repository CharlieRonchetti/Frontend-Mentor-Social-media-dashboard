import './App.css';
import AccountCard from './AccountCard';
import OverviewCard from './OverviewCard';
import { useState } from 'react';

function App() {

  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className={`App ${isChecked ? "App-light" : "App-dark"}`}>
      <header className={isChecked ? "header-light" : "header-dark"}>
        <div className="container header-content">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
        <hr></hr>
        </div>

        <div className="container theme">
          <p>Dark Mode</p>
          <div className="switcher">
            <input type="checkbox" checked={isChecked} onChange={checkHandler}/>
          </div>
        </div>
      </header>

      <main>
        <div className="container accounts">
          <AccountCard username={"@nathanf"}
            followerCount={"1987"} 
            followerIncrease={12}
            followerType={"FOLLOWERS"}
            platform={"facebook"}
            getCurrentTheme={isChecked} />

          <AccountCard username={"@nathanf"}
            followerCount={"1044"} 
            followerIncrease={99}
            followerType={"FOLLOWERS"}
            platform={"twitter"}
            getCurrentTheme={isChecked} />

          <AccountCard username={"@realnathanf"}
            followerCount={"11k"} 
            followerIncrease={1099}
            followerType={"FOLLOWERS"}
            platform={"instagram"}
            getCurrentTheme={isChecked} />

          <AccountCard username={"Nathan F."}
            followerCount={"8239"} 
            followerIncrease={-144}
            followerType={"SUBSCRIBERS"}
            platform={"youtube"}
            getCurrentTheme={isChecked} />
        </div>

        <div className="container daily-overview">
          <h2 className="daily-overview-title">Overview - Today</h2>
          <div className="daily-stats">
            <OverviewCard cardTitle={"Page Views"}
              logoImage={"facebook"}
              cardStatistic={87}
              cardPercentage={3}
              getCurrentTheme={isChecked} />

            <OverviewCard cardTitle={"Likes"}
              logoImage={"facebook"}
              cardStatistic={52}
              cardPercentage={-2}
              getCurrentTheme={isChecked} />

            <OverviewCard cardTitle={"Likes"}
              logoImage={"instagram"}
              cardStatistic={5462}
              cardPercentage={2257}
              getCurrentTheme={isChecked} />

            <OverviewCard cardTitle={"Profile Views"}
              logoImage={"instagram"}
              cardStatistic={"52k"}
              cardPercentage={1375}
              getCurrentTheme={isChecked} />

            <OverviewCard cardTitle={"Retweets"}
              logoImage={"twitter"}
              cardStatistic={117}
              cardPercentage={303}
              getCurrentTheme={isChecked} />

            <OverviewCard cardTitle={"Likes"}
              logoImage={"twitter"}
              cardStatistic={507}
              cardPercentage={553}
              getCurrentTheme={isChecked} />

            <OverviewCard cardTitle={"Likes"}
              logoImage={"youtube"}
              cardStatistic={107}
              cardPercentage={19}
              getCurrentTheme={isChecked} />

            <OverviewCard cardTitle={"Total Views"}
              logoImage={"youtube"}
              cardStatistic={1407}
              cardPercentage={12}
              getCurrentTheme={isChecked} />
          </div>
        </div>
      </main>
      
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/CharlieRonchetti" target="_blank" rel="noreferrer">Charlie Ronchetti</a>.
      </div>
    </div>
  );
}

export default App;
