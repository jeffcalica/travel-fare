import React from "react"
import "./About.css"
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import AboutCard from "./AboutCard"

const About = () => {
  return (
    <>
      <HeadTitle />
      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our <span>Features</span>
            </h1>
            <p>Breakfast is free to our guests from (7:00AM-10:00AM).</p>
            <p>Room Service will be available 24/7 to accommodate your needs!</p>
            <p>Accessibility to the pool will be granted.
            Children ages 1-17 must be accompanied by a parent or legal guardian.
            </p>
            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>
          <div className='row image'>
            <img src='/images/feature-img-1.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About