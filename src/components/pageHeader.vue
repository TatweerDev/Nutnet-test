<template>
  <div>
    <q-img src="../img/header-bg.jpg" class="header-image">
    <div class="bg-transparent container header-wrapper">
      <q-toolbar>
        
        <q-toolbar-title class="text-roboto logo">
          <router-link to="/" class="link">
            <q-img src="../img/logo.png" class="logo-img" />
              tajam
          </router-link>
          </q-toolbar-title>
          <mobile-menu />
                   
          
          <nav class="screen-tablet">
            <button :class="{'active' : active == 'home'}" @click="homeClick" @toggle-home="homeClick">HOME</button>
            <button :class="{'active' : active == 'about'}"  @click="scrollTo('about')">ABOUT</button>
            <button :class="{'active' : active == 'expertise'}"  @click="scrollTo('expertise')">EXPERTISE</button>
            <button :class="{'active' : active == 'teams'}"  @click="scrollTo('teams')">TEAMS</button>
            <button :class="{'active' : active == 'works'}"  @click="scrollTo('works')">WORKS</button>
            <button :class="{'active' : active == 'people'}"  @click="scrollTo('people')">PEOPLE SAY</button>
            <button :class="{'active' : active == 'contact'}"  @click="scrollTo('contact')">CONTACT</button>
          </nav>
      </q-toolbar>
    </div>

    <div class="absolute-full text-subtitle2 overlay flex flex-center">

    </div>
    <div class="slogan">
      <span class="slogan-title text-playfair text-weight-bold" >We Are Awesome Creative Agency</span>
      <span class="slogan-descr text-roboto">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</span>
      <q-btn outline color="accent" label="LEARN MORE" class="slogan-button" />
    </div>
    </q-img>
  </div>
</template>

<script>
import MobileMenu from './MobileMenu.vue'

export default {
  components: { MobileMenu },
  data() {
    return {
      active: 'home'
    }
  },
  methods: {
    scrollTo(el) {
      this.active = el
      document.getElementById(el).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },
    homeClick() {
      this.active = 'home'
    }
  }
}
</script>

<style lang="sass" scoped>
.header-image
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    height: 520px
  @media (max-width: $tablet-width)
    height: 545px

  height: 670px

.overlay
  background-color: #281357
  opacity: 0.8

.logo
  color: #00e0d0
  font-weight: 200
  font-size: 30px

.link
  text-decoration: none
  color: #00e0d0
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    font-size: 22px

.header-wrapper
  position: relative
  z-index: 3

.q-tab
  opacity: 1

.logo-img
  width: 44px

.slogan-title
  position: relative
  display: block
  font-size: 32px !important
  margin-bottom: 58px
  text-align: center
  &::after
    position: absolute
    content: ""
    height: 1px
    width: 50px
    bottom: -27px
    left: 50%
    background: #00e0d0
    transform: translateX(-50%)

.slogan
  position: absolute
  background: transparent !important
  z-index: 2
  width: 780px
  top: 50%
  left: 50%
  transform: translateX(-50%)
  margin-top: -130px
  @media (max-width: $tablet-width)
    width: 360px
    top: 43%

.slogan-descr
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    width: 400px
    margin: 40px auto

  display: block
  text-align: center
  font-weight: 300
  font-size: 14px
  line-height: 24px
  margin-bottom: 50px

.slogan-button
  left: 50%
  transform: translateX(-50%)


.q-tab__label
  font-size: 13px !important

nav button
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    font-size: 11px
    padding: 5px 5px

  background: transparent
  border: none
  font-size: 13px
  color: #fff
  font-weight: bold
  cursor: pointer
  padding: 5px 13px
  &:hover
    opacity: 0.8
  @media (max-width: $tablet-width)
    color: #000
  
.active
  color: #00e0d0

.text-center
  padding-top: 5px

</style>