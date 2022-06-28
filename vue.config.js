const { defineConfig } = require("@vue/cli-service");

const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // element-plus 按需导入
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  publicPath: "/",
  devServer: {
    //open: true,
    //host:'localhost',
    //port: 8080,
    //https: false,
    proxy: {
      "/peng": {
        // target:'http://localhost:5000',
        target: "http://116.205.246.213:8000/peng",
        // target: 'http://192.168.3.13:8000',
        // target: 'http://218.18.109.229:8080/peng',
        changOrigin: true,
        pathRewrite: {
          "^/peng": "",
        },
      },
    },
  },
});
