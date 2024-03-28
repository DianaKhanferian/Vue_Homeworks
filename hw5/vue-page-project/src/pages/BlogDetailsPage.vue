<template>
    <div>
    <HeaderComponent></HeaderComponent>
    <BDBannerComponent></BDBannerComponent>
    <BDMainComponent></BDMainComponent>
    <FooterComponent></FooterComponent> 
  </div>
</template>

<script>
import HeaderComponent from './../components/HeaderComponent.vue'
import BDBannerComponent from './../components/BlogDetailsPageComp/BDBannerComponent.vue'
import BDMainComponent from './../components/BlogDetailsPageComp/BDMainComponent.vue'
import FooterComponent from './../components/FooterComponent.vue'

export default {
  name: 'BlogDetailsPage',
  components: {
    HeaderComponent,
    BDBannerComponent,
    BDMainComponent,
    FooterComponent
  }
}
</script>
