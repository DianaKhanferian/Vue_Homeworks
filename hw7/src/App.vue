<template>
  <div id="app">
    <ProjectDetails />

    <ProjectPage />

    <HomePage />

    <BlogPage />

    <BlogDetailsPage />
  </div>
</template>

<script>

import HomePage from './pages/HomePage.vue'

import BlogPage from './pages/BlogPage.vue'

import BlogDetailsPage from './pages/BlogDetailsPage.vue'

import ProjectPage from './pages/ProjectPage.vue'

import ProjectDetails from './pages/ProjectDetails.vue'

export default {
  name: 'App',
  components: {
    HomePage,

    BlogPage,

    BlogDetailsPage,

    ProjectPage,

    ProjectDetails

  }
}
</script>

<style lang="scss">
@import "scss/vars";

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.center {
  padding-left: calc(50% - $widthSite / 2);
  padding-right: calc(50% - $widthSite / 2);
}
</style>
