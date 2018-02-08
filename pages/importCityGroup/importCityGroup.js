/**
 * 调用自定义组件
 * 
 * @author name
 * @since xxxx-xx-xx
 */


// 页面参数
var pageParams = {};

// 私有方法
var privateMethods = {};

// 远程操作
var remoteOperate = {};

Page({

  changeAreaBox:function(){
    this.setData({
      isShowArea : true
    });
  },

  /**
   * 页面的初始数据
   */
  data: {
    isShowArea : false,
    isBuild:true,
    addressText:' '
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
