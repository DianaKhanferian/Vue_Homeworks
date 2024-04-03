<template>
    <div>
    <HeaderComponent></HeaderComponent>
    <BDBannerComponent></BDBannerComponent>
    <BDMainComponent></BDMainComponent>
    <!-- <BlogBannerComp></BlogBannerComp>
    <LatestPostComp></LatestPostComp>
    <ArticlesComponent></ArticlesComponent> -->
    <FooterComponent></FooterComponent> 
  </div>
</template>

<script>
import HeaderComponent from './../components/HeaderComponent.vue'
import BDBannerComponent from './../components/BlogDetailsPageComp/BDBannerComponent.vue'
import BDMainComponent from './../components/BlogDetailsPageComp/BDMainComponent.vue'
// import BlogBannerComp from './../components/BlogPageComp/BlogBannerComp.vue'
// import LatestPostComp from './../components/BlogPageComp/LatestPostComp.vue'
// import ArticlesComponent from './../components/BlogPageComp/ArticlesComponent.vue'
import FooterComponent from './../components/FooterComponent.vue'

export default {
  name: 'BlogDetailsPage',
  components: {
    HeaderComponent,
    BDBannerComponent,
    BDMainComponent,
    // BlogBannerComp,
    // LatestPostComp,
    // ArticlesComponent,
    FooterComponent
  }
}
</script>