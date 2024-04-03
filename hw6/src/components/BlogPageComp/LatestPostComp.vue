<template>
    <section class="latestPost center">
      <h2 class="latestPost__heading">Latest Post</h2>
      <div class="latestPost__container">
        <img
          class="latestPost__image"
          src="../../img/latestPost.svg"
          alt="latestpostImg"
        />
        <div class="latestPost__content">
          <h3 class="latestPost__content-heading">
            Low Cost Latest Invented Interior Designing Ideas
          </h3>
          <p class="latestPost__content-text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim maximus.posuere in.Contrary to popular belief.<br /><br />Lorem
            Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>
          <div class="latestPost__content-button">
            <p class="latestPost__content-date">26 December, 2022</p>
            <div class="latestPost__content-btn">
              <img src="../../img/Vector.svg" alt="vector" />
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
 name: 'LatestPostComp',

}
</script>

<style lang="scss" scoped>
$fontMain: "DM Serif Display";
.latestPost {
  margin-top: 200px;

  &__heading {
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0.02em;
    text-align: left;
  }

  &__container {
    margin-top: 27px;
    padding: 22px;
    display: flex;
    gap: 65px;
  }

  &__image {
    border-radius: 37px;
    width: 50%;
  }

  &__content {
    width: 50%;
    padding: 52px 12px 52px 0px;

    &-heading {
      font-size: 25px;
      font-weight: 400;
      line-height: 31px;
      letter-spacing: 0.02em;
    }

    &-text {
      margin-top: 22px;
      font-family: Jost;
      font-size: 22px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0.01em;
      text-align: left;
    }

    &-button {
      margin-top: 22px;
      position: relative;
    }

    &-date {
      margin-top: 52px;
      font-family: Jost;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.01em;
      text-align: left;
    }

    &-btn {
        background-color: #F4F0EC;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 0px;
        bottom: -25px;
    }
  }
}


</style>