import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {

  return (
    <>
      <section class="facebook-post">
        <div class="facebook-post__header">
          <div class="facebook-post__header-left">
            <img
              src="profile-picture.jpg"
              alt="Profile Picture"
              class="facebook-post__profile-picture"
            />
            <div class="facebook-post__info">
              <p class="facebook-post__author">USA Top News and Around the Globe</p>
              <p class="facebook-post__timestamp">11m · 🌎</p>
            </div>
          </div>
          <button class="facebook-post__menu-button">...</button>
        </div>
        <div class="facebook-post__content">
          <p class="facebook-post__text">
            ----insert post content----
          </p>
          <div class="facebook-post__images">
            <img src="image1.jpg" alt="Image 1" class="facebook-post__image" />
            <div class="facebook-post__image-grid">
              <img src="image2.jpg" alt="Image 2" class="facebook-post__image" />
              <img src="image3.jpg" alt="Image 3" class="facebook-post__image" />
            </div>
          </div>
        </div>
        <div class="facebook-post__actions">
          <button class="facebook-post__action facebook-post__action--like"> <img src="1.png" alt="Like" class="button-icon" /> Like </button>
          <button class="facebook-post__action facebook-post__action--comment"> <img src="2.png" alt="Comment" class="button-icon" /> Comment </button>
          <button class="facebook-post__action facebook-post__action--share"> <img src="3.png" alt="Share" class="button-icon" /> Share </button>
          <button class="facebook-post__action facebook-post__action--verify"> <img src="4.png" alt="Verify" class="button-icon" /> Verify </button>

        </div>
      </section>




















    </>
  )
}

export default App
