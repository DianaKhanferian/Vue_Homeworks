<template>
    <section id="Projects" class="projects">
      <div class="projects__heading">
        <h2 class="projects__heading-title">Follow Our Projects</h2>
        <p class="projects__heading-desc">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div class="projects__cards">
        <div class="projects__card">
          <div class="projects__card-img">
            <img src="../../img/project1.svg" alt="projects_img" />
          </div>
          <div class="projects__card-content">
            <div class="projects__card-content_text">
              <h3 class="projects__card-content_title">Modern Kitchen</h3>
              <p class="projects__card-content_desc">Decor / Artchitecture.</p>
            </div>
            <div class="projects__card-content_btn">
              <img src="../../img/Vector.svg" alt="vector" />
            </div>
          </div>
        </div>
        <div class="projects__card">
          <div class="projects__card-img">
            <img src="../../img/project2.svg" alt="projects_img" />
          </div>
          <div class="projects__card-content">
            <div class="projects__card-content_text">
              <h3 class="projects__card-content_title">Modern Kitchen</h3>
              <p class="projects__card-content_desc">Decor / Artchitecture.</p>
            </div>
            <div class="projects__card-content_btn">
              <img src="../../img/Vector.svg" alt="vector" />
            </div>
          </div>
        </div>
        <div class="projects__card">
          <div class="projects__card-img">
            <img src="../../img/project3.svg" alt="projects_img" />
          </div>
          <div class="projects__card-content">
            <div class="projects__card-content_text">
              <h3 class="projects__card-content_title">Modern Kitchen</h3>
              <p class="projects__card-content_desc">Decor / Artchitecture.</p>
            </div>
            <div class="projects__card-content_btn">
              <img src="../../img/Vector.svg" alt="vector" />
            </div>
          </div>
        </div>
        <div class="projects__card">
          <div class="projects__card-img">
            <img src="../../img/project4.svg" alt="projects_img" />
          </div>
          <div class="projects__card-content">
            <div class="projects__card-content_text">
              <h3 class="projects__card-content_title">Modern Kitchen</h3>
              <p class="projects__card-content_desc">Decor / Artchitecture.</p>
            </div>
            <div class="projects__card-content_btn">
              <img src="../../img/Vector.svg" alt="vector" />
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
 name: 'ProjectsComponent',

}
</script>

<style lang="scss" scoped>
$fontMain: "DM Serif Display";
.projects {
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  margin-top: 93px;
  text-align: center;

  &__heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &-title {
      font-family: $fontMain;
      font-size: 50px;
      font-weight: 400;
      line-height: 63px;
      letter-spacing: 0.02em;
      text-align: center;
    }
    &-desc {
      font-family: "Jost";
      font-size: 22px;
      font-weight: 400;
      line-height: 33px;
      letter-spacing: 0.01em;
      text-align: center;
      width: 737px;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 46px;
    margin-top: 50px;
  }

  &__card {
    &:first-child .projects__card-img img {
      border-radius: 0px 70px 0px 0px;
    }
    &:nth-child(2) .projects__card-img img {
      border-radius: 70px 0px 0px 0px;
    }
    &:nth-child(3) .projects__card-img img {
      border-radius: 0px 0px 70px 0px;
    }
    &:last-child .projects__card-img img {
      border-radius: 0px 0px 0px 70px;
    }

    &:first-child,
    &:nth-child(3) {
      margin-right: 21px;
    }

    &:nth-child(2),
    &:last-child {
      margin-left: 21px;
    }

    &-content {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;

      &_title {
        padding-top: 3px;
        font-family: $fontMain;
        font-size: 25px;
        font-weight: 400;
        line-height: 31px;
        letter-spacing: 0.02em;
        text-align: left;
      }

      &_desc {
        color: #4d5053;
        font-family: Jost;
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        letter-spacing: 0.01em;
      }

      &_btn {
        background-color: #f4f0ec;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>