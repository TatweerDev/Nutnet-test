<template>
  <q-btn
    class="screen-mobile"
    flat
    dense
    round
    icon="menu"
    aria-label="Menu"
    @click="shown = !shown"
  />

  <div class="mobile-menu-wrapper">
    <div :class="{hidden: !shown}" class="mobile-overlay" @click="shown = !shown">
    </div>
    <nav class="mobile-menu" :class="{shown: shown}">
      <button :class="{'active' : active == 'home'}" @click="homeClick" @toggle-home="homeClick">HOME</button>
      <button :class="{'active' : active == 'about'}"  @click="scrollTo('about')">ABOUT</button>
      <button :class="{'active' : active == 'expertise'}"  @click="scrollTo('expertise')">EXPERTISE</button>
      <button :class="{'active' : active == 'teams'}"  @click="scrollTo('teams')">TEAMS</button>
      <button :class="{'active' : active == 'works'}"  @click="scrollTo('works')">WORKS</button>
      <button :class="{'active' : active == 'people'}"  @click="scrollTo('people')">PEOPLE SAY</button>
      <button :class="{'active' : active == 'contact'}"  @click="scrollTo('contact')">CONTACT</button>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'home',
      shown: false
    }
  },
  methods: {
    homeClick() {
      this.shown = !this.shown
      this.active = 'home'
    },
    scrollTo(el) {
      this.shown = !this.shown
      this.active = el
      document.getElementById(el).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.mobile-menu
  @media (max-width: $tablet-width) 
    position: absolute
    display: flex
    flex-direction: column
    top: -16px
    right: -42px
    width: 1px
    visibility: hidden
    height: 100vw
    background: #fff
    z-index: 5
    color: #000
    transition: 0.3s ease-in
    padding-top: 30px
    padding-bottom: 30px
  
  @media (min-width: $breakpoint-sm-min) 
    display: none
  
.mobile-menu button
  background: transparent
  border: none
  outline: none
  font-weight: bold
  height: 50px
  z-index: 5

.active
  color: #00e0d0

.mobile-overlay
  position: fixed
  width: 600px
  margin-left: -400px
  margin-top: -40px
  height: 100%
  background: #000
  opacity: 0.4
  z-index: 4
  @media (min-width: $breakpoint-sm-min)
    display: none


.shown
  width: 300px
  visibility: visible

.hidden
  display: none
  
</style>