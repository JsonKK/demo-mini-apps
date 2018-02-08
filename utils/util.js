// 引入省市县数据
var area = require('./area.js');

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 城市三级联动方法封装
 * self:微信作用域this
 * type:1是传中文，2是传索引
 */
var oprateCityGroup = function(arr,self,type){
  area.getAreaInfo(function (areaArr) {

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
    
    if(type == 1){
      if(!(arr instanceof Array) || arr.length != 3){
        arr = ['北京市','市辖区','东城区'];
        isNull = true;
      }
    }else if(type == 2){
      if(!(arr instanceof Array) || arr.length != 3){
        arr = [0,0,0];
      }
    }

    // 判断省
    for(var i = 0;i < areaArr.length;i++){
      if(areaArr[i].di == '00' && areaArr[i].xian == '00'){
        l.provinces.push(areaArr[i]);
        if(type == 1 && nullPro){
          if(l.provinces.length > 0 && areaArr[i].name == arr[0]){
            l.index[0] = l.provinces.length-1;
            nullPro = false;
          }else{
            l.index[0] = 0;
          }
        }
        else if(type == 2){
          (arr[0]>l.provinces.length-1) ? l.index[0] = 0 : l.index[0] = arr[0];
        }
        
      }
    }
    self.setData({
      provinces: l.provinces
    })

    // 判断市
    var provincesIndex = l.index[0];
    for(var j = 0;j < areaArr.length;j++){
      if (areaArr[j].xian == "00" && areaArr[j].sheng == l.provinces[provincesIndex].sheng && areaArr[j].di != "00") {
        l.citys.push(areaArr[j]);
        if(type == 1 && nullCity){
          if(l.citys.length > 0 && areaArr[j].name == arr[1]){
            l.index[1] = l.citys.length-1;
            nullCity = false;
          }else{
            l.index[1] = 0;
          }
        }else if(type == 2){
           (arr[1]>l.citys.length-1) ? l.index[1] = 0 : l.index[1] = arr[1];
        }
      }
    }
    self.setData({
      citys: l.citys,
      
    })
    if(l.citys.length == 0){
      l.index[1] = '';
    }
    // 判断县
    var cityIndex = l.index[1];
    for(var x = 0;x < areaArr.length;x++){
      if (areaArr[x].xian != "00" && areaArr[x].sheng == l.provinces[provincesIndex].sheng && areaArr[x].di == l.citys[cityIndex].di) {
        l.countys.push(areaArr[x]);
        if(type == 1 && nullCountry){
          if(l.countys.length > 0 && areaArr[x].name == arr[2]){
            l.index[2] = l.countys.length-1;
            nullCountry = false;
          }else{
            l.index[2] = 0;
          }
        }else if(type == 2){
           // l.index[2] = arr[2] || 0;
           (arr[2]>l.countys.length-1) ? l.index[2] = 0 : l.index[2] = arr[2];
        }
      }
    }
    if(l.countys.length == 0){
      l.index[2] = '';
    }
    var formData;
    (self.data.formData instanceof Object) ? formData = self.data.formData : formData = {};
    // 如果不是新建，则对地址栏信息赋值
    if(type != 1 || !isNull){
      (l.provinces[l.index[0]] instanceof Object && l.provinces[l.index[0]].name) ? formData.province = l.provinces[l.index[0]].name : formData.province = '';
      (l.citys[l.index[1]] instanceof Object && l.citys[l.index[1]].name) ? formData.city = l.citys[l.index[1]].name : formData.city = '';
      (l.countys[l.index[2]] instanceof Object && l.countys[l.index[2]].name) ? formData.county = l.countys[l.index[2]].name : formData.county = '';
    }
    self.setData({
      countys: l.countys,
      value : l.index,
      formData:formData
    })
  });
}
module.exports = {
  formatTime: formatTime,
  oprateCityGroup : oprateCityGroup
}
