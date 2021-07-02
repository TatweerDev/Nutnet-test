<template>
  <q-layout view="lHh Lpr lFf">
    <page-header />
    <page-about />
    <page-story />
    <page-expertise />
    <page-team />
    <page-works />
  </q-layout>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import PageAbout from '../components/PageAbout.vue'
import PageStory from '../components/PageStory.vue'
import PageExpertise from '../components/PageExpertise.vue'
import PageTeam from '../components/PageTeam.vue'
import PageWorks from '../components/PageWorks.vue'

export default {
  components: { PageAbout, PageStory, PageHeader, PageExpertise, PageTeam, PageWorks },

}

</script>



<style lang="sass" scoped>

</style>




