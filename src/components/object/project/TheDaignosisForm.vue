<template>
  <the-lower-page-templete>
    <the-diagnosis-input></the-diagnosis-input>
  </the-lower-page-templete>
</template>

<script>
import TheHeading02 from "../component/heading/TheHeading02";
import TheLowerPageTemplete from "../../pages/other/TheLowerPageTemplete";
import TheDiagnosisInput from "../../pages/diagnosisInput/TheDiagnosisInput";
export default {
  name: "TheDaignosisForm",
  components: {
    TheDiagnosisInput,
    TheLowerPageTemplete,
    TheHeading02
  }
};
</script>

<style lang="scss" scoped></style>
