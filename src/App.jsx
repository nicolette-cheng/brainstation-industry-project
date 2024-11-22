import { useState } from "react";
import imgLike from "/assets/1.png";
import "./App.scss";

function App() {
  return (
    <>
      <section className="facebook-post">
        <div className="facebook-post__header">
          <div className="facebook-post__header-left">
            <img
              src="profile-picture.jpg"
              alt="Profile Picture"
              className="facebook-post__profile-picture"
            />
            <div className="facebook-post__info">
              <p className="facebook-post__author">
                USA Top News and Around the Globe
              </p>
              <p className="facebook-post__timestamp">11m · 🌎</p>
            </div>
          </div>
          <button className="facebook-post__menu-button">...</button>
        </div>
        <div className="facebook-post__content">
          <p className="facebook-post__text">
            :rocket: Big News for Dogecoin Fans! :dog2::moneybag: We’re thrilled
            to unveil the future of Dogecoin: a brand-new logo design featuring
            the internet’s most confident underdog… :dog: The Chihuahua! Why the
            change? The Dogecoin community voted, and it’s official: The
            Chihuahua represents resilience, attitude, and the ability to bark
            louder than its market cap. The new design, lovingly nicknamed
            “Chihuacoin,” will roll out next week. Some exciting features:
            :feet: Taco Tuesday Bonuses: Double your mining rewards every
            Tuesday. :taco: :feet: Small Dog, Big Dreams: Inspired by
            Chihuahuas, we’re aiming for $1 again (yes, really). :feet: Tiny
            Paws NFT Series: Collect exclusive Chihuahua pawprint NFTs. Comment
            below: Are you ready to ride this wave? :ocean::dog2::gem:
            #Chihuacoin #DogeRebrand #CryptoWithAttitude
          </p>
          <div className="facebook-post__images">
            <img
              src="image1.jpg"
              alt="Image 1"
              className="facebook-post__image"
            />
            <div className="facebook-post__image-grid">
              <img
                src="image2.jpg"
                alt="Image 2"
                className="facebook-post__image"
              />
              <img
                src="image3.jpg"
                alt="Image 3"
                className="facebook-post__image"
              />
            </div>
          </div>
        </div>
        <div className="facebook-post__actions">
          <button className="facebook-post__action facebook-post__action--like">
            {" "}
            <img src={imgLike} alt="Like" className="button-icon" /> Like{" "}
          </button>
          <button className="facebook-post__action facebook-post__action--comment">
            {" "}
            <img
              src="2.png"
              alt="Comment"
              className="button-icon"
            /> Comment{" "}
          </button>
          <button className="facebook-post__action facebook-post__action--share">
            {" "}
            <img src="3.png" alt="Share" className="button-icon" /> Share{" "}
          </button>
          <button className="facebook-post__action facebook-post__action--verify">
            {" "}
            <img src="4.png" alt="Verify" className="button-icon" /> Verify{" "}
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
