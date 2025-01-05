// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Contact from '../Layout/Book.jsx';
import Footer from '../components/Footer.jsx'; 
import '../styles/pages.css';
import '../styles/modal.css';
import '../styles/allphotos.css';
import coverimage2 from "../assets/home/images/coverphoto.jpg";
import one from "../assets/reviews/images/reviewimg.jpg";
import two from "../assets/allphotos/images/2.webp";
import four from "../assets/allphotos/images/4.webp";
import five from "../assets/allphotos/images/5.webp";
import six from "../assets/services/images/roofing.jpg";
import seven from "../assets/services/images/fencing.jpg";
import eight from "../assets/allphotos/images/8.webp";
import nine from "../assets/allphotos/images/9.webp";
import ten from "../assets/book/images/appointmenthouse.png";
import a from "../assets/aboutus/images/aboutpic.webp";
import b from "../assets/allphotos/images/12.webp";
import c from "../assets/allphotos/images/13.webp";
import d from "../assets/questions/images/questionsimg.jpg";
import e from "../assets/services/images/windows.jpg";
import f from "../assets/projects/images/entrance.jpg";
import g from "../assets/allphotos/images/17.webp";
import h from "../assets/allphotos/images/18.webp";
import i from "../assets/services/images/barndominiums.jpg";
import j from "../assets/services/images/carport.jpg";
import l from "../assets/allphotos/images/22.webp";
import m from "../assets/allphotos/images/23.webp";
import n from "../assets/allphotos/images/24.webp";
import o from "../assets/services/images/shop.jpg";
import p from "../assets/allphotos/images/26.webp";
import q from "../assets/allphotos/images/27.webp";
import r from "../assets/allphotos/images/28.webp";

const AllPhotos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    one, two, four, five, six, seven, eight, nine, ten,
    a, b, c, d, e, f, g, h, i, j, l, m, n, o, p, q, r
  ];

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
  
  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };
  
  const closeLightbox = () => setLightboxOpen(false);
  
  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div>
      <main className="main-content2">
        <div className="image-container2">
          <img src={coverimage2} alt="Barndominiums" className="page2img2all" />
          <div className="overlay-text2">
            <h2>OUR BEST WORK</h2>
            <p>See for yourself why our customers love us</p>
            <button className="quote-button2" onClick={openModal}>Get a Free Quote</button>
          </div>
        </div>
        <div className="allphotos">
          <div className="photo-grid">
            {images.map((imgSrc, index) => (
              <img key={index} src={imgSrc} className="allpicons" alt={`work ${index + 1}`} onClick={() => openLightbox(index)} />
            ))}
          </div>
        </div>
        <Contact />
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
        {lightboxOpen && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
              <button className="lightbox-prev" onClick={prevImage}>❮</button>
              <img src={images[currentImage]} className="lightbox-img" alt={`work ${currentImage + 1}`} />
              <button className="lightbox-next" onClick={nextImage}>❯</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AllPhotos;



