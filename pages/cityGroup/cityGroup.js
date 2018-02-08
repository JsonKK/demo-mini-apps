/**
 * 城市三级联动
 * 
 * @author 赖苏杰
 * @since xxxx-xx-xx
 */

// 通用工具类
var utils = require('../../utils/util.js');

// 页面参数
var pageParams = {};

// 私有方法
var privateMethods = {};

// 远程操作
var remoteOperate = {};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
  },
  bindChange: function(e) {
    const val = e.detail.value
    utils.oprateCityGroup(val,this,2);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    utils.oprateCityGroup([],this,1);
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
