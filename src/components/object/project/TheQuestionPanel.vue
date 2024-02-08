<template>
  <div class="p-questionPanel">
    <div class="p-questionPanel__content">
      <div class="p-questionPanel__title">
        <h4>質問{{ id }}</h4>
        <p>
          {{ title }}
        </p>
      </div>
      <the-radio-button :question-id="id"></the-radio-button>
    </div>
  </div>
</template>

<script>
import TheRadioButton from "../component/form/TheRadioButton";
export default {
  name: "TheQuestionPanel",
  components: { TheRadioButton },
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.p-questionPanel {
  padding: 20px;
  background: white;
  margin-bottom: 20px;
  &__title {
    text-align: left;
    max-width: 410px;
    margin: auto;
  }
  &__content {
    max-width: 540px;
    margin: auto;

    h4 {
      margin-bottom: 10px;
      font-weight: bold;
    }

    p {
      line-height: 1.5rem;
      margin: 20px 0px;
    }
  }
}
</style>
