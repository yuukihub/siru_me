<template>
  <footer class="l-footer">
    <small>© 2018 Yuki Matsumoto.</small>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style lang="scss" scoped>
.l-footer {
  width: 100%;
  text-align: center;
  margin-top: auto;
  background: map_get($color, main01);
  padding: 10px;
  text-align: center;
  margin-top: auto;
  small {
    color: white;
  }
}
</style>
