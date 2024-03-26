<template>
    <div>
    <HeaderComponent></HeaderComponent>
    <BlogBannerComp></BlogBannerComp>
    <LatestPostComp></LatestPostComp>
    <BlogItemsComponent></BlogItemsComponent>
    <FooterComponent></FooterComponent> 
  </div>
</template>

<script>
import HeaderComponent from './../components/HeaderComponent.vue'
import BlogBannerComp from './../components/BlogPageComp/BlogBannerComp.vue'
import LatestPostComp from './../components/BlogPageComp/LatestPostComp.vue'
import BlogItemsComponent from './../components/BlogPageComp/BlogItemsComponent.vue'
import FooterComponent from './../components/FooterComponent.vue'

export default {
  name: 'BlogPage',
  components: {
    HeaderComponent,
    BlogBannerComp,
    LatestPostComp,
    BlogItemsComponent,
    FooterComponent
  }
}
</script>