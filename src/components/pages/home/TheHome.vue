<template>
  <div>
    <section>
      <div class="section inner">
        <the-heading01
          :title="'What is type?'"
          :sub="'あなたは何タイプ?'"
        ></the-heading01>
        <p class="desc">
          siru me(シルミー)は、あなたの性格をライトに診断できるツールです。<br
            class="is-pc"
          />
          診断時間は約3分!たった12問の質問に答えていただくだけで、あなたの個性や適性を<br
            class="is-pc"
          />
          分析し、簡潔な結果をお渡しします。まずは遊び感覚で、ぜひお試しください。<br
            class="is-pc"
          />
        </p>
      </div>
    </section>
    <section class="section bg02">
      <the-heading01
        :title="'With diagnosis result'"
        :sub="'どんな結果が得られるの?'"
      ></the-heading01>
      <div class="inner">
        <div class="result_images">
          <ul>
            <li>
              <img
                src="../../../../public/img/common/result_image_type05.png"
                alt="メインビジュアルイメージ"
              />
            </li>
            <li>
              <img
                src="../../../../public/img/common/result_image_type02.png"
                alt="メインビジュアルイメージ"
              />
            </li>
            <li>
              <img
                src="../../../../public/img/common/result_image_type01.png"
                alt="メインビジュアルイメージ"
              />
            </li>
            <li>
              <img
                src="../../../../public/img/common/result_image_type15.png"
                alt="メインビジュアルイメージ"
              />
            </li>
            <li>
              <img
                src="../../../../public/img/common/result_image_type06.png"
                alt="メインビジュアルイメージ"
              />
            </li>
          </ul>
        </div>
        <p class="u-text_center u-mt40 u-mb40">
          siru
          me(シルミー)では、あなたの性格を大きく5つのタイプに分類します。<br
            class="is-pc"
          />
          診断結果では、主にタイプごとの「基本性格」、「仕事面」、「恋愛面」の<br
            class="is-pc"
          />
          結果をお渡しすることが可能です。 どんなタイプになるかはお楽しみに♩
        </p>
      </div>
      <base-button @click="toDiagnosisInput" :title="'診断ページへ行く'">
      </base-button>
    </section>
  </div>
</template>

<script>
import BaseButton from "../../object/component/button/BaseButton";
import TheHeading01 from "../../object/component/heading/TheHeading01";
export default {
  name: "TheHome",
  components: { TheHeading01, BaseButton },
  methods: {
    toDiagnosisInput() {
      this.$router.toDiagnosisInput();
    }
  }
};
</script>

<style lang="scss" scopedbg02>
.desc {
  text-align: center;
  margin: 20px 0 0;
  line-height: 1.8rem;
}
.result_images {
  ul {
    display: flex;
    justify-content: center;
  }
  img {
    width: auto;
    height: 200px;
    margin: 0 10px;
    @include mq(sp) {
      width: 100%;
      margin: 0;
    }
  }
}
</style>
