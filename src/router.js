import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import DiagnosisInput from "./views/DiagnosisInput.vue";
import DiagnosisResult from "./views/DiagnosisResult.vue";
import { ROUTER } from "./libs/constant-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: ROUTER.DIAGNOSTICS_INPUT_PATH,
      name: ROUTER.DIAGNOSTICS_INPUT_NAME,
      component: DiagnosisInput
    },
    {
      path: ROUTER.DIAGNOSTICS_RESULT_PATH,
      name: ROUTER.DIAGNOSTICS_RESULT_NAME,
      component: DiagnosisResult
    }
  ]
});

router.toHome = () => {
  router.push({ name: ROUTER.HOME_NAME });
};

router.toDiagnosisInput = () => {
  router.push({ name: ROUTER.DIAGNOSTICS_INPUT_NAME });
};

router.toDiagnosisResult = () => {
  router.push({ name: ROUTER.DIAGNOSTICS_RESULT_NAME });
};

export default router;
