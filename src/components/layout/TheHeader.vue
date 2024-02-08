<template>
  <header class="l-header" :class="{'is-scroll':scrollChangeHeader()}">
    <h1>
      <a href="/" class="header__logo"><img src="../../../public/img/common/logo.png" alt="siru me" /></a>
      <a href="/" class="header__logo--scrolled" style="display:none;"><img src="../../../public/img/common/logo_red.png" alt="siru me" /></a>
    </h1>
  </header>
</template>

<script>
export default {
    name: "TheHeader",
    data() {
      return {
        scrollY: 0,
        scrollHeight: 0
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollChangeHeader);
      this.scrollHeight = document.querySelector('.c-heading02').clientHeight;
    },
    methods: {
      scrollChangeHeader() {
        this.scrollY = window.scrollY;
        if (this.scrollY > this.scrollHeight) {
          return true;
        }
      }
    }
};
</script>

<style lang="scss" scoped>
  .l-header {
    width: 100%;
    text-align: center;
    margin-top: auto;
    background: map_get($color, main01);
    padding: 17px 20px 20px 20px;
    text-align: center;
    margin-top: auto;
    .header__logo {
      &--scrolled {
        display: none;
      }
      img {
        max-width: 100px;
        width: 100%;
        display: block;
        margin: auto;
        @include hover01;
      }
    }
  &.is-scroll {
    position: fixed;
    width: 100%;
    background: rgba(255, 255, 255, 0.5);
    transition: 0.7s;
    padding: 7px 20px 10px 20px;
    .header__logo {
      display: none !important;
    }
    .header__logo--scrolled {
        display: block !important;
        img {
          max-width: 80px;
          width: 100%;
          @include hover01;
        }
      }
    }
  }

</style>
