<template>
  <section class="section--under">
    <the-heading01
      :title="'Let`s Diagnostics!'"
      :sub="'さぁ、診断しましょう!'"
    />
    <the-daignosis-form></the-daignosis-form>
  </section>
</template>

<script>
import TheHeading01 from "../components/object/component/heading/TheHeading01";
import TheDaignosisForm from "../components/object/project/TheDaignosisForm";
export default {
  name: "DiagnosisInput",
  components: { TheDaignosisForm, TheHeading01 }
};
</script>

<style lang="scss" scoped></style>
