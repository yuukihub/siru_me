<template>
  <div class="p-custom-radio">
    <fieldset>
      <template v-for="choice in choices">
        <input
          :key="choice.id"
          :id="uniqId + '-' + choice.id"
          type="radio"
          :name="uniqId"
          :value="choice.value"
          v-model="choiceValue"
        />
        <label :for="uniqId + '-' + choice.id">
          {{ choice.name }}
        </label>
      </template>
    </fieldset>
  </div>
</template>

<script>
import uuid from "uuid";
import { choices } from "../../../../resources/questions";
import { MUTATION_SET_CHOICE } from "../../../../libs/mutation-types";

export default {
  name: "TheRadioButton",
  data() {
    return {
      uniqId: uuid.v4(),
      radioArea: true,
      choices: choices
    };
  },
  props: {
    questionId: {
      type: Number,
      required: true
    }
  },
  computed: {
    choiceValue: {
      get() {
        return this.$store.getters.getChoiceValue(this.questionId);
      },
      set(value) {
        this.$store.commit(MUTATION_SET_CHOICE, {
          questionId: this.questionId,
          choice: value
          // choiceSum: Object.keys(this.$store.state.choices).length
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
fieldset {
  margin-top: 10px;
  text-align: center;
  height: 40px;
  @include mq(sp) {
    display: contents;
  }
}
.p-custom-radio {
  input {
    clip: rect(1px, 1px, 1px, 1px);
    position: absolute !important;
    &:checked + label {
      background: map_get($color, main02);
      border: 1px solid map_get($color, main02);
      color: #fff;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
    }
    &:focus + label {
      outline-color: #4d90fe;
      outline-offset: -2px;
      outline-style: auto;
      outline-width: 5px;
    }
  }
  label {
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-right: 18px;
    border-radius: 3px;
    transition: all 0.2s;
    color: #ccc;
    border: 1px solid #fff;
    cursor: pointer;
    @include mq(sp) {
      width: 100%;
    }
    &:hover{
      background: map_get($color, main02);
      border: 1px solid map_get($color, main02);
      color: #fff;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.7);
      transition: 0.4s;
    }
  }
}
</style>
