<template>
    <section class="achievements center">
      <div class="achievements__card">
        <h3 class="achievements__card-title">12</h3>
        <p class="achievements__card-desc">Years Of Experience</p>
      </div>
      <div class="achievements__card">
        <h3 class="achievements__card-title">85</h3>
        <p class="achievements__card-desc">Success Projects</p>
      </div>
      <div class="achievements__card">
        <h3 class="achievements__card-title">15</h3>
        <p class="achievements__card-desc">Active Projects</p>
      </div>
      <div class="achievements__card">
        <h3 class="achievements__card-title">95</h3>
        <p class="achievements__card-desc">Happy Customers</p>
      </div>
    </section>
</template>

<script>
export default {
 name: 'AchievementsComp',

}
</script>

<style lang="scss" scoped>
$fontMain: "DM Serif Display";
.achievements {
  margin-top: 93px;
  background-color: #f4f0ec;
  height: 457px;
  display: flex;
  align-items: center;
  text-align: center;

  &__card {
    width: 100%;

    &:not(:last-child) {
      border-right: 1px solid #cda274;
    }

    &-title {
      font-family: $fontMain;
      font-size: 85px;
      font-weight: 400;
      line-height: 106px;
      letter-spacing: 0.02em;
      color: #cda274;
    }

    &-desc {
      font-family: Jost;
      font-size: 22px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0.01em;
      color: #4d5053;
    }
  }
}
</style>