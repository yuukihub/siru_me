<template>
  <the-lower-page-templete>
    <the-diagnosis-result-panel></the-diagnosis-result-panel>
  </the-lower-page-templete>
</template>

<script>
import TheLowerPageTemplete from "../other/TheLowerPageTemplete";
import TheDiagnosisResultPanel from "../../object/project/TheDiagnosisResultContent";
export default {
  name: "TheDiagnosisResult",
  components: { TheDiagnosisResultPanel, TheLowerPageTemplete }
};
</script>

<style scoped></style>
