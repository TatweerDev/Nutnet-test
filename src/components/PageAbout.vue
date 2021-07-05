<template>
  <section class="container about">
    <q-img src="../img/big-logo.png" class="about-img" fit="contain"/>
    <div class="about-descr">
      <h2 class="text-playfair">Our Story</h2>
      <span>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus</span>
      <span>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</span>
      <q-btn outline color="accent" label="LEARN MORE" class="about-button" />
    </div>
    
  </section>
</template>

<style lang="sass" scoped>
.about
  display: flex
  flex-direction: row
  justify-content: space-around
  padding-top: 45px
  padding-bottom: 70px
  @media (max-width: $tablet-width)
    flex-direction: column
    align-items: center

.about-img
  width: 235px
  margin: 0 100px 0 auto
  @media (max-width: $tablet-width)
    width: 150px
    margin: 0 auto

.about-descr
  width: 56%
  @media (max-width: $tablet-width)
    width: auto
    text-align: center

.about-descr h2
  margin-top: 25px
  font-size: 22px
  font-weight: bold
  text-transform: uppercase
  line-height: 50px

.about-descr span
  display: block
  margin-bottom: 35px
  padding-right: 60px
  color: #636268
  font-size: 14px
  line-height: 22px
  @media (max-width: $tablet-width)
    padding: 0 10px

</style>