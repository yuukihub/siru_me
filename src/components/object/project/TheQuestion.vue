<template>
  <div>
    <div v-for="(question, index) in questions" :key="question.id">
      <template v-if="inPage(index, page)">
        <the-question-panel
          :id="question.id"
          :title="question.title"
        ></the-question-panel>
      </template>
    </div>
    <div class="p-diagnosisForm__questions_button">
      <div v-if="page > 1">
        <base-button :title="'前へ戻る'" @click="toBack"></base-button>
      </div>
      <div v-if="lastPage >= page">
        <base-button
          :title="'次へ進む'"
          v-if="nextPageOk"
          @click="toNext"
        ></base-button>
        <base-button
          :title="'次へ進む'"
          v-if="!nextPageOk"
          class="is-disable"
        ></base-button>
      </div>
    </div>
  </div>
</template>

<script>
import TheQuestionPanel from "./TheQuestionPanel";
import BaseButton from "../component/button/BaseButton";
import { questions } from "../../../resources/questions";
import { MUTATION_SET_ANSWER } from "../../../libs/mutation-types";

export default {
  name: "TheQuestion",
  components: { BaseButton, TheQuestionPanel },
  data() {
    const perPage = 4;
    return {
      questions,
      page: 1,
      lastPage: questions.length / perPage,
      perPage
    };
  },
  computed: {
    answerOK() {
      return this.$store.getters.answerOK();
    },
    answerCount() {
      return this.$store.getters.getAnswerCount();
    },
    nextPageOk() {
      return this.$store.getters.getAnswerCount() >= this.page * this.perPage;
    }
  },
  methods: {
    inPage(index, page) {
      const step1 = index / this.perPage;
      const step02 = step1 + 1;
      const result = Math.floor(step02);
      return result === page;
    },
    toNext() {
      this.page++;
      if (this.page > this.lastPage) {
        this.$store.commit(MUTATION_SET_ANSWER, "こたえ");
      }
    },
    toBack() {
      this.page--;
    }
  }
};
</script>

<style lang="scss" scoped>
.p-diagnosisForm__questions_button {
  display: flex;
  justify-content: center;
  align-items: center;
  @include mq(sp) {
    display: block;
  }
  .c-button {
    margin-top: 40px;
    margin-bottom: 20px;
    &:first-child {
      margin-right: 20px;
      @include mq(sp) {
        margin-right: 5px;
      }
    }
    &:last-child {
      @include mq(sp) {
        margin-top: 0;
      }
    }
  }
}
</style>
