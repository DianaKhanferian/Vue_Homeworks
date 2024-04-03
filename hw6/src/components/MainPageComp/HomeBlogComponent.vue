<template>
    <section id="Blog" class="blog center">
      <div class="blog__heading">
        <h2 class="blog__heading-title">Articles & News</h2>
        <p class="blog__heading-desc">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using.
        </p>
      </div>
      <div class="blog__cards">
        <div class="blog__card">
          <div class="blog__card-image">
            <img class="blog__card-img" src="../../img/card1.svg" alt="blog_img" />
            <div class="blog__card-tag">Kitchen Design</div>
          </div>
          <div class="blog__card-content">
            <h3 class="blog__card-logo">
              Let’s Get Solution For Building Construction Work
            </h3>
            <p class="blog__card-date">26 December, 2022</p>
            <div class="blog__card-btn">
              <img src="../../img/Vector.svg" alt="vector" />
            </div>
          </div>
        </div>
        <div class="blog__card">
          <div class="blog__card-image">
            <img class="blog__card-img" src="../../img/card2.svg" alt="blog_img" />
            <div class="blog__card-tag">Living Design</div>
          </div>
          <div class="blog__card-content">
            <h3 class="blog__card-logo">
              Low Cost Latest Invented Interior Designing<br />Ideas.
            </h3>
            <p class="blog__card-date">26 December, 2022</p>
            <div class="blog__card-btn">
              <img src="../../img/Vector.svg" alt="vector" />
            </div>
          </div>
        </div>
        <div class="blog__card">
          <div class="blog__card-image">
            <img class="blog__card-img" src="../../img/card3.svg" alt="blog_img" />
            <div class="blog__card-tag">Interior Design</div>
          </div>
          <div class="blog__card-content">
            <h3 class="blog__card-logo">
              Best For Any Office & Business Interior<br />Solution
            </h3>
            <p class="blog__card-date">26 December, 2022</p>
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
 name: 'HomeBlogComponent',

}
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