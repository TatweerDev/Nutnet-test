<template>
  <q-img src="../img/Body-bg.jpg" class="video-image">
    <div class="absolute-full video-overlay">
    </div>
    <div class="video-content">
      <img src="../img/play-icon.png" alt="play-icon">
      <span class="text-roboto">WATCH OUR STORY</span>
    </div>
  </q-img>
</template>

<style lang="sass" scoped>
.video-image
  height: 550px
  cursor: pointer
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    height: 450px

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

</style>