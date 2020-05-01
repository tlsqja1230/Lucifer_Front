module.exports = {
  devServer: {
    proxy: { // proxyTable 설정
        '/test': {
            target: 'http://ec2-13-125-167-219.ap-northeast-2.compute.amazonaws.com:8080',
            changeOrigin: true
        }
    },
    port: 8080
  },
  "transpileDependencies": [
    "vuetify"
  ]
}