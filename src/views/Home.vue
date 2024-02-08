<template>
  <div>
    <the-main-visual></the-main-visual>
    <the-home></the-home>
  </div>
</template>

<script>
// @ is an alias to /src

import TheMainVisual from "../components/object/project/TheMainVisual";
import TheHome from "../components/pages/home/TheHome";

export default {
  name: "home",
  components: { TheHome, TheMainVisual }
};
</script>
