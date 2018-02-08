Page({

    /**
* 页面的初始数据
*/
    data: {
        // isAdministrators:true
        isHidden: true,
        titleMsg: " ",
        inputHidden: false,
        cancleBtn: false,
        inputPlaceHolder: ""
    },

    onMyEvent: function(e) {
        var that = this;
        console.log("e.detail :", e.detail)

        that.setData({
            isHidden: true,
            // inputHidden: false
        })

    },

    showCompomentDialog: function() {
        var that = this;
        that.setData({
            isHidden: false,
            titleMsg: "这样真的好吗",
            // inputPlaceHolder: "请输入想要发送的内容",
            inputHidden: true,
            // cancleBtn: true,
        })
    }
})