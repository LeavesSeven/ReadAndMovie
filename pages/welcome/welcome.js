// welcome.js
Page({
  data:{

  },

  // 5-17js文件定义函数的方法
  onTap:function(params){// 跳转页面
    // console.log(123)

    // 6-1 跳转页面
    // wx.navigateTo({ //保存当前页面
    wx.redirectTo({ //关闭当前页面
    // url: '/pages/posts/posts', //绝对路径(一般情况下使用)
      url: '../posts/posts', //相对路径（不够直观）
    })
  },

  // 6-3 
  onViewTap:function(params){(
    // console.log("on tap View"),
    // 跳转页面
    // wx.redirectTo({ 
    wx.switchTab({  //10-4 跳转到有选项卡的页面
        url: '../post64/post64',
      })
  )},
  onTextTap:function(params){(
    // console.log("on tap Text"),
    wx.switchTab({  
      url: '../post64/post64',
    })
  )},

    /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    //6-1 验证redirectTo关闭当前页面
    // console.log("这是Welcome，Unload")
  },

    /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //6-1 验证welcome页面是否被加载
    // console.log("这是Welcome，Onload")
  }
})
