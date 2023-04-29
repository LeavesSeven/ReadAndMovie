// componengts/post/index.js

import {local_database} from '../../data/data.js'


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // data:Object //不建议用data
    res:Object
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
    onTap(event){
      // console.log(event)
      // const pid = this.properties.res.postId // 错误代码
      const pid = this.properties.res.postId
      this.triggerEvent('posttap',{
        // pid:pid
        pid
      })
    }
  }
})
