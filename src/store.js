import Vue from "vue";
import Vuex from "vuex";
import {
  MUTATION_RESET_ANSWER,
  MUTATION_SET_ANSWER,
  MUTATION_SET_CHOICE,
  MUTATION_SET_NAME
} from "./libs/mutation-types";

Vue.use(Vuex);

/***
 * state
 * @type {{}}
 */
const state = {
  answer: null,
  choices: {},
  name: null,
  answerCount: 0,
  getName: null
};

/***
 * mutations
 * @type {{}}
 */
const mutations = {
  [MUTATION_SET_ANSWER](state, answer) {
    state.answer = answer;
  },
  [MUTATION_RESET_ANSWER](state) {
    state.answer = null;
  },
  [MUTATION_SET_CHOICE](state, payload) {
    state.choices[payload.questionId] = payload.choice;
    state.answerCount = Object.keys(state.choices).length;
  },
  [MUTATION_SET_NAME](state, name) {
    state.name = name;
  }
};

/***
 * actions
 * @type {{}}
 */
const actions = {};

/***
 * getters
 * @type {{}}
 */
const getters = {
  getAnswer(state) {
    return state.answer;
  },
  getChoiceValue: state => choiceId => state.choices[choiceId],
  getChoiceSum: state => {
    let score = 0;
    for (let key in state.choices) {
      score += state.choices[key];
    }
    return score;
  },
  getName(state) {
    return state.name;
  },
  answerOK: state => () => {
    return state.answerCount >= 12;
  },
  getAnswerCount: state => () => {
    return state.answerCount;
  },
  getName: state => () => {
    return state.name;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
