// componengts/movie-list/index.js
Component({
  
  //11-6 定义在正确位置（外部样式类）
  externalClasses:['r-class'],

  /**
   * 组件的属性列表
   */
  properties: {
    // 现在我们就拥有了一个外部样式类，名字叫r-class
    // externalClasses:['r-class'] // 错误位置定义

    // 11-7
    title:String, 
    movies:Array, 
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
