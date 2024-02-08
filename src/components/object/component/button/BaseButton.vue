<template>
  <div @click="onClick" class="c-button">
    <a href="javascript:void(0)">{{ title }}</a>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.c-button {
  width: 300px;
  margin: auto;
  background: map_get($color, main02);
  text-align: center;
  @include mq(sp) {
    width: 250px;
  }
  &.is-disable {
    opacity: 0.7;
    pointer-events: none;
  }
  a {
    top: -5px;
    left: -5px;
    transition: top 0.1s ease-out, left 0.1s ease-out;
    display: block;
    position: relative;
    padding: 12px 0;
    font-size: 1.4rem;
    font-weight: 700;
    color: #333;
    background: #fff;
    border: 1px solid #333;
    @include hoverButton;
  }
}
</style>
