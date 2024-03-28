<template>
    <section class="blogDetails__banner">
    </section>
</template>

<script>
export default {
 name: 'BDBannerComponent',

}
</script>

<style lang="scss" scoped>
$fontMain: "DM Serif Display";
.blogDetails__banner {
  background-image: url(../../img/blogDetails_banner.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 351px;
  margin-top: 45px;
}

</style>