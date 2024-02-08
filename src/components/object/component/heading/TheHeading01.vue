<template>
  <div class="c-heading02">
    <h2>{{ title }}</h2>
    <p>{{ sub }}</p>
  </div>
</template>

<script>
export default {
  name: "TheHeading01",
  props: {
    title: {
      type: String,
      required: true
    },
    sub: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.c-heading02 {
  padding: 0 0 40px;
  text-align: center;
  h2 {
    color: map_get($color, main02);
    font-size: 3rem;
    font-weight: 500;
    @include mq(sp) {
      font-size: 2rem;
    }
  }
  p {
    font-size: 1.1rem;
    font-weight: 700;
    @include mq(sp) {
      font-size: 0.9rem;
    }
  }
}
</style>
