<template>
  <section class="project center">
    <PPFilterComponent @activeCategory="activeCategory" />
    <PPItemsComponent :projects="projects" /> 
    <div class="project__count">
      <div class="project__count-container">
        <a href="#" class="project__count-number">01</a>
        <a href="#" class="project__count-number">02</a>
        <a href="#" class="project__count-number">03</a>
        <a href="#">
          <svg
            class="project__count-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
          >
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <path
              d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  import PPFilterComponent from './PPFilterComponent.vue'
  import PPItemsComponent from './PPItemsComponent.vue'
export default {
  components: {
    PPFilterComponent,
    PPItemsComponent,
  },
  name: "PPMainComponent",

  data() {
    return {
      projects: [],
      projectsBedroom: [
        {
          image: "project/minimalBedroom01.svg",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          image: "project/minimalBedroom02.svg",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          image: "project/minimalBedroom03.svg",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          image: "project/minimalBedroom04.svg",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          image: "project/minimalBedroom05.svg",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          image: "project/minimalBedroom06.svg",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          image: "project/minimalBedroom07.svg",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          image: "project/minimalBedroom08.svg",
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
      ],
      projectsKitchen: [
        {
          image: "card1.svg",
          title: "Minimal Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          image: "card2.svg",
          title: "Minimal Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          image: "card3.svg",
          title: "Minimal Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          image: "card4.svg",
          title: "Minimal Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          image: "card5.svg",
          title: "Minimal Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          image: "card6.svg",
          title: "Minimal Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          image: "card1.svg",
          title: "Minimal Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          image: "card2.svg",
          title: "Minimal Kitchen",
          text: "Decor / Artchitecture",
        },
      ],
      projectsLiving: [
        {
          image: "project1.svg",
          title: "Minimal Living Room",
          text: "Decor / Artchitecture",
        },
        {
          image: "project2.svg",
          title: "Minimal Living Room",
          text: "Decor / Artchitecture",
        },
        {
          image: "project3.svg",
          title: "Minimal Living Room",
          text: "Decor / Artchitecture",
        },
        {
          image: "project4.svg",
          title: "Minimal Living Room",
          text: "Decor / Artchitecture",
        },
        {
          image: "project4.svg",
          title: "Minimal Living Room",
          text: "Decor / Artchitecture",
        },
        {
          image: "project3.svg",
          title: "Minimal Living Room",
          text: "Decor / Artchitecture",
        },
        {
          image: "project2.svg",
          title: "Minimal Living Room",
          text: "Decor / Artchitecture",
        },
        {
          image: "project1.svg",
          title: "Minimal Living Room",
          text: "Decor / Artchitecture",
        },
      ],
    };
  },

  created() {
    this.projects = this.projectsKitchen;
  },

  methods: {
    activeCategory(i) {
      switch (i+1) {
        case 1:
          this.projects = this.projectsBedroom;
          break;
        case 2:
          this.projects = this.projectsKitchen;
          break;
        case 3:
          this.projects = this.projectsLiving;
          break;
        case 4:
          this.projects = this.projectsLiving;
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$fontMain: "DM Serif Display";

.project {
  &__count {
    margin-top: 51px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;

    &-container {
      display: flex;
      gap: 20px;
    }

    &-number {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      outline: 1px #cda274 solid;
      width: 52px;
      height: 52px;
      border-radius: 52px;
      color: #292f36;
      font-family: "Jost";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;

      &:hover {
        background-color: #f4f0ec;
        outline: none;
        scale: 1.05;
      }
    }

    &-svg:hover {
      fill: #f4f0ec;

      & circle {
        stroke: none;
      }
    }
  }
}
</style>
