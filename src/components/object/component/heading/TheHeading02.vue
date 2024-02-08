<template>
  <h3 class="c-heading03">{{ title }}</h3>
</template>

<script>
export default {
  name: "TheHeading02",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.c-heading03 {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  padding: 0 0 50px;
}
</style>
