<template>
  <q-img src="../img/Body3-bg.jpg" class="team-image">
    <div class="absolute-full team-overlay">
    </div>
    <div class="container team-wrapper">
      <h3 class="text-playfair">MEET OUR AMAZING TEAM</h3>
      <span class="text-playfair team-descr">Lorem ipsum dolor sit amet proin gravida nibh vel velit</span>
      <ul class="team-list">
        <li v-for="(member, index) in team" :key="index">
          <img src="../img/team-photo.png" alt="team-photo" class="team-item-img">
          <div class="team-item__text">
            <h3>{{ member.name }}</h3>
            <span>{{ member.position }}</span>
          </div>
        </li>
      </ul>
      <span class="team-slogan">Become part of our dream team, let’s join us !</span>
      <q-btn outline color="accent" label="WE ARE HIRING" />
    </div>
  </q-img>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: 'SEMF UCUK',
          position: 'CEO & FOUNDER'
        },
        {
          name: 'DIK ADALIN',
          position: 'ENGINEERING'
        },
        {
          name: 'JENG KOL',
          position: 'DESIGNER'
        },
        {
          name: 'PET ROMAK',
          position: 'MARKETING'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.team-image
  height: 712px
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    height: 1086px
  @media (max-width: $tablet-width)
    height: 950px

.team-overlay
  background-color: #281357
  opacity: 0.8

.team-wrapper
  background: transparent
  display: flex
  flex-direction: column
  align-items: center
  left: 50%
  transform: translateX(-50%)
  margin-top: 35px

.team-wrapper h3
  font-size: 22px
  font-weight: bold
  color: #fff
  margin: 0 auto 5px auto

.team-descr
  display: block
  position: relative
  font-size: 14px
  margin-bottom: 70px
  &::after
    position: absolute
    content: ""
    height: 1px
    width: 50px
    bottom: -27px
    left: 50%
    opacity: 0.5
    background: #fff
    transform: translateX(-50%)
  @media (max-width: $tablet-width)
    text-align: center

.team-list
  display: flex
  justify-content: space-between
  width: 940px
  margin-bottom: 60px
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    width: 500px
    flex-wrap: wrap
  @media (max-width: $tablet-width)
    width: 360px
    flex-wrap: wrap
    padding: 0 7px
    margin-bottom: 25px

.team-list li
  display: block
  margin-bottom: 20px


.team-item__text
  margin-top: -6px
  border: 1px solid rgba(255, 255, 255, .3)
  text-align: center

.team-item__text h3
  font-size: 14px
  line-height: 14px
  margin: 22px auto 12px auto

.team-item__text span
  display: inline-block
  font-size: 13px
  opacity: 0.5
  margin-bottom: 22px

.team-slogan
  opacity: 0.8
  margin-bottom: 20px

.team-item-img
  @media (max-width: $tablet-width)
    width: 170px

</style>