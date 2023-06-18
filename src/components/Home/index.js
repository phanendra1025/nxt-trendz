// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => {
  console.log('home')
  return (
    <div className="app-home-container">
      <Header />
      <div className="home-container">
        <div className="about-container">
          <h1 className="heading">Clothes That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
            alt="clothes that get you noticed"
            className="small-clothes-that-get-you-noticed-image"
          />
          <p className="description">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          alt="clothes that get you noticed"
          className="clothes-that-get-you-noticed-image"
        />
      </div>
    </div>
  )
}

export default Home
