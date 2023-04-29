// pages/movies/movies.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:[], // 初始化空数组 // 正在热映
    comingSoon:[], // 即将上映
    top250:[], // Top250
    searchResult:false, // 条件渲染的控制变量
    searchData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({

      // url: 'http://t.talelin.com/v2/movie/in_theaters?start=0&count=3',

      // url: app.gBaseUrl + 'in_theaters?start=0&count=3',

      url: app.gBaseUrl + 'in_theaters',
      method:'GET',//不设置默认也为'GET'
      data:{
        start:1,
        count:3
      },
      success:(res)=>{
        // console.log(res)
        // console.log(res.data)
        // console.log(this)
        // res.data.subjects[0]

        this.setData({
          inTheaters:res.data.subjects
        })
      }
    })
    // console.log(res)

    wx.request({
      url: app.gBaseUrl + 'coming_soon',
      data:{
        start:1,
        count:3
      },
      success:(res)=>{
        // console.log(res.data)
        this.setData({
          comingSoon:res.data.subjects
        })
      }
    })

    wx.request({
      url: app.gBaseUrl + 'top250',
      data:{
        start:6,
        count:3
      },
      success:(res)=>{
        // console.log(res.data)
        this.setData({
          top250:res.data.subjects
        })
      }
    })
  },

  onGotoMore(event){
    // console.log(event)
    const type = event.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type=' + type,
    })
  },

  onConfirm(event){
    // console.log(event)
    this.setData({
      searchResult:true
    })
    wx.request({
      url: app.gBaseUrl + 'search',
      data:{
        q:event.detail.value
      },
      success:(res)=>{
        this.setData({
          searchData:res.data.subjects
        })
      }
    })
  },

  onSearchCancel(event){
    this.setData({
      searchResult:false
    }) 
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})