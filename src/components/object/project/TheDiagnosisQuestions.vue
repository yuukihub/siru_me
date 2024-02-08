<template>
  <div class="inner">
    <div class="p-diagnosisForm__questions">
      <the-question></the-question>
    </div>
  </div>
</template>

<script>
import TheQuestion from "./TheQuestion";
export default {
  name: "TheDiagnosisQuestions",
  components: { TheQuestion }
};
</script>

<style lang="scss" scoped>
.p-diagnosisForm__questions {
  background: rgba(255, 255, 255, 0.3);
  padding: 20px;
  margin-bottom: 40px;
}
</style>
