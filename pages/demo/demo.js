
Page({
  data: {
    objectArray: [
      { id: 5, unique: 'unique_5' , checked:true },
      { id: 4, unique: 'unique_4' , checked:true },
      { id: 3, unique: 'unique_3' , checked:true },
      { id: 2, unique: 'unique_2' , checked:true },
      { id: 1, unique: 'unique_1' , checked:true },
      { id: 0, unique: 'unique_0' , checked:true },
    ],
    numberArray: [1, 2, 3, 4],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay:false,
    interval:5000,
    duration:1000
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  checkboxChange : function(e){
    this.data.objectArray[e.currentTarget.dataset.index].checked = e.detail.value;
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  changeSwiper : function(e){
    console.log(e);
  },
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  }
})