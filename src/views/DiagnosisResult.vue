<template>
  <section class="section--under">
    <the-heading01 :title="'Result'" :sub="'診断結果'"></the-heading01>
    <the-diagnosis-result></the-diagnosis-result>
  </section>
</template>

<script>
import TheHeading01 from "../components/object/component/heading/TheHeading01";
import TheDiagnosisResult from "../components/pages/diagnoisisResult/TheDiagnosisResult";
export default {
  name: "DiagnosisResult",
  components: { TheDiagnosisResult, TheHeading01 }
};
</script>

<style scoped></style>
