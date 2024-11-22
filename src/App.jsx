import { useState } from "react";
import FactChecker from "./components/FaceChecker/FactChecker";
import imgLike from "/assets/1.png";
import imgComment from "/assets/2.png";
import imgSend from "/assets/3.png";
import imgShare from "/assets/4.png";
import imgVerify from "/assets/verify.png";
import imgProfile from "/assets/profile.png";
import imgPost from "/assets/chihuacoin.png";
import imgLikeLoveLaugh from "/assets/likelovelaugh.png";
import imgCommentSection from "/assets/commentsection.png";
import "./App.scss";

function App() {
  return (
    <>
      <div className="demo__wrap">
        <section className="facebook-post">
          <div className="facebook-post__header">
            <div className="facebook-post__header-left">
              <img
                src={imgProfile}
                alt="Profile Pic"
                className="facebook-post__profile-picture"
              />

              <div className="facebook-post__info">
                <p className="facebook-post__author">
                  Dogecoin Enthusiasts Group
                </p>
                <p className="facebook-post__timestamp">11m · 🌎</p>
              </div>
            </div>
            <button className="facebook-post__menu-button">... x</button>
          </div>

          <div className="facebook-post__content">
            <p className="facebook-post__text">
              🚀 Big News for Dogecoin Fans! 🐕💰
              <br /> <br />
              We’re thrilled to unveil the future of Dogecoin: a brand-new logo
              design featuring the internet’s most confident underdog… 🐶 The
              Chihuahua!
              <br /> <br />
              Why the change? The Dogecoin community voted, and it’s official:
              The Chihuahua represents resilience, attitude, and the ability to
              bark louder than its market cap.
              <br /> <br />
              The new design, lovingly nicknamed “Chihuacoin,” will roll out
              next week. Some exciting features:
              <br /> <br />
              <ul>
                <li>
                  🐾 Taco Tuesday Bonuses: Double your mining rewards every
                  Tuesday. 🌮
                </li>
                <li>
                  🐾 Small Dog, Big Dreams: Inspired by Chihuahuas, we’re aiming
                  for $1 again (yes, really).
                </li>
                <li>
                  🐾 Tiny Paws NFT Series: Collect exclusive Chihuahua pawprint
                  NFTs.
                </li>
              </ul>
              <br /> <br />
              Comment below: Are you ready to ride this wave?
              <br /> <br />
              🌊🐕💎 #Chihuacoin #DogeRebrand #CryptoWithAttitude
            </p>

            <div className="facebook-post__images">
              <img
                src={imgPost}
                alt="Post image of Chihuacoin"
                className="facebook-post__image"
              />
            </div>
          </div>

          <div className="facebook-post__liked">
            {" "}
            <img
              src={imgLikeLoveLaugh}
              alt="Likelovelaugh"
              className="likelovelaugh-icon"
            />
            Taco Belle the Chihuahua and 1,000,000 others 25 comments 25 shares
          </div>

          <div className="facebook-post__actions">
            <button className="facebook-post__action facebook-post__action--like">
              <img src={imgLike} alt="Like button" className="button-icon" />
              Like
            </button>
            <button className="facebook-post__action facebook-post__action--comment">
              <img
                src={imgComment}
                alt="Comment button"
                className="button-icon"
              />
              Comment
            </button>
            <button className="facebook-post__action facebook-post__action--send">
              <img src={imgSend} alt="Send button" className="button-icon" />
              Send
            </button>
            <button className="facebook-post__action facebook-post__action--share">
              <img src={imgShare} alt="Share button" className="button-icon" />
              Share
            </button>
            <button className="facebook-post__action facebook-post__action--verify">
              <img
                src={imgVerify}
                alt="Verify button"
                className="button-icon"
              />
              Verify
            </button>
          </div>

          <div className="facebook-post__images">
          <br />
            View More Comments
              <img
                src={imgCommentSection}
                alt="CommentSection"
                className="facebook-post__image"
              />
            </div>
        </section>
      </div>
      <FactChecker
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        itemType="inventory"
        itemId={inventory.id}
        itemName={inventory.item_name}
        onSuccess={handleDeleteSuccess}
      />
    </>
  );
}

export default App;

{
  /* <button className="facebook-post__action facebook-post__action--like">
            {" "}
            <img src={imgLike} alt="Like" className="button-icon" /> Like{" "}
          </button>
          <button className="facebook-post__action facebook-post__action--comment">
            {" "}
            <img
              src="public/assets/2.png"
              alt="Comment"
              className="button-icon"
            /> Comment{" "}
          </button>
          <button className="facebook-post__action facebook-post__action--share">
            {" "}
            <img src="public/assets/3.png" alt="Share" className="button-icon" /> Share{" "}
          </button>
          <button className="facebook-post__action facebook-post__action--verify">
            {" "}
            <img src="public/assets/4.png" alt="Verify" className="button-icon" /> Verify{" "}
          </button> */
}
