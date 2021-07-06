<template>
  <q-img src="../img/Body2-bg.jpg" class="carousel-image">
    <div class="absolute-full carousel-overlay">
    </div>
    <div class="q-pa-md container carousel">
      <ul class="carousel-content">
        <li v-for="(person, index) in people" :key="index">
          <div class="carousel-content-wrapper" :class="[activeTab == index ? 'visible' : '']">
            <span class="text-playfair qoutes">“</span>
            <span class="carousel-text text-playfair">{{ person.text }}</span>
            <span class="carousel-author">{{ person.name }}</span>
            <span class="carousel-position">{{ person.position }}</span>
          </div>
        </li>
      </ul>
      <ul class="carousel-buttons">
        <li :class="[activeTab == 0 ? 'active' : '']" @click="toggleTab(0)"><img src="../img/carousel1.png" alt="member-photo"></li>
        <li :class="[activeTab == 1 ? 'active' : '']" @click="toggleTab(1)"><img src="../img/carousel2.png" alt="member-photo"></li>
        <li :class="[activeTab == 2 ? 'active' : '']" @click="toggleTab(2)"><img src="../img/carousel3.png" alt="member-photo"></li>
        <li :class="[activeTab == 3 ? 'active' : '']" @click="toggleTab(3)"><img src="../img/carousel4.png" alt="member-photo"></li>
        <li :class="[activeTab == 4 ? 'active' : '']" @click="toggleTab(4)"><img src="../img/carousel5.png" alt="member-photo"></li>
      </ul>
    </div>
  </q-img>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 2,
      people: [
        {
          name: 'AGNESA BOIAGI',
          text: 'The more love, wisdom, beauty, kindness you open in yourself, the more you will notice them in the world around you.',
          position: 'PR MANAGER'
        },
        {
          name: 'LUCIUS SENEKA',
          text: 'For a ship that does not know which harbor sail to, it is no wind will be favorable...',
          position: 'COMPANY DIRECTOR'
        },
        {
          name: 'JANE GALADRIEL',
          text: 'This is Photoshop`s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.',
          position: 'CEO TENGKUREP'
        },
        {
          name: 'JANE DOE',
          text: 'I want to be a billionaire! Like my uncle. - What ? You uncle is a billionaire? - No. But he wants to be a billionaire too)',
          position: 'STAFF MANAGER'
        },
        {
          name: 'ALEX CHUMASLOV',
          text: 'If you reading this text, you`ve got to give me an offer on position of frontend developer in your company ) You wouldn`t be sorry, I promise',
          position: 'FRONTEND DEVELOPER'
        },
      ]
    }
  },
  methods: {
    toggleTab(index) {
      this.activeTab = index;
    }
  }
}
</script>

<style lang="sass" scoped>
.carousel-image
  height: 500px
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    height: 540px
  @media (max-width: $tablet-width)
    height: 650px

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
  @media (max-width: $tablet-width)
    width: auto


.carousel-text
  display: flex
  align-items: center
  text-align: center
  font-size: 16px
  line-height: 26px
  min-height: 155px
  @media (max-width: $tablet-width)
    min-height: 282px

.qoutes
  font-size: 100px
  line-height: 40px

.carousel-author
  display: block
  font-size: 16px
  font-weight: bold
  margin-top: 30px
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
  &:hover
    opacity: 0.8
  &:active
    opacity: 0.4

.active
  transform: scale(1.5)
  transition: 0.3s

.carousel-content-wrapper
    display: none
    flex-direction: column
    align-items: center

.visible
  display: flex
</style>
