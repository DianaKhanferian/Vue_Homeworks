<template>
  <section id="blog" class="blog center">
    <h2 class="blog__heading-title">Articles & News</h2>
    <div class="blog__cards">
      <div v-for="(card, index) in cards" :key="index" class="blog__card">
        <div class="blog__card-image">
          <img class="blog__card-img" :src="require('../../img/' + card.src)" alt="blog_img" />
          <div class="blog__card-tag">{{ card.tag }}</div>
        </div>
        <div class="blog__card-content">
          <h3 style="white-space: pre-wrap" class="blog__card-logo">
            {{ card.logo }}
          </h3>
          <p class="blog__card-date">{{ card.date }}</p>
          <div class="blog__card-btn">
            <img src="../../img/Vector.svg" alt="vector" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogItemsComponent",
  props: ["quantity"],
  data() {
    return {
      cards: [
        {
          src: "card1.svg",
          tag: "Kitchen Design",
          logo: "Larguments.lengthet’s Get Solution For Building Construction\nWork",
          date: "22 December, 2022",
        },
        {
          src: "card2.svg",
          tag: "Living Design",
          logo: "Low Cost Latest Invented Interior Designing\nIdeas.",
          date: "22 December, 2024",
        },
        {
          src: "card3.svg",
          tag: "Interior Design",
          logo: "Best For Any Office & Business Interior\nSolution",
          date: "03 July, 2024",
        },
        {
          src: "card4.svg",
          tag: "Kitchen Design",
          logo: "Let’s Get Solution For Building Construction\nWork",
          date: "22 October, 2022",
        },
        {
          src: "card5.svg",
          tag: "Living Design",
          logo: "Low Cost Latest Invented Interior Designing\nIdeas.",
          date: "22 April, 2024",
        },
        {
          src: "card6.svg",
          tag: "Interior Design",
          logo: "Best For Any Office & Business Interior\nSolution",
          date: "03 August, 2023",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
$fontMain: "DM Serif Display";
.blog {
  margin-top: 93px;

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;

    &-title {
      font-family: $fontMain;
      font-size: 50px;
      font-weight: 400;
      line-height: 63px;
      letter-spacing: 0.02em;
    }

    &-desc {
      font-family: "Jost";
      font-size: 22px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0.01em;
      color: #4d5053;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 50px;
  }
  &__card {
    border: 1px solid #e7e7e7;
    border-radius: 70px;
    transition: 0.5s all ease;
    text-align: center;
    cursor: pointer;

    &:hover {
      background-color: #f4f0ec;

      & .blog__card-btn {
        background-color: #ffffff;
      }
    }

    &-image {
      position: relative;
    }
    &-img {
      border-radius: 70px 70px 0px 0px;
      padding: 20px 10px 0px 10px;
      height: 290px;
      width: 340px;
    }

    &-tag {
      position: absolute;
      width: 124px;
      height: 41px;
      background-color: #fff;
      bottom: 15px;
      left: 40px;
      border-radius: 8px 8px 8px 0px;
      font-family: Jost;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.01em;
      color: #4d5053;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &-content {
      padding: 20px;
      position: relative;
    }

    &-logo {
      font-family: $fontMain;
      font-size: 25px;
      font-weight: 400;
      line-height: 31px;
      letter-spacing: 0.02em;
      text-align: left;
      max-width: 305px;
    }

    &-date {
      padding-top: 35px;
      padding-bottom: 20px;
      font-family: Jost;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.01em;
      text-align: left;
      color: #4d5053;
    }

    &-btn {
      position: absolute;
      bottom: 25px;
      right: 20px;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background-color: #f4f0ec;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s all ease;
    }
  }
}
</style>
