<template>
    <div>
    <HeaderComponent></HeaderComponent>
    <PromoComponent></PromoComponent>
    <ProjectsComponent></ProjectsComponent>
    <AchievementsComp></AchievementsComp>
    <HomeBlogComponent></HomeBlogComponent>
    <FooterComponent></FooterComponent> 
  </div>
</template>

<script>
import HeaderComponent from './../components/HeaderComponent.vue'
import PromoComponent from './../components/MainPageComp/PromoComponent.vue'
import ProjectsComponent from './../components/MainPageComp/ProjectsComponent.vue'
import AchievementsComp from './../components/MainPageComp/AchievementsComp.vue'
import HomeBlogComponent from './../components/MainPageComp/HomeBlogComponent.vue'
import FooterComponent from './../components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    PromoComponent,
    ProjectsComponent,
    AchievementsComp,
    HomeBlogComponent,
    FooterComponent
  }
}
</script>