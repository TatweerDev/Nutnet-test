<template>
  <q-layout view="lHh Lpr lFf">
    <page-header />
    <page-about />
    <page-story />
    <page-expertise />
    <page-team />
    <page-works />
    <page-carousel />
    <page-form />
    <page-footer />
  </q-layout>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import PageAbout from '../components/PageAbout.vue'
import PageStory from '../components/PageStory.vue'
import PageExpertise from '../components/PageExpertise.vue'
import PageTeam from '../components/PageTeam.vue'
import PageWorks from '../components/PageWorks.vue'
import PageCarousel from '../components/PageCarousel.vue'
import PageForm from '../components/PageForm.vue'
import PageFooter from '../components/PageFooter.vue'

export default {
  components: { PageAbout, PageStory, PageHeader, PageExpertise, PageTeam, PageWorks, PageCarousel, PageForm, PageFooter },

}

</script>



<style lang="sass" scoped>

</style>




