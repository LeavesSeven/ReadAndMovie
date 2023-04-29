

@[TOC](微信小程序入门与实战（七月）)

# 第1章 初识微信小程序
# 第2章 小程序的基本目录结构与文件作用剖析
`一切都是组件`
>一个页面最基本：四个文件
ctrl + f：快速查找
util文件夹：自定义逻辑函数文件夹
## 2-1 小程序页面的4种基本文件类型详解
`类比web页面`
>wxml:骨架--英雄.
wxss:样式--皮肤
 .js:逻辑--技能
.json:配置--符文

>上述四个文件只服务一个页面。

>app开头的文件(入口文件)：全局配置
页面配置与全局配置不一样怎么办：以离页面最近的配置为准

>一级页面
二级页面
...
 五级页面（最多）

# 第3章 rpx响应式单位与flex布局
## 3-3 新建页面的技巧与规则
>app.json文件里的pages数组(注册页面)

>在小程序没有错误的情况下，新建Page会自动在pages数组生成路径。

`注：删除掉页面后。路径不会自动删除（它只会自动添加），需要手动删除
只有在pages配置的页面才是小程序的页面。小程序默认显示pages数组里的第一项。`

## 3-4 image标签显示一张图片
>先把需要显示的元素写在页面上（先不考虑样式

>json文件里不能随意加注释

## 3-5 小程序rpx响应式单位的特点
>100px = 200rpx(爱疯6)
rpx：自适应(响应式分辨率)

`（tip：image组件默认宽度320px、高度240px）`

`遇到问题，多去看开发文档`

>静态样式(之后不会改变)放在class里
动态样式(要改变)就用style

## 3-6 分离CSS样式到WXSS文件中
>".user-avatar" 前面的点表示这是一个样式类
>
`样式类引用建议用双引号。`

## 3-7 初识flex布局进行垂直分布布局
>view（容器）
view标签把元素都包裹起来（类似div标签：包裹，分隔）
用view标签进行布局

>flex容器布局：通过操纵容器来控制容器中的组件
对样式设置flex布局，需要在样式类里标明：display:flex;

>弹性容器:display：flex
列(垂直)方向:flex-direction:colum （默认行排列）

`不推荐用小程序自带的button组件，有很多问题（有一些内置的样式效果，很难更改）`
>可以用view写一个简单的替代品模拟button(或者使用UI的button)

## 3-8 flex布局的align-items
`小程序不需要引用整个样式表（与html不同）`

>font-weight: bold;（字体加粗）

".journey-container"（按钮外边框样式名）
```css
 .journey-container{
  border:1px solid #405f80;
  width: 200rpx;
  height: 80rpx;
  border-radius: 5px;
  text-align: center;
  margin-top: 200rpx;
}
  ```
>居中:align-items: center;
圆角矩形:border-radius (按钮的圆角)
文本居中(水平居中):text-align:center (按钮里的文字居中)
垂直（文本）居中:line-height (设置成和容器一样的大小，就可以实现垂直居中)
`元素居中最好还是用flex布局(也可以用flex实现文本居中)`
上间距:margin-top(不包括小程序导航栏)
## 3-9 自己编写一个Button组件
>外边框用border来实现

边框文本样式 ".jurney"
```css
.journey{
  font-size: 22rpx;
  color: #405f80;
  line-height: 80rpx;
  font-weight: bold;
}
```
```html
  <view  class="journey-container">
    <text  class="journey">开启小程序之旅</text>
  </view>
  ```
##  3-10 小程序的方便性和灵活性的悖论
>只设置view的背景色无法全部覆盖
因为view不是最外层，最外层还有一个page

>在app.json里的window项配置小程序顶部导航栏的颜色（手机状态栏）：navigationBarBackgroundColor
//开发文档里的框架-小程序框架-全局配置有详细说明

>`默认情况下，顶部导航栏不能操作`

>welcome页面配置:

>welcome.wxml
```html
<!-- view和div一样，起到容器、分隔文档的作用 -->
<view class="container">
  <l-avatar class="l-avatar" placement="bottom" shape="circle" open-data="{{['userAvatarUrl','userNickName']}}" size="200" />
  <text class="motto">Hello,叶子</text>
  <view class="journey-container">
    <text class="journey">开启小程序之旅</text>
  </view>
</view>

<!-- flex 容器布局 -->
```
>welcome.wxss
```css
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b3d4db;
}

.l-avatar{
  margin-top: 160rpx;
}

.avatar{
  width: 200rpx;
  height: 200rpx;
  margin-top: 160rpx;
}

.motto{
  color: #666;
  margin-top: 160rpx;
  font-size:32rpx;
  font-weight: bold;
}

.journey-container{
  border:1px solid #405f80;
  width: 200rpx;
  height: 80rpx;
  border-radius: 5px;
  text-align: center;
  margin-top: 200rpx;
}

.journey{
  font-size: 22rpx;
  color: #405f80;
  line-height: 80rpx;
  font-weight: bold;
}

page{
  height: 100%;
  background-color: #b3d4db;
}
```
>welcome.json
```json
{
  "usingComponents": {
    "l-avatar":"/miniprogram_npm/lin-ui/avatar/index"
  },
  "navigationBarBackgroundColor": "#b3d4db"
}
```
# 第4章 阅读列表与setData数据绑定
## 4-1 LinUI组件库介绍
>https://doc.mini.talelin.com/
使用组件库节约30%的时间
https://github.com/TaleLin
不需要去下载源码，可以在小程序安装LinUI

## 4-2 安装、编译LinUI
>小程序里安装了组件库不能直接使用，
点开 "工具" ，选择 "构建npm"。

## 4-3 如何使用自定义组件
>和使用内置标签（原生组件）的区别：
组件的名字由开发者决定，不是组件的目录名字
自定义组件有一个前缀，LinUi建议使用l开头
在welcome.json里配置组件l-avater

## 4-4 l-avatar头像和昵称组件
>welcome.wxml里引用l-avater
```json
  "usingComponents": {
    "l-avatar":"/miniprogram_npm/lin-ui/avatar/index"
  },
  ```
>open-data（获取用户信息）,接受的是一个数组
userAvatarUrl(获取用户头像)当作一个字符串来处理，双引号里字符串加单引			号"['']",同时在数组外面加双花括号"{{['']}}"
userNickName（获取用户昵称）
shape(头像形状)，默认圆形
shape="square" 方形头像（有圆角)
placement="bottom"(设置头像在上，昵称在下)
placement="top"头像在下，昵称在上

```html
  <l-avatar class="l-avatar" 
  placement="bottom" 
  shape="circle" 
  open-data="{{['userAvatarUrl','userNickName']}}"
  size="200" />
  ```
##  4-5 添加新的编译模式
>文章阅读页面 posts
如何进行页面跳转？小程序的路由API

>通过在app.json指定entryPagePath可以让我们调整首页

>编译模式，点击 '普通编译' ，下拉框选择 '添加编译模式'，更换启动页面

>要设计的功能：
轮播图：自动切换，点击切换（固定区域展示更多内容）
文章列表：点击打开文章，往下滑动加载更多

## 4-6：初步了解Swiper和Swiper-item组件
>顶部状态栏改成红色（默认青蓝色，因为在app.json里配置了window）

`因为首页需要保持青蓝色，不能直接在window里更改`
>window里的配置项可以在页面里单独配置，
如在posts.json里配置navigationBarBackgroundColor
又因为除了首页其他页面状态栏都是红色，
所以全局配置设置为红色，在welcome页面（首页）单独配置青蓝色
```json
"navigationBarBackgroundColor": "#C22A1E"
```
>Swiper组件可以实现轮播图
在posts.wxml里添加swiper组件(布局外面通常要有一个容器view)
单独一个swiper组件起不到作用，需要搭配一个子组件
开发文档-组件-视图容器：swiper（滑块视图容器）
重点是容器两个字：表明swiper不能直接呈现效果
需要和swiper-item搭配使用

>轮播图看到的是一个个滑动的swiper-item
## 4-7：Swiper组件：通过插槽设置轮播内容
>swiper组件里不推荐使用其他标签（如不能在swiper里再添加view标签）
只能在里面使用swiper-item
`注：swiper-item里可以使用任何其他标签（插槽）`

`轮播图并不一定要用相同的元素，比如第一个放image图片，第二个放文本，第三个放日历`

>swiper不能只叫轮播图组件，它提供了滑动效果，滑动的内容由开发者决定
>图片有默认高宽（1920*1080），需要设置成符合自己需求的大小
## 4-8：swiper组件内容的高宽设置技巧
>固定图片大小，保持图片原始大小不好看

>可以先在image里设置style尝试
最后分别在image，swiper，swiper-item里设置同样的高宽，
style="width: 100%;height: 460rpx"
才实现了我们想要的效果。

>把swiper-item里的style去掉发现也能实现效果
（swiper-item不需要设置style）
image里的不能去掉。

>发现每一次添加style有一些繁琐，在样式表里编写样式
在posts.wxss 里添加 swiper样式。
（swiper前不加点，表示对整个swiper设置的样式）

>image的样式可以在posts.wxss用 swiper image 来设置
（表示对swiper下所有的image应用的样式）

```css
swiper{
  width: 100%;
  height: 460rpx
}

swiper image{
  width: 100%;
  height: 460rpx
}
```

## 4-9：属性设置一定要注意字符串与js表达式的区别
>轮播图下面的小点如何实现
通过设置swiper组件的indicator-dots属性来实现
indicator-dots 是否显示面板指示点 (默认false)

>自动轮播如何实现?
>查看开发文档，找到 autoplay 是否自动切换（默认false）
设置为 true。(自动切换时间也可以更改)

>！设置为false时需要加双花括号：... = "{{false}}"
(不加双花括号false会被当作字符串)
证：在posts.js文件里的 生命周期函数 onLoad:(options){} 添加

```js
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if("false"){
      console.log(4)
    }
    else{
      console.log(3)
    } 
  },
   ```
>最后调试器Console上打印的始终是4。（字符串false）

```js
    if(false){
      console.log(4)
    }
    else{
      console.log(3)
    }
 ```
>布尔值false 打印4

>字符串false被视为 真。（字符串都被视为 真）（空字符串视为 假）

>双花括号被视作运算的标记，
 在双花括号里的字符会被当作JavaScript的变量 
  或者是一段表达式去进行运算

`！按住crtl键，鼠标移到想要查看的内容，跳转开发文档 `  

## 4-10：布尔属性值赋值的良好建议

`建议：所有赋值都加双花括号`
>（设置false的三种方法）
   1.直接把相应的属性删掉，系统会默认设置false
   2.属性赋值空字符串，如：posts.wxml 里 indicator-dots=""
   3.如：indicator-dots="{{false}}" 或 indicator-dots="{{0}}"
 ```html
   <swiper indicator-dots="" >
   <swiper indicator-dots="{{false}}" >
   <swiper indicator-dots="{{0}}">
```
 > (设置true的方法)
   ?.随意字符串，数字123字母true或aaa
   [统一建议]
     设置布尔值时，都加上双花括号。
   [偷懒]
    当属性要标记成布尔值的true时，可以只写这个属性名字，不用写属性值，如
```html
    <swiper indicator-dots autoplay>...</swiper>
```

## 4-11：swiper组件的其他重要属性设置

>！想要添加一个功能，最好先去开发文档看看有没有设计好的组件
(优先使用组件)

>滑动方向是否为纵向 vertical
是否采用衔接滑动 	circular
自动切换时间间隔 	interval (默认5000毫秒) 

```html
  <swiper indicator-dots="{{true}}" 
  autoplay="{{true}}" 
  vertical="{{false}}" 
  circular interval="{{3000}}">
```

## 4-12:用flex布局组织布局思路（1）

>多个文章列表如何实现。先实现其中一个阅读文章。

>大局观：整个页面分为两个部分 
 1.轮播图
 2.文章

>flex布局不只是css的技巧，也是页面布局思路的指南
1.先看元素是水平布局还是垂直布局
   垂直布局思考 “行”
   ...一行
   ...两行
   ...三行

## 4-13：用flex布局组织布局思路（2）

>图片选的好，项目就会漂亮很多。（图片很重要）
填充元素时，先不用考虑样式

>先写骨架，再是元素，然后属性，填充数据，最后再把样式一排

## 4-14：用flex布局组织布局思路（3）

>post.wxss --> .post-container{...} //整体样式
```css
.post-container{
  display: flex;
  flex-direction: column;
  margin-top: 20rpx;
  margin-bottom: 40rpx;
  background-color: #fff;
  border-top:1px solid #ededed;
  border-bottom:1px solid #ededed;
  padding-bottom: 10rpx;
}
```
>容器上边线：border-top
容器下边线：border-bottom
内边距：padding-bottom

>post.wxss --> .post-author-date //第一行元素样式
`边距：margin:上 右 下 左`
```css
.post-author-date{
  /* margin-top: 10rpx;
  margin-bottom: 20rpx;
  margin-left: 10rpx; */
  margin: 10rpx 0 20rpx 10rpx; 
}
```
>post.wxss --> .post-author //第一行元素里图片的样式
```css
.post-author{
  width: 60rpx;
  height: 60rpx;
  /* vertical-align: middle; */
}
```
post.wxss --> .post-date //第一行元素里文本的样式
```css
.post-date{
  margin-left: 20rpx;
  font-size: 26rpx;
  /* vertical-align: middle; */
}
```
## 4-15：用flex布局组织布局思路（4）

>flex布局：在容器post-author-date里设置
  display: flex; //启用flex布局
  flex-direction: row; //设置主轴的方向 row 默认值从左到右
  align-items: center; //居中
```css
.post-author-date{
  margin: 10rpx 0 20rpx 10rpx; 
  display: flex; 
  flex-direction: row;
  align-items: center;
}
```

>传统布局：分别在post-author和post-date里设置
  vertical-align: middle;

>post.wxss --> .post-title //第二行元素样式
```css
.post-title{
  font-size: 34rpx;
  font-weight: 600;
  margin-bottom: 20rpx;
  margin-left: 20rpx;
  color: #333;
}
```
>容器内的元素又可以当作子容器，容器参考思路：flex布局  以及子子容器等等
只要是容器，优先考虑用flex布局来进行元素的排布
## 4-16：用flex布局组织布局思路（5）

>post.wxss --> .post-image //第三行元素样式
```css
.post-image{
  width: 100%;
  height: 340rpx;
  margin-bottom: 30rpx;
}
```
>post.wxss --> .post-content //第四行元素样式
```css
.post-content{
  color: #666;
  font-size: 28rpx;
  margin-bottom: 20rpx;
  margin-left: 20rpx;
  line-height: 40rpx;
  letter-spacing: 2rpx;
}
```
>post.wxss --> .post-like //第五行元素样式
```css
.post-like{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20rpx;
}
```
>posts页面完整代码

>psot.wxml
```html
<view>
  <swiper indicator-dots="{{true}}" autoplay="{{true}}" vertical="{{false}}" circular interval="{{3000}}">
    <swiper-item>
      <image src="/images/post/crab.png">
      </image>
      <!-- 插槽 -->
    </swiper-item>
    <swiper-item>
      <image src="/images/post/crab.png">
      </image>
    </swiper-item>
    <swiper-item>
      <image src="/images/post/crab.png">
      </image>
    </swiper-item>
  </swiper>
  <!-- 这个view用来包裹第一篇文章 -->
  <view class="post-container">
    <!-- 文章view第一行元素 -->
    <view class="post-author-date">
      <!--第一行图片-->
      <image class="post-author" src="/images/avatar/3.png"></image>
      <!--第一行文字-->
      <text class="post-date">Nov 18 2020</text>
    </view>
    <!--第二行元素，因为只有text，所以可以去掉view-->
    <text class="post-title">{{a}}</text>
    <!--第三行元素，因为只有image，所以可以不用view包裹-->
    <image class="post-image" src="/images/post/crab.png"></image>
    <!--第四行元素-->
    <text class="post-content">{{b}}</text>
    <!--第五行元素，图标比较复杂，view包起来-->
    <view class="post-like">
       <image class="post-like-image" src="/images/icon/none-star.png"></image> 
      <text class="post-like-font">92</text>
      <image class="post-like-image" src="/images/icon/view.png"></image> 
      <text class="post-like-font">102</text>
    </view>
  </view>
</view>
```
>psot.wxss
```css
/* pages/posts/posts.wxss */

swiper{
  width: 100%;
  height: 460rpx
}

swiper image{
  width: 100%;
  height: 460rpx
}

.post-container{
  display: flex;
  flex-direction: column;
  margin-top: 20rpx;
  margin-bottom: 40rpx;
  background-color: #fff;
  border-top:1px solid #ededed;
  border-bottom:1px solid #ededed;
  padding-bottom: 10rpx;
}

.post-author-date{
  /* margin-top: 10rpx;
  margin-bottom: 20rpx;
  margin-left: 10rpx; */
  margin: 10rpx 0 20rpx 10rpx; 
  display: flex; 
  flex-direction: row;
  align-items: center;
}

.post-author{
  width: 60rpx;
  height: 60rpx;
  /* vertical-align: middle; */
}

.post-date{
  margin-left: 20rpx;
  font-size: 26rpx;
  /* vertical-align: middle; */
}

.post-title{
  font-size: 34rpx;
  font-weight: 600;
  margin-bottom: 20rpx;
  margin-left: 20rpx;
  color: #333;
}

.post-image{
  width: 100%;
  height: 340rpx;
  margin-bottom: 30rpx;
}

.post-content{
  color: #666;
  font-size: 28rpx;
  margin-bottom: 20rpx;
  margin-left: 20rpx;
  line-height: 40rpx;
  letter-spacing: 2rpx;
}

.post-like{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20rpx;
}

.post-like-image{
/*   height: 32rpx;
  width: 32rpx; */
  margin-right: 16rpx;
}

.post-like-font{
  margin-right: 40rpx;
  font-size: 26rpx;
}
```
>psot.json
```json
{
  "usingComponents": {
    "l-icon":"/miniprogram_npm/lin-ui/icon/index"
  },
  "navigationBarBackgroundColor": "#C22A1E"
}
```
# 第5章 条件渲染、列表渲染与小程序事件
## 5-1：使用LinUI组件的icon组件代替图片ICON


>在post.json配置LinUI
```json
  "l-icon":"/miniprogram_npm/lin-ui/icon/index"
  ```
>引入icon组件
  LinUI官方文档示例：```<l-icon name="add"/> ```（name必填
进入小程序可以看到更多组件

## 5-2.LinUI组件的颜色和大小设置

>可以在app.json里去定义一次icon组件，那么icon组件都不需要在单独一个页面进行定义
(可以自定义图标，LinUI官方文档里搜)

## 5-3：小程序开发数据的流向（1）

>五篇文章怎么编写，
把第一篇文章的骨架复制，再修改一下数据

>真实的项目里不止五篇文章，不会一篇一篇的去复制和修改，
用循环来解决

>新闻需要更新，如果直接在post.wxml里写数据，更改就麻烦。
写在wxml里的数据就是静态数据，没法改变（更新修改很麻烦）

>数据应该从服务器区加载，服务器给前端数据，前端组织这些数据，并且把它显示在小程序上。

>？数据到了前端之后，在小程序里它是如何去展示的

## 5-4单向数据绑定与双向数据绑定
资料：[详解单向数据流与双向数据绑定](https://blog.csdn.net/weixin_42755677/article/details/91047876?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167560306716800225513695%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=167560306716800225513695&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-91047876-null-null.142^v73^insert_down2,201^v4^add_ask,239^v1^control&utm_term=%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A%E4%B8%8E%E5%8F%8C%E5%90%91%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A&spm=1018.2226.3001.4187)

>服务器传出的数据是动态数据
前端自身存储的数据是静态数据

>图片也算数据（不止标题，文本）

>服务器 -->数据--> 前端
服务器 -->数据--> (JS --数据绑定--> View)

>vue：
对于非 UI 控件来说，不存在双向，只有单向。只有 UI 控件才有双向的问题
单向绑定使得数据流也是单向的，对于复杂应用来说这是实施统一的状态管理（如 Vuex）的前提。双向绑定在一些需要实时反应用户输入的场合会非常方便（比如表单提交）。

>现在的小程序也可以实现简易的双向绑定。
（双向数据绑定并不一定是必须的

## 5-5：数据绑定与setData函数

>当小程序页面加载的时候，小程序会主动调用js文件里的onLoad函数

>js文件里的生命周期函数大多是小程序自动调用的
生命周期函数也称钩子函数（hook function）

>一个在javascript里的数据如何在wxml里显示？
在js文件里的page配置data，在data里定义
  (变量名:"数据")

>！所有在page下的data里定义的数据都可以被wxml引用
不能直接在wxml里输入数据被定义的变量名
要给变量名加上双花括号{{}}。

>setData是用来更新数据的

## 5-6：DOM优先 VS 数据优先
[DOM 详细 一篇就够【重点】](https://blog.csdn.net/egg_er/article/details/121572126?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168259389316800215012172%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=168259389316800215012172&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-2-121572126-null-null.142^v86^insert_down1,239^v2^insert_chatgpt&utm_term=DOM&spm=1018.2226.3001.4187)
>传统HTML使用DOM优先，
想要实现将js里的数据传到html里，需要去获取一个DOM节点id
```js
 a = "XXX"
 var d = docunment.getElementById('')    //获取节点
 d.innerHtml = a   //节点赋值
```

>数据优先 --> 数据绑定
（数据驱动）

## 5-8：理解Page.data与this.SetData的关系

>另一种数据绑定的方式：setData

>在data里定义的数据可以当作初始值，
如果想要修改该怎么做呢？
在onLoad里调用this.setData来更新数据。

>setData的参数接收的也是Javascript对象

>setData定义的数据是一种更灵活的数据绑定方式

>所有要被绑定的变量，最终都要出现在Page的data里。
setData会自动把变量加入到data里（不是显式地在data里定义）
证：在onRead函数里打印data

## 5-9：预先在data中定义绑定数据的初始值是值得推荐的做法

>什么时候用data，或者this.setData?

>我们要进行数据绑定的变量是否预先需要在data中定义
有没有必要把所有数据都在data中预先定义

>建议！所有要被绑定的变量（要被前台wxml使用的变量），都应该在data里预先进行定义  -- 方便之后阅读

>为什么要预定义呢？
data里面的定义可以理解为初始值
要修改用setData（更新）

>setData -- 创建+更新
## 5-10：小程序的生命周期函数与特殊回调函数

>生命周期 -- 一个页面从运行到结束的阶段
生命周期函数 -- 每一个生命周期阶段在执行完成之后，会被小程序主动调用的一个函数（生命周期某一个阶段执行的函数）

>生命周期函数由小程序来调用。

>生命周期函数的调用顺序，是我们需要知道的
js文件给的示例代码，排序大致对应了生命周期的执行顺序
示例顺序（onLoad -> onReady -> onShow）

>依次在这三个函数里调用打印，通过调试器的输出来判断
输出顺序（onLoad -> onShow -> onRead）

>onRead和onShow用得不多
大多数页面初始化的相关逻辑都是写在onLoad里

>onLoad(页面加载)

>onHide（页面隐藏）和onUnload（页面卸载）不能显式地在调试器里看到输出
Hide和onUnload是条件触发，
点击“切后台”，"onHide"就会被打印

>其他函数的触发条件。
onReachBottom 每一次滑动触底都会被打印

## 5-11：数据绑定的实战应用

>模拟一次服务器加载的数据
post.js -- onLoad -- content

>因为content已经被绑定，可以直接在xwml中使用(双花括号)
```html
{{content}}
```
>！onLoad里面的每一个语句后面都加逗号，会报错：var应为表达式

>posts.wxml第二篇文章使用的数据是动态的。不再是直接写在wxml上的了，
未来从服务器加载的数据都类似post.js里的content样式

## 5-12：Mustache语法解析

>数据绑定的深入变化
创建 
```js
  dataNum:{
    reading:102,
    collection:92,
  }
```
  
>将reading和collection组合起来

>如此改动后content还是一个js对象，结构更复杂了
reading和collection不能直接打印了，
因为reading和collection不是content的下一级了

>双花括号里的一些操作：
 可以在花括号里写一些简单的Javascript表达式(不能是函数，如if)。
 示例：posts.wxml第一篇文章的最后添加 {{1+2}}，页面输出 3
```js
    // 5-12 第一种在js实现A+B的方法
    this.setData({
      sum:content.A + content.B
    }) //定义新的变量sum，值是A+B

    // 5-12 第二种在js实现A+B的方法
    //直接在wxml里输入{{A+B}}就行
```


>开发文档：
  简单绑定 数据绑定使用 Mustache 语法（双大括号）将变量包起来

## 5-13：条件渲染

>条件渲染：所谓的条件渲染就是判断是否需要把代码渲染到展示页面上
（一定条件下页面才会展示的内容）

>在框架中，使用 wx:if="" 来判断是否需要渲染该代码块：
```html
  <view wx:if="{{condition}}">True<view>
```
>如果condition的值为true，就会在页面上渲染出view组件，否则将不会显示该组件。同时还可以结合wx:elif和wx:else来使用，此时可以进行多条件的判断是否渲染该代码。

>！空字符串表示false
## 5-14：列表渲染

>代码存在的问题：五篇文章需要5个content(数量更大会更麻烦)
列表渲染解决方法：
 js中有循环（思路：是否可以在wxml里做循环
 观察：五篇文章只是数据不同（内容不同），结构是一摸一样的
 思路：只创建一个post-container容器，利用循环往里面填充不同的数据

>（原页面posts注释太多，重新整理到post514进行笔记）
把wxml里其他四个post-container容器删掉，
js文件中的onload模拟从服务器获得数据

>利用数组将多篇文章的数据存在 js文件中的content 里

>问题：如何将两篇文章的数据暂时在wxml中显示（之前学的是一篇文章如何显示）
现在content是一个数组（直接把content进行setData是不对的）
 原因：setData只能存储js对象 （content数组现在不是js对象）
 解决：把数组进行简单的包装（把数组包装成js对象）

>怎么在前端把多个js对象展示出来呢（现在是content里有两组js对象）
 ：前端这时候需要使用“列表渲染”

 >列表渲染：用来展示一组js对象数据  

>wx:for实现列表渲染
在组件上使用 wx:for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。默认数组的当前项的下标变量名默认为 index，!数组当前项的变量名默认为item!。

>block结合wx:for使用
当把wx:for使用到`<block/>`标签上时，可以重复渲染一个包含多节点的结构块：

>通过wx:for-item="xxx" 来改变数组当前项的变量名（默认为item

## 5-15:列表渲染（下）

>想要在wxml里查找序号，可以用`{{index}}`
index是当前对象的序号，item是当前对象
（内置循环序号index）（内置循环对象item）

>index也可以修改，使用
 wx:for-index="xxx"

>block没有实际意义，他是括号的意思
 block作用是包裹多个子元素，让他们一起来被 xw:for 循环
 
> ！post514.wxml可以不用block，因为block里只有一个view
 但是建议养成使用block的习惯
```html
  <!-- 5-14列表渲染 -->
  <block wx:for="{{post514}}" wx:for-item="item">
    <!-- 数组名为post514  -->
    <!-- 一般情况不修改item  -->
    <view class="post-container">
    	...
    </view>
  </block>
```

>5-16：什么是事件 （笔记，posts页面）

>点击welcome页面的按钮，小程序如何知道用户的点击行为?
>- 用户点击按钮就是一个事件

### 开发文档--什么是事件 

>- 事件是视图层到逻辑层的通讯方式。
>- 事件可以将用户的行为反馈到逻辑层进行处理。
>- 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。
>- 事件对象可以携带额外信息，如 id, dataset, touches。

### 开发文档--事件分类
>事件分为冒泡事件和非冒泡事件：
>- 冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
>- 非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。

>？小程序又如何捕捉事件 捕捉到又如何应用呢？
 
 >当用户点击button会产生一个tap（触摸）事件
 事件只有捕捉到才是有意义的

## 5-17：bind捕捉事件执行回调函数

>捕捉到事件后进行操作
（捕捉到用户点击button后，执行页面跳转

>捕捉事件后执行js里的onTap

>如何捕捉事件：     使用 `bind:xxx="yyy"   `
```
//xxx表示(要捕捉的事件的名称)   //yyy表示(要执行的函数的名称) 
```

>js里的onTap通常把它叫做回调函数，事件的回调函数

>区分三者：事件，捕捉事件，捕捉事件后触发的回调函数
# 第6章 路由函数和事件冒泡
## 6-1：路由函数NavigateTo和RedrectTo的区别

>小程序的路由系统：一个页面跳转到另外一个页面
？跳转页面后可以点左上角箭头返回

>NavigateTo的特点：
保存当前的页面，跳转到下一个页面

`跳转到的页面相当于是子页面，还可以有子子页面`
`有限制，最多只能有10个页面嵌套。页面栈的元素不能超过10个`
>如何不让welcome页面返回：
 welcome页面（启动页面）是独立的，不需要返回
 使用redirectTo

>redirectTo的特点：
关闭当前的页面，跳转到下一个页面 
```js
  onTap:function(params){// 跳转页面
    // wx.navigateTo({ //保存当前页面
    wx.redirectTo({ //关闭当前页面
    // url: '/pages/posts/posts', //绝对路径(一般情况下使用)
      url: '../posts/posts', //相对路径（不够直观）
    })
  },
```
## 6-3：Catch与Bind事件的区别

### 冒泡事件和非冒泡事件
```html
<view class="container">
  <l-avatar class="l-avatar" placement="bottom" shape="circle" open-data="{{['userAvatarUrl','userNickName']}}" size="200" />
  <text class="motto">Hello,叶子</text>
  <!-- <view bind:tap="onTap" class="journey-container"> -->
  <!-- 6-3 catch和bind -->
  <view catch:tap="onViewTap" class="journey-container">
    <text catch:tap="onTextTap" class="journey">开启小程序之旅</text>
  </view>
</view>
```
```js
  // 6-3 
  onViewTap:function(params){(
   		console.log("on tap View"),
  )},
  onTextTap:function(params){(
		console.log("on tap Text"),
  )},
```
>点击按钮空白，和点击按钮的文本在调试器的输出不一样
分别是“on tap View” “on tap Text ; on tap View”
（text在view里，点击text的同时也相当于点击了view
若按钮文本也使用catch，输出只有 “on tap Text” 

>解释：
catch:tap 捕捉当前事件，并阻止事件的冒泡
bind:tap 捕捉当前事件，事件向上冒泡（所以监听text后会继续监听bind

>建议：没有特殊情况推荐用bind

## 6-4 js模块的导入和导出（require和import）

>数据源（服务端）
所有文章的数据统一放在`data.js`里
```js
var local_database = [
    {
        date: "Sep 18 2016",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/crab.png",
        avatar: "/images/avatar/1.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
        reading: "112",
        collection: "96",
        headImgSrc: "/images/post/crab.png",
        author: "林白衣",
        dateTime: "24小时前",
        detail: "菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，壳凸红脂块块香”；在《世说新语》里，晋毕卓更是感叹“右手持酒杯，左手持蟹螯，拍浮酒船中，便足了一生矣。”漫漫人生长路，美食与爱岂可辜负？于是作为一个吃货，突然也很想回味一下属于我的味蕾记忆。记忆中的秋蟹，是家人的味道，弥漫着浓浓的亲情。\n\n是谁来自山川湖海，却囿于昼夜，厨房与爱？ 是母亲，深思熟虑，聪明耐心。吃蟹前，总会拿出几件工具，煞有介事而乐此不疲。告诉我们螃蟹至寒，需要佐以姜茶以祛寒，在配备的米醋小碟里，亦添入姜丝与紫苏，前者驱寒后者增香。泡好菊花茶，岁月静好，我们静等。",
        postId: 0,
        music: {
          url: "http://music.163.com/song/media/outer/url?id=142604.mp3",
            title: "夜夜夜夜-齐秦",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001TEc6V0kjpVC.jpg?max_age=2592000"
        }
    },
    {
        title: "比利·林恩的中场故事",
        content: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。",
        imgSrc: "/images/post/bl.png",
        reading: 62,
        detail: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性”李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。预告片首次曝光后，被视作是明年奥斯卡种子选手。该片根据同名畅销书改编。原著小说荣获美国国家图书奖。也被BBC评为21世纪最伟大的12本英文小说之一。影片讲述一位19岁德州男孩的比利·林恩入伍参加伊战，在一次交火中他大难不死，意外与战友成为大众的关注焦点，并被塑造成英雄。之后他们返回国内，在橄榄球赛中场休息时授勋。这名战争英雄却面临前所未有的心灵煎熬……李安为什么选中这部电影来拍？因为李安想要挑战前所未有的技术难题：以120帧每秒的速度、4K、3D技术全面结合，来掀起一场电影视觉革命。什么意思？所谓“电影是24格每秒的谎言”，其中的24格，就是帧数。",
        collection: 92,
        dateTime: "24小时前",
        headImgSrc: "/images/post/bl.png",
        author: "迷的城",
        date: "Nov 20 2016",
        avatar: "/images/avatar/1.png",
        postId: 1,
        music: {
          url: "http://music.163.com/song/media/outer/url?id=108220.mp3",
            title: "鬼迷心窍-李宗盛",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000002xOmp62kqSic.jpg?max_age=2592000"
        }
    },
    {
        //按住alt + shift + F 可以格式化代码样式
        title: "当我们在谈论经济学时，我们在谈论什么?",
        content: "引言在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：...",
        detail: "1 引言\n\n在我跟学生课后交流时，以及我在知乎上阅读有关“经济”问题的论题时，经常会遇到这样的情况：有些人套用“经济理论“的知识去解释现实中发生的经济事件，结果发现很多事情讲不通，或者发现”理论告诉我们的“与现实发生的是相反的。也有学生经常跟我说：经济学有什么用？为了说明这个，我经常从两个方面来进行解释，尝试用我个人所擅长的解决问题的视角和他们能够听懂的方法来说明经济学是什么，它的作用边界在哪里：\r\n\n2 ”简笔素描“与”油画肖像“我们给人画肖像画，可以用简笔素描，也可以用油画肖像。油画肖像可以在最大程度上保存了人物的各方面的细节和特点，而简笔素描则忽略了很多细节。尽管简笔素描忽略了人物的许多细节，但我们仍旧能够很容易的认出画中的人物是谁。为什么？因为这种方法保留了人物最显著的特征，以至于我们可以忽略其次要特征而对人物做出判定。\n\n2.1 ”简笔素描“对于绝大多数的非经济学专业大众而言（经济学相关专业硕士学历以上），人们所接触到的经济学都是初级微观经济学。所谓的初级微观经济学，对于经济问题的”画法“就是一种”简笔素描“。比如初级微观经济学教材中广为使用的这种一元一次需求函数：y=bx+a，需求量的唯一变量是产品价格。但仅凭直觉我们就可以断言，现实中影响需求量的因素绝不止价格这一种，因此我们可以认为这个模型对经济问题的描述是失真的。然而但这种失真却是必要的和有意义的，其意义在与它利于揭示价格对于需求的影响，而不在于否定影响需求的其他因素——",
        imgSrc: "/images/post/sls.jpg",
        headImgSrc: "/images/post/sls.jpg",
        reading: 62,
        collection: 92,
        author: "知乎",
        date: "Nov 12 2016",
        dateTime: "三天前",
        avatar: "/images/avatar/3.png",
        postId: 2,
        music: {
          url: "http://music.163.com/song/media/outer/url?id=27538254.mp3",
            title: "女儿情-万晓利",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004Wv5BO30pPc0.jpg?max_age=2592000"
        }
    },
    {
        title: "微信·小程序开发工具安装指南",
        content: "这两天闲来无事，也安装了 “微信折叠”的开发工具来玩一下。以下是一些小道消息及使用体验，过两天我会写一篇文章以开发者的角度来详细评价微信小程序",
        imgSrc: "/images/post/xiaolong.jpg",
        reading: 102,
        detail: "这两天闲来无事，也安装了 “微信折叠”的开发工具来玩一下。以下是一些小道消息及使用体验，过两天我会写一篇文章以开发者的角度来详细评价微信小程序:微信小程序不能开发游戏类、直播类功能，小程序每个人关注的上限是20个（还不确定，不过我相信这是真的，这次公布的API里并没有视频组件。微信太大，苹果要有所顾忌，但是微信也要做出相应的让步)微信目前有没有同苹果商谈好，还是个未知数，毕竟会对AppStore有一定的冲击。抛弃了大量的javascript组件后，这个生态体系变得相当的封闭，微信解释肯定是：为了更好的性能提升。那么我们拭目以待。小程序的入口是微信里的三级菜单，就是在“Tab栏发现里的游戏下面加入一个“小程序”。反正，这一栏里的购物和游戏我是从来没点进去过的。以腾讯的尿性，小程序同服务号一样，其关系链及重要功能的开放程度会因“人”而异。对，优质的接口只会开放给腾讯的儿子们（滴滴呀、京东呀）",
        collection: 92,
        dateTime: "24小时前",
        headImgSrc: "/images/post/xiaolong.jpg",
        author: "猫是猫的猫",
        date: "Nov 20 2016",
        avatar: "/images/avatar/5.png",
        postId: 3,
        music: {
          url: "http://music.163.com/song/media/outer/url?id=108119.mp3",
            title: "恋恋风尘-老狼",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000001VaXQX1Z1Imq.jpg?max_age=2592000",
        }
    },
    {
        title: "从视觉到触觉 这款VR手套能给你真实触感",
        content: "8月29日消息，据国外媒体VentureBeat报道，一家名为Dexta Robotics的公司最近发布了一款有望变革虚拟现实手部追踪与交互方式的新产品",
        imgSrc: "/images/post/vr.png",
        reading: 102,
        detail: "消息，据国外媒体VentureBeat报道，一家名为Dexta Robotics的公司最近发布了一款有望变革虚拟现实手部追踪与交互方式的新产品。该产品名为“Dexmo”，它是一款像手套那样戴在手上使用的未来主义外骨骼。它内置大量的元件，能够与VR体验进行交互，可帮助你感觉握在你的双手的虚拟物体。Dexmo据Dexta称，“Dexmo是一款针对你的双手的机械外骨骼。它能够捕捉你的手部运动，以及提供即时的力反馈。有了Dexmo，你可以感受到虚拟物体的大小、形状和坚硬度。你可以接触数字世界。”市面上已经有数款产品旨在处理虚拟现实中的手部交互，也有相关的产品即将要进入市场。例如，颇受欢迎的HTC Vive头盔配有一副控制器，其控制器能够使得追踪系统看到你的双手，让你可以用它们来在特定体验中与物体进行交互。今年晚些时候，Oculus将开始出货类似的手部控制产品Oculus Touch。10月，索尼也将开始出货配备两个PlayStation Move手部控制器的PS VR。Leap Motion甚至更进一步：利用传感器来追踪手指和手部的运动。",
        collection: 26,
        dateTime: "24小时前",
        headImgSrc: "/images/post/vr.png",
        author: "深白色",
        date: "Nov 20 2016",
        avatar: "../../../images/avatar/3.png",
        postId: 4,
        music: {
          url: "http://music.163.com/song/media/outer/url?id=188204.mp3",
            title: "沉默是金-张国荣",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000003at0mJ2YrR2H.jpg?max_age=2592000"
        }
    },
    {
        title: "爱奇艺创维开展战略合作，合力布局开放娱乐生态",
        content: "爱奇艺和创维分别作为国内领先的在线视频品牌",
        imgSrc: "/images/iqiyi.png",
        reading: 96,
        detail: "爱奇艺和创维分别作为国内领先的在线视频品牌和家电品牌。双方一直锐意创新，为用户提供优质的服务体验和产品体验。据悉，爱奇艺与创维将展开从资本到VIP会员服务等各方面的深入合作。籍由此次合作，爱奇艺将战略投资创维旗下拥有高端互联网电视品牌的酷开公司。从下一财年开始，创维旗下互联网电视将通过银河互联网电视集成播控平台，预置VIP会员服务及相关内容。这种捆绑终端与VIP内容的全新销售模式，将大幅提升互联网电视终端用户的体验，给予用户更多优质内容的选择。",
        collection: 26,
        dateTime: "21小时前",
        headImgSrc: "/images/iqiyi.png",
        author: "深白色",
        date: "Nov 20 2016",
        avatar: "../../../images/avatar/5.png",
        postId: 5,
        music: {
          url: "http://music.163.com/song/media/outer/url?id=152428.mp3",
            title: "朋友-谭咏麟",
            coverImg: "http://y.gtimg.cn/music/photo_new/T002R150x150M000004eGsCN3SUheO.jpg?max_age=2592000"
        }
    },
]

module.exports = {
    postList: local_database
}
```
>local_database 模拟本地数据库
`一个js文件是一个Javascript的模块，`
相当于我们做了一个叫作local_database的Javascript模块，并且把数据存在了里面

>注意：
 this.setData只能在页面里的js使用

>那么如何对data.js里的数据进行绑定呢
 既然有导入，那就有导出

>哪里需要数据那里就进行导入

>导出：
通过module.exports来进行数据的导出，并且要给导出的数据起一个名字
 ```js
 module.exports = {
   导出数据的名字:local_database
 }
 ```

>导入：
在Page的外面进行导入

 `注意：require不能使用绝对路径`
 
>更简单的导入导出：
 导出使用export关键字
 导入使用import

>在调试器里对导入的数据进行对比，发现import导入的直接是一个数组，比require少一级
## 6-5：用列表渲染展示导入的数组数据

>到我们要展示一个数组时，需要使用列表渲染
在post64.js的onLoad里使用this.setData
```js
    // 6-5列表渲染展示导入数据
    this.setData({
      // local_database:local_database// 同名可以简写(ES6语法)
      local_database
    }),
```
## 6-6：从列表页面跳转到文章详情页面

>从js跳转，新建要跳转到的页面post-detail(文章详情页面)

>如何跳转页面?
展示页面如何对应每一篇文章？
 详情页面只有一个，要解决的是填充哪一篇文章的详情数据（动态数据）

>1.监听用户点击事件
  点击的范围需要多大。最好是一篇文章整个的区域都能点击跳转
  ！并不是所有的都需要跳转到详情页面。头像图片（当然也可以设计成可以跳转）
  
  `思考用户会做什么事情，再去编写代码！！！`

  >在post64.js里定义onGoToDetail函数
```js
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
```
## 6-7：列表渲染的wx:key赋值规则

>！在我们之前使用wx:for进行列表渲染时，调试器会提示我们可以搭配wx:key一起使用
>？如何取消警告，在使用了wx:for的标签里加上wx:key（post64.wxml第22行）
```html
  <block wx:for="{{local_database}}" 
  wx:key="postId" 
  wx:for-item="item">
  	...
  </block>
```
>!每一组数据，它在服务端的数据库里都有一个唯一id（组件）
（暂时用data.js里的postId模拟服务端的id）
```thml
wx:key=""{{item.postId}} 
// 这样写调试器会警告，需要去掉双花括号和item
```
 >官方规定只能这样写`wx:key="postId" `
！！如果没有设置postId（没有id组件），也可以用列表渲染循环产生的序号index
 如：`wx:key="index"` 注意这里也不能加双花括号

>！ 如果我们使用列表渲染，最好搭配wx:key一起使用。
 ## 6-8：时间冒泡的具体应用

>如何让用户点击图片实现图片放大？
 我们要监听的是图片，一个新的事件，写在头像图片的标签里（思路）
 注意要使用catch，防止冒泡，监听覆盖，跳转冲突

>一些新的功能，点击星星，对文章点赞（或收藏）。
# 第7章 构建阅读详情页面
 ## 7-1：构建文章详情页面（1）

>前端开发技巧：先静 后动 [先做静态数据页面，样式等都做完之后，再替换成动态数据]

>post-detail.wxml的思考：
 container，使用flex布局，设计图是垂直分布（从上到下）

## 7-2：
>构建前端的样式一定需要数据，不一定要真实的数据，
因为API的开发是滞后于前端的，所以我们要致力于填写一些数据，
方便我们去编写样式。

## 7-3：
编写样式

## 7-4：Flex的高级应用（1）

>css实现横线的方式：
 1.用view去模拟一条横线
   横线有宽度,长方形view的高为1px看起来就像横线
```html
   <view class="horizon"></view> <!--7-4实现横线-->
```
```css
.horizon{
  width: 660rpx;
  height: 1px;
  background-color: #e5e5e5;  /* 背景色 */
  position: absolute; /* 横线脱离文档 */
  z-index: -99; /*  */
}
```
>横线是在两个图片下方的，用一个view去包裹两张图片,这样可以把两张图片当作一个对象
tool样式包括两个元素：两张图片组成的view和一条横线
```css
.tool{
  display: flex;
  flex-direction: column; /* 列排布 */
  align-items: center; /* 交叉轴上居中 */
  justify-content: center; /* 主轴居中 */
  margin-top: 20rpx;
}
```
>横线对于整个tool容器既是垂直居中又是水平居中

![在这里插入图片描述](https://img-blog.csdnimg.cn/41d7f856e4ab445893a65d1693111137.png#pic_center )

##  7-5：Flex的高级应用（2） 主轴和交叉轴

>在flex布局里，水平和x轴不是一定对应的

>最好用主轴和交叉轴来区分，flex设置的是什么方向，那个方向就是主轴，另一个就是交叉轴

>align-items 是用来设置flex布局子元素在交叉轴上的分布方式
justify-content 是用来设置主轴上的排布的位置

>circle里不能使用float: right来让两张图片靠右（因为外面的容器使用了flex布局
可以在circle也使用flex布局
```css
.circle{
  display: flex;
  width: 660rpx; /* 容器宽度，有宽度才可以偏移 */
  flex-direction: row;
  justify-content: flex-end; /* 容器尾端偏移 */
}
```
## 7-6：Flex的高级应用（3）

>因为两张图片被circle样式包裹，所以不用单独设计样式，
可以直接在wxss里使用选择器选择circle容器下的所有图片。
```css 
.circle image{
    width: 90rpx;
  	height: 90rpx;
  }
  ```

>收藏按钮点击后会变色，所以要单独设计一个样式share-img
```css
.share-img{
  margin-left: 30rpx;
}
```
## 7-7： 组件的自定义属性data

>实现把每一篇文章的id号和view容器对应起来

>静态数据替换成动态数据，把id号传到post-detail页面去，达到打开对应文章的详情页面

>在post64.wxml页面的catainer容器标签里自定义属性data-id
编译post64.wxml页面，在调试器里（Wxml）可以看到每一篇文章都有一个对应data-id，值就是postId。
```html
    <view data-post-id="{{item.postId}}" 
    bind:tap="onGoToDetail" 
    class="post-container">
    	...
    </view>
```
## 7-8：自定义属性data-的命名规则

### 怎样在js里拿到id号：事件对象（event）

>post.js第80行的event，85行打印event
 当我们点击某一页面后，调试器就会打印一个event（事件对象）。展开currentTarget，在dataset（数据集）里就可以看到我们需要的id号，如此通过事件对象来获取id号
 
 `！注意在dataset里的属性名大小写与命名时不同`
 >命名postId，在dataset里是postid
 命名post-id，在dataset里是postId
```js
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
```
### 小程序转换命名规范原因：
 >wxml标签里都是小写，遇到多个单词用短横线'-'来连接 post-id
 
 >js里命名规范是驼峰 postId

>最后把data-id修改为data-post-id

## 7-9：在页面的onLoad函数中获取查询参数

>把id号传入到详情页面文章去（页面与页面之间的数据通信）
通过在url后面添加问号'?'  （查询参数通过问号来传递
问号前面的是路径，问号后面的是查询参数，多个参数之间用&来连接

>？如何在post-detail页面接收到pid参数
 通过post-detail.js里的onLoad函数来获取，onLoad函数默认会传递options，而options可以去获取pid
```js
    // 7-9 获取pid(传递参数)
    console.log(options) //option可以接受传递参数
```

## 7-10：加载详情数据并填充页面

>文章是不需要id号的，为什么要传入id号？
 详情数据<- -导入<- -data.js
 导入的是一个数组，只有知道id号，才能在数组里找到我们需要的文章

>由上节可知，id可以从options获取。

>post-detail.js获取到数据后，进行数据绑定，同时最好预定义postData
```js
    // 7-10 获取详情数据
    const postData = local_database[options.pid]
    console.log(postData) // 打印验证 
```
>最后再把静态数据替换成动态数据
## 7-11：为什么只传post-id

>为什么不直接传所有需要的数据？
 >- 1.id号更容易传
 >- 2.概要数据和详情数据不对等

# 第8章 缓存机制与异步API的async和await
## 8-1：app.js的意义和作用

>收藏按钮：收藏成功和取消收藏，以及服务器需要记录用户是否收藏（因为目前没有服务器，暂时记录在全局变量）

>全局变量：任何一个页面都可以直接获取到的变量，写在app.js

>小程序启动的生命周期函数： onLaunch
 生命周期回调—监听小程序初始化
 小程序初始化完成时触发，全局只触发一次。
## 8-3：在app.js中保存全局变量

>通过内置函数getApp获取全局变量 示例在post-detail页面
```js
// 8-3 getApp获取全局变量
const app = getApp()
// console.log(app)  // 打印验证
// console.log(app.test) //打印test
```
>重新启动小程序后，在调试面板可以看到我们打印的 app，里面保存了我们设置的test：1
```js
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

```
>全局变量不需要像保存在模块里的文件一样需要导出（export），
每个页面都可以通过getApp来获取到全局变量
## 8-5：小程序缓存的增删查改与清除

>全局变量不能永久保存：在别的页面修改后，重启小程序全局变量又会回到初始值

>收藏状态需要永久保存，退出后状态仍然存在

### 小程序的缓存机制与localstorage有共同点
>localstorage的特点和区别：
 全局变量是永久存在的，即使是保存在缓存里的状态，也不会被初始化

>在post64.js操作缓存：
```js
 wx.setStorageSync('key', data) 
 // 单引号里输入字符串，默认为key data随意设置
 ```
> Sync后缀表示，这是一个同步操作缓存的方法（没有Sync表示异步操作）

 >打开调试器的Storage栏，可以看到我们设置的flag
```js
    // 删除缓存
    wx.removeStorageSync('key')

    // 清空所有缓存
    wx.clearStorageSync()
```
>- ？那如何去读取小程序的缓存呢
 `getStorageSync`
>- 缓存的特性：
 刷新不会清掉缓存，相当于前端的数据库

## 8-6：异步函数的几个方案：回调函数、promise与await

>当数据比较大时，异步可以让我们的小程序界面UI不那么卡顿，但是异步比较麻烦。
```js
    // 8-6 异步读取缓存
    const flag3 = wx.getStorage({
      key:'flag3',
      success(value){
        console.log(value)
      }
    })
    //调试器输出为 {errMsg: "getStorage:ok", data: 3}

    // 8-6 异步读取缓存(新版)--读取Promise
    const flag4 = wx.getStorage({
      key:'flag4',
    })
    flag4.then((value)=>{
      // console.log(value)
      console.log(value.data)
    })
```
> 通过回调函数获取
```js
    // 8-6 ES7：读取Promise(通过await直接读取缓存)
    const flag5 =await wx.getStorage({
      key:'flag5'
    })
```
`当一个函数内部出现await，需要在函数前面加上 async`
```js
  async onCollect(event){
    // 8-16 取消success，打印showModal，获取Promise
    const result = await wx.showModal({
      title: '是否收藏文章',
    })
    console.log(result)
  }, 
```
>补习：什么是Promise；什么是async；什么是await
## 8-7：文章收藏（1）分析思路
>文章详情页面的js
```js
onLoad(options){
    const postData = local_database[options.pid] //获取相应pid数据 
    this.data._pid = options.pid // 获取pid
    this.setData({ // 数据绑定到前端
      postData
    })
}
```
>用户点击收藏按钮，会触发事件，事件会给我们一个回调函数

>把收藏文章的状态保存在缓存里

> 1.收藏文章的状态需要保存
> 2.哪一篇文章被收藏的状态也需要保存
`  设计一个数据结构，可以表示多篇文章是否被收藏`
>- （1）
      key:id,//文章标识
      flag:true | false //文章状态
>- （2）
      id:true | false  // 第几篇文章：什么状态  例：1:true

>技巧：在js里想要共享一个函数里的参数，可以用data来做中转
      获取data时，需要使用this.data

>?为什么不能直接使用：
      this.data._pid:true
      
```js
  // 8-7 点击收藏按钮事件的回调函数
  onCollect(event) {  //假设文章未收藏--点击-->已收藏
    //wx.setStorageSync('posts_collected', this.data._pid:true) //报错
    postsCollected[this.data._pid] = true
    wx.setStorageSync('posts_collected', postsCollected)
```
## 8-7：文章收藏（2）JS的动态属性

>示例：
```js
    const obj = {
      flag: 1
    }
    //修改flag的值两种方法
    obj.flag = 2     //第一种
    obj['flag'] = 2  //第二种（可以用来动态访问属性）
```
>动态访问属性：访问没有名字的属性
```js
  onCollect(event) {  //假设文章未收藏--点击-->已收藏
    const postsCollected = {} //  创建一个新的object对象
    postsCollected[this.data._pid] = true // 赋值
    wx.setStorageSync('posts_collected', postsCollected) // 缓存
   }
```
>点击收藏按钮后，可以在缓存里看到posts_collected的值 

>但如此会产生缓存覆盖的问题。
## 8-9：收藏未收藏的切换
### wx:if 条件渲染 
> 绑定一个变量，表明当前文章是否被收藏，用来控制收藏图片转变，把缓存里的收藏状态赋值给这个变量。

> data里预设一个变量collected,并且进行数据绑定
 （因为更改UI层只能通过数据绑定来设置
```js
  data: { // 要做数据绑定的数据不用加下划线
    _pid:null,// 文章标识
    collected:false, //收藏状态初始化：未收藏
  },
```
```js
  // 8-7 点击收藏按钮事件的回调函数
  onCollect(event) {  //假设文章未收藏--点击-->已收藏
    const postsCollected = wx.getStorageSync('posts_collected'); // 把收藏文章的状态保存在缓存里
    postsCollected[this.data.currentPostId] = this.data.collected //赋值
    wx.setStorageSync('posts_collected', postsCollected) // 缓存
    this.setData({   // 收藏
      collected: true
    })
  },
```

`setData就是对属性进行赋值`

## 8-10：初始化收藏状态
>缓存里的收藏状态才是真实的,初始化页面时就读取缓存:
>- 如果缓存有，绑定到前端。
>- 没有，就创建一个object对想来保存当前收藏状态。

>在onLoad里读取缓存，才能确保重新进入页面后收藏状态不变
```js
//post-detail.js
  onLoad(options) {
    const postData = local_database[options.pid] //获取相应pid数据 
    this.data._pid = options.pid // 获取pid
    this.setData({ // 数据绑定到前端
      postData
    })

    const postsCollected = wx.getStorageSync('posts_collected')
    // 读取缓存里的收藏状态
    if (postsCollected) { // 如果缓存里有
      this.data.collected = postsCollected[this.data._pid] //赋值
      // 改变收藏状态
      this.setData({
        collected: this.data.collected
      })
    } else { //缓存里没有
      const postsCollected = {} //8-8 创建object对象
      postsCollected[this.data._pid] = false
      wx.setStorageSync('posts_collected', postsCollected)
    }
  },
```
## 8-11：缓存如何不被覆盖？

```js
 console.log(collected)// 当前文章在缓存里的收藏状态
```
>1.点击别的页面后，不做任何操作，会在调试器里看到 undefined
因为新页面的收藏状态我们没有在缓存里保存，
```js
if(collected = undefined){ // 从未收藏过，那就是false
    collected = false
}
```
`collected:undefined与collected:false等同`
```js
const collected = postsCollected[this.data._pid]
// 报错
// Error: "collected" is read-only
```
`const和let的区别，const设置变量为静态常量，变量要改变用let`

[使用const报错Error: “i“ is read-only ？](https://blog.csdn.net/m0_49471668/article/details/123632041?ops_request_misc=&request_id=&biz_id=102&utm_term=%20is%20read-only&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-1-123632041.142^v86^insert_down1,239^v2^insert_chatgpt&spm=1018.2226.3001.4187)
>2.当我们别的页面收藏按钮后，会发现原页面的收藏状态被覆盖了，
在调试器里看到缓存里只有新页面的收藏状态

>原因：
    每一次点击，都会在onCollect里创建建一个新的object对象，
```js
    //8-8 创建object对象
    const postsCollected = {}
    postsCollected[this.data._pid] = true
    wx.setStorageSync('posts_collected', postsCollected)
```
## 8-12：同步文章缓存状态

>在data里定义`_postscollected:{}` 用来保存收藏状态
把 `创建新的object对象` 语句删除（注释），
修改成把缓存里的收藏状态赋值给_postscollected

>最后实现了 在缓存里保存多篇文章收藏状态，
当我们再点击收藏按钮（取消收藏）时，发现没有响应
问题还是在onCollect，因为我们是 点击 没有反应
 因为把值固定为true了：
```js
 postsCollected[this.data._pid] = true 
```
 把代码改成：
```js
 postsCollected[this.data._pid] = !this.data.collected 
```
 （与缓存里的状态取反）
> 问题还是没有解决，因为我们只改变了缓存里的值，UI界面的值还是固定：
```js
    this.setData({
      collected:true
     })
```
>修改为： 获取原来的状态然后取反(!)
```js
   this.setData({
      collected:!this.data.collected
     })
```

```js
  // 8-7 点击收藏按钮事件的回调函数
  onCollect(event) { //收藏或未收藏
    const postsCollected = wx.getStorageSync('posts_collected'); // 读缓存
    postsCollected[this.data._pid] = !this.data.collected //赋值
    wx.setStorageSync('posts_collected', postsCollected) // 写缓存
    // 改变收藏状态
    this.setData({
      collected: !this.data.collected
    })
  },
```
## 8-13：showToast接口的应用

>实现：点击收藏按钮弹出提示（因为用户不了解图标颜色代表的意义，如：蓝色--收藏）

>内置组件Toast：不是我们看到的组件（如：view），更适合叫它API
 可以在js文件里直接调用showToast

>我们在切换图标时，依靠的是页面当前状态取反的操作，showToast也需要取反
  可以写一个三元表达式，
    title: this.data.collected?'取消收藏':'收藏成功',
    
 ```
期望结果：
    当前状态为 收藏，提示取消收藏
测试后发现实际效果为：
    当前状态为 收藏，提示收藏成功
 ```
```js
    // 8-13 调用showToast
    wx.showToast({
      title: !this.data.collected ? '取消收藏' : '收藏成功',
      duration: 2000 // duration参数 停留时间
    })
```

## 8-14：牢记setData对于data属性的影响

 > 在post-detail.js：
  `  postsCollected[this.data._pid] = !this.data.collected `
 
 > 我们对`this.data.collected`进行了取反操作，
  但没有覆盖它原来的值（collected），解释：
    要实现取反覆盖原来的值：
      `this.data.collected = !this.data.collected  （即：a = !a）`
    如此才能覆盖。

  >  但是，我们在setData里输入了这一行代码：
     ` collected:!this.data.collected `
    这一行代码等同于：
      `this.data.collected = !this.data.collected  （把取反赋值给原来的值）`
    严格意义来说不等同，因为setData里的代码除了 赋值 还有 数据绑定。

 > 所以我们在showToast里获取到的collected值是不符合我们预期的

>setData除了数据绑定之外，他还会对data下 同名的属性 进行赋值
## 8-15：把showToast更换成showModal（1）

 >-  showToast属于 轻提示
  >- showModal属于 模态对话框：强行需要用户点击
                         （不点击取消或者确定不能关闭对话框）

>如果需要用户去点击确认才能收藏，那么我们该如何去编写代码
  点击第一次触发showModal，点击第二次（确认或收藏）才改变收藏状态，
  那我们如何去获取用户是点击了确认还是取消，
  showModal是一个API，不再是我们自定义的组件，不能再使用数据绑定
## 8-16：showModal的回调函数与Promise

  >在showModal里我们可以通过success函数来获取用户点击 取消或确认 的时机
  
  `不管点击取消还是确认，都会触发回调函数success`

 > 通过success原有参数（暂时命名res），我们可以确认用户点击的是T还是F

  >当用户点击F（取消）时，不需要编写代码，因为收藏状态没有改变。
  点击T（确认）时，把之前的代码写在success里就可以实现改变状态

  >当我们不设置success时，打印showModal可以得到一个Promise，
  通过解析Promise我们也可以获取用户点击
    回调函数里再写代码，会难以阅读
    
>  如何解析Promise：
    >- 1.Promise自带的then方法
   >- 2.在wx.showModal前面加上await（推荐）
      同时需要在调用的方法体onCollect前面加上async

>      通过await解析Promise到的object对象获取收藏状态，
      通过if语句来转换收藏状态：
```js
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
```
` 用户点击取消，我们不需要做任何操作， `
## 8-17：showActionSheet的使用
```js
  // 8-17 
  async onShare(event) {
    const result = await wx.showActionSheet({
      itemList: ['分享到QQ', '分享到微信', '分享到朋友圈'],
    })
    // console.log(result)
  },
```
>  点击分享按钮后的一些操作：
    >- showActionSheet实现，bind:tap捕捉点击，
    >- onShare作回调函数，加上event参数

 >   showActionSheet不是本就用来实现分享的，它仅仅提供了一个菜单

>打印success我们可以在调试器里看到点击某项的序号：
```js
onShare(event){
       wx.showActionSheet({
          itemList: ['分享到QQ','分享到微信','分享到朋友圈'],
          success(res){
            console.log(res)
          }
        })
},
```

> 也可以通过await获取点击序号：
```js
async onShare(event){
        const result = await wx.showActionSheet({
          itemList: ['分享到QQ','分享到微信','分享到朋友圈'],
        })
      console.log(result)
},
```
# 第9章 音乐播放
## 9-1: 浮动居中方案-通过left和top定位音乐图标

>考虑到暂时用不到，且时间不充足，故略过
# 第10章 初识小程序的自定义组件
## 10-1：文章列表顶部轮播图跳转

>  直接使用之前编写的跳转函数，以及给图片标上id
```html
  <swiper indicator-dots="{{true}}" autoplay="{{true}}" vertical="{{false}}" circular interval="{{3000}}">
    <swiper-item>
      <!-- 10-1 轮播图跳转 -->
      <image data-post-id="3" bind:tap="onGoToDetail" src="{{local_database[3].imgSrc}}">
      </image>
    </swiper-item>
    <swiper-item>
      <image data-post-id="0" bind:tap="onGoToDetail" src="{{local_database[0].imgSrc}}">
      </image>
    </swiper-item>
    <swiper-item>
      <image data-post-id="4" bind:tap="onGoToDetail" src="{{local_database[4].imgSrc}}">
      </image>
    </swiper-item>
  </swiper>
```
```js
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
```
## 10-2:小程序tabBar选项卡配置基础

>  通过在app.json文件下配置的方式来实现tabBar选项卡

 ` 对页面路径来说，出现在json文件中，通常前面不加斜线/`
## 10-3：小程序tabBar的其他配置选项

 > 每个选项两张图片，分别是选中和未选中

 > 选中时绿色不好看，修改选中文字的颜色，设置selectedColor
  未选中的颜色通过color配置
>-  borderStyle设置成白色，视觉上去掉选项卡上方的黑线
>-  position:top 可以把选项卡放在页面顶部
```json
  "tabBar": {
    "list": [
    	...
    ],
    "selectedColor": "#333333",
    "color": "#999999",
    "borderStyle": "white",
    "position": "bottom"

  },
```
## 10-4：跳转到带有选项卡的页面需要使用switchTab

>  问题：依当前配置，当我们回到首页点击进入按钮，发现没有反应。？怎么又有反应了

>  当我们从welcome页面跳转到post64页面时，我们使用的是：
```js
    // 跳转页面
    wx.redirectTo({ 
        ...
      })
```

>  跳转到带有选项卡的页面的时候，不能使用redirectTo，使用switchTab
```js
    // 跳转页面
    // wx.redirectTo({ 
    wx.switchTab({  //10-4 跳转到有选项卡的页面
        ...
      })
```
## 10-5：初识自定义组件

>-  1.学会制作自定义组件（最重要）
>-  2.从服务器加载数据

### 什么是自定义组件：
>    比如text是原生组件，自定义组件与之没有差别，无非是制作自己需要的功能组件，也可以让其他人使用（如：LinUI）
    页面的实质也是自定义组件（初学者还是分开认识）
    写自定义组件是为了更好地封装
## 10-6：新建第一个自定义组件

`自定义组件的 粒度 比页面小`

>  在根目录新建文件夹：componengts，把所有自定义组件放在components里
  接下来和新建页面一样，新建一个文件夹post（组件的名字），右键新建Component（通常对自定义组件都命名index，这点和新建页面不同）打开LinUI自定义组件库，可以看到所有组件都是index
   当然并不是强制的，可以随意

>  打开index.js看到里面有一些预设的函数，结构和页面js文件类似，
  自定义组件也有自己的生命周期函数，只不过在初始化的时候没有写出来
## 10-7：创建自定义组件的属性

 > 自定义组件怎么用，参考使用LinUI，LinUI就是自定义组件。
  在`postx.json`文件里，通过配置我们可以获得一次重新命名自定义组件的机会,
  定义了自定义组件的名字之后，就可以直接在当前页面（post64.wxml）使用了。
```json
{
  "usingComponents": {
    "l-icon":"/miniprogram_npm/lin-ui/icon/index",
    "l-search-bar":"/miniprogram_npm/lin-ui/search-bar/index",
    "post":"/componengts/post/index"
  },
  "navigationBarBackgroundColor": "#ffd300",
  "navigationBarTitleText": "文与字"
}
```
 > 在组件的js文件里可以给组件配置属性，如src等等，（注意bind:tap不是属性，他是事件监听）
  属性的名字（text）写在properties下面，
  属性的类型（type），
  属性（text）的默认值（value）
```js
// componengts/post/index.js
import {local_database} from '../../data/data.js'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  		text:{       //未简化
   			type:String,
    		value:"123",
  		}
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
  }
})
```
## 10-8：自定义组件属性的简化定义

>  一个组件可以有多少个属性，由我们开发者决定

```js
  text:{       //未简化
    type:String,
    value:"123",
  }
```
```js
  text:Number // 简化
```

`简化定义的属性是没办法设置默认值 `
 
 > Number的值不去指定，它默认是0；String默认是空字符串
  默认值存在，只不过取的是 类型 的默认值

` properties里出现的属性也可以做数据绑定，不需要出现在data里`
## 10-9：自定义属性可以接收一个Object对象

>  把我们的post64页面修改成组件化的页面，
  用`<post />`代替其他标签（text，image等）
  一篇文章从`post-data-id`开始：
```html
<view data-post-id="{{item.postId}}" 
bind:tap="onGoToDetail" 
class="post-container">
...
```
  结束：
```html
</view>
```
> 从post64.wxml把这一段代码直接剪切到自定义组件post的wxml里，
    样式也搬到post组件里
```html
<!--componengts/post/index.wxml-->
<!-- 原来的代码是写在for循环里的，item指代数据的元素，所以把item替换成res -->
<view bind:tap="onTap" class="post-container">
  <view class="post-author-date">
    <image catch:tap="onMaxImage" class="post-author" src="{{res.avatar}}"></image>
    <text class="post-date">{{res.date}}</text>
  </view>
  <text class="post-title">{{res.title}}</text>
  <image class="post-image" src="{{res.imgSrc}}"></image>
  <text class="post-content">{{res.content}}</text>
  <view class="post-like">
    <l-icon class="post-like-image" color="#666" size="28" name="favor" />
    <text class="post-like-font">{{res.reading}}</text>
    <l-icon class="post-like-image" color="#666" size="32" name="eye" />
    <text class="post-like-font">1{{res.collection}}</text>
  </view>
</view>
```
> 接下来是属性，在post64.js的data里绑定一个变量res

>    如何把变量res里的text（123）传到自定义组件里面去 。
    post组件里有我们设置的data属性，它是可以给一个被绑定变量的：
```html
      <post data="{{res}}" />
```
>    在post组件的wxml文件里输入
      {{data.text}}
    我们可以在模拟器上看到“123”。
    说明这样是能够实现给属性传入Object值
## 10-10：分离文章到单独的自定义组件中

  >在postx页面我们已经把数据导入进了local_database：
```js
import {local_database} from '../../data/data.js'
```
>  所以我们只需要把local_database传入组件里

>  local_database是一个数组，post是一个组件，一个组件只能实现一篇文章，怎么解决：依然是循环，将代码
```html
<post res="{{item}}" /> 
```
>    放入postx.wxml的` <block wx:for> `中
```html
<!--pages/postx/postx.wxml-->
<block wx:for="{{local_database}}" wx:key="index" wx:for-item="item">
  <post res="{{item}}" />
</block>
```
>    为什么双花括号里是item：
      因为for循环遍历的是一个数组，数组里面每一个元素是用item来指代的


>  最后，打开调试器的Wxml，我们可以看到五个post组件
  通过自定义组件，把繁杂的代码封装到一个组件里，让页面代码更简洁
  （组件分离出去的好处以及一个变化）
## 10-11：自定义组件的嵌套应用
# 第11章 电影页面与实战自定义组件
## 思路
> 1.电影首页
>用组件的方式去思考页面的构成
    （组件化编程，一种思想，页面如何用组件实现，页面有几个组件
    可以用自定义组件的：
>- a.正在热映(即将上映、豆瓣Top250)
        在 components 新建文件夹 movie-list ，然后新建component
        把movie-list组件引用到movie页面里，方便我们在模拟器直观看到组件效果
        在movie.json里去定义movie-list,在movie.wxml里使用movie-list组件：
        ` <movie-list />`
          一部一部的电影：结构（样式）相同，数据不同的模式
          考虑把一部电影封装成一个自定义组件movie
          组件可以引用组件（movie-list引用movie）
            在movie-list的json里引用movie
        还可以往下分，评分也可以做成一个自定义组件
>- b.搜索

>  2.更多页面
  3.电影的详情页面
  4.搜索页面

>  数据来源不需要前端开发者来操心，
  前端开发者要处理数据，因为后端给的没有处理过的数据可能不满足需求
## 11-1：Movie自定义组件的构建

> 每一个movie组件里包含：
      一张图片，电影名字，电影评分（组件）

>编写顺序：从小到大，先写最内部的组件（评分组件），然后构建moive，最后构建movie-list
  因为LinUI里有 评分组件，所以开始写movie（wxml）
  注意力集中在要实现的元素上面，其他暂时不用理会
    给上一个容器view（一般最大的容器，样式名都是container）
    先静后动（自创数据），flex布局（观察分布）
```html
<!--componengts/movie/index.wxml-->
<view class="container">
    <image class="poster" src="">电影图片</image>
    <text class="title">电影标题</text>
    <view class="rate-container">
      <l-rate />
      <text class="score">电影评分</text>
    </view>
</view>
```
>样式（movie组件的wxss）；
        ?如何处理 标题过长
          在文本的容器title上利用几个样式进行控制
          想让文本变成省略号，文本需要被局限在一定的空间内
            给container容器设置宽度
```css
/* componengts/movie/index.wxss */

.container{
  display: flex;
  flex-direction: column;
  width: 200rpx; /* 限制容器空间 */
}

/* 包裹同一行的星星和数字 */
.rate-container{
  margin-top: 6rpx;
  display: flex;
  flex-direction: row;
  /* 水平主轴，垂直居中 */
  /* align-items: center; */
  align-items: baseline;/* 基线对齐 */
}

.poster{
  /* width: 200rpx; */
  width: 100%; /* 充满整个容器 */
  height: 270rpx;
  margin-bottom: 22rpx;
}

/* 把过长的文字变成省略号的样式 */
.title{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}

/* 调整间距 */
.score{
  margin-left: 20rpx;
  font-size: 24rpx;
}
```
## 11-2：使用LinUI评分组件快速实现分数预览

>在movie的json里引用LinUI的评分组件rate
    选中星星时的颜色：active-color
    未选中星星时的颜色：inActive-color
```html
  <l-rate disabled="{{true}}" 
  size="19" 
  score="{{movie.rating.stars/10}}" />

```
## 11-3：简易评分组件的实现思路
（时间问题，暂时略过）
## 11-4：巧用Flex布局的Space-Between进行分布排列

>构建movie-list组件
    三个movie横向排列，使用flex布局，并且用一个view把它们包裹
```html
<!--componengts/movie-list/index.wxml-->
<view class="container r-class">
  <view class="title-container">
    <text>正在热映</text>
    <text class="more-text">更多 ></text>
  </view>
  <view class="movie-container">
    <!-- <movie movie="{{movies[0]}}" /> -->
    <block wx:for="{{movies}}" wx:key="index">
      <movie movie="{{item}}" />
    </block>
  </view>
</view>
```
>...
    ‘正在热映’ 和 ‘更多’ 是两端分布：
```css
    justify-content: space-between;/* 两端分布 */

    justify-content: space-around;/* 等距分布 */
```

## 11-5：调整自定义组件间距

>  ‘更多’是蓝色，
  movies页面里有三个movie-list组件
```html
  <view wx:if="{{!searchResult}}">
  <movie-list data-type="in_theaters" 
  bind:tap="onGotoMore" 
  movies="{{inTheaters}}" 
  title="正在热映" 
  r-class="movie-list" />
  <movie-list data-type="coming_soon" bind:tap="onGotoMore" movies="{{comingSoon}}" title="即将上映" r-class="movie-list" />
  <movie-list data-type="top250" bind:tap="onGotoMore" movies="{{top250}}" title="豆瓣Top250" r-class="movie-list" />
</view>
```
>  三个movie-list组件间有间隔，分别设置样式
```css
/* movie-list样式 */
.movie-list{
  /*自定义组件里设置普通的class会导致margin无效*/
  margin-bottom: 30rpx;
  /* !important抢占优先级 */
  /* background-color: teal !important; */
}
```
>背景色改成黑色，让间距也有颜色，发现未成功，
  因为movie-list默认为透明，
  那就设置movie-list整个组件的颜色,
  发现间距还是没有，
  
  >调试器捕捉，发现根本没有出现间距，组件之间直接相连
  说明在movie-list设置的样式没有生效
  
 > 在自定义组件里尝试设置一些普通的class会让margin间距无效，解决方法：
  使用外部样式类
## 11-6：外部样式类externalClasses的使用

>在movie-list的js里定义一个外部样式类r-class，与我们在wxss里定义的‘container’一样，都是样式，在movie-list的整个view容器的container后面加上r-class（wxml文件里），

>然后在调试器发现报错：未找到movie-list 
    （当自定义组件出错时，没有通过编译，那么就相当于不存在
    
>出错原因：r-class定义在‘properties’里面了
      （properties下面只能定义属性
    修改：直接定义在Component下面（如此编译通过

  `注：目前外部样式类里面是没有定义任何东西的，由页面来写
  movie要使用，故在movie的wxml里写r-class`
```js
// componengts/movie-list/index.js
Component({
  //11-6 定义在正确位置（外部样式类）
  externalClasses:['r-class'],
  
  properties: {
    // 现在我们就拥有了一个外部样式类，名字叫r-class
    // externalClasses:['r-class'] // 错误位置定义 
  },
  data: {
  },
  methods: {
  }
})
```
>普通样式：class   外部样式：?-class

>movie-list组件的最外层使用了两个样式，
  并不是一定优先应用后面的，要使用需要的，
  可以通过!important强制优先级
```html
<!--componengts/movie-list/index.wxml-->
<view class="container r-class">
	...
</view>
```
## 11-7：小试牛刀访问服务端数据

> 使用属性properties来使每一个自定义组件的数据都不同
    直接在wxml里使用的组件上传入属性，同时要进行数据绑定

>小程序想要上线，需要有自己的https服务端

> movies.js的onLoad里调用wx.request，Object对象url需要接受API（服务器）地址，然后用success接收，在调试器里可以看到接收到的数据（data）：
    count：返回的数据有多少条
    start：从第几号开始返回
    subject：真正的数据
```js
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
      url: 'http://t.talelin.com/v2/movie/in_theaters',
      method:'GET',//不设置默认也为'GET'
      success:(res)=>{
        this.setData({
          inTheaters:res.data.subjects
        })
      }
    })
})
```
## 11-8：从服务端加载数据分页数据并传入自定义组件

>  （最好不要在自定义组件里发送网络请求）
  在自定义组件发送请求会降低自定义组件的通用性，
  所以我们在movies页面发送请求

>  页面需要三个数据，但是服务器返回了14个，
  >- 1.取前(或)三条： `res.data.subjects[0]`（或热度，或评分）
      有办法让服务器就给我们三条吗？
  >-  2.url后面可以附加查询参数：`?start=0&count=3`
       0号数据开始取，取三条

> 一般情况不用success，修改成await，顺便在onLoad前加async，然后发现wx.request不支持await（笑），继续使用success。

> 数据怎么传到自定义组件里，依然是属性：
    在properties新建属性movies，
```js
// componengts/movie-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       movies:Array, 
  },
})
```
>在movies.wxml里增加movies属性。
```html
<!--pages/movies/movies.wxml-->
<view wx:if="{{!searchResult}}">
  <movie-list data-type="in_theaters"
   movies="{{inTheaters}}" 
   title="正在热映" 
   r-class="movie-list" />
...
</view>
```
>movies里填入被绑定的变量，绑定的变量要在data中预定义

> 在success里绑定定义的空数组，
```js
    wx.request({
      url: 'http://t.talelin.com/v2/movie/in_theaters',
      method:'GET',//不设置默认也为'GET'
      data:{
        start:1,
        count:3
      },
      success:(res)=>{
        this.setData({
          inTheaters:res.data.subjects
        })
      }
    })
```
> 数据的传输：服务器->页面->movie-list->movie

>movie组件才是需要数据的：
    在movie组件的js文件里定义新的属性来接受数据
## 11-9：使用ES6箭头函数解决this指代的问题

>在movie组件的js文件里定义movie属性，
```js
  properties: {
    movie:Object,
  },
```
>在movie-list组件中引用的movie组件传入数据（movie-list的wxml）：
```html
 <movie movie="{{movies[0]}}" />
```

>也可以用block包裹三个movie组件，通过wx:for列表循环传入数据：
```html
 <block wx:for="{{movies}}">
```
  `补上 wx:key="index"`

>在movie组件里添加item，以便取到真实的数据：
```html
 <movie movie="{{item}}" />
```


>然后调试器里报错：
   ` TypeError: Cannot read property 'setData' of undefined`

> 在哪出错：
    `at success (movies.js? [sm]:21)`
```js
      success({
        this.setData({
          inTheaters:res.data.subjects
        })
      })
```
>是setData出了问题，this没有定义：
> 因为这一个this是在回调函数success里调用的，
    （直接在onLoad里调用没问题）
    回调函数里的this并不一定有setData，验证：
        console.log(this) // 打印this
      打印结果：
          undefined
  在onLoad里打印的this不是undefined。

> 解决方案：
>- 1.在回调函数外保存this：
        const that = this
      然后再调用that：
        that.setData({})
>- 2.使用箭头函数：
       success:(res)=>{}

>此时传入数据movie，相当于是传入到movie-list的子组件，
  接下来直接在movie组件里传数据

>数据的传输：
    服务器->页面->movie-list->movie（子组件）->movie 
## 11-10：绑定电影数据（1）

>把movie里我们之前写的假数据全部替换成服务器传过来的数据，
  数据绑定（之前编写文章列表时的方法）
  
>  score评分,服务器传的stars为35，实际为3.5，服务器传入的数据如何转化
  （以后会经常遇到，服务器给的数据，前端需要处理）
## 11-10：绑定服务端电影数据（2）

>stars传的35是一个字符串，并不是数字,直接除以10会出问题（js会自动转化，没有问题。。。）
```html
      <l-rate disabled="{{true}}" 
      size="19" 
      score="{{movie.rating.stars/10}}" />
```
> 另外的两种数据（服务端）处理方式：
    >- 1.通过wxs在wxml里编写Javascript代码 只支持es5（缺点：麻烦）
   >- 2.预先将数据（服务端）在js里处理好再传入wxml
  
## 11-12：完成即将上映和Top250

> movies.js里三个request不同的地方：
   ` url`

> 封装组件的好处，即将上映和top250可以很快速地设计出来

 > 接下来的电影详情页面也需要用到url，如果不对代码进行重构，
  那么代码会冗余

> 观察发现url前面部分都是相同的，称为基地址，可以提取出来，
  定义全局变量gBaseUrl存在app.js里
    在movies.js使用：`const app = getApp()` 来读取全局变量
  然后url可以修改为：
    `url: app.gBaseUrl + 'in_theaters?start=0&count=3',`
```js
    wx.request({
      url: app.gBaseUrl + 'in_theaters',
      method:'GET',//不设置默认也为'GET'
      data:{
        start:1,
        count:3
      },
      success:(res)=>{
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
```
# 第12章 电影列表与电影搜索
## 12-1：wx.rerquest的更多参数讲解

>可以把查询参数移到request里的data里，
   ` 注：只有request里的method设为‘GET’，url才能在data获取到参数，
    method不设置默认为‘GET’`

>  设计‘更多’，下滑加载
## 12-2：更多电影（1）分析‘更多电影’页面的逻辑

>  用自定义组件来构建，‘更多’本质上是movie组件的堆叠
  在page新建页面more-movie

>  在页面的json文件引入movie组件：
```json
{
  "usingComponents": {
    "movie-list":"/componengts/movie-list/index"
  }
}
```
  
>  自定义组件的名字定义权在组件使用方。

 > 在more-movie.wxml里使用movie组件，
```html
<!--pages/more-movie/more-movie.wxml-->
<view class="container">
  <block wx:for="{{movies}}" wx:key="index">
    <movie class="movie" movie="{{item}}" />
  </block>
</view>
```
>通过样式将过多的movie组件按照九宫形式排开，

>  因为movie组件之前已经设计完毕，
  所以可以直接从服务器加载数据，不需要再造假数据。

 > 一次不能请求太多数据，可以多次请求少量数据，
  当用户往下滑动时，再请求一次
  （服务器一般不会返回超过三十条数据
## 12-3：更多电影（2）加载更多数据

 > 点击跳转的实现可以延后， 先设计more-movie页面，
  利用列表循环实现三个不同数据的‘更多’页面

 > 在之前的movies.js里已经实现了加载数据（三条），
  把加载的数量改多，就可以在movie-list使用了。

  >不设置url的data，服务器传入数据数量取默认值

 > 在js的data里定义变量movies来接收服务器的数据。
  再通过block循环实现多个movie组件
```js
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
```
## 12-4：更多电影（3）Flex:Wrap的应用

>  给more-movie页面一个最大的容器view，
  样式依然是container，样式设计方案：
  >-  1.三个电影视作一排，做成一个组件，然后一行一个组件
      缺点：固定了一排三个电影，如果屏幕大是可以放更多电影的。
 >-   2.以movie组件作为一个基本元素，自适应一排电影数量：
      通过flex-wrap: wrap 来实现换行，
      通过padding设置容器内边距，实现整个电影页面和容器有间距。
      每部子电影也有间距，不建议设置单独组件的间距，flex布局从整体考虑。
```css
/* pages/more-movie/more-movie.wxss */

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  /*换行*/
  padding: 30rpx 28rpx;  /*内边距*/
  justify-content: space-between; /*平均分布*/
} 

.movie{
  margin-bottom: 30rpx; /*下边距*/
}
```

## 12-5：更多电影（4）Flex布局对普通样式类的影响

>  使用`justify-content: space-between `来实现组件平均分布。

>  自定义组件如果不使用flex布局，margin会失效，在设计movie-list时遇到过，more-movie因为使用了flex布局，所以没出问题。

>  建议：尽可能地去给容器应用一些flex布局，避免出现样式无效的情况。

## 12-6：更多电影（5）加载不同电影类型的数据

 > movies.wxml里设置bind:tap捕捉点击，
```html
   <movie-list data-type="in_theaters" 
   bind:tap="onGotoMore" 
   movies="{{inTheaters}}" 
   title="正在热映" 
   r-class="movie-list" />
```
>  在movies.js里定义onGotoMore函数来实现点击‘更多’跳转
```js
  onGotoMore(event){
    // console.log(event)
    const type = event.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type=' + type,
    })
  },
```
 > 在url传入参数type，使分别点击三个‘更多’跳转到的页面不同，
  在movies.wxml里自定义属性type： `data-type="" ` 来获取用户点击的是哪一个moive-list
  
> 打印onGotoMore的event，在currentTarget: dataset: 可以看到
    `{type: "in_theaters"}`
  通过
   ` const type = event.currentTarget.dataset.type `
    来获取type
  把type附加到url上。
  在more-movie.js里获取type，
## 12-7：使用LinUI快速构建搜索栏

 > 在movies.json引入search-bar，
```json
{
  "usingComponents": {
    "movie-list":"/componengts/movie-list/index",
    "l-search-bar":"/miniprogram_npm/lin-ui/search-bar/index",
    "movie":"/componengts/movie/index"
  }
}
```
>  在movies.wxml添加`<l-search-bar />`
```html
<l-search-bar l-class="ex-search-bar"/>
```
>  使用外部样式类改变搜索栏高度，
```css
.ex-search-bar{
  height: 90rpx !important;
}
```
 > 通过在l-search-bar设置placeholder来实现提示性搜索文字。
```html
<l-search-bar l-class="ex-search-bar" placeholder="" />
```
 > show-cancel隐藏‘取消’二字
## 12-8：向服务器请求搜索数据

>  使用bind:linconfirm="onConfirm"获取用户输入，
```html
<l-search-bar bind:linconfirm="onConfirm" 
bg-color="" 
l-class="ex-search-bar"
placeholder="玉龙雪山" />
```
再提交到服务器，在js里定义onConfirm函数，
```js
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
```
>  打印onConfirm的event，在调试器看到detail有用户输入（value）。
  request里url查询参数q，查询的是用户的输入。
## 12-9：搜索结果与电影数据的切换显示

>success接收查询结果，为了实现在同一个页面里既展示电影又展示搜索结果，使用条件渲染。
  当用户没有搜索时，显示普通页面（wx:if）,
  当用户搜索后，显示搜索结果（wx:else）
```html
<view wx:if="{{!searchResult}}">
  <movie-list  />
  <movie-list  />
  <movie-list  />
</view>

<view class="search-container" wx:else>
  <block >
    <movie  />
  </block>
</view>
```
 > 在js文件的data里创建条件渲染控制变量 `searchResult:false`，默认false表示没有搜索。

>  当搜索结果触发后，使用：` this.setData({searchResult:true})`
>把searchResult更改为true，
  （如果this.setData写在success里，当网络中断时就不会触发success，而是会触发fail）
## 12-10：显示搜索的电影数据

>搜索结果类似more-movie的九宫格排布,
  通过数据绑定把数据填充到搜索结果的view

>movies.js的data里定义变量searchData来保存数据，
  在success里使用：
        `this.setData({searchData:res.data.subjects})`
  来把数据传入searchData

>  补充：
  调试器的AppData里可以看到一个页面所有被绑定的数据

>  进入搜索结果页面后如何返回呢，
  把之前我们隐藏的‘取消’重新放出来（开门放取消）：
    把show-cancel="{{false}}"删除

>之后设计用户点击‘取消’返回之前的页面

## 12-11：修复Space-Between2个元素两端分布的问题

>  去LinUI文档里看，发现bind:lincancel可以获取用点击取消的事件。
  在wxml里添加`bind:lincancel="onSearchCancel"`
  js里定义`onSearchCancel`回调函数
```js
  onSearchCancel(event){
    this.setData({
      searchResult:false
    }) 
  },
```
>  当我们搜索‘你的名字’时，只有两部电影，并且两部电影两端分布，中间有很大的间距，很不美观。
  原因是我们在样式的flex布局里设置了：
   ` justify-content: space-between; /*平均分布*/`
  当搜索结果为三个时没有问题，两个就会分开两边排布（包括最后一行有两个元素时的情况）

>解决：
    建立一个伪类：
```css
    .search-container::after{
      content:'';
      width:200rpx
    }
    //width为组件（movie）的宽度。
```
# 第13章 电影详情与滑动加载数据、下拉刷新数据
## 13-1：上滑加载更多数据（1）

>  问题：
    开发者如何获取到用户已经滑动到底部的信息

>    使用页面js文件里自带的函数：
```js 
    // 页面上拉触底事件的处理函数
    onReachBottom() {
    },
```
>    将onLoad里的代码复制到onReachBottom里，调试发现触底没有反应，原因是type是定义在onLoad里的局部变量。
    
>    在data里添加`_type:'',`
    在onLoad里使用
   `   this._type = type `
    保存获取到的type值。

>    在onReachBottom里实使用`this._type`获取type值。
    
 >   上滑触底后，确实更新了页面，但是效果是新的12个数据替换了12个旧的数据。
    期望效果：
      原数据依然存在，新数据追加在后面
    
 >   data里定义一个变量，变量用来保存所有的数据，
    这个变量就是movies,
    简单的加号不行（我试了），要用concat函数
    
>    新的问题：
      加载的数据是重复的12-23号，因为把start设置成了固定的12。
```js
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
```
## 13-2：上滑加载更多数据（2）

>  start可以设置为当前movies数组的长度。

 > 实现正在加载中提示，调用：
 `   wx.showNavigationBarLoading()`
  
  >当页面需要加载新的数据时才显示，加载完成后关闭，
  在requset请求发送前调用
       ` wx.showNavigationBarLoading()`
  在success里调用
       ` wx.hideNavigationBarLoading()`
## 13-3：下拉刷新数据（1）

>  在json文件里配置，
`  "enablePullDownRefresh": true`
  
>  开始请求数据时显示刷新动画，请求到数据后关闭刷新动画
```js
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
```
## 13-4：配置标题与动态配置标题

>  在success里调用
`wx.stopPullDownRefresh()`
取消页面刷新动画

>  动态标题，一个页面，根据数据的变化而改变标题，
  配置`  "navigationBarTitleText": ""`是固定的。

>  在onReady里调用
>```js
>      wx.setNavigationBarTitle({
>       title: 'title',
>      })
>```
  >可以实现动态改变导航栏标题

>  在页面初始化时，我们已经传入了type，可以利用type。

>  定义title，使用switch来确定title：
```js
    let title = '电影'
    switch(this.data._type){
      case'in_theaters':
      title = '正在热映'
        break
      case'coming_soon':
      title = '即将上映'
        break
      case'top250':
      title = '豆瓣Top250'
        break
    }
```
 
## 13-5：谈组件的独立性

  >新建电影详情页面，

## 13-6自定义组件的自定义事件产生

>    在自定义组件post的js文件里的methods方法定义的onGoToDetail，会使组件没有复用性，因为跳转的页面不是都叫post-detail。
  自定义组件负责展示内容，组件的开发者不能决定用户的操作。
  点击之后做什么事情由使用者来决定。

>  bind:tap就是小程序内置的自定义事件。
  
>  通过  this.triggerEvent() 产生自定义事件
  自定义事件名：posttap，在post64.wxml的`<block>`里使用了post组件，所以设置bind监听，
  监听我们的自定义事件：
 `   bind:posttap`
  
 >   bind:poattap = "onGoToDetail"
## 13-7：获取自定义组件的detail参数

>  triggerEvent获取到的参数存放在detail里
## 13-9：电影详情页面（1）

  
