<template>
  <div class="p-pettern fadeInSlide"></div>
</template>

<script>
export default {
  name: "ThePattern"
};
</script>

<style lang="scss" scoped>
.p-pettern {
  position: absolute;
  top: -100px;
  left: -500px;
  z-index: 0;
  max-width: 1750px;
  width: 100%;
  height: 920px;
  background: url(../../../../public/img/common/pattern.png) no-repeat;
  background-size: 100%;
  transform: translate(-200px, 0px);
  opacity: 0.4;
  @include mq(sp) {
    top: -5px;
    left: -20px;
    width: 150%;
  }
}
</style>
