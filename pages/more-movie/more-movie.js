// pages/more-movie/more-movie.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    _type:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const type = options.type
    // this._type = type // 保存type
    this.data._type = type //上一行有错误
    wx.request({
      // url: app.gBaseUrl + 'in_theaters',
      url: app.gBaseUrl + type,
      data:{
        start:0,
        count:12
      },
      success:(res)=>{
        // console.log(res.data)
        this.setData({
          movies:res.data.subjects
        })
      }
    })  

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    let title = '电影'
    switch(this.data._type){
      case 'in_theaters':
      title = '正在热映'
        break
      case 'coming_soon':
      title = '即将上映'
        break
      case 'top250':
      title = '豆瓣Top250'
        break
    }
    wx.setNavigationBarTitle({
      title: title, // switch选择后的标题
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    wx.request({
      // url: app.gBaseUrl + this._type,
      url: app.gBaseUrl + this.data._type,
      data:{
        start:0,
        count:12
      },
      success:(res)=>{
        this.setData({
          movies:res.data.subjects
        })
        // 取消页面刷新动画
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    wx.showNavigationBarLoading()
    wx.request({
      // url: app.gBaseUrl + type,
      url: app.gBaseUrl + this.data._type,
      data:{
        // satrt:0,
        // start:12,
        start:this.data.movies.length,
        count:12
      },
      success:(res)=>{
        this.setData({
          // movies:res.data.subjects
          movies:this.data.movies.concat(res.data.subjects)
        })
        wx.hideNavigationBarLoading()
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})