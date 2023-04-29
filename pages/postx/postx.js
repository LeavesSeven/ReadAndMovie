
import {local_database} from '../../data/data'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCheck:false,
    contentdata:[
      {
        title:'推荐',
        labei:'猜你喜欢'
      },
      {
        title:'好景点',
        labei:'周末放空'
      },
      {
        title:'人文',
        labei:'文化之旅'
      },
      {
        title:'海岛',
        labei:'阳光与沙滩'
      },
      {
        title:'自由行',
        labei:'超值精选'
      },
      {
        title:'情侣',
        labei:'别样的浪漫'
      },
      {
        title:'网红',
        labei:'最火打卡地'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    this.setData({
      local_database,
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
    // console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 监听用户点击函数
  onGoToDetail(event){ 
    const pid = event.currentTarget.dataset.postId | event.detail.pid
    wx.navigateTo({    
      url:'/pages/post-detail/post-detail?pid=' + pid 
    })
  },

  selection(){
    this.setData({
      isCheck:true
    })
    console.log(111)
  }


})