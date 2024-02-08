<template>
  <div class="c-formInput">
    <input type="text" :placeholder="placeholder" v-model.trim="name" />
  </div>
</template>

<script>
import { MUTATION_SET_NAME } from "../../../../libs/mutation-types";

export default {
  name: "TheInputText",
  props: {
    placeholder: {
      type: String,
      required: true
    }
  },
  computed: {
    name: {
      get() {
        return this.$store.getters.getName();
      },
      set(name) {
        this.$store.commit(MUTATION_SET_NAME, name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.c-formInput {
  position: relative;
  left: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
  height: 60px;
  margin-bottom: 40px;
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 1.3rem;
    font-weight: 300;
    color: inherit;
    border: none;
    border-bottom: 2px solid white;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 0;
    -webkit-transition: border-color 0.3s ease;
    transition: border-color 0.3s ease;
    color: white;
  }
}
</style>
