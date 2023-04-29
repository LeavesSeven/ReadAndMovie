// app.js 小程序启动后执行的一系列周期函数
App({

  //8-1 验证小程序启动是否会执行onLoad函数
  onLoad(){
    console.log("小程序启动")
  },

  //8-1 小程序启动的生命周期函数： onLaunch
  onLaunch(){
    console.log("小程序初始化")
  },

  // 8-3 保存全局变量
  test:1,
  global:2,
  gBaseUrl:"http://t.talelin.com/v2/movie/"
})
