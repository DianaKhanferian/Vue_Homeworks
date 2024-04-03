<template>
    <section class="blog__banner">
      <div class="blog__banner-intro">
        <h1 class="blog__banner-heading">Articles & News</h1>
        <p class="blog__banner-nav">Home / Blog</p>
      </div>
    </section>
</template>

<script>
export default {
 name: 'BlogBannerComp',

}
</script>

<style lang="scss" scoped>
$fontMain: "DM Serif Display";
.blog__banner {
  background-image: url(../../img/blogBanner.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 356px;
  margin-top: 45px;
  display: flex;
  justify-content: center;
  align-items: end;

  &-intro {
    width: 503px;
    height: 178px;
    background-color: #fff;
    border-radius: 37px 37px 0px 0px;
    padding: 41px 78px 41px 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  &-heading {
    font-family: $fontMain;
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0em;
  }

  &-nav {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
  }
}

</style>