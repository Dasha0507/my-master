import React from 'react'; 
import './footer.css'; 

function Footer() {
return (
    <footer>
    <div className="container">
      <div className="footer-information">
        <div className="coopirate">
          <p>&#169; Белорусская энциклопедия, 2023</p>
        </div>
        <div className="contacts">
          <p> ул. Козлова, 26, 220037, г. Минск, Беларусь</p>
          <p><a href="tel:+375447924623">+375(44)792-46-23</a></p>
          <p><a href="mailto: dashka793@mail.ru">biblioteka_encyclopedia@mail.ru</a></p>
        </div>
      </div>
    </div>
  </footer>
)

}

export default Footer;