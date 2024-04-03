<template>
    <div>
    <HeaderComponent />
    <PPBannerComponent />
    <PPMainComponent />
    <FooterComponent /> 
  </div>
</template>

<script>
import HeaderComponent from './../components/HeaderComponent.vue'
import PPBannerComponent from './../components/ProjectPageComp/PPBannerComponent.vue'
import PPMainComponent from './../components/ProjectPageComp/PPMainComponent.vue'
import FooterComponent from './../components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    PPBannerComponent,
    PPMainComponent,
    FooterComponent
  }
}
</script>