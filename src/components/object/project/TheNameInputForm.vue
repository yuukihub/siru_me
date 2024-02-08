<template>
  <div class="c-nameInputForm">
    <the-input-text :placeholder="'お名前'" required></the-input-text>
    <base-button
      v-if="nameOk"
      :title="'診断する'"
      @click="toDiagnosisResult"
    ></base-button>
    <base-button
      v-if="!nameOk"
      :title="'診断する'"
      @click="toDiagnosisResult"
      class="is-disable"
    ></base-button>
  </div>
</template>

<script>
import TheInputText from "../component/form/TheInputText";
import BaseButton from "../component/button/BaseButton";
export default {
  name: "TheNameInputForm",
  components: {
    BaseButton,
    TheInputText
  },
  methods: {
    toDiagnosisResult() {
      this.$router.toDiagnosisResult();
    }
  },
  computed: {
    nameOk() {
      return !!this.$store.getters.getName();
    }
  }
};
</script>

<style lang="scss" scoped>
.c-nameInputForm {
  height: 65vh;
  @include mq(sp) {
    padding: 0 2%;
  }
  .c-formInput {
    margin-bottom: 20px;
  }
  .c-button {
    margin-top: 40px;
  }
  .p-validationMessage {
    p {
      color: white;
      max-width: 500px;
      width: 100%;
      margin: auto;
      &::before {
        content: "※";
        margin-right: 3px;
      }
    }
  }
}
</style>
