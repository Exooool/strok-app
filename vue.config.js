const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
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
