<template>
  <div class="project__categories">
    <div class="project__categories-wrap">
      <div class="project__categories-button" v-for="(category, index) in categoriesList" :key="index"
        @click="isActive(index)" :class="{ active: category.active }">
        {{ category.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PPFilterComponent",

  data() {
    return {
      categoriesList: [
        {
          name: "Bathroom",
          active: false,
        },
        {
          name: "Bedroom",
          active: true,
        },
        {
          name: "Kitchen",
          active: false,
        },
        {
          name: "Living Room",
          active: false,
        },
      ],
    };
  },

  methods: {
    isActive(i) {
      this.categoriesList.forEach((element) => {
        element.active = false;
      });
      this.categoriesList[i].active = true;
      this.$emit("activeCategory", i);
      return this.categoriesList[i].active;
    },
  },
};
</script>

<style lang="scss" scoped>
.project__categories {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-wrap {
    border-radius: 18px;
    width: 880px;
    border: 1px solid #cda274;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 78px;
  }

  &-button {
    cursor: pointer;
    padding: 26px 66px;
    margin-left: -66px;
    margin-right: -66px;

    color: #292f36;
    text-align: center;
    font-family: "Jost";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;

    &:hover {
      color: #fff;
      border-radius: 18px;
      background: #cda274;
    }
  }

  .active {
    color: #fff;
    border-radius: 18px;
    background: #cda274;
  }
}
</style>
