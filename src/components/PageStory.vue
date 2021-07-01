<template>
  <q-img src="../img/Body-bg.jpg" class="video-image">
    <div class="absolute-full video-overlay">
    </div>
    <div class="video-content">
      <img src="../img/play-icon.png" alt="play-icon">
      <span>WATCH OUR STORY</span>
    </div>
  </q-img>
</template>

<style lang="sass" scoped>
.video-image
  height: 550px
  cursor: pointer

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
  margin-top: 20px

.video-content span
  display: block
  margin-top: 35px
</style>