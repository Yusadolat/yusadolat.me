import React from 'react'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'

export default props => (
  <div className="Rotational">  
    <div className="Rotational__orbit">
      <div className="Rotational__item computer">
        <StaticImage src="../../assets/images/icons/laptop-2.png" alt="Computer" className="Rotational__icon" />
      </div>
      <div className="Rotational__item hacker">
        <StaticImage src="../../assets/images/icons/linux-original.svg" alt="Hacker" className="Rotational__icon" />
      </div>
      <div className="Rotational__item server">
        <StaticImage src="../../assets/images/icons/spotify.svg" alt="Server" className="Rotational__icon" />
      </div>
      <div className="Rotational__item www">
        <StaticImage src="../../assets/images/icons/coffee.svg" alt="WWW" className="Rotational__icon" />
      </div>
      <div className="Rotational__item browser">
        <StaticImage src="../../assets/images/icons/idea.svg" alt="Browser" className="Rotational__icon" />
      </div>
      <div className="Rotational__item protection">
        <StaticImage src="../../assets/images/icons/algorithm.svg" alt="Protection" className="Rotational__icon" />
      </div>
      <div className="Rotational__item laptop">
        <StaticImage src="../../assets/images/icons/books.svg" alt="Laptop" className="Rotational__icon" />
      </div>
      <div className="Rotational__item headphones">
        <StaticImage src="../../assets/images/icons/machine-learning.svg" alt="Headphones" className="Rotational__icon" />
      </div>
      <div className="Rotational__avatar-container">
        <GatsbyImage image={getImage(props.avatar)} alt="Avatar" />
      </div>
    </div>
  </div>
)