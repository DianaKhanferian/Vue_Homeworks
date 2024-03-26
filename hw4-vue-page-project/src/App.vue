<template>
    <div id="app">
      <HomePage />
      <BlogPage /> 
      <BlogDetailsPage /> 
  </div>
</template>

<script>

import HomePage from './pages/HomePage.vue'
import BlogPage from './pages/BlogPage.vue'
import BlogDetailsPage from './pages/BlogDetailsPage.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    BlogPage,
    BlogDetailsPage,
  }
}
</script>

<style lang="scss">
html,
body,
div,
img,
a,
hr,
p,
table,
tr,
td,
h1,
h2,
h3,
h4,
h5,
h6,
input,
select,
textarea,
button {
  box-sizing: border-box;
  border: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  outline: none;
  vertical-align: top;
  transition: none;
}

body {
  font-family: "DM Serif Display", serif;
  color: #292f36;
  font-weight: 400;
  font-style: normal;
  overflow-x: hidden;
  user-select: none;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
  transition: 0.3s all ease;
}

.center {
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px);
}
</style>