module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/foundation/_include.scss";`
      }
    }
  },
  productionSourceMap: false,
  pwa: {
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true
    }
  }
};
