<template>
  <div class="p-diagnosisResult__content">
    <h3>
      {{ name }}さんは<span>「{{ result.name }}」</span>です
    </h3>
    <div class="inner">
      <div class="p-resultPanel">
        <div class="p-resultPanel__image">
          <img :src="'/img/common/' + result.image" :alt="result.name" />
          <div class="snsShare__area">
            <the-sns-button class="--facebook"
                            :src="'/img/common/facebook.svg'"
                            :alt="'facebook'"
                            @click="toFacebookShare"></the-sns-button>
            <the-sns-button class="--twitter"
                            :src="'/img/common/twitter.svg'"
                            :alt="'twitter'"
                            @click="toTwitterShare"></the-sns-button>
          </div>
        </div>
        <div class="p-resultPanel__desc"></div>
        <div class="p-resultPanel__asides">
          <the-diagnosis-result-panel
            :title="'基本性格'"
            :text="result.detailInformation.base"
          ></the-diagnosis-result-panel>
          <the-diagnosis-result-panel
            :title="'仕事面'"
            :text="result.detailInformation.work"
          ></the-diagnosis-result-panel>
          <the-diagnosis-result-panel
            :title="'恋愛面'"
            :text="result.detailInformation.love"
          ></the-diagnosis-result-panel>
        </div>
        <base-button :title="'TOPへ戻る'" @click="toHome"></base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../component/button/BaseButton";
import TheDiagnosisResultPanel from "./TheDiagnosisResultPanel";
import TheSnsButton from "../component/button/TheSnsButton";
import { getResult, scoreToTypeId } from "../../../resources/results";
export default {
  name: "TheTypeResult",
  components: { TheSnsButton, TheDiagnosisResultPanel, BaseButton },
  props: {
    score: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      name: this.$store.getters.getName(),
      result: getResult(scoreToTypeId(this.score))
    };
  },
  methods: {
    toHome() {
      this.$router.toHome();
    },
    toFacebookShare() {
      this.href =
        "http://www.facebook.com/sharer.php?u=" +
        this.url +
        "&t=" +
        this.resultMessage +
        this.title +
        this.url;
      window.open(
        this.href,
        "social_window",
        "width=600,height=600,resizable=yes,scrollbars=yes,toolbar=yes"
      );
      return false;
    },
    toTwitterShare() {
      this.href =
        "http://twitter.com/share?url=" +
        this.url +
        "&text=" +
        this.resultMessage +
        this.title +
        this.url;
      window.open(
        this.href,
        "social_window",
        "width=600,height=600,resizable=yes,scrollbars=yes,toolbar=yes"
      );
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
.p-diagnosisResult__content {
  h3 {
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    line-height: 2.3rem;
  }

  span {
    font-size: 1.5rem;
    margin: 0 10px;
    display: block;
    @include mq(sp) {
      font-size: 1.2rem;
    }
  }

  .c-button {
    margin: auto;
  }
}
.p-resultPanel {
  &__image {
    text-align: center;
    margin: 40px 0;
    display: flex;
    justify-content: center;
    align-items: end;
    position: relative;
  }
  &__desc {
    color: white;
    text-align: center;
  }
  &__asides {
    margin: 40px 0;
    padding: 1px 20px;
    background: rgba(255, 255, 255, 0.5);
  }
}
  .snsShare__area {
    display: flex;
    position: absolute;
    right: 0;
  }
</style>
