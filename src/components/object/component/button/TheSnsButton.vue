<template>
  <div class="c-snsButton__container">
    <div class="u-mr20">
      <div class="c-snsButton">
        <a @click="onClick" href="javascript:void(0)">
          <img
            :src="src"
            :alt="alt"
          />
        </a>
      </div>
      <p>Share</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSnsButton",
  data() {
    return {
      url: null,
      href: null,
      title: null
    };
  },
  props: {
    src: {
      type: String,
      required: false,
      default: () => ""
    },
    alt: {
      type: String,
      required: false,
      default: () => ""
    },
  },
  mounted() {
    this.url = location.host;
    this.title = document.title;
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.c-snsButton {
  &:hover {
    transition: 0.5s;
    transform: translateY(-5px);
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @include mq(sp) {
      top: -60px;
    }

    &.--facebook .c-snsButton {
      width: 16px;
      height: 36px;
      margin: auto;

      @include mq(sp) {
        width: 12px;
        height: 21px;
      }
    }
    &.--twitter .c-snsButton {
      width: 34px;
      height: auto;

      @include mq(sp) {
        width: 21px;
      }
    }
  }
  a {
    display: block;
  }
  img {
    width: 100%;
  }
}
p {
  color: white;
  font-size: 0.9rem;
  margin-top: 10px;
  @include mq(sp) {
    font-size: 0.7rem;
  }
}
</style>
