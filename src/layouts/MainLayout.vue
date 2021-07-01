<template>
  <q-layout view="lHh Lpr lFf">
    <page-header />
    <page-about />
    <page-story />
  </q-layout>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import PageAbout from '../components/PageAbout.vue'
import PageStory from '../components/PageStory.vue'

export default {
  components: { PageAbout, PageStory, PageHeader },

}

</script>



<style lang="sass" scoped>

</style>




