<template>
    <header class="header center">
      <div class="header__left">
        <a href="index.html"
          ><img src="../img/Logo.svg" alt="header_logo" /><span>Interno</span></a
        >
      </div>
      <div class="header__right">
        <a href="index.html">Home</a>
        <a href="#Projects">Project</a>
        <a href="blog.html">Blog</a>
      </div>
    </header>
</template>

<script>
export default {
 name: 'HeaderComponent',

}
</script>

<style lang="scss" scoped>

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 44px;
  
    &__left {
      line-height: 50px;
      letter-spacing: 0em;
      text-align: left;
      font-size: 40px;
      display: flex;
  
      & img {
        height: 34px;
        width: 34px;
        margin-top: 8px;
        margin-right: 10px;
      }
  
      & span {
        color: #292f36;
      }
    }
  
    &__right {
      display: flex;
      gap: 30px;
      font-family: Jost;
      font-size: 20px;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0em;
      text-align: center;
  
      & a {
        color: #292f36;
      }
    }
  }
</style>