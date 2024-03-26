<template>
    <footer class="footer">
      <div class="footer__main">
        <div class="footer__main-logo">
          <a href="index.html"
            ><img src="../img/Logo.svg" alt="footer_logo" /><span>Interno</span></a
          >
        </div>
        <p class="footer__main-text">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <div class="footer__main-social">
          <a href="#"><img src="../img/twitter.svg" alt="twitter" /></a>
          <a href="#"><img src="../img/instagram.svg" alt="instagram" /></a>
        </div>
      </div>
      <div class="footer__menu">
        <h3 class="footer__menu-title">Pages</h3>
        <a href="index.html">Home</a>
        <a href="#Projects">Project</a>
        <a href="blog.html">Blog</a>
      </div>
      <div class="footer__contacts">
        <h3 class="footer__contacts-title">Contact</h3>
        <p class="footer__contacts-text">
          55 East Birchwood Ave. Brooklyn, New York 11201
        </p>
        <p class="footer__contacts-text">contact@interno.com</p>
        <p class="footer__contacts-text">(123) 456 - 7890</p>
      </div>
    </footer>
</template>

<script>
export default {
 name: 'FooterComponent',

}
</script>

<style lang="scss" scoped>
$fontMain: "DM Serif Display";
$fontSecond: "Jost";
.footer {
    margin: 100px auto 150px auto;
    max-width: 1140px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  
    &__main {
      display: flex;
      flex-direction: column;
      gap: 10px;
  
      &-logo img {
        height: 34px;
        width: 34px;
        margin-top: 8px;
        margin-right: 10px;
      }
  
      &-logo span {
        font-family: $fontMain;
        font-size: 40px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0em;
        color: #292f36;
      }
  
      &-text {
        font-family: $fontSecond;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        color: #4d5053;
      }
  
      &-social {
        margin-top: 15px;
        display: flex;
        gap: 50px;
      }
    }
  
    &__menu {
      padding-left: 100px;
      display: flex;
      flex-direction: column;
      gap: 10px;
  
      &-title {
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: left;
      }
  
      & a {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 66px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #4d5053;
      }
    }
  
    &__contacts {
      padding-left: 150px;
      display: flex;
      flex-direction: column;
      gap: 25px;
  
      &-title {
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: left;
      }
  
      &-text {
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
        text-align: left;
        color: #4d5053;
      }
    }
  }
</style>