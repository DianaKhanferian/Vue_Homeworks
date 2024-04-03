<template>
    <section class="project__banner">
      <div class="project__banner-intro">
        <h1 class="project__banner-heading">Our Project</h1>
        <p class="project__banner-nav">Home / Project</p>
      </div>
    </section>
</template>

<script>
export default {
 name: 'PPBannerComponent',

}
</script>

<style lang="scss" scoped>
$fontMain: "DM Serif Display";
.project__banner {
  background-image: url(../../img/projectBanner.svg);
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