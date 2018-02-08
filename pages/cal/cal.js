/**
 * 计算器demo
 * 
 * @author lsj
 * @since 2017-11-30
 */

// 页面参数
var pageParams = {};

// 私有方法
var privateMethods = {
  /**
   * 方法集合
   * arguments:explain
   */
  counterGather : function(self,index){
    var that = this;
    // pagedata
    var data = self.data;
    // 按钮信息
    var totalData = data.totalData;
    // 显示器结果
    var resultNum = data.resultNum;
    // 符号之前存储的数值
    var beforeNum  = data.beforeNum;
    // 符号之后的数值
    var afterNum  = data.afterNum;
    // 操作符号
    var symbol  = data.symbol;
    // 符号字符串
    var symbolStr  = data.symbolStr;
    // 当前操作对象
    var obj = totalData[index];
    // 当前操作对象类型
    var type = obj.type;

    // 如果是数值类型
    if(type === 'num'){
      if(resultNum-0 === 0 || (resultNum !== beforeNum && !symbol)){
        resultNum = '';
      }
      var shortData = resultNum + obj.value;
      that.valuationMath(self,shortData,symbol);
    }

    // 如果是运算符类型
    if(type === 'sign'){
      if(!symbol){
        self.setData({
          beforeNum: resultNum,
          resultNum: 0
        });
      }
      self.setData({
        symbol: obj.name,
        symbolStr : obj.value
      });
    }

    // 如果是操作类型
    if(type == 'oprate'){
        var value = obj.value;
        var shortResult = '';
        // 等号操作
        if(value === 'equal'){
          switch(symbolStr){
            case 'add':
              shortResult = (beforeNum-0) + (afterNum-0);
              break;
            case 'subtract':
              shortResult = beforeNum - afterNum;
              break;
            case 'multiply':
              shortResult = beforeNum * afterNum;
              break;
            case 'divide':
              shortResult = beforeNum / afterNum;
              break;
            default:
              console.log('is wrong');
              break;
          }
          self.setData({
            symbol: '',
            symbolStr : '',
            resultNum : shortResult,
            beforeNum : ''
          });
        }
        // 正负号操作
        if(value === 'shift' && resultNum !== 0){
          shortResult = -resultNum;
          that.valuationMath(self,shortResult,symbol);
        }

        // 屏幕回0操作
        if(value === 'zero' && resultNum !== 0){
          shortResult = 0;
          that.valuationMath(self,shortResult,symbol);
        }

        // 退格操作
        if(value === 'backspace' && resultNum !== 0){
          shortResult = resultNum;
          if(shortResult.length>1){
            shortResult = shortResult.split('').splice(0,shortResult.length-1).join('');
          }else{
            shortResult = 0;
          }
          that.valuationMath(self,shortResult,symbol);
        }

        // 清屏操作
        if(value === 'clear'){
          self.setData({
            resultNum : 0,
            beforeNum : '',
            afterNum : '',
            symbol : '',
            symbolStr : ''
          });
        }

        // 小数点操作
        if(value === 'doc'){
          shortResult = resultNum;
          var shortResultArr = shortResult.split('');
          var indexDoc = shortResultArr.indexOf('.');
          if(indexDoc === -1){
            shortResult = shortResult + '.';
            that.valuationMath(self,shortResult,symbol);
          }
        }
    }

  },
  valuationMath : function(self,val,type){
    if(type){
      self.setData({
        afterNum : val
      });
    }else{
      self.setData({
        beforeNum : val
      });
    }
    self.setData({
        resultNum : val
    });
  }
};

// 远程操作
var remoteOperate = {};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalData : [
      {id:'id1',value:'backspace',class:'dark',name:'退格',event:'btnClick',type:'oprate'},
      {id:'id2',value:'clear',class:'dark',name:'清屏',event:'btnClick',type:'oprate'},
      {id:'id3',value:'shift',class:'dark',name:'+/-',event:'btnClick',type:'oprate'},
      {id:'id4',value:'add',class:'dark',name:'+',event:'btnClick',type:'sign'},
      {id:'id5',value:'7',class:'default',name:'7',event:'btnClick',type:'num'},
      {id:'id6',value:'8',class:'default',name:'8',event:'btnClick',type:'num'},
      {id:'id7',value:'9',class:'default',name:'9',event:'btnClick',type:'num'},
      {id:'id8',value:'subtract',class:'default',name:'-',event:'btnClick',type:'sign'},
      {id:'id9',value:'4',class:'default',name:'4',event:'btnClick',type:'num'},
      {id:'id10',value:'5',class:'default',name:'5',event:'btnClick',type:'num'},
      {id:'id11',value:'6',class:'default',name:'6',event:'btnClick',type:'num'},
      {id:'id12',value:'multiply',class:'default',name:'*',event:'btnClick',type:'sign'},
      {id:'id13',value:'1',class:'default',name:'1',event:'btnClick',type:'num'},
      {id:'id14',value:'2',class:'default',name:'2',event:'btnClick',type:'num'},
      {id:'id15',value:'3',class:'default',name:'3',event:'btnClick',type:'num'},
      {id:'id16',value:'divide',class:'default',name:'/',event:'btnClick',type:'sign'},
      {id:'id17',value:'0',class:'default',name:'0',event:'btnClick',type:'num'},
      {id:'id18',value:'doc',class:'default',name:'.',event:'btnClick',type:'oprate'},
      {id:'id19',value:'zero',class:'default',name:'AC',event:'btnClick',type:'oprate'},
      {id:'id20',value:'equal',class:'default',name:'=',event:'btnClick',type:'oprate'},
    ],
    resultNum : 0,
    beforeNum : '',
    afterNum : '',
    symbol : '',
    symbolStr : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
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
    
  },

  /**
   * 按钮点击事件
   * arguments:explain
   */
   
  btnClick : function(e){
    var index = e.currentTarget.dataset.index;
    var self = this;
    privateMethods.counterGather(self,index);
  }
   
})
