<template>
  <section class="p-mainVisual">
    <the-pattern></the-pattern>
    <h1 class="p-mainVisual__logo">
      <img src="../../../../public/img/common/logo.png" alt="siru me" />
      <p>3分で自分がわかる!<br class="is-sp" />性格診断ソリューション</p>
    </h1>
    <div class="p-mainVisual__image_area">
      <div class="p-mainVisual__image_area--top">
        <template v-for="index in firstImagesArray.length">
          <img :class="'left-0'+index" :src="'/img/common/result_image_type0'+index+'.png'" alt="メインビジュアルイメージ" />
        </template>
      </div>
      <div class="p-mainVisual__image_area--middle">
        <template v-for="index in secondImagesArray.length">
          {{index++}}
        </template>
      </div>
      <div class="p-mainVisual__image_area--bottom">
        <img
          src="../../../../public/img/common/result_image_type15.png"
          class="left-15"
          alt="メインビジュアルイメージ"
        />
        <img
          src="../../../../public/img/common/result_image_type16.png"
          class="left-16"
          alt="メインビジュアルイメージ"
        />
        <img
          src="../../../../public/img/common/result_image_type17.png"
          class="left-17"
          alt="メインビジュアルイメージ"
        />
        <img
          src="../../../../public/img/common/result_image_type18.png"
          class="left-18"
          alt="メインビジュアルイメージ"
        />
        <img
          src="../../../../public/img/common/result_image_type19.png"
          class="left-19"
          alt="メインビジュアルイメージ"
        />
        <img
          src="../../../../public/img/common/result_image_type20.png"
          class="left-20"
          alt="メインビジュアルイメージ"
        />
        <img
          src="../../../../public/img/common/result_image_type21.png"
          class="left-21"
          alt="メインビジュアルイメージ"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ThePattern from "./ThePattern";
export default {
  name: "TheMainVisual",
    components: { ThePattern },
    data() {
      return {
        firstImagesArray: [1, 2, 3, 4, 5, 6, 7],
        secondImagesArray: [8, 9, 10, 11, 12, 13, 14],
      }
    },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/foundation/include";
.p-mainVisual {
  background: map_get($color, main01);
  height: 80vh;
  position: relative;
  overflow: hidden;
  &__logo {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 190px;
    padding: 0;
    color: #fff;
    line-height: 1.2;
    letter-spacing: 0.2rem;
    @include mq() {
      line-height: 1.5rem;
    }
    @include mq(sp) {
      font-size: 1.8rem;
      line-height: 2.8rem;
      top: -210px;
    }
    @include mq(xsmall) {
      top: -120px;
    }
    img {
      max-width: 330px;
      width: 100%;
      @include mq(sp) {
        max-width: 290px;
      }
      @include mq(xsmall) {
        max-width: 250px;
      }
    }
    p {
      font-size: 1rem;
      font-weight: bold;
      @include mq(sp) {
        font-size: 0.9rem;
        line-height: 1.5rem;
        margin-top: -20px;
      }
    }
  }
  &__image_area {
    width: 100%;
    @include mq(sp) {
      position: absolute;
      bottom: 70px;
      right: 60px;
    }
    @include mq(xsmall) {
      bottom: 110px;
      right: 130px;
    }
    &--top,
    &--middle,
    &--bottom {
      position: absolute;
      right: 0;
    }
    &--top {
      bottom: 20px;
      right: -217px;
      @include mq(sp) {
        bottom: -39px;
        right: -212px;
      }
      @include mq(xsmall) {
        bottom: -79px;
        right: -171px;
      }
    }
    &--middle {
      bottom: -70px;
      right: -163px;
      @include mq(xsmall) {
        bottom: -130px;
        right: -143px;
      }
    }
    &--bottom {
      bottom: -160px;
      right: -120px;
    }
    .left {
      &-01 {
        left: 0;
        bottom: -50px;
      }
    }
    img {
      height: 300px;
      @include mq(sp) {
        height: 220px;
      }
      @include mq(xsmall) {
        height: 150px;
      }
    }
  }
}
</style>
