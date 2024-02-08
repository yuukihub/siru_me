<template>
  <div>
    <div v-if="answered">
      <the-heading02 :title="'お名前を入力してください'"></the-heading02>
      <the-name-input-form></the-name-input-form>
    </div>
    <div v-else>
      <the-heading02
        :title="'もっとも当てはまるものにチェックしてください'"
      ></the-heading02>
      <the-diagnosis-questions></the-diagnosis-questions>
    </div>
  </div>
</template>

<script>
import TheDiagnosisQuestions from "../../object/project/TheDiagnosisQuestions";
import TheNameInputForm from "../../object/project/TheNameInputForm";
import TheHeading02 from "../../object/component/heading/TheHeading02";
export default {
  name: "TheDiagnosisInput",
  components: {
    TheHeading02,
    TheNameInputForm,
    TheDiagnosisQuestions
  },
  data() {
    return {
      // uni: 0
    };
  },
  computed: {
    answered() {
      return this.$store.getters.getAnswer;
    }
  }
};
</script>

<style scoped></style>
