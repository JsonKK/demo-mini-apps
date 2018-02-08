
// 页面参数
var pageParams = {};

// 私有方法
var privateMethods = {};

// 远程操作
var remoteOperate = {};

var reason = "我不想买了";

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		reasons : [
			'我不想买了',
			'收货人信息有误',
			'重复下单',
			'卖家缺货',
			'付款遇到问题',
			'其他原因'
		],
		value : [0],
		isShowReason : true
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	},

	/**
	 * 按钮操作
	 * @param {Object} e
	 */
	btns: function(e) {
		var that = this;
		
		var enmu = e.currentTarget.dataset.enmu;
		
		btnUtil.operate(that, {
			enmu : enmu
		});
	},
	
	/**
	 * 理由取消按钮
	 */
	reasonBtn : function(e) {
		var type = e.currentTarget.dataset.type;
		
		if(type == "confirm") {
			// 确定
			console.log("确定" + this.data.value + reason);
			
		}else{
			console.log("取消" + this.data.value + reason);
		}
		
		this.setData({
			isShowReason : false,
			value : 0
		});
	},
	
	pickerChange : function(e) {
		reason = this.data.reasons[e.detail.value[0]];
		this.data.value = e.detail.value[0];
	},
	
	
	showPicker : function() {
		this.setData({
			isShowReason : true
		});		
	}	
})