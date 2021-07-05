<template>
  <q-img src="../img/Body2-bg.jpg" class="carousel-image">
    <div class="absolute-full carousel-overlay">
    </div>
    <div class="q-pa-md container carousel">
      <div class="carousel-content">
        <span class="text-playfair qoutes">“</span>
        <span class="carousel-text text-playfair">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.</span>
        <span class="carousel-author">JANE GALADRIEL</span>
        <span class="carousel-position">CEO TENGKUREP</span>
      </div>
      <ul class="carousel-buttons">
        <li><img src="../img/carousel1.png" alt="member-photo"></li>
        <li><img src="../img/carousel2.png" alt="member-photo"></li>
        <li class="active"><img src="../img/carousel3.png" alt="member-photo"></li>
        <li><img src="../img/carousel4.png" alt="member-photo"></li>
        <li><img src="../img/carousel5.png" alt="member-photo"></li>
      </ul>
    </div>
  </q-img>
</template>

<style lang="sass" scoped>
.carousel-image
  height: 500px
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    height: 540px

.carousel-overlay
  background-color: #281357
  opacity: 0.8

.carousel
  left: 50%
  transform: translateX(-50%)
  background-color: transparent
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 70px
  
.carousel-content
  display: flex
  flex-direction: column
  align-items: center
  width: 740px
  margin: 0 auto
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    width: 540px

.carousel-text
  text-align: center
  font-size: 16px
  line-height: 26px

.qoutes
  font-size: 100px
  line-height: 40px

.carousel-author
  display: block
  font-size: 16px
  font-weight: bold
  margin-top: 50px
  margin-bottom: 8px

.carousel-position
  opacity: 0.8

.carousel-buttons
  display: flex
  flex-direction: row
  align-items: center
  margin-top: 40px

.carousel-buttons li
  display: block
  margin: 7px
  cursor: pointer
 

.carousel-buttons li img
  width: 45px
  height: 45px

.active
  transform: scale(1.5)
</style>