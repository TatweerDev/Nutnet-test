<template>
  <section class="container expertise">
    <h2 class="text-playfair">EXPERTISE</h2>
    <span class="text-playfair expertise-descr" >Lorem ipsum dolor sit amet proin gravida nibh vel velit</span>
    <ul class="expertise-list">
      <!-- <li class="expertise-item" v-for="(item, index) in expertise" :key="index">
        <img :src="item.img" :alt="item.alt">
        <h3>{{ item.title }}</h3>
        <span>{{ item.descr }}</span>
      </li> -->
      <li class="expertise-item" v-for="(item, index) in expertise" :key="index">
        <img src="../img/comp.png" alt="item.alt">
        <h3>SEARCH ENGINE OPTIMIZATION</h3>
        <span>This is Photoshop`s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      expertise: [
        {
          img: '../img/comp.png',
          alt: 'design-icon',
          title: 'WEB DESIGN & DEVELOPMENT',
          descr: 'This is Photoshop`s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'
        },
        {
          img: '../img/brand.png',
          alt: 'branding-icon',
          title: 'BRANDING IDENTITY',
          descr: 'This is Photoshop`s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'
        },
        {
          img: '../img/mobile.png',
          alt: 'mobile-icon',
          title: 'MOBILE APP',
          descr: 'This is Photoshop`s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'
        },
        {
          img: '../img/search.png',
          alt: 'search-icon',
          title: 'SEARCH ENGINE OPTIMIZATION',
          descr: 'This is Photoshop`s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'
        },
        {
          img: '../img/game.png',
          alt: 'game-icon',
          title: 'GAME DEVELOPMENT',
          descr: 'This is Photoshop`s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'
        },
        {
          img: '../img/love.png',
          alt: 'love-icon',
          title: 'MADE WITH LOVE',
          descr: 'This is Photoshop`s version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean.'
        },
      ]
    }
  }
}
</script>

<style lang="sass">
.expertise
  display: flex
  flex-direction: column
  align-items: center

.expertise h2
  font-size: 22px
  font-weight: bold
  
.expertise-descr
  position: relative
  display: block
  font-size: 14px
  color: #636268
  &::after
    position: absolute
    content: ""
    height: 1px
    width: 50px
    bottom: -27px
    left: 50%
    background: #c6c4c9
    transform: translateX(-50%)
  
.expertise-item
  display: flex
  flex-direction: column
  align-items: center
  width: 310px
  height: 310px
  padding: 40px
  border-bottom: 1px solid #ebebeb
  border-right: 1px solid #ebebeb
  &:nth-child(3),
  &:nth-child(6)
    border-right: none
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6)
    border-bottom: none
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    width: 300px
    height: 300px
    &:nth-child(3)
      border-right: 1px solid #ebebeb
    &:nth-child(4)
      border-bottom: 1px solid #ebebeb
    &:nth-child(2),
    &:nth-child(4)
      border-right: none
  @media (max-width: $tablet-width)
    width: auto
    border-right: none
    border-bottom: 1px solid #ebebeb !important
      

.expertise-item h3
  font-size: 14px
  font-weight: bold
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
     font-size: 14px

.expertise-item span
  display: block
  text-align: center
  font-size: 14px
  color: #636268

.expertise-list
  list-style: none
  padding-left: 0
  display: flex
  width: 940px
  flex-wrap: wrap
  margin: 70px auto
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    width: 600px
  @media (max-width: $tablet-width)
    width: 360px
    margin-bottom: 0
    
</style>