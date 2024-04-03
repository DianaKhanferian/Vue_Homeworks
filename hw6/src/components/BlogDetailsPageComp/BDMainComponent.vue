<template>
  <section class="blogDetails__main center">
    <div class="blog-details__container">
      <div class="blog-details">
        <div
          class="article"
          v-for="(article, index) in filterArticle"
          :key="index"
        >
          <h2 class="article__title">{{ article.title }}</h2>
          <img class="article__img" :src="require('../../img/' + article.img)" :alt="article.img" />
          <div class="article__info">
            <p class="article__info-date">26 December,2022</p>
            <p class="article__info-link">Interior / Home / Decore</p>
          </div>
          <div class="article__text">
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrary to popular belief.There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration in some form, by injecthumour, or
              randomised words which don't look even slightly believable
            </p>
            .
            <br />
            <p>
              Embarrassing hidden in the middle of text. All the Lorem Ipsum
              generators on the Internet tend to repeat predefined chunks as
              necessary.
            </p>
          </div>

          <div class="quote">
            <p class="quote__start">&#8221;</p>
            <p class="quote__text">
              The details are not the details. They make the design.
            </p>
          </div>
          <h2 class="article__title">Design sprints are great</h2>
          <p class="article__text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered.
          </p>
          <div class="article__list">
            <div class="article__list-item">
              <p class="article__list-item_number">1</p>
              <p class="article__list-item_text">
                Contrary to popular belief.There are many ariations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
            </div>
            <div class="article__list-item">
              <p class="article__list-item_number">2</p>
              <p class="article__list-item_text">
                Contrary to popular belief.There are many ariations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
            </div>
            <div class="article__list-item">
              <p class="article__list-item_number">3</p>
              <p class="article__list-item_text">
                Contrary to popular belief.There are many ariations of passages
                of Lorem Ipsum available, but the majority have suffered.
              </p>
            </div>
          </div>
          <img
            class="article__img"
            src="img/blogDetails/kitchen2.svg"
            alt="article 1_1"
          />
          <p class="article__text">
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered.
          </p>
        </div>
      </div>

      <div class="tags">
        <div class="tags__buttons-wrap">
          <h2 class="tags__title">Tags</h2>
          <div class="tags__buttons">
            <button
              v-for="(btn, index) in buttonList" :key="index" 
              @click="filterClick(btn)"
              class="tags__buttons-item" 
            >
              {{ btn }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BDMainComponent",
  data() {
    return {
      renderItem: "",
      contentArticles: [
        {
          title: "Let’s Get Solution for Building Construction Work",
          img: "blogDetails/kitchen-img.svg",
          tag: "Kitchen",
        },
        {
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          img: "PromoBG.svg",
          tag: "Bedroom",
        },
        {
          title: "Best For Any Office & Business Interior Solution",
          img: "latestPost.svg",
          tag: "Building",
        },
        {
          title: "Let’s Get Solution for Building Construction Work",
          img: "blogDetails/kitchen-img.svg",
          tag: "Architecture",
        },
        {
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          img: "PromoBG.svg",
          tag: "Kitchen Planning",
        },
      ],
      buttonList: [
        "Kitchen",
        "Bedroom",
        "Building",
        "Architecture",
        "Kitchen Planning",
        "Bedroom",
      ],
    };
  },

  methods: {
    filterClick(item) {
      this.renderItem = item;
    },
  },
  computed: {
    filterArticle() {
      return this.renderItem
        ? this.contentArticles.filter((el) => el.tag.includes(this.renderItem))
        : this.contentArticles;
    },
  },
};
</script>

<style lang="scss" scoped>
$fontMain: "DM Serif Display";
.blog-details__container {
  margin-top: 200px;
  display: flex;
  gap: 52px;
}

.blog-details {
  width: 800px;
}

.article {
  margin-bottom: 96px;
  &__title {
    color: #292f36;
    font-family: $fontMain;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
  &__img {
    margin-top: 21px;
    margin-bottom: 35px;
    border-radius: 50px;
  }
  &__info {
    margin-top: 11px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 46px;
    color: #4d5053;
    font-size: 16px;
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;

    &-link {
      cursor: pointer;
    }
  }
  &__text {
    color: #4d5053;
    font-size: 22px;
    font-family: "Jost";
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
  &__list {
    margin-top: 24px;
    margin-bottom: 23px;
    display: flex;
    width: 732.389px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    list-style-position: 10px 0;
    &-item {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      &_number {
        color: #cda274;
        font-family: $fontMain;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.4px;
      }

      &_text {
        color: #4d5053;
        font-family: "Jost";
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
      }
    }
  }
}

.tags {
  &__buttons-wrap {
    width: 345px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  &__title {
    color: #292f36;
    font-family: $fontMain;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
  }
  &__buttons {
    display: flex;
    flex-wrap: wrap;

    gap: 10px;
    &-item {
      padding-left: 30px;
      padding-right: 30px;
      cursor: pointer;
      background: #f4f0ec;
      padding-top: 9px;
      padding-bottom: 9px;
      border-radius: 10px;
      border: none;
      color: #292f36;
      text-align: center;
      font-family: "Jost";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.36px;
      transition: all 0.3s ease;
    }

    &-item:hover {
      background: #000000;
      color: #fff;
    }
  }
}

.quote {
  margin-bottom: 27px;
  margin-top: 35px;
  height: 267px;
  background: #f4f0ec;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &__start {
    width: 106px;
    height: 133px;
    flex-shrink: 0;
    color: #cda274;
    font-family: $fontMain;
    font-size: 200px;
    font-style: italic;
    font-weight: 400;
    line-height: 250px;
    letter-spacing: 0.02em;
    text-align: center;
  }
  &__text {
    margin-top: -30px;
    width: 375px;
    height: 70px;
    color: #cda274;
    font-family: $fontMain;
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: center;
  }
}
</style>
