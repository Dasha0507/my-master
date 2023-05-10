import React from 'react'; 
import './slider.css'; 

function Slider() {

return (

    <section className="begeviy">
    <div className="container">
      <div className="slider-section">
        <div className="decor-top">
          <img className="" src="top elements.png" alt=""/>
        </div>
        <div className="slider-block">
          <div className="slides">
            <div className="slide active-slide">
              <img className="" src="slide 1.png" alt=""/>
            </div>
            <div className="slide">
              <img className="" src="slide 2.png" alt=""/>
            </div>
            <div className="slide">
              <img className="" src="slide 3.png" alt=""/>
            </div>
          </div>
          <div className="slide-btns">
            <div className="left-btn">
              <img className="" src="left-btn.png" alt=""/>
            </div>
            <div className="dots">
              <div className="dot active-dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="right-btn">
              <img className="" src="right-btn.png" alt=""/>
            </div>
          </div>
        </div>
        <div className="decor-bottom">
          <img className="" src="bottom elements.png" alt=""/>
        </div>
      </div>
    </div>
  </section>
)

}

export default Slider;