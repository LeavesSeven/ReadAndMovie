// pages/post64/post64.js


// 更简单的导入
import {local_database} from '../../data/data.js'
// console.log(local_database) // 验证是否导入成功


Page({

  /**
   * 页面的初始数据
   */
  data: {
    // res:{ // 10-9
    //   text:"123"
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    // 6-5列表渲染展示导入数据
    this.setData({
      // local_database:local_database// 同名可以简写(ES6语法)
      local_database
    })
  },
  

  // 监听用户点击函数
  onGoToDetail(event){ // 事件函数，加event

    // 7-9 定义pid变量
    // console.log(event)
    const pid = event.currentTarget.dataset.postId
    wx.navigateTo({    // navigateTo保存当前的页面，跳转到下一个页面
      // url:'/pages/post-detail/post-detail'

      // 7-9 页面间数据通信
      url:'/pages/post-detail/post-detail?pid=' + pid 
      /* 引号里是字符串，加号后面是字符串的值 */
    })

    // 事件对象
    // console.log(event)

    // // 7-9 打印postId
    // console.log(event.currentTarget.dataset.postId)
  }

})