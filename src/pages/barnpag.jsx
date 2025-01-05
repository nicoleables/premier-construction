/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Reviews from '../Layout/Reviews.jsx';
import Book from '../Layout/Book.jsx';
import Footer from '../components/Footer.jsx'; 
import '../styles/pages.css';
import '../styles/modal.css';
import '../styles/global.css';
import Barn from "../assets/services/images/barndominiums.jpg";

const BarnPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
  
    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });
  
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <main className="main-content2">
        <div className="image-container2">
          <img className="page2img2"  src={Barn} alt="Barndominiums" />
          <div className="overlay-text2">
            <h1>Services</h1>
            <h2>Barndominium Construction</h2>
            <p>Our Barndominium construction service offers homeowners the opportunity to create a unique living space combining a traditional barn aesthetic with modern comfort, expertly crafted by our skilled welders.</p>
            <button className="quote-button2" onClick={openModal}>Get a Free Quote</button>
          </div>
        </div>
        <div className="aboutp2" id="about2">
          <div className="paragrapgp2">
            <p>If you're considering building a new home in the countryside, a barndominium
              could be the perfect choice for you. These unique and versatile structures 
              combine the rustic charm of a barn with all the comforts of a modern home.</p>
            <p>When you book a barndominium construction service, you are investing in a 
              one-of-a-kind living space that can be customized to suit your needs and style. 
              With their open floor plans and high ceilings, barndominiums offer ample space 
              for living, dining, and entertaining. Additionally, we often feature large windows 
              that provide stunning views of the surrounding landscape.</p>
            <p>Not only are barndominiums aesthetically pleasing, but we are also durable and 
              energy-efficient. Constructed with sturdy materials such as metal siding and 
              roofing, these homes require minimal maintenance and can withstand harsh weather conditions.</p>
            <p>Overall, booking a barndominium construction service is an excellent choice for 
              those seeking a unique and practical housing solution in rural areas.</p>
          </div>
        </div>
        <div id="reviews"> 
          <Reviews /> 
          </div>
          <div id="book"> 
          <Book /> 
          </div>
        {modalOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close" onClick={closeModal}>&times;</span>
              <h2>Send us a text</h2>
              <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" />
                  </div>
                </div>
                <div className="form-row full-width">
                  <label htmlFor="preferredDate">Preferred Date of Service</label>
                  <input type="date" id="preferredDate" name="preferredDate" />
                </div>
                <div className="form-row full-width">
                  <label>Services:</label>
                  <div className="checkbox-group">
                    <div className="checkbox">
                      <label htmlFor="service1">Carports</label>
                      <input type="checkbox" id="service1" name="service1" value="Carports" />
                    </div>
                    <div className="checkbox">
                      <label htmlFor="service2">Shops</label>
                      <input type="checkbox" id="service2" name="service2" value="Shops" />
                    </div>
                    <div className="checkbox">
                      <label htmlFor="service3">Barndominiums</label>
                      <input type="checkbox" id="service3" name="service3" value="Barndominiums" />
                    </div>
                    <div className="checkbox">
                      <label htmlFor="service4">Roofing</label>
                      <input type="checkbox" id="service4" name="service4" value="Roofing" />
                    </div>
                    <div className="checkbox">
                      <label htmlFor="service5">Siding</label>
                      <input type="checkbox" id="service5" name="service5" value="Siding" />
                    </div>
                    <div className="checkbox">
                      <label htmlFor="service6">Windows</label>
                      <input type="checkbox" id="service6" name="service6" value="Windows" />
                    </div>
                    <div className="checkbox">
                      <label htmlFor="service7">Welding</label>
                      <input type="checkbox" id="service7" name="service7" value="Welding" />
                    </div>
                    <div className="checkbox">
                      <label htmlFor="service8">Fencing</label>
                      <input type="checkbox" id="service8" name="service8" value="Fencing" />
                    </div>
                  </div>
                </div>
                <div className="form-row full-width">
                  <label htmlFor="help">How can we help?</label>
                  <textarea id="help" name="help" rows="4"></textarea>
                </div>
                <div className="form-row full-width">
                  <label htmlFor="upload">Upload a photo:</label>
                  <input type="file" id="upload" name="upload" />
                </div>
                <div className="form-row">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
      <div id="contact"> 
          <Footer /> 
          </div> 
      </div>
  );
};

export default BarnPage;












