// 引入省市县数据
var area = require('./area.js');

// 页面参数
var pageParams = {};

// 私有方法
var privateMethods = {
	/**
	 * 城市三级联动方法封装
	 * self:微信作用域this
	 * type:1是传中文，2是传索引
	 * ensure:是否是确认按钮,1为确认,2为取消
	 */
	oprateCityGroup : function(arr, self, type, ensure) {
		area.getAreaInfo(function(areaArr) {
			// 缓存省市县数据
			var l = {};
			l.provinces = [];
			l.citys = [];
			l.countys = [];
			l.index = [];

			// 用于判断arr是否为空
			var isNull = false;

			// 用于省市县回填数据时候判断，如果省市县索引被赋值则为false
			var nullPro = true;
			var nullCity = true;
			var nullCountry = true;

			if(type == 1) {
				if(!(arr instanceof Array) || arr.length != 3) {
					arr = ['北京市', '市辖区', '东城区'];
					isNull = true;
				}
			} else if(type == 2) {
				if(!(arr instanceof Array) || arr.length != 3) {
					arr = [0, 0, 0];
				}
			}
			if(ensure == 2) {
				isNull = true;
			}

			// 判断省
			for(var i = 0; i < areaArr.length; i++) {
				if(areaArr[i].di == '00' && areaArr[i].xian == '00') {
					l.provinces.push(areaArr[i]);
					if(type == 1 && nullPro) {
						if(l.provinces.length > 0 && areaArr[i].name == arr[0]) {
							l.index[0] = l.provinces.length - 1;
							nullPro = false;
						} else {
							l.index[0] = 0;
						}
					} else if(type == 2) {
						(arr[0] > l.provinces.length - 1) ? l.index[0] = 0: l.index[0] = arr[0];
					}

				}
			}
			self.setData({
				provinces: l.provinces
			})

			// 判断市
			var provincesIndex = l.index[0];
			for(var j = 0; j < areaArr.length; j++) {
				if(areaArr[j].xian == "00" && areaArr[j].sheng == l.provinces[provincesIndex].sheng && areaArr[j].di != "00") {
					l.citys.push(areaArr[j]);
					if(type == 1 && nullCity) {
						if(l.citys.length > 0 && areaArr[j].name == arr[1]) {
							l.index[1] = l.citys.length - 1;
							nullCity = false;
						} else {
							l.index[1] = 0;
						}
					} else if(type == 2) {
						(arr[1] > l.citys.length - 1) ? l.index[1] = 0: l.index[1] = arr[1];
					}
				}
			}
			if(l.citys.length == 0) {
				l.index[1] = '';
			}
			self.setData({
				citys: l.citys,

			})

			// 判断县
			var cityIndex = l.index[1];
			for(var x = 0; x < areaArr.length; x++) {
				if(areaArr[x].xian != "00" && areaArr[x].sheng == l.provinces[provincesIndex].sheng && areaArr[x].di == l.citys[cityIndex].di) {
					l.countys.push(areaArr[x]);
					if(type == 1 && nullCountry) {
						if(l.countys.length > 0 && areaArr[x].name == arr[2]) {
							l.index[2] = l.countys.length - 1;
							nullCountry = false;
						} else {
							l.index[2] = 0;
						}
					} else if(type == 2) {
						(arr[2] > l.countys.length - 1) ? l.index[2] = 0: l.index[2] = arr[2];
					}
				}
			}
			if(l.countys.length == 0) {
				l.index[2] = '';
			}
			self.setData({
				value: l.index,
				countys: l.countys
			});
			var formData;
			(self.data.formData instanceof Object) ? formData = self.data.formData: formData = {};
			// 如果不是新建，则对地址栏信息取值
			if(type != 1 || !isNull) {
				(l.provinces[l.index[0]] instanceof Object && l.provinces[l.index[0]].name) ? formData.province = l.provinces[l.index[0]].name: formData.province = '';
				(l.citys[l.index[1]] instanceof Object && l.citys[l.index[1]].name) ? formData.city = l.citys[l.index[1]].name: formData.city = '';
				(l.countys[l.index[2]] instanceof Object && l.countys[l.index[2]].name) ? formData.county = l.countys[l.index[2]].name: formData.county = '';
			}
			// 如果是确定按钮则对省市县复制
			if(ensure === 1) {
				self.setData({
					formData: formData
				});
			}

		});
	}
};

// 远程操作
var remoteOperate = {};

Component({
	/**
	 * 用于外部和组件自身使用的数据
	 * showArea:是否显示弹窗
	 * isBuild:是否新建
	 * addressText:地址文本框水印文本
	 * sortValue:存储省市县索引文本或者数字
	 */
	properties : {
		showArea : {
			type : Boolean,
			value : false
		},
		isBuild : {
			type : Boolean,
			value : true
		},
		addressText:{
			type : String,
			value : ' '
		},
		sortValue : {
			type : Array,
			value : [],
			// 第一个参数是变化的值，第二个参数是旧的值
			observer:function(newArr,oldArr){
				var that = this;
				this.setData({
					value : newArr
				});
				privateMethods.oprateCityGroup(newArr,that,2,2);
			}
		}

	},
	attached:function(){
		var that = this;
		privateMethods.oprateCityGroup(that.data.value,that,1,2);
	},
	/**
	 * 组件自身调用的数据
	 * addressDis:explain
	 */
	data : {
		addressDis:false,
		shortValue:'',
		provinces:'',
		citys:'',
		countys:'',
		value:''
	},

	// 组件自身方法
	methods : {
		/**
		 * 三联动显隐
		 * arguments:explain
		 */
		changeAreaBox : function(e){
		  var show  = !this.properties.showArea;
		  var type,shortValue,addressText;
		  var addressDis = !this.data.addressDis;
		  var name = e.target.dataset.name;
		  // 判断是否为新建
		  (this.properties.isBuild) ? type = 2 : type = 1;
		  if(this.properties.addressText == ' '){
		    addressText = '请填写详细地址';
		  }else if(this.properties.addressText == '请填写详细地址'){
		    addressText = ' ';
		  }
		  this.setData({
		    showArea : show,
		    addressText:addressText,
		    addressDis:addressDis
		  });
		  // 如果弹窗显示则缓存当前value值
		  if(show && name !='submit'){
		    shortValue = this.data.value;
		    this.setData({
		      shortValue : shortValue
		    });
		  }
		  // 如果弹窗关闭且不是确认关闭，把缓存的value值复制给使用的value
		  else if(!show && name !='submit'){
		    privateMethods.oprateCityGroup(this.data.shortValue,this,type,2);
		  }
		  // 确定按钮操作
		  if(name && name == 'submit'){
		    privateMethods.oprateCityGroup(this.data.value,this,2,1);
		  }
		},

		/**
		 * 阻止冒泡
		 * arguments:explain
		 */
		returnChangeAreaBox:function(){
		  return false;
		},
		/**
		* 地址弹窗滑动事件
		* arguments:explain
		*/
		bindChange: function (e) {
			var val = e.detail.value;
			privateMethods.oprateCityGroup(val,this,2,2);
		}
	}

});