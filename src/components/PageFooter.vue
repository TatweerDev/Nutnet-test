<template>
  <section class="footer-wrapper">
    <q-img src="../img/footer.jpg" class="footer-image">
      <div class="absolute-full overlay"></div>
    </q-img>
    <footer class="container footer">
      <div class="footer-top">
        <div class="footer-section-1">
          <div class="footer-logo">
            <q-img src="../img/logo.png" class="logo-img" />
            <span class="logo-text">tajam</span>
          </div>
          <span class="text-white logo-descr">lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit</span>
        </div>
        <div class="footer-section-2">
          <span class="text-white footer-studio">OUR STUDIO</span>
          <div class="footer-adress">
            <img src="../img/location.png" alt="location">
            <span class="footer-adress-name">Ruko cucruk, Jl. Radio luar dalem jos No.12 - 13, Kalideres - Jakarta Barat 11480 - Indonesia</span>
          </div>
          <div class="footer-phone">
            <img src="../img/phone.png" alt="phone">
            <span class="text-white">(+62) 21-2224 3333</span>
          </div>
        </div>
        <div class="footer-section-3">
          <span class="text-white">STAY IN TOUCH</span>
          <form class="form">
            <input type="email" placeholder="Subscribe our newsletter" class="email-input">
            <button><img src="../img/paper.png" alt=""></button>
          </form>
          <ul class="socials-list">
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener"><img src="../img/facebook.png" alt="facebook-icon"></a>
            </li>
            <li>
              <a href="https://twitter.com/tatweerd" target="_blank" rel="noopener"><img src="../img/twitter.png" alt="twitter-icon"></a>
            </li>
            <li>
              <a href="https://dribbble.com/" target="_blank" rel="noopener"><img src="../img/dribbble.png" alt="dribbble-icon"></a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener"><img src="../img/instagram.png" alt="instagram-icon"></a>
            </li>
            <li><img src="../img/gplus.png" alt="gplus-icon"></li>
            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener"><img src="../img/youtube.png" alt="youtube-icon"></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-links">
          <a href="#">HELP</a>
          <a href="#">TERMS & CONDITION</a>
          <a href="#">PRIVACY</a>
        </div>
        <span class="text-white">Copyright © 2015 - Tajam Creative</span>
      </div>
    </footer>
  </section>

</template>

<style lang="sass" scoped>
.footer-wrapper
  position: relative

.footer-image
  height: 400px

.overlay
  background-color: #281357
  opacity: 0.8

.logo-img
  width: 44px

.logo-text
  color: #00e0d0
  font-weight: 200
  font-size: 30px
  padding-left: 10px

.footer
  position: absolute
  top: 0
  left: 50%
  transform: translateX(-50%)
  margin-top: 70px
  z-index: 3
  width: 1024px
  padding: 0 40px

.footer-top
  display: flex
  flex-direction: row
  justify-content: space-between

.footer-logo
  display: flex
  flex-direction: row
  align-items: center
  margin-bottom: 30px

.footer-section-1
  width: 285px

.logo-descr
  font-size: 14px
  line-height: 26px

.footer-section-2
  width: 270px

.footer-studio
  font-weight: bold
  margin-bottom: 40px
  margin-top: 16px
  display: block

.footer-adress
  display: flex
  flex-direction: row
  margin-bottom: 18px

.footer-adress img
  display: block
  width: 14px
  height: 19px
  margin-top: 3px

.footer-adress-name
  display: block
  color: #fff
  width: 245px
  margin-left: 15px
  line-height: 26px

.footer-phone span
  padding-left: 12px

.footer-section-3
  width: 290px

.footer-section-3 span
  font-weight: bold
  display: block
  margin: 15px 0 45px 0

.email-input
  cursor: pointer
  font-size: 14px
  background: transparent
  border: 1px solid #fff
  padding: 17px
  color: #fff
  width: 210px
  outline: none
  opacity: 0.8
  margin-right: 10px
  height: 45px
  &:hover
    opacity: 1

.email-input::placeholder
  color: #fff

.form
  display: flex
  margin-bottom: 35px

.form button
  cursor: pointer
  height: 45px
  width: 70px
  background: #fff
  border: none
  opacity: 0.8
  &:hover
    opacity: 1

.socials-list
  display: flex
  justify-content: space-between
  padding-right: 40px

.socials-list li:hover
  opacity: 0.8
  cursor: pointer

.footer-links a
  margin-right: 32px
  color: #fff
  text-decoration: none
  &:hover
    opacity: 0.8

.footer-bottom
  margin-top: 70px
  display: flex
  flex-direction: row
  justify-content: space-between

</style>