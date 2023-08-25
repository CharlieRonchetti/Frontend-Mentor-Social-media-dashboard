import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container header-content">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
        <hr></hr>
        </div>
      </header>

      <div className="container theme">
        <p>Dark Mode</p>
        <div className="switcher">
          <p>placeholder</p>
        </div>
      </div>

      <main>
        <div className="container accounts">
          <div className="facebook center">
            <h2 className="username">@nathanf</h2>
            <p className="follower-count">1987</p>
            <p>FOLLOWERS</p>
            <h3 className="daily-follows">12 Today</h3>
          </div>

          <div className="twitter center">
            <h2 className="username">@nathanf</h2>
            <p className="follower-count">1044</p>
            <p>FOLLOWERS</p>
            <h3 className="daily-follows">99 Today</h3>
          </div>

          <div className="instagram center">
            <h2 className="username">@realnathanf</h2>
            <p className="follower-count">11k</p>
            <p>FOLLOWERS</p>
            <h3 className="daily-follows">1099 Today</h3>
          </div>

          <div className="youtube center">
            <h2 className="username">Nathan F.</h2>
            <p className="follower-count">8239</p>
            <p>Subscribers</p>
            <h3 className="daily-follows">144 Today</h3>
          </div>
        </div>

        <div className="container daily-overview">
          <h2>Overview - Today</h2>
          <div className="daily-stats">
            <div className="card">
              <div className="card-top-row row">
                <h2 className="card-title">Page Views</h2>
                <p>Logo Placeholder</p>
              </div>
              <div className="card-bottom-row row">
                <p className="card-statistic">87</p>
                <p>3%</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      Page Views
      87
      3%

      Likes
      52
      2%

      Likes
      5462
      2257%

      Profile Views
      52k
      1375%

      Retweets
      117
      303%

      Likes
      507
      553%

      Likes
      107
      19%

      Total Views
      1407
      12%
      
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/CharlieRonchetti" target="_blank" rel="noreferrer">Charlie Ronchetti</a>.
      </div>
    </div>
  );
}

export default App;
