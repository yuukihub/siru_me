<template>
  <article>
    <the-type-result :score="score"></the-type-result>
  </article>
</template>

<script>
import { MUTATION_RESET_ANSWER } from "../../../libs/mutation-types";
import TheTypeResult from "./TheTypeResult";
export default {
  name: "TheDiagnosisResultContent",
  components: { TheTypeResult },
  data() {
    return {
      score: this.$store.getters.getChoiceSum
    };
  },
  created() {
    //質問をリセットする
    this.$store.commit(MUTATION_RESET_ANSWER);
  }
};
</script>

<style lang="scss" scoped></style>
