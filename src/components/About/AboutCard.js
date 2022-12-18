import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            We provide <span>Affordable Prices</span> to plan your next Vacation!
          </h1>
          <p>A group of 4 CSUN Students from the IT Department decided to go for broke and open up a Travel Fare Finder business.</p>
          <p>It is our duty to provide excellent service to our clients from around the world, especially fellow CSUN students/alumni who plan on going on vacation!</p>
          <button className='secondary-btn'>
            Explore More <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='row image'>
          <img src='/images/about-img-1.jpg' width='725' height='427' alt='' />
          <div className='control-btn'>
            <button className='prev'>
              <i className='fas fa-play'></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCard