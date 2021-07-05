<template>
  <q-img src="../img/Body-bg.jpg" class="video-image" @click="showPopup">
    <div class="absolute-full video-overlay">
    </div>
    <div class="video-content">
      <img src="../img/play-icon.png" alt="play-icon">
      <span class="text-roboto">WATCH OUR STORY</span>
    </div>
  </q-img>
  <div v-if="isShown" class="video-popup" @click="showPopup">
    <div class="video-wrapper">
      <iframe class="video-frame" src="https://www.youtube.com/embed/KvUgaHTNit4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: false
    }
  },
  methods: {
    showPopup() {
      this.isShown = !this.isShown
    }
  }
}
</script>

<style lang="sass" scoped>
.video-image
  height: 550px
  cursor: pointer
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    height: 450px
  @media (max-width: $tablet-width)
    height: 370px

.video-overlay
  background-color: #281357
  opacity: 0.8

.video-content
  background: transparent
  display: flex
  flex-direction: column
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  margin-top: 5px

.video-content img
  width: 100px
  height: 100px
  display: flex
  margin: 0 auto
  

.video-content span
  display: block
  margin-top: 35px
  font-size: 16px
  text-align: center
  font-weight: 600

.video-popup
  position: fixed
  top: 0
  left: 0
  height: 100%
  width: 100%
  background: rgba(0,0,0,.5)
  backdrop-filter: blur(50px)
  z-index: 11
  cursor: pointer

.video-wrapper
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  width: 900px
  height: 700px

.video-frame
  width: 100%
  height: 100%

  
</style>