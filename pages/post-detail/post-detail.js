// pages/post-detail/post-detail.js

// 导入数据
import {
  local_database
} from '../../data/data.js'

// 8-3 getApp获取全局变量
const app = getApp()
// console.log(app)  // 打印验证
// console.log(app.test) //打印test

Page({

  /**
   * 页面的初始数据
   */
  data: { // 要做数据绑定的数据不用加下划线
    _pid: null, // 文章标识
    postData: {},
    collected: false, //收藏状态初始化：未收藏
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const postData = local_database[options.pid] //获取相应pid数据 
    this.data._pid = options.pid // 获取pid
    this.setData({ // 数据绑定到前端
      postData
    })

    const postsCollected = wx.getStorageSync('posts_collected')
    // 读取缓存里的收藏状态
    if (postsCollected) { // 如果缓存里有
      // const collected = postsCollected[this.data._pid]
      let collected = postsCollected[this.data._pid]
      console.log(collected) // 当前文章在缓存里的收藏状态
      if (collected === undefined) { // 从未收藏过，那就是false
        collected = false
      }
      // 改变收藏状态
      this.setData({
        collected
      })
    } else { //缓存里没有
      const postsCollected = {} //8-8 创建object对象
      postsCollected[this.data._pid] = false
      wx.setStorageSync('posts_collected', postsCollected)
    }
  },

  // 8-7 点击收藏按钮事件的回调函数
  onCollect(event) { //收藏或未收藏
    const postsCollected = wx.getStorageSync('posts_collected'); // 读缓存
    postsCollected[this.data._pid] = !this.data.collected //赋值
    wx.setStorageSync('posts_collected', postsCollected) // 写缓存
    // 改变收藏状态
    this.setData({
      collected: !this.data.collected
    })
    // 8-13 调用showToast
    wx.showToast({
      title: !this.data.collected ? '取消收藏' : '收藏成功',
      duration: 2000 // duration参数 停留时间
    })

  },

  async onCollect1(event) { //收藏或未收藏
    //8-15 调用showModal
    const result = await wx.showModal({
      title: '是否收藏文章',
    })
    if (result.confirm) {
      const postsCollected = wx.getStorageSync('posts_collected'); // 读缓存
      postsCollected[this.data._pid] = !this.data.collected //赋值
      wx.setStorageSync('posts_collected', postsCollected) // 写缓存

      // 改变收藏状态
      this.setData({
        collected: !this.data.collected
      })  
    }
  },

  // 8-17 
  async onShare(event) {
    const result = await wx.showActionSheet({
      itemList: ['分享到QQ', '分享到微信', '分享到朋友圈'],
    })
    // console.log(result)
  },

})