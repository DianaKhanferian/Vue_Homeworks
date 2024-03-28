<template>
    <section class="promo">
      <div class="promo__heading">
        <h1 class="promo__heading-title">Let Your Home<br />Be Unique</h1>
        <p class="promo__heading-text">
          There are many variations of the passages of<br />lorem Ipsum
          fromavailable, majority.
        </p>
        <div class="promo__heading-btn">
          <a href="#">Get Started <img src="../../img/arrow.svg" alt="arrow" /></a>
        </div>
      </div>
    </section>
</template>

<script>
export default {
 name: 'PromoComponent',

}
</script>

<style lang="scss" scoped>
$fontMain: "DM Serif Display";
.promo {
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  margin-top: 40px;
  background-image: url(../../img/PromoBG.svg);
  object-fit: cover;
  height: 758px;
  border-radius: 80px 80px 0px 80px;
  display: flex;
  align-items: center;

  &__heading {
    min-width: 434px;
    height: 342px;
    display: flex;
    flex-direction: column;
    gap: 21px;
    padding-left: 50px;

    &-title {
      font-family: $fontMain;
      font-size: 65px;
      line-height: 81.25px;
    }

    &-text {
      font-family: "Jost";
      font-size: 22px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0.01em;
      text-align: left;
    }

    &-btn {
      font-family: "Jost";
      font-size: 18px;
      font-weight: 600;
      line-height: 23px;
      letter-spacing: 0.02em;
      text-align: center;
      background-color: #292f36;
      border-radius: 18px;
      box-shadow: 0px 10px 20px 0px #c0c0c059;
      padding: 26px 49px 26px 48px;
      width: 220px;
      height: 75px;
      cursor: pointer;

      & a {
        color: #ffffff;
      }

      & img {
        padding-top: 2px;
      }
    }
  }
}
</style>