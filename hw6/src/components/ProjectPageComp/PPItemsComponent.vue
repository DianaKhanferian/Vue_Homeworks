<template>
  <div class="project__items">
    <div class="project__item" v-for="(project, index) in projects" :key="index">
      <img class="project__item-img" :src="require('../../img/' + project.image)" alt="" />
      <div class="project__item-wrap">
        <div class="project__item-wrap-text">
          <h2 class="project__item-title">{{ project.title }}</h2>
          <p class="project__item-text">{{ project.text }}</p>
        </div>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
            <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
            <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PPItemsComponent",
  props: ["projects"],
};
</script>

<style lang="scss" scoped>
.project__items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 61px;
  justify-items: center;
  gap: 30px;
}

.project__item {
  padding-bottom: 27px;
  display: inline-block;

  &-img {
    width: 585px;
    height: 522px;

  }

  &-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-top: 24px;
  }

  .project__item-title {
    font-family: "DM Serif Display";
    font-size: 25px;
    font-weight: 400;
    line-height: 31.25px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
  }

  .project__item-text {
    font-family: "Jost";
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
    ;

  }


}
</style>
