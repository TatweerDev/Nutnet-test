<template>
  <section>
    <div class="works-top container">
      <h3 class="text-playfair">OUR WORKS</h3>
      <a href="https://dribbble.com/" target="_blank" rel="noopener">See All Project in dribbble ></a>
    </div>
    <div class="image-wrapper">
      <q-img src="../img/work1.png" class="team-image" />
      <q-img src="../img/work2.png" class="team-image" />
      <q-img src="../img/work3.png" class="team-image" />
      <q-img src="../img/work4.png" class="team-image" />
      <q-img src="../img/work5.png" class="team-image" />
      <q-img src="../img/work6.png" class="team-image" />
    </div>
    <div class="image-wrapper">
      <q-img src="../img/work3.png" class="team-image" />
      <q-img src="../img/work1.png" class="team-image" />
      <q-img src="../img/work4.png" class="team-image" />
      <q-img src="../img/work3.png" class="team-image" />
      <q-img src="../img/work2.png" class="team-image" />
      <q-img src="../img/work1.png" class="team-image" />
    </div>
    <q-btn outline color="accent" label="LOAD MORE" class="works-button container" />
  </section>
</template>



<style lang="sass" scoped>
.works-top
  display: flex
  flex-direction: row
  justify-content: space-between
  padding: 50px 40px
  @media (max-width: $tablet-width)
    padding: 20px 10px

.works-top h3
  font-size: 22px
  margin: 0
  font-weight: bold
  color: #413d4b
  @media (max-width: $tablet-width)
    font-size: 18px

.works-top a
  text-decoration: none
  color: #413d4b
  padding-top: 15px

.image-wrapper
  display: flex
  flex-direction: row
  @media (max-width: $tablet-width)
    flex-wrap: wrap
    width: 360px
    margin: 0 auto

.works-button
  display: flex
  margin: 70px auto
  width: 140px
  @media (max-width: $tablet-width)
    margin: 40px auto

.q-img
  @media (max-width: $tablet-width)
    width: 120px
</style>