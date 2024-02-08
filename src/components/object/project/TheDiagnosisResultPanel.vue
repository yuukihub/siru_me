<template>
  <aside class="p-resultPanel__detail">
    <h4>{{ title }}</h4>
    <p>
      {{ text }}
    </p>
  </aside>
</template>

<script>
export default {
  name: "TheDiagnosisResultPanel",
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.p-resultPanel {
  &__detail {
    margin: 20px 0;
    background: white;
    padding: 20px;
    h4 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
}
</style>
