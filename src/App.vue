<template>
  <div id="app" class="wrap">
    <the-header v-if="$route.path !== '/'"></the-header>
    <transition name="router-transition">
      <router-view />
    </transition>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import TheFooter from "./components/layout/TheFooter";
export default {
    components: { TheHeader, TheFooter }
};
</script>

<style lang="scss"></style>
