<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>

<style lang="sass">
ul
  list-style: none
  padding-left: 0
html
  @media (max-width: 360px)
  overflow-x: hidden
</style>
