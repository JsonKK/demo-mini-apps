
function getAreaInfo(callBack){
var str = [
    {
        "code": "110000", 
        "sheng": "11", 
        "di": "00", 
        "xian": "00", 
        "name": "北京", 
        "level": 1
    }, 
    {
        "code": "110100", 
        "sheng": "11", 
        "di": "01", 
        "xian": "00", 
        "name": "北京市", 
        "level": 2
    }, 
    {
        "code": "110101", 
        "sheng": "11", 
        "di": "01", 
        "xian": "01", 
        "name": "东城区", 
        "level": 3
    }, 
    {
        "code": "110102", 
        "sheng": "11", 
        "di": "01", 
        "xian": "02", 
        "name": "西城区", 
        "level": 3
    }, 
    {
        "code": "110105", 
        "sheng": "11", 
        "di": "01", 
        "xian": "05", 
        "name": "朝阳区", 
        "level": 3
    }, 
    {
        "code": "110106", 
        "sheng": "11", 
        "di": "01", 
        "xian": "06", 
        "name": "丰台区", 
        "level": 3
    }, 
    {
        "code": "110107", 
        "sheng": "11", 
        "di": "01", 
        "xian": "07", 
        "name": "石景山区", 
        "level": 3
    }, 
    {
        "code": "110108", 
        "sheng": "11", 
        "di": "01", 
        "xian": "08", 
        "name": "海淀区", 
        "level": 3
    }, 
    {
        "code": "110109", 
        "sheng": "11", 
        "di": "01", 
        "xian": "09", 
        "name": "门头沟区", 
        "level": 3
    }, 
    {
        "code": "110111", 
        "sheng": "11", 
        "di": "01", 
        "xian": "11", 
        "name": "房山区", 
        "level": 3
    }, 
    {
        "code": "110112", 
        "sheng": "11", 
        "di": "01", 
        "xian": "12", 
        "name": "通州区", 
        "level": 3
    }, 
    {
        "code": "110113", 
        "sheng": "11", 
        "di": "01", 
        "xian": "13", 
        "name": "顺义区", 
        "level": 3
    }, 
    {
        "code": "110114", 
        "sheng": "11", 
        "di": "01", 
        "xian": "14", 
        "name": "昌平区", 
        "level": 3
    }, 
    {
        "code": "110115", 
        "sheng": "11", 
        "di": "01", 
        "xian": "15", 
        "name": "大兴区", 
        "level": 3
    }, 
    {
        "code": "110116", 
        "sheng": "11", 
        "di": "01", 
        "xian": "16", 
        "name": "怀柔区", 
        "level": 3
    }, 
    {
        "code": "110117", 
        "sheng": "11", 
        "di": "01", 
        "xian": "17", 
        "name": "平谷区", 
        "level": 3
    }, 
    {
        "code": "110118", 
        "sheng": "11", 
        "di": "01", 
        "xian": "18", 
        "name": "密云区", 
        "level": 3
    }, 
    {
        "code": "110119", 
        "sheng": "11", 
        "di": "01", 
        "xian": "19", 
        "name": "延庆区", 
        "level": 3
    }, 
    {
        "code": "110120", 
        "sheng": "11", 
        "di": "01", 
        "xian": "20", 
        "name": "中关村科技园区", 
        "level": 3
    }, 
    {
        "code": "120000", 
        "sheng": "12", 
        "di": "00", 
        "xian": "00", 
        "name": "天津", 
        "level": 1
    }, 
    {
        "code": "120100", 
        "sheng": "12", 
        "di": "01", 
        "xian": "00", 
        "name": "天津市", 
        "level": 2
    }, 
    {
        "code": "120101", 
        "sheng": "12", 
        "di": "01", 
        "xian": "01", 
        "name": "和平区", 
        "level": 3
    }, 
    {
        "code": "120102", 
        "sheng": "12", 
        "di": "01", 
        "xian": "02", 
        "name": "河东区", 
        "level": 3
    }, 
    {
        "code": "120103", 
        "sheng": "12", 
        "di": "01", 
        "xian": "03", 
        "name": "河西区", 
        "level": 3
    }, 
    {
        "code": "120104", 
        "sheng": "12", 
        "di": "01", 
        "xian": "04", 
        "name": "南开区", 
        "level": 3
    }, 
    {
        "code": "120105", 
        "sheng": "12", 
        "di": "01", 
        "xian": "05", 
        "name": "河北区", 
        "level": 3
    }, 
    {
        "code": "120106", 
        "sheng": "12", 
        "di": "01", 
        "xian": "06", 
        "name": "红桥区", 
        "level": 3
    }, 
    {
        "code": "120110", 
        "sheng": "12", 
        "di": "01", 
        "xian": "10", 
        "name": "东丽区", 
        "level": 3
    }, 
    {
        "code": "120111", 
        "sheng": "12", 
        "di": "01", 
        "xian": "11", 
        "name": "西青区", 
        "level": 3
    }, 
    {
        "code": "120112", 
        "sheng": "12", 
        "di": "01", 
        "xian": "12", 
        "name": "津南区", 
        "level": 3
    }, 
    {
        "code": "120113", 
        "sheng": "12", 
        "di": "01", 
        "xian": "13", 
        "name": "北辰区", 
        "level": 3
    }, 
    {
        "code": "120114", 
        "sheng": "12", 
        "di": "01", 
        "xian": "14", 
        "name": "武清区", 
        "level": 3
    }, 
    {
        "code": "120115", 
        "sheng": "12", 
        "di": "01", 
        "xian": "15", 
        "name": "宝坻区", 
        "level": 3
    }, 
    {
        "code": "120116", 
        "sheng": "12", 
        "di": "01", 
        "xian": "16", 
        "name": "滨海新区", 
        "level": 3
    }, 
    {
        "code": "120117", 
        "sheng": "12", 
        "di": "01", 
        "xian": "17", 
        "name": "宁河区", 
        "level": 3
    }, 
    {
        "code": "120118", 
        "sheng": "12", 
        "di": "01", 
        "xian": "18", 
        "name": "静海区", 
        "level": 3
    }, 
    {
        "code": "120225", 
        "sheng": "12", 
        "di": "02", 
        "xian": "25", 
        "name": "蓟州区", 
        "level": 3
    }, 
    {
        "code": "120226", 
        "sheng": "12", 
        "di": "02", 
        "xian": "26", 
        "name": "滨海高新区", 
        "level": 3
    }, 
    {
        "code": "130000", 
        "sheng": "13", 
        "di": "00", 
        "xian": "00", 
        "name": "河北省", 
        "level": 1
    }, 
    {
        "code": "130100", 
        "sheng": "13", 
        "di": "01", 
        "xian": "00", 
        "name": "石家庄市", 
        "level": 2
    }, 
    {
        "code": "130102", 
        "sheng": "13", 
        "di": "01", 
        "xian": "02", 
        "name": "长安区", 
        "level": 3
    }, 
    {
        "code": "130104", 
        "sheng": "13", 
        "di": "01", 
        "xian": "04", 
        "name": "桥西区", 
        "level": 3
    }, 
    {
        "code": "130105", 
        "sheng": "13", 
        "di": "01", 
        "xian": "05", 
        "name": "新华区", 
        "level": 3
    }, 
    {
        "code": "130107", 
        "sheng": "13", 
        "di": "01", 
        "xian": "07", 
        "name": "井陉矿区", 
        "level": 3
    }, 
    {
        "code": "130108", 
        "sheng": "13", 
        "di": "01", 
        "xian": "08", 
        "name": "裕华区", 
        "level": 3
    }, 
    {
        "code": "130109", 
        "sheng": "13", 
        "di": "01", 
        "xian": "09", 
        "name": "藁城区", 
        "level": 3
    }, 
    {
        "code": "130110", 
        "sheng": "13", 
        "di": "01", 
        "xian": "10", 
        "name": "鹿泉区", 
        "level": 3
    }, 
    {
        "code": "130111", 
        "sheng": "13", 
        "di": "01", 
        "xian": "11", 
        "name": "栾城区", 
        "level": 3
    }, 
    {
        "code": "130121", 
        "sheng": "13", 
        "di": "01", 
        "xian": "21", 
        "name": "井陉县", 
        "level": 3
    }, 
    {
        "code": "130123", 
        "sheng": "13", 
        "di": "01", 
        "xian": "23", 
        "name": "正定县", 
        "level": 3
    }, 
    {
        "code": "130125", 
        "sheng": "13", 
        "di": "01", 
        "xian": "25", 
        "name": "行唐县", 
        "level": 3
    }, 
    {
        "code": "130126", 
        "sheng": "13", 
        "di": "01", 
        "xian": "26", 
        "name": "灵寿县", 
        "level": 3
    }, 
    {
        "code": "130127", 
        "sheng": "13", 
        "di": "01", 
        "xian": "27", 
        "name": "高邑县", 
        "level": 3
    }, 
    {
        "code": "130128", 
        "sheng": "13", 
        "di": "01", 
        "xian": "28", 
        "name": "深泽县", 
        "level": 3
    }, 
    {
        "code": "130129", 
        "sheng": "13", 
        "di": "01", 
        "xian": "29", 
        "name": "赞皇县", 
        "level": 3
    }, 
    {
        "code": "130130", 
        "sheng": "13", 
        "di": "01", 
        "xian": "30", 
        "name": "无极县", 
        "level": 3
    }, 
    {
        "code": "130131", 
        "sheng": "13", 
        "di": "01", 
        "xian": "31", 
        "name": "平山县", 
        "level": 3
    }, 
    {
        "code": "130132", 
        "sheng": "13", 
        "di": "01", 
        "xian": "32", 
        "name": "元氏县", 
        "level": 3
    }, 
    {
        "code": "130133", 
        "sheng": "13", 
        "di": "01", 
        "xian": "33", 
        "name": "赵县", 
        "level": 3
    }, 
    {
        "code": "130181", 
        "sheng": "13", 
        "di": "01", 
        "xian": "81", 
        "name": "辛集市", 
        "level": 3
    }, 
    {
        "code": "130183", 
        "sheng": "13", 
        "di": "01", 
        "xian": "83", 
        "name": "晋州市", 
        "level": 3
    }, 
    {
        "code": "130184", 
        "sheng": "13", 
        "di": "01", 
        "xian": "84", 
        "name": "新乐市", 
        "level": 3
    }, 
    {
        "code": "130185", 
        "sheng": "13", 
        "di": "01", 
        "xian": "85", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "130186", 
        "sheng": "13", 
        "di": "01", 
        "xian": "86", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "130200", 
        "sheng": "13", 
        "di": "02", 
        "xian": "00", 
        "name": "唐山市", 
        "level": 2
    }, 
    {
        "code": "130202", 
        "sheng": "13", 
        "di": "02", 
        "xian": "02", 
        "name": "路南区", 
        "level": 3
    }, 
    {
        "code": "130203", 
        "sheng": "13", 
        "di": "02", 
        "xian": "03", 
        "name": "路北区", 
        "level": 3
    }, 
    {
        "code": "130204", 
        "sheng": "13", 
        "di": "02", 
        "xian": "04", 
        "name": "古冶区", 
        "level": 3
    }, 
    {
        "code": "130205", 
        "sheng": "13", 
        "di": "02", 
        "xian": "05", 
        "name": "开平区", 
        "level": 3
    }, 
    {
        "code": "130207", 
        "sheng": "13", 
        "di": "02", 
        "xian": "07", 
        "name": "丰南区", 
        "level": 3
    }, 
    {
        "code": "130208", 
        "sheng": "13", 
        "di": "02", 
        "xian": "08", 
        "name": "丰润区", 
        "level": 3
    }, 
    {
        "code": "130209", 
        "sheng": "13", 
        "di": "02", 
        "xian": "09", 
        "name": "曹妃甸区", 
        "level": 3
    }, 
    {
        "code": "130223", 
        "sheng": "13", 
        "di": "02", 
        "xian": "23", 
        "name": "滦县", 
        "level": 3
    }, 
    {
        "code": "130224", 
        "sheng": "13", 
        "di": "02", 
        "xian": "24", 
        "name": "滦南县", 
        "level": 3
    }, 
    {
        "code": "130225", 
        "sheng": "13", 
        "di": "02", 
        "xian": "25", 
        "name": "乐亭县", 
        "level": 3
    }, 
    {
        "code": "130227", 
        "sheng": "13", 
        "di": "02", 
        "xian": "27", 
        "name": "迁西县", 
        "level": 3
    }, 
    {
        "code": "130229", 
        "sheng": "13", 
        "di": "02", 
        "xian": "29", 
        "name": "玉田县", 
        "level": 3
    }, 
    {
        "code": "130281", 
        "sheng": "13", 
        "di": "02", 
        "xian": "81", 
        "name": "遵化市", 
        "level": 3
    }, 
    {
        "code": "130283", 
        "sheng": "13", 
        "di": "02", 
        "xian": "83", 
        "name": "迁安市", 
        "level": 3
    }, 
    {
        "code": "130300", 
        "sheng": "13", 
        "di": "03", 
        "xian": "00", 
        "name": "秦皇岛市", 
        "level": 2
    }, 
    {
        "code": "130302", 
        "sheng": "13", 
        "di": "03", 
        "xian": "02", 
        "name": "海港区", 
        "level": 3
    }, 
    {
        "code": "130303", 
        "sheng": "13", 
        "di": "03", 
        "xian": "03", 
        "name": "山海关区", 
        "level": 3
    }, 
    {
        "code": "130304", 
        "sheng": "13", 
        "di": "03", 
        "xian": "04", 
        "name": "北戴河区", 
        "level": 3
    }, 
    {
        "code": "130306", 
        "sheng": "13", 
        "di": "03", 
        "xian": "06", 
        "name": "抚宁区", 
        "level": 3
    }, 
    {
        "code": "130321", 
        "sheng": "13", 
        "di": "03", 
        "xian": "21", 
        "name": "青龙满族自治县", 
        "level": 3
    }, 
    {
        "code": "130322", 
        "sheng": "13", 
        "di": "03", 
        "xian": "22", 
        "name": "昌黎县", 
        "level": 3
    }, 
    {
        "code": "130324", 
        "sheng": "13", 
        "di": "03", 
        "xian": "24", 
        "name": "卢龙县", 
        "level": 3
    }, 
    {
        "code": "130325", 
        "sheng": "13", 
        "di": "03", 
        "xian": "25", 
        "name": "北戴河新区", 
        "level": 3
    }, 
    {
        "code": "130400", 
        "sheng": "13", 
        "di": "04", 
        "xian": "00", 
        "name": "邯郸市", 
        "level": 2
    }, 
    {
        "code": "130402", 
        "sheng": "13", 
        "di": "04", 
        "xian": "02", 
        "name": "邯山区", 
        "level": 3
    }, 
    {
        "code": "130403", 
        "sheng": "13", 
        "di": "04", 
        "xian": "03", 
        "name": "丛台区", 
        "level": 3
    }, 
    {
        "code": "130404", 
        "sheng": "13", 
        "di": "04", 
        "xian": "04", 
        "name": "复兴区", 
        "level": 3
    }, 
    {
        "code": "130406", 
        "sheng": "13", 
        "di": "04", 
        "xian": "06", 
        "name": "峰峰矿区", 
        "level": 3
    }, 
    {
        "code": "130421", 
        "sheng": "13", 
        "di": "04", 
        "xian": "21", 
        "name": "邯郸县", 
        "level": 3
    }, 
    {
        "code": "130423", 
        "sheng": "13", 
        "di": "04", 
        "xian": "23", 
        "name": "临漳县", 
        "level": 3
    }, 
    {
        "code": "130424", 
        "sheng": "13", 
        "di": "04", 
        "xian": "24", 
        "name": "成安县", 
        "level": 3
    }, 
    {
        "code": "130425", 
        "sheng": "13", 
        "di": "04", 
        "xian": "25", 
        "name": "大名县", 
        "level": 3
    }, 
    {
        "code": "130426", 
        "sheng": "13", 
        "di": "04", 
        "xian": "26", 
        "name": "涉县", 
        "level": 3
    }, 
    {
        "code": "130427", 
        "sheng": "13", 
        "di": "04", 
        "xian": "27", 
        "name": "磁县", 
        "level": 3
    }, 
    {
        "code": "130428", 
        "sheng": "13", 
        "di": "04", 
        "xian": "28", 
        "name": "肥乡县", 
        "level": 3
    }, 
    {
        "code": "130429", 
        "sheng": "13", 
        "di": "04", 
        "xian": "29", 
        "name": "永年县", 
        "level": 3
    }, 
    {
        "code": "130430", 
        "sheng": "13", 
        "di": "04", 
        "xian": "30", 
        "name": "邱县", 
        "level": 3
    }, 
    {
        "code": "130431", 
        "sheng": "13", 
        "di": "04", 
        "xian": "31", 
        "name": "鸡泽县", 
        "level": 3
    }, 
    {
        "code": "130432", 
        "sheng": "13", 
        "di": "04", 
        "xian": "32", 
        "name": "广平县", 
        "level": 3
    }, 
    {
        "code": "130433", 
        "sheng": "13", 
        "di": "04", 
        "xian": "33", 
        "name": "馆陶县", 
        "level": 3
    }, 
    {
        "code": "130434", 
        "sheng": "13", 
        "di": "04", 
        "xian": "34", 
        "name": "魏县", 
        "level": 3
    }, 
    {
        "code": "130435", 
        "sheng": "13", 
        "di": "04", 
        "xian": "35", 
        "name": "曲周县", 
        "level": 3
    }, 
    {
        "code": "130481", 
        "sheng": "13", 
        "di": "04", 
        "xian": "81", 
        "name": "武安市", 
        "level": 3
    }, 
    {
        "code": "130482", 
        "sheng": "13", 
        "di": "04", 
        "xian": "82", 
        "name": "高新技术产业开发区", 
        "level": 3
    }, 
    {
        "code": "130500", 
        "sheng": "13", 
        "di": "05", 
        "xian": "00", 
        "name": "邢台市", 
        "level": 2
    }, 
    {
        "code": "130502", 
        "sheng": "13", 
        "di": "05", 
        "xian": "02", 
        "name": "桥东区", 
        "level": 3
    }, 
    {
        "code": "130503", 
        "sheng": "13", 
        "di": "05", 
        "xian": "03", 
        "name": "桥西区", 
        "level": 3
    }, 
    {
        "code": "130521", 
        "sheng": "13", 
        "di": "05", 
        "xian": "21", 
        "name": "邢台县", 
        "level": 3
    }, 
    {
        "code": "130522", 
        "sheng": "13", 
        "di": "05", 
        "xian": "22", 
        "name": "临城县", 
        "level": 3
    }, 
    {
        "code": "130523", 
        "sheng": "13", 
        "di": "05", 
        "xian": "23", 
        "name": "内丘县", 
        "level": 3
    }, 
    {
        "code": "130524", 
        "sheng": "13", 
        "di": "05", 
        "xian": "24", 
        "name": "柏乡县", 
        "level": 3
    }, 
    {
        "code": "130525", 
        "sheng": "13", 
        "di": "05", 
        "xian": "25", 
        "name": "隆尧县", 
        "level": 3
    }, 
    {
        "code": "130526", 
        "sheng": "13", 
        "di": "05", 
        "xian": "26", 
        "name": "任县", 
        "level": 3
    }, 
    {
        "code": "130527", 
        "sheng": "13", 
        "di": "05", 
        "xian": "27", 
        "name": "南和县", 
        "level": 3
    }, 
    {
        "code": "130528", 
        "sheng": "13", 
        "di": "05", 
        "xian": "28", 
        "name": "宁晋县", 
        "level": 3
    }, 
    {
        "code": "130529", 
        "sheng": "13", 
        "di": "05", 
        "xian": "29", 
        "name": "巨鹿县", 
        "level": 3
    }, 
    {
        "code": "130530", 
        "sheng": "13", 
        "di": "05", 
        "xian": "30", 
        "name": "新河县", 
        "level": 3
    }, 
    {
        "code": "130531", 
        "sheng": "13", 
        "di": "05", 
        "xian": "31", 
        "name": "广宗县", 
        "level": 3
    }, 
    {
        "code": "130532", 
        "sheng": "13", 
        "di": "05", 
        "xian": "32", 
        "name": "平乡县", 
        "level": 3
    }, 
    {
        "code": "130533", 
        "sheng": "13", 
        "di": "05", 
        "xian": "33", 
        "name": "威县", 
        "level": 3
    }, 
    {
        "code": "130534", 
        "sheng": "13", 
        "di": "05", 
        "xian": "34", 
        "name": "清河县", 
        "level": 3
    }, 
    {
        "code": "130535", 
        "sheng": "13", 
        "di": "05", 
        "xian": "35", 
        "name": "临西县", 
        "level": 3
    }, 
    {
        "code": "130581", 
        "sheng": "13", 
        "di": "05", 
        "xian": "81", 
        "name": "南宫市", 
        "level": 3
    }, 
    {
        "code": "130582", 
        "sheng": "13", 
        "di": "05", 
        "xian": "82", 
        "name": "沙河市", 
        "level": 3
    }, 
    {
        "code": "130600", 
        "sheng": "13", 
        "di": "06", 
        "xian": "00", 
        "name": "保定市", 
        "level": 2
    }, 
    {
        "code": "130602", 
        "sheng": "13", 
        "di": "06", 
        "xian": "02", 
        "name": "竞秀区", 
        "level": 3
    }, 
    {
        "code": "130606", 
        "sheng": "13", 
        "di": "06", 
        "xian": "06", 
        "name": "莲池区", 
        "level": 3
    }, 
    {
        "code": "130607", 
        "sheng": "13", 
        "di": "06", 
        "xian": "07", 
        "name": "满城区", 
        "level": 3
    }, 
    {
        "code": "130608", 
        "sheng": "13", 
        "di": "06", 
        "xian": "08", 
        "name": "清苑区", 
        "level": 3
    }, 
    {
        "code": "130609", 
        "sheng": "13", 
        "di": "06", 
        "xian": "09", 
        "name": "徐水区", 
        "level": 3
    }, 
    {
        "code": "130623", 
        "sheng": "13", 
        "di": "06", 
        "xian": "23", 
        "name": "涞水县", 
        "level": 3
    }, 
    {
        "code": "130624", 
        "sheng": "13", 
        "di": "06", 
        "xian": "24", 
        "name": "阜平县", 
        "level": 3
    }, 
    {
        "code": "130626", 
        "sheng": "13", 
        "di": "06", 
        "xian": "26", 
        "name": "定兴县", 
        "level": 3
    }, 
    {
        "code": "130627", 
        "sheng": "13", 
        "di": "06", 
        "xian": "27", 
        "name": "唐县", 
        "level": 3
    }, 
    {
        "code": "130628", 
        "sheng": "13", 
        "di": "06", 
        "xian": "28", 
        "name": "高阳县", 
        "level": 3
    }, 
    {
        "code": "130629", 
        "sheng": "13", 
        "di": "06", 
        "xian": "29", 
        "name": "容城县", 
        "level": 3
    }, 
    {
        "code": "130630", 
        "sheng": "13", 
        "di": "06", 
        "xian": "30", 
        "name": "涞源县", 
        "level": 3
    }, 
    {
        "code": "130631", 
        "sheng": "13", 
        "di": "06", 
        "xian": "31", 
        "name": "望都县", 
        "level": 3
    }, 
    {
        "code": "130632", 
        "sheng": "13", 
        "di": "06", 
        "xian": "32", 
        "name": "安新县", 
        "level": 3
    }, 
    {
        "code": "130633", 
        "sheng": "13", 
        "di": "06", 
        "xian": "33", 
        "name": "易县", 
        "level": 3
    }, 
    {
        "code": "130634", 
        "sheng": "13", 
        "di": "06", 
        "xian": "34", 
        "name": "曲阳县", 
        "level": 3
    }, 
    {
        "code": "130635", 
        "sheng": "13", 
        "di": "06", 
        "xian": "35", 
        "name": "蠡县", 
        "level": 3
    }, 
    {
        "code": "130636", 
        "sheng": "13", 
        "di": "06", 
        "xian": "36", 
        "name": "顺平县", 
        "level": 3
    }, 
    {
        "code": "130637", 
        "sheng": "13", 
        "di": "06", 
        "xian": "37", 
        "name": "博野县", 
        "level": 3
    }, 
    {
        "code": "130638", 
        "sheng": "13", 
        "di": "06", 
        "xian": "38", 
        "name": "雄县", 
        "level": 3
    }, 
    {
        "code": "130681", 
        "sheng": "13", 
        "di": "06", 
        "xian": "81", 
        "name": "涿州市", 
        "level": 3
    }, 
    {
        "code": "130682", 
        "sheng": "13", 
        "di": "06", 
        "xian": "82", 
        "name": "定州市", 
        "level": 3
    }, 
    {
        "code": "130683", 
        "sheng": "13", 
        "di": "06", 
        "xian": "83", 
        "name": "安国市", 
        "level": 3
    }, 
    {
        "code": "130684", 
        "sheng": "13", 
        "di": "06", 
        "xian": "84", 
        "name": "高碑店市", 
        "level": 3
    }, 
    {
        "code": "130700", 
        "sheng": "13", 
        "di": "07", 
        "xian": "00", 
        "name": "张家口市", 
        "level": 2
    }, 
    {
        "code": "130702", 
        "sheng": "13", 
        "di": "07", 
        "xian": "02", 
        "name": "桥东区", 
        "level": 3
    }, 
    {
        "code": "130703", 
        "sheng": "13", 
        "di": "07", 
        "xian": "03", 
        "name": "桥西区", 
        "level": 3
    }, 
    {
        "code": "130705", 
        "sheng": "13", 
        "di": "07", 
        "xian": "05", 
        "name": "宣化区", 
        "level": 3
    }, 
    {
        "code": "130706", 
        "sheng": "13", 
        "di": "07", 
        "xian": "06", 
        "name": "下花园区", 
        "level": 3
    }, 
    {
        "code": "130708", 
        "sheng": "13", 
        "di": "07", 
        "xian": "08", 
        "name": "万全区", 
        "level": 3
    }, 
    {
        "code": "130709", 
        "sheng": "13", 
        "di": "07", 
        "xian": "09", 
        "name": "崇礼区", 
        "level": 3
    }, 
    {
        "code": "130722", 
        "sheng": "13", 
        "di": "07", 
        "xian": "22", 
        "name": "张北县", 
        "level": 3
    }, 
    {
        "code": "130723", 
        "sheng": "13", 
        "di": "07", 
        "xian": "23", 
        "name": "康保县", 
        "level": 3
    }, 
    {
        "code": "130724", 
        "sheng": "13", 
        "di": "07", 
        "xian": "24", 
        "name": "沽源县", 
        "level": 3
    }, 
    {
        "code": "130725", 
        "sheng": "13", 
        "di": "07", 
        "xian": "25", 
        "name": "尚义县", 
        "level": 3
    }, 
    {
        "code": "130726", 
        "sheng": "13", 
        "di": "07", 
        "xian": "26", 
        "name": "蔚县", 
        "level": 3
    }, 
    {
        "code": "130727", 
        "sheng": "13", 
        "di": "07", 
        "xian": "27", 
        "name": "阳原县", 
        "level": 3
    }, 
    {
        "code": "130728", 
        "sheng": "13", 
        "di": "07", 
        "xian": "28", 
        "name": "怀安县", 
        "level": 3
    }, 
    {
        "code": "130730", 
        "sheng": "13", 
        "di": "07", 
        "xian": "30", 
        "name": "怀来县", 
        "level": 3
    }, 
    {
        "code": "130731", 
        "sheng": "13", 
        "di": "07", 
        "xian": "31", 
        "name": "涿鹿县", 
        "level": 3
    }, 
    {
        "code": "130732", 
        "sheng": "13", 
        "di": "07", 
        "xian": "32", 
        "name": "赤城县", 
        "level": 3
    }, 
    {
        "code": "130800", 
        "sheng": "13", 
        "di": "08", 
        "xian": "00", 
        "name": "承德市", 
        "level": 2
    }, 
    {
        "code": "130802", 
        "sheng": "13", 
        "di": "08", 
        "xian": "02", 
        "name": "双桥区", 
        "level": 3
    }, 
    {
        "code": "130803", 
        "sheng": "13", 
        "di": "08", 
        "xian": "03", 
        "name": "双滦区", 
        "level": 3
    }, 
    {
        "code": "130804", 
        "sheng": "13", 
        "di": "08", 
        "xian": "04", 
        "name": "鹰手营子矿区", 
        "level": 3
    }, 
    {
        "code": "130821", 
        "sheng": "13", 
        "di": "08", 
        "xian": "21", 
        "name": "承德县", 
        "level": 3
    }, 
    {
        "code": "130822", 
        "sheng": "13", 
        "di": "08", 
        "xian": "22", 
        "name": "兴隆县", 
        "level": 3
    }, 
    {
        "code": "130823", 
        "sheng": "13", 
        "di": "08", 
        "xian": "23", 
        "name": "平泉县", 
        "level": 3
    }, 
    {
        "code": "130824", 
        "sheng": "13", 
        "di": "08", 
        "xian": "24", 
        "name": "滦平县", 
        "level": 3
    }, 
    {
        "code": "130825", 
        "sheng": "13", 
        "di": "08", 
        "xian": "25", 
        "name": "隆化县", 
        "level": 3
    }, 
    {
        "code": "130826", 
        "sheng": "13", 
        "di": "08", 
        "xian": "26", 
        "name": "丰宁满族自治县", 
        "level": 3
    }, 
    {
        "code": "130827", 
        "sheng": "13", 
        "di": "08", 
        "xian": "27", 
        "name": "宽城满族自治县", 
        "level": 3
    }, 
    {
        "code": "130828", 
        "sheng": "13", 
        "di": "08", 
        "xian": "28", 
        "name": "围场满族蒙古族自治县", 
        "level": 3
    }, 
    {
        "code": "130900", 
        "sheng": "13", 
        "di": "09", 
        "xian": "00", 
        "name": "沧州市", 
        "level": 2
    }, 
    {
        "code": "130902", 
        "sheng": "13", 
        "di": "09", 
        "xian": "02", 
        "name": "新华区", 
        "level": 3
    }, 
    {
        "code": "130903", 
        "sheng": "13", 
        "di": "09", 
        "xian": "03", 
        "name": "运河区", 
        "level": 3
    }, 
    {
        "code": "130921", 
        "sheng": "13", 
        "di": "09", 
        "xian": "21", 
        "name": "沧县", 
        "level": 3
    }, 
    {
        "code": "130922", 
        "sheng": "13", 
        "di": "09", 
        "xian": "22", 
        "name": "青县", 
        "level": 3
    }, 
    {
        "code": "130923", 
        "sheng": "13", 
        "di": "09", 
        "xian": "23", 
        "name": "东光县", 
        "level": 3
    }, 
    {
        "code": "130924", 
        "sheng": "13", 
        "di": "09", 
        "xian": "24", 
        "name": "海兴县", 
        "level": 3
    }, 
    {
        "code": "130925", 
        "sheng": "13", 
        "di": "09", 
        "xian": "25", 
        "name": "盐山县", 
        "level": 3
    }, 
    {
        "code": "130926", 
        "sheng": "13", 
        "di": "09", 
        "xian": "26", 
        "name": "肃宁县", 
        "level": 3
    }, 
    {
        "code": "130927", 
        "sheng": "13", 
        "di": "09", 
        "xian": "27", 
        "name": "南皮县", 
        "level": 3
    }, 
    {
        "code": "130928", 
        "sheng": "13", 
        "di": "09", 
        "xian": "28", 
        "name": "吴桥县", 
        "level": 3
    }, 
    {
        "code": "130929", 
        "sheng": "13", 
        "di": "09", 
        "xian": "29", 
        "name": "献县", 
        "level": 3
    }, 
    {
        "code": "130930", 
        "sheng": "13", 
        "di": "09", 
        "xian": "30", 
        "name": "孟村回族自治县", 
        "level": 3
    }, 
    {
        "code": "130981", 
        "sheng": "13", 
        "di": "09", 
        "xian": "81", 
        "name": "泊头市", 
        "level": 3
    }, 
    {
        "code": "130982", 
        "sheng": "13", 
        "di": "09", 
        "xian": "82", 
        "name": "任丘市", 
        "level": 3
    }, 
    {
        "code": "130983", 
        "sheng": "13", 
        "di": "09", 
        "xian": "83", 
        "name": "黄骅市", 
        "level": 3
    }, 
    {
        "code": "130984", 
        "sheng": "13", 
        "di": "09", 
        "xian": "84", 
        "name": "河间市", 
        "level": 3
    }, 
    {
        "code": "130985", 
        "sheng": "13", 
        "di": "09", 
        "xian": "85", 
        "name": "渤海新区", 
        "level": 3
    }, 
    {
        "code": "130986", 
        "sheng": "13", 
        "di": "09", 
        "xian": "86", 
        "name": "临港经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "131000", 
        "sheng": "13", 
        "di": "10", 
        "xian": "00", 
        "name": "廊坊市", 
        "level": 2
    }, 
    {
        "code": "131002", 
        "sheng": "13", 
        "di": "10", 
        "xian": "02", 
        "name": "安次区", 
        "level": 3
    }, 
    {
        "code": "131003", 
        "sheng": "13", 
        "di": "10", 
        "xian": "03", 
        "name": "广阳区", 
        "level": 3
    }, 
    {
        "code": "131022", 
        "sheng": "13", 
        "di": "10", 
        "xian": "22", 
        "name": "固安县", 
        "level": 3
    }, 
    {
        "code": "131023", 
        "sheng": "13", 
        "di": "10", 
        "xian": "23", 
        "name": "永清县", 
        "level": 3
    }, 
    {
        "code": "131024", 
        "sheng": "13", 
        "di": "10", 
        "xian": "24", 
        "name": "香河县", 
        "level": 3
    }, 
    {
        "code": "131025", 
        "sheng": "13", 
        "di": "10", 
        "xian": "25", 
        "name": "大城县", 
        "level": 3
    }, 
    {
        "code": "131026", 
        "sheng": "13", 
        "di": "10", 
        "xian": "26", 
        "name": "文安县", 
        "level": 3
    }, 
    {
        "code": "131028", 
        "sheng": "13", 
        "di": "10", 
        "xian": "28", 
        "name": "大厂回族自治县", 
        "level": 3
    }, 
    {
        "code": "131081", 
        "sheng": "13", 
        "di": "10", 
        "xian": "81", 
        "name": "霸州市", 
        "level": 3
    }, 
    {
        "code": "131082", 
        "sheng": "13", 
        "di": "10", 
        "xian": "82", 
        "name": "三河市", 
        "level": 3
    }, 
    {
        "code": "131083", 
        "sheng": "13", 
        "di": "10", 
        "xian": "83", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "131100", 
        "sheng": "13", 
        "di": "11", 
        "xian": "00", 
        "name": "衡水市", 
        "level": 2
    }, 
    {
        "code": "131102", 
        "sheng": "13", 
        "di": "11", 
        "xian": "02", 
        "name": "桃城区", 
        "level": 3
    }, 
    {
        "code": "131103", 
        "sheng": "13", 
        "di": "11", 
        "xian": "03", 
        "name": "冀州区", 
        "level": 3
    }, 
    {
        "code": "131121", 
        "sheng": "13", 
        "di": "11", 
        "xian": "21", 
        "name": "枣强县", 
        "level": 3
    }, 
    {
        "code": "131122", 
        "sheng": "13", 
        "di": "11", 
        "xian": "22", 
        "name": "武邑县", 
        "level": 3
    }, 
    {
        "code": "131123", 
        "sheng": "13", 
        "di": "11", 
        "xian": "23", 
        "name": "武强县", 
        "level": 3
    }, 
    {
        "code": "131124", 
        "sheng": "13", 
        "di": "11", 
        "xian": "24", 
        "name": "饶阳县", 
        "level": 3
    }, 
    {
        "code": "131125", 
        "sheng": "13", 
        "di": "11", 
        "xian": "25", 
        "name": "安平县", 
        "level": 3
    }, 
    {
        "code": "131126", 
        "sheng": "13", 
        "di": "11", 
        "xian": "26", 
        "name": "故城县", 
        "level": 3
    }, 
    {
        "code": "131127", 
        "sheng": "13", 
        "di": "11", 
        "xian": "27", 
        "name": "景县", 
        "level": 3
    }, 
    {
        "code": "131128", 
        "sheng": "13", 
        "di": "11", 
        "xian": "28", 
        "name": "阜城县", 
        "level": 3
    }, 
    {
        "code": "131182", 
        "sheng": "13", 
        "di": "11", 
        "xian": "82", 
        "name": "深州市", 
        "level": 3
    }, 
    {
        "code": "140000", 
        "sheng": "14", 
        "di": "00", 
        "xian": "00", 
        "name": "山西省", 
        "level": 1
    }, 
    {
        "code": "140100", 
        "sheng": "14", 
        "di": "01", 
        "xian": "00", 
        "name": "太原市", 
        "level": 2
    }, 
    {
        "code": "140105", 
        "sheng": "14", 
        "di": "01", 
        "xian": "05", 
        "name": "小店区", 
        "level": 3
    }, 
    {
        "code": "140106", 
        "sheng": "14", 
        "di": "01", 
        "xian": "06", 
        "name": "迎泽区", 
        "level": 3
    }, 
    {
        "code": "140107", 
        "sheng": "14", 
        "di": "01", 
        "xian": "07", 
        "name": "杏花岭区", 
        "level": 3
    }, 
    {
        "code": "140108", 
        "sheng": "14", 
        "di": "01", 
        "xian": "08", 
        "name": "尖草坪区", 
        "level": 3
    }, 
    {
        "code": "140109", 
        "sheng": "14", 
        "di": "01", 
        "xian": "09", 
        "name": "万柏林区", 
        "level": 3
    }, 
    {
        "code": "140110", 
        "sheng": "14", 
        "di": "01", 
        "xian": "10", 
        "name": "晋源区", 
        "level": 3
    }, 
    {
        "code": "140121", 
        "sheng": "14", 
        "di": "01", 
        "xian": "21", 
        "name": "清徐县", 
        "level": 3
    }, 
    {
        "code": "140122", 
        "sheng": "14", 
        "di": "01", 
        "xian": "22", 
        "name": "阳曲县", 
        "level": 3
    }, 
    {
        "code": "140123", 
        "sheng": "14", 
        "di": "01", 
        "xian": "23", 
        "name": "娄烦县", 
        "level": 3
    }, 
    {
        "code": "140181", 
        "sheng": "14", 
        "di": "01", 
        "xian": "81", 
        "name": "古交市", 
        "level": 3
    }, 
    {
        "code": "140182", 
        "sheng": "14", 
        "di": "01", 
        "xian": "82", 
        "name": "高新阳曲园区", 
        "level": 3
    }, 
    {
        "code": "140183", 
        "sheng": "14", 
        "di": "01", 
        "xian": "83", 
        "name": "高新汾东园区", 
        "level": 3
    }, 
    {
        "code": "140184", 
        "sheng": "14", 
        "di": "01", 
        "xian": "84", 
        "name": "高新姚村园区", 
        "level": 3
    }, 
    {
        "code": "140200", 
        "sheng": "14", 
        "di": "02", 
        "xian": "00", 
        "name": "大同市", 
        "level": 2
    }, 
    {
        "code": "140202", 
        "sheng": "14", 
        "di": "02", 
        "xian": "02", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "140203", 
        "sheng": "14", 
        "di": "02", 
        "xian": "03", 
        "name": "矿区", 
        "level": 3
    }, 
    {
        "code": "140211", 
        "sheng": "14", 
        "di": "02", 
        "xian": "11", 
        "name": "南郊区", 
        "level": 3
    }, 
    {
        "code": "140212", 
        "sheng": "14", 
        "di": "02", 
        "xian": "12", 
        "name": "新荣区", 
        "level": 3
    }, 
    {
        "code": "140221", 
        "sheng": "14", 
        "di": "02", 
        "xian": "21", 
        "name": "阳高县", 
        "level": 3
    }, 
    {
        "code": "140222", 
        "sheng": "14", 
        "di": "02", 
        "xian": "22", 
        "name": "天镇县", 
        "level": 3
    }, 
    {
        "code": "140223", 
        "sheng": "14", 
        "di": "02", 
        "xian": "23", 
        "name": "广灵县", 
        "level": 3
    }, 
    {
        "code": "140224", 
        "sheng": "14", 
        "di": "02", 
        "xian": "24", 
        "name": "灵丘县", 
        "level": 3
    }, 
    {
        "code": "140225", 
        "sheng": "14", 
        "di": "02", 
        "xian": "25", 
        "name": "浑源县", 
        "level": 3
    }, 
    {
        "code": "140226", 
        "sheng": "14", 
        "di": "02", 
        "xian": "26", 
        "name": "左云县", 
        "level": 3
    }, 
    {
        "code": "140227", 
        "sheng": "14", 
        "di": "02", 
        "xian": "27", 
        "name": "大同县", 
        "level": 3
    }, 
    {
        "code": "140228", 
        "sheng": "14", 
        "di": "02", 
        "xian": "28", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "140300", 
        "sheng": "14", 
        "di": "03", 
        "xian": "00", 
        "name": "阳泉市", 
        "level": 2
    }, 
    {
        "code": "140302", 
        "sheng": "14", 
        "di": "03", 
        "xian": "02", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "140303", 
        "sheng": "14", 
        "di": "03", 
        "xian": "03", 
        "name": "矿区", 
        "level": 3
    }, 
    {
        "code": "140311", 
        "sheng": "14", 
        "di": "03", 
        "xian": "11", 
        "name": "郊区", 
        "level": 3
    }, 
    {
        "code": "140321", 
        "sheng": "14", 
        "di": "03", 
        "xian": "21", 
        "name": "平定县", 
        "level": 3
    }, 
    {
        "code": "140322", 
        "sheng": "14", 
        "di": "03", 
        "xian": "22", 
        "name": "盂县", 
        "level": 3
    }, 
    {
        "code": "140400", 
        "sheng": "14", 
        "di": "04", 
        "xian": "00", 
        "name": "长治市", 
        "level": 2
    }, 
    {
        "code": "140402", 
        "sheng": "14", 
        "di": "04", 
        "xian": "02", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "140411", 
        "sheng": "14", 
        "di": "04", 
        "xian": "11", 
        "name": "郊区", 
        "level": 3
    }, 
    {
        "code": "140421", 
        "sheng": "14", 
        "di": "04", 
        "xian": "21", 
        "name": "长治县", 
        "level": 3
    }, 
    {
        "code": "140423", 
        "sheng": "14", 
        "di": "04", 
        "xian": "23", 
        "name": "襄垣县", 
        "level": 3
    }, 
    {
        "code": "140424", 
        "sheng": "14", 
        "di": "04", 
        "xian": "24", 
        "name": "屯留县", 
        "level": 3
    }, 
    {
        "code": "140425", 
        "sheng": "14", 
        "di": "04", 
        "xian": "25", 
        "name": "平顺县", 
        "level": 3
    }, 
    {
        "code": "140426", 
        "sheng": "14", 
        "di": "04", 
        "xian": "26", 
        "name": "黎城县", 
        "level": 3
    }, 
    {
        "code": "140427", 
        "sheng": "14", 
        "di": "04", 
        "xian": "27", 
        "name": "壶关县", 
        "level": 3
    }, 
    {
        "code": "140428", 
        "sheng": "14", 
        "di": "04", 
        "xian": "28", 
        "name": "长子县", 
        "level": 3
    }, 
    {
        "code": "140429", 
        "sheng": "14", 
        "di": "04", 
        "xian": "29", 
        "name": "武乡县", 
        "level": 3
    }, 
    {
        "code": "140430", 
        "sheng": "14", 
        "di": "04", 
        "xian": "30", 
        "name": "沁县", 
        "level": 3
    }, 
    {
        "code": "140431", 
        "sheng": "14", 
        "di": "04", 
        "xian": "31", 
        "name": "沁源县", 
        "level": 3
    }, 
    {
        "code": "140481", 
        "sheng": "14", 
        "di": "04", 
        "xian": "81", 
        "name": "潞城市", 
        "level": 3
    }, 
    {
        "code": "140500", 
        "sheng": "14", 
        "di": "05", 
        "xian": "00", 
        "name": "晋城市", 
        "level": 2
    }, 
    {
        "code": "140502", 
        "sheng": "14", 
        "di": "05", 
        "xian": "02", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "140521", 
        "sheng": "14", 
        "di": "05", 
        "xian": "21", 
        "name": "沁水县", 
        "level": 3
    }, 
    {
        "code": "140522", 
        "sheng": "14", 
        "di": "05", 
        "xian": "22", 
        "name": "阳城县", 
        "level": 3
    }, 
    {
        "code": "140524", 
        "sheng": "14", 
        "di": "05", 
        "xian": "24", 
        "name": "陵川县", 
        "level": 3
    }, 
    {
        "code": "140525", 
        "sheng": "14", 
        "di": "05", 
        "xian": "25", 
        "name": "泽州县", 
        "level": 3
    }, 
    {
        "code": "140581", 
        "sheng": "14", 
        "di": "05", 
        "xian": "81", 
        "name": "高平市", 
        "level": 3
    }, 
    {
        "code": "140582", 
        "sheng": "14", 
        "di": "05", 
        "xian": "82", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "140600", 
        "sheng": "14", 
        "di": "06", 
        "xian": "00", 
        "name": "朔州市", 
        "level": 2
    }, 
    {
        "code": "140602", 
        "sheng": "14", 
        "di": "06", 
        "xian": "02", 
        "name": "朔城区", 
        "level": 3
    }, 
    {
        "code": "140603", 
        "sheng": "14", 
        "di": "06", 
        "xian": "03", 
        "name": "平鲁区", 
        "level": 3
    }, 
    {
        "code": "140621", 
        "sheng": "14", 
        "di": "06", 
        "xian": "21", 
        "name": "山阴县", 
        "level": 3
    }, 
    {
        "code": "140622", 
        "sheng": "14", 
        "di": "06", 
        "xian": "22", 
        "name": "应县", 
        "level": 3
    }, 
    {
        "code": "140623", 
        "sheng": "14", 
        "di": "06", 
        "xian": "23", 
        "name": "右玉县", 
        "level": 3
    }, 
    {
        "code": "140624", 
        "sheng": "14", 
        "di": "06", 
        "xian": "24", 
        "name": "怀仁县", 
        "level": 3
    }, 
    {
        "code": "140700", 
        "sheng": "14", 
        "di": "07", 
        "xian": "00", 
        "name": "晋中市", 
        "level": 2
    }, 
    {
        "code": "140702", 
        "sheng": "14", 
        "di": "07", 
        "xian": "02", 
        "name": "榆次区", 
        "level": 3
    }, 
    {
        "code": "140721", 
        "sheng": "14", 
        "di": "07", 
        "xian": "21", 
        "name": "榆社县", 
        "level": 3
    }, 
    {
        "code": "140722", 
        "sheng": "14", 
        "di": "07", 
        "xian": "22", 
        "name": "左权县", 
        "level": 3
    }, 
    {
        "code": "140723", 
        "sheng": "14", 
        "di": "07", 
        "xian": "23", 
        "name": "和顺县", 
        "level": 3
    }, 
    {
        "code": "140724", 
        "sheng": "14", 
        "di": "07", 
        "xian": "24", 
        "name": "昔阳县", 
        "level": 3
    }, 
    {
        "code": "140725", 
        "sheng": "14", 
        "di": "07", 
        "xian": "25", 
        "name": "寿阳县", 
        "level": 3
    }, 
    {
        "code": "140726", 
        "sheng": "14", 
        "di": "07", 
        "xian": "26", 
        "name": "太谷县", 
        "level": 3
    }, 
    {
        "code": "140727", 
        "sheng": "14", 
        "di": "07", 
        "xian": "27", 
        "name": "祁县", 
        "level": 3
    }, 
    {
        "code": "140728", 
        "sheng": "14", 
        "di": "07", 
        "xian": "28", 
        "name": "平遥县", 
        "level": 3
    }, 
    {
        "code": "140729", 
        "sheng": "14", 
        "di": "07", 
        "xian": "29", 
        "name": "灵石县", 
        "level": 3
    }, 
    {
        "code": "140781", 
        "sheng": "14", 
        "di": "07", 
        "xian": "81", 
        "name": "介休市", 
        "level": 3
    }, 
    {
        "code": "140800", 
        "sheng": "14", 
        "di": "08", 
        "xian": "00", 
        "name": "运城市", 
        "level": 2
    }, 
    {
        "code": "140802", 
        "sheng": "14", 
        "di": "08", 
        "xian": "02", 
        "name": "盐湖区", 
        "level": 3
    }, 
    {
        "code": "140821", 
        "sheng": "14", 
        "di": "08", 
        "xian": "21", 
        "name": "临猗县", 
        "level": 3
    }, 
    {
        "code": "140822", 
        "sheng": "14", 
        "di": "08", 
        "xian": "22", 
        "name": "万荣县", 
        "level": 3
    }, 
    {
        "code": "140823", 
        "sheng": "14", 
        "di": "08", 
        "xian": "23", 
        "name": "闻喜县", 
        "level": 3
    }, 
    {
        "code": "140824", 
        "sheng": "14", 
        "di": "08", 
        "xian": "24", 
        "name": "稷山县", 
        "level": 3
    }, 
    {
        "code": "140825", 
        "sheng": "14", 
        "di": "08", 
        "xian": "25", 
        "name": "新绛县", 
        "level": 3
    }, 
    {
        "code": "140826", 
        "sheng": "14", 
        "di": "08", 
        "xian": "26", 
        "name": "绛县", 
        "level": 3
    }, 
    {
        "code": "140827", 
        "sheng": "14", 
        "di": "08", 
        "xian": "27", 
        "name": "垣曲县", 
        "level": 3
    }, 
    {
        "code": "140828", 
        "sheng": "14", 
        "di": "08", 
        "xian": "28", 
        "name": "夏县", 
        "level": 3
    }, 
    {
        "code": "140829", 
        "sheng": "14", 
        "di": "08", 
        "xian": "29", 
        "name": "平陆县", 
        "level": 3
    }, 
    {
        "code": "140830", 
        "sheng": "14", 
        "di": "08", 
        "xian": "30", 
        "name": "芮城县", 
        "level": 3
    }, 
    {
        "code": "140881", 
        "sheng": "14", 
        "di": "08", 
        "xian": "81", 
        "name": "永济市", 
        "level": 3
    }, 
    {
        "code": "140882", 
        "sheng": "14", 
        "di": "08", 
        "xian": "82", 
        "name": "河津市", 
        "level": 3
    }, 
    {
        "code": "140900", 
        "sheng": "14", 
        "di": "09", 
        "xian": "00", 
        "name": "忻州市", 
        "level": 2
    }, 
    {
        "code": "140902", 
        "sheng": "14", 
        "di": "09", 
        "xian": "02", 
        "name": "忻府区", 
        "level": 3
    }, 
    {
        "code": "140921", 
        "sheng": "14", 
        "di": "09", 
        "xian": "21", 
        "name": "定襄县", 
        "level": 3
    }, 
    {
        "code": "140922", 
        "sheng": "14", 
        "di": "09", 
        "xian": "22", 
        "name": "五台县", 
        "level": 3
    }, 
    {
        "code": "140923", 
        "sheng": "14", 
        "di": "09", 
        "xian": "23", 
        "name": "代县", 
        "level": 3
    }, 
    {
        "code": "140924", 
        "sheng": "14", 
        "di": "09", 
        "xian": "24", 
        "name": "繁峙县", 
        "level": 3
    }, 
    {
        "code": "140925", 
        "sheng": "14", 
        "di": "09", 
        "xian": "25", 
        "name": "宁武县", 
        "level": 3
    }, 
    {
        "code": "140926", 
        "sheng": "14", 
        "di": "09", 
        "xian": "26", 
        "name": "静乐县", 
        "level": 3
    }, 
    {
        "code": "140927", 
        "sheng": "14", 
        "di": "09", 
        "xian": "27", 
        "name": "神池县", 
        "level": 3
    }, 
    {
        "code": "140928", 
        "sheng": "14", 
        "di": "09", 
        "xian": "28", 
        "name": "五寨县", 
        "level": 3
    }, 
    {
        "code": "140929", 
        "sheng": "14", 
        "di": "09", 
        "xian": "29", 
        "name": "岢岚县", 
        "level": 3
    }, 
    {
        "code": "140930", 
        "sheng": "14", 
        "di": "09", 
        "xian": "30", 
        "name": "河曲县", 
        "level": 3
    }, 
    {
        "code": "140931", 
        "sheng": "14", 
        "di": "09", 
        "xian": "31", 
        "name": "保德县", 
        "level": 3
    }, 
    {
        "code": "140932", 
        "sheng": "14", 
        "di": "09", 
        "xian": "32", 
        "name": "偏关县", 
        "level": 3
    }, 
    {
        "code": "140981", 
        "sheng": "14", 
        "di": "09", 
        "xian": "81", 
        "name": "原平市", 
        "level": 3
    }, 
    {
        "code": "141000", 
        "sheng": "14", 
        "di": "10", 
        "xian": "00", 
        "name": "临汾市", 
        "level": 2
    }, 
    {
        "code": "141002", 
        "sheng": "14", 
        "di": "10", 
        "xian": "02", 
        "name": "尧都区", 
        "level": 3
    }, 
    {
        "code": "141021", 
        "sheng": "14", 
        "di": "10", 
        "xian": "21", 
        "name": "曲沃县", 
        "level": 3
    }, 
    {
        "code": "141022", 
        "sheng": "14", 
        "di": "10", 
        "xian": "22", 
        "name": "翼城县", 
        "level": 3
    }, 
    {
        "code": "141023", 
        "sheng": "14", 
        "di": "10", 
        "xian": "23", 
        "name": "襄汾县", 
        "level": 3
    }, 
    {
        "code": "141024", 
        "sheng": "14", 
        "di": "10", 
        "xian": "24", 
        "name": "洪洞县", 
        "level": 3
    }, 
    {
        "code": "141025", 
        "sheng": "14", 
        "di": "10", 
        "xian": "25", 
        "name": "古县", 
        "level": 3
    }, 
    {
        "code": "141026", 
        "sheng": "14", 
        "di": "10", 
        "xian": "26", 
        "name": "安泽县", 
        "level": 3
    }, 
    {
        "code": "141027", 
        "sheng": "14", 
        "di": "10", 
        "xian": "27", 
        "name": "浮山县", 
        "level": 3
    }, 
    {
        "code": "141028", 
        "sheng": "14", 
        "di": "10", 
        "xian": "28", 
        "name": "吉县", 
        "level": 3
    }, 
    {
        "code": "141029", 
        "sheng": "14", 
        "di": "10", 
        "xian": "29", 
        "name": "乡宁县", 
        "level": 3
    }, 
    {
        "code": "141030", 
        "sheng": "14", 
        "di": "10", 
        "xian": "30", 
        "name": "大宁县", 
        "level": 3
    }, 
    {
        "code": "141031", 
        "sheng": "14", 
        "di": "10", 
        "xian": "31", 
        "name": "隰县", 
        "level": 3
    }, 
    {
        "code": "141032", 
        "sheng": "14", 
        "di": "10", 
        "xian": "32", 
        "name": "永和县", 
        "level": 3
    }, 
    {
        "code": "141033", 
        "sheng": "14", 
        "di": "10", 
        "xian": "33", 
        "name": "蒲县", 
        "level": 3
    }, 
    {
        "code": "141034", 
        "sheng": "14", 
        "di": "10", 
        "xian": "34", 
        "name": "汾西县", 
        "level": 3
    }, 
    {
        "code": "141081", 
        "sheng": "14", 
        "di": "10", 
        "xian": "81", 
        "name": "侯马市", 
        "level": 3
    }, 
    {
        "code": "141082", 
        "sheng": "14", 
        "di": "10", 
        "xian": "82", 
        "name": "霍州市", 
        "level": 3
    }, 
    {
        "code": "141100", 
        "sheng": "14", 
        "di": "11", 
        "xian": "00", 
        "name": "吕梁市", 
        "level": 2
    }, 
    {
        "code": "141102", 
        "sheng": "14", 
        "di": "11", 
        "xian": "02", 
        "name": "离石区", 
        "level": 3
    }, 
    {
        "code": "141121", 
        "sheng": "14", 
        "di": "11", 
        "xian": "21", 
        "name": "文水县", 
        "level": 3
    }, 
    {
        "code": "141122", 
        "sheng": "14", 
        "di": "11", 
        "xian": "22", 
        "name": "交城县", 
        "level": 3
    }, 
    {
        "code": "141123", 
        "sheng": "14", 
        "di": "11", 
        "xian": "23", 
        "name": "兴县", 
        "level": 3
    }, 
    {
        "code": "141124", 
        "sheng": "14", 
        "di": "11", 
        "xian": "24", 
        "name": "临县", 
        "level": 3
    }, 
    {
        "code": "141125", 
        "sheng": "14", 
        "di": "11", 
        "xian": "25", 
        "name": "柳林县", 
        "level": 3
    }, 
    {
        "code": "141126", 
        "sheng": "14", 
        "di": "11", 
        "xian": "26", 
        "name": "石楼县", 
        "level": 3
    }, 
    {
        "code": "141127", 
        "sheng": "14", 
        "di": "11", 
        "xian": "27", 
        "name": "岚县", 
        "level": 3
    }, 
    {
        "code": "141128", 
        "sheng": "14", 
        "di": "11", 
        "xian": "28", 
        "name": "方山县", 
        "level": 3
    }, 
    {
        "code": "141129", 
        "sheng": "14", 
        "di": "11", 
        "xian": "29", 
        "name": "中阳县", 
        "level": 3
    }, 
    {
        "code": "141130", 
        "sheng": "14", 
        "di": "11", 
        "xian": "30", 
        "name": "交口县", 
        "level": 3
    }, 
    {
        "code": "141181", 
        "sheng": "14", 
        "di": "11", 
        "xian": "81", 
        "name": "孝义市", 
        "level": 3
    }, 
    {
        "code": "141182", 
        "sheng": "14", 
        "di": "11", 
        "xian": "82", 
        "name": "汾阳市", 
        "level": 3
    }, 
    {
        "code": "150000", 
        "sheng": "15", 
        "di": "00", 
        "xian": "00", 
        "name": "内蒙古自治区", 
        "level": 1
    }, 
    {
        "code": "150100", 
        "sheng": "15", 
        "di": "01", 
        "xian": "00", 
        "name": "呼和浩特市", 
        "level": 2
    }, 
    {
        "code": "150102", 
        "sheng": "15", 
        "di": "01", 
        "xian": "02", 
        "name": "新城区", 
        "level": 3
    }, 
    {
        "code": "150103", 
        "sheng": "15", 
        "di": "01", 
        "xian": "03", 
        "name": "回民区", 
        "level": 3
    }, 
    {
        "code": "150104", 
        "sheng": "15", 
        "di": "01", 
        "xian": "04", 
        "name": "玉泉区", 
        "level": 3
    }, 
    {
        "code": "150105", 
        "sheng": "15", 
        "di": "01", 
        "xian": "05", 
        "name": "赛罕区", 
        "level": 3
    }, 
    {
        "code": "150121", 
        "sheng": "15", 
        "di": "01", 
        "xian": "21", 
        "name": "土默特左旗", 
        "level": 3
    }, 
    {
        "code": "150122", 
        "sheng": "15", 
        "di": "01", 
        "xian": "22", 
        "name": "托克托县", 
        "level": 3
    }, 
    {
        "code": "150123", 
        "sheng": "15", 
        "di": "01", 
        "xian": "23", 
        "name": "和林格尔县", 
        "level": 3
    }, 
    {
        "code": "150124", 
        "sheng": "15", 
        "di": "01", 
        "xian": "24", 
        "name": "清水河县", 
        "level": 3
    }, 
    {
        "code": "150125", 
        "sheng": "15", 
        "di": "01", 
        "xian": "25", 
        "name": "武川县", 
        "level": 3
    }, 
    {
        "code": "150200", 
        "sheng": "15", 
        "di": "02", 
        "xian": "00", 
        "name": "包头市", 
        "level": 2
    }, 
    {
        "code": "150202", 
        "sheng": "15", 
        "di": "02", 
        "xian": "02", 
        "name": "东河区", 
        "level": 3
    }, 
    {
        "code": "150203", 
        "sheng": "15", 
        "di": "02", 
        "xian": "03", 
        "name": "昆都仑区", 
        "level": 3
    }, 
    {
        "code": "150204", 
        "sheng": "15", 
        "di": "02", 
        "xian": "04", 
        "name": "青山区", 
        "level": 3
    }, 
    {
        "code": "150205", 
        "sheng": "15", 
        "di": "02", 
        "xian": "05", 
        "name": "石拐区", 
        "level": 3
    }, 
    {
        "code": "150206", 
        "sheng": "15", 
        "di": "02", 
        "xian": "06", 
        "name": "白云鄂博矿区", 
        "level": 3
    }, 
    {
        "code": "150207", 
        "sheng": "15", 
        "di": "02", 
        "xian": "07", 
        "name": "九原区", 
        "level": 3
    }, 
    {
        "code": "150221", 
        "sheng": "15", 
        "di": "02", 
        "xian": "21", 
        "name": "土默特右旗", 
        "level": 3
    }, 
    {
        "code": "150222", 
        "sheng": "15", 
        "di": "02", 
        "xian": "22", 
        "name": "固阳县", 
        "level": 3
    }, 
    {
        "code": "150223", 
        "sheng": "15", 
        "di": "02", 
        "xian": "23", 
        "name": "达尔罕茂明安联合旗", 
        "level": 3
    }, 
    {
        "code": "150300", 
        "sheng": "15", 
        "di": "03", 
        "xian": "00", 
        "name": "乌海市", 
        "level": 2
    }, 
    {
        "code": "150302", 
        "sheng": "15", 
        "di": "03", 
        "xian": "02", 
        "name": "海勃湾区", 
        "level": 3
    }, 
    {
        "code": "150303", 
        "sheng": "15", 
        "di": "03", 
        "xian": "03", 
        "name": "海南区", 
        "level": 3
    }, 
    {
        "code": "150304", 
        "sheng": "15", 
        "di": "03", 
        "xian": "04", 
        "name": "乌达区", 
        "level": 3
    }, 
    {
        "code": "150400", 
        "sheng": "15", 
        "di": "04", 
        "xian": "00", 
        "name": "赤峰市", 
        "level": 2
    }, 
    {
        "code": "150402", 
        "sheng": "15", 
        "di": "04", 
        "xian": "02", 
        "name": "红山区", 
        "level": 3
    }, 
    {
        "code": "150403", 
        "sheng": "15", 
        "di": "04", 
        "xian": "03", 
        "name": "元宝山区", 
        "level": 3
    }, 
    {
        "code": "150404", 
        "sheng": "15", 
        "di": "04", 
        "xian": "04", 
        "name": "松山区", 
        "level": 3
    }, 
    {
        "code": "150421", 
        "sheng": "15", 
        "di": "04", 
        "xian": "21", 
        "name": "阿鲁科尔沁旗", 
        "level": 3
    }, 
    {
        "code": "150422", 
        "sheng": "15", 
        "di": "04", 
        "xian": "22", 
        "name": "巴林左旗", 
        "level": 3
    }, 
    {
        "code": "150423", 
        "sheng": "15", 
        "di": "04", 
        "xian": "23", 
        "name": "巴林右旗", 
        "level": 3
    }, 
    {
        "code": "150424", 
        "sheng": "15", 
        "di": "04", 
        "xian": "24", 
        "name": "林西县", 
        "level": 3
    }, 
    {
        "code": "150425", 
        "sheng": "15", 
        "di": "04", 
        "xian": "25", 
        "name": "克什克腾旗", 
        "level": 3
    }, 
    {
        "code": "150426", 
        "sheng": "15", 
        "di": "04", 
        "xian": "26", 
        "name": "翁牛特旗", 
        "level": 3
    }, 
    {
        "code": "150428", 
        "sheng": "15", 
        "di": "04", 
        "xian": "28", 
        "name": "喀喇沁旗", 
        "level": 3
    }, 
    {
        "code": "150429", 
        "sheng": "15", 
        "di": "04", 
        "xian": "29", 
        "name": "宁城县", 
        "level": 3
    }, 
    {
        "code": "150430", 
        "sheng": "15", 
        "di": "04", 
        "xian": "30", 
        "name": "敖汉旗", 
        "level": 3
    }, 
    {
        "code": "150500", 
        "sheng": "15", 
        "di": "05", 
        "xian": "00", 
        "name": "通辽市", 
        "level": 2
    }, 
    {
        "code": "150502", 
        "sheng": "15", 
        "di": "05", 
        "xian": "02", 
        "name": "科尔沁区", 
        "level": 3
    }, 
    {
        "code": "150521", 
        "sheng": "15", 
        "di": "05", 
        "xian": "21", 
        "name": "科尔沁左翼中旗", 
        "level": 3
    }, 
    {
        "code": "150522", 
        "sheng": "15", 
        "di": "05", 
        "xian": "22", 
        "name": "科尔沁左翼后旗", 
        "level": 3
    }, 
    {
        "code": "150523", 
        "sheng": "15", 
        "di": "05", 
        "xian": "23", 
        "name": "开鲁县", 
        "level": 3
    }, 
    {
        "code": "150524", 
        "sheng": "15", 
        "di": "05", 
        "xian": "24", 
        "name": "库伦旗", 
        "level": 3
    }, 
    {
        "code": "150525", 
        "sheng": "15", 
        "di": "05", 
        "xian": "25", 
        "name": "奈曼旗", 
        "level": 3
    }, 
    {
        "code": "150526", 
        "sheng": "15", 
        "di": "05", 
        "xian": "26", 
        "name": "扎鲁特旗", 
        "level": 3
    }, 
    {
        "code": "150581", 
        "sheng": "15", 
        "di": "05", 
        "xian": "81", 
        "name": "霍林郭勒市", 
        "level": 3
    }, 
    {
        "code": "150600", 
        "sheng": "15", 
        "di": "06", 
        "xian": "00", 
        "name": "鄂尔多斯市", 
        "level": 2
    }, 
    {
        "code": "150602", 
        "sheng": "15", 
        "di": "06", 
        "xian": "02", 
        "name": "东胜区", 
        "level": 3
    }, 
    {
        "code": "150621", 
        "sheng": "15", 
        "di": "06", 
        "xian": "21", 
        "name": "达拉特旗", 
        "level": 3
    }, 
    {
        "code": "150622", 
        "sheng": "15", 
        "di": "06", 
        "xian": "22", 
        "name": "准格尔旗", 
        "level": 3
    }, 
    {
        "code": "150623", 
        "sheng": "15", 
        "di": "06", 
        "xian": "23", 
        "name": "鄂托克前旗", 
        "level": 3
    }, 
    {
        "code": "150624", 
        "sheng": "15", 
        "di": "06", 
        "xian": "24", 
        "name": "鄂托克旗", 
        "level": 3
    }, 
    {
        "code": "150625", 
        "sheng": "15", 
        "di": "06", 
        "xian": "25", 
        "name": "杭锦旗", 
        "level": 3
    }, 
    {
        "code": "150626", 
        "sheng": "15", 
        "di": "06", 
        "xian": "26", 
        "name": "乌审旗", 
        "level": 3
    }, 
    {
        "code": "150627", 
        "sheng": "15", 
        "di": "06", 
        "xian": "27", 
        "name": "伊金霍洛旗", 
        "level": 3
    }, 
    {
        "code": "150628", 
        "sheng": "15", 
        "di": "06", 
        "xian": "28", 
        "name": "康巴什区", 
        "level": 3
    }, 
    {
        "code": "150700", 
        "sheng": "15", 
        "di": "07", 
        "xian": "00", 
        "name": "呼伦贝尔市", 
        "level": 2
    }, 
    {
        "code": "150702", 
        "sheng": "15", 
        "di": "07", 
        "xian": "02", 
        "name": "海拉尔区", 
        "level": 3
    }, 
    {
        "code": "150703", 
        "sheng": "15", 
        "di": "07", 
        "xian": "03", 
        "name": "扎赉诺尔区", 
        "level": 3
    }, 
    {
        "code": "150721", 
        "sheng": "15", 
        "di": "07", 
        "xian": "21", 
        "name": "阿荣旗", 
        "level": 3
    }, 
    {
        "code": "150722", 
        "sheng": "15", 
        "di": "07", 
        "xian": "22", 
        "name": "莫力达瓦达斡尔族自治旗", 
        "level": 3
    }, 
    {
        "code": "150723", 
        "sheng": "15", 
        "di": "07", 
        "xian": "23", 
        "name": "鄂伦春自治旗", 
        "level": 3
    }, 
    {
        "code": "150724", 
        "sheng": "15", 
        "di": "07", 
        "xian": "24", 
        "name": "鄂温克族自治旗", 
        "level": 3
    }, 
    {
        "code": "150725", 
        "sheng": "15", 
        "di": "07", 
        "xian": "25", 
        "name": "陈巴尔虎旗", 
        "level": 3
    }, 
    {
        "code": "150726", 
        "sheng": "15", 
        "di": "07", 
        "xian": "26", 
        "name": "新巴尔虎左旗", 
        "level": 3
    }, 
    {
        "code": "150727", 
        "sheng": "15", 
        "di": "07", 
        "xian": "27", 
        "name": "新巴尔虎右旗", 
        "level": 3
    }, 
    {
        "code": "150781", 
        "sheng": "15", 
        "di": "07", 
        "xian": "81", 
        "name": "满洲里市", 
        "level": 3
    }, 
    {
        "code": "150782", 
        "sheng": "15", 
        "di": "07", 
        "xian": "82", 
        "name": "牙克石市", 
        "level": 3
    }, 
    {
        "code": "150783", 
        "sheng": "15", 
        "di": "07", 
        "xian": "83", 
        "name": "扎兰屯市", 
        "level": 3
    }, 
    {
        "code": "150784", 
        "sheng": "15", 
        "di": "07", 
        "xian": "84", 
        "name": "额尔古纳市", 
        "level": 3
    }, 
    {
        "code": "150785", 
        "sheng": "15", 
        "di": "07", 
        "xian": "85", 
        "name": "根河市", 
        "level": 3
    }, 
    {
        "code": "150800", 
        "sheng": "15", 
        "di": "08", 
        "xian": "00", 
        "name": "巴彦淖尔市", 
        "level": 2
    }, 
    {
        "code": "150802", 
        "sheng": "15", 
        "di": "08", 
        "xian": "02", 
        "name": "临河区", 
        "level": 3
    }, 
    {
        "code": "150821", 
        "sheng": "15", 
        "di": "08", 
        "xian": "21", 
        "name": "五原县", 
        "level": 3
    }, 
    {
        "code": "150822", 
        "sheng": "15", 
        "di": "08", 
        "xian": "22", 
        "name": "磴口县", 
        "level": 3
    }, 
    {
        "code": "150823", 
        "sheng": "15", 
        "di": "08", 
        "xian": "23", 
        "name": "乌拉特前旗", 
        "level": 3
    }, 
    {
        "code": "150824", 
        "sheng": "15", 
        "di": "08", 
        "xian": "24", 
        "name": "乌拉特中旗", 
        "level": 3
    }, 
    {
        "code": "150825", 
        "sheng": "15", 
        "di": "08", 
        "xian": "25", 
        "name": "乌拉特后旗", 
        "level": 3
    }, 
    {
        "code": "150826", 
        "sheng": "15", 
        "di": "08", 
        "xian": "26", 
        "name": "杭锦后旗", 
        "level": 3
    }, 
    {
        "code": "150900", 
        "sheng": "15", 
        "di": "09", 
        "xian": "00", 
        "name": "乌兰察布市", 
        "level": 2
    }, 
    {
        "code": "150902", 
        "sheng": "15", 
        "di": "09", 
        "xian": "02", 
        "name": "集宁区", 
        "level": 3
    }, 
    {
        "code": "150921", 
        "sheng": "15", 
        "di": "09", 
        "xian": "21", 
        "name": "卓资县", 
        "level": 3
    }, 
    {
        "code": "150922", 
        "sheng": "15", 
        "di": "09", 
        "xian": "22", 
        "name": "化德县", 
        "level": 3
    }, 
    {
        "code": "150923", 
        "sheng": "15", 
        "di": "09", 
        "xian": "23", 
        "name": "商都县", 
        "level": 3
    }, 
    {
        "code": "150924", 
        "sheng": "15", 
        "di": "09", 
        "xian": "24", 
        "name": "兴和县", 
        "level": 3
    }, 
    {
        "code": "150925", 
        "sheng": "15", 
        "di": "09", 
        "xian": "25", 
        "name": "凉城县", 
        "level": 3
    }, 
    {
        "code": "150926", 
        "sheng": "15", 
        "di": "09", 
        "xian": "26", 
        "name": "察哈尔右翼前旗", 
        "level": 3
    }, 
    {
        "code": "150927", 
        "sheng": "15", 
        "di": "09", 
        "xian": "27", 
        "name": "察哈尔右翼中旗", 
        "level": 3
    }, 
    {
        "code": "150928", 
        "sheng": "15", 
        "di": "09", 
        "xian": "28", 
        "name": "察哈尔右翼后旗", 
        "level": 3
    }, 
    {
        "code": "150929", 
        "sheng": "15", 
        "di": "09", 
        "xian": "29", 
        "name": "四子王旗", 
        "level": 3
    }, 
    {
        "code": "150981", 
        "sheng": "15", 
        "di": "09", 
        "xian": "81", 
        "name": "丰镇市", 
        "level": 3
    }, 
    {
        "code": "152200", 
        "sheng": "15", 
        "di": "22", 
        "xian": "00", 
        "name": "兴安盟", 
        "level": 2
    }, 
    {
        "code": "152201", 
        "sheng": "15", 
        "di": "22", 
        "xian": "01", 
        "name": "乌兰浩特市", 
        "level": 3
    }, 
    {
        "code": "152202", 
        "sheng": "15", 
        "di": "22", 
        "xian": "02", 
        "name": "阿尔山市", 
        "level": 3
    }, 
    {
        "code": "152221", 
        "sheng": "15", 
        "di": "22", 
        "xian": "21", 
        "name": "科尔沁右翼前旗", 
        "level": 3
    }, 
    {
        "code": "152222", 
        "sheng": "15", 
        "di": "22", 
        "xian": "22", 
        "name": "科尔沁右翼中旗", 
        "level": 3
    }, 
    {
        "code": "152223", 
        "sheng": "15", 
        "di": "22", 
        "xian": "23", 
        "name": "扎赉特旗", 
        "level": 3
    }, 
    {
        "code": "152224", 
        "sheng": "15", 
        "di": "22", 
        "xian": "24", 
        "name": "突泉县", 
        "level": 3
    }, 
    {
        "code": "152500", 
        "sheng": "15", 
        "di": "25", 
        "xian": "00", 
        "name": "锡林郭勒盟", 
        "level": 2
    }, 
    {
        "code": "152501", 
        "sheng": "15", 
        "di": "25", 
        "xian": "01", 
        "name": "二连浩特市", 
        "level": 3
    }, 
    {
        "code": "152502", 
        "sheng": "15", 
        "di": "25", 
        "xian": "02", 
        "name": "锡林浩特市", 
        "level": 3
    }, 
    {
        "code": "152522", 
        "sheng": "15", 
        "di": "25", 
        "xian": "22", 
        "name": "阿巴嘎旗", 
        "level": 3
    }, 
    {
        "code": "152523", 
        "sheng": "15", 
        "di": "25", 
        "xian": "23", 
        "name": "苏尼特左旗", 
        "level": 3
    }, 
    {
        "code": "152524", 
        "sheng": "15", 
        "di": "25", 
        "xian": "24", 
        "name": "苏尼特右旗", 
        "level": 3
    }, 
    {
        "code": "152525", 
        "sheng": "15", 
        "di": "25", 
        "xian": "25", 
        "name": "东乌珠穆沁旗", 
        "level": 3
    }, 
    {
        "code": "152526", 
        "sheng": "15", 
        "di": "25", 
        "xian": "26", 
        "name": "西乌珠穆沁旗", 
        "level": 3
    }, 
    {
        "code": "152527", 
        "sheng": "15", 
        "di": "25", 
        "xian": "27", 
        "name": "太仆寺旗", 
        "level": 3
    }, 
    {
        "code": "152528", 
        "sheng": "15", 
        "di": "25", 
        "xian": "28", 
        "name": "镶黄旗", 
        "level": 3
    }, 
    {
        "code": "152529", 
        "sheng": "15", 
        "di": "25", 
        "xian": "29", 
        "name": "正镶白旗", 
        "level": 3
    }, 
    {
        "code": "152530", 
        "sheng": "15", 
        "di": "25", 
        "xian": "30", 
        "name": "正蓝旗", 
        "level": 3
    }, 
    {
        "code": "152531", 
        "sheng": "15", 
        "di": "25", 
        "xian": "31", 
        "name": "多伦县", 
        "level": 3
    }, 
    {
        "code": "152900", 
        "sheng": "15", 
        "di": "29", 
        "xian": "00", 
        "name": "阿拉善盟", 
        "level": 2
    }, 
    {
        "code": "152921", 
        "sheng": "15", 
        "di": "29", 
        "xian": "21", 
        "name": "阿拉善左旗", 
        "level": 3
    }, 
    {
        "code": "152922", 
        "sheng": "15", 
        "di": "29", 
        "xian": "22", 
        "name": "阿拉善右旗", 
        "level": 3
    }, 
    {
        "code": "152923", 
        "sheng": "15", 
        "di": "29", 
        "xian": "23", 
        "name": "额济纳旗", 
        "level": 3
    }, 
    {
        "code": "210000", 
        "sheng": "21", 
        "di": "00", 
        "xian": "00", 
        "name": "辽宁省", 
        "level": 1
    }, 
    {
        "code": "210100", 
        "sheng": "21", 
        "di": "01", 
        "xian": "00", 
        "name": "沈阳市", 
        "level": 2
    }, 
    {
        "code": "210102", 
        "sheng": "21", 
        "di": "01", 
        "xian": "02", 
        "name": "和平区", 
        "level": 3
    }, 
    {
        "code": "210103", 
        "sheng": "21", 
        "di": "01", 
        "xian": "03", 
        "name": "沈河区", 
        "level": 3
    }, 
    {
        "code": "210104", 
        "sheng": "21", 
        "di": "01", 
        "xian": "04", 
        "name": "大东区", 
        "level": 3
    }, 
    {
        "code": "210105", 
        "sheng": "21", 
        "di": "01", 
        "xian": "05", 
        "name": "皇姑区", 
        "level": 3
    }, 
    {
        "code": "210106", 
        "sheng": "21", 
        "di": "01", 
        "xian": "06", 
        "name": "铁西区", 
        "level": 3
    }, 
    {
        "code": "210111", 
        "sheng": "21", 
        "di": "01", 
        "xian": "11", 
        "name": "苏家屯区", 
        "level": 3
    }, 
    {
        "code": "210112", 
        "sheng": "21", 
        "di": "01", 
        "xian": "12", 
        "name": "浑南新区", 
        "level": 3
    }, 
    {
        "code": "210113", 
        "sheng": "21", 
        "di": "01", 
        "xian": "13", 
        "name": "沈北新区", 
        "level": 3
    }, 
    {
        "code": "210114", 
        "sheng": "21", 
        "di": "01", 
        "xian": "14", 
        "name": "于洪区", 
        "level": 3
    }, 
    {
        "code": "210115", 
        "sheng": "21", 
        "di": "01", 
        "xian": "15", 
        "name": "辽中区", 
        "level": 3
    }, 
    {
        "code": "210123", 
        "sheng": "21", 
        "di": "01", 
        "xian": "23", 
        "name": "康平县", 
        "level": 3
    }, 
    {
        "code": "210124", 
        "sheng": "21", 
        "di": "01", 
        "xian": "24", 
        "name": "法库县", 
        "level": 3
    }, 
    {
        "code": "210181", 
        "sheng": "21", 
        "di": "01", 
        "xian": "81", 
        "name": "新民市", 
        "level": 3
    }, 
    {
        "code": "210182", 
        "sheng": "21", 
        "di": "01", 
        "xian": "82", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "210200", 
        "sheng": "21", 
        "di": "02", 
        "xian": "00", 
        "name": "大连市", 
        "level": 2
    }, 
    {
        "code": "210202", 
        "sheng": "21", 
        "di": "02", 
        "xian": "02", 
        "name": "中山区", 
        "level": 3
    }, 
    {
        "code": "210203", 
        "sheng": "21", 
        "di": "02", 
        "xian": "03", 
        "name": "西岗区", 
        "level": 3
    }, 
    {
        "code": "210204", 
        "sheng": "21", 
        "di": "02", 
        "xian": "04", 
        "name": "沙河口区", 
        "level": 3
    }, 
    {
        "code": "210211", 
        "sheng": "21", 
        "di": "02", 
        "xian": "11", 
        "name": "甘井子区", 
        "level": 3
    }, 
    {
        "code": "210212", 
        "sheng": "21", 
        "di": "02", 
        "xian": "12", 
        "name": "旅顺口区", 
        "level": 3
    }, 
    {
        "code": "210213", 
        "sheng": "21", 
        "di": "02", 
        "xian": "13", 
        "name": "金州区", 
        "level": 3
    }, 
    {
        "code": "210214", 
        "sheng": "21", 
        "di": "02", 
        "xian": "14", 
        "name": "普兰店市", 
        "level": 3
    }, 
    {
        "code": "210224", 
        "sheng": "21", 
        "di": "02", 
        "xian": "24", 
        "name": "长海县", 
        "level": 3
    }, 
    {
        "code": "210281", 
        "sheng": "21", 
        "di": "02", 
        "xian": "81", 
        "name": "瓦房店市", 
        "level": 3
    }, 
    {
        "code": "210283", 
        "sheng": "21", 
        "di": "02", 
        "xian": "83", 
        "name": "庄河市", 
        "level": 3
    }, 
    {
        "code": "210284", 
        "sheng": "21", 
        "di": "02", 
        "xian": "84", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "210285", 
        "sheng": "21", 
        "di": "02", 
        "xian": "85", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "210286", 
        "sheng": "21", 
        "di": "02", 
        "xian": "86", 
        "name": "金普新区", 
        "level": 3
    }, 
    {
        "code": "210300", 
        "sheng": "21", 
        "di": "03", 
        "xian": "00", 
        "name": "鞍山市", 
        "level": 2
    }, 
    {
        "code": "210302", 
        "sheng": "21", 
        "di": "03", 
        "xian": "02", 
        "name": "铁东区", 
        "level": 3
    }, 
    {
        "code": "210303", 
        "sheng": "21", 
        "di": "03", 
        "xian": "03", 
        "name": "铁西区", 
        "level": 3
    }, 
    {
        "code": "210304", 
        "sheng": "21", 
        "di": "03", 
        "xian": "04", 
        "name": "立山区", 
        "level": 3
    }, 
    {
        "code": "210311", 
        "sheng": "21", 
        "di": "03", 
        "xian": "11", 
        "name": "千山区", 
        "level": 3
    }, 
    {
        "code": "210321", 
        "sheng": "21", 
        "di": "03", 
        "xian": "21", 
        "name": "台安县", 
        "level": 3
    }, 
    {
        "code": "210323", 
        "sheng": "21", 
        "di": "03", 
        "xian": "23", 
        "name": "岫岩满族自治县", 
        "level": 3
    }, 
    {
        "code": "210381", 
        "sheng": "21", 
        "di": "03", 
        "xian": "81", 
        "name": "海城市", 
        "level": 3
    }, 
    {
        "code": "210382", 
        "sheng": "21", 
        "di": "03", 
        "xian": "82", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "210400", 
        "sheng": "21", 
        "di": "04", 
        "xian": "00", 
        "name": "抚顺市", 
        "level": 2
    }, 
    {
        "code": "210402", 
        "sheng": "21", 
        "di": "04", 
        "xian": "02", 
        "name": "新抚区", 
        "level": 3
    }, 
    {
        "code": "210403", 
        "sheng": "21", 
        "di": "04", 
        "xian": "03", 
        "name": "东洲区", 
        "level": 3
    }, 
    {
        "code": "210404", 
        "sheng": "21", 
        "di": "04", 
        "xian": "04", 
        "name": "望花区", 
        "level": 3
    }, 
    {
        "code": "210411", 
        "sheng": "21", 
        "di": "04", 
        "xian": "11", 
        "name": "顺城区", 
        "level": 3
    }, 
    {
        "code": "210421", 
        "sheng": "21", 
        "di": "04", 
        "xian": "21", 
        "name": "抚顺县", 
        "level": 3
    }, 
    {
        "code": "210422", 
        "sheng": "21", 
        "di": "04", 
        "xian": "22", 
        "name": "新宾满族自治县", 
        "level": 3
    }, 
    {
        "code": "210423", 
        "sheng": "21", 
        "di": "04", 
        "xian": "23", 
        "name": "清原满族自治县", 
        "level": 3
    }, 
    {
        "code": "210500", 
        "sheng": "21", 
        "di": "05", 
        "xian": "00", 
        "name": "本溪市", 
        "level": 2
    }, 
    {
        "code": "210502", 
        "sheng": "21", 
        "di": "05", 
        "xian": "02", 
        "name": "平山区", 
        "level": 3
    }, 
    {
        "code": "210503", 
        "sheng": "21", 
        "di": "05", 
        "xian": "03", 
        "name": "溪湖区", 
        "level": 3
    }, 
    {
        "code": "210504", 
        "sheng": "21", 
        "di": "05", 
        "xian": "04", 
        "name": "明山区", 
        "level": 3
    }, 
    {
        "code": "210505", 
        "sheng": "21", 
        "di": "05", 
        "xian": "05", 
        "name": "南芬区", 
        "level": 3
    }, 
    {
        "code": "210521", 
        "sheng": "21", 
        "di": "05", 
        "xian": "21", 
        "name": "本溪满族自治县", 
        "level": 3
    }, 
    {
        "code": "210522", 
        "sheng": "21", 
        "di": "05", 
        "xian": "22", 
        "name": "桓仁满族自治县", 
        "level": 3
    }, 
    {
        "code": "210600", 
        "sheng": "21", 
        "di": "06", 
        "xian": "00", 
        "name": "丹东市", 
        "level": 2
    }, 
    {
        "code": "210602", 
        "sheng": "21", 
        "di": "06", 
        "xian": "02", 
        "name": "元宝区", 
        "level": 3
    }, 
    {
        "code": "210603", 
        "sheng": "21", 
        "di": "06", 
        "xian": "03", 
        "name": "振兴区", 
        "level": 3
    }, 
    {
        "code": "210604", 
        "sheng": "21", 
        "di": "06", 
        "xian": "04", 
        "name": "振安区", 
        "level": 3
    }, 
    {
        "code": "210624", 
        "sheng": "21", 
        "di": "06", 
        "xian": "24", 
        "name": "宽甸满族自治县", 
        "level": 3
    }, 
    {
        "code": "210681", 
        "sheng": "21", 
        "di": "06", 
        "xian": "81", 
        "name": "东港市", 
        "level": 3
    }, 
    {
        "code": "210682", 
        "sheng": "21", 
        "di": "06", 
        "xian": "82", 
        "name": "凤城市", 
        "level": 3
    }, 
    {
        "code": "210700", 
        "sheng": "21", 
        "di": "07", 
        "xian": "00", 
        "name": "锦州市", 
        "level": 2
    }, 
    {
        "code": "210702", 
        "sheng": "21", 
        "di": "07", 
        "xian": "02", 
        "name": "古塔区", 
        "level": 3
    }, 
    {
        "code": "210703", 
        "sheng": "21", 
        "di": "07", 
        "xian": "03", 
        "name": "凌河区", 
        "level": 3
    }, 
    {
        "code": "210711", 
        "sheng": "21", 
        "di": "07", 
        "xian": "11", 
        "name": "太和区", 
        "level": 3
    }, 
    {
        "code": "210726", 
        "sheng": "21", 
        "di": "07", 
        "xian": "26", 
        "name": "黑山县", 
        "level": 3
    }, 
    {
        "code": "210727", 
        "sheng": "21", 
        "di": "07", 
        "xian": "27", 
        "name": "义县", 
        "level": 3
    }, 
    {
        "code": "210781", 
        "sheng": "21", 
        "di": "07", 
        "xian": "81", 
        "name": "凌海市", 
        "level": 3
    }, 
    {
        "code": "210782", 
        "sheng": "21", 
        "di": "07", 
        "xian": "82", 
        "name": "北镇市", 
        "level": 3
    }, 
    {
        "code": "210783", 
        "sheng": "21", 
        "di": "07", 
        "xian": "83", 
        "name": "松山新区", 
        "level": 3
    }, 
    {
        "code": "210784", 
        "sheng": "21", 
        "di": "07", 
        "xian": "84", 
        "name": "龙栖湾新区", 
        "level": 3
    }, 
    {
        "code": "210785", 
        "sheng": "21", 
        "di": "07", 
        "xian": "85", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "210800", 
        "sheng": "21", 
        "di": "08", 
        "xian": "00", 
        "name": "营口市", 
        "level": 2
    }, 
    {
        "code": "210802", 
        "sheng": "21", 
        "di": "08", 
        "xian": "02", 
        "name": "站前区", 
        "level": 3
    }, 
    {
        "code": "210803", 
        "sheng": "21", 
        "di": "08", 
        "xian": "03", 
        "name": "西市区", 
        "level": 3
    }, 
    {
        "code": "210804", 
        "sheng": "21", 
        "di": "08", 
        "xian": "04", 
        "name": "鲅鱼圈区", 
        "level": 3
    }, 
    {
        "code": "210811", 
        "sheng": "21", 
        "di": "08", 
        "xian": "11", 
        "name": "老边区", 
        "level": 3
    }, 
    {
        "code": "210881", 
        "sheng": "21", 
        "di": "08", 
        "xian": "81", 
        "name": "盖州市", 
        "level": 3
    }, 
    {
        "code": "210882", 
        "sheng": "21", 
        "di": "08", 
        "xian": "82", 
        "name": "大石桥市", 
        "level": 3
    }, 
    {
        "code": "210900", 
        "sheng": "21", 
        "di": "09", 
        "xian": "00", 
        "name": "阜新市", 
        "level": 2
    }, 
    {
        "code": "210902", 
        "sheng": "21", 
        "di": "09", 
        "xian": "02", 
        "name": "海州区", 
        "level": 3
    }, 
    {
        "code": "210903", 
        "sheng": "21", 
        "di": "09", 
        "xian": "03", 
        "name": "新邱区", 
        "level": 3
    }, 
    {
        "code": "210904", 
        "sheng": "21", 
        "di": "09", 
        "xian": "04", 
        "name": "太平区", 
        "level": 3
    }, 
    {
        "code": "210905", 
        "sheng": "21", 
        "di": "09", 
        "xian": "05", 
        "name": "清河门区", 
        "level": 3
    }, 
    {
        "code": "210911", 
        "sheng": "21", 
        "di": "09", 
        "xian": "11", 
        "name": "细河区", 
        "level": 3
    }, 
    {
        "code": "210921", 
        "sheng": "21", 
        "di": "09", 
        "xian": "21", 
        "name": "阜新蒙古族自治县", 
        "level": 3
    }, 
    {
        "code": "210922", 
        "sheng": "21", 
        "di": "09", 
        "xian": "22", 
        "name": "彰武县", 
        "level": 3
    }, 
    {
        "code": "211000", 
        "sheng": "21", 
        "di": "10", 
        "xian": "00", 
        "name": "辽阳市", 
        "level": 2
    }, 
    {
        "code": "211002", 
        "sheng": "21", 
        "di": "10", 
        "xian": "02", 
        "name": "白塔区", 
        "level": 3
    }, 
    {
        "code": "211003", 
        "sheng": "21", 
        "di": "10", 
        "xian": "03", 
        "name": "文圣区", 
        "level": 3
    }, 
    {
        "code": "211004", 
        "sheng": "21", 
        "di": "10", 
        "xian": "04", 
        "name": "宏伟区", 
        "level": 3
    }, 
    {
        "code": "211005", 
        "sheng": "21", 
        "di": "10", 
        "xian": "05", 
        "name": "弓长岭区", 
        "level": 3
    }, 
    {
        "code": "211011", 
        "sheng": "21", 
        "di": "10", 
        "xian": "11", 
        "name": "太子河区", 
        "level": 3
    }, 
    {
        "code": "211021", 
        "sheng": "21", 
        "di": "10", 
        "xian": "21", 
        "name": "辽阳县", 
        "level": 3
    }, 
    {
        "code": "211081", 
        "sheng": "21", 
        "di": "10", 
        "xian": "81", 
        "name": "灯塔市", 
        "level": 3
    }, 
    {
        "code": "211100", 
        "sheng": "21", 
        "di": "11", 
        "xian": "00", 
        "name": "盘锦市", 
        "level": 2
    }, 
    {
        "code": "211102", 
        "sheng": "21", 
        "di": "11", 
        "xian": "02", 
        "name": "双台子区", 
        "level": 3
    }, 
    {
        "code": "211103", 
        "sheng": "21", 
        "di": "11", 
        "xian": "03", 
        "name": "兴隆台区", 
        "level": 3
    }, 
    {
        "code": "211104", 
        "sheng": "21", 
        "di": "11", 
        "xian": "04", 
        "name": "大洼区", 
        "level": 3
    }, 
    {
        "code": "211122", 
        "sheng": "21", 
        "di": "11", 
        "xian": "22", 
        "name": "盘山县", 
        "level": 3
    }, 
    {
        "code": "211200", 
        "sheng": "21", 
        "di": "12", 
        "xian": "00", 
        "name": "铁岭市", 
        "level": 2
    }, 
    {
        "code": "211202", 
        "sheng": "21", 
        "di": "12", 
        "xian": "02", 
        "name": "银州区", 
        "level": 3
    }, 
    {
        "code": "211204", 
        "sheng": "21", 
        "di": "12", 
        "xian": "04", 
        "name": "清河区", 
        "level": 3
    }, 
    {
        "code": "211221", 
        "sheng": "21", 
        "di": "12", 
        "xian": "21", 
        "name": "铁岭县", 
        "level": 3
    }, 
    {
        "code": "211223", 
        "sheng": "21", 
        "di": "12", 
        "xian": "23", 
        "name": "西丰县", 
        "level": 3
    }, 
    {
        "code": "211224", 
        "sheng": "21", 
        "di": "12", 
        "xian": "24", 
        "name": "昌图县", 
        "level": 3
    }, 
    {
        "code": "211281", 
        "sheng": "21", 
        "di": "12", 
        "xian": "81", 
        "name": "调兵山市", 
        "level": 3
    }, 
    {
        "code": "211282", 
        "sheng": "21", 
        "di": "12", 
        "xian": "82", 
        "name": "开原市", 
        "level": 3
    }, 
    {
        "code": "211300", 
        "sheng": "21", 
        "di": "13", 
        "xian": "00", 
        "name": "朝阳市", 
        "level": 2
    }, 
    {
        "code": "211302", 
        "sheng": "21", 
        "di": "13", 
        "xian": "02", 
        "name": "双塔区", 
        "level": 3
    }, 
    {
        "code": "211303", 
        "sheng": "21", 
        "di": "13", 
        "xian": "03", 
        "name": "龙城区", 
        "level": 3
    }, 
    {
        "code": "211321", 
        "sheng": "21", 
        "di": "13", 
        "xian": "21", 
        "name": "朝阳县", 
        "level": 3
    }, 
    {
        "code": "211322", 
        "sheng": "21", 
        "di": "13", 
        "xian": "22", 
        "name": "建平县", 
        "level": 3
    }, 
    {
        "code": "211324", 
        "sheng": "21", 
        "di": "13", 
        "xian": "24", 
        "name": "喀喇沁左翼蒙古族自治县", 
        "level": 3
    }, 
    {
        "code": "211381", 
        "sheng": "21", 
        "di": "13", 
        "xian": "81", 
        "name": "北票市", 
        "level": 3
    }, 
    {
        "code": "211382", 
        "sheng": "21", 
        "di": "13", 
        "xian": "82", 
        "name": "凌源市", 
        "level": 3
    }, 
    {
        "code": "211400", 
        "sheng": "21", 
        "di": "14", 
        "xian": "00", 
        "name": "葫芦岛市", 
        "level": 2
    }, 
    {
        "code": "211402", 
        "sheng": "21", 
        "di": "14", 
        "xian": "02", 
        "name": "连山区", 
        "level": 3
    }, 
    {
        "code": "211403", 
        "sheng": "21", 
        "di": "14", 
        "xian": "03", 
        "name": "龙港区", 
        "level": 3
    }, 
    {
        "code": "211404", 
        "sheng": "21", 
        "di": "14", 
        "xian": "04", 
        "name": "南票区", 
        "level": 3
    }, 
    {
        "code": "211421", 
        "sheng": "21", 
        "di": "14", 
        "xian": "21", 
        "name": "绥中县", 
        "level": 3
    }, 
    {
        "code": "211422", 
        "sheng": "21", 
        "di": "14", 
        "xian": "22", 
        "name": "建昌县", 
        "level": 3
    }, 
    {
        "code": "211481", 
        "sheng": "21", 
        "di": "14", 
        "xian": "81", 
        "name": "兴城市", 
        "level": 3
    }, 
    {
        "code": "220000", 
        "sheng": "22", 
        "di": "00", 
        "xian": "00", 
        "name": "吉林省", 
        "level": 1
    }, 
    {
        "code": "220100", 
        "sheng": "22", 
        "di": "01", 
        "xian": "00", 
        "name": "长春市", 
        "level": 2
    }, 
    {
        "code": "220102", 
        "sheng": "22", 
        "di": "01", 
        "xian": "02", 
        "name": "南关区", 
        "level": 3
    }, 
    {
        "code": "220103", 
        "sheng": "22", 
        "di": "01", 
        "xian": "03", 
        "name": "宽城区", 
        "level": 3
    }, 
    {
        "code": "220104", 
        "sheng": "22", 
        "di": "01", 
        "xian": "04", 
        "name": "朝阳区", 
        "level": 3
    }, 
    {
        "code": "220105", 
        "sheng": "22", 
        "di": "01", 
        "xian": "05", 
        "name": "二道区", 
        "level": 3
    }, 
    {
        "code": "220106", 
        "sheng": "22", 
        "di": "01", 
        "xian": "06", 
        "name": "绿园区", 
        "level": 3
    }, 
    {
        "code": "220112", 
        "sheng": "22", 
        "di": "01", 
        "xian": "12", 
        "name": "双阳区", 
        "level": 3
    }, 
    {
        "code": "220113", 
        "sheng": "22", 
        "di": "01", 
        "xian": "13", 
        "name": "九台区", 
        "level": 3
    }, 
    {
        "code": "220122", 
        "sheng": "22", 
        "di": "01", 
        "xian": "22", 
        "name": "农安县", 
        "level": 3
    }, 
    {
        "code": "220182", 
        "sheng": "22", 
        "di": "01", 
        "xian": "82", 
        "name": "榆树市", 
        "level": 3
    }, 
    {
        "code": "220183", 
        "sheng": "22", 
        "di": "01", 
        "xian": "83", 
        "name": "德惠市", 
        "level": 3
    }, 
    {
        "code": "220184", 
        "sheng": "22", 
        "di": "01", 
        "xian": "84", 
        "name": "长春新区", 
        "level": 3
    }, 
    {
        "code": "220185", 
        "sheng": "22", 
        "di": "01", 
        "xian": "85", 
        "name": "高新技术产业开发区", 
        "level": 3
    }, 
    {
        "code": "220186", 
        "sheng": "22", 
        "di": "01", 
        "xian": "86", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "220187", 
        "sheng": "22", 
        "di": "01", 
        "xian": "87", 
        "name": "汽车产业开发区", 
        "level": 3
    }, 
    {
        "code": "220188", 
        "sheng": "22", 
        "di": "01", 
        "xian": "88", 
        "name": "兴隆综合保税区", 
        "level": 3
    }, 
    {
        "code": "220200", 
        "sheng": "22", 
        "di": "02", 
        "xian": "00", 
        "name": "吉林市", 
        "level": 2
    }, 
    {
        "code": "220202", 
        "sheng": "22", 
        "di": "02", 
        "xian": "02", 
        "name": "昌邑区", 
        "level": 3
    }, 
    {
        "code": "220203", 
        "sheng": "22", 
        "di": "02", 
        "xian": "03", 
        "name": "龙潭区", 
        "level": 3
    }, 
    {
        "code": "220204", 
        "sheng": "22", 
        "di": "02", 
        "xian": "04", 
        "name": "船营区", 
        "level": 3
    }, 
    {
        "code": "220211", 
        "sheng": "22", 
        "di": "02", 
        "xian": "11", 
        "name": "丰满区", 
        "level": 3
    }, 
    {
        "code": "220221", 
        "sheng": "22", 
        "di": "02", 
        "xian": "21", 
        "name": "永吉县", 
        "level": 3
    }, 
    {
        "code": "220281", 
        "sheng": "22", 
        "di": "02", 
        "xian": "81", 
        "name": "蛟河市", 
        "level": 3
    }, 
    {
        "code": "220282", 
        "sheng": "22", 
        "di": "02", 
        "xian": "82", 
        "name": "桦甸市", 
        "level": 3
    }, 
    {
        "code": "220283", 
        "sheng": "22", 
        "di": "02", 
        "xian": "83", 
        "name": "舒兰市", 
        "level": 3
    }, 
    {
        "code": "220284", 
        "sheng": "22", 
        "di": "02", 
        "xian": "84", 
        "name": "磐石市", 
        "level": 3
    }, 
    {
        "code": "220285", 
        "sheng": "22", 
        "di": "02", 
        "xian": "85", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "220300", 
        "sheng": "22", 
        "di": "03", 
        "xian": "00", 
        "name": "四平市", 
        "level": 2
    }, 
    {
        "code": "220302", 
        "sheng": "22", 
        "di": "03", 
        "xian": "02", 
        "name": "铁西区", 
        "level": 3
    }, 
    {
        "code": "220303", 
        "sheng": "22", 
        "di": "03", 
        "xian": "03", 
        "name": "铁东区", 
        "level": 3
    }, 
    {
        "code": "220322", 
        "sheng": "22", 
        "di": "03", 
        "xian": "22", 
        "name": "梨树县", 
        "level": 3
    }, 
    {
        "code": "220323", 
        "sheng": "22", 
        "di": "03", 
        "xian": "23", 
        "name": "伊通满族自治县", 
        "level": 3
    }, 
    {
        "code": "220381", 
        "sheng": "22", 
        "di": "03", 
        "xian": "81", 
        "name": "公主岭市", 
        "level": 3
    }, 
    {
        "code": "220382", 
        "sheng": "22", 
        "di": "03", 
        "xian": "82", 
        "name": "双辽市", 
        "level": 3
    }, 
    {
        "code": "220400", 
        "sheng": "22", 
        "di": "04", 
        "xian": "00", 
        "name": "辽源市", 
        "level": 2
    }, 
    {
        "code": "220402", 
        "sheng": "22", 
        "di": "04", 
        "xian": "02", 
        "name": "龙山区", 
        "level": 3
    }, 
    {
        "code": "220403", 
        "sheng": "22", 
        "di": "04", 
        "xian": "03", 
        "name": "西安区", 
        "level": 3
    }, 
    {
        "code": "220421", 
        "sheng": "22", 
        "di": "04", 
        "xian": "21", 
        "name": "东丰县", 
        "level": 3
    }, 
    {
        "code": "220422", 
        "sheng": "22", 
        "di": "04", 
        "xian": "22", 
        "name": "东辽县", 
        "level": 3
    }, 
    {
        "code": "220500", 
        "sheng": "22", 
        "di": "05", 
        "xian": "00", 
        "name": "通化市", 
        "level": 2
    }, 
    {
        "code": "220502", 
        "sheng": "22", 
        "di": "05", 
        "xian": "02", 
        "name": "东昌区", 
        "level": 3
    }, 
    {
        "code": "220503", 
        "sheng": "22", 
        "di": "05", 
        "xian": "03", 
        "name": "二道江区", 
        "level": 3
    }, 
    {
        "code": "220521", 
        "sheng": "22", 
        "di": "05", 
        "xian": "21", 
        "name": "通化县", 
        "level": 3
    }, 
    {
        "code": "220523", 
        "sheng": "22", 
        "di": "05", 
        "xian": "23", 
        "name": "辉南县", 
        "level": 3
    }, 
    {
        "code": "220524", 
        "sheng": "22", 
        "di": "05", 
        "xian": "24", 
        "name": "柳河县", 
        "level": 3
    }, 
    {
        "code": "220581", 
        "sheng": "22", 
        "di": "05", 
        "xian": "81", 
        "name": "梅河口市", 
        "level": 3
    }, 
    {
        "code": "220582", 
        "sheng": "22", 
        "di": "05", 
        "xian": "82", 
        "name": "集安市", 
        "level": 3
    }, 
    {
        "code": "220600", 
        "sheng": "22", 
        "di": "06", 
        "xian": "00", 
        "name": "白山市", 
        "level": 2
    }, 
    {
        "code": "220602", 
        "sheng": "22", 
        "di": "06", 
        "xian": "02", 
        "name": "浑江区", 
        "level": 3
    }, 
    {
        "code": "220605", 
        "sheng": "22", 
        "di": "06", 
        "xian": "05", 
        "name": "江源区", 
        "level": 3
    }, 
    {
        "code": "220621", 
        "sheng": "22", 
        "di": "06", 
        "xian": "21", 
        "name": "抚松县", 
        "level": 3
    }, 
    {
        "code": "220622", 
        "sheng": "22", 
        "di": "06", 
        "xian": "22", 
        "name": "靖宇县", 
        "level": 3
    }, 
    {
        "code": "220623", 
        "sheng": "22", 
        "di": "06", 
        "xian": "23", 
        "name": "长白朝鲜族自治县", 
        "level": 3
    }, 
    {
        "code": "220681", 
        "sheng": "22", 
        "di": "06", 
        "xian": "81", 
        "name": "临江市", 
        "level": 3
    }, 
    {
        "code": "220700", 
        "sheng": "22", 
        "di": "07", 
        "xian": "00", 
        "name": "松原市", 
        "level": 2
    }, 
    {
        "code": "220702", 
        "sheng": "22", 
        "di": "07", 
        "xian": "02", 
        "name": "宁江区", 
        "level": 3
    }, 
    {
        "code": "220721", 
        "sheng": "22", 
        "di": "07", 
        "xian": "21", 
        "name": "前郭尔罗斯蒙古族自治县", 
        "level": 3
    }, 
    {
        "code": "220722", 
        "sheng": "22", 
        "di": "07", 
        "xian": "22", 
        "name": "长岭县", 
        "level": 3
    }, 
    {
        "code": "220723", 
        "sheng": "22", 
        "di": "07", 
        "xian": "23", 
        "name": "乾安县", 
        "level": 3
    }, 
    {
        "code": "220781", 
        "sheng": "22", 
        "di": "07", 
        "xian": "81", 
        "name": "扶余市", 
        "level": 3
    }, 
    {
        "code": "220800", 
        "sheng": "22", 
        "di": "08", 
        "xian": "00", 
        "name": "白城市", 
        "level": 2
    }, 
    {
        "code": "220802", 
        "sheng": "22", 
        "di": "08", 
        "xian": "02", 
        "name": "洮北区", 
        "level": 3
    }, 
    {
        "code": "220821", 
        "sheng": "22", 
        "di": "08", 
        "xian": "21", 
        "name": "镇赉县", 
        "level": 3
    }, 
    {
        "code": "220822", 
        "sheng": "22", 
        "di": "08", 
        "xian": "22", 
        "name": "通榆县", 
        "level": 3
    }, 
    {
        "code": "220881", 
        "sheng": "22", 
        "di": "08", 
        "xian": "81", 
        "name": "洮南市", 
        "level": 3
    }, 
    {
        "code": "220882", 
        "sheng": "22", 
        "di": "08", 
        "xian": "82", 
        "name": "大安市", 
        "level": 3
    }, 
    {
        "code": "222400", 
        "sheng": "22", 
        "di": "24", 
        "xian": "00", 
        "name": "延边朝鲜族自治州", 
        "level": 2
    }, 
    {
        "code": "222401", 
        "sheng": "22", 
        "di": "24", 
        "xian": "01", 
        "name": "延吉市", 
        "level": 3
    }, 
    {
        "code": "222402", 
        "sheng": "22", 
        "di": "24", 
        "xian": "02", 
        "name": "图们市", 
        "level": 3
    }, 
    {
        "code": "222403", 
        "sheng": "22", 
        "di": "24", 
        "xian": "03", 
        "name": "敦化市", 
        "level": 3
    }, 
    {
        "code": "222404", 
        "sheng": "22", 
        "di": "24", 
        "xian": "04", 
        "name": "珲春市", 
        "level": 3
    }, 
    {
        "code": "222405", 
        "sheng": "22", 
        "di": "24", 
        "xian": "05", 
        "name": "龙井市", 
        "level": 3
    }, 
    {
        "code": "222406", 
        "sheng": "22", 
        "di": "24", 
        "xian": "06", 
        "name": "和龙市", 
        "level": 3
    }, 
    {
        "code": "222424", 
        "sheng": "22", 
        "di": "24", 
        "xian": "24", 
        "name": "汪清县", 
        "level": 3
    }, 
    {
        "code": "222426", 
        "sheng": "22", 
        "di": "24", 
        "xian": "26", 
        "name": "安图县", 
        "level": 3
    }, 
    {
        "code": "230000", 
        "sheng": "23", 
        "di": "00", 
        "xian": "00", 
        "name": "黑龙江省", 
        "level": 1
    }, 
    {
        "code": "230100", 
        "sheng": "23", 
        "di": "01", 
        "xian": "00", 
        "name": "哈尔滨市", 
        "level": 2
    }, 
    {
        "code": "230102", 
        "sheng": "23", 
        "di": "01", 
        "xian": "02", 
        "name": "道里区", 
        "level": 3
    }, 
    {
        "code": "230103", 
        "sheng": "23", 
        "di": "01", 
        "xian": "03", 
        "name": "南岗区", 
        "level": 3
    }, 
    {
        "code": "230104", 
        "sheng": "23", 
        "di": "01", 
        "xian": "04", 
        "name": "道外区", 
        "level": 3
    }, 
    {
        "code": "230108", 
        "sheng": "23", 
        "di": "01", 
        "xian": "08", 
        "name": "平房区", 
        "level": 3
    }, 
    {
        "code": "230109", 
        "sheng": "23", 
        "di": "01", 
        "xian": "09", 
        "name": "松北区", 
        "level": 3
    }, 
    {
        "code": "230110", 
        "sheng": "23", 
        "di": "01", 
        "xian": "10", 
        "name": "香坊区", 
        "level": 3
    }, 
    {
        "code": "230111", 
        "sheng": "23", 
        "di": "01", 
        "xian": "11", 
        "name": "呼兰区", 
        "level": 3
    }, 
    {
        "code": "230112", 
        "sheng": "23", 
        "di": "01", 
        "xian": "12", 
        "name": "阿城区", 
        "level": 3
    }, 
    {
        "code": "230113", 
        "sheng": "23", 
        "di": "01", 
        "xian": "13", 
        "name": "双城区", 
        "level": 3
    }, 
    {
        "code": "230123", 
        "sheng": "23", 
        "di": "01", 
        "xian": "23", 
        "name": "依兰县", 
        "level": 3
    }, 
    {
        "code": "230124", 
        "sheng": "23", 
        "di": "01", 
        "xian": "24", 
        "name": "方正县", 
        "level": 3
    }, 
    {
        "code": "230125", 
        "sheng": "23", 
        "di": "01", 
        "xian": "25", 
        "name": "宾县", 
        "level": 3
    }, 
    {
        "code": "230126", 
        "sheng": "23", 
        "di": "01", 
        "xian": "26", 
        "name": "巴彦县", 
        "level": 3
    }, 
    {
        "code": "230127", 
        "sheng": "23", 
        "di": "01", 
        "xian": "27", 
        "name": "木兰县", 
        "level": 3
    }, 
    {
        "code": "230128", 
        "sheng": "23", 
        "di": "01", 
        "xian": "28", 
        "name": "通河县", 
        "level": 3
    }, 
    {
        "code": "230129", 
        "sheng": "23", 
        "di": "01", 
        "xian": "29", 
        "name": "延寿县", 
        "level": 3
    }, 
    {
        "code": "230183", 
        "sheng": "23", 
        "di": "01", 
        "xian": "83", 
        "name": "尚志市", 
        "level": 3
    }, 
    {
        "code": "230184", 
        "sheng": "23", 
        "di": "01", 
        "xian": "84", 
        "name": "五常市", 
        "level": 3
    }, 
    {
        "code": "230185", 
        "sheng": "23", 
        "di": "01", 
        "xian": "85", 
        "name": "哈尔滨新区", 
        "level": 3
    }, 
    {
        "code": "230186", 
        "sheng": "23", 
        "di": "01", 
        "xian": "86", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "230200", 
        "sheng": "23", 
        "di": "02", 
        "xian": "00", 
        "name": "齐齐哈尔市", 
        "level": 2
    }, 
    {
        "code": "230202", 
        "sheng": "23", 
        "di": "02", 
        "xian": "02", 
        "name": "龙沙区", 
        "level": 3
    }, 
    {
        "code": "230203", 
        "sheng": "23", 
        "di": "02", 
        "xian": "03", 
        "name": "建华区", 
        "level": 3
    }, 
    {
        "code": "230204", 
        "sheng": "23", 
        "di": "02", 
        "xian": "04", 
        "name": "铁锋区", 
        "level": 3
    }, 
    {
        "code": "230205", 
        "sheng": "23", 
        "di": "02", 
        "xian": "05", 
        "name": "昂昂溪区", 
        "level": 3
    }, 
    {
        "code": "230206", 
        "sheng": "23", 
        "di": "02", 
        "xian": "06", 
        "name": "富拉尔基区", 
        "level": 3
    }, 
    {
        "code": "230207", 
        "sheng": "23", 
        "di": "02", 
        "xian": "07", 
        "name": "碾子山区", 
        "level": 3
    }, 
    {
        "code": "230208", 
        "sheng": "23", 
        "di": "02", 
        "xian": "08", 
        "name": "梅里斯达斡尔族区", 
        "level": 3
    }, 
    {
        "code": "230221", 
        "sheng": "23", 
        "di": "02", 
        "xian": "21", 
        "name": "龙江县", 
        "level": 3
    }, 
    {
        "code": "230223", 
        "sheng": "23", 
        "di": "02", 
        "xian": "23", 
        "name": "依安县", 
        "level": 3
    }, 
    {
        "code": "230224", 
        "sheng": "23", 
        "di": "02", 
        "xian": "24", 
        "name": "泰来县", 
        "level": 3
    }, 
    {
        "code": "230225", 
        "sheng": "23", 
        "di": "02", 
        "xian": "25", 
        "name": "甘南县", 
        "level": 3
    }, 
    {
        "code": "230227", 
        "sheng": "23", 
        "di": "02", 
        "xian": "27", 
        "name": "富裕县", 
        "level": 3
    }, 
    {
        "code": "230229", 
        "sheng": "23", 
        "di": "02", 
        "xian": "29", 
        "name": "克山县", 
        "level": 3
    }, 
    {
        "code": "230230", 
        "sheng": "23", 
        "di": "02", 
        "xian": "30", 
        "name": "克东县", 
        "level": 3
    }, 
    {
        "code": "230231", 
        "sheng": "23", 
        "di": "02", 
        "xian": "31", 
        "name": "拜泉县", 
        "level": 3
    }, 
    {
        "code": "230281", 
        "sheng": "23", 
        "di": "02", 
        "xian": "81", 
        "name": "讷河市", 
        "level": 3
    }, 
    {
        "code": "230282", 
        "sheng": "23", 
        "di": "02", 
        "xian": "82", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "230300", 
        "sheng": "23", 
        "di": "03", 
        "xian": "00", 
        "name": "鸡西市", 
        "level": 2
    }, 
    {
        "code": "230302", 
        "sheng": "23", 
        "di": "03", 
        "xian": "02", 
        "name": "鸡冠区", 
        "level": 3
    }, 
    {
        "code": "230303", 
        "sheng": "23", 
        "di": "03", 
        "xian": "03", 
        "name": "恒山区", 
        "level": 3
    }, 
    {
        "code": "230304", 
        "sheng": "23", 
        "di": "03", 
        "xian": "04", 
        "name": "滴道区", 
        "level": 3
    }, 
    {
        "code": "230305", 
        "sheng": "23", 
        "di": "03", 
        "xian": "05", 
        "name": "梨树区", 
        "level": 3
    }, 
    {
        "code": "230306", 
        "sheng": "23", 
        "di": "03", 
        "xian": "06", 
        "name": "城子河区", 
        "level": 3
    }, 
    {
        "code": "230307", 
        "sheng": "23", 
        "di": "03", 
        "xian": "07", 
        "name": "麻山区", 
        "level": 3
    }, 
    {
        "code": "230321", 
        "sheng": "23", 
        "di": "03", 
        "xian": "21", 
        "name": "鸡东县", 
        "level": 3
    }, 
    {
        "code": "230381", 
        "sheng": "23", 
        "di": "03", 
        "xian": "81", 
        "name": "虎林市", 
        "level": 3
    }, 
    {
        "code": "230382", 
        "sheng": "23", 
        "di": "03", 
        "xian": "82", 
        "name": "密山市", 
        "level": 3
    }, 
    {
        "code": "230400", 
        "sheng": "23", 
        "di": "04", 
        "xian": "00", 
        "name": "鹤岗市", 
        "level": 2
    }, 
    {
        "code": "230402", 
        "sheng": "23", 
        "di": "04", 
        "xian": "02", 
        "name": "向阳区", 
        "level": 3
    }, 
    {
        "code": "230403", 
        "sheng": "23", 
        "di": "04", 
        "xian": "03", 
        "name": "工农区", 
        "level": 3
    }, 
    {
        "code": "230404", 
        "sheng": "23", 
        "di": "04", 
        "xian": "04", 
        "name": "南山区", 
        "level": 3
    }, 
    {
        "code": "230405", 
        "sheng": "23", 
        "di": "04", 
        "xian": "05", 
        "name": "兴安区", 
        "level": 3
    }, 
    {
        "code": "230406", 
        "sheng": "23", 
        "di": "04", 
        "xian": "06", 
        "name": "东山区", 
        "level": 3
    }, 
    {
        "code": "230407", 
        "sheng": "23", 
        "di": "04", 
        "xian": "07", 
        "name": "兴山区", 
        "level": 3
    }, 
    {
        "code": "230421", 
        "sheng": "23", 
        "di": "04", 
        "xian": "21", 
        "name": "萝北县", 
        "level": 3
    }, 
    {
        "code": "230422", 
        "sheng": "23", 
        "di": "04", 
        "xian": "22", 
        "name": "绥滨县", 
        "level": 3
    }, 
    {
        "code": "230500", 
        "sheng": "23", 
        "di": "05", 
        "xian": "00", 
        "name": "双鸭山市", 
        "level": 2
    }, 
    {
        "code": "230502", 
        "sheng": "23", 
        "di": "05", 
        "xian": "02", 
        "name": "尖山区", 
        "level": 3
    }, 
    {
        "code": "230503", 
        "sheng": "23", 
        "di": "05", 
        "xian": "03", 
        "name": "岭东区", 
        "level": 3
    }, 
    {
        "code": "230505", 
        "sheng": "23", 
        "di": "05", 
        "xian": "05", 
        "name": "四方台区", 
        "level": 3
    }, 
    {
        "code": "230506", 
        "sheng": "23", 
        "di": "05", 
        "xian": "06", 
        "name": "宝山区", 
        "level": 3
    }, 
    {
        "code": "230521", 
        "sheng": "23", 
        "di": "05", 
        "xian": "21", 
        "name": "集贤县", 
        "level": 3
    }, 
    {
        "code": "230522", 
        "sheng": "23", 
        "di": "05", 
        "xian": "22", 
        "name": "友谊县", 
        "level": 3
    }, 
    {
        "code": "230523", 
        "sheng": "23", 
        "di": "05", 
        "xian": "23", 
        "name": "宝清县", 
        "level": 3
    }, 
    {
        "code": "230524", 
        "sheng": "23", 
        "di": "05", 
        "xian": "24", 
        "name": "饶河县", 
        "level": 3
    }, 
    {
        "code": "230600", 
        "sheng": "23", 
        "di": "06", 
        "xian": "00", 
        "name": "大庆市", 
        "level": 2
    }, 
    {
        "code": "230602", 
        "sheng": "23", 
        "di": "06", 
        "xian": "02", 
        "name": "萨尔图区", 
        "level": 3
    }, 
    {
        "code": "230603", 
        "sheng": "23", 
        "di": "06", 
        "xian": "03", 
        "name": "龙凤区", 
        "level": 3
    }, 
    {
        "code": "230604", 
        "sheng": "23", 
        "di": "06", 
        "xian": "04", 
        "name": "让胡路区", 
        "level": 3
    }, 
    {
        "code": "230605", 
        "sheng": "23", 
        "di": "06", 
        "xian": "05", 
        "name": "红岗区", 
        "level": 3
    }, 
    {
        "code": "230606", 
        "sheng": "23", 
        "di": "06", 
        "xian": "06", 
        "name": "大同区", 
        "level": 3
    }, 
    {
        "code": "230621", 
        "sheng": "23", 
        "di": "06", 
        "xian": "21", 
        "name": "肇州县", 
        "level": 3
    }, 
    {
        "code": "230622", 
        "sheng": "23", 
        "di": "06", 
        "xian": "22", 
        "name": "肇源县", 
        "level": 3
    }, 
    {
        "code": "230623", 
        "sheng": "23", 
        "di": "06", 
        "xian": "23", 
        "name": "林甸县", 
        "level": 3
    }, 
    {
        "code": "230624", 
        "sheng": "23", 
        "di": "06", 
        "xian": "24", 
        "name": "杜尔伯特蒙古族自治县", 
        "level": 3
    }, 
    {
        "code": "230625", 
        "sheng": "23", 
        "di": "06", 
        "xian": "25", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "230700", 
        "sheng": "23", 
        "di": "07", 
        "xian": "00", 
        "name": "伊春市", 
        "level": 2
    }, 
    {
        "code": "230702", 
        "sheng": "23", 
        "di": "07", 
        "xian": "02", 
        "name": "伊春区", 
        "level": 3
    }, 
    {
        "code": "230703", 
        "sheng": "23", 
        "di": "07", 
        "xian": "03", 
        "name": "南岔区", 
        "level": 3
    }, 
    {
        "code": "230704", 
        "sheng": "23", 
        "di": "07", 
        "xian": "04", 
        "name": "友好区", 
        "level": 3
    }, 
    {
        "code": "230705", 
        "sheng": "23", 
        "di": "07", 
        "xian": "05", 
        "name": "西林区", 
        "level": 3
    }, 
    {
        "code": "230706", 
        "sheng": "23", 
        "di": "07", 
        "xian": "06", 
        "name": "翠峦区", 
        "level": 3
    }, 
    {
        "code": "230707", 
        "sheng": "23", 
        "di": "07", 
        "xian": "07", 
        "name": "新青区", 
        "level": 3
    }, 
    {
        "code": "230708", 
        "sheng": "23", 
        "di": "07", 
        "xian": "08", 
        "name": "美溪区", 
        "level": 3
    }, 
    {
        "code": "230709", 
        "sheng": "23", 
        "di": "07", 
        "xian": "09", 
        "name": "金山屯区", 
        "level": 3
    }, 
    {
        "code": "230710", 
        "sheng": "23", 
        "di": "07", 
        "xian": "10", 
        "name": "五营区", 
        "level": 3
    }, 
    {
        "code": "230711", 
        "sheng": "23", 
        "di": "07", 
        "xian": "11", 
        "name": "乌马河区", 
        "level": 3
    }, 
    {
        "code": "230712", 
        "sheng": "23", 
        "di": "07", 
        "xian": "12", 
        "name": "汤旺河区", 
        "level": 3
    }, 
    {
        "code": "230713", 
        "sheng": "23", 
        "di": "07", 
        "xian": "13", 
        "name": "带岭区", 
        "level": 3
    }, 
    {
        "code": "230714", 
        "sheng": "23", 
        "di": "07", 
        "xian": "14", 
        "name": "乌伊岭区", 
        "level": 3
    }, 
    {
        "code": "230715", 
        "sheng": "23", 
        "di": "07", 
        "xian": "15", 
        "name": "红星区", 
        "level": 3
    }, 
    {
        "code": "230716", 
        "sheng": "23", 
        "di": "07", 
        "xian": "16", 
        "name": "上甘岭区", 
        "level": 3
    }, 
    {
        "code": "230722", 
        "sheng": "23", 
        "di": "07", 
        "xian": "22", 
        "name": "嘉荫县", 
        "level": 3
    }, 
    {
        "code": "230781", 
        "sheng": "23", 
        "di": "07", 
        "xian": "81", 
        "name": "铁力市", 
        "level": 3
    }, 
    {
        "code": "230800", 
        "sheng": "23", 
        "di": "08", 
        "xian": "00", 
        "name": "佳木斯市", 
        "level": 2
    }, 
    {
        "code": "230803", 
        "sheng": "23", 
        "di": "08", 
        "xian": "03", 
        "name": "向阳区", 
        "level": 3
    }, 
    {
        "code": "230804", 
        "sheng": "23", 
        "di": "08", 
        "xian": "04", 
        "name": "前进区", 
        "level": 3
    }, 
    {
        "code": "230805", 
        "sheng": "23", 
        "di": "08", 
        "xian": "05", 
        "name": "东风区", 
        "level": 3
    }, 
    {
        "code": "230811", 
        "sheng": "23", 
        "di": "08", 
        "xian": "11", 
        "name": "郊区", 
        "level": 3
    }, 
    {
        "code": "230822", 
        "sheng": "23", 
        "di": "08", 
        "xian": "22", 
        "name": "桦南县", 
        "level": 3
    }, 
    {
        "code": "230826", 
        "sheng": "23", 
        "di": "08", 
        "xian": "26", 
        "name": "桦川县", 
        "level": 3
    }, 
    {
        "code": "230828", 
        "sheng": "23", 
        "di": "08", 
        "xian": "28", 
        "name": "汤原县", 
        "level": 3
    }, 
    {
        "code": "230881", 
        "sheng": "23", 
        "di": "08", 
        "xian": "81", 
        "name": "同江市", 
        "level": 3
    }, 
    {
        "code": "230882", 
        "sheng": "23", 
        "di": "08", 
        "xian": "82", 
        "name": "富锦市", 
        "level": 3
    }, 
    {
        "code": "230883", 
        "sheng": "23", 
        "di": "08", 
        "xian": "83", 
        "name": "抚远市", 
        "level": 3
    }, 
    {
        "code": "230900", 
        "sheng": "23", 
        "di": "09", 
        "xian": "00", 
        "name": "七台河市", 
        "level": 2
    }, 
    {
        "code": "230902", 
        "sheng": "23", 
        "di": "09", 
        "xian": "02", 
        "name": "新兴区", 
        "level": 3
    }, 
    {
        "code": "230903", 
        "sheng": "23", 
        "di": "09", 
        "xian": "03", 
        "name": "桃山区", 
        "level": 3
    }, 
    {
        "code": "230904", 
        "sheng": "23", 
        "di": "09", 
        "xian": "04", 
        "name": "茄子河区", 
        "level": 3
    }, 
    {
        "code": "230921", 
        "sheng": "23", 
        "di": "09", 
        "xian": "21", 
        "name": "勃利县", 
        "level": 3
    }, 
    {
        "code": "231000", 
        "sheng": "23", 
        "di": "10", 
        "xian": "00", 
        "name": "牡丹江市", 
        "level": 2
    }, 
    {
        "code": "231002", 
        "sheng": "23", 
        "di": "10", 
        "xian": "02", 
        "name": "东安区", 
        "level": 3
    }, 
    {
        "code": "231003", 
        "sheng": "23", 
        "di": "10", 
        "xian": "03", 
        "name": "阳明区", 
        "level": 3
    }, 
    {
        "code": "231004", 
        "sheng": "23", 
        "di": "10", 
        "xian": "04", 
        "name": "爱民区", 
        "level": 3
    }, 
    {
        "code": "231005", 
        "sheng": "23", 
        "di": "10", 
        "xian": "05", 
        "name": "西安区", 
        "level": 3
    }, 
    {
        "code": "231025", 
        "sheng": "23", 
        "di": "10", 
        "xian": "25", 
        "name": "林口县", 
        "level": 3
    }, 
    {
        "code": "231081", 
        "sheng": "23", 
        "di": "10", 
        "xian": "81", 
        "name": "绥芬河市", 
        "level": 3
    }, 
    {
        "code": "231083", 
        "sheng": "23", 
        "di": "10", 
        "xian": "83", 
        "name": "海林市", 
        "level": 3
    }, 
    {
        "code": "231084", 
        "sheng": "23", 
        "di": "10", 
        "xian": "84", 
        "name": "宁安市", 
        "level": 3
    }, 
    {
        "code": "231085", 
        "sheng": "23", 
        "di": "10", 
        "xian": "85", 
        "name": "穆棱市", 
        "level": 3
    }, 
    {
        "code": "231086", 
        "sheng": "23", 
        "di": "10", 
        "xian": "86", 
        "name": "东宁市", 
        "level": 3
    }, 
    {
        "code": "231100", 
        "sheng": "23", 
        "di": "11", 
        "xian": "00", 
        "name": "黑河市", 
        "level": 2
    }, 
    {
        "code": "231102", 
        "sheng": "23", 
        "di": "11", 
        "xian": "02", 
        "name": "爱辉区", 
        "level": 3
    }, 
    {
        "code": "231121", 
        "sheng": "23", 
        "di": "11", 
        "xian": "21", 
        "name": "嫩江县", 
        "level": 3
    }, 
    {
        "code": "231123", 
        "sheng": "23", 
        "di": "11", 
        "xian": "23", 
        "name": "逊克县", 
        "level": 3
    }, 
    {
        "code": "231124", 
        "sheng": "23", 
        "di": "11", 
        "xian": "24", 
        "name": "孙吴县", 
        "level": 3
    }, 
    {
        "code": "231181", 
        "sheng": "23", 
        "di": "11", 
        "xian": "81", 
        "name": "北安市", 
        "level": 3
    }, 
    {
        "code": "231182", 
        "sheng": "23", 
        "di": "11", 
        "xian": "82", 
        "name": "五大连池市", 
        "level": 3
    }, 
    {
        "code": "231200", 
        "sheng": "23", 
        "di": "12", 
        "xian": "00", 
        "name": "绥化市", 
        "level": 2
    }, 
    {
        "code": "231202", 
        "sheng": "23", 
        "di": "12", 
        "xian": "02", 
        "name": "北林区", 
        "level": 3
    }, 
    {
        "code": "231221", 
        "sheng": "23", 
        "di": "12", 
        "xian": "21", 
        "name": "望奎县", 
        "level": 3
    }, 
    {
        "code": "231222", 
        "sheng": "23", 
        "di": "12", 
        "xian": "22", 
        "name": "兰西县", 
        "level": 3
    }, 
    {
        "code": "231223", 
        "sheng": "23", 
        "di": "12", 
        "xian": "23", 
        "name": "青冈县", 
        "level": 3
    }, 
    {
        "code": "231224", 
        "sheng": "23", 
        "di": "12", 
        "xian": "24", 
        "name": "庆安县", 
        "level": 3
    }, 
    {
        "code": "231225", 
        "sheng": "23", 
        "di": "12", 
        "xian": "25", 
        "name": "明水县", 
        "level": 3
    }, 
    {
        "code": "231226", 
        "sheng": "23", 
        "di": "12", 
        "xian": "26", 
        "name": "绥棱县", 
        "level": 3
    }, 
    {
        "code": "231281", 
        "sheng": "23", 
        "di": "12", 
        "xian": "81", 
        "name": "安达市", 
        "level": 3
    }, 
    {
        "code": "231282", 
        "sheng": "23", 
        "di": "12", 
        "xian": "82", 
        "name": "肇东市", 
        "level": 3
    }, 
    {
        "code": "231283", 
        "sheng": "23", 
        "di": "12", 
        "xian": "83", 
        "name": "海伦市", 
        "level": 3
    }, 
    {
        "code": "232700", 
        "sheng": "23", 
        "di": "27", 
        "xian": "00", 
        "name": "大兴安岭地区", 
        "level": 2
    }, 
    {
        "code": "232701", 
        "sheng": "23", 
        "di": "27", 
        "xian": "01", 
        "name": "加格达奇区", 
        "level": 3
    }, 
    {
        "code": "232702", 
        "sheng": "23", 
        "di": "27", 
        "xian": "02", 
        "name": "新林区", 
        "level": 3
    }, 
    {
        "code": "232703", 
        "sheng": "23", 
        "di": "27", 
        "xian": "03", 
        "name": "松岭区", 
        "level": 3
    }, 
    {
        "code": "232704", 
        "sheng": "23", 
        "di": "27", 
        "xian": "04", 
        "name": "呼中区", 
        "level": 3
    }, 
    {
        "code": "232721", 
        "sheng": "23", 
        "di": "27", 
        "xian": "21", 
        "name": "呼玛县", 
        "level": 3
    }, 
    {
        "code": "232722", 
        "sheng": "23", 
        "di": "27", 
        "xian": "22", 
        "name": "塔河县", 
        "level": 3
    }, 
    {
        "code": "232723", 
        "sheng": "23", 
        "di": "27", 
        "xian": "23", 
        "name": "漠河县", 
        "level": 3
    }, 
    {
        "code": "310000", 
        "sheng": "31", 
        "di": "00", 
        "xian": "00", 
        "name": "上海", 
        "level": 1
    }, 
    {
        "code": "310100", 
        "sheng": "31", 
        "di": "01", 
        "xian": "00", 
        "name": "上海市", 
        "level": 2
    }, 
    {
        "code": "310101", 
        "sheng": "31", 
        "di": "01", 
        "xian": "01", 
        "name": "黄浦区", 
        "level": 3
    }, 
    {
        "code": "310104", 
        "sheng": "31", 
        "di": "01", 
        "xian": "04", 
        "name": "徐汇区", 
        "level": 3
    }, 
    {
        "code": "310105", 
        "sheng": "31", 
        "di": "01", 
        "xian": "05", 
        "name": "长宁区", 
        "level": 3
    }, 
    {
        "code": "310106", 
        "sheng": "31", 
        "di": "01", 
        "xian": "06", 
        "name": "静安区", 
        "level": 3
    }, 
    {
        "code": "310107", 
        "sheng": "31", 
        "di": "01", 
        "xian": "07", 
        "name": "普陀区", 
        "level": 3
    }, 
    {
        "code": "310109", 
        "sheng": "31", 
        "di": "01", 
        "xian": "09", 
        "name": "虹口区", 
        "level": 3
    }, 
    {
        "code": "310110", 
        "sheng": "31", 
        "di": "01", 
        "xian": "10", 
        "name": "杨浦区", 
        "level": 3
    }, 
    {
        "code": "310112", 
        "sheng": "31", 
        "di": "01", 
        "xian": "12", 
        "name": "闵行区", 
        "level": 3
    }, 
    {
        "code": "310113", 
        "sheng": "31", 
        "di": "01", 
        "xian": "13", 
        "name": "宝山区", 
        "level": 3
    }, 
    {
        "code": "310114", 
        "sheng": "31", 
        "di": "01", 
        "xian": "14", 
        "name": "嘉定区", 
        "level": 3
    }, 
    {
        "code": "310115", 
        "sheng": "31", 
        "di": "01", 
        "xian": "15", 
        "name": "浦东新区", 
        "level": 3
    }, 
    {
        "code": "310116", 
        "sheng": "31", 
        "di": "01", 
        "xian": "16", 
        "name": "金山区", 
        "level": 3
    }, 
    {
        "code": "310117", 
        "sheng": "31", 
        "di": "01", 
        "xian": "17", 
        "name": "松江区", 
        "level": 3
    }, 
    {
        "code": "310118", 
        "sheng": "31", 
        "di": "01", 
        "xian": "18", 
        "name": "青浦区", 
        "level": 3
    }, 
    {
        "code": "310120", 
        "sheng": "31", 
        "di": "01", 
        "xian": "20", 
        "name": "奉贤区", 
        "level": 3
    }, 
    {
        "code": "310230", 
        "sheng": "31", 
        "di": "02", 
        "xian": "30", 
        "name": "崇明区", 
        "level": 3
    }, 
    {
        "code": "310231", 
        "sheng": "31", 
        "di": "02", 
        "xian": "31", 
        "name": "张江高新区", 
        "level": 3
    }, 
    {
        "code": "310232", 
        "sheng": "31", 
        "di": "02", 
        "xian": "32", 
        "name": "紫竹高新区", 
        "level": 3
    }, 
    {
        "code": "310233", 
        "sheng": "31", 
        "di": "02", 
        "xian": "33", 
        "name": "漕河泾开发区", 
        "level": 3
    }, 
    {
        "code": "320000", 
        "sheng": "32", 
        "di": "00", 
        "xian": "00", 
        "name": "江苏省", 
        "level": 1
    }, 
    {
        "code": "320100", 
        "sheng": "32", 
        "di": "01", 
        "xian": "00", 
        "name": "南京市", 
        "level": 2
    }, 
    {
        "code": "320102", 
        "sheng": "32", 
        "di": "01", 
        "xian": "02", 
        "name": "玄武区", 
        "level": 3
    }, 
    {
        "code": "320104", 
        "sheng": "32", 
        "di": "01", 
        "xian": "04", 
        "name": "秦淮区", 
        "level": 3
    }, 
    {
        "code": "320105", 
        "sheng": "32", 
        "di": "01", 
        "xian": "05", 
        "name": "建邺区", 
        "level": 3
    }, 
    {
        "code": "320106", 
        "sheng": "32", 
        "di": "01", 
        "xian": "06", 
        "name": "鼓楼区", 
        "level": 3
    }, 
    {
        "code": "320111", 
        "sheng": "32", 
        "di": "01", 
        "xian": "11", 
        "name": "浦口区", 
        "level": 3
    }, 
    {
        "code": "320113", 
        "sheng": "32", 
        "di": "01", 
        "xian": "13", 
        "name": "栖霞区", 
        "level": 3
    }, 
    {
        "code": "320114", 
        "sheng": "32", 
        "di": "01", 
        "xian": "14", 
        "name": "雨花台区", 
        "level": 3
    }, 
    {
        "code": "320115", 
        "sheng": "32", 
        "di": "01", 
        "xian": "15", 
        "name": "江宁区", 
        "level": 3
    }, 
    {
        "code": "320116", 
        "sheng": "32", 
        "di": "01", 
        "xian": "16", 
        "name": "六合区", 
        "level": 3
    }, 
    {
        "code": "320117", 
        "sheng": "32", 
        "di": "01", 
        "xian": "17", 
        "name": "溧水区", 
        "level": 3
    }, 
    {
        "code": "320118", 
        "sheng": "32", 
        "di": "01", 
        "xian": "18", 
        "name": "高淳区", 
        "level": 3
    }, 
    {
        "code": "320119", 
        "sheng": "32", 
        "di": "01", 
        "xian": "19", 
        "name": "江北新区", 
        "level": 3
    }, 
    {
        "code": "320200", 
        "sheng": "32", 
        "di": "02", 
        "xian": "00", 
        "name": "无锡市", 
        "level": 2
    }, 
    {
        "code": "320205", 
        "sheng": "32", 
        "di": "02", 
        "xian": "05", 
        "name": "锡山区", 
        "level": 3
    }, 
    {
        "code": "320206", 
        "sheng": "32", 
        "di": "02", 
        "xian": "06", 
        "name": "惠山区", 
        "level": 3
    }, 
    {
        "code": "320211", 
        "sheng": "32", 
        "di": "02", 
        "xian": "11", 
        "name": "滨湖区", 
        "level": 3
    }, 
    {
        "code": "320213", 
        "sheng": "32", 
        "di": "02", 
        "xian": "13", 
        "name": "梁溪区", 
        "level": 3
    }, 
    {
        "code": "320214", 
        "sheng": "32", 
        "di": "02", 
        "xian": "14", 
        "name": "新吴区", 
        "level": 3
    }, 
    {
        "code": "320281", 
        "sheng": "32", 
        "di": "02", 
        "xian": "81", 
        "name": "江阴市", 
        "level": 3
    }, 
    {
        "code": "320282", 
        "sheng": "32", 
        "di": "02", 
        "xian": "82", 
        "name": "宜兴市", 
        "level": 3
    }, 
    {
        "code": "320300", 
        "sheng": "32", 
        "di": "03", 
        "xian": "00", 
        "name": "徐州市", 
        "level": 2
    }, 
    {
        "code": "320302", 
        "sheng": "32", 
        "di": "03", 
        "xian": "02", 
        "name": "鼓楼区", 
        "level": 3
    }, 
    {
        "code": "320303", 
        "sheng": "32", 
        "di": "03", 
        "xian": "03", 
        "name": "云龙区", 
        "level": 3
    }, 
    {
        "code": "320305", 
        "sheng": "32", 
        "di": "03", 
        "xian": "05", 
        "name": "贾汪区", 
        "level": 3
    }, 
    {
        "code": "320311", 
        "sheng": "32", 
        "di": "03", 
        "xian": "11", 
        "name": "泉山区", 
        "level": 3
    }, 
    {
        "code": "320312", 
        "sheng": "32", 
        "di": "03", 
        "xian": "12", 
        "name": "铜山区", 
        "level": 3
    }, 
    {
        "code": "320321", 
        "sheng": "32", 
        "di": "03", 
        "xian": "21", 
        "name": "丰县", 
        "level": 3
    }, 
    {
        "code": "320322", 
        "sheng": "32", 
        "di": "03", 
        "xian": "22", 
        "name": "沛县", 
        "level": 3
    }, 
    {
        "code": "320324", 
        "sheng": "32", 
        "di": "03", 
        "xian": "24", 
        "name": "睢宁县", 
        "level": 3
    }, 
    {
        "code": "320381", 
        "sheng": "32", 
        "di": "03", 
        "xian": "81", 
        "name": "新沂市", 
        "level": 3
    }, 
    {
        "code": "320382", 
        "sheng": "32", 
        "di": "03", 
        "xian": "82", 
        "name": "邳州市", 
        "level": 3
    }, 
    {
        "code": "320383", 
        "sheng": "32", 
        "di": "03", 
        "xian": "83", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "320384", 
        "sheng": "32", 
        "di": "03", 
        "xian": "84", 
        "name": "高新技术产业开发区", 
        "level": 3
    }, 
    {
        "code": "320385", 
        "sheng": "32", 
        "di": "03", 
        "xian": "85", 
        "name": "软件园", 
        "level": 3
    }, 
    {
        "code": "320400", 
        "sheng": "32", 
        "di": "04", 
        "xian": "00", 
        "name": "常州市", 
        "level": 2
    }, 
    {
        "code": "320402", 
        "sheng": "32", 
        "di": "04", 
        "xian": "02", 
        "name": "天宁区", 
        "level": 3
    }, 
    {
        "code": "320404", 
        "sheng": "32", 
        "di": "04", 
        "xian": "04", 
        "name": "钟楼区", 
        "level": 3
    }, 
    {
        "code": "320411", 
        "sheng": "32", 
        "di": "04", 
        "xian": "11", 
        "name": "新北区", 
        "level": 3
    }, 
    {
        "code": "320412", 
        "sheng": "32", 
        "di": "04", 
        "xian": "12", 
        "name": "武进区", 
        "level": 3
    }, 
    {
        "code": "320413", 
        "sheng": "32", 
        "di": "04", 
        "xian": "13", 
        "name": "金坛区", 
        "level": 3
    }, 
    {
        "code": "320481", 
        "sheng": "32", 
        "di": "04", 
        "xian": "81", 
        "name": "溧阳市", 
        "level": 3
    }, 
    {
        "code": "320482", 
        "sheng": "32", 
        "di": "04", 
        "xian": "82", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "320500", 
        "sheng": "32", 
        "di": "05", 
        "xian": "00", 
        "name": "苏州市", 
        "level": 2
    }, 
    {
        "code": "320505", 
        "sheng": "32", 
        "di": "05", 
        "xian": "05", 
        "name": "虎丘区", 
        "level": 3
    }, 
    {
        "code": "320506", 
        "sheng": "32", 
        "di": "05", 
        "xian": "06", 
        "name": "吴中区", 
        "level": 3
    }, 
    {
        "code": "320507", 
        "sheng": "32", 
        "di": "05", 
        "xian": "07", 
        "name": "相城区", 
        "level": 3
    }, 
    {
        "code": "320508", 
        "sheng": "32", 
        "di": "05", 
        "xian": "08", 
        "name": "姑苏区", 
        "level": 3
    }, 
    {
        "code": "320509", 
        "sheng": "32", 
        "di": "05", 
        "xian": "09", 
        "name": "吴江区", 
        "level": 3
    }, 
    {
        "code": "320581", 
        "sheng": "32", 
        "di": "05", 
        "xian": "81", 
        "name": "常熟市", 
        "level": 3
    }, 
    {
        "code": "320582", 
        "sheng": "32", 
        "di": "05", 
        "xian": "82", 
        "name": "张家港市", 
        "level": 3
    }, 
    {
        "code": "320583", 
        "sheng": "32", 
        "di": "05", 
        "xian": "83", 
        "name": "昆山市", 
        "level": 3
    }, 
    {
        "code": "320585", 
        "sheng": "32", 
        "di": "05", 
        "xian": "85", 
        "name": "太仓市", 
        "level": 3
    }, 
    {
        "code": "320586", 
        "sheng": "32", 
        "di": "05", 
        "xian": "86", 
        "name": "苏州新区", 
        "level": 3
    }, 
    {
        "code": "320587", 
        "sheng": "32", 
        "di": "05", 
        "xian": "87", 
        "name": "工业园区", 
        "level": 3
    }, 
    {
        "code": "320588", 
        "sheng": "32", 
        "di": "05", 
        "xian": "88", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "320600", 
        "sheng": "32", 
        "di": "06", 
        "xian": "00", 
        "name": "南通市", 
        "level": 2
    }, 
    {
        "code": "320602", 
        "sheng": "32", 
        "di": "06", 
        "xian": "02", 
        "name": "崇川区", 
        "level": 3
    }, 
    {
        "code": "320611", 
        "sheng": "32", 
        "di": "06", 
        "xian": "11", 
        "name": "港闸区", 
        "level": 3
    }, 
    {
        "code": "320612", 
        "sheng": "32", 
        "di": "06", 
        "xian": "12", 
        "name": "通州区", 
        "level": 3
    }, 
    {
        "code": "320621", 
        "sheng": "32", 
        "di": "06", 
        "xian": "21", 
        "name": "海安县", 
        "level": 3
    }, 
    {
        "code": "320623", 
        "sheng": "32", 
        "di": "06", 
        "xian": "23", 
        "name": "如东县", 
        "level": 3
    }, 
    {
        "code": "320681", 
        "sheng": "32", 
        "di": "06", 
        "xian": "81", 
        "name": "启东市", 
        "level": 3
    }, 
    {
        "code": "320682", 
        "sheng": "32", 
        "di": "06", 
        "xian": "82", 
        "name": "如皋市", 
        "level": 3
    }, 
    {
        "code": "320684", 
        "sheng": "32", 
        "di": "06", 
        "xian": "84", 
        "name": "海门市", 
        "level": 3
    }, 
    {
        "code": "320685", 
        "sheng": "32", 
        "di": "06", 
        "xian": "85", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "320700", 
        "sheng": "32", 
        "di": "07", 
        "xian": "00", 
        "name": "连云港市", 
        "level": 2
    }, 
    {
        "code": "320703", 
        "sheng": "32", 
        "di": "07", 
        "xian": "03", 
        "name": "连云区", 
        "level": 3
    }, 
    {
        "code": "320706", 
        "sheng": "32", 
        "di": "07", 
        "xian": "06", 
        "name": "海州区", 
        "level": 3
    }, 
    {
        "code": "320707", 
        "sheng": "32", 
        "di": "07", 
        "xian": "07", 
        "name": "赣榆区", 
        "level": 3
    }, 
    {
        "code": "320722", 
        "sheng": "32", 
        "di": "07", 
        "xian": "22", 
        "name": "东海县", 
        "level": 3
    }, 
    {
        "code": "320723", 
        "sheng": "32", 
        "di": "07", 
        "xian": "23", 
        "name": "灌云县", 
        "level": 3
    }, 
    {
        "code": "320724", 
        "sheng": "32", 
        "di": "07", 
        "xian": "24", 
        "name": "灌南县", 
        "level": 3
    }, 
    {
        "code": "320800", 
        "sheng": "32", 
        "di": "08", 
        "xian": "00", 
        "name": "淮安市", 
        "level": 2
    }, 
    {
        "code": "320803", 
        "sheng": "32", 
        "di": "08", 
        "xian": "03", 
        "name": "淮安区", 
        "level": 3
    }, 
    {
        "code": "320804", 
        "sheng": "32", 
        "di": "08", 
        "xian": "04", 
        "name": "淮阴区", 
        "level": 3
    }, 
    {
        "code": "320811", 
        "sheng": "32", 
        "di": "08", 
        "xian": "11", 
        "name": "清江浦区", 
        "level": 3
    }, 
    {
        "code": "320813", 
        "sheng": "32", 
        "di": "08", 
        "xian": "13", 
        "name": "洪泽区", 
        "level": 3
    }, 
    {
        "code": "320826", 
        "sheng": "32", 
        "di": "08", 
        "xian": "26", 
        "name": "涟水县", 
        "level": 3
    }, 
    {
        "code": "320830", 
        "sheng": "32", 
        "di": "08", 
        "xian": "30", 
        "name": "盱眙县", 
        "level": 3
    }, 
    {
        "code": "320831", 
        "sheng": "32", 
        "di": "08", 
        "xian": "31", 
        "name": "金湖县", 
        "level": 3
    }, 
    {
        "code": "320832", 
        "sheng": "32", 
        "di": "08", 
        "xian": "32", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "320900", 
        "sheng": "32", 
        "di": "09", 
        "xian": "00", 
        "name": "盐城市", 
        "level": 2
    }, 
    {
        "code": "320902", 
        "sheng": "32", 
        "di": "09", 
        "xian": "02", 
        "name": "亭湖区", 
        "level": 3
    }, 
    {
        "code": "320903", 
        "sheng": "32", 
        "di": "09", 
        "xian": "03", 
        "name": "盐都区", 
        "level": 3
    }, 
    {
        "code": "320904", 
        "sheng": "32", 
        "di": "09", 
        "xian": "04", 
        "name": "大丰区", 
        "level": 3
    }, 
    {
        "code": "320921", 
        "sheng": "32", 
        "di": "09", 
        "xian": "21", 
        "name": "响水县", 
        "level": 3
    }, 
    {
        "code": "320922", 
        "sheng": "32", 
        "di": "09", 
        "xian": "22", 
        "name": "滨海县", 
        "level": 3
    }, 
    {
        "code": "320923", 
        "sheng": "32", 
        "di": "09", 
        "xian": "23", 
        "name": "阜宁县", 
        "level": 3
    }, 
    {
        "code": "320924", 
        "sheng": "32", 
        "di": "09", 
        "xian": "24", 
        "name": "射阳县", 
        "level": 3
    }, 
    {
        "code": "320925", 
        "sheng": "32", 
        "di": "09", 
        "xian": "25", 
        "name": "建湖县", 
        "level": 3
    }, 
    {
        "code": "320981", 
        "sheng": "32", 
        "di": "09", 
        "xian": "81", 
        "name": "东台市", 
        "level": 3
    }, 
    {
        "code": "321000", 
        "sheng": "32", 
        "di": "10", 
        "xian": "00", 
        "name": "扬州市", 
        "level": 2
    }, 
    {
        "code": "321002", 
        "sheng": "32", 
        "di": "10", 
        "xian": "02", 
        "name": "广陵区", 
        "level": 3
    }, 
    {
        "code": "321003", 
        "sheng": "32", 
        "di": "10", 
        "xian": "03", 
        "name": "邗江区", 
        "level": 3
    }, 
    {
        "code": "321012", 
        "sheng": "32", 
        "di": "10", 
        "xian": "12", 
        "name": "江都区", 
        "level": 3
    }, 
    {
        "code": "321023", 
        "sheng": "32", 
        "di": "10", 
        "xian": "23", 
        "name": "宝应县", 
        "level": 3
    }, 
    {
        "code": "321081", 
        "sheng": "32", 
        "di": "10", 
        "xian": "81", 
        "name": "仪征市", 
        "level": 3
    }, 
    {
        "code": "321084", 
        "sheng": "32", 
        "di": "10", 
        "xian": "84", 
        "name": "高邮市", 
        "level": 3
    }, 
    {
        "code": "321100", 
        "sheng": "32", 
        "di": "11", 
        "xian": "00", 
        "name": "镇江市", 
        "level": 2
    }, 
    {
        "code": "321102", 
        "sheng": "32", 
        "di": "11", 
        "xian": "02", 
        "name": "京口区", 
        "level": 3
    }, 
    {
        "code": "321111", 
        "sheng": "32", 
        "di": "11", 
        "xian": "11", 
        "name": "润州区", 
        "level": 3
    }, 
    {
        "code": "321112", 
        "sheng": "32", 
        "di": "11", 
        "xian": "12", 
        "name": "丹徒区", 
        "level": 3
    }, 
    {
        "code": "321181", 
        "sheng": "32", 
        "di": "11", 
        "xian": "81", 
        "name": "丹阳市", 
        "level": 3
    }, 
    {
        "code": "321182", 
        "sheng": "32", 
        "di": "11", 
        "xian": "82", 
        "name": "扬中市", 
        "level": 3
    }, 
    {
        "code": "321183", 
        "sheng": "32", 
        "di": "11", 
        "xian": "83", 
        "name": "句容市", 
        "level": 3
    }, 
    {
        "code": "321184", 
        "sheng": "32", 
        "di": "11", 
        "xian": "84", 
        "name": "镇江新区", 
        "level": 3
    }, 
    {
        "code": "321185", 
        "sheng": "32", 
        "di": "11", 
        "xian": "85", 
        "name": "镇江新区", 
        "level": 3
    }, 
    {
        "code": "321186", 
        "sheng": "32", 
        "di": "11", 
        "xian": "86", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "321200", 
        "sheng": "32", 
        "di": "12", 
        "xian": "00", 
        "name": "泰州市", 
        "level": 2
    }, 
    {
        "code": "321202", 
        "sheng": "32", 
        "di": "12", 
        "xian": "02", 
        "name": "海陵区", 
        "level": 3
    }, 
    {
        "code": "321203", 
        "sheng": "32", 
        "di": "12", 
        "xian": "03", 
        "name": "高港区", 
        "level": 3
    }, 
    {
        "code": "321204", 
        "sheng": "32", 
        "di": "12", 
        "xian": "04", 
        "name": "姜堰区", 
        "level": 3
    }, 
    {
        "code": "321281", 
        "sheng": "32", 
        "di": "12", 
        "xian": "81", 
        "name": "兴化市", 
        "level": 3
    }, 
    {
        "code": "321282", 
        "sheng": "32", 
        "di": "12", 
        "xian": "82", 
        "name": "靖江市", 
        "level": 3
    }, 
    {
        "code": "321283", 
        "sheng": "32", 
        "di": "12", 
        "xian": "83", 
        "name": "泰兴市", 
        "level": 3
    }, 
    {
        "code": "321300", 
        "sheng": "32", 
        "di": "13", 
        "xian": "00", 
        "name": "宿迁市", 
        "level": 2
    }, 
    {
        "code": "321302", 
        "sheng": "32", 
        "di": "13", 
        "xian": "02", 
        "name": "宿城区", 
        "level": 3
    }, 
    {
        "code": "321311", 
        "sheng": "32", 
        "di": "13", 
        "xian": "11", 
        "name": "宿豫区", 
        "level": 3
    }, 
    {
        "code": "321322", 
        "sheng": "32", 
        "di": "13", 
        "xian": "22", 
        "name": "沭阳县", 
        "level": 3
    }, 
    {
        "code": "321323", 
        "sheng": "32", 
        "di": "13", 
        "xian": "23", 
        "name": "泗阳县", 
        "level": 3
    }, 
    {
        "code": "321324", 
        "sheng": "32", 
        "di": "13", 
        "xian": "24", 
        "name": "泗洪县", 
        "level": 3
    }, 
    {
        "code": "321325", 
        "sheng": "32", 
        "di": "13", 
        "xian": "25", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "330000", 
        "sheng": "33", 
        "di": "00", 
        "xian": "00", 
        "name": "浙江省", 
        "level": 1
    }, 
    {
        "code": "330100", 
        "sheng": "33", 
        "di": "01", 
        "xian": "00", 
        "name": "杭州市", 
        "level": 2
    }, 
    {
        "code": "330102", 
        "sheng": "33", 
        "di": "01", 
        "xian": "02", 
        "name": "上城区", 
        "level": 3
    }, 
    {
        "code": "330103", 
        "sheng": "33", 
        "di": "01", 
        "xian": "03", 
        "name": "下城区", 
        "level": 3
    }, 
    {
        "code": "330104", 
        "sheng": "33", 
        "di": "01", 
        "xian": "04", 
        "name": "江干区", 
        "level": 3
    }, 
    {
        "code": "330105", 
        "sheng": "33", 
        "di": "01", 
        "xian": "05", 
        "name": "拱墅区", 
        "level": 3
    }, 
    {
        "code": "330106", 
        "sheng": "33", 
        "di": "01", 
        "xian": "06", 
        "name": "西湖区", 
        "level": 3
    }, 
    {
        "code": "330108", 
        "sheng": "33", 
        "di": "01", 
        "xian": "08", 
        "name": "滨江区", 
        "level": 3
    }, 
    {
        "code": "330109", 
        "sheng": "33", 
        "di": "01", 
        "xian": "09", 
        "name": "萧山区", 
        "level": 3
    }, 
    {
        "code": "330110", 
        "sheng": "33", 
        "di": "01", 
        "xian": "10", 
        "name": "余杭区", 
        "level": 3
    }, 
    {
        "code": "330111", 
        "sheng": "33", 
        "di": "01", 
        "xian": "11", 
        "name": "富阳区", 
        "level": 3
    }, 
    {
        "code": "330122", 
        "sheng": "33", 
        "di": "01", 
        "xian": "22", 
        "name": "桐庐县", 
        "level": 3
    }, 
    {
        "code": "330127", 
        "sheng": "33", 
        "di": "01", 
        "xian": "27", 
        "name": "淳安县", 
        "level": 3
    }, 
    {
        "code": "330182", 
        "sheng": "33", 
        "di": "01", 
        "xian": "82", 
        "name": "建德市", 
        "level": 3
    }, 
    {
        "code": "330185", 
        "sheng": "33", 
        "di": "01", 
        "xian": "85", 
        "name": "临安市", 
        "level": 3
    }, 
    {
        "code": "330186", 
        "sheng": "33", 
        "di": "01", 
        "xian": "86", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "330200", 
        "sheng": "33", 
        "di": "02", 
        "xian": "00", 
        "name": "宁波市", 
        "level": 2
    }, 
    {
        "code": "330203", 
        "sheng": "33", 
        "di": "02", 
        "xian": "03", 
        "name": "海曙区", 
        "level": 3
    }, 
    {
        "code": "330204", 
        "sheng": "33", 
        "di": "02", 
        "xian": "04", 
        "name": "江东区", 
        "level": 3
    }, 
    {
        "code": "330205", 
        "sheng": "33", 
        "di": "02", 
        "xian": "05", 
        "name": "江北区", 
        "level": 3
    }, 
    {
        "code": "330206", 
        "sheng": "33", 
        "di": "02", 
        "xian": "06", 
        "name": "北仑区", 
        "level": 3
    }, 
    {
        "code": "330211", 
        "sheng": "33", 
        "di": "02", 
        "xian": "11", 
        "name": "镇海区", 
        "level": 3
    }, 
    {
        "code": "330212", 
        "sheng": "33", 
        "di": "02", 
        "xian": "12", 
        "name": "鄞州区", 
        "level": 3
    }, 
    {
        "code": "330225", 
        "sheng": "33", 
        "di": "02", 
        "xian": "25", 
        "name": "象山县", 
        "level": 3
    }, 
    {
        "code": "330226", 
        "sheng": "33", 
        "di": "02", 
        "xian": "26", 
        "name": "宁海县", 
        "level": 3
    }, 
    {
        "code": "330281", 
        "sheng": "33", 
        "di": "02", 
        "xian": "81", 
        "name": "余姚市", 
        "level": 3
    }, 
    {
        "code": "330282", 
        "sheng": "33", 
        "di": "02", 
        "xian": "82", 
        "name": "慈溪市", 
        "level": 3
    }, 
    {
        "code": "330283", 
        "sheng": "33", 
        "di": "02", 
        "xian": "83", 
        "name": "奉化市", 
        "level": 3
    }, 
    {
        "code": "330284", 
        "sheng": "33", 
        "di": "02", 
        "xian": "84", 
        "name": "杭州湾新区", 
        "level": 3
    }, 
    {
        "code": "330285", 
        "sheng": "33", 
        "di": "02", 
        "xian": "85", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "330300", 
        "sheng": "33", 
        "di": "03", 
        "xian": "00", 
        "name": "温州市", 
        "level": 2
    }, 
    {
        "code": "330302", 
        "sheng": "33", 
        "di": "03", 
        "xian": "02", 
        "name": "鹿城区", 
        "level": 3
    }, 
    {
        "code": "330303", 
        "sheng": "33", 
        "di": "03", 
        "xian": "03", 
        "name": "龙湾区", 
        "level": 3
    }, 
    {
        "code": "330304", 
        "sheng": "33", 
        "di": "03", 
        "xian": "04", 
        "name": "瓯海区", 
        "level": 3
    }, 
    {
        "code": "330305", 
        "sheng": "33", 
        "di": "03", 
        "xian": "05", 
        "name": "洞头区", 
        "level": 3
    }, 
    {
        "code": "330324", 
        "sheng": "33", 
        "di": "03", 
        "xian": "24", 
        "name": "永嘉县", 
        "level": 3
    }, 
    {
        "code": "330326", 
        "sheng": "33", 
        "di": "03", 
        "xian": "26", 
        "name": "平阳县", 
        "level": 3
    }, 
    {
        "code": "330327", 
        "sheng": "33", 
        "di": "03", 
        "xian": "27", 
        "name": "苍南县", 
        "level": 3
    }, 
    {
        "code": "330328", 
        "sheng": "33", 
        "di": "03", 
        "xian": "28", 
        "name": "文成县", 
        "level": 3
    }, 
    {
        "code": "330329", 
        "sheng": "33", 
        "di": "03", 
        "xian": "29", 
        "name": "泰顺县", 
        "level": 3
    }, 
    {
        "code": "330381", 
        "sheng": "33", 
        "di": "03", 
        "xian": "81", 
        "name": "瑞安市", 
        "level": 3
    }, 
    {
        "code": "330382", 
        "sheng": "33", 
        "di": "03", 
        "xian": "82", 
        "name": "乐清市", 
        "level": 3
    }, 
    {
        "code": "330400", 
        "sheng": "33", 
        "di": "04", 
        "xian": "00", 
        "name": "嘉兴市", 
        "level": 2
    }, 
    {
        "code": "330402", 
        "sheng": "33", 
        "di": "04", 
        "xian": "02", 
        "name": "南湖区", 
        "level": 3
    }, 
    {
        "code": "330411", 
        "sheng": "33", 
        "di": "04", 
        "xian": "11", 
        "name": "秀洲区", 
        "level": 3
    }, 
    {
        "code": "330421", 
        "sheng": "33", 
        "di": "04", 
        "xian": "21", 
        "name": "嘉善县", 
        "level": 3
    }, 
    {
        "code": "330424", 
        "sheng": "33", 
        "di": "04", 
        "xian": "24", 
        "name": "海盐县", 
        "level": 3
    }, 
    {
        "code": "330481", 
        "sheng": "33", 
        "di": "04", 
        "xian": "81", 
        "name": "海宁市", 
        "level": 3
    }, 
    {
        "code": "330482", 
        "sheng": "33", 
        "di": "04", 
        "xian": "82", 
        "name": "平湖市", 
        "level": 3
    }, 
    {
        "code": "330483", 
        "sheng": "33", 
        "di": "04", 
        "xian": "83", 
        "name": "桐乡市", 
        "level": 3
    }, 
    {
        "code": "330500", 
        "sheng": "33", 
        "di": "05", 
        "xian": "00", 
        "name": "湖州市", 
        "level": 2
    }, 
    {
        "code": "330502", 
        "sheng": "33", 
        "di": "05", 
        "xian": "02", 
        "name": "吴兴区", 
        "level": 3
    }, 
    {
        "code": "330503", 
        "sheng": "33", 
        "di": "05", 
        "xian": "03", 
        "name": "南浔区", 
        "level": 3
    }, 
    {
        "code": "330521", 
        "sheng": "33", 
        "di": "05", 
        "xian": "21", 
        "name": "德清县", 
        "level": 3
    }, 
    {
        "code": "330522", 
        "sheng": "33", 
        "di": "05", 
        "xian": "22", 
        "name": "长兴县", 
        "level": 3
    }, 
    {
        "code": "330523", 
        "sheng": "33", 
        "di": "05", 
        "xian": "23", 
        "name": "安吉县", 
        "level": 3
    }, 
    {
        "code": "330600", 
        "sheng": "33", 
        "di": "06", 
        "xian": "00", 
        "name": "绍兴市", 
        "level": 2
    }, 
    {
        "code": "330602", 
        "sheng": "33", 
        "di": "06", 
        "xian": "02", 
        "name": "越城区", 
        "level": 3
    }, 
    {
        "code": "330603", 
        "sheng": "33", 
        "di": "06", 
        "xian": "03", 
        "name": "柯桥区", 
        "level": 3
    }, 
    {
        "code": "330604", 
        "sheng": "33", 
        "di": "06", 
        "xian": "04", 
        "name": "上虞区", 
        "level": 3
    }, 
    {
        "code": "330624", 
        "sheng": "33", 
        "di": "06", 
        "xian": "24", 
        "name": "新昌县", 
        "level": 3
    }, 
    {
        "code": "330681", 
        "sheng": "33", 
        "di": "06", 
        "xian": "81", 
        "name": "诸暨市", 
        "level": 3
    }, 
    {
        "code": "330683", 
        "sheng": "33", 
        "di": "06", 
        "xian": "83", 
        "name": "嵊州市", 
        "level": 3
    }, 
    {
        "code": "330700", 
        "sheng": "33", 
        "di": "07", 
        "xian": "00", 
        "name": "金华市", 
        "level": 2
    }, 
    {
        "code": "330702", 
        "sheng": "33", 
        "di": "07", 
        "xian": "02", 
        "name": "婺城区", 
        "level": 3
    }, 
    {
        "code": "330703", 
        "sheng": "33", 
        "di": "07", 
        "xian": "03", 
        "name": "金东区", 
        "level": 3
    }, 
    {
        "code": "330723", 
        "sheng": "33", 
        "di": "07", 
        "xian": "23", 
        "name": "武义县", 
        "level": 3
    }, 
    {
        "code": "330726", 
        "sheng": "33", 
        "di": "07", 
        "xian": "26", 
        "name": "浦江县", 
        "level": 3
    }, 
    {
        "code": "330727", 
        "sheng": "33", 
        "di": "07", 
        "xian": "27", 
        "name": "磐安县", 
        "level": 3
    }, 
    {
        "code": "330781", 
        "sheng": "33", 
        "di": "07", 
        "xian": "81", 
        "name": "兰溪市", 
        "level": 3
    }, 
    {
        "code": "330782", 
        "sheng": "33", 
        "di": "07", 
        "xian": "82", 
        "name": "义乌市", 
        "level": 3
    }, 
    {
        "code": "330783", 
        "sheng": "33", 
        "di": "07", 
        "xian": "83", 
        "name": "东阳市", 
        "level": 3
    }, 
    {
        "code": "330784", 
        "sheng": "33", 
        "di": "07", 
        "xian": "84", 
        "name": "永康市", 
        "level": 3
    }, 
    {
        "code": "330800", 
        "sheng": "33", 
        "di": "08", 
        "xian": "00", 
        "name": "衢州市", 
        "level": 2
    }, 
    {
        "code": "330802", 
        "sheng": "33", 
        "di": "08", 
        "xian": "02", 
        "name": "柯城区", 
        "level": 3
    }, 
    {
        "code": "330803", 
        "sheng": "33", 
        "di": "08", 
        "xian": "03", 
        "name": "衢江区", 
        "level": 3
    }, 
    {
        "code": "330822", 
        "sheng": "33", 
        "di": "08", 
        "xian": "22", 
        "name": "常山县", 
        "level": 3
    }, 
    {
        "code": "330824", 
        "sheng": "33", 
        "di": "08", 
        "xian": "24", 
        "name": "开化县", 
        "level": 3
    }, 
    {
        "code": "330825", 
        "sheng": "33", 
        "di": "08", 
        "xian": "25", 
        "name": "龙游县", 
        "level": 3
    }, 
    {
        "code": "330881", 
        "sheng": "33", 
        "di": "08", 
        "xian": "81", 
        "name": "江山市", 
        "level": 3
    }, 
    {
        "code": "330900", 
        "sheng": "33", 
        "di": "09", 
        "xian": "00", 
        "name": "舟山市", 
        "level": 2
    }, 
    {
        "code": "330902", 
        "sheng": "33", 
        "di": "09", 
        "xian": "02", 
        "name": "定海区", 
        "level": 3
    }, 
    {
        "code": "330903", 
        "sheng": "33", 
        "di": "09", 
        "xian": "03", 
        "name": "普陀区", 
        "level": 3
    }, 
    {
        "code": "330921", 
        "sheng": "33", 
        "di": "09", 
        "xian": "21", 
        "name": "岱山县", 
        "level": 3
    }, 
    {
        "code": "330922", 
        "sheng": "33", 
        "di": "09", 
        "xian": "22", 
        "name": "嵊泗县", 
        "level": 3
    }, 
    {
        "code": "331000", 
        "sheng": "33", 
        "di": "10", 
        "xian": "00", 
        "name": "台州市", 
        "level": 2
    }, 
    {
        "code": "331002", 
        "sheng": "33", 
        "di": "10", 
        "xian": "02", 
        "name": "椒江区", 
        "level": 3
    }, 
    {
        "code": "331003", 
        "sheng": "33", 
        "di": "10", 
        "xian": "03", 
        "name": "黄岩区", 
        "level": 3
    }, 
    {
        "code": "331004", 
        "sheng": "33", 
        "di": "10", 
        "xian": "04", 
        "name": "路桥区", 
        "level": 3
    }, 
    {
        "code": "331021", 
        "sheng": "33", 
        "di": "10", 
        "xian": "21", 
        "name": "玉环县", 
        "level": 3
    }, 
    {
        "code": "331022", 
        "sheng": "33", 
        "di": "10", 
        "xian": "22", 
        "name": "三门县", 
        "level": 3
    }, 
    {
        "code": "331023", 
        "sheng": "33", 
        "di": "10", 
        "xian": "23", 
        "name": "天台县", 
        "level": 3
    }, 
    {
        "code": "331024", 
        "sheng": "33", 
        "di": "10", 
        "xian": "24", 
        "name": "仙居县", 
        "level": 3
    }, 
    {
        "code": "331081", 
        "sheng": "33", 
        "di": "10", 
        "xian": "81", 
        "name": "温岭市", 
        "level": 3
    }, 
    {
        "code": "331082", 
        "sheng": "33", 
        "di": "10", 
        "xian": "82", 
        "name": "临海市", 
        "level": 3
    }, 
    {
        "code": "331100", 
        "sheng": "33", 
        "di": "11", 
        "xian": "00", 
        "name": "丽水市", 
        "level": 2
    }, 
    {
        "code": "331102", 
        "sheng": "33", 
        "di": "11", 
        "xian": "02", 
        "name": "莲都区", 
        "level": 3
    }, 
    {
        "code": "331121", 
        "sheng": "33", 
        "di": "11", 
        "xian": "21", 
        "name": "青田县", 
        "level": 3
    }, 
    {
        "code": "331122", 
        "sheng": "33", 
        "di": "11", 
        "xian": "22", 
        "name": "缙云县", 
        "level": 3
    }, 
    {
        "code": "331123", 
        "sheng": "33", 
        "di": "11", 
        "xian": "23", 
        "name": "遂昌县", 
        "level": 3
    }, 
    {
        "code": "331124", 
        "sheng": "33", 
        "di": "11", 
        "xian": "24", 
        "name": "松阳县", 
        "level": 3
    }, 
    {
        "code": "331125", 
        "sheng": "33", 
        "di": "11", 
        "xian": "25", 
        "name": "云和县", 
        "level": 3
    }, 
    {
        "code": "331126", 
        "sheng": "33", 
        "di": "11", 
        "xian": "26", 
        "name": "庆元县", 
        "level": 3
    }, 
    {
        "code": "331127", 
        "sheng": "33", 
        "di": "11", 
        "xian": "27", 
        "name": "景宁畲族自治县", 
        "level": 3
    }, 
    {
        "code": "331181", 
        "sheng": "33", 
        "di": "11", 
        "xian": "81", 
        "name": "龙泉市", 
        "level": 3
    }, 
    {
        "code": "331200", 
        "sheng": "33", 
        "di": "12", 
        "xian": "00", 
        "name": "舟山群岛新区", 
        "level": 2
    }, 
    {
        "code": "331201", 
        "sheng": "33", 
        "di": "12", 
        "xian": "01", 
        "name": "金塘岛", 
        "level": 3
    }, 
    {
        "code": "331202", 
        "sheng": "33", 
        "di": "12", 
        "xian": "02", 
        "name": "六横岛", 
        "level": 3
    }, 
    {
        "code": "331203", 
        "sheng": "33", 
        "di": "12", 
        "xian": "03", 
        "name": "衢山岛", 
        "level": 3
    }, 
    {
        "code": "331204", 
        "sheng": "33", 
        "di": "12", 
        "xian": "04", 
        "name": "舟山本岛西北部", 
        "level": 3
    }, 
    {
        "code": "331205", 
        "sheng": "33", 
        "di": "12", 
        "xian": "05", 
        "name": "岱山岛西南部", 
        "level": 3
    }, 
    {
        "code": "331206", 
        "sheng": "33", 
        "di": "12", 
        "xian": "06", 
        "name": "泗礁岛", 
        "level": 3
    }, 
    {
        "code": "331207", 
        "sheng": "33", 
        "di": "12", 
        "xian": "07", 
        "name": "朱家尖岛", 
        "level": 3
    }, 
    {
        "code": "331208", 
        "sheng": "33", 
        "di": "12", 
        "xian": "08", 
        "name": "洋山岛", 
        "level": 3
    }, 
    {
        "code": "331209", 
        "sheng": "33", 
        "di": "12", 
        "xian": "09", 
        "name": "长涂岛", 
        "level": 3
    }, 
    {
        "code": "331210", 
        "sheng": "33", 
        "di": "12", 
        "xian": "10", 
        "name": "虾峙岛", 
        "level": 3
    }, 
    {
        "code": "340000", 
        "sheng": "34", 
        "di": "00", 
        "xian": "00", 
        "name": "安徽省", 
        "level": 1
    }, 
    {
        "code": "340100", 
        "sheng": "34", 
        "di": "01", 
        "xian": "00", 
        "name": "合肥市", 
        "level": 2
    }, 
    {
        "code": "340102", 
        "sheng": "34", 
        "di": "01", 
        "xian": "02", 
        "name": "瑶海区", 
        "level": 3
    }, 
    {
        "code": "340103", 
        "sheng": "34", 
        "di": "01", 
        "xian": "03", 
        "name": "庐阳区", 
        "level": 3
    }, 
    {
        "code": "340104", 
        "sheng": "34", 
        "di": "01", 
        "xian": "04", 
        "name": "蜀山区", 
        "level": 3
    }, 
    {
        "code": "340111", 
        "sheng": "34", 
        "di": "01", 
        "xian": "11", 
        "name": "包河区", 
        "level": 3
    }, 
    {
        "code": "340121", 
        "sheng": "34", 
        "di": "01", 
        "xian": "21", 
        "name": "长丰县", 
        "level": 3
    }, 
    {
        "code": "340122", 
        "sheng": "34", 
        "di": "01", 
        "xian": "22", 
        "name": "肥东县", 
        "level": 3
    }, 
    {
        "code": "340123", 
        "sheng": "34", 
        "di": "01", 
        "xian": "23", 
        "name": "肥西县", 
        "level": 3
    }, 
    {
        "code": "340124", 
        "sheng": "34", 
        "di": "01", 
        "xian": "24", 
        "name": "庐江县", 
        "level": 3
    }, 
    {
        "code": "340181", 
        "sheng": "34", 
        "di": "01", 
        "xian": "81", 
        "name": "巢湖市", 
        "level": 3
    }, 
    {
        "code": "340184", 
        "sheng": "34", 
        "di": "01", 
        "xian": "84", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "340185", 
        "sheng": "34", 
        "di": "01", 
        "xian": "85", 
        "name": "高新技术开发区", 
        "level": 3
    }, 
    {
        "code": "340186", 
        "sheng": "34", 
        "di": "01", 
        "xian": "86", 
        "name": "北城新区", 
        "level": 3
    }, 
    {
        "code": "340187", 
        "sheng": "34", 
        "di": "01", 
        "xian": "87", 
        "name": "滨湖新区", 
        "level": 3
    }, 
    {
        "code": "340188", 
        "sheng": "34", 
        "di": "01", 
        "xian": "88", 
        "name": "政务文化新区", 
        "level": 3
    }, 
    {
        "code": "340189", 
        "sheng": "34", 
        "di": "01", 
        "xian": "89", 
        "name": "新站综合开发试验区", 
        "level": 3
    }, 
    {
        "code": "340200", 
        "sheng": "34", 
        "di": "02", 
        "xian": "00", 
        "name": "芜湖市", 
        "level": 2
    }, 
    {
        "code": "340202", 
        "sheng": "34", 
        "di": "02", 
        "xian": "02", 
        "name": "镜湖区", 
        "level": 3
    }, 
    {
        "code": "340203", 
        "sheng": "34", 
        "di": "02", 
        "xian": "03", 
        "name": "弋江区", 
        "level": 3
    }, 
    {
        "code": "340207", 
        "sheng": "34", 
        "di": "02", 
        "xian": "07", 
        "name": "鸠江区", 
        "level": 3
    }, 
    {
        "code": "340208", 
        "sheng": "34", 
        "di": "02", 
        "xian": "08", 
        "name": "三山区", 
        "level": 3
    }, 
    {
        "code": "340221", 
        "sheng": "34", 
        "di": "02", 
        "xian": "21", 
        "name": "芜湖县", 
        "level": 3
    }, 
    {
        "code": "340222", 
        "sheng": "34", 
        "di": "02", 
        "xian": "22", 
        "name": "繁昌县", 
        "level": 3
    }, 
    {
        "code": "340223", 
        "sheng": "34", 
        "di": "02", 
        "xian": "23", 
        "name": "南陵县", 
        "level": 3
    }, 
    {
        "code": "340225", 
        "sheng": "34", 
        "di": "02", 
        "xian": "25", 
        "name": "无为县", 
        "level": 3
    }, 
    {
        "code": "340226", 
        "sheng": "34", 
        "di": "02", 
        "xian": "26", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "340300", 
        "sheng": "34", 
        "di": "03", 
        "xian": "00", 
        "name": "蚌埠市", 
        "level": 2
    }, 
    {
        "code": "340302", 
        "sheng": "34", 
        "di": "03", 
        "xian": "02", 
        "name": "龙子湖区", 
        "level": 3
    }, 
    {
        "code": "340303", 
        "sheng": "34", 
        "di": "03", 
        "xian": "03", 
        "name": "蚌山区", 
        "level": 3
    }, 
    {
        "code": "340304", 
        "sheng": "34", 
        "di": "03", 
        "xian": "04", 
        "name": "禹会区", 
        "level": 3
    }, 
    {
        "code": "340311", 
        "sheng": "34", 
        "di": "03", 
        "xian": "11", 
        "name": "淮上区", 
        "level": 3
    }, 
    {
        "code": "340321", 
        "sheng": "34", 
        "di": "03", 
        "xian": "21", 
        "name": "怀远县", 
        "level": 3
    }, 
    {
        "code": "340322", 
        "sheng": "34", 
        "di": "03", 
        "xian": "22", 
        "name": "五河县", 
        "level": 3
    }, 
    {
        "code": "340323", 
        "sheng": "34", 
        "di": "03", 
        "xian": "23", 
        "name": "固镇县", 
        "level": 3
    }, 
    {
        "code": "340324", 
        "sheng": "34", 
        "di": "03", 
        "xian": "24", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "340400", 
        "sheng": "34", 
        "di": "04", 
        "xian": "00", 
        "name": "淮南市", 
        "level": 2
    }, 
    {
        "code": "340402", 
        "sheng": "34", 
        "di": "04", 
        "xian": "02", 
        "name": "大通区", 
        "level": 3
    }, 
    {
        "code": "340403", 
        "sheng": "34", 
        "di": "04", 
        "xian": "03", 
        "name": "田家庵区", 
        "level": 3
    }, 
    {
        "code": "340404", 
        "sheng": "34", 
        "di": "04", 
        "xian": "04", 
        "name": "谢家集区", 
        "level": 3
    }, 
    {
        "code": "340405", 
        "sheng": "34", 
        "di": "04", 
        "xian": "05", 
        "name": "八公山区", 
        "level": 3
    }, 
    {
        "code": "340406", 
        "sheng": "34", 
        "di": "04", 
        "xian": "06", 
        "name": "潘集区", 
        "level": 3
    }, 
    {
        "code": "340421", 
        "sheng": "34", 
        "di": "04", 
        "xian": "21", 
        "name": "凤台县", 
        "level": 3
    }, 
    {
        "code": "340422", 
        "sheng": "34", 
        "di": "04", 
        "xian": "22", 
        "name": "寿县", 
        "level": 3
    }, 
    {
        "code": "340423", 
        "sheng": "34", 
        "di": "04", 
        "xian": "23", 
        "name": "山南新区", 
        "level": 3
    }, 
    {
        "code": "340424", 
        "sheng": "34", 
        "di": "04", 
        "xian": "24", 
        "name": "毛集实验区", 
        "level": 3
    }, 
    {
        "code": "340425", 
        "sheng": "34", 
        "di": "04", 
        "xian": "25", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "340500", 
        "sheng": "34", 
        "di": "05", 
        "xian": "00", 
        "name": "马鞍山市", 
        "level": 2
    }, 
    {
        "code": "340503", 
        "sheng": "34", 
        "di": "05", 
        "xian": "03", 
        "name": "花山区", 
        "level": 3
    }, 
    {
        "code": "340504", 
        "sheng": "34", 
        "di": "05", 
        "xian": "04", 
        "name": "雨山区", 
        "level": 3
    }, 
    {
        "code": "340506", 
        "sheng": "34", 
        "di": "05", 
        "xian": "06", 
        "name": "博望区", 
        "level": 3
    }, 
    {
        "code": "340521", 
        "sheng": "34", 
        "di": "05", 
        "xian": "21", 
        "name": "当涂县", 
        "level": 3
    }, 
    {
        "code": "340522", 
        "sheng": "34", 
        "di": "05", 
        "xian": "22", 
        "name": "含山县", 
        "level": 3
    }, 
    {
        "code": "340523", 
        "sheng": "34", 
        "di": "05", 
        "xian": "23", 
        "name": "和县", 
        "level": 3
    }, 
    {
        "code": "340600", 
        "sheng": "34", 
        "di": "06", 
        "xian": "00", 
        "name": "淮北市", 
        "level": 2
    }, 
    {
        "code": "340602", 
        "sheng": "34", 
        "di": "06", 
        "xian": "02", 
        "name": "杜集区", 
        "level": 3
    }, 
    {
        "code": "340603", 
        "sheng": "34", 
        "di": "06", 
        "xian": "03", 
        "name": "相山区", 
        "level": 3
    }, 
    {
        "code": "340604", 
        "sheng": "34", 
        "di": "06", 
        "xian": "04", 
        "name": "烈山区", 
        "level": 3
    }, 
    {
        "code": "340621", 
        "sheng": "34", 
        "di": "06", 
        "xian": "21", 
        "name": "濉溪县", 
        "level": 3
    }, 
    {
        "code": "340700", 
        "sheng": "34", 
        "di": "07", 
        "xian": "00", 
        "name": "铜陵市", 
        "level": 2
    }, 
    {
        "code": "340705", 
        "sheng": "34", 
        "di": "07", 
        "xian": "05", 
        "name": "铜官区", 
        "level": 3
    }, 
    {
        "code": "340706", 
        "sheng": "34", 
        "di": "07", 
        "xian": "06", 
        "name": "义安区", 
        "level": 3
    }, 
    {
        "code": "340711", 
        "sheng": "34", 
        "di": "07", 
        "xian": "11", 
        "name": "郊区", 
        "level": 3
    }, 
    {
        "code": "340722", 
        "sheng": "34", 
        "di": "07", 
        "xian": "22", 
        "name": "枞阳县", 
        "level": 3
    }, 
    {
        "code": "340800", 
        "sheng": "34", 
        "di": "08", 
        "xian": "00", 
        "name": "安庆市", 
        "level": 2
    }, 
    {
        "code": "340802", 
        "sheng": "34", 
        "di": "08", 
        "xian": "02", 
        "name": "迎江区", 
        "level": 3
    }, 
    {
        "code": "340803", 
        "sheng": "34", 
        "di": "08", 
        "xian": "03", 
        "name": "大观区", 
        "level": 3
    }, 
    {
        "code": "340811", 
        "sheng": "34", 
        "di": "08", 
        "xian": "11", 
        "name": "宜秀区", 
        "level": 3
    }, 
    {
        "code": "340822", 
        "sheng": "34", 
        "di": "08", 
        "xian": "22", 
        "name": "怀宁县", 
        "level": 3
    }, 
    {
        "code": "340824", 
        "sheng": "34", 
        "di": "08", 
        "xian": "24", 
        "name": "潜山县", 
        "level": 3
    }, 
    {
        "code": "340825", 
        "sheng": "34", 
        "di": "08", 
        "xian": "25", 
        "name": "太湖县", 
        "level": 3
    }, 
    {
        "code": "340826", 
        "sheng": "34", 
        "di": "08", 
        "xian": "26", 
        "name": "宿松县", 
        "level": 3
    }, 
    {
        "code": "340827", 
        "sheng": "34", 
        "di": "08", 
        "xian": "27", 
        "name": "望江县", 
        "level": 3
    }, 
    {
        "code": "340828", 
        "sheng": "34", 
        "di": "08", 
        "xian": "28", 
        "name": "岳西县", 
        "level": 3
    }, 
    {
        "code": "340881", 
        "sheng": "34", 
        "di": "08", 
        "xian": "81", 
        "name": "桐城市", 
        "level": 3
    }, 
    {
        "code": "341000", 
        "sheng": "34", 
        "di": "10", 
        "xian": "00", 
        "name": "黄山市", 
        "level": 2
    }, 
    {
        "code": "341002", 
        "sheng": "34", 
        "di": "10", 
        "xian": "02", 
        "name": "屯溪区", 
        "level": 3
    }, 
    {
        "code": "341003", 
        "sheng": "34", 
        "di": "10", 
        "xian": "03", 
        "name": "黄山区", 
        "level": 3
    }, 
    {
        "code": "341004", 
        "sheng": "34", 
        "di": "10", 
        "xian": "04", 
        "name": "徽州区", 
        "level": 3
    }, 
    {
        "code": "341021", 
        "sheng": "34", 
        "di": "10", 
        "xian": "21", 
        "name": "歙县", 
        "level": 3
    }, 
    {
        "code": "341022", 
        "sheng": "34", 
        "di": "10", 
        "xian": "22", 
        "name": "休宁县", 
        "level": 3
    }, 
    {
        "code": "341023", 
        "sheng": "34", 
        "di": "10", 
        "xian": "23", 
        "name": "黟县", 
        "level": 3
    }, 
    {
        "code": "341024", 
        "sheng": "34", 
        "di": "10", 
        "xian": "24", 
        "name": "祁门县", 
        "level": 3
    }, 
    {
        "code": "341100", 
        "sheng": "34", 
        "di": "11", 
        "xian": "00", 
        "name": "滁州市", 
        "level": 2
    }, 
    {
        "code": "341102", 
        "sheng": "34", 
        "di": "11", 
        "xian": "02", 
        "name": "琅琊区", 
        "level": 3
    }, 
    {
        "code": "341103", 
        "sheng": "34", 
        "di": "11", 
        "xian": "03", 
        "name": "南谯区", 
        "level": 3
    }, 
    {
        "code": "341122", 
        "sheng": "34", 
        "di": "11", 
        "xian": "22", 
        "name": "来安县", 
        "level": 3
    }, 
    {
        "code": "341124", 
        "sheng": "34", 
        "di": "11", 
        "xian": "24", 
        "name": "全椒县", 
        "level": 3
    }, 
    {
        "code": "341125", 
        "sheng": "34", 
        "di": "11", 
        "xian": "25", 
        "name": "定远县", 
        "level": 3
    }, 
    {
        "code": "341126", 
        "sheng": "34", 
        "di": "11", 
        "xian": "26", 
        "name": "凤阳县", 
        "level": 3
    }, 
    {
        "code": "341181", 
        "sheng": "34", 
        "di": "11", 
        "xian": "81", 
        "name": "天长市", 
        "level": 3
    }, 
    {
        "code": "341182", 
        "sheng": "34", 
        "di": "11", 
        "xian": "82", 
        "name": "明光市", 
        "level": 3
    }, 
    {
        "code": "341200", 
        "sheng": "34", 
        "di": "12", 
        "xian": "00", 
        "name": "阜阳市", 
        "level": 2
    }, 
    {
        "code": "341202", 
        "sheng": "34", 
        "di": "12", 
        "xian": "02", 
        "name": "颍州区", 
        "level": 3
    }, 
    {
        "code": "341203", 
        "sheng": "34", 
        "di": "12", 
        "xian": "03", 
        "name": "颍东区", 
        "level": 3
    }, 
    {
        "code": "341204", 
        "sheng": "34", 
        "di": "12", 
        "xian": "04", 
        "name": "颍泉区", 
        "level": 3
    }, 
    {
        "code": "341221", 
        "sheng": "34", 
        "di": "12", 
        "xian": "21", 
        "name": "临泉县", 
        "level": 3
    }, 
    {
        "code": "341222", 
        "sheng": "34", 
        "di": "12", 
        "xian": "22", 
        "name": "太和县", 
        "level": 3
    }, 
    {
        "code": "341225", 
        "sheng": "34", 
        "di": "12", 
        "xian": "25", 
        "name": "阜南县", 
        "level": 3
    }, 
    {
        "code": "341226", 
        "sheng": "34", 
        "di": "12", 
        "xian": "26", 
        "name": "颍上县", 
        "level": 3
    }, 
    {
        "code": "341282", 
        "sheng": "34", 
        "di": "12", 
        "xian": "82", 
        "name": "界首市", 
        "level": 3
    }, 
    {
        "code": "341283", 
        "sheng": "34", 
        "di": "12", 
        "xian": "83", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "341300", 
        "sheng": "34", 
        "di": "13", 
        "xian": "00", 
        "name": "宿州市", 
        "level": 2
    }, 
    {
        "code": "341302", 
        "sheng": "34", 
        "di": "13", 
        "xian": "02", 
        "name": "埇桥区", 
        "level": 3
    }, 
    {
        "code": "341321", 
        "sheng": "34", 
        "di": "13", 
        "xian": "21", 
        "name": "砀山县", 
        "level": 3
    }, 
    {
        "code": "341322", 
        "sheng": "34", 
        "di": "13", 
        "xian": "22", 
        "name": "萧县", 
        "level": 3
    }, 
    {
        "code": "341323", 
        "sheng": "34", 
        "di": "13", 
        "xian": "23", 
        "name": "灵璧县", 
        "level": 3
    }, 
    {
        "code": "341324", 
        "sheng": "34", 
        "di": "13", 
        "xian": "24", 
        "name": "泗县", 
        "level": 3
    }, 
    {
        "code": "341325", 
        "sheng": "34", 
        "di": "13", 
        "xian": "25", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "341500", 
        "sheng": "34", 
        "di": "15", 
        "xian": "00", 
        "name": "六安市", 
        "level": 2
    }, 
    {
        "code": "341502", 
        "sheng": "34", 
        "di": "15", 
        "xian": "02", 
        "name": "金安区", 
        "level": 3
    }, 
    {
        "code": "341503", 
        "sheng": "34", 
        "di": "15", 
        "xian": "03", 
        "name": "裕安区", 
        "level": 3
    }, 
    {
        "code": "341504", 
        "sheng": "34", 
        "di": "15", 
        "xian": "04", 
        "name": "叶集区", 
        "level": 3
    }, 
    {
        "code": "341522", 
        "sheng": "34", 
        "di": "15", 
        "xian": "22", 
        "name": "霍邱县", 
        "level": 3
    }, 
    {
        "code": "341523", 
        "sheng": "34", 
        "di": "15", 
        "xian": "23", 
        "name": "舒城县", 
        "level": 3
    }, 
    {
        "code": "341524", 
        "sheng": "34", 
        "di": "15", 
        "xian": "24", 
        "name": "金寨县", 
        "level": 3
    }, 
    {
        "code": "341525", 
        "sheng": "34", 
        "di": "15", 
        "xian": "25", 
        "name": "霍山县", 
        "level": 3
    }, 
    {
        "code": "341600", 
        "sheng": "34", 
        "di": "16", 
        "xian": "00", 
        "name": "亳州市", 
        "level": 2
    }, 
    {
        "code": "341602", 
        "sheng": "34", 
        "di": "16", 
        "xian": "02", 
        "name": "谯城区", 
        "level": 3
    }, 
    {
        "code": "341621", 
        "sheng": "34", 
        "di": "16", 
        "xian": "21", 
        "name": "涡阳县", 
        "level": 3
    }, 
    {
        "code": "341622", 
        "sheng": "34", 
        "di": "16", 
        "xian": "22", 
        "name": "蒙城县", 
        "level": 3
    }, 
    {
        "code": "341623", 
        "sheng": "34", 
        "di": "16", 
        "xian": "23", 
        "name": "利辛县", 
        "level": 3
    }, 
    {
        "code": "341700", 
        "sheng": "34", 
        "di": "17", 
        "xian": "00", 
        "name": "池州市", 
        "level": 2
    }, 
    {
        "code": "341702", 
        "sheng": "34", 
        "di": "17", 
        "xian": "02", 
        "name": "贵池区", 
        "level": 3
    }, 
    {
        "code": "341721", 
        "sheng": "34", 
        "di": "17", 
        "xian": "21", 
        "name": "东至县", 
        "level": 3
    }, 
    {
        "code": "341722", 
        "sheng": "34", 
        "di": "17", 
        "xian": "22", 
        "name": "石台县", 
        "level": 3
    }, 
    {
        "code": "341723", 
        "sheng": "34", 
        "di": "17", 
        "xian": "23", 
        "name": "青阳县", 
        "level": 3
    }, 
    {
        "code": "341800", 
        "sheng": "34", 
        "di": "18", 
        "xian": "00", 
        "name": "宣城市", 
        "level": 2
    }, 
    {
        "code": "341802", 
        "sheng": "34", 
        "di": "18", 
        "xian": "02", 
        "name": "宣州区", 
        "level": 3
    }, 
    {
        "code": "341821", 
        "sheng": "34", 
        "di": "18", 
        "xian": "21", 
        "name": "郎溪县", 
        "level": 3
    }, 
    {
        "code": "341822", 
        "sheng": "34", 
        "di": "18", 
        "xian": "22", 
        "name": "广德县", 
        "level": 3
    }, 
    {
        "code": "341823", 
        "sheng": "34", 
        "di": "18", 
        "xian": "23", 
        "name": "泾县", 
        "level": 3
    }, 
    {
        "code": "341824", 
        "sheng": "34", 
        "di": "18", 
        "xian": "24", 
        "name": "绩溪县", 
        "level": 3
    }, 
    {
        "code": "341825", 
        "sheng": "34", 
        "di": "18", 
        "xian": "25", 
        "name": "旌德县", 
        "level": 3
    }, 
    {
        "code": "341881", 
        "sheng": "34", 
        "di": "18", 
        "xian": "81", 
        "name": "宁国市", 
        "level": 3
    }, 
    {
        "code": "350000", 
        "sheng": "35", 
        "di": "00", 
        "xian": "00", 
        "name": "福建省", 
        "level": 1
    }, 
    {
        "code": "350100", 
        "sheng": "35", 
        "di": "01", 
        "xian": "00", 
        "name": "福州市", 
        "level": 2
    }, 
    {
        "code": "350102", 
        "sheng": "35", 
        "di": "01", 
        "xian": "02", 
        "name": "鼓楼区", 
        "level": 3
    }, 
    {
        "code": "350103", 
        "sheng": "35", 
        "di": "01", 
        "xian": "03", 
        "name": "台江区", 
        "level": 3
    }, 
    {
        "code": "350104", 
        "sheng": "35", 
        "di": "01", 
        "xian": "04", 
        "name": "仓山区", 
        "level": 3
    }, 
    {
        "code": "350105", 
        "sheng": "35", 
        "di": "01", 
        "xian": "05", 
        "name": "马尾区", 
        "level": 3
    }, 
    {
        "code": "350111", 
        "sheng": "35", 
        "di": "01", 
        "xian": "11", 
        "name": "晋安区", 
        "level": 3
    }, 
    {
        "code": "350121", 
        "sheng": "35", 
        "di": "01", 
        "xian": "21", 
        "name": "闽侯县", 
        "level": 3
    }, 
    {
        "code": "350122", 
        "sheng": "35", 
        "di": "01", 
        "xian": "22", 
        "name": "连江县", 
        "level": 3
    }, 
    {
        "code": "350123", 
        "sheng": "35", 
        "di": "01", 
        "xian": "23", 
        "name": "罗源县", 
        "level": 3
    }, 
    {
        "code": "350124", 
        "sheng": "35", 
        "di": "01", 
        "xian": "24", 
        "name": "闽清县", 
        "level": 3
    }, 
    {
        "code": "350125", 
        "sheng": "35", 
        "di": "01", 
        "xian": "25", 
        "name": "永泰县", 
        "level": 3
    }, 
    {
        "code": "350128", 
        "sheng": "35", 
        "di": "01", 
        "xian": "28", 
        "name": "平潭县", 
        "level": 3
    }, 
    {
        "code": "350181", 
        "sheng": "35", 
        "di": "01", 
        "xian": "81", 
        "name": "福清市", 
        "level": 3
    }, 
    {
        "code": "350182", 
        "sheng": "35", 
        "di": "01", 
        "xian": "82", 
        "name": "长乐市", 
        "level": 3
    }, 
    {
        "code": "350183", 
        "sheng": "35", 
        "di": "01", 
        "xian": "83", 
        "name": "福州新区", 
        "level": 3
    }, 
    {
        "code": "350200", 
        "sheng": "35", 
        "di": "02", 
        "xian": "00", 
        "name": "厦门市", 
        "level": 2
    }, 
    {
        "code": "350203", 
        "sheng": "35", 
        "di": "02", 
        "xian": "03", 
        "name": "思明区", 
        "level": 3
    }, 
    {
        "code": "350205", 
        "sheng": "35", 
        "di": "02", 
        "xian": "05", 
        "name": "海沧区", 
        "level": 3
    }, 
    {
        "code": "350206", 
        "sheng": "35", 
        "di": "02", 
        "xian": "06", 
        "name": "湖里区", 
        "level": 3
    }, 
    {
        "code": "350211", 
        "sheng": "35", 
        "di": "02", 
        "xian": "11", 
        "name": "集美区", 
        "level": 3
    }, 
    {
        "code": "350212", 
        "sheng": "35", 
        "di": "02", 
        "xian": "12", 
        "name": "同安区", 
        "level": 3
    }, 
    {
        "code": "350213", 
        "sheng": "35", 
        "di": "02", 
        "xian": "13", 
        "name": "翔安区", 
        "level": 3
    }, 
    {
        "code": "350300", 
        "sheng": "35", 
        "di": "03", 
        "xian": "00", 
        "name": "莆田市", 
        "level": 2
    }, 
    {
        "code": "350302", 
        "sheng": "35", 
        "di": "03", 
        "xian": "02", 
        "name": "城厢区", 
        "level": 3
    }, 
    {
        "code": "350303", 
        "sheng": "35", 
        "di": "03", 
        "xian": "03", 
        "name": "涵江区", 
        "level": 3
    }, 
    {
        "code": "350304", 
        "sheng": "35", 
        "di": "03", 
        "xian": "04", 
        "name": "荔城区", 
        "level": 3
    }, 
    {
        "code": "350305", 
        "sheng": "35", 
        "di": "03", 
        "xian": "05", 
        "name": "秀屿区", 
        "level": 3
    }, 
    {
        "code": "350322", 
        "sheng": "35", 
        "di": "03", 
        "xian": "22", 
        "name": "仙游县", 
        "level": 3
    }, 
    {
        "code": "350400", 
        "sheng": "35", 
        "di": "04", 
        "xian": "00", 
        "name": "三明市", 
        "level": 2
    }, 
    {
        "code": "350402", 
        "sheng": "35", 
        "di": "04", 
        "xian": "02", 
        "name": "梅列区", 
        "level": 3
    }, 
    {
        "code": "350403", 
        "sheng": "35", 
        "di": "04", 
        "xian": "03", 
        "name": "三元区", 
        "level": 3
    }, 
    {
        "code": "350421", 
        "sheng": "35", 
        "di": "04", 
        "xian": "21", 
        "name": "明溪县", 
        "level": 3
    }, 
    {
        "code": "350423", 
        "sheng": "35", 
        "di": "04", 
        "xian": "23", 
        "name": "清流县", 
        "level": 3
    }, 
    {
        "code": "350424", 
        "sheng": "35", 
        "di": "04", 
        "xian": "24", 
        "name": "宁化县", 
        "level": 3
    }, 
    {
        "code": "350425", 
        "sheng": "35", 
        "di": "04", 
        "xian": "25", 
        "name": "大田县", 
        "level": 3
    }, 
    {
        "code": "350426", 
        "sheng": "35", 
        "di": "04", 
        "xian": "26", 
        "name": "尤溪县", 
        "level": 3
    }, 
    {
        "code": "350427", 
        "sheng": "35", 
        "di": "04", 
        "xian": "27", 
        "name": "沙县", 
        "level": 3
    }, 
    {
        "code": "350428", 
        "sheng": "35", 
        "di": "04", 
        "xian": "28", 
        "name": "将乐县", 
        "level": 3
    }, 
    {
        "code": "350429", 
        "sheng": "35", 
        "di": "04", 
        "xian": "29", 
        "name": "泰宁县", 
        "level": 3
    }, 
    {
        "code": "350430", 
        "sheng": "35", 
        "di": "04", 
        "xian": "30", 
        "name": "建宁县", 
        "level": 3
    }, 
    {
        "code": "350481", 
        "sheng": "35", 
        "di": "04", 
        "xian": "81", 
        "name": "永安市", 
        "level": 3
    }, 
    {
        "code": "350500", 
        "sheng": "35", 
        "di": "05", 
        "xian": "00", 
        "name": "泉州市", 
        "level": 2
    }, 
    {
        "code": "350502", 
        "sheng": "35", 
        "di": "05", 
        "xian": "02", 
        "name": "鲤城区", 
        "level": 3
    }, 
    {
        "code": "350503", 
        "sheng": "35", 
        "di": "05", 
        "xian": "03", 
        "name": "丰泽区", 
        "level": 3
    }, 
    {
        "code": "350504", 
        "sheng": "35", 
        "di": "05", 
        "xian": "04", 
        "name": "洛江区", 
        "level": 3
    }, 
    {
        "code": "350505", 
        "sheng": "35", 
        "di": "05", 
        "xian": "05", 
        "name": "泉港区", 
        "level": 3
    }, 
    {
        "code": "350521", 
        "sheng": "35", 
        "di": "05", 
        "xian": "21", 
        "name": "惠安县", 
        "level": 3
    }, 
    {
        "code": "350524", 
        "sheng": "35", 
        "di": "05", 
        "xian": "24", 
        "name": "安溪县", 
        "level": 3
    }, 
    {
        "code": "350525", 
        "sheng": "35", 
        "di": "05", 
        "xian": "25", 
        "name": "永春县", 
        "level": 3
    }, 
    {
        "code": "350526", 
        "sheng": "35", 
        "di": "05", 
        "xian": "26", 
        "name": "德化县", 
        "level": 3
    }, 
    {
        "code": "350527", 
        "sheng": "35", 
        "di": "05", 
        "xian": "27", 
        "name": "金门县", 
        "level": 3
    }, 
    {
        "code": "350581", 
        "sheng": "35", 
        "di": "05", 
        "xian": "81", 
        "name": "石狮市", 
        "level": 3
    }, 
    {
        "code": "350582", 
        "sheng": "35", 
        "di": "05", 
        "xian": "82", 
        "name": "晋江市", 
        "level": 3
    }, 
    {
        "code": "350583", 
        "sheng": "35", 
        "di": "05", 
        "xian": "83", 
        "name": "南安市", 
        "level": 3
    }, 
    {
        "code": "350584", 
        "sheng": "35", 
        "di": "05", 
        "xian": "84", 
        "name": "台商投资区", 
        "level": 3
    }, 
    {
        "code": "350585", 
        "sheng": "35", 
        "di": "05", 
        "xian": "85", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "350586", 
        "sheng": "35", 
        "di": "05", 
        "xian": "86", 
        "name": "高新技术开发区", 
        "level": 3
    }, 
    {
        "code": "350587", 
        "sheng": "35", 
        "di": "05", 
        "xian": "87", 
        "name": "综合保税区", 
        "level": 3
    }, 
    {
        "code": "350600", 
        "sheng": "35", 
        "di": "06", 
        "xian": "00", 
        "name": "漳州市", 
        "level": 2
    }, 
    {
        "code": "350602", 
        "sheng": "35", 
        "di": "06", 
        "xian": "02", 
        "name": "芗城区", 
        "level": 3
    }, 
    {
        "code": "350603", 
        "sheng": "35", 
        "di": "06", 
        "xian": "03", 
        "name": "龙文区", 
        "level": 3
    }, 
    {
        "code": "350622", 
        "sheng": "35", 
        "di": "06", 
        "xian": "22", 
        "name": "云霄县", 
        "level": 3
    }, 
    {
        "code": "350623", 
        "sheng": "35", 
        "di": "06", 
        "xian": "23", 
        "name": "漳浦县", 
        "level": 3
    }, 
    {
        "code": "350624", 
        "sheng": "35", 
        "di": "06", 
        "xian": "24", 
        "name": "诏安县", 
        "level": 3
    }, 
    {
        "code": "350625", 
        "sheng": "35", 
        "di": "06", 
        "xian": "25", 
        "name": "长泰县", 
        "level": 3
    }, 
    {
        "code": "350626", 
        "sheng": "35", 
        "di": "06", 
        "xian": "26", 
        "name": "东山县", 
        "level": 3
    }, 
    {
        "code": "350627", 
        "sheng": "35", 
        "di": "06", 
        "xian": "27", 
        "name": "南靖县", 
        "level": 3
    }, 
    {
        "code": "350628", 
        "sheng": "35", 
        "di": "06", 
        "xian": "28", 
        "name": "平和县", 
        "level": 3
    }, 
    {
        "code": "350629", 
        "sheng": "35", 
        "di": "06", 
        "xian": "29", 
        "name": "华安县", 
        "level": 3
    }, 
    {
        "code": "350681", 
        "sheng": "35", 
        "di": "06", 
        "xian": "81", 
        "name": "龙海市", 
        "level": 3
    }, 
    {
        "code": "350700", 
        "sheng": "35", 
        "di": "07", 
        "xian": "00", 
        "name": "南平市", 
        "level": 2
    }, 
    {
        "code": "350702", 
        "sheng": "35", 
        "di": "07", 
        "xian": "02", 
        "name": "延平区", 
        "level": 3
    }, 
    {
        "code": "350703", 
        "sheng": "35", 
        "di": "07", 
        "xian": "03", 
        "name": "建阳区", 
        "level": 3
    }, 
    {
        "code": "350721", 
        "sheng": "35", 
        "di": "07", 
        "xian": "21", 
        "name": "顺昌县", 
        "level": 3
    }, 
    {
        "code": "350722", 
        "sheng": "35", 
        "di": "07", 
        "xian": "22", 
        "name": "浦城县", 
        "level": 3
    }, 
    {
        "code": "350723", 
        "sheng": "35", 
        "di": "07", 
        "xian": "23", 
        "name": "光泽县", 
        "level": 3
    }, 
    {
        "code": "350724", 
        "sheng": "35", 
        "di": "07", 
        "xian": "24", 
        "name": "松溪县", 
        "level": 3
    }, 
    {
        "code": "350725", 
        "sheng": "35", 
        "di": "07", 
        "xian": "25", 
        "name": "政和县", 
        "level": 3
    }, 
    {
        "code": "350781", 
        "sheng": "35", 
        "di": "07", 
        "xian": "81", 
        "name": "邵武市", 
        "level": 3
    }, 
    {
        "code": "350782", 
        "sheng": "35", 
        "di": "07", 
        "xian": "82", 
        "name": "武夷山市", 
        "level": 3
    }, 
    {
        "code": "350783", 
        "sheng": "35", 
        "di": "07", 
        "xian": "83", 
        "name": "建瓯市", 
        "level": 3
    }, 
    {
        "code": "350800", 
        "sheng": "35", 
        "di": "08", 
        "xian": "00", 
        "name": "龙岩市", 
        "level": 2
    }, 
    {
        "code": "350802", 
        "sheng": "35", 
        "di": "08", 
        "xian": "02", 
        "name": "新罗区", 
        "level": 3
    }, 
    {
        "code": "350803", 
        "sheng": "35", 
        "di": "08", 
        "xian": "03", 
        "name": "永定区", 
        "level": 3
    }, 
    {
        "code": "350821", 
        "sheng": "35", 
        "di": "08", 
        "xian": "21", 
        "name": "长汀县", 
        "level": 3
    }, 
    {
        "code": "350823", 
        "sheng": "35", 
        "di": "08", 
        "xian": "23", 
        "name": "上杭县", 
        "level": 3
    }, 
    {
        "code": "350824", 
        "sheng": "35", 
        "di": "08", 
        "xian": "24", 
        "name": "武平县", 
        "level": 3
    }, 
    {
        "code": "350825", 
        "sheng": "35", 
        "di": "08", 
        "xian": "25", 
        "name": "连城县", 
        "level": 3
    }, 
    {
        "code": "350881", 
        "sheng": "35", 
        "di": "08", 
        "xian": "81", 
        "name": "漳平市", 
        "level": 3
    }, 
    {
        "code": "350900", 
        "sheng": "35", 
        "di": "09", 
        "xian": "00", 
        "name": "宁德市", 
        "level": 2
    }, 
    {
        "code": "350902", 
        "sheng": "35", 
        "di": "09", 
        "xian": "02", 
        "name": "蕉城区", 
        "level": 3
    }, 
    {
        "code": "350921", 
        "sheng": "35", 
        "di": "09", 
        "xian": "21", 
        "name": "霞浦县", 
        "level": 3
    }, 
    {
        "code": "350922", 
        "sheng": "35", 
        "di": "09", 
        "xian": "22", 
        "name": "古田县", 
        "level": 3
    }, 
    {
        "code": "350923", 
        "sheng": "35", 
        "di": "09", 
        "xian": "23", 
        "name": "屏南县", 
        "level": 3
    }, 
    {
        "code": "350924", 
        "sheng": "35", 
        "di": "09", 
        "xian": "24", 
        "name": "寿宁县", 
        "level": 3
    }, 
    {
        "code": "350925", 
        "sheng": "35", 
        "di": "09", 
        "xian": "25", 
        "name": "周宁县", 
        "level": 3
    }, 
    {
        "code": "350926", 
        "sheng": "35", 
        "di": "09", 
        "xian": "26", 
        "name": "柘荣县", 
        "level": 3
    }, 
    {
        "code": "350981", 
        "sheng": "35", 
        "di": "09", 
        "xian": "81", 
        "name": "福安市", 
        "level": 3
    }, 
    {
        "code": "350982", 
        "sheng": "35", 
        "di": "09", 
        "xian": "82", 
        "name": "福鼎市", 
        "level": 3
    }, 
    {
        "code": "350983", 
        "sheng": "35", 
        "di": "09", 
        "xian": "83", 
        "name": "东侨开发区", 
        "level": 3
    }, 
    {
        "code": "360000", 
        "sheng": "36", 
        "di": "00", 
        "xian": "00", 
        "name": "江西省", 
        "level": 1
    }, 
    {
        "code": "360100", 
        "sheng": "36", 
        "di": "01", 
        "xian": "00", 
        "name": "南昌市", 
        "level": 2
    }, 
    {
        "code": "360102", 
        "sheng": "36", 
        "di": "01", 
        "xian": "02", 
        "name": "东湖区", 
        "level": 3
    }, 
    {
        "code": "360103", 
        "sheng": "36", 
        "di": "01", 
        "xian": "03", 
        "name": "西湖区", 
        "level": 3
    }, 
    {
        "code": "360104", 
        "sheng": "36", 
        "di": "01", 
        "xian": "04", 
        "name": "青云谱区", 
        "level": 3
    }, 
    {
        "code": "360105", 
        "sheng": "36", 
        "di": "01", 
        "xian": "05", 
        "name": "湾里区", 
        "level": 3
    }, 
    {
        "code": "360111", 
        "sheng": "36", 
        "di": "01", 
        "xian": "11", 
        "name": "青山湖区", 
        "level": 3
    }, 
    {
        "code": "360112", 
        "sheng": "36", 
        "di": "01", 
        "xian": "12", 
        "name": "新建区", 
        "level": 3
    }, 
    {
        "code": "360121", 
        "sheng": "36", 
        "di": "01", 
        "xian": "21", 
        "name": "南昌县", 
        "level": 3
    }, 
    {
        "code": "360123", 
        "sheng": "36", 
        "di": "01", 
        "xian": "23", 
        "name": "安义县", 
        "level": 3
    }, 
    {
        "code": "360124", 
        "sheng": "36", 
        "di": "01", 
        "xian": "24", 
        "name": "进贤县", 
        "level": 3
    }, 
    {
        "code": "360125", 
        "sheng": "36", 
        "di": "01", 
        "xian": "25", 
        "name": "红谷滩新区", 
        "level": 3
    }, 
    {
        "code": "360126", 
        "sheng": "36", 
        "di": "01", 
        "xian": "26", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "360127", 
        "sheng": "36", 
        "di": "01", 
        "xian": "27", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "360128", 
        "sheng": "36", 
        "di": "01", 
        "xian": "28", 
        "name": "小蓝开发区", 
        "level": 3
    }, 
    {
        "code": "360129", 
        "sheng": "36", 
        "di": "01", 
        "xian": "29", 
        "name": "桑海开发区", 
        "level": 3
    }, 
    {
        "code": "360130", 
        "sheng": "36", 
        "di": "01", 
        "xian": "30", 
        "name": "望城新区", 
        "level": 3
    }, 
    {
        "code": "360131", 
        "sheng": "36", 
        "di": "01", 
        "xian": "31", 
        "name": "赣江新区", 
        "level": 3
    }, 
    {
        "code": "360200", 
        "sheng": "36", 
        "di": "02", 
        "xian": "00", 
        "name": "景德镇市", 
        "level": 2
    }, 
    {
        "code": "360202", 
        "sheng": "36", 
        "di": "02", 
        "xian": "02", 
        "name": "昌江区", 
        "level": 3
    }, 
    {
        "code": "360203", 
        "sheng": "36", 
        "di": "02", 
        "xian": "03", 
        "name": "珠山区", 
        "level": 3
    }, 
    {
        "code": "360222", 
        "sheng": "36", 
        "di": "02", 
        "xian": "22", 
        "name": "浮梁县", 
        "level": 3
    }, 
    {
        "code": "360281", 
        "sheng": "36", 
        "di": "02", 
        "xian": "81", 
        "name": "乐平市", 
        "level": 3
    }, 
    {
        "code": "360300", 
        "sheng": "36", 
        "di": "03", 
        "xian": "00", 
        "name": "萍乡市", 
        "level": 2
    }, 
    {
        "code": "360302", 
        "sheng": "36", 
        "di": "03", 
        "xian": "02", 
        "name": "安源区", 
        "level": 3
    }, 
    {
        "code": "360313", 
        "sheng": "36", 
        "di": "03", 
        "xian": "13", 
        "name": "湘东区", 
        "level": 3
    }, 
    {
        "code": "360321", 
        "sheng": "36", 
        "di": "03", 
        "xian": "21", 
        "name": "莲花县", 
        "level": 3
    }, 
    {
        "code": "360322", 
        "sheng": "36", 
        "di": "03", 
        "xian": "22", 
        "name": "上栗县", 
        "level": 3
    }, 
    {
        "code": "360323", 
        "sheng": "36", 
        "di": "03", 
        "xian": "23", 
        "name": "芦溪县", 
        "level": 3
    }, 
    {
        "code": "360400", 
        "sheng": "36", 
        "di": "04", 
        "xian": "00", 
        "name": "九江市", 
        "level": 2
    }, 
    {
        "code": "360402", 
        "sheng": "36", 
        "di": "04", 
        "xian": "02", 
        "name": "濂溪区", 
        "level": 3
    }, 
    {
        "code": "360403", 
        "sheng": "36", 
        "di": "04", 
        "xian": "03", 
        "name": "浔阳区", 
        "level": 3
    }, 
    {
        "code": "360421", 
        "sheng": "36", 
        "di": "04", 
        "xian": "21", 
        "name": "九江县", 
        "level": 3
    }, 
    {
        "code": "360423", 
        "sheng": "36", 
        "di": "04", 
        "xian": "23", 
        "name": "武宁县", 
        "level": 3
    }, 
    {
        "code": "360424", 
        "sheng": "36", 
        "di": "04", 
        "xian": "24", 
        "name": "修水县", 
        "level": 3
    }, 
    {
        "code": "360425", 
        "sheng": "36", 
        "di": "04", 
        "xian": "25", 
        "name": "永修县", 
        "level": 3
    }, 
    {
        "code": "360426", 
        "sheng": "36", 
        "di": "04", 
        "xian": "26", 
        "name": "德安县", 
        "level": 3
    }, 
    {
        "code": "360428", 
        "sheng": "36", 
        "di": "04", 
        "xian": "28", 
        "name": "都昌县", 
        "level": 3
    }, 
    {
        "code": "360429", 
        "sheng": "36", 
        "di": "04", 
        "xian": "29", 
        "name": "湖口县", 
        "level": 3
    }, 
    {
        "code": "360430", 
        "sheng": "36", 
        "di": "04", 
        "xian": "30", 
        "name": "彭泽县", 
        "level": 3
    }, 
    {
        "code": "360481", 
        "sheng": "36", 
        "di": "04", 
        "xian": "81", 
        "name": "瑞昌市", 
        "level": 3
    }, 
    {
        "code": "360482", 
        "sheng": "36", 
        "di": "04", 
        "xian": "82", 
        "name": "共青城市", 
        "level": 3
    }, 
    {
        "code": "360483", 
        "sheng": "36", 
        "di": "04", 
        "xian": "83", 
        "name": "庐山市", 
        "level": 3
    }, 
    {
        "code": "360484", 
        "sheng": "36", 
        "di": "04", 
        "xian": "84", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "360485", 
        "sheng": "36", 
        "di": "04", 
        "xian": "85", 
        "name": "八里湖新区", 
        "level": 3
    }, 
    {
        "code": "360486", 
        "sheng": "36", 
        "di": "04", 
        "xian": "86", 
        "name": "庐山风景名胜区", 
        "level": 3
    }, 
    {
        "code": "360500", 
        "sheng": "36", 
        "di": "05", 
        "xian": "00", 
        "name": "新余市", 
        "level": 2
    }, 
    {
        "code": "360502", 
        "sheng": "36", 
        "di": "05", 
        "xian": "02", 
        "name": "渝水区", 
        "level": 3
    }, 
    {
        "code": "360521", 
        "sheng": "36", 
        "di": "05", 
        "xian": "21", 
        "name": "分宜县", 
        "level": 3
    }, 
    {
        "code": "360600", 
        "sheng": "36", 
        "di": "06", 
        "xian": "00", 
        "name": "鹰潭市", 
        "level": 2
    }, 
    {
        "code": "360602", 
        "sheng": "36", 
        "di": "06", 
        "xian": "02", 
        "name": "月湖区", 
        "level": 3
    }, 
    {
        "code": "360622", 
        "sheng": "36", 
        "di": "06", 
        "xian": "22", 
        "name": "余江县", 
        "level": 3
    }, 
    {
        "code": "360681", 
        "sheng": "36", 
        "di": "06", 
        "xian": "81", 
        "name": "贵溪市", 
        "level": 3
    }, 
    {
        "code": "360700", 
        "sheng": "36", 
        "di": "07", 
        "xian": "00", 
        "name": "赣州市", 
        "level": 2
    }, 
    {
        "code": "360702", 
        "sheng": "36", 
        "di": "07", 
        "xian": "02", 
        "name": "章贡区", 
        "level": 3
    }, 
    {
        "code": "360703", 
        "sheng": "36", 
        "di": "07", 
        "xian": "03", 
        "name": "南康区", 
        "level": 3
    }, 
    {
        "code": "360721", 
        "sheng": "36", 
        "di": "07", 
        "xian": "21", 
        "name": "赣县", 
        "level": 3
    }, 
    {
        "code": "360722", 
        "sheng": "36", 
        "di": "07", 
        "xian": "22", 
        "name": "信丰县", 
        "level": 3
    }, 
    {
        "code": "360723", 
        "sheng": "36", 
        "di": "07", 
        "xian": "23", 
        "name": "大余县", 
        "level": 3
    }, 
    {
        "code": "360724", 
        "sheng": "36", 
        "di": "07", 
        "xian": "24", 
        "name": "上犹县", 
        "level": 3
    }, 
    {
        "code": "360725", 
        "sheng": "36", 
        "di": "07", 
        "xian": "25", 
        "name": "崇义县", 
        "level": 3
    }, 
    {
        "code": "360726", 
        "sheng": "36", 
        "di": "07", 
        "xian": "26", 
        "name": "安远县", 
        "level": 3
    }, 
    {
        "code": "360727", 
        "sheng": "36", 
        "di": "07", 
        "xian": "27", 
        "name": "龙南县", 
        "level": 3
    }, 
    {
        "code": "360728", 
        "sheng": "36", 
        "di": "07", 
        "xian": "28", 
        "name": "定南县", 
        "level": 3
    }, 
    {
        "code": "360729", 
        "sheng": "36", 
        "di": "07", 
        "xian": "29", 
        "name": "全南县", 
        "level": 3
    }, 
    {
        "code": "360730", 
        "sheng": "36", 
        "di": "07", 
        "xian": "30", 
        "name": "宁都县", 
        "level": 3
    }, 
    {
        "code": "360731", 
        "sheng": "36", 
        "di": "07", 
        "xian": "31", 
        "name": "于都县", 
        "level": 3
    }, 
    {
        "code": "360732", 
        "sheng": "36", 
        "di": "07", 
        "xian": "32", 
        "name": "兴国县", 
        "level": 3
    }, 
    {
        "code": "360733", 
        "sheng": "36", 
        "di": "07", 
        "xian": "33", 
        "name": "会昌县", 
        "level": 3
    }, 
    {
        "code": "360734", 
        "sheng": "36", 
        "di": "07", 
        "xian": "34", 
        "name": "寻乌县", 
        "level": 3
    }, 
    {
        "code": "360735", 
        "sheng": "36", 
        "di": "07", 
        "xian": "35", 
        "name": "石城县", 
        "level": 3
    }, 
    {
        "code": "360781", 
        "sheng": "36", 
        "di": "07", 
        "xian": "81", 
        "name": "瑞金市", 
        "level": 3
    }, 
    {
        "code": "360782", 
        "sheng": "36", 
        "di": "07", 
        "xian": "82", 
        "name": "章康新区", 
        "level": 3
    }, 
    {
        "code": "360800", 
        "sheng": "36", 
        "di": "08", 
        "xian": "00", 
        "name": "吉安市", 
        "level": 2
    }, 
    {
        "code": "360802", 
        "sheng": "36", 
        "di": "08", 
        "xian": "02", 
        "name": "吉州区", 
        "level": 3
    }, 
    {
        "code": "360803", 
        "sheng": "36", 
        "di": "08", 
        "xian": "03", 
        "name": "青原区", 
        "level": 3
    }, 
    {
        "code": "360821", 
        "sheng": "36", 
        "di": "08", 
        "xian": "21", 
        "name": "吉安县", 
        "level": 3
    }, 
    {
        "code": "360822", 
        "sheng": "36", 
        "di": "08", 
        "xian": "22", 
        "name": "吉水县", 
        "level": 3
    }, 
    {
        "code": "360823", 
        "sheng": "36", 
        "di": "08", 
        "xian": "23", 
        "name": "峡江县", 
        "level": 3
    }, 
    {
        "code": "360824", 
        "sheng": "36", 
        "di": "08", 
        "xian": "24", 
        "name": "新干县", 
        "level": 3
    }, 
    {
        "code": "360825", 
        "sheng": "36", 
        "di": "08", 
        "xian": "25", 
        "name": "永丰县", 
        "level": 3
    }, 
    {
        "code": "360826", 
        "sheng": "36", 
        "di": "08", 
        "xian": "26", 
        "name": "泰和县", 
        "level": 3
    }, 
    {
        "code": "360827", 
        "sheng": "36", 
        "di": "08", 
        "xian": "27", 
        "name": "遂川县", 
        "level": 3
    }, 
    {
        "code": "360828", 
        "sheng": "36", 
        "di": "08", 
        "xian": "28", 
        "name": "万安县", 
        "level": 3
    }, 
    {
        "code": "360829", 
        "sheng": "36", 
        "di": "08", 
        "xian": "29", 
        "name": "安福县", 
        "level": 3
    }, 
    {
        "code": "360830", 
        "sheng": "36", 
        "di": "08", 
        "xian": "30", 
        "name": "永新县", 
        "level": 3
    }, 
    {
        "code": "360881", 
        "sheng": "36", 
        "di": "08", 
        "xian": "81", 
        "name": "井冈山市", 
        "level": 3
    }, 
    {
        "code": "360900", 
        "sheng": "36", 
        "di": "09", 
        "xian": "00", 
        "name": "宜春市", 
        "level": 2
    }, 
    {
        "code": "360902", 
        "sheng": "36", 
        "di": "09", 
        "xian": "02", 
        "name": "袁州区", 
        "level": 3
    }, 
    {
        "code": "360921", 
        "sheng": "36", 
        "di": "09", 
        "xian": "21", 
        "name": "奉新县", 
        "level": 3
    }, 
    {
        "code": "360922", 
        "sheng": "36", 
        "di": "09", 
        "xian": "22", 
        "name": "万载县", 
        "level": 3
    }, 
    {
        "code": "360923", 
        "sheng": "36", 
        "di": "09", 
        "xian": "23", 
        "name": "上高县", 
        "level": 3
    }, 
    {
        "code": "360924", 
        "sheng": "36", 
        "di": "09", 
        "xian": "24", 
        "name": "宜丰县", 
        "level": 3
    }, 
    {
        "code": "360925", 
        "sheng": "36", 
        "di": "09", 
        "xian": "25", 
        "name": "靖安县", 
        "level": 3
    }, 
    {
        "code": "360926", 
        "sheng": "36", 
        "di": "09", 
        "xian": "26", 
        "name": "铜鼓县", 
        "level": 3
    }, 
    {
        "code": "360981", 
        "sheng": "36", 
        "di": "09", 
        "xian": "81", 
        "name": "丰城市", 
        "level": 3
    }, 
    {
        "code": "360982", 
        "sheng": "36", 
        "di": "09", 
        "xian": "82", 
        "name": "樟树市", 
        "level": 3
    }, 
    {
        "code": "360983", 
        "sheng": "36", 
        "di": "09", 
        "xian": "83", 
        "name": "高安市", 
        "level": 3
    }, 
    {
        "code": "361000", 
        "sheng": "36", 
        "di": "10", 
        "xian": "00", 
        "name": "抚州市", 
        "level": 2
    }, 
    {
        "code": "361002", 
        "sheng": "36", 
        "di": "10", 
        "xian": "02", 
        "name": "临川区", 
        "level": 3
    }, 
    {
        "code": "361021", 
        "sheng": "36", 
        "di": "10", 
        "xian": "21", 
        "name": "南城县", 
        "level": 3
    }, 
    {
        "code": "361022", 
        "sheng": "36", 
        "di": "10", 
        "xian": "22", 
        "name": "黎川县", 
        "level": 3
    }, 
    {
        "code": "361023", 
        "sheng": "36", 
        "di": "10", 
        "xian": "23", 
        "name": "南丰县", 
        "level": 3
    }, 
    {
        "code": "361024", 
        "sheng": "36", 
        "di": "10", 
        "xian": "24", 
        "name": "崇仁县", 
        "level": 3
    }, 
    {
        "code": "361025", 
        "sheng": "36", 
        "di": "10", 
        "xian": "25", 
        "name": "乐安县", 
        "level": 3
    }, 
    {
        "code": "361026", 
        "sheng": "36", 
        "di": "10", 
        "xian": "26", 
        "name": "宜黄县", 
        "level": 3
    }, 
    {
        "code": "361027", 
        "sheng": "36", 
        "di": "10", 
        "xian": "27", 
        "name": "金溪县", 
        "level": 3
    }, 
    {
        "code": "361028", 
        "sheng": "36", 
        "di": "10", 
        "xian": "28", 
        "name": "资溪县", 
        "level": 3
    }, 
    {
        "code": "361029", 
        "sheng": "36", 
        "di": "10", 
        "xian": "29", 
        "name": "东乡县", 
        "level": 3
    }, 
    {
        "code": "361030", 
        "sheng": "36", 
        "di": "10", 
        "xian": "30", 
        "name": "广昌县", 
        "level": 3
    }, 
    {
        "code": "361100", 
        "sheng": "36", 
        "di": "11", 
        "xian": "00", 
        "name": "上饶市", 
        "level": 2
    }, 
    {
        "code": "361102", 
        "sheng": "36", 
        "di": "11", 
        "xian": "02", 
        "name": "信州区", 
        "level": 3
    }, 
    {
        "code": "361103", 
        "sheng": "36", 
        "di": "11", 
        "xian": "03", 
        "name": "广丰区", 
        "level": 3
    }, 
    {
        "code": "361121", 
        "sheng": "36", 
        "di": "11", 
        "xian": "21", 
        "name": "上饶县", 
        "level": 3
    }, 
    {
        "code": "361123", 
        "sheng": "36", 
        "di": "11", 
        "xian": "23", 
        "name": "玉山县", 
        "level": 3
    }, 
    {
        "code": "361124", 
        "sheng": "36", 
        "di": "11", 
        "xian": "24", 
        "name": "铅山县", 
        "level": 3
    }, 
    {
        "code": "361125", 
        "sheng": "36", 
        "di": "11", 
        "xian": "25", 
        "name": "横峰县", 
        "level": 3
    }, 
    {
        "code": "361126", 
        "sheng": "36", 
        "di": "11", 
        "xian": "26", 
        "name": "弋阳县", 
        "level": 3
    }, 
    {
        "code": "361127", 
        "sheng": "36", 
        "di": "11", 
        "xian": "27", 
        "name": "余干县", 
        "level": 3
    }, 
    {
        "code": "361128", 
        "sheng": "36", 
        "di": "11", 
        "xian": "28", 
        "name": "鄱阳县", 
        "level": 3
    }, 
    {
        "code": "361129", 
        "sheng": "36", 
        "di": "11", 
        "xian": "29", 
        "name": "万年县", 
        "level": 3
    }, 
    {
        "code": "361130", 
        "sheng": "36", 
        "di": "11", 
        "xian": "30", 
        "name": "婺源县", 
        "level": 3
    }, 
    {
        "code": "361181", 
        "sheng": "36", 
        "di": "11", 
        "xian": "81", 
        "name": "德兴市", 
        "level": 3
    }, 
    {
        "code": "370000", 
        "sheng": "37", 
        "di": "00", 
        "xian": "00", 
        "name": "山东省", 
        "level": 1
    }, 
    {
        "code": "370100", 
        "sheng": "37", 
        "di": "01", 
        "xian": "00", 
        "name": "济南市", 
        "level": 2
    }, 
    {
        "code": "370102", 
        "sheng": "37", 
        "di": "01", 
        "xian": "02", 
        "name": "历下区", 
        "level": 3
    }, 
    {
        "code": "370103", 
        "sheng": "37", 
        "di": "01", 
        "xian": "03", 
        "name": "市中区", 
        "level": 3
    }, 
    {
        "code": "370104", 
        "sheng": "37", 
        "di": "01", 
        "xian": "04", 
        "name": "槐荫区", 
        "level": 3
    }, 
    {
        "code": "370105", 
        "sheng": "37", 
        "di": "01", 
        "xian": "05", 
        "name": "天桥区", 
        "level": 3
    }, 
    {
        "code": "370112", 
        "sheng": "37", 
        "di": "01", 
        "xian": "12", 
        "name": "历城区", 
        "level": 3
    }, 
    {
        "code": "370113", 
        "sheng": "37", 
        "di": "01", 
        "xian": "13", 
        "name": "长清区", 
        "level": 3
    }, 
    {
        "code": "370124", 
        "sheng": "37", 
        "di": "01", 
        "xian": "24", 
        "name": "平阴县", 
        "level": 3
    }, 
    {
        "code": "370125", 
        "sheng": "37", 
        "di": "01", 
        "xian": "25", 
        "name": "济阳县", 
        "level": 3
    }, 
    {
        "code": "370126", 
        "sheng": "37", 
        "di": "01", 
        "xian": "26", 
        "name": "商河县", 
        "level": 3
    }, 
    {
        "code": "370181", 
        "sheng": "37", 
        "di": "01", 
        "xian": "81", 
        "name": "章丘市", 
        "level": 3
    }, 
    {
        "code": "370182", 
        "sheng": "37", 
        "di": "01", 
        "xian": "82", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "370200", 
        "sheng": "37", 
        "di": "02", 
        "xian": "00", 
        "name": "青岛市", 
        "level": 2
    }, 
    {
        "code": "370202", 
        "sheng": "37", 
        "di": "02", 
        "xian": "02", 
        "name": "市南区", 
        "level": 3
    }, 
    {
        "code": "370203", 
        "sheng": "37", 
        "di": "02", 
        "xian": "03", 
        "name": "市北区", 
        "level": 3
    }, 
    {
        "code": "370211", 
        "sheng": "37", 
        "di": "02", 
        "xian": "11", 
        "name": "黄岛区", 
        "level": 3
    }, 
    {
        "code": "370212", 
        "sheng": "37", 
        "di": "02", 
        "xian": "12", 
        "name": "崂山区", 
        "level": 3
    }, 
    {
        "code": "370213", 
        "sheng": "37", 
        "di": "02", 
        "xian": "13", 
        "name": "李沧区", 
        "level": 3
    }, 
    {
        "code": "370214", 
        "sheng": "37", 
        "di": "02", 
        "xian": "14", 
        "name": "城阳区", 
        "level": 3
    }, 
    {
        "code": "370281", 
        "sheng": "37", 
        "di": "02", 
        "xian": "81", 
        "name": "胶州市", 
        "level": 3
    }, 
    {
        "code": "370282", 
        "sheng": "37", 
        "di": "02", 
        "xian": "82", 
        "name": "即墨市", 
        "level": 3
    }, 
    {
        "code": "370283", 
        "sheng": "37", 
        "di": "02", 
        "xian": "83", 
        "name": "平度市", 
        "level": 3
    }, 
    {
        "code": "370285", 
        "sheng": "37", 
        "di": "02", 
        "xian": "85", 
        "name": "莱西市", 
        "level": 3
    }, 
    {
        "code": "370286", 
        "sheng": "37", 
        "di": "02", 
        "xian": "86", 
        "name": "西海岸新区", 
        "level": 3
    }, 
    {
        "code": "370287", 
        "sheng": "37", 
        "di": "02", 
        "xian": "87", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "370300", 
        "sheng": "37", 
        "di": "03", 
        "xian": "00", 
        "name": "淄博市", 
        "level": 2
    }, 
    {
        "code": "370302", 
        "sheng": "37", 
        "di": "03", 
        "xian": "02", 
        "name": "淄川区", 
        "level": 3
    }, 
    {
        "code": "370303", 
        "sheng": "37", 
        "di": "03", 
        "xian": "03", 
        "name": "张店区", 
        "level": 3
    }, 
    {
        "code": "370304", 
        "sheng": "37", 
        "di": "03", 
        "xian": "04", 
        "name": "博山区", 
        "level": 3
    }, 
    {
        "code": "370305", 
        "sheng": "37", 
        "di": "03", 
        "xian": "05", 
        "name": "临淄区", 
        "level": 3
    }, 
    {
        "code": "370306", 
        "sheng": "37", 
        "di": "03", 
        "xian": "06", 
        "name": "周村区", 
        "level": 3
    }, 
    {
        "code": "370321", 
        "sheng": "37", 
        "di": "03", 
        "xian": "21", 
        "name": "桓台县", 
        "level": 3
    }, 
    {
        "code": "370322", 
        "sheng": "37", 
        "di": "03", 
        "xian": "22", 
        "name": "高青县", 
        "level": 3
    }, 
    {
        "code": "370323", 
        "sheng": "37", 
        "di": "03", 
        "xian": "23", 
        "name": "沂源县", 
        "level": 3
    }, 
    {
        "code": "370324", 
        "sheng": "37", 
        "di": "03", 
        "xian": "24", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "370400", 
        "sheng": "37", 
        "di": "04", 
        "xian": "00", 
        "name": "枣庄市", 
        "level": 2
    }, 
    {
        "code": "370402", 
        "sheng": "37", 
        "di": "04", 
        "xian": "02", 
        "name": "市中区", 
        "level": 3
    }, 
    {
        "code": "370403", 
        "sheng": "37", 
        "di": "04", 
        "xian": "03", 
        "name": "薛城区", 
        "level": 3
    }, 
    {
        "code": "370404", 
        "sheng": "37", 
        "di": "04", 
        "xian": "04", 
        "name": "峄城区", 
        "level": 3
    }, 
    {
        "code": "370405", 
        "sheng": "37", 
        "di": "04", 
        "xian": "05", 
        "name": "台儿庄区", 
        "level": 3
    }, 
    {
        "code": "370406", 
        "sheng": "37", 
        "di": "04", 
        "xian": "06", 
        "name": "山亭区", 
        "level": 3
    }, 
    {
        "code": "370481", 
        "sheng": "37", 
        "di": "04", 
        "xian": "81", 
        "name": "滕州市", 
        "level": 3
    }, 
    {
        "code": "370482", 
        "sheng": "37", 
        "di": "04", 
        "xian": "82", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "370500", 
        "sheng": "37", 
        "di": "05", 
        "xian": "00", 
        "name": "东营市", 
        "level": 2
    }, 
    {
        "code": "370502", 
        "sheng": "37", 
        "di": "05", 
        "xian": "02", 
        "name": "东营区", 
        "level": 3
    }, 
    {
        "code": "370503", 
        "sheng": "37", 
        "di": "05", 
        "xian": "03", 
        "name": "河口区", 
        "level": 3
    }, 
    {
        "code": "370505", 
        "sheng": "37", 
        "di": "05", 
        "xian": "05", 
        "name": "垦利区", 
        "level": 3
    }, 
    {
        "code": "370522", 
        "sheng": "37", 
        "di": "05", 
        "xian": "22", 
        "name": "利津县", 
        "level": 3
    }, 
    {
        "code": "370523", 
        "sheng": "37", 
        "di": "05", 
        "xian": "23", 
        "name": "广饶县", 
        "level": 3
    }, 
    {
        "code": "370600", 
        "sheng": "37", 
        "di": "06", 
        "xian": "00", 
        "name": "烟台市", 
        "level": 2
    }, 
    {
        "code": "370602", 
        "sheng": "37", 
        "di": "06", 
        "xian": "02", 
        "name": "芝罘区", 
        "level": 3
    }, 
    {
        "code": "370611", 
        "sheng": "37", 
        "di": "06", 
        "xian": "11", 
        "name": "福山区", 
        "level": 3
    }, 
    {
        "code": "370612", 
        "sheng": "37", 
        "di": "06", 
        "xian": "12", 
        "name": "牟平区", 
        "level": 3
    }, 
    {
        "code": "370613", 
        "sheng": "37", 
        "di": "06", 
        "xian": "13", 
        "name": "莱山区", 
        "level": 3
    }, 
    {
        "code": "370634", 
        "sheng": "37", 
        "di": "06", 
        "xian": "34", 
        "name": "长岛县", 
        "level": 3
    }, 
    {
        "code": "370681", 
        "sheng": "37", 
        "di": "06", 
        "xian": "81", 
        "name": "龙口市", 
        "level": 3
    }, 
    {
        "code": "370682", 
        "sheng": "37", 
        "di": "06", 
        "xian": "82", 
        "name": "莱阳市", 
        "level": 3
    }, 
    {
        "code": "370683", 
        "sheng": "37", 
        "di": "06", 
        "xian": "83", 
        "name": "莱州市", 
        "level": 3
    }, 
    {
        "code": "370684", 
        "sheng": "37", 
        "di": "06", 
        "xian": "84", 
        "name": "蓬莱市", 
        "level": 3
    }, 
    {
        "code": "370685", 
        "sheng": "37", 
        "di": "06", 
        "xian": "85", 
        "name": "招远市", 
        "level": 3
    }, 
    {
        "code": "370686", 
        "sheng": "37", 
        "di": "06", 
        "xian": "86", 
        "name": "栖霞市", 
        "level": 3
    }, 
    {
        "code": "370687", 
        "sheng": "37", 
        "di": "06", 
        "xian": "87", 
        "name": "海阳市", 
        "level": 3
    }, 
    {
        "code": "370688", 
        "sheng": "37", 
        "di": "06", 
        "xian": "88", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "370689", 
        "sheng": "37", 
        "di": "06", 
        "xian": "89", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "370700", 
        "sheng": "37", 
        "di": "07", 
        "xian": "00", 
        "name": "潍坊市", 
        "level": 2
    }, 
    {
        "code": "370702", 
        "sheng": "37", 
        "di": "07", 
        "xian": "02", 
        "name": "潍城区", 
        "level": 3
    }, 
    {
        "code": "370703", 
        "sheng": "37", 
        "di": "07", 
        "xian": "03", 
        "name": "寒亭区", 
        "level": 3
    }, 
    {
        "code": "370704", 
        "sheng": "37", 
        "di": "07", 
        "xian": "04", 
        "name": "坊子区", 
        "level": 3
    }, 
    {
        "code": "370705", 
        "sheng": "37", 
        "di": "07", 
        "xian": "05", 
        "name": "奎文区", 
        "level": 3
    }, 
    {
        "code": "370724", 
        "sheng": "37", 
        "di": "07", 
        "xian": "24", 
        "name": "临朐县", 
        "level": 3
    }, 
    {
        "code": "370725", 
        "sheng": "37", 
        "di": "07", 
        "xian": "25", 
        "name": "昌乐县", 
        "level": 3
    }, 
    {
        "code": "370781", 
        "sheng": "37", 
        "di": "07", 
        "xian": "81", 
        "name": "青州市", 
        "level": 3
    }, 
    {
        "code": "370782", 
        "sheng": "37", 
        "di": "07", 
        "xian": "82", 
        "name": "诸城市", 
        "level": 3
    }, 
    {
        "code": "370783", 
        "sheng": "37", 
        "di": "07", 
        "xian": "83", 
        "name": "寿光市", 
        "level": 3
    }, 
    {
        "code": "370784", 
        "sheng": "37", 
        "di": "07", 
        "xian": "84", 
        "name": "安丘市", 
        "level": 3
    }, 
    {
        "code": "370785", 
        "sheng": "37", 
        "di": "07", 
        "xian": "85", 
        "name": "高密市", 
        "level": 3
    }, 
    {
        "code": "370786", 
        "sheng": "37", 
        "di": "07", 
        "xian": "86", 
        "name": "昌邑市", 
        "level": 3
    }, 
    {
        "code": "370787", 
        "sheng": "37", 
        "di": "07", 
        "xian": "87", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "370800", 
        "sheng": "37", 
        "di": "08", 
        "xian": "00", 
        "name": "济宁市", 
        "level": 2
    }, 
    {
        "code": "370811", 
        "sheng": "37", 
        "di": "08", 
        "xian": "11", 
        "name": "任城区", 
        "level": 3
    }, 
    {
        "code": "370812", 
        "sheng": "37", 
        "di": "08", 
        "xian": "12", 
        "name": "兖州区", 
        "level": 3
    }, 
    {
        "code": "370826", 
        "sheng": "37", 
        "di": "08", 
        "xian": "26", 
        "name": "微山县", 
        "level": 3
    }, 
    {
        "code": "370827", 
        "sheng": "37", 
        "di": "08", 
        "xian": "27", 
        "name": "鱼台县", 
        "level": 3
    }, 
    {
        "code": "370828", 
        "sheng": "37", 
        "di": "08", 
        "xian": "28", 
        "name": "金乡县", 
        "level": 3
    }, 
    {
        "code": "370829", 
        "sheng": "37", 
        "di": "08", 
        "xian": "29", 
        "name": "嘉祥县", 
        "level": 3
    }, 
    {
        "code": "370830", 
        "sheng": "37", 
        "di": "08", 
        "xian": "30", 
        "name": "汶上县", 
        "level": 3
    }, 
    {
        "code": "370831", 
        "sheng": "37", 
        "di": "08", 
        "xian": "31", 
        "name": "泗水县", 
        "level": 3
    }, 
    {
        "code": "370832", 
        "sheng": "37", 
        "di": "08", 
        "xian": "32", 
        "name": "梁山县", 
        "level": 3
    }, 
    {
        "code": "370881", 
        "sheng": "37", 
        "di": "08", 
        "xian": "81", 
        "name": "曲阜市", 
        "level": 3
    }, 
    {
        "code": "370883", 
        "sheng": "37", 
        "di": "08", 
        "xian": "83", 
        "name": "邹城市", 
        "level": 3
    }, 
    {
        "code": "370884", 
        "sheng": "37", 
        "di": "08", 
        "xian": "84", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "370900", 
        "sheng": "37", 
        "di": "09", 
        "xian": "00", 
        "name": "泰安市", 
        "level": 2
    }, 
    {
        "code": "370902", 
        "sheng": "37", 
        "di": "09", 
        "xian": "02", 
        "name": "泰山区", 
        "level": 3
    }, 
    {
        "code": "370911", 
        "sheng": "37", 
        "di": "09", 
        "xian": "11", 
        "name": "岱岳区", 
        "level": 3
    }, 
    {
        "code": "370921", 
        "sheng": "37", 
        "di": "09", 
        "xian": "21", 
        "name": "宁阳县", 
        "level": 3
    }, 
    {
        "code": "370923", 
        "sheng": "37", 
        "di": "09", 
        "xian": "23", 
        "name": "东平县", 
        "level": 3
    }, 
    {
        "code": "370982", 
        "sheng": "37", 
        "di": "09", 
        "xian": "82", 
        "name": "新泰市", 
        "level": 3
    }, 
    {
        "code": "370983", 
        "sheng": "37", 
        "di": "09", 
        "xian": "83", 
        "name": "肥城市", 
        "level": 3
    }, 
    {
        "code": "371000", 
        "sheng": "37", 
        "di": "10", 
        "xian": "00", 
        "name": "威海市", 
        "level": 2
    }, 
    {
        "code": "371002", 
        "sheng": "37", 
        "di": "10", 
        "xian": "02", 
        "name": "环翠区", 
        "level": 3
    }, 
    {
        "code": "371003", 
        "sheng": "37", 
        "di": "10", 
        "xian": "03", 
        "name": "文登区", 
        "level": 3
    }, 
    {
        "code": "371082", 
        "sheng": "37", 
        "di": "10", 
        "xian": "82", 
        "name": "荣成市", 
        "level": 3
    }, 
    {
        "code": "371083", 
        "sheng": "37", 
        "di": "10", 
        "xian": "83", 
        "name": "乳山市", 
        "level": 3
    }, 
    {
        "code": "371100", 
        "sheng": "37", 
        "di": "11", 
        "xian": "00", 
        "name": "日照市", 
        "level": 2
    }, 
    {
        "code": "371102", 
        "sheng": "37", 
        "di": "11", 
        "xian": "02", 
        "name": "东港区", 
        "level": 3
    }, 
    {
        "code": "371103", 
        "sheng": "37", 
        "di": "11", 
        "xian": "03", 
        "name": "岚山区", 
        "level": 3
    }, 
    {
        "code": "371121", 
        "sheng": "37", 
        "di": "11", 
        "xian": "21", 
        "name": "五莲县", 
        "level": 3
    }, 
    {
        "code": "371122", 
        "sheng": "37", 
        "di": "11", 
        "xian": "22", 
        "name": "莒县", 
        "level": 3
    }, 
    {
        "code": "371200", 
        "sheng": "37", 
        "di": "12", 
        "xian": "00", 
        "name": "莱芜市", 
        "level": 2
    }, 
    {
        "code": "371202", 
        "sheng": "37", 
        "di": "12", 
        "xian": "02", 
        "name": "莱城区", 
        "level": 3
    }, 
    {
        "code": "371203", 
        "sheng": "37", 
        "di": "12", 
        "xian": "03", 
        "name": "钢城区", 
        "level": 3
    }, 
    {
        "code": "371300", 
        "sheng": "37", 
        "di": "13", 
        "xian": "00", 
        "name": "临沂市", 
        "level": 2
    }, 
    {
        "code": "371302", 
        "sheng": "37", 
        "di": "13", 
        "xian": "02", 
        "name": "兰山区", 
        "level": 3
    }, 
    {
        "code": "371311", 
        "sheng": "37", 
        "di": "13", 
        "xian": "11", 
        "name": "罗庄区", 
        "level": 3
    }, 
    {
        "code": "371312", 
        "sheng": "37", 
        "di": "13", 
        "xian": "12", 
        "name": "河东区", 
        "level": 3
    }, 
    {
        "code": "371321", 
        "sheng": "37", 
        "di": "13", 
        "xian": "21", 
        "name": "沂南县", 
        "level": 3
    }, 
    {
        "code": "371322", 
        "sheng": "37", 
        "di": "13", 
        "xian": "22", 
        "name": "郯城县", 
        "level": 3
    }, 
    {
        "code": "371323", 
        "sheng": "37", 
        "di": "13", 
        "xian": "23", 
        "name": "沂水县", 
        "level": 3
    }, 
    {
        "code": "371324", 
        "sheng": "37", 
        "di": "13", 
        "xian": "24", 
        "name": "兰陵县", 
        "level": 3
    }, 
    {
        "code": "371325", 
        "sheng": "37", 
        "di": "13", 
        "xian": "25", 
        "name": "费县", 
        "level": 3
    }, 
    {
        "code": "371326", 
        "sheng": "37", 
        "di": "13", 
        "xian": "26", 
        "name": "平邑县", 
        "level": 3
    }, 
    {
        "code": "371327", 
        "sheng": "37", 
        "di": "13", 
        "xian": "27", 
        "name": "莒南县", 
        "level": 3
    }, 
    {
        "code": "371328", 
        "sheng": "37", 
        "di": "13", 
        "xian": "28", 
        "name": "蒙阴县", 
        "level": 3
    }, 
    {
        "code": "371329", 
        "sheng": "37", 
        "di": "13", 
        "xian": "29", 
        "name": "临沭县", 
        "level": 3
    }, 
    {
        "code": "371400", 
        "sheng": "37", 
        "di": "14", 
        "xian": "00", 
        "name": "德州市", 
        "level": 2
    }, 
    {
        "code": "371402", 
        "sheng": "37", 
        "di": "14", 
        "xian": "02", 
        "name": "德城区", 
        "level": 3
    }, 
    {
        "code": "371403", 
        "sheng": "37", 
        "di": "14", 
        "xian": "03", 
        "name": "陵城区", 
        "level": 3
    }, 
    {
        "code": "371422", 
        "sheng": "37", 
        "di": "14", 
        "xian": "22", 
        "name": "宁津县", 
        "level": 3
    }, 
    {
        "code": "371423", 
        "sheng": "37", 
        "di": "14", 
        "xian": "23", 
        "name": "庆云县", 
        "level": 3
    }, 
    {
        "code": "371424", 
        "sheng": "37", 
        "di": "14", 
        "xian": "24", 
        "name": "临邑县", 
        "level": 3
    }, 
    {
        "code": "371425", 
        "sheng": "37", 
        "di": "14", 
        "xian": "25", 
        "name": "齐河县", 
        "level": 3
    }, 
    {
        "code": "371426", 
        "sheng": "37", 
        "di": "14", 
        "xian": "26", 
        "name": "平原县", 
        "level": 3
    }, 
    {
        "code": "371427", 
        "sheng": "37", 
        "di": "14", 
        "xian": "27", 
        "name": "夏津县", 
        "level": 3
    }, 
    {
        "code": "371428", 
        "sheng": "37", 
        "di": "14", 
        "xian": "28", 
        "name": "武城县", 
        "level": 3
    }, 
    {
        "code": "371481", 
        "sheng": "37", 
        "di": "14", 
        "xian": "81", 
        "name": "乐陵市", 
        "level": 3
    }, 
    {
        "code": "371482", 
        "sheng": "37", 
        "di": "14", 
        "xian": "82", 
        "name": "禹城市", 
        "level": 3
    }, 
    {
        "code": "371500", 
        "sheng": "37", 
        "di": "15", 
        "xian": "00", 
        "name": "聊城市", 
        "level": 2
    }, 
    {
        "code": "371502", 
        "sheng": "37", 
        "di": "15", 
        "xian": "02", 
        "name": "东昌府区", 
        "level": 3
    }, 
    {
        "code": "371521", 
        "sheng": "37", 
        "di": "15", 
        "xian": "21", 
        "name": "阳谷县", 
        "level": 3
    }, 
    {
        "code": "371522", 
        "sheng": "37", 
        "di": "15", 
        "xian": "22", 
        "name": "莘县", 
        "level": 3
    }, 
    {
        "code": "371523", 
        "sheng": "37", 
        "di": "15", 
        "xian": "23", 
        "name": "茌平县", 
        "level": 3
    }, 
    {
        "code": "371524", 
        "sheng": "37", 
        "di": "15", 
        "xian": "24", 
        "name": "东阿县", 
        "level": 3
    }, 
    {
        "code": "371525", 
        "sheng": "37", 
        "di": "15", 
        "xian": "25", 
        "name": "冠县", 
        "level": 3
    }, 
    {
        "code": "371526", 
        "sheng": "37", 
        "di": "15", 
        "xian": "26", 
        "name": "高唐县", 
        "level": 3
    }, 
    {
        "code": "371581", 
        "sheng": "37", 
        "di": "15", 
        "xian": "81", 
        "name": "临清市", 
        "level": 3
    }, 
    {
        "code": "371600", 
        "sheng": "37", 
        "di": "16", 
        "xian": "00", 
        "name": "滨州市", 
        "level": 2
    }, 
    {
        "code": "371602", 
        "sheng": "37", 
        "di": "16", 
        "xian": "02", 
        "name": "滨城区", 
        "level": 3
    }, 
    {
        "code": "371603", 
        "sheng": "37", 
        "di": "16", 
        "xian": "03", 
        "name": "沾化区", 
        "level": 3
    }, 
    {
        "code": "371621", 
        "sheng": "37", 
        "di": "16", 
        "xian": "21", 
        "name": "惠民县", 
        "level": 3
    }, 
    {
        "code": "371622", 
        "sheng": "37", 
        "di": "16", 
        "xian": "22", 
        "name": "阳信县", 
        "level": 3
    }, 
    {
        "code": "371623", 
        "sheng": "37", 
        "di": "16", 
        "xian": "23", 
        "name": "无棣县", 
        "level": 3
    }, 
    {
        "code": "371625", 
        "sheng": "37", 
        "di": "16", 
        "xian": "25", 
        "name": "博兴县", 
        "level": 3
    }, 
    {
        "code": "371626", 
        "sheng": "37", 
        "di": "16", 
        "xian": "26", 
        "name": "邹平县", 
        "level": 3
    }, 
    {
        "code": "371627", 
        "sheng": "37", 
        "di": "16", 
        "xian": "27", 
        "name": "北海新区", 
        "level": 3
    }, 
    {
        "code": "371700", 
        "sheng": "37", 
        "di": "17", 
        "xian": "00", 
        "name": "菏泽市", 
        "level": 2
    }, 
    {
        "code": "371702", 
        "sheng": "37", 
        "di": "17", 
        "xian": "02", 
        "name": "牡丹区", 
        "level": 3
    }, 
    {
        "code": "371703", 
        "sheng": "37", 
        "di": "17", 
        "xian": "03", 
        "name": "定陶区", 
        "level": 3
    }, 
    {
        "code": "371721", 
        "sheng": "37", 
        "di": "17", 
        "xian": "21", 
        "name": "曹县", 
        "level": 3
    }, 
    {
        "code": "371722", 
        "sheng": "37", 
        "di": "17", 
        "xian": "22", 
        "name": "单县", 
        "level": 3
    }, 
    {
        "code": "371723", 
        "sheng": "37", 
        "di": "17", 
        "xian": "23", 
        "name": "成武县", 
        "level": 3
    }, 
    {
        "code": "371724", 
        "sheng": "37", 
        "di": "17", 
        "xian": "24", 
        "name": "巨野县", 
        "level": 3
    }, 
    {
        "code": "371725", 
        "sheng": "37", 
        "di": "17", 
        "xian": "25", 
        "name": "郓城县", 
        "level": 3
    }, 
    {
        "code": "371726", 
        "sheng": "37", 
        "di": "17", 
        "xian": "26", 
        "name": "鄄城县", 
        "level": 3
    }, 
    {
        "code": "371728", 
        "sheng": "37", 
        "di": "17", 
        "xian": "28", 
        "name": "东明县", 
        "level": 3
    }, 
    {
        "code": "410000", 
        "sheng": "41", 
        "di": "00", 
        "xian": "00", 
        "name": "河南省", 
        "level": 1
    }, 
    {
        "code": "410100", 
        "sheng": "41", 
        "di": "01", 
        "xian": "00", 
        "name": "郑州市", 
        "level": 2
    }, 
    {
        "code": "410102", 
        "sheng": "41", 
        "di": "01", 
        "xian": "02", 
        "name": "中原区", 
        "level": 3
    }, 
    {
        "code": "410103", 
        "sheng": "41", 
        "di": "01", 
        "xian": "03", 
        "name": "二七区", 
        "level": 3
    }, 
    {
        "code": "410104", 
        "sheng": "41", 
        "di": "01", 
        "xian": "04", 
        "name": "管城回族区", 
        "level": 3
    }, 
    {
        "code": "410105", 
        "sheng": "41", 
        "di": "01", 
        "xian": "05", 
        "name": "金水区", 
        "level": 3
    }, 
    {
        "code": "410106", 
        "sheng": "41", 
        "di": "01", 
        "xian": "06", 
        "name": "上街区", 
        "level": 3
    }, 
    {
        "code": "410108", 
        "sheng": "41", 
        "di": "01", 
        "xian": "08", 
        "name": "惠济区", 
        "level": 3
    }, 
    {
        "code": "410122", 
        "sheng": "41", 
        "di": "01", 
        "xian": "22", 
        "name": "中牟县", 
        "level": 3
    }, 
    {
        "code": "410181", 
        "sheng": "41", 
        "di": "01", 
        "xian": "81", 
        "name": "巩义市", 
        "level": 3
    }, 
    {
        "code": "410182", 
        "sheng": "41", 
        "di": "01", 
        "xian": "82", 
        "name": "荥阳市", 
        "level": 3
    }, 
    {
        "code": "410183", 
        "sheng": "41", 
        "di": "01", 
        "xian": "83", 
        "name": "新密市", 
        "level": 3
    }, 
    {
        "code": "410184", 
        "sheng": "41", 
        "di": "01", 
        "xian": "84", 
        "name": "新郑市", 
        "level": 3
    }, 
    {
        "code": "410185", 
        "sheng": "41", 
        "di": "01", 
        "xian": "85", 
        "name": "登封市", 
        "level": 3
    }, 
    {
        "code": "410186", 
        "sheng": "41", 
        "di": "01", 
        "xian": "86", 
        "name": "郑东新区", 
        "level": 3
    }, 
    {
        "code": "410187", 
        "sheng": "41", 
        "di": "01", 
        "xian": "87", 
        "name": "郑汴新区", 
        "level": 3
    }, 
    {
        "code": "410188", 
        "sheng": "41", 
        "di": "01", 
        "xian": "88", 
        "name": "高新开发区", 
        "level": 3
    }, 
    {
        "code": "410189", 
        "sheng": "41", 
        "di": "01", 
        "xian": "89", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "410200", 
        "sheng": "41", 
        "di": "02", 
        "xian": "00", 
        "name": "开封市", 
        "level": 2
    }, 
    {
        "code": "410202", 
        "sheng": "41", 
        "di": "02", 
        "xian": "02", 
        "name": "龙亭区", 
        "level": 3
    }, 
    {
        "code": "410203", 
        "sheng": "41", 
        "di": "02", 
        "xian": "03", 
        "name": "顺河回族区", 
        "level": 3
    }, 
    {
        "code": "410204", 
        "sheng": "41", 
        "di": "02", 
        "xian": "04", 
        "name": "鼓楼区", 
        "level": 3
    }, 
    {
        "code": "410205", 
        "sheng": "41", 
        "di": "02", 
        "xian": "05", 
        "name": "禹王台区", 
        "level": 3
    }, 
    {
        "code": "410212", 
        "sheng": "41", 
        "di": "02", 
        "xian": "12", 
        "name": "祥符区", 
        "level": 3
    }, 
    {
        "code": "410221", 
        "sheng": "41", 
        "di": "02", 
        "xian": "21", 
        "name": "杞县", 
        "level": 3
    }, 
    {
        "code": "410222", 
        "sheng": "41", 
        "di": "02", 
        "xian": "22", 
        "name": "通许县", 
        "level": 3
    }, 
    {
        "code": "410223", 
        "sheng": "41", 
        "di": "02", 
        "xian": "23", 
        "name": "尉氏县", 
        "level": 3
    }, 
    {
        "code": "410225", 
        "sheng": "41", 
        "di": "02", 
        "xian": "25", 
        "name": "兰考县", 
        "level": 3
    }, 
    {
        "code": "410226", 
        "sheng": "41", 
        "di": "02", 
        "xian": "26", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "410300", 
        "sheng": "41", 
        "di": "03", 
        "xian": "00", 
        "name": "洛阳市", 
        "level": 2
    }, 
    {
        "code": "410302", 
        "sheng": "41", 
        "di": "03", 
        "xian": "02", 
        "name": "老城区", 
        "level": 3
    }, 
    {
        "code": "410303", 
        "sheng": "41", 
        "di": "03", 
        "xian": "03", 
        "name": "西工区", 
        "level": 3
    }, 
    {
        "code": "410304", 
        "sheng": "41", 
        "di": "03", 
        "xian": "04", 
        "name": "瀍河回族区", 
        "level": 3
    }, 
    {
        "code": "410305", 
        "sheng": "41", 
        "di": "03", 
        "xian": "05", 
        "name": "涧西区", 
        "level": 3
    }, 
    {
        "code": "410306", 
        "sheng": "41", 
        "di": "03", 
        "xian": "06", 
        "name": "吉利区", 
        "level": 3
    }, 
    {
        "code": "410311", 
        "sheng": "41", 
        "di": "03", 
        "xian": "11", 
        "name": "洛龙区", 
        "level": 3
    }, 
    {
        "code": "410322", 
        "sheng": "41", 
        "di": "03", 
        "xian": "22", 
        "name": "孟津县", 
        "level": 3
    }, 
    {
        "code": "410323", 
        "sheng": "41", 
        "di": "03", 
        "xian": "23", 
        "name": "新安县", 
        "level": 3
    }, 
    {
        "code": "410324", 
        "sheng": "41", 
        "di": "03", 
        "xian": "24", 
        "name": "栾川县", 
        "level": 3
    }, 
    {
        "code": "410325", 
        "sheng": "41", 
        "di": "03", 
        "xian": "25", 
        "name": "嵩县", 
        "level": 3
    }, 
    {
        "code": "410326", 
        "sheng": "41", 
        "di": "03", 
        "xian": "26", 
        "name": "汝阳县", 
        "level": 3
    }, 
    {
        "code": "410327", 
        "sheng": "41", 
        "di": "03", 
        "xian": "27", 
        "name": "宜阳县", 
        "level": 3
    }, 
    {
        "code": "410328", 
        "sheng": "41", 
        "di": "03", 
        "xian": "28", 
        "name": "洛宁县", 
        "level": 3
    }, 
    {
        "code": "410329", 
        "sheng": "41", 
        "di": "03", 
        "xian": "29", 
        "name": "伊川县", 
        "level": 3
    }, 
    {
        "code": "410381", 
        "sheng": "41", 
        "di": "03", 
        "xian": "81", 
        "name": "偃师市", 
        "level": 3
    }, 
    {
        "code": "410382", 
        "sheng": "41", 
        "di": "03", 
        "xian": "82", 
        "name": "洛阳新区", 
        "level": 3
    }, 
    {
        "code": "410383", 
        "sheng": "41", 
        "di": "03", 
        "xian": "83", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "410400", 
        "sheng": "41", 
        "di": "04", 
        "xian": "00", 
        "name": "平顶山市", 
        "level": 2
    }, 
    {
        "code": "410402", 
        "sheng": "41", 
        "di": "04", 
        "xian": "02", 
        "name": "新华区", 
        "level": 3
    }, 
    {
        "code": "410403", 
        "sheng": "41", 
        "di": "04", 
        "xian": "03", 
        "name": "卫东区", 
        "level": 3
    }, 
    {
        "code": "410404", 
        "sheng": "41", 
        "di": "04", 
        "xian": "04", 
        "name": "石龙区", 
        "level": 3
    }, 
    {
        "code": "410411", 
        "sheng": "41", 
        "di": "04", 
        "xian": "11", 
        "name": "湛河区", 
        "level": 3
    }, 
    {
        "code": "410421", 
        "sheng": "41", 
        "di": "04", 
        "xian": "21", 
        "name": "宝丰县", 
        "level": 3
    }, 
    {
        "code": "410422", 
        "sheng": "41", 
        "di": "04", 
        "xian": "22", 
        "name": "叶县", 
        "level": 3
    }, 
    {
        "code": "410423", 
        "sheng": "41", 
        "di": "04", 
        "xian": "23", 
        "name": "鲁山县", 
        "level": 3
    }, 
    {
        "code": "410425", 
        "sheng": "41", 
        "di": "04", 
        "xian": "25", 
        "name": "郏县", 
        "level": 3
    }, 
    {
        "code": "410481", 
        "sheng": "41", 
        "di": "04", 
        "xian": "81", 
        "name": "舞钢市", 
        "level": 3
    }, 
    {
        "code": "410482", 
        "sheng": "41", 
        "di": "04", 
        "xian": "82", 
        "name": "汝州市", 
        "level": 3
    }, 
    {
        "code": "410500", 
        "sheng": "41", 
        "di": "05", 
        "xian": "00", 
        "name": "安阳市", 
        "level": 2
    }, 
    {
        "code": "410502", 
        "sheng": "41", 
        "di": "05", 
        "xian": "02", 
        "name": "文峰区", 
        "level": 3
    }, 
    {
        "code": "410503", 
        "sheng": "41", 
        "di": "05", 
        "xian": "03", 
        "name": "北关区", 
        "level": 3
    }, 
    {
        "code": "410505", 
        "sheng": "41", 
        "di": "05", 
        "xian": "05", 
        "name": "殷都区", 
        "level": 3
    }, 
    {
        "code": "410506", 
        "sheng": "41", 
        "di": "05", 
        "xian": "06", 
        "name": "龙安区", 
        "level": 3
    }, 
    {
        "code": "410522", 
        "sheng": "41", 
        "di": "05", 
        "xian": "22", 
        "name": "安阳县", 
        "level": 3
    }, 
    {
        "code": "410523", 
        "sheng": "41", 
        "di": "05", 
        "xian": "23", 
        "name": "汤阴县", 
        "level": 3
    }, 
    {
        "code": "410526", 
        "sheng": "41", 
        "di": "05", 
        "xian": "26", 
        "name": "滑县", 
        "level": 3
    }, 
    {
        "code": "410527", 
        "sheng": "41", 
        "di": "05", 
        "xian": "27", 
        "name": "内黄县", 
        "level": 3
    }, 
    {
        "code": "410581", 
        "sheng": "41", 
        "di": "05", 
        "xian": "81", 
        "name": "林州市", 
        "level": 3
    }, 
    {
        "code": "410582", 
        "sheng": "41", 
        "di": "05", 
        "xian": "82", 
        "name": "安阳新区", 
        "level": 3
    }, 
    {
        "code": "410600", 
        "sheng": "41", 
        "di": "06", 
        "xian": "00", 
        "name": "鹤壁市", 
        "level": 2
    }, 
    {
        "code": "410602", 
        "sheng": "41", 
        "di": "06", 
        "xian": "02", 
        "name": "鹤山区", 
        "level": 3
    }, 
    {
        "code": "410603", 
        "sheng": "41", 
        "di": "06", 
        "xian": "03", 
        "name": "山城区", 
        "level": 3
    }, 
    {
        "code": "410611", 
        "sheng": "41", 
        "di": "06", 
        "xian": "11", 
        "name": "淇滨区", 
        "level": 3
    }, 
    {
        "code": "410621", 
        "sheng": "41", 
        "di": "06", 
        "xian": "21", 
        "name": "浚县", 
        "level": 3
    }, 
    {
        "code": "410622", 
        "sheng": "41", 
        "di": "06", 
        "xian": "22", 
        "name": "淇县", 
        "level": 3
    }, 
    {
        "code": "410700", 
        "sheng": "41", 
        "di": "07", 
        "xian": "00", 
        "name": "新乡市", 
        "level": 2
    }, 
    {
        "code": "410702", 
        "sheng": "41", 
        "di": "07", 
        "xian": "02", 
        "name": "红旗区", 
        "level": 3
    }, 
    {
        "code": "410703", 
        "sheng": "41", 
        "di": "07", 
        "xian": "03", 
        "name": "卫滨区", 
        "level": 3
    }, 
    {
        "code": "410704", 
        "sheng": "41", 
        "di": "07", 
        "xian": "04", 
        "name": "凤泉区", 
        "level": 3
    }, 
    {
        "code": "410711", 
        "sheng": "41", 
        "di": "07", 
        "xian": "11", 
        "name": "牧野区", 
        "level": 3
    }, 
    {
        "code": "410721", 
        "sheng": "41", 
        "di": "07", 
        "xian": "21", 
        "name": "新乡县", 
        "level": 3
    }, 
    {
        "code": "410724", 
        "sheng": "41", 
        "di": "07", 
        "xian": "24", 
        "name": "获嘉县", 
        "level": 3
    }, 
    {
        "code": "410725", 
        "sheng": "41", 
        "di": "07", 
        "xian": "25", 
        "name": "原阳县", 
        "level": 3
    }, 
    {
        "code": "410726", 
        "sheng": "41", 
        "di": "07", 
        "xian": "26", 
        "name": "延津县", 
        "level": 3
    }, 
    {
        "code": "410727", 
        "sheng": "41", 
        "di": "07", 
        "xian": "27", 
        "name": "封丘县", 
        "level": 3
    }, 
    {
        "code": "410728", 
        "sheng": "41", 
        "di": "07", 
        "xian": "28", 
        "name": "长垣县", 
        "level": 3
    }, 
    {
        "code": "410781", 
        "sheng": "41", 
        "di": "07", 
        "xian": "81", 
        "name": "卫辉市", 
        "level": 3
    }, 
    {
        "code": "410782", 
        "sheng": "41", 
        "di": "07", 
        "xian": "82", 
        "name": "辉县市", 
        "level": 3
    }, 
    {
        "code": "410800", 
        "sheng": "41", 
        "di": "08", 
        "xian": "00", 
        "name": "焦作市", 
        "level": 2
    }, 
    {
        "code": "410802", 
        "sheng": "41", 
        "di": "08", 
        "xian": "02", 
        "name": "解放区", 
        "level": 3
    }, 
    {
        "code": "410803", 
        "sheng": "41", 
        "di": "08", 
        "xian": "03", 
        "name": "中站区", 
        "level": 3
    }, 
    {
        "code": "410804", 
        "sheng": "41", 
        "di": "08", 
        "xian": "04", 
        "name": "马村区", 
        "level": 3
    }, 
    {
        "code": "410811", 
        "sheng": "41", 
        "di": "08", 
        "xian": "11", 
        "name": "山阳区", 
        "level": 3
    }, 
    {
        "code": "410821", 
        "sheng": "41", 
        "di": "08", 
        "xian": "21", 
        "name": "修武县", 
        "level": 3
    }, 
    {
        "code": "410822", 
        "sheng": "41", 
        "di": "08", 
        "xian": "22", 
        "name": "博爱县", 
        "level": 3
    }, 
    {
        "code": "410823", 
        "sheng": "41", 
        "di": "08", 
        "xian": "23", 
        "name": "武陟县", 
        "level": 3
    }, 
    {
        "code": "410825", 
        "sheng": "41", 
        "di": "08", 
        "xian": "25", 
        "name": "温县", 
        "level": 3
    }, 
    {
        "code": "410882", 
        "sheng": "41", 
        "di": "08", 
        "xian": "82", 
        "name": "沁阳市", 
        "level": 3
    }, 
    {
        "code": "410883", 
        "sheng": "41", 
        "di": "08", 
        "xian": "83", 
        "name": "孟州市", 
        "level": 3
    }, 
    {
        "code": "410900", 
        "sheng": "41", 
        "di": "09", 
        "xian": "00", 
        "name": "濮阳市", 
        "level": 2
    }, 
    {
        "code": "410902", 
        "sheng": "41", 
        "di": "09", 
        "xian": "02", 
        "name": "华龙区", 
        "level": 3
    }, 
    {
        "code": "410922", 
        "sheng": "41", 
        "di": "09", 
        "xian": "22", 
        "name": "清丰县", 
        "level": 3
    }, 
    {
        "code": "410923", 
        "sheng": "41", 
        "di": "09", 
        "xian": "23", 
        "name": "南乐县", 
        "level": 3
    }, 
    {
        "code": "410926", 
        "sheng": "41", 
        "di": "09", 
        "xian": "26", 
        "name": "范县", 
        "level": 3
    }, 
    {
        "code": "410927", 
        "sheng": "41", 
        "di": "09", 
        "xian": "27", 
        "name": "台前县", 
        "level": 3
    }, 
    {
        "code": "410928", 
        "sheng": "41", 
        "di": "09", 
        "xian": "28", 
        "name": "濮阳县", 
        "level": 3
    }, 
    {
        "code": "411000", 
        "sheng": "41", 
        "di": "10", 
        "xian": "00", 
        "name": "许昌市", 
        "level": 2
    }, 
    {
        "code": "411002", 
        "sheng": "41", 
        "di": "10", 
        "xian": "02", 
        "name": "魏都区", 
        "level": 3
    }, 
    {
        "code": "411023", 
        "sheng": "41", 
        "di": "10", 
        "xian": "23", 
        "name": "许昌县", 
        "level": 3
    }, 
    {
        "code": "411024", 
        "sheng": "41", 
        "di": "10", 
        "xian": "24", 
        "name": "鄢陵县", 
        "level": 3
    }, 
    {
        "code": "411025", 
        "sheng": "41", 
        "di": "10", 
        "xian": "25", 
        "name": "襄城县", 
        "level": 3
    }, 
    {
        "code": "411081", 
        "sheng": "41", 
        "di": "10", 
        "xian": "81", 
        "name": "禹州市", 
        "level": 3
    }, 
    {
        "code": "411082", 
        "sheng": "41", 
        "di": "10", 
        "xian": "82", 
        "name": "长葛市", 
        "level": 3
    }, 
    {
        "code": "411100", 
        "sheng": "41", 
        "di": "11", 
        "xian": "00", 
        "name": "漯河市", 
        "level": 2
    }, 
    {
        "code": "411102", 
        "sheng": "41", 
        "di": "11", 
        "xian": "02", 
        "name": "源汇区", 
        "level": 3
    }, 
    {
        "code": "411103", 
        "sheng": "41", 
        "di": "11", 
        "xian": "03", 
        "name": "郾城区", 
        "level": 3
    }, 
    {
        "code": "411104", 
        "sheng": "41", 
        "di": "11", 
        "xian": "04", 
        "name": "召陵区", 
        "level": 3
    }, 
    {
        "code": "411121", 
        "sheng": "41", 
        "di": "11", 
        "xian": "21", 
        "name": "舞阳县", 
        "level": 3
    }, 
    {
        "code": "411122", 
        "sheng": "41", 
        "di": "11", 
        "xian": "22", 
        "name": "临颍县", 
        "level": 3
    }, 
    {
        "code": "411200", 
        "sheng": "41", 
        "di": "12", 
        "xian": "00", 
        "name": "三门峡市", 
        "level": 2
    }, 
    {
        "code": "411202", 
        "sheng": "41", 
        "di": "12", 
        "xian": "02", 
        "name": "湖滨区", 
        "level": 3
    }, 
    {
        "code": "411203", 
        "sheng": "41", 
        "di": "12", 
        "xian": "03", 
        "name": "陕州区", 
        "level": 3
    }, 
    {
        "code": "411221", 
        "sheng": "41", 
        "di": "12", 
        "xian": "21", 
        "name": "渑池县", 
        "level": 3
    }, 
    {
        "code": "411224", 
        "sheng": "41", 
        "di": "12", 
        "xian": "24", 
        "name": "卢氏县", 
        "level": 3
    }, 
    {
        "code": "411281", 
        "sheng": "41", 
        "di": "12", 
        "xian": "81", 
        "name": "义马市", 
        "level": 3
    }, 
    {
        "code": "411282", 
        "sheng": "41", 
        "di": "12", 
        "xian": "82", 
        "name": "灵宝市", 
        "level": 3
    }, 
    {
        "code": "411300", 
        "sheng": "41", 
        "di": "13", 
        "xian": "00", 
        "name": "南阳市", 
        "level": 2
    }, 
    {
        "code": "411302", 
        "sheng": "41", 
        "di": "13", 
        "xian": "02", 
        "name": "宛城区", 
        "level": 3
    }, 
    {
        "code": "411303", 
        "sheng": "41", 
        "di": "13", 
        "xian": "03", 
        "name": "卧龙区", 
        "level": 3
    }, 
    {
        "code": "411321", 
        "sheng": "41", 
        "di": "13", 
        "xian": "21", 
        "name": "南召县", 
        "level": 3
    }, 
    {
        "code": "411322", 
        "sheng": "41", 
        "di": "13", 
        "xian": "22", 
        "name": "方城县", 
        "level": 3
    }, 
    {
        "code": "411323", 
        "sheng": "41", 
        "di": "13", 
        "xian": "23", 
        "name": "西峡县", 
        "level": 3
    }, 
    {
        "code": "411324", 
        "sheng": "41", 
        "di": "13", 
        "xian": "24", 
        "name": "镇平县", 
        "level": 3
    }, 
    {
        "code": "411325", 
        "sheng": "41", 
        "di": "13", 
        "xian": "25", 
        "name": "内乡县", 
        "level": 3
    }, 
    {
        "code": "411326", 
        "sheng": "41", 
        "di": "13", 
        "xian": "26", 
        "name": "淅川县", 
        "level": 3
    }, 
    {
        "code": "411327", 
        "sheng": "41", 
        "di": "13", 
        "xian": "27", 
        "name": "社旗县", 
        "level": 3
    }, 
    {
        "code": "411328", 
        "sheng": "41", 
        "di": "13", 
        "xian": "28", 
        "name": "唐河县", 
        "level": 3
    }, 
    {
        "code": "411329", 
        "sheng": "41", 
        "di": "13", 
        "xian": "29", 
        "name": "新野县", 
        "level": 3
    }, 
    {
        "code": "411330", 
        "sheng": "41", 
        "di": "13", 
        "xian": "30", 
        "name": "桐柏县", 
        "level": 3
    }, 
    {
        "code": "411381", 
        "sheng": "41", 
        "di": "13", 
        "xian": "81", 
        "name": "邓州市", 
        "level": 3
    }, 
    {
        "code": "411400", 
        "sheng": "41", 
        "di": "14", 
        "xian": "00", 
        "name": "商丘市", 
        "level": 2
    }, 
    {
        "code": "411402", 
        "sheng": "41", 
        "di": "14", 
        "xian": "02", 
        "name": "梁园区", 
        "level": 3
    }, 
    {
        "code": "411403", 
        "sheng": "41", 
        "di": "14", 
        "xian": "03", 
        "name": "睢阳区", 
        "level": 3
    }, 
    {
        "code": "411421", 
        "sheng": "41", 
        "di": "14", 
        "xian": "21", 
        "name": "民权县", 
        "level": 3
    }, 
    {
        "code": "411422", 
        "sheng": "41", 
        "di": "14", 
        "xian": "22", 
        "name": "睢县", 
        "level": 3
    }, 
    {
        "code": "411423", 
        "sheng": "41", 
        "di": "14", 
        "xian": "23", 
        "name": "宁陵县", 
        "level": 3
    }, 
    {
        "code": "411424", 
        "sheng": "41", 
        "di": "14", 
        "xian": "24", 
        "name": "柘城县", 
        "level": 3
    }, 
    {
        "code": "411425", 
        "sheng": "41", 
        "di": "14", 
        "xian": "25", 
        "name": "虞城县", 
        "level": 3
    }, 
    {
        "code": "411426", 
        "sheng": "41", 
        "di": "14", 
        "xian": "26", 
        "name": "夏邑县", 
        "level": 3
    }, 
    {
        "code": "411481", 
        "sheng": "41", 
        "di": "14", 
        "xian": "81", 
        "name": "永城市", 
        "level": 3
    }, 
    {
        "code": "411500", 
        "sheng": "41", 
        "di": "15", 
        "xian": "00", 
        "name": "信阳市", 
        "level": 2
    }, 
    {
        "code": "411502", 
        "sheng": "41", 
        "di": "15", 
        "xian": "02", 
        "name": "浉河区", 
        "level": 3
    }, 
    {
        "code": "411503", 
        "sheng": "41", 
        "di": "15", 
        "xian": "03", 
        "name": "平桥区", 
        "level": 3
    }, 
    {
        "code": "411521", 
        "sheng": "41", 
        "di": "15", 
        "xian": "21", 
        "name": "罗山县", 
        "level": 3
    }, 
    {
        "code": "411522", 
        "sheng": "41", 
        "di": "15", 
        "xian": "22", 
        "name": "光山县", 
        "level": 3
    }, 
    {
        "code": "411523", 
        "sheng": "41", 
        "di": "15", 
        "xian": "23", 
        "name": "新县", 
        "level": 3
    }, 
    {
        "code": "411524", 
        "sheng": "41", 
        "di": "15", 
        "xian": "24", 
        "name": "商城县", 
        "level": 3
    }, 
    {
        "code": "411525", 
        "sheng": "41", 
        "di": "15", 
        "xian": "25", 
        "name": "固始县", 
        "level": 3
    }, 
    {
        "code": "411526", 
        "sheng": "41", 
        "di": "15", 
        "xian": "26", 
        "name": "潢川县", 
        "level": 3
    }, 
    {
        "code": "411527", 
        "sheng": "41", 
        "di": "15", 
        "xian": "27", 
        "name": "淮滨县", 
        "level": 3
    }, 
    {
        "code": "411528", 
        "sheng": "41", 
        "di": "15", 
        "xian": "28", 
        "name": "息县", 
        "level": 3
    }, 
    {
        "code": "411600", 
        "sheng": "41", 
        "di": "16", 
        "xian": "00", 
        "name": "周口市", 
        "level": 2
    }, 
    {
        "code": "411602", 
        "sheng": "41", 
        "di": "16", 
        "xian": "02", 
        "name": "川汇区", 
        "level": 3
    }, 
    {
        "code": "411621", 
        "sheng": "41", 
        "di": "16", 
        "xian": "21", 
        "name": "扶沟县", 
        "level": 3
    }, 
    {
        "code": "411622", 
        "sheng": "41", 
        "di": "16", 
        "xian": "22", 
        "name": "西华县", 
        "level": 3
    }, 
    {
        "code": "411623", 
        "sheng": "41", 
        "di": "16", 
        "xian": "23", 
        "name": "商水县", 
        "level": 3
    }, 
    {
        "code": "411624", 
        "sheng": "41", 
        "di": "16", 
        "xian": "24", 
        "name": "沈丘县", 
        "level": 3
    }, 
    {
        "code": "411625", 
        "sheng": "41", 
        "di": "16", 
        "xian": "25", 
        "name": "郸城县", 
        "level": 3
    }, 
    {
        "code": "411626", 
        "sheng": "41", 
        "di": "16", 
        "xian": "26", 
        "name": "淮阳县", 
        "level": 3
    }, 
    {
        "code": "411627", 
        "sheng": "41", 
        "di": "16", 
        "xian": "27", 
        "name": "太康县", 
        "level": 3
    }, 
    {
        "code": "411628", 
        "sheng": "41", 
        "di": "16", 
        "xian": "28", 
        "name": "鹿邑县", 
        "level": 3
    }, 
    {
        "code": "411681", 
        "sheng": "41", 
        "di": "16", 
        "xian": "81", 
        "name": "项城市", 
        "level": 3
    }, 
    {
        "code": "411682", 
        "sheng": "41", 
        "di": "16", 
        "xian": "82", 
        "name": "东新区", 
        "level": 3
    }, 
    {
        "code": "411683", 
        "sheng": "41", 
        "di": "16", 
        "xian": "83", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "411700", 
        "sheng": "41", 
        "di": "17", 
        "xian": "00", 
        "name": "驻马店市", 
        "level": 2
    }, 
    {
        "code": "411702", 
        "sheng": "41", 
        "di": "17", 
        "xian": "02", 
        "name": "驿城区", 
        "level": 3
    }, 
    {
        "code": "411721", 
        "sheng": "41", 
        "di": "17", 
        "xian": "21", 
        "name": "西平县", 
        "level": 3
    }, 
    {
        "code": "411722", 
        "sheng": "41", 
        "di": "17", 
        "xian": "22", 
        "name": "上蔡县", 
        "level": 3
    }, 
    {
        "code": "411723", 
        "sheng": "41", 
        "di": "17", 
        "xian": "23", 
        "name": "平舆县", 
        "level": 3
    }, 
    {
        "code": "411724", 
        "sheng": "41", 
        "di": "17", 
        "xian": "24", 
        "name": "正阳县", 
        "level": 3
    }, 
    {
        "code": "411725", 
        "sheng": "41", 
        "di": "17", 
        "xian": "25", 
        "name": "确山县", 
        "level": 3
    }, 
    {
        "code": "411726", 
        "sheng": "41", 
        "di": "17", 
        "xian": "26", 
        "name": "泌阳县", 
        "level": 3
    }, 
    {
        "code": "411727", 
        "sheng": "41", 
        "di": "17", 
        "xian": "27", 
        "name": "汝南县", 
        "level": 3
    }, 
    {
        "code": "411728", 
        "sheng": "41", 
        "di": "17", 
        "xian": "28", 
        "name": "遂平县", 
        "level": 3
    }, 
    {
        "code": "411729", 
        "sheng": "41", 
        "di": "17", 
        "xian": "29", 
        "name": "新蔡县", 
        "level": 3
    }, 
    {
        "code": "419001", 
        "sheng": "41", 
        "di": "90", 
        "xian": "01", 
        "name": "济源市", 
        "level": 2
    }, 
    {
        "code": "419011", 
        "sheng": "41", 
        "di": "90", 
        "xian": "11", 
        "name": "沁园街道", 
        "level": 3
    }, 
    {
        "code": "419012", 
        "sheng": "41", 
        "di": "90", 
        "xian": "12", 
        "name": "济水街道", 
        "level": 3
    }, 
    {
        "code": "419013", 
        "sheng": "41", 
        "di": "90", 
        "xian": "13", 
        "name": "北海街道", 
        "level": 3
    }, 
    {
        "code": "419014", 
        "sheng": "41", 
        "di": "90", 
        "xian": "14", 
        "name": "天坛街道", 
        "level": 3
    }, 
    {
        "code": "419015", 
        "sheng": "41", 
        "di": "90", 
        "xian": "15", 
        "name": "玉泉街道", 
        "level": 3
    }, 
    {
        "code": "419016", 
        "sheng": "41", 
        "di": "90", 
        "xian": "16", 
        "name": "克井镇", 
        "level": 3
    }, 
    {
        "code": "419017", 
        "sheng": "41", 
        "di": "90", 
        "xian": "17", 
        "name": "五龙口镇", 
        "level": 3
    }, 
    {
        "code": "419018", 
        "sheng": "41", 
        "di": "90", 
        "xian": "18", 
        "name": "梨林镇", 
        "level": 3
    }, 
    {
        "code": "419019", 
        "sheng": "41", 
        "di": "90", 
        "xian": "19", 
        "name": "轵城镇", 
        "level": 3
    }, 
    {
        "code": "419020", 
        "sheng": "41", 
        "di": "90", 
        "xian": "20", 
        "name": "承留镇", 
        "level": 3
    }, 
    {
        "code": "419021", 
        "sheng": "41", 
        "di": "90", 
        "xian": "21", 
        "name": "坡头镇", 
        "level": 3
    }, 
    {
        "code": "419022", 
        "sheng": "41", 
        "di": "90", 
        "xian": "22", 
        "name": "大峪镇", 
        "level": 3
    }, 
    {
        "code": "419023", 
        "sheng": "41", 
        "di": "90", 
        "xian": "23", 
        "name": "邵原镇", 
        "level": 3
    }, 
    {
        "code": "419024", 
        "sheng": "41", 
        "di": "90", 
        "xian": "24", 
        "name": "思礼镇", 
        "level": 3
    }, 
    {
        "code": "419025", 
        "sheng": "41", 
        "di": "90", 
        "xian": "25", 
        "name": "王屋镇", 
        "level": 3
    }, 
    {
        "code": "419026", 
        "sheng": "41", 
        "di": "90", 
        "xian": "26", 
        "name": "下冶镇", 
        "level": 3
    }, 
    {
        "code": "420000", 
        "sheng": "42", 
        "di": "00", 
        "xian": "00", 
        "name": "湖北省", 
        "level": 1
    }, 
    {
        "code": "420100", 
        "sheng": "42", 
        "di": "01", 
        "xian": "00", 
        "name": "武汉市", 
        "level": 2
    }, 
    {
        "code": "420102", 
        "sheng": "42", 
        "di": "01", 
        "xian": "02", 
        "name": "江岸区", 
        "level": 3
    }, 
    {
        "code": "420103", 
        "sheng": "42", 
        "di": "01", 
        "xian": "03", 
        "name": "江汉区", 
        "level": 3
    }, 
    {
        "code": "420104", 
        "sheng": "42", 
        "di": "01", 
        "xian": "04", 
        "name": "硚口区", 
        "level": 3
    }, 
    {
        "code": "420105", 
        "sheng": "42", 
        "di": "01", 
        "xian": "05", 
        "name": "汉阳区", 
        "level": 3
    }, 
    {
        "code": "420106", 
        "sheng": "42", 
        "di": "01", 
        "xian": "06", 
        "name": "武昌区", 
        "level": 3
    }, 
    {
        "code": "420107", 
        "sheng": "42", 
        "di": "01", 
        "xian": "07", 
        "name": "青山区", 
        "level": 3
    }, 
    {
        "code": "420111", 
        "sheng": "42", 
        "di": "01", 
        "xian": "11", 
        "name": "洪山区", 
        "level": 3
    }, 
    {
        "code": "420112", 
        "sheng": "42", 
        "di": "01", 
        "xian": "12", 
        "name": "东西湖区", 
        "level": 3
    }, 
    {
        "code": "420113", 
        "sheng": "42", 
        "di": "01", 
        "xian": "13", 
        "name": "汉南区", 
        "level": 3
    }, 
    {
        "code": "420114", 
        "sheng": "42", 
        "di": "01", 
        "xian": "14", 
        "name": "蔡甸区", 
        "level": 3
    }, 
    {
        "code": "420115", 
        "sheng": "42", 
        "di": "01", 
        "xian": "15", 
        "name": "江夏区", 
        "level": 3
    }, 
    {
        "code": "420116", 
        "sheng": "42", 
        "di": "01", 
        "xian": "16", 
        "name": "黄陂区", 
        "level": 3
    }, 
    {
        "code": "420117", 
        "sheng": "42", 
        "di": "01", 
        "xian": "17", 
        "name": "新洲区", 
        "level": 3
    }, 
    {
        "code": "420118", 
        "sheng": "42", 
        "di": "01", 
        "xian": "18", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "420200", 
        "sheng": "42", 
        "di": "02", 
        "xian": "00", 
        "name": "黄石市", 
        "level": 2
    }, 
    {
        "code": "420202", 
        "sheng": "42", 
        "di": "02", 
        "xian": "02", 
        "name": "黄石港区", 
        "level": 3
    }, 
    {
        "code": "420203", 
        "sheng": "42", 
        "di": "02", 
        "xian": "03", 
        "name": "西塞山区", 
        "level": 3
    }, 
    {
        "code": "420204", 
        "sheng": "42", 
        "di": "02", 
        "xian": "04", 
        "name": "下陆区", 
        "level": 3
    }, 
    {
        "code": "420205", 
        "sheng": "42", 
        "di": "02", 
        "xian": "05", 
        "name": "铁山区", 
        "level": 3
    }, 
    {
        "code": "420222", 
        "sheng": "42", 
        "di": "02", 
        "xian": "22", 
        "name": "阳新县", 
        "level": 3
    }, 
    {
        "code": "420281", 
        "sheng": "42", 
        "di": "02", 
        "xian": "81", 
        "name": "大冶市", 
        "level": 3
    }, 
    {
        "code": "420282", 
        "sheng": "42", 
        "di": "02", 
        "xian": "82", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "420300", 
        "sheng": "42", 
        "di": "03", 
        "xian": "00", 
        "name": "十堰市", 
        "level": 2
    }, 
    {
        "code": "420302", 
        "sheng": "42", 
        "di": "03", 
        "xian": "02", 
        "name": "茅箭区", 
        "level": 3
    }, 
    {
        "code": "420303", 
        "sheng": "42", 
        "di": "03", 
        "xian": "03", 
        "name": "张湾区", 
        "level": 3
    }, 
    {
        "code": "420304", 
        "sheng": "42", 
        "di": "03", 
        "xian": "04", 
        "name": "郧阳区", 
        "level": 3
    }, 
    {
        "code": "420322", 
        "sheng": "42", 
        "di": "03", 
        "xian": "22", 
        "name": "郧西县", 
        "level": 3
    }, 
    {
        "code": "420323", 
        "sheng": "42", 
        "di": "03", 
        "xian": "23", 
        "name": "竹山县", 
        "level": 3
    }, 
    {
        "code": "420324", 
        "sheng": "42", 
        "di": "03", 
        "xian": "24", 
        "name": "竹溪县", 
        "level": 3
    }, 
    {
        "code": "420325", 
        "sheng": "42", 
        "di": "03", 
        "xian": "25", 
        "name": "房县", 
        "level": 3
    }, 
    {
        "code": "420381", 
        "sheng": "42", 
        "di": "03", 
        "xian": "81", 
        "name": "丹江口市", 
        "level": 3
    }, 
    {
        "code": "420500", 
        "sheng": "42", 
        "di": "05", 
        "xian": "00", 
        "name": "宜昌市", 
        "level": 2
    }, 
    {
        "code": "420502", 
        "sheng": "42", 
        "di": "05", 
        "xian": "02", 
        "name": "西陵区", 
        "level": 3
    }, 
    {
        "code": "420503", 
        "sheng": "42", 
        "di": "05", 
        "xian": "03", 
        "name": "伍家岗区", 
        "level": 3
    }, 
    {
        "code": "420504", 
        "sheng": "42", 
        "di": "05", 
        "xian": "04", 
        "name": "点军区", 
        "level": 3
    }, 
    {
        "code": "420505", 
        "sheng": "42", 
        "di": "05", 
        "xian": "05", 
        "name": "猇亭区", 
        "level": 3
    }, 
    {
        "code": "420506", 
        "sheng": "42", 
        "di": "05", 
        "xian": "06", 
        "name": "夷陵区", 
        "level": 3
    }, 
    {
        "code": "420525", 
        "sheng": "42", 
        "di": "05", 
        "xian": "25", 
        "name": "远安县", 
        "level": 3
    }, 
    {
        "code": "420526", 
        "sheng": "42", 
        "di": "05", 
        "xian": "26", 
        "name": "兴山县", 
        "level": 3
    }, 
    {
        "code": "420527", 
        "sheng": "42", 
        "di": "05", 
        "xian": "27", 
        "name": "秭归县", 
        "level": 3
    }, 
    {
        "code": "420528", 
        "sheng": "42", 
        "di": "05", 
        "xian": "28", 
        "name": "长阳土家族自治县", 
        "level": 3
    }, 
    {
        "code": "420529", 
        "sheng": "42", 
        "di": "05", 
        "xian": "29", 
        "name": "五峰土家族自治县", 
        "level": 3
    }, 
    {
        "code": "420581", 
        "sheng": "42", 
        "di": "05", 
        "xian": "81", 
        "name": "宜都市", 
        "level": 3
    }, 
    {
        "code": "420582", 
        "sheng": "42", 
        "di": "05", 
        "xian": "82", 
        "name": "当阳市", 
        "level": 3
    }, 
    {
        "code": "420583", 
        "sheng": "42", 
        "di": "05", 
        "xian": "83", 
        "name": "枝江市", 
        "level": 3
    }, 
    {
        "code": "420584", 
        "sheng": "42", 
        "di": "05", 
        "xian": "84", 
        "name": "宜昌新区", 
        "level": 3
    }, 
    {
        "code": "420600", 
        "sheng": "42", 
        "di": "06", 
        "xian": "00", 
        "name": "襄阳市", 
        "level": 2
    }, 
    {
        "code": "420602", 
        "sheng": "42", 
        "di": "06", 
        "xian": "02", 
        "name": "襄城区", 
        "level": 3
    }, 
    {
        "code": "420606", 
        "sheng": "42", 
        "di": "06", 
        "xian": "06", 
        "name": "樊城区", 
        "level": 3
    }, 
    {
        "code": "420607", 
        "sheng": "42", 
        "di": "06", 
        "xian": "07", 
        "name": "襄州区", 
        "level": 3
    }, 
    {
        "code": "420624", 
        "sheng": "42", 
        "di": "06", 
        "xian": "24", 
        "name": "南漳县", 
        "level": 3
    }, 
    {
        "code": "420625", 
        "sheng": "42", 
        "di": "06", 
        "xian": "25", 
        "name": "谷城县", 
        "level": 3
    }, 
    {
        "code": "420626", 
        "sheng": "42", 
        "di": "06", 
        "xian": "26", 
        "name": "保康县", 
        "level": 3
    }, 
    {
        "code": "420682", 
        "sheng": "42", 
        "di": "06", 
        "xian": "82", 
        "name": "老河口市", 
        "level": 3
    }, 
    {
        "code": "420683", 
        "sheng": "42", 
        "di": "06", 
        "xian": "83", 
        "name": "枣阳市", 
        "level": 3
    }, 
    {
        "code": "420684", 
        "sheng": "42", 
        "di": "06", 
        "xian": "84", 
        "name": "宜城市", 
        "level": 3
    }, 
    {
        "code": "420685", 
        "sheng": "42", 
        "di": "06", 
        "xian": "85", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "420686", 
        "sheng": "42", 
        "di": "06", 
        "xian": "86", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "420700", 
        "sheng": "42", 
        "di": "07", 
        "xian": "00", 
        "name": "鄂州市", 
        "level": 2
    }, 
    {
        "code": "420702", 
        "sheng": "42", 
        "di": "07", 
        "xian": "02", 
        "name": "梁子湖区", 
        "level": 3
    }, 
    {
        "code": "420703", 
        "sheng": "42", 
        "di": "07", 
        "xian": "03", 
        "name": "华容区", 
        "level": 3
    }, 
    {
        "code": "420704", 
        "sheng": "42", 
        "di": "07", 
        "xian": "04", 
        "name": "鄂城区", 
        "level": 3
    }, 
    {
        "code": "420800", 
        "sheng": "42", 
        "di": "08", 
        "xian": "00", 
        "name": "荆门市", 
        "level": 2
    }, 
    {
        "code": "420802", 
        "sheng": "42", 
        "di": "08", 
        "xian": "02", 
        "name": "东宝区", 
        "level": 3
    }, 
    {
        "code": "420804", 
        "sheng": "42", 
        "di": "08", 
        "xian": "04", 
        "name": "掇刀区", 
        "level": 3
    }, 
    {
        "code": "420821", 
        "sheng": "42", 
        "di": "08", 
        "xian": "21", 
        "name": "京山县", 
        "level": 3
    }, 
    {
        "code": "420822", 
        "sheng": "42", 
        "di": "08", 
        "xian": "22", 
        "name": "沙洋县", 
        "level": 3
    }, 
    {
        "code": "420881", 
        "sheng": "42", 
        "di": "08", 
        "xian": "81", 
        "name": "钟祥市", 
        "level": 3
    }, 
    {
        "code": "420900", 
        "sheng": "42", 
        "di": "09", 
        "xian": "00", 
        "name": "孝感市", 
        "level": 2
    }, 
    {
        "code": "420902", 
        "sheng": "42", 
        "di": "09", 
        "xian": "02", 
        "name": "孝南区", 
        "level": 3
    }, 
    {
        "code": "420921", 
        "sheng": "42", 
        "di": "09", 
        "xian": "21", 
        "name": "孝昌县", 
        "level": 3
    }, 
    {
        "code": "420922", 
        "sheng": "42", 
        "di": "09", 
        "xian": "22", 
        "name": "大悟县", 
        "level": 3
    }, 
    {
        "code": "420923", 
        "sheng": "42", 
        "di": "09", 
        "xian": "23", 
        "name": "云梦县", 
        "level": 3
    }, 
    {
        "code": "420981", 
        "sheng": "42", 
        "di": "09", 
        "xian": "81", 
        "name": "应城市", 
        "level": 3
    }, 
    {
        "code": "420982", 
        "sheng": "42", 
        "di": "09", 
        "xian": "82", 
        "name": "安陆市", 
        "level": 3
    }, 
    {
        "code": "420984", 
        "sheng": "42", 
        "di": "09", 
        "xian": "84", 
        "name": "汉川市", 
        "level": 3
    }, 
    {
        "code": "421000", 
        "sheng": "42", 
        "di": "10", 
        "xian": "00", 
        "name": "荆州市", 
        "level": 2
    }, 
    {
        "code": "421002", 
        "sheng": "42", 
        "di": "10", 
        "xian": "02", 
        "name": "沙市区", 
        "level": 3
    }, 
    {
        "code": "421003", 
        "sheng": "42", 
        "di": "10", 
        "xian": "03", 
        "name": "荆州区", 
        "level": 3
    }, 
    {
        "code": "421022", 
        "sheng": "42", 
        "di": "10", 
        "xian": "22", 
        "name": "公安县", 
        "level": 3
    }, 
    {
        "code": "421023", 
        "sheng": "42", 
        "di": "10", 
        "xian": "23", 
        "name": "监利县", 
        "level": 3
    }, 
    {
        "code": "421024", 
        "sheng": "42", 
        "di": "10", 
        "xian": "24", 
        "name": "江陵县", 
        "level": 3
    }, 
    {
        "code": "421081", 
        "sheng": "42", 
        "di": "10", 
        "xian": "81", 
        "name": "石首市", 
        "level": 3
    }, 
    {
        "code": "421083", 
        "sheng": "42", 
        "di": "10", 
        "xian": "83", 
        "name": "洪湖市", 
        "level": 3
    }, 
    {
        "code": "421087", 
        "sheng": "42", 
        "di": "10", 
        "xian": "87", 
        "name": "松滋市", 
        "level": 3
    }, 
    {
        "code": "421100", 
        "sheng": "42", 
        "di": "11", 
        "xian": "00", 
        "name": "黄冈市", 
        "level": 2
    }, 
    {
        "code": "421102", 
        "sheng": "42", 
        "di": "11", 
        "xian": "02", 
        "name": "黄州区", 
        "level": 3
    }, 
    {
        "code": "421121", 
        "sheng": "42", 
        "di": "11", 
        "xian": "21", 
        "name": "团风县", 
        "level": 3
    }, 
    {
        "code": "421122", 
        "sheng": "42", 
        "di": "11", 
        "xian": "22", 
        "name": "红安县", 
        "level": 3
    }, 
    {
        "code": "421123", 
        "sheng": "42", 
        "di": "11", 
        "xian": "23", 
        "name": "罗田县", 
        "level": 3
    }, 
    {
        "code": "421124", 
        "sheng": "42", 
        "di": "11", 
        "xian": "24", 
        "name": "英山县", 
        "level": 3
    }, 
    {
        "code": "421125", 
        "sheng": "42", 
        "di": "11", 
        "xian": "25", 
        "name": "浠水县", 
        "level": 3
    }, 
    {
        "code": "421126", 
        "sheng": "42", 
        "di": "11", 
        "xian": "26", 
        "name": "蕲春县", 
        "level": 3
    }, 
    {
        "code": "421127", 
        "sheng": "42", 
        "di": "11", 
        "xian": "27", 
        "name": "黄梅县", 
        "level": 3
    }, 
    {
        "code": "421181", 
        "sheng": "42", 
        "di": "11", 
        "xian": "81", 
        "name": "麻城市", 
        "level": 3
    }, 
    {
        "code": "421182", 
        "sheng": "42", 
        "di": "11", 
        "xian": "82", 
        "name": "武穴市", 
        "level": 3
    }, 
    {
        "code": "421200", 
        "sheng": "42", 
        "di": "12", 
        "xian": "00", 
        "name": "咸宁市", 
        "level": 2
    }, 
    {
        "code": "421202", 
        "sheng": "42", 
        "di": "12", 
        "xian": "02", 
        "name": "咸安区", 
        "level": 3
    }, 
    {
        "code": "421221", 
        "sheng": "42", 
        "di": "12", 
        "xian": "21", 
        "name": "嘉鱼县", 
        "level": 3
    }, 
    {
        "code": "421222", 
        "sheng": "42", 
        "di": "12", 
        "xian": "22", 
        "name": "通城县", 
        "level": 3
    }, 
    {
        "code": "421223", 
        "sheng": "42", 
        "di": "12", 
        "xian": "23", 
        "name": "崇阳县", 
        "level": 3
    }, 
    {
        "code": "421224", 
        "sheng": "42", 
        "di": "12", 
        "xian": "24", 
        "name": "通山县", 
        "level": 3
    }, 
    {
        "code": "421281", 
        "sheng": "42", 
        "di": "12", 
        "xian": "81", 
        "name": "赤壁市", 
        "level": 3
    }, 
    {
        "code": "421300", 
        "sheng": "42", 
        "di": "13", 
        "xian": "00", 
        "name": "随州市", 
        "level": 2
    }, 
    {
        "code": "421303", 
        "sheng": "42", 
        "di": "13", 
        "xian": "03", 
        "name": "曾都区", 
        "level": 3
    }, 
    {
        "code": "421321", 
        "sheng": "42", 
        "di": "13", 
        "xian": "21", 
        "name": "随县", 
        "level": 3
    }, 
    {
        "code": "421381", 
        "sheng": "42", 
        "di": "13", 
        "xian": "81", 
        "name": "广水市", 
        "level": 3
    }, 
    {
        "code": "422800", 
        "sheng": "42", 
        "di": "28", 
        "xian": "00", 
        "name": "恩施土家族苗族自治州", 
        "level": 2
    }, 
    {
        "code": "422801", 
        "sheng": "42", 
        "di": "28", 
        "xian": "01", 
        "name": "恩施市", 
        "level": 3
    }, 
    {
        "code": "422802", 
        "sheng": "42", 
        "di": "28", 
        "xian": "02", 
        "name": "利川市", 
        "level": 3
    }, 
    {
        "code": "422822", 
        "sheng": "42", 
        "di": "28", 
        "xian": "22", 
        "name": "建始县", 
        "level": 3
    }, 
    {
        "code": "422823", 
        "sheng": "42", 
        "di": "28", 
        "xian": "23", 
        "name": "巴东县", 
        "level": 3
    }, 
    {
        "code": "422825", 
        "sheng": "42", 
        "di": "28", 
        "xian": "25", 
        "name": "宣恩县", 
        "level": 3
    }, 
    {
        "code": "422826", 
        "sheng": "42", 
        "di": "28", 
        "xian": "26", 
        "name": "咸丰县", 
        "level": 3
    }, 
    {
        "code": "422827", 
        "sheng": "42", 
        "di": "28", 
        "xian": "27", 
        "name": "来凤县", 
        "level": 3
    }, 
    {
        "code": "422828", 
        "sheng": "42", 
        "di": "28", 
        "xian": "28", 
        "name": "鹤峰县", 
        "level": 3
    }, 
    {
        "code": "429004", 
        "sheng": "42", 
        "di": "90", 
        "xian": "04", 
        "name": "仙桃市", 
        "level": 2
    }, 
    {
        "code": "429005", 
        "sheng": "42", 
        "di": "90", 
        "xian": "05", 
        "name": "潜江市", 
        "level": 2
    }, 
    {
        "code": "429006", 
        "sheng": "42", 
        "di": "90", 
        "xian": "06", 
        "name": "天门市", 
        "level": 2
    }, 
    {
        "code": "429021", 
        "sheng": "42", 
        "di": "90", 
        "xian": "21", 
        "name": "神农架林区", 
        "level": 2
    }, 
    {
        "code": "429022", 
        "sheng": "42", 
        "di": "90", 
        "xian": "22", 
        "name": "松柏镇", 
        "level": 3
    }, 
    {
        "code": "429023", 
        "sheng": "42", 
        "di": "90", 
        "xian": "23", 
        "name": "阳日镇", 
        "level": 3
    }, 
    {
        "code": "429024", 
        "sheng": "42", 
        "di": "90", 
        "xian": "24", 
        "name": "木鱼镇", 
        "level": 3
    }, 
    {
        "code": "429025", 
        "sheng": "42", 
        "di": "90", 
        "xian": "25", 
        "name": "红坪镇", 
        "level": 3
    }, 
    {
        "code": "429026", 
        "sheng": "42", 
        "di": "90", 
        "xian": "26", 
        "name": "新华镇", 
        "level": 3
    }, 
    {
        "code": "429027", 
        "sheng": "42", 
        "di": "90", 
        "xian": "27", 
        "name": "大九湖", 
        "level": 3
    }, 
    {
        "code": "429028", 
        "sheng": "42", 
        "di": "90", 
        "xian": "28", 
        "name": "宋洛", 
        "level": 3
    }, 
    {
        "code": "429029", 
        "sheng": "42", 
        "di": "90", 
        "xian": "29", 
        "name": "下谷坪乡", 
        "level": 3
    }, 
    {
        "code": "429401", 
        "sheng": "42", 
        "di": "94", 
        "xian": "01", 
        "name": "沙嘴街道", 
        "level": 3
    }, 
    {
        "code": "429402", 
        "sheng": "42", 
        "di": "94", 
        "xian": "02", 
        "name": "干河街道", 
        "level": 3
    }, 
    {
        "code": "429403", 
        "sheng": "42", 
        "di": "94", 
        "xian": "03", 
        "name": "龙华山街道", 
        "level": 3
    }, 
    {
        "code": "429404", 
        "sheng": "42", 
        "di": "94", 
        "xian": "04", 
        "name": "郑场镇", 
        "level": 3
    }, 
    {
        "code": "429405", 
        "sheng": "42", 
        "di": "94", 
        "xian": "05", 
        "name": "毛嘴镇", 
        "level": 3
    }, 
    {
        "code": "429406", 
        "sheng": "42", 
        "di": "94", 
        "xian": "06", 
        "name": "豆河镇", 
        "level": 3
    }, 
    {
        "code": "429407", 
        "sheng": "42", 
        "di": "94", 
        "xian": "07", 
        "name": "三伏潭镇", 
        "level": 3
    }, 
    {
        "code": "429408", 
        "sheng": "42", 
        "di": "94", 
        "xian": "08", 
        "name": "胡场镇", 
        "level": 3
    }, 
    {
        "code": "429409", 
        "sheng": "42", 
        "di": "94", 
        "xian": "09", 
        "name": "长埫口镇", 
        "level": 3
    }, 
    {
        "code": "429410", 
        "sheng": "42", 
        "di": "94", 
        "xian": "10", 
        "name": "西流河镇", 
        "level": 3
    }, 
    {
        "code": "429411", 
        "sheng": "42", 
        "di": "94", 
        "xian": "11", 
        "name": "沙湖镇", 
        "level": 3
    }, 
    {
        "code": "429412", 
        "sheng": "42", 
        "di": "94", 
        "xian": "12", 
        "name": "杨林尾镇", 
        "level": 3
    }, 
    {
        "code": "429413", 
        "sheng": "42", 
        "di": "94", 
        "xian": "13", 
        "name": "彭场镇", 
        "level": 3
    }, 
    {
        "code": "429414", 
        "sheng": "42", 
        "di": "94", 
        "xian": "14", 
        "name": "张沟镇", 
        "level": 3
    }, 
    {
        "code": "429415", 
        "sheng": "42", 
        "di": "94", 
        "xian": "15", 
        "name": "郭河镇", 
        "level": 3
    }, 
    {
        "code": "429416", 
        "sheng": "42", 
        "di": "94", 
        "xian": "16", 
        "name": "沔城镇", 
        "level": 3
    }, 
    {
        "code": "429417", 
        "sheng": "42", 
        "di": "94", 
        "xian": "17", 
        "name": "通海口镇", 
        "level": 3
    }, 
    {
        "code": "429418", 
        "sheng": "42", 
        "di": "94", 
        "xian": "18", 
        "name": "陈场镇", 
        "level": 3
    }, 
    {
        "code": "429419", 
        "sheng": "42", 
        "di": "94", 
        "xian": "19", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "429420", 
        "sheng": "42", 
        "di": "94", 
        "xian": "20", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "429421", 
        "sheng": "42", 
        "di": "94", 
        "xian": "21", 
        "name": "工业园区", 
        "level": 3
    }, 
    {
        "code": "429422", 
        "sheng": "42", 
        "di": "94", 
        "xian": "22", 
        "name": "九合垸原种场", 
        "level": 3
    }, 
    {
        "code": "429423", 
        "sheng": "42", 
        "di": "94", 
        "xian": "23", 
        "name": "沙湖原种场", 
        "level": 3
    }, 
    {
        "code": "429424", 
        "sheng": "42", 
        "di": "94", 
        "xian": "24", 
        "name": "排湖渔场", 
        "level": 3
    }, 
    {
        "code": "429425", 
        "sheng": "42", 
        "di": "94", 
        "xian": "25", 
        "name": "五湖渔场", 
        "level": 3
    }, 
    {
        "code": "429426", 
        "sheng": "42", 
        "di": "94", 
        "xian": "26", 
        "name": "赵西垸林场", 
        "level": 3
    }, 
    {
        "code": "429427", 
        "sheng": "42", 
        "di": "94", 
        "xian": "27", 
        "name": "刘家垸林场", 
        "level": 3
    }, 
    {
        "code": "429428", 
        "sheng": "42", 
        "di": "94", 
        "xian": "28", 
        "name": "畜禽良种场", 
        "level": 3
    }, 
    {
        "code": "429501", 
        "sheng": "42", 
        "di": "95", 
        "xian": "01", 
        "name": "园林", 
        "level": 3
    }, 
    {
        "code": "429502", 
        "sheng": "42", 
        "di": "95", 
        "xian": "02", 
        "name": "广华", 
        "level": 3
    }, 
    {
        "code": "429503", 
        "sheng": "42", 
        "di": "95", 
        "xian": "03", 
        "name": "杨市", 
        "level": 3
    }, 
    {
        "code": "429504", 
        "sheng": "42", 
        "di": "95", 
        "xian": "04", 
        "name": "周矶", 
        "level": 3
    }, 
    {
        "code": "429505", 
        "sheng": "42", 
        "di": "95", 
        "xian": "05", 
        "name": "泽口", 
        "level": 3
    }, 
    {
        "code": "429506", 
        "sheng": "42", 
        "di": "95", 
        "xian": "06", 
        "name": "泰丰", 
        "level": 3
    }, 
    {
        "code": "429507", 
        "sheng": "42", 
        "di": "95", 
        "xian": "07", 
        "name": "高场", 
        "level": 3
    }, 
    {
        "code": "429508", 
        "sheng": "42", 
        "di": "95", 
        "xian": "08", 
        "name": "熊口镇", 
        "level": 3
    }, 
    {
        "code": "429509", 
        "sheng": "42", 
        "di": "95", 
        "xian": "09", 
        "name": "竹根滩镇", 
        "level": 3
    }, 
    {
        "code": "429510", 
        "sheng": "42", 
        "di": "95", 
        "xian": "10", 
        "name": "高石碑镇", 
        "level": 3
    }, 
    {
        "code": "429511", 
        "sheng": "42", 
        "di": "95", 
        "xian": "11", 
        "name": "老新镇", 
        "level": 3
    }, 
    {
        "code": "429512", 
        "sheng": "42", 
        "di": "95", 
        "xian": "12", 
        "name": "王场镇", 
        "level": 3
    }, 
    {
        "code": "429513", 
        "sheng": "42", 
        "di": "95", 
        "xian": "13", 
        "name": "渔洋镇", 
        "level": 3
    }, 
    {
        "code": "429514", 
        "sheng": "42", 
        "di": "95", 
        "xian": "14", 
        "name": "龙湾镇", 
        "level": 3
    }, 
    {
        "code": "429515", 
        "sheng": "42", 
        "di": "95", 
        "xian": "15", 
        "name": "浩口镇", 
        "level": 3
    }, 
    {
        "code": "429516", 
        "sheng": "42", 
        "di": "95", 
        "xian": "16", 
        "name": "积玉口镇", 
        "level": 3
    }, 
    {
        "code": "429517", 
        "sheng": "42", 
        "di": "95", 
        "xian": "17", 
        "name": "张金镇", 
        "level": 3
    }, 
    {
        "code": "429518", 
        "sheng": "42", 
        "di": "95", 
        "xian": "18", 
        "name": "白鹭湖管理区", 
        "level": 3
    }, 
    {
        "code": "429519", 
        "sheng": "42", 
        "di": "95", 
        "xian": "19", 
        "name": "总口管理区", 
        "level": 3
    }, 
    {
        "code": "429520", 
        "sheng": "42", 
        "di": "95", 
        "xian": "20", 
        "name": "熊口农场管理区", 
        "level": 3
    }, 
    {
        "code": "429521", 
        "sheng": "42", 
        "di": "95", 
        "xian": "21", 
        "name": "运粮湖管理区", 
        "level": 3
    }, 
    {
        "code": "429522", 
        "sheng": "42", 
        "di": "95", 
        "xian": "22", 
        "name": "后湖管理区", 
        "level": 3
    }, 
    {
        "code": "429523", 
        "sheng": "42", 
        "di": "95", 
        "xian": "23", 
        "name": "周矶管理区", 
        "level": 3
    }, 
    {
        "code": "429524", 
        "sheng": "42", 
        "di": "95", 
        "xian": "24", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "429601", 
        "sheng": "42", 
        "di": "96", 
        "xian": "01", 
        "name": "竟陵街道", 
        "level": 3
    }, 
    {
        "code": "429602", 
        "sheng": "42", 
        "di": "96", 
        "xian": "02", 
        "name": "杨林街道", 
        "level": 3
    }, 
    {
        "code": "429603", 
        "sheng": "42", 
        "di": "96", 
        "xian": "03", 
        "name": "佛子山镇", 
        "level": 3
    }, 
    {
        "code": "429604", 
        "sheng": "42", 
        "di": "96", 
        "xian": "04", 
        "name": "多宝镇", 
        "level": 3
    }, 
    {
        "code": "429605", 
        "sheng": "42", 
        "di": "96", 
        "xian": "05", 
        "name": "拖市镇", 
        "level": 3
    }, 
    {
        "code": "429606", 
        "sheng": "42", 
        "di": "96", 
        "xian": "06", 
        "name": "张港镇", 
        "level": 3
    }, 
    {
        "code": "429607", 
        "sheng": "42", 
        "di": "96", 
        "xian": "07", 
        "name": "蒋场镇", 
        "level": 3
    }, 
    {
        "code": "429608", 
        "sheng": "42", 
        "di": "96", 
        "xian": "08", 
        "name": "汪场镇", 
        "level": 3
    }, 
    {
        "code": "429609", 
        "sheng": "42", 
        "di": "96", 
        "xian": "09", 
        "name": "渔薪镇", 
        "level": 3
    }, 
    {
        "code": "429610", 
        "sheng": "42", 
        "di": "96", 
        "xian": "10", 
        "name": "黄潭镇", 
        "level": 3
    }, 
    {
        "code": "429611", 
        "sheng": "42", 
        "di": "96", 
        "xian": "11", 
        "name": "岳口镇", 
        "level": 3
    }, 
    {
        "code": "429612", 
        "sheng": "42", 
        "di": "96", 
        "xian": "12", 
        "name": "横林镇", 
        "level": 3
    }, 
    {
        "code": "429613", 
        "sheng": "42", 
        "di": "96", 
        "xian": "13", 
        "name": "彭市镇", 
        "level": 3
    }, 
    {
        "code": "429614", 
        "sheng": "42", 
        "di": "96", 
        "xian": "14", 
        "name": "麻洋镇", 
        "level": 3
    }, 
    {
        "code": "429615", 
        "sheng": "42", 
        "di": "96", 
        "xian": "15", 
        "name": "多祥镇", 
        "level": 3
    }, 
    {
        "code": "429616", 
        "sheng": "42", 
        "di": "96", 
        "xian": "16", 
        "name": "干驿镇", 
        "level": 3
    }, 
    {
        "code": "429617", 
        "sheng": "42", 
        "di": "96", 
        "xian": "17", 
        "name": "马湾镇", 
        "level": 3
    }, 
    {
        "code": "429618", 
        "sheng": "42", 
        "di": "96", 
        "xian": "18", 
        "name": "卢市镇", 
        "level": 3
    }, 
    {
        "code": "429619", 
        "sheng": "42", 
        "di": "96", 
        "xian": "19", 
        "name": "小板镇", 
        "level": 3
    }, 
    {
        "code": "429620", 
        "sheng": "42", 
        "di": "96", 
        "xian": "20", 
        "name": "九真镇", 
        "level": 3
    }, 
    {
        "code": "429621", 
        "sheng": "42", 
        "di": "96", 
        "xian": "21", 
        "name": "皂市镇", 
        "level": 3
    }, 
    {
        "code": "429622", 
        "sheng": "42", 
        "di": "96", 
        "xian": "22", 
        "name": "胡市镇", 
        "level": 3
    }, 
    {
        "code": "429623", 
        "sheng": "42", 
        "di": "96", 
        "xian": "23", 
        "name": "石河镇", 
        "level": 3
    }, 
    {
        "code": "429624", 
        "sheng": "42", 
        "di": "96", 
        "xian": "24", 
        "name": "净潭乡", 
        "level": 3
    }, 
    {
        "code": "429625", 
        "sheng": "42", 
        "di": "96", 
        "xian": "25", 
        "name": "蒋湖农场", 
        "level": 3
    }, 
    {
        "code": "429626", 
        "sheng": "42", 
        "di": "96", 
        "xian": "26", 
        "name": "白茅湖农场", 
        "level": 3
    }, 
    {
        "code": "429627", 
        "sheng": "42", 
        "di": "96", 
        "xian": "27", 
        "name": "沉湖林业科技示范区", 
        "level": 3
    }, 
    {
        "code": "429628", 
        "sheng": "42", 
        "di": "96", 
        "xian": "28", 
        "name": "天门工业园", 
        "level": 3
    }, 
    {
        "code": "429629", 
        "sheng": "42", 
        "di": "96", 
        "xian": "29", 
        "name": "侨乡街道开发区", 
        "level": 3
    }, 
    {
        "code": "430000", 
        "sheng": "43", 
        "di": "00", 
        "xian": "00", 
        "name": "湖南省", 
        "level": 1
    }, 
    {
        "code": "430100", 
        "sheng": "43", 
        "di": "01", 
        "xian": "00", 
        "name": "长沙市", 
        "level": 2
    }, 
    {
        "code": "430102", 
        "sheng": "43", 
        "di": "01", 
        "xian": "02", 
        "name": "芙蓉区", 
        "level": 3
    }, 
    {
        "code": "430103", 
        "sheng": "43", 
        "di": "01", 
        "xian": "03", 
        "name": "天心区", 
        "level": 3
    }, 
    {
        "code": "430104", 
        "sheng": "43", 
        "di": "01", 
        "xian": "04", 
        "name": "岳麓区", 
        "level": 3
    }, 
    {
        "code": "430105", 
        "sheng": "43", 
        "di": "01", 
        "xian": "05", 
        "name": "开福区", 
        "level": 3
    }, 
    {
        "code": "430111", 
        "sheng": "43", 
        "di": "01", 
        "xian": "11", 
        "name": "雨花区", 
        "level": 3
    }, 
    {
        "code": "430112", 
        "sheng": "43", 
        "di": "01", 
        "xian": "12", 
        "name": "望城区", 
        "level": 3
    }, 
    {
        "code": "430121", 
        "sheng": "43", 
        "di": "01", 
        "xian": "21", 
        "name": "长沙县", 
        "level": 3
    }, 
    {
        "code": "430124", 
        "sheng": "43", 
        "di": "01", 
        "xian": "24", 
        "name": "宁乡县", 
        "level": 3
    }, 
    {
        "code": "430181", 
        "sheng": "43", 
        "di": "01", 
        "xian": "81", 
        "name": "浏阳市", 
        "level": 3
    }, 
    {
        "code": "430182", 
        "sheng": "43", 
        "di": "01", 
        "xian": "82", 
        "name": "湘江新区", 
        "level": 3
    }, 
    {
        "code": "430200", 
        "sheng": "43", 
        "di": "02", 
        "xian": "00", 
        "name": "株洲市", 
        "level": 2
    }, 
    {
        "code": "430202", 
        "sheng": "43", 
        "di": "02", 
        "xian": "02", 
        "name": "荷塘区", 
        "level": 3
    }, 
    {
        "code": "430203", 
        "sheng": "43", 
        "di": "02", 
        "xian": "03", 
        "name": "芦淞区", 
        "level": 3
    }, 
    {
        "code": "430204", 
        "sheng": "43", 
        "di": "02", 
        "xian": "04", 
        "name": "石峰区", 
        "level": 3
    }, 
    {
        "code": "430211", 
        "sheng": "43", 
        "di": "02", 
        "xian": "11", 
        "name": "天元区", 
        "level": 3
    }, 
    {
        "code": "430221", 
        "sheng": "43", 
        "di": "02", 
        "xian": "21", 
        "name": "株洲县", 
        "level": 3
    }, 
    {
        "code": "430223", 
        "sheng": "43", 
        "di": "02", 
        "xian": "23", 
        "name": "攸县", 
        "level": 3
    }, 
    {
        "code": "430224", 
        "sheng": "43", 
        "di": "02", 
        "xian": "24", 
        "name": "茶陵县", 
        "level": 3
    }, 
    {
        "code": "430225", 
        "sheng": "43", 
        "di": "02", 
        "xian": "25", 
        "name": "炎陵县", 
        "level": 3
    }, 
    {
        "code": "430281", 
        "sheng": "43", 
        "di": "02", 
        "xian": "81", 
        "name": "醴陵市", 
        "level": 3
    }, 
    {
        "code": "430300", 
        "sheng": "43", 
        "di": "03", 
        "xian": "00", 
        "name": "湘潭市", 
        "level": 2
    }, 
    {
        "code": "430302", 
        "sheng": "43", 
        "di": "03", 
        "xian": "02", 
        "name": "雨湖区", 
        "level": 3
    }, 
    {
        "code": "430304", 
        "sheng": "43", 
        "di": "03", 
        "xian": "04", 
        "name": "岳塘区", 
        "level": 3
    }, 
    {
        "code": "430321", 
        "sheng": "43", 
        "di": "03", 
        "xian": "21", 
        "name": "湘潭县", 
        "level": 3
    }, 
    {
        "code": "430381", 
        "sheng": "43", 
        "di": "03", 
        "xian": "81", 
        "name": "湘乡市", 
        "level": 3
    }, 
    {
        "code": "430382", 
        "sheng": "43", 
        "di": "03", 
        "xian": "82", 
        "name": "韶山市", 
        "level": 3
    }, 
    {
        "code": "430383", 
        "sheng": "43", 
        "di": "03", 
        "xian": "83", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "430400", 
        "sheng": "43", 
        "di": "04", 
        "xian": "00", 
        "name": "衡阳市", 
        "level": 2
    }, 
    {
        "code": "430405", 
        "sheng": "43", 
        "di": "04", 
        "xian": "05", 
        "name": "珠晖区", 
        "level": 3
    }, 
    {
        "code": "430406", 
        "sheng": "43", 
        "di": "04", 
        "xian": "06", 
        "name": "雁峰区", 
        "level": 3
    }, 
    {
        "code": "430407", 
        "sheng": "43", 
        "di": "04", 
        "xian": "07", 
        "name": "石鼓区", 
        "level": 3
    }, 
    {
        "code": "430408", 
        "sheng": "43", 
        "di": "04", 
        "xian": "08", 
        "name": "蒸湘区", 
        "level": 3
    }, 
    {
        "code": "430412", 
        "sheng": "43", 
        "di": "04", 
        "xian": "12", 
        "name": "南岳区", 
        "level": 3
    }, 
    {
        "code": "430421", 
        "sheng": "43", 
        "di": "04", 
        "xian": "21", 
        "name": "衡阳县", 
        "level": 3
    }, 
    {
        "code": "430422", 
        "sheng": "43", 
        "di": "04", 
        "xian": "22", 
        "name": "衡南县", 
        "level": 3
    }, 
    {
        "code": "430423", 
        "sheng": "43", 
        "di": "04", 
        "xian": "23", 
        "name": "衡山县", 
        "level": 3
    }, 
    {
        "code": "430424", 
        "sheng": "43", 
        "di": "04", 
        "xian": "24", 
        "name": "衡东县", 
        "level": 3
    }, 
    {
        "code": "430426", 
        "sheng": "43", 
        "di": "04", 
        "xian": "26", 
        "name": "祁东县", 
        "level": 3
    }, 
    {
        "code": "430481", 
        "sheng": "43", 
        "di": "04", 
        "xian": "81", 
        "name": "耒阳市", 
        "level": 3
    }, 
    {
        "code": "430482", 
        "sheng": "43", 
        "di": "04", 
        "xian": "82", 
        "name": "常宁市", 
        "level": 3
    }, 
    {
        "code": "430500", 
        "sheng": "43", 
        "di": "05", 
        "xian": "00", 
        "name": "邵阳市", 
        "level": 2
    }, 
    {
        "code": "430502", 
        "sheng": "43", 
        "di": "05", 
        "xian": "02", 
        "name": "双清区", 
        "level": 3
    }, 
    {
        "code": "430503", 
        "sheng": "43", 
        "di": "05", 
        "xian": "03", 
        "name": "大祥区", 
        "level": 3
    }, 
    {
        "code": "430511", 
        "sheng": "43", 
        "di": "05", 
        "xian": "11", 
        "name": "北塔区", 
        "level": 3
    }, 
    {
        "code": "430521", 
        "sheng": "43", 
        "di": "05", 
        "xian": "21", 
        "name": "邵东县", 
        "level": 3
    }, 
    {
        "code": "430522", 
        "sheng": "43", 
        "di": "05", 
        "xian": "22", 
        "name": "新邵县", 
        "level": 3
    }, 
    {
        "code": "430523", 
        "sheng": "43", 
        "di": "05", 
        "xian": "23", 
        "name": "邵阳县", 
        "level": 3
    }, 
    {
        "code": "430524", 
        "sheng": "43", 
        "di": "05", 
        "xian": "24", 
        "name": "隆回县", 
        "level": 3
    }, 
    {
        "code": "430525", 
        "sheng": "43", 
        "di": "05", 
        "xian": "25", 
        "name": "洞口县", 
        "level": 3
    }, 
    {
        "code": "430527", 
        "sheng": "43", 
        "di": "05", 
        "xian": "27", 
        "name": "绥宁县", 
        "level": 3
    }, 
    {
        "code": "430528", 
        "sheng": "43", 
        "di": "05", 
        "xian": "28", 
        "name": "新宁县", 
        "level": 3
    }, 
    {
        "code": "430529", 
        "sheng": "43", 
        "di": "05", 
        "xian": "29", 
        "name": "城步苗族自治县", 
        "level": 3
    }, 
    {
        "code": "430581", 
        "sheng": "43", 
        "di": "05", 
        "xian": "81", 
        "name": "武冈市", 
        "level": 3
    }, 
    {
        "code": "430600", 
        "sheng": "43", 
        "di": "06", 
        "xian": "00", 
        "name": "岳阳市", 
        "level": 2
    }, 
    {
        "code": "430602", 
        "sheng": "43", 
        "di": "06", 
        "xian": "02", 
        "name": "岳阳楼区", 
        "level": 3
    }, 
    {
        "code": "430603", 
        "sheng": "43", 
        "di": "06", 
        "xian": "03", 
        "name": "云溪区", 
        "level": 3
    }, 
    {
        "code": "430611", 
        "sheng": "43", 
        "di": "06", 
        "xian": "11", 
        "name": "君山区", 
        "level": 3
    }, 
    {
        "code": "430621", 
        "sheng": "43", 
        "di": "06", 
        "xian": "21", 
        "name": "岳阳县", 
        "level": 3
    }, 
    {
        "code": "430623", 
        "sheng": "43", 
        "di": "06", 
        "xian": "23", 
        "name": "华容县", 
        "level": 3
    }, 
    {
        "code": "430624", 
        "sheng": "43", 
        "di": "06", 
        "xian": "24", 
        "name": "湘阴县", 
        "level": 3
    }, 
    {
        "code": "430626", 
        "sheng": "43", 
        "di": "06", 
        "xian": "26", 
        "name": "平江县", 
        "level": 3
    }, 
    {
        "code": "430681", 
        "sheng": "43", 
        "di": "06", 
        "xian": "81", 
        "name": "汨罗市", 
        "level": 3
    }, 
    {
        "code": "430682", 
        "sheng": "43", 
        "di": "06", 
        "xian": "82", 
        "name": "临湘市", 
        "level": 3
    }, 
    {
        "code": "430700", 
        "sheng": "43", 
        "di": "07", 
        "xian": "00", 
        "name": "常德市", 
        "level": 2
    }, 
    {
        "code": "430702", 
        "sheng": "43", 
        "di": "07", 
        "xian": "02", 
        "name": "武陵区", 
        "level": 3
    }, 
    {
        "code": "430703", 
        "sheng": "43", 
        "di": "07", 
        "xian": "03", 
        "name": "鼎城区", 
        "level": 3
    }, 
    {
        "code": "430721", 
        "sheng": "43", 
        "di": "07", 
        "xian": "21", 
        "name": "安乡县", 
        "level": 3
    }, 
    {
        "code": "430722", 
        "sheng": "43", 
        "di": "07", 
        "xian": "22", 
        "name": "汉寿县", 
        "level": 3
    }, 
    {
        "code": "430723", 
        "sheng": "43", 
        "di": "07", 
        "xian": "23", 
        "name": "澧县", 
        "level": 3
    }, 
    {
        "code": "430724", 
        "sheng": "43", 
        "di": "07", 
        "xian": "24", 
        "name": "临澧县", 
        "level": 3
    }, 
    {
        "code": "430725", 
        "sheng": "43", 
        "di": "07", 
        "xian": "25", 
        "name": "桃源县", 
        "level": 3
    }, 
    {
        "code": "430726", 
        "sheng": "43", 
        "di": "07", 
        "xian": "26", 
        "name": "石门县", 
        "level": 3
    }, 
    {
        "code": "430781", 
        "sheng": "43", 
        "di": "07", 
        "xian": "81", 
        "name": "津市市", 
        "level": 3
    }, 
    {
        "code": "430800", 
        "sheng": "43", 
        "di": "08", 
        "xian": "00", 
        "name": "张家界市", 
        "level": 2
    }, 
    {
        "code": "430802", 
        "sheng": "43", 
        "di": "08", 
        "xian": "02", 
        "name": "永定区", 
        "level": 3
    }, 
    {
        "code": "430811", 
        "sheng": "43", 
        "di": "08", 
        "xian": "11", 
        "name": "武陵源区", 
        "level": 3
    }, 
    {
        "code": "430821", 
        "sheng": "43", 
        "di": "08", 
        "xian": "21", 
        "name": "慈利县", 
        "level": 3
    }, 
    {
        "code": "430822", 
        "sheng": "43", 
        "di": "08", 
        "xian": "22", 
        "name": "桑植县", 
        "level": 3
    }, 
    {
        "code": "430900", 
        "sheng": "43", 
        "di": "09", 
        "xian": "00", 
        "name": "益阳市", 
        "level": 2
    }, 
    {
        "code": "430902", 
        "sheng": "43", 
        "di": "09", 
        "xian": "02", 
        "name": "资阳区", 
        "level": 3
    }, 
    {
        "code": "430903", 
        "sheng": "43", 
        "di": "09", 
        "xian": "03", 
        "name": "赫山区", 
        "level": 3
    }, 
    {
        "code": "430921", 
        "sheng": "43", 
        "di": "09", 
        "xian": "21", 
        "name": "南县", 
        "level": 3
    }, 
    {
        "code": "430922", 
        "sheng": "43", 
        "di": "09", 
        "xian": "22", 
        "name": "桃江县", 
        "level": 3
    }, 
    {
        "code": "430923", 
        "sheng": "43", 
        "di": "09", 
        "xian": "23", 
        "name": "安化县", 
        "level": 3
    }, 
    {
        "code": "430981", 
        "sheng": "43", 
        "di": "09", 
        "xian": "81", 
        "name": "沅江市", 
        "level": 3
    }, 
    {
        "code": "431000", 
        "sheng": "43", 
        "di": "10", 
        "xian": "00", 
        "name": "郴州市", 
        "level": 2
    }, 
    {
        "code": "431002", 
        "sheng": "43", 
        "di": "10", 
        "xian": "02", 
        "name": "北湖区", 
        "level": 3
    }, 
    {
        "code": "431003", 
        "sheng": "43", 
        "di": "10", 
        "xian": "03", 
        "name": "苏仙区", 
        "level": 3
    }, 
    {
        "code": "431021", 
        "sheng": "43", 
        "di": "10", 
        "xian": "21", 
        "name": "桂阳县", 
        "level": 3
    }, 
    {
        "code": "431022", 
        "sheng": "43", 
        "di": "10", 
        "xian": "22", 
        "name": "宜章县", 
        "level": 3
    }, 
    {
        "code": "431023", 
        "sheng": "43", 
        "di": "10", 
        "xian": "23", 
        "name": "永兴县", 
        "level": 3
    }, 
    {
        "code": "431024", 
        "sheng": "43", 
        "di": "10", 
        "xian": "24", 
        "name": "嘉禾县", 
        "level": 3
    }, 
    {
        "code": "431025", 
        "sheng": "43", 
        "di": "10", 
        "xian": "25", 
        "name": "临武县", 
        "level": 3
    }, 
    {
        "code": "431026", 
        "sheng": "43", 
        "di": "10", 
        "xian": "26", 
        "name": "汝城县", 
        "level": 3
    }, 
    {
        "code": "431027", 
        "sheng": "43", 
        "di": "10", 
        "xian": "27", 
        "name": "桂东县", 
        "level": 3
    }, 
    {
        "code": "431028", 
        "sheng": "43", 
        "di": "10", 
        "xian": "28", 
        "name": "安仁县", 
        "level": 3
    }, 
    {
        "code": "431081", 
        "sheng": "43", 
        "di": "10", 
        "xian": "81", 
        "name": "资兴市", 
        "level": 3
    }, 
    {
        "code": "431100", 
        "sheng": "43", 
        "di": "11", 
        "xian": "00", 
        "name": "永州市", 
        "level": 2
    }, 
    {
        "code": "431102", 
        "sheng": "43", 
        "di": "11", 
        "xian": "02", 
        "name": "零陵区", 
        "level": 3
    }, 
    {
        "code": "431103", 
        "sheng": "43", 
        "di": "11", 
        "xian": "03", 
        "name": "冷水滩区", 
        "level": 3
    }, 
    {
        "code": "431121", 
        "sheng": "43", 
        "di": "11", 
        "xian": "21", 
        "name": "祁阳县", 
        "level": 3
    }, 
    {
        "code": "431122", 
        "sheng": "43", 
        "di": "11", 
        "xian": "22", 
        "name": "东安县", 
        "level": 3
    }, 
    {
        "code": "431123", 
        "sheng": "43", 
        "di": "11", 
        "xian": "23", 
        "name": "双牌县", 
        "level": 3
    }, 
    {
        "code": "431124", 
        "sheng": "43", 
        "di": "11", 
        "xian": "24", 
        "name": "道县", 
        "level": 3
    }, 
    {
        "code": "431125", 
        "sheng": "43", 
        "di": "11", 
        "xian": "25", 
        "name": "江永县", 
        "level": 3
    }, 
    {
        "code": "431126", 
        "sheng": "43", 
        "di": "11", 
        "xian": "26", 
        "name": "宁远县", 
        "level": 3
    }, 
    {
        "code": "431127", 
        "sheng": "43", 
        "di": "11", 
        "xian": "27", 
        "name": "蓝山县", 
        "level": 3
    }, 
    {
        "code": "431128", 
        "sheng": "43", 
        "di": "11", 
        "xian": "28", 
        "name": "新田县", 
        "level": 3
    }, 
    {
        "code": "431129", 
        "sheng": "43", 
        "di": "11", 
        "xian": "29", 
        "name": "江华瑶族自治县", 
        "level": 3
    }, 
    {
        "code": "431200", 
        "sheng": "43", 
        "di": "12", 
        "xian": "00", 
        "name": "怀化市", 
        "level": 2
    }, 
    {
        "code": "431202", 
        "sheng": "43", 
        "di": "12", 
        "xian": "02", 
        "name": "鹤城区", 
        "level": 3
    }, 
    {
        "code": "431221", 
        "sheng": "43", 
        "di": "12", 
        "xian": "21", 
        "name": "中方县", 
        "level": 3
    }, 
    {
        "code": "431222", 
        "sheng": "43", 
        "di": "12", 
        "xian": "22", 
        "name": "沅陵县", 
        "level": 3
    }, 
    {
        "code": "431223", 
        "sheng": "43", 
        "di": "12", 
        "xian": "23", 
        "name": "辰溪县", 
        "level": 3
    }, 
    {
        "code": "431224", 
        "sheng": "43", 
        "di": "12", 
        "xian": "24", 
        "name": "溆浦县", 
        "level": 3
    }, 
    {
        "code": "431225", 
        "sheng": "43", 
        "di": "12", 
        "xian": "25", 
        "name": "会同县", 
        "level": 3
    }, 
    {
        "code": "431226", 
        "sheng": "43", 
        "di": "12", 
        "xian": "26", 
        "name": "麻阳苗族自治县", 
        "level": 3
    }, 
    {
        "code": "431227", 
        "sheng": "43", 
        "di": "12", 
        "xian": "27", 
        "name": "新晃侗族自治县", 
        "level": 3
    }, 
    {
        "code": "431228", 
        "sheng": "43", 
        "di": "12", 
        "xian": "28", 
        "name": "芷江侗族自治县", 
        "level": 3
    }, 
    {
        "code": "431229", 
        "sheng": "43", 
        "di": "12", 
        "xian": "29", 
        "name": "靖州苗族侗族自治县", 
        "level": 3
    }, 
    {
        "code": "431230", 
        "sheng": "43", 
        "di": "12", 
        "xian": "30", 
        "name": "通道侗族自治县", 
        "level": 3
    }, 
    {
        "code": "431281", 
        "sheng": "43", 
        "di": "12", 
        "xian": "81", 
        "name": "洪江市", 
        "level": 3
    }, 
    {
        "code": "431300", 
        "sheng": "43", 
        "di": "13", 
        "xian": "00", 
        "name": "娄底市", 
        "level": 2
    }, 
    {
        "code": "431302", 
        "sheng": "43", 
        "di": "13", 
        "xian": "02", 
        "name": "娄星区", 
        "level": 3
    }, 
    {
        "code": "431321", 
        "sheng": "43", 
        "di": "13", 
        "xian": "21", 
        "name": "双峰县", 
        "level": 3
    }, 
    {
        "code": "431322", 
        "sheng": "43", 
        "di": "13", 
        "xian": "22", 
        "name": "新化县", 
        "level": 3
    }, 
    {
        "code": "431381", 
        "sheng": "43", 
        "di": "13", 
        "xian": "81", 
        "name": "冷水江市", 
        "level": 3
    }, 
    {
        "code": "431382", 
        "sheng": "43", 
        "di": "13", 
        "xian": "82", 
        "name": "涟源市", 
        "level": 3
    }, 
    {
        "code": "433100", 
        "sheng": "43", 
        "di": "31", 
        "xian": "00", 
        "name": "湘西土家族苗族自治州", 
        "level": 2
    }, 
    {
        "code": "433101", 
        "sheng": "43", 
        "di": "31", 
        "xian": "01", 
        "name": "吉首市", 
        "level": 3
    }, 
    {
        "code": "433122", 
        "sheng": "43", 
        "di": "31", 
        "xian": "22", 
        "name": "泸溪县", 
        "level": 3
    }, 
    {
        "code": "433123", 
        "sheng": "43", 
        "di": "31", 
        "xian": "23", 
        "name": "凤凰县", 
        "level": 3
    }, 
    {
        "code": "433124", 
        "sheng": "43", 
        "di": "31", 
        "xian": "24", 
        "name": "花垣县", 
        "level": 3
    }, 
    {
        "code": "433125", 
        "sheng": "43", 
        "di": "31", 
        "xian": "25", 
        "name": "保靖县", 
        "level": 3
    }, 
    {
        "code": "433126", 
        "sheng": "43", 
        "di": "31", 
        "xian": "26", 
        "name": "古丈县", 
        "level": 3
    }, 
    {
        "code": "433127", 
        "sheng": "43", 
        "di": "31", 
        "xian": "27", 
        "name": "永顺县", 
        "level": 3
    }, 
    {
        "code": "433130", 
        "sheng": "43", 
        "di": "31", 
        "xian": "30", 
        "name": "龙山县", 
        "level": 3
    }, 
    {
        "code": "440000", 
        "sheng": "44", 
        "di": "00", 
        "xian": "00", 
        "name": "广东省", 
        "level": 1
    }, 
    {
        "code": "440100", 
        "sheng": "44", 
        "di": "01", 
        "xian": "00", 
        "name": "广州市", 
        "level": 2
    }, 
    {
        "code": "440103", 
        "sheng": "44", 
        "di": "01", 
        "xian": "03", 
        "name": "荔湾区", 
        "level": 3
    }, 
    {
        "code": "440104", 
        "sheng": "44", 
        "di": "01", 
        "xian": "04", 
        "name": "越秀区", 
        "level": 3
    }, 
    {
        "code": "440105", 
        "sheng": "44", 
        "di": "01", 
        "xian": "05", 
        "name": "海珠区", 
        "level": 3
    }, 
    {
        "code": "440106", 
        "sheng": "44", 
        "di": "01", 
        "xian": "06", 
        "name": "天河区", 
        "level": 3
    }, 
    {
        "code": "440111", 
        "sheng": "44", 
        "di": "01", 
        "xian": "11", 
        "name": "白云区", 
        "level": 3
    }, 
    {
        "code": "440112", 
        "sheng": "44", 
        "di": "01", 
        "xian": "12", 
        "name": "黄埔区", 
        "level": 3
    }, 
    {
        "code": "440113", 
        "sheng": "44", 
        "di": "01", 
        "xian": "13", 
        "name": "番禺区", 
        "level": 3
    }, 
    {
        "code": "440114", 
        "sheng": "44", 
        "di": "01", 
        "xian": "14", 
        "name": "花都区", 
        "level": 3
    }, 
    {
        "code": "440115", 
        "sheng": "44", 
        "di": "01", 
        "xian": "15", 
        "name": "南沙新区", 
        "level": 3
    }, 
    {
        "code": "440117", 
        "sheng": "44", 
        "di": "01", 
        "xian": "17", 
        "name": "从化区", 
        "level": 3
    }, 
    {
        "code": "440118", 
        "sheng": "44", 
        "di": "01", 
        "xian": "18", 
        "name": "增城区", 
        "level": 3
    }, 
    {
        "code": "440200", 
        "sheng": "44", 
        "di": "02", 
        "xian": "00", 
        "name": "韶关市", 
        "level": 2
    }, 
    {
        "code": "440203", 
        "sheng": "44", 
        "di": "02", 
        "xian": "03", 
        "name": "武江区", 
        "level": 3
    }, 
    {
        "code": "440204", 
        "sheng": "44", 
        "di": "02", 
        "xian": "04", 
        "name": "浈江区", 
        "level": 3
    }, 
    {
        "code": "440205", 
        "sheng": "44", 
        "di": "02", 
        "xian": "05", 
        "name": "曲江区", 
        "level": 3
    }, 
    {
        "code": "440222", 
        "sheng": "44", 
        "di": "02", 
        "xian": "22", 
        "name": "始兴县", 
        "level": 3
    }, 
    {
        "code": "440224", 
        "sheng": "44", 
        "di": "02", 
        "xian": "24", 
        "name": "仁化县", 
        "level": 3
    }, 
    {
        "code": "440229", 
        "sheng": "44", 
        "di": "02", 
        "xian": "29", 
        "name": "翁源县", 
        "level": 3
    }, 
    {
        "code": "440232", 
        "sheng": "44", 
        "di": "02", 
        "xian": "32", 
        "name": "乳源瑶族自治县", 
        "level": 3
    }, 
    {
        "code": "440233", 
        "sheng": "44", 
        "di": "02", 
        "xian": "33", 
        "name": "新丰县", 
        "level": 3
    }, 
    {
        "code": "440281", 
        "sheng": "44", 
        "di": "02", 
        "xian": "81", 
        "name": "乐昌市", 
        "level": 3
    }, 
    {
        "code": "440282", 
        "sheng": "44", 
        "di": "02", 
        "xian": "82", 
        "name": "南雄市", 
        "level": 3
    }, 
    {
        "code": "440300", 
        "sheng": "44", 
        "di": "03", 
        "xian": "00", 
        "name": "深圳市", 
        "level": 2
    }, 
    {
        "code": "440303", 
        "sheng": "44", 
        "di": "03", 
        "xian": "03", 
        "name": "罗湖区", 
        "level": 3
    }, 
    {
        "code": "440304", 
        "sheng": "44", 
        "di": "03", 
        "xian": "04", 
        "name": "福田区", 
        "level": 3
    }, 
    {
        "code": "440305", 
        "sheng": "44", 
        "di": "03", 
        "xian": "05", 
        "name": "南山区", 
        "level": 3
    }, 
    {
        "code": "440306", 
        "sheng": "44", 
        "di": "03", 
        "xian": "06", 
        "name": "宝安区", 
        "level": 3
    }, 
    {
        "code": "440307", 
        "sheng": "44", 
        "di": "03", 
        "xian": "07", 
        "name": "龙岗区", 
        "level": 3
    }, 
    {
        "code": "440308", 
        "sheng": "44", 
        "di": "03", 
        "xian": "08", 
        "name": "盐田区", 
        "level": 3
    }, 
    {
        "code": "440309", 
        "sheng": "44", 
        "di": "03", 
        "xian": "09", 
        "name": "光明新区", 
        "level": 3
    }, 
    {
        "code": "440310", 
        "sheng": "44", 
        "di": "03", 
        "xian": "10", 
        "name": "坪山新区", 
        "level": 3
    }, 
    {
        "code": "440311", 
        "sheng": "44", 
        "di": "03", 
        "xian": "11", 
        "name": "大鹏新区", 
        "level": 3
    }, 
    {
        "code": "440312", 
        "sheng": "44", 
        "di": "03", 
        "xian": "12", 
        "name": "龙华新区", 
        "level": 3
    }, 
    {
        "code": "440400", 
        "sheng": "44", 
        "di": "04", 
        "xian": "00", 
        "name": "珠海市", 
        "level": 2
    }, 
    {
        "code": "440402", 
        "sheng": "44", 
        "di": "04", 
        "xian": "02", 
        "name": "香洲区", 
        "level": 3
    }, 
    {
        "code": "440403", 
        "sheng": "44", 
        "di": "04", 
        "xian": "03", 
        "name": "斗门区", 
        "level": 3
    }, 
    {
        "code": "440404", 
        "sheng": "44", 
        "di": "04", 
        "xian": "04", 
        "name": "金湾区", 
        "level": 3
    }, 
    {
        "code": "440405", 
        "sheng": "44", 
        "di": "04", 
        "xian": "05", 
        "name": "横琴新区", 
        "level": 3
    }, 
    {
        "code": "440406", 
        "sheng": "44", 
        "di": "04", 
        "xian": "06", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "440500", 
        "sheng": "44", 
        "di": "05", 
        "xian": "00", 
        "name": "汕头市", 
        "level": 2
    }, 
    {
        "code": "440507", 
        "sheng": "44", 
        "di": "05", 
        "xian": "07", 
        "name": "龙湖区", 
        "level": 3
    }, 
    {
        "code": "440511", 
        "sheng": "44", 
        "di": "05", 
        "xian": "11", 
        "name": "金平区", 
        "level": 3
    }, 
    {
        "code": "440512", 
        "sheng": "44", 
        "di": "05", 
        "xian": "12", 
        "name": "濠江区", 
        "level": 3
    }, 
    {
        "code": "440513", 
        "sheng": "44", 
        "di": "05", 
        "xian": "13", 
        "name": "潮阳区", 
        "level": 3
    }, 
    {
        "code": "440514", 
        "sheng": "44", 
        "di": "05", 
        "xian": "14", 
        "name": "潮南区", 
        "level": 3
    }, 
    {
        "code": "440515", 
        "sheng": "44", 
        "di": "05", 
        "xian": "15", 
        "name": "澄海区", 
        "level": 3
    }, 
    {
        "code": "440523", 
        "sheng": "44", 
        "di": "05", 
        "xian": "23", 
        "name": "南澳县", 
        "level": 3
    }, 
    {
        "code": "440600", 
        "sheng": "44", 
        "di": "06", 
        "xian": "00", 
        "name": "佛山市", 
        "level": 2
    }, 
    {
        "code": "440604", 
        "sheng": "44", 
        "di": "06", 
        "xian": "04", 
        "name": "禅城区", 
        "level": 3
    }, 
    {
        "code": "440605", 
        "sheng": "44", 
        "di": "06", 
        "xian": "05", 
        "name": "南海区", 
        "level": 3
    }, 
    {
        "code": "440606", 
        "sheng": "44", 
        "di": "06", 
        "xian": "06", 
        "name": "顺德区", 
        "level": 3
    }, 
    {
        "code": "440607", 
        "sheng": "44", 
        "di": "06", 
        "xian": "07", 
        "name": "三水区", 
        "level": 3
    }, 
    {
        "code": "440608", 
        "sheng": "44", 
        "di": "06", 
        "xian": "08", 
        "name": "高明区", 
        "level": 3
    }, 
    {
        "code": "440700", 
        "sheng": "44", 
        "di": "07", 
        "xian": "00", 
        "name": "江门市", 
        "level": 2
    }, 
    {
        "code": "440703", 
        "sheng": "44", 
        "di": "07", 
        "xian": "03", 
        "name": "蓬江区", 
        "level": 3
    }, 
    {
        "code": "440704", 
        "sheng": "44", 
        "di": "07", 
        "xian": "04", 
        "name": "江海区", 
        "level": 3
    }, 
    {
        "code": "440705", 
        "sheng": "44", 
        "di": "07", 
        "xian": "05", 
        "name": "新会区", 
        "level": 3
    }, 
    {
        "code": "440781", 
        "sheng": "44", 
        "di": "07", 
        "xian": "81", 
        "name": "台山市", 
        "level": 3
    }, 
    {
        "code": "440783", 
        "sheng": "44", 
        "di": "07", 
        "xian": "83", 
        "name": "开平市", 
        "level": 3
    }, 
    {
        "code": "440784", 
        "sheng": "44", 
        "di": "07", 
        "xian": "84", 
        "name": "鹤山市", 
        "level": 3
    }, 
    {
        "code": "440785", 
        "sheng": "44", 
        "di": "07", 
        "xian": "85", 
        "name": "恩平市", 
        "level": 3
    }, 
    {
        "code": "440800", 
        "sheng": "44", 
        "di": "08", 
        "xian": "00", 
        "name": "湛江市", 
        "level": 2
    }, 
    {
        "code": "440802", 
        "sheng": "44", 
        "di": "08", 
        "xian": "02", 
        "name": "赤坎区", 
        "level": 3
    }, 
    {
        "code": "440803", 
        "sheng": "44", 
        "di": "08", 
        "xian": "03", 
        "name": "霞山区", 
        "level": 3
    }, 
    {
        "code": "440804", 
        "sheng": "44", 
        "di": "08", 
        "xian": "04", 
        "name": "坡头区", 
        "level": 3
    }, 
    {
        "code": "440811", 
        "sheng": "44", 
        "di": "08", 
        "xian": "11", 
        "name": "麻章区", 
        "level": 3
    }, 
    {
        "code": "440823", 
        "sheng": "44", 
        "di": "08", 
        "xian": "23", 
        "name": "遂溪县", 
        "level": 3
    }, 
    {
        "code": "440825", 
        "sheng": "44", 
        "di": "08", 
        "xian": "25", 
        "name": "徐闻县", 
        "level": 3
    }, 
    {
        "code": "440881", 
        "sheng": "44", 
        "di": "08", 
        "xian": "81", 
        "name": "廉江市", 
        "level": 3
    }, 
    {
        "code": "440882", 
        "sheng": "44", 
        "di": "08", 
        "xian": "82", 
        "name": "雷州市", 
        "level": 3
    }, 
    {
        "code": "440883", 
        "sheng": "44", 
        "di": "08", 
        "xian": "83", 
        "name": "吴川市", 
        "level": 3
    }, 
    {
        "code": "440884", 
        "sheng": "44", 
        "di": "08", 
        "xian": "84", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "440900", 
        "sheng": "44", 
        "di": "09", 
        "xian": "00", 
        "name": "茂名市", 
        "level": 2
    }, 
    {
        "code": "440902", 
        "sheng": "44", 
        "di": "09", 
        "xian": "02", 
        "name": "茂南区", 
        "level": 3
    }, 
    {
        "code": "440904", 
        "sheng": "44", 
        "di": "09", 
        "xian": "04", 
        "name": "电白区", 
        "level": 3
    }, 
    {
        "code": "440981", 
        "sheng": "44", 
        "di": "09", 
        "xian": "81", 
        "name": "高州市", 
        "level": 3
    }, 
    {
        "code": "440982", 
        "sheng": "44", 
        "di": "09", 
        "xian": "82", 
        "name": "化州市", 
        "level": 3
    }, 
    {
        "code": "440983", 
        "sheng": "44", 
        "di": "09", 
        "xian": "83", 
        "name": "信宜市", 
        "level": 3
    }, 
    {
        "code": "441200", 
        "sheng": "44", 
        "di": "12", 
        "xian": "00", 
        "name": "肇庆市", 
        "level": 2
    }, 
    {
        "code": "441202", 
        "sheng": "44", 
        "di": "12", 
        "xian": "02", 
        "name": "端州区", 
        "level": 3
    }, 
    {
        "code": "441203", 
        "sheng": "44", 
        "di": "12", 
        "xian": "03", 
        "name": "鼎湖区", 
        "level": 3
    }, 
    {
        "code": "441204", 
        "sheng": "44", 
        "di": "12", 
        "xian": "04", 
        "name": "高要区", 
        "level": 3
    }, 
    {
        "code": "441223", 
        "sheng": "44", 
        "di": "12", 
        "xian": "23", 
        "name": "广宁县", 
        "level": 3
    }, 
    {
        "code": "441224", 
        "sheng": "44", 
        "di": "12", 
        "xian": "24", 
        "name": "怀集县", 
        "level": 3
    }, 
    {
        "code": "441225", 
        "sheng": "44", 
        "di": "12", 
        "xian": "25", 
        "name": "封开县", 
        "level": 3
    }, 
    {
        "code": "441226", 
        "sheng": "44", 
        "di": "12", 
        "xian": "26", 
        "name": "德庆县", 
        "level": 3
    }, 
    {
        "code": "441284", 
        "sheng": "44", 
        "di": "12", 
        "xian": "84", 
        "name": "四会市", 
        "level": 3
    }, 
    {
        "code": "441300", 
        "sheng": "44", 
        "di": "13", 
        "xian": "00", 
        "name": "惠州市", 
        "level": 2
    }, 
    {
        "code": "441302", 
        "sheng": "44", 
        "di": "13", 
        "xian": "02", 
        "name": "惠城区", 
        "level": 3
    }, 
    {
        "code": "441303", 
        "sheng": "44", 
        "di": "13", 
        "xian": "03", 
        "name": "惠阳区", 
        "level": 3
    }, 
    {
        "code": "441322", 
        "sheng": "44", 
        "di": "13", 
        "xian": "22", 
        "name": "博罗县", 
        "level": 3
    }, 
    {
        "code": "441323", 
        "sheng": "44", 
        "di": "13", 
        "xian": "23", 
        "name": "惠东县", 
        "level": 3
    }, 
    {
        "code": "441324", 
        "sheng": "44", 
        "di": "13", 
        "xian": "24", 
        "name": "龙门县", 
        "level": 3
    }, 
    {
        "code": "441325", 
        "sheng": "44", 
        "di": "13", 
        "xian": "25", 
        "name": "大亚湾区", 
        "level": 3
    }, 
    {
        "code": "441400", 
        "sheng": "44", 
        "di": "14", 
        "xian": "00", 
        "name": "梅州市", 
        "level": 2
    }, 
    {
        "code": "441402", 
        "sheng": "44", 
        "di": "14", 
        "xian": "02", 
        "name": "梅江区", 
        "level": 3
    }, 
    {
        "code": "441403", 
        "sheng": "44", 
        "di": "14", 
        "xian": "03", 
        "name": "梅县区", 
        "level": 3
    }, 
    {
        "code": "441422", 
        "sheng": "44", 
        "di": "14", 
        "xian": "22", 
        "name": "大埔县", 
        "level": 3
    }, 
    {
        "code": "441423", 
        "sheng": "44", 
        "di": "14", 
        "xian": "23", 
        "name": "丰顺县", 
        "level": 3
    }, 
    {
        "code": "441424", 
        "sheng": "44", 
        "di": "14", 
        "xian": "24", 
        "name": "五华县", 
        "level": 3
    }, 
    {
        "code": "441426", 
        "sheng": "44", 
        "di": "14", 
        "xian": "26", 
        "name": "平远县", 
        "level": 3
    }, 
    {
        "code": "441427", 
        "sheng": "44", 
        "di": "14", 
        "xian": "27", 
        "name": "蕉岭县", 
        "level": 3
    }, 
    {
        "code": "441481", 
        "sheng": "44", 
        "di": "14", 
        "xian": "81", 
        "name": "兴宁市", 
        "level": 3
    }, 
    {
        "code": "441500", 
        "sheng": "44", 
        "di": "15", 
        "xian": "00", 
        "name": "汕尾市", 
        "level": 2
    }, 
    {
        "code": "441502", 
        "sheng": "44", 
        "di": "15", 
        "xian": "02", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "441521", 
        "sheng": "44", 
        "di": "15", 
        "xian": "21", 
        "name": "海丰县", 
        "level": 3
    }, 
    {
        "code": "441523", 
        "sheng": "44", 
        "di": "15", 
        "xian": "23", 
        "name": "陆河县", 
        "level": 3
    }, 
    {
        "code": "441581", 
        "sheng": "44", 
        "di": "15", 
        "xian": "81", 
        "name": "陆丰市", 
        "level": 3
    }, 
    {
        "code": "441600", 
        "sheng": "44", 
        "di": "16", 
        "xian": "00", 
        "name": "河源市", 
        "level": 2
    }, 
    {
        "code": "441602", 
        "sheng": "44", 
        "di": "16", 
        "xian": "02", 
        "name": "源城区", 
        "level": 3
    }, 
    {
        "code": "441621", 
        "sheng": "44", 
        "di": "16", 
        "xian": "21", 
        "name": "紫金县", 
        "level": 3
    }, 
    {
        "code": "441622", 
        "sheng": "44", 
        "di": "16", 
        "xian": "22", 
        "name": "龙川县", 
        "level": 3
    }, 
    {
        "code": "441623", 
        "sheng": "44", 
        "di": "16", 
        "xian": "23", 
        "name": "连平县", 
        "level": 3
    }, 
    {
        "code": "441624", 
        "sheng": "44", 
        "di": "16", 
        "xian": "24", 
        "name": "和平县", 
        "level": 3
    }, 
    {
        "code": "441625", 
        "sheng": "44", 
        "di": "16", 
        "xian": "25", 
        "name": "东源县", 
        "level": 3
    }, 
    {
        "code": "441700", 
        "sheng": "44", 
        "di": "17", 
        "xian": "00", 
        "name": "阳江市", 
        "level": 2
    }, 
    {
        "code": "441702", 
        "sheng": "44", 
        "di": "17", 
        "xian": "02", 
        "name": "江城区", 
        "level": 3
    }, 
    {
        "code": "441704", 
        "sheng": "44", 
        "di": "17", 
        "xian": "04", 
        "name": "阳东区", 
        "level": 3
    }, 
    {
        "code": "441721", 
        "sheng": "44", 
        "di": "17", 
        "xian": "21", 
        "name": "阳西县", 
        "level": 3
    }, 
    {
        "code": "441781", 
        "sheng": "44", 
        "di": "17", 
        "xian": "81", 
        "name": "阳春市", 
        "level": 3
    }, 
    {
        "code": "441800", 
        "sheng": "44", 
        "di": "18", 
        "xian": "00", 
        "name": "清远市", 
        "level": 2
    }, 
    {
        "code": "441802", 
        "sheng": "44", 
        "di": "18", 
        "xian": "02", 
        "name": "清城区", 
        "level": 3
    }, 
    {
        "code": "441803", 
        "sheng": "44", 
        "di": "18", 
        "xian": "03", 
        "name": "清新区", 
        "level": 3
    }, 
    {
        "code": "441821", 
        "sheng": "44", 
        "di": "18", 
        "xian": "21", 
        "name": "佛冈县", 
        "level": 3
    }, 
    {
        "code": "441823", 
        "sheng": "44", 
        "di": "18", 
        "xian": "23", 
        "name": "阳山县", 
        "level": 3
    }, 
    {
        "code": "441825", 
        "sheng": "44", 
        "di": "18", 
        "xian": "25", 
        "name": "连山壮族瑶族自治县", 
        "level": 3
    }, 
    {
        "code": "441826", 
        "sheng": "44", 
        "di": "18", 
        "xian": "26", 
        "name": "连南瑶族自治县", 
        "level": 3
    }, 
    {
        "code": "441881", 
        "sheng": "44", 
        "di": "18", 
        "xian": "81", 
        "name": "英德市", 
        "level": 3
    }, 
    {
        "code": "441882", 
        "sheng": "44", 
        "di": "18", 
        "xian": "82", 
        "name": "连州市", 
        "level": 3
    }, 
    {
        "code": "441900", 
        "sheng": "44", 
        "di": "19", 
        "xian": "00", 
        "name": "东莞市", 
        "level": 2
    }, 
    {
        "code": "441901", 
        "sheng": "44", 
        "di": "19", 
        "xian": "01", 
        "name": "莞城区", 
        "level": 3
    }, 
    {
        "code": "441902", 
        "sheng": "44", 
        "di": "19", 
        "xian": "02", 
        "name": "南城区", 
        "level": 3
    }, 
    {
        "code": "441903", 
        "sheng": "44", 
        "di": "19", 
        "xian": "03", 
        "name": "东城区", 
        "level": 3
    }, 
    {
        "code": "441904", 
        "sheng": "44", 
        "di": "19", 
        "xian": "04", 
        "name": "万江区", 
        "level": 3
    }, 
    {
        "code": "441905", 
        "sheng": "44", 
        "di": "19", 
        "xian": "05", 
        "name": "石碣镇", 
        "level": 3
    }, 
    {
        "code": "441906", 
        "sheng": "44", 
        "di": "19", 
        "xian": "06", 
        "name": "石龙镇", 
        "level": 3
    }, 
    {
        "code": "441907", 
        "sheng": "44", 
        "di": "19", 
        "xian": "07", 
        "name": "茶山镇", 
        "level": 3
    }, 
    {
        "code": "441908", 
        "sheng": "44", 
        "di": "19", 
        "xian": "08", 
        "name": "石排镇", 
        "level": 3
    }, 
    {
        "code": "441909", 
        "sheng": "44", 
        "di": "19", 
        "xian": "09", 
        "name": "企石镇", 
        "level": 3
    }, 
    {
        "code": "441910", 
        "sheng": "44", 
        "di": "19", 
        "xian": "10", 
        "name": "横沥镇", 
        "level": 3
    }, 
    {
        "code": "441911", 
        "sheng": "44", 
        "di": "19", 
        "xian": "11", 
        "name": "桥头镇", 
        "level": 3
    }, 
    {
        "code": "441912", 
        "sheng": "44", 
        "di": "19", 
        "xian": "12", 
        "name": "谢岗镇", 
        "level": 3
    }, 
    {
        "code": "441913", 
        "sheng": "44", 
        "di": "19", 
        "xian": "13", 
        "name": "东坑镇", 
        "level": 3
    }, 
    {
        "code": "441914", 
        "sheng": "44", 
        "di": "19", 
        "xian": "14", 
        "name": "常平镇", 
        "level": 3
    }, 
    {
        "code": "441915", 
        "sheng": "44", 
        "di": "19", 
        "xian": "15", 
        "name": "寮步镇", 
        "level": 3
    }, 
    {
        "code": "441916", 
        "sheng": "44", 
        "di": "19", 
        "xian": "16", 
        "name": "大朗镇", 
        "level": 3
    }, 
    {
        "code": "441917", 
        "sheng": "44", 
        "di": "19", 
        "xian": "17", 
        "name": "麻涌镇", 
        "level": 3
    }, 
    {
        "code": "441918", 
        "sheng": "44", 
        "di": "19", 
        "xian": "18", 
        "name": "中堂镇", 
        "level": 3
    }, 
    {
        "code": "441919", 
        "sheng": "44", 
        "di": "19", 
        "xian": "19", 
        "name": "高埗镇", 
        "level": 3
    }, 
    {
        "code": "441920", 
        "sheng": "44", 
        "di": "19", 
        "xian": "20", 
        "name": "樟木头镇", 
        "level": 3
    }, 
    {
        "code": "441921", 
        "sheng": "44", 
        "di": "19", 
        "xian": "21", 
        "name": "大岭山镇", 
        "level": 3
    }, 
    {
        "code": "441922", 
        "sheng": "44", 
        "di": "19", 
        "xian": "22", 
        "name": "望牛墩镇", 
        "level": 3
    }, 
    {
        "code": "441923", 
        "sheng": "44", 
        "di": "19", 
        "xian": "23", 
        "name": "黄江镇", 
        "level": 3
    }, 
    {
        "code": "441924", 
        "sheng": "44", 
        "di": "19", 
        "xian": "24", 
        "name": "洪梅镇", 
        "level": 3
    }, 
    {
        "code": "441925", 
        "sheng": "44", 
        "di": "19", 
        "xian": "25", 
        "name": "清溪镇", 
        "level": 3
    }, 
    {
        "code": "441926", 
        "sheng": "44", 
        "di": "19", 
        "xian": "26", 
        "name": "沙田镇", 
        "level": 3
    }, 
    {
        "code": "441927", 
        "sheng": "44", 
        "di": "19", 
        "xian": "27", 
        "name": "道滘镇", 
        "level": 3
    }, 
    {
        "code": "441928", 
        "sheng": "44", 
        "di": "19", 
        "xian": "28", 
        "name": "塘厦镇", 
        "level": 3
    }, 
    {
        "code": "441929", 
        "sheng": "44", 
        "di": "19", 
        "xian": "29", 
        "name": "虎门镇", 
        "level": 3
    }, 
    {
        "code": "441930", 
        "sheng": "44", 
        "di": "19", 
        "xian": "30", 
        "name": "厚街镇", 
        "level": 3
    }, 
    {
        "code": "441931", 
        "sheng": "44", 
        "di": "19", 
        "xian": "31", 
        "name": "凤岗镇", 
        "level": 3
    }, 
    {
        "code": "441932", 
        "sheng": "44", 
        "di": "19", 
        "xian": "32", 
        "name": "长安镇", 
        "level": 3
    }, 
    {
        "code": "441933", 
        "sheng": "44", 
        "di": "19", 
        "xian": "33", 
        "name": "松山湖高新区", 
        "level": 3
    }, 
    {
        "code": "442000", 
        "sheng": "44", 
        "di": "20", 
        "xian": "00", 
        "name": "中山市", 
        "level": 2
    }, 
    {
        "code": "442001", 
        "sheng": "44", 
        "di": "20", 
        "xian": "01", 
        "name": "石岐区", 
        "level": 3
    }, 
    {
        "code": "442002", 
        "sheng": "44", 
        "di": "20", 
        "xian": "02", 
        "name": "东区", 
        "level": 3
    }, 
    {
        "code": "442003", 
        "sheng": "44", 
        "di": "20", 
        "xian": "03", 
        "name": "西区", 
        "level": 3
    }, 
    {
        "code": "442004", 
        "sheng": "44", 
        "di": "20", 
        "xian": "04", 
        "name": "南区", 
        "level": 3
    }, 
    {
        "code": "442005", 
        "sheng": "44", 
        "di": "20", 
        "xian": "05", 
        "name": "五桂山区", 
        "level": 3
    }, 
    {
        "code": "442006", 
        "sheng": "44", 
        "di": "20", 
        "xian": "06", 
        "name": "火炬开发区", 
        "level": 3
    }, 
    {
        "code": "442007", 
        "sheng": "44", 
        "di": "20", 
        "xian": "07", 
        "name": "黄圃镇", 
        "level": 3
    }, 
    {
        "code": "442008", 
        "sheng": "44", 
        "di": "20", 
        "xian": "08", 
        "name": "南头镇", 
        "level": 3
    }, 
    {
        "code": "442009", 
        "sheng": "44", 
        "di": "20", 
        "xian": "09", 
        "name": "东凤镇", 
        "level": 3
    }, 
    {
        "code": "442010", 
        "sheng": "44", 
        "di": "20", 
        "xian": "10", 
        "name": "阜沙镇", 
        "level": 3
    }, 
    {
        "code": "442011", 
        "sheng": "44", 
        "di": "20", 
        "xian": "11", 
        "name": "小榄镇", 
        "level": 3
    }, 
    {
        "code": "442012", 
        "sheng": "44", 
        "di": "20", 
        "xian": "12", 
        "name": "东升镇", 
        "level": 3
    }, 
    {
        "code": "442013", 
        "sheng": "44", 
        "di": "20", 
        "xian": "13", 
        "name": "古镇镇", 
        "level": 3
    }, 
    {
        "code": "442014", 
        "sheng": "44", 
        "di": "20", 
        "xian": "14", 
        "name": "横栏镇", 
        "level": 3
    }, 
    {
        "code": "442015", 
        "sheng": "44", 
        "di": "20", 
        "xian": "15", 
        "name": "三角镇", 
        "level": 3
    }, 
    {
        "code": "442016", 
        "sheng": "44", 
        "di": "20", 
        "xian": "16", 
        "name": "民众镇", 
        "level": 3
    }, 
    {
        "code": "442017", 
        "sheng": "44", 
        "di": "20", 
        "xian": "17", 
        "name": "南朗镇", 
        "level": 3
    }, 
    {
        "code": "442018", 
        "sheng": "44", 
        "di": "20", 
        "xian": "18", 
        "name": "港口镇", 
        "level": 3
    }, 
    {
        "code": "442019", 
        "sheng": "44", 
        "di": "20", 
        "xian": "19", 
        "name": "大涌镇", 
        "level": 3
    }, 
    {
        "code": "442020", 
        "sheng": "44", 
        "di": "20", 
        "xian": "20", 
        "name": "沙溪镇", 
        "level": 3
    }, 
    {
        "code": "442021", 
        "sheng": "44", 
        "di": "20", 
        "xian": "21", 
        "name": "三乡镇", 
        "level": 3
    }, 
    {
        "code": "442022", 
        "sheng": "44", 
        "di": "20", 
        "xian": "22", 
        "name": "板芙镇", 
        "level": 3
    }, 
    {
        "code": "442023", 
        "sheng": "44", 
        "di": "20", 
        "xian": "23", 
        "name": "神湾镇", 
        "level": 3
    }, 
    {
        "code": "442024", 
        "sheng": "44", 
        "di": "20", 
        "xian": "24", 
        "name": "坦洲镇", 
        "level": 3
    }, 
    {
        "code": "445100", 
        "sheng": "44", 
        "di": "51", 
        "xian": "00", 
        "name": "潮州市", 
        "level": 2
    }, 
    {
        "code": "445102", 
        "sheng": "44", 
        "di": "51", 
        "xian": "02", 
        "name": "湘桥区", 
        "level": 3
    }, 
    {
        "code": "445103", 
        "sheng": "44", 
        "di": "51", 
        "xian": "03", 
        "name": "潮安区", 
        "level": 3
    }, 
    {
        "code": "445122", 
        "sheng": "44", 
        "di": "51", 
        "xian": "22", 
        "name": "饶平县", 
        "level": 3
    }, 
    {
        "code": "445200", 
        "sheng": "44", 
        "di": "52", 
        "xian": "00", 
        "name": "揭阳市", 
        "level": 2
    }, 
    {
        "code": "445202", 
        "sheng": "44", 
        "di": "52", 
        "xian": "02", 
        "name": "榕城区", 
        "level": 3
    }, 
    {
        "code": "445203", 
        "sheng": "44", 
        "di": "52", 
        "xian": "03", 
        "name": "揭东区", 
        "level": 3
    }, 
    {
        "code": "445222", 
        "sheng": "44", 
        "di": "52", 
        "xian": "22", 
        "name": "揭西县", 
        "level": 3
    }, 
    {
        "code": "445224", 
        "sheng": "44", 
        "di": "52", 
        "xian": "24", 
        "name": "惠来县", 
        "level": 3
    }, 
    {
        "code": "445281", 
        "sheng": "44", 
        "di": "52", 
        "xian": "81", 
        "name": "普宁市", 
        "level": 3
    }, 
    {
        "code": "445300", 
        "sheng": "44", 
        "di": "53", 
        "xian": "00", 
        "name": "云浮市", 
        "level": 2
    }, 
    {
        "code": "445302", 
        "sheng": "44", 
        "di": "53", 
        "xian": "02", 
        "name": "云城区", 
        "level": 3
    }, 
    {
        "code": "445303", 
        "sheng": "44", 
        "di": "53", 
        "xian": "03", 
        "name": "云安区", 
        "level": 3
    }, 
    {
        "code": "445321", 
        "sheng": "44", 
        "di": "53", 
        "xian": "21", 
        "name": "新兴县", 
        "level": 3
    }, 
    {
        "code": "445322", 
        "sheng": "44", 
        "di": "53", 
        "xian": "22", 
        "name": "郁南县", 
        "level": 3
    }, 
    {
        "code": "445381", 
        "sheng": "44", 
        "di": "53", 
        "xian": "81", 
        "name": "罗定市", 
        "level": 3
    }, 
    {
        "code": "450000", 
        "sheng": "45", 
        "di": "00", 
        "xian": "00", 
        "name": "广西壮族自治区", 
        "level": 1
    }, 
    {
        "code": "450100", 
        "sheng": "45", 
        "di": "01", 
        "xian": "00", 
        "name": "南宁市", 
        "level": 2
    }, 
    {
        "code": "450102", 
        "sheng": "45", 
        "di": "01", 
        "xian": "02", 
        "name": "兴宁区", 
        "level": 3
    }, 
    {
        "code": "450103", 
        "sheng": "45", 
        "di": "01", 
        "xian": "03", 
        "name": "青秀区", 
        "level": 3
    }, 
    {
        "code": "450105", 
        "sheng": "45", 
        "di": "01", 
        "xian": "05", 
        "name": "江南区", 
        "level": 3
    }, 
    {
        "code": "450107", 
        "sheng": "45", 
        "di": "01", 
        "xian": "07", 
        "name": "西乡塘区", 
        "level": 3
    }, 
    {
        "code": "450108", 
        "sheng": "45", 
        "di": "01", 
        "xian": "08", 
        "name": "良庆区", 
        "level": 3
    }, 
    {
        "code": "450109", 
        "sheng": "45", 
        "di": "01", 
        "xian": "09", 
        "name": "邕宁区", 
        "level": 3
    }, 
    {
        "code": "450110", 
        "sheng": "45", 
        "di": "01", 
        "xian": "10", 
        "name": "武鸣区", 
        "level": 3
    }, 
    {
        "code": "450123", 
        "sheng": "45", 
        "di": "01", 
        "xian": "23", 
        "name": "隆安县", 
        "level": 3
    }, 
    {
        "code": "450124", 
        "sheng": "45", 
        "di": "01", 
        "xian": "24", 
        "name": "马山县", 
        "level": 3
    }, 
    {
        "code": "450125", 
        "sheng": "45", 
        "di": "01", 
        "xian": "25", 
        "name": "上林县", 
        "level": 3
    }, 
    {
        "code": "450126", 
        "sheng": "45", 
        "di": "01", 
        "xian": "26", 
        "name": "宾阳县", 
        "level": 3
    }, 
    {
        "code": "450127", 
        "sheng": "45", 
        "di": "01", 
        "xian": "27", 
        "name": "横县", 
        "level": 3
    }, 
    {
        "code": "450128", 
        "sheng": "45", 
        "di": "01", 
        "xian": "28", 
        "name": "埌东新区", 
        "level": 3
    }, 
    {
        "code": "450200", 
        "sheng": "45", 
        "di": "02", 
        "xian": "00", 
        "name": "柳州市", 
        "level": 2
    }, 
    {
        "code": "450202", 
        "sheng": "45", 
        "di": "02", 
        "xian": "02", 
        "name": "城中区", 
        "level": 3
    }, 
    {
        "code": "450203", 
        "sheng": "45", 
        "di": "02", 
        "xian": "03", 
        "name": "鱼峰区", 
        "level": 3
    }, 
    {
        "code": "450204", 
        "sheng": "45", 
        "di": "02", 
        "xian": "04", 
        "name": "柳南区", 
        "level": 3
    }, 
    {
        "code": "450205", 
        "sheng": "45", 
        "di": "02", 
        "xian": "05", 
        "name": "柳北区", 
        "level": 3
    }, 
    {
        "code": "450221", 
        "sheng": "45", 
        "di": "02", 
        "xian": "21", 
        "name": "柳江区", 
        "level": 3
    }, 
    {
        "code": "450222", 
        "sheng": "45", 
        "di": "02", 
        "xian": "22", 
        "name": "柳城县", 
        "level": 3
    }, 
    {
        "code": "450223", 
        "sheng": "45", 
        "di": "02", 
        "xian": "23", 
        "name": "鹿寨县", 
        "level": 3
    }, 
    {
        "code": "450224", 
        "sheng": "45", 
        "di": "02", 
        "xian": "24", 
        "name": "融安县", 
        "level": 3
    }, 
    {
        "code": "450225", 
        "sheng": "45", 
        "di": "02", 
        "xian": "25", 
        "name": "融水苗族自治县", 
        "level": 3
    }, 
    {
        "code": "450226", 
        "sheng": "45", 
        "di": "02", 
        "xian": "26", 
        "name": "三江侗族自治县", 
        "level": 3
    }, 
    {
        "code": "450227", 
        "sheng": "45", 
        "di": "02", 
        "xian": "27", 
        "name": "柳东新区", 
        "level": 3
    }, 
    {
        "code": "450300", 
        "sheng": "45", 
        "di": "03", 
        "xian": "00", 
        "name": "桂林市", 
        "level": 2
    }, 
    {
        "code": "450302", 
        "sheng": "45", 
        "di": "03", 
        "xian": "02", 
        "name": "秀峰区", 
        "level": 3
    }, 
    {
        "code": "450303", 
        "sheng": "45", 
        "di": "03", 
        "xian": "03", 
        "name": "叠彩区", 
        "level": 3
    }, 
    {
        "code": "450304", 
        "sheng": "45", 
        "di": "03", 
        "xian": "04", 
        "name": "象山区", 
        "level": 3
    }, 
    {
        "code": "450305", 
        "sheng": "45", 
        "di": "03", 
        "xian": "05", 
        "name": "七星区", 
        "level": 3
    }, 
    {
        "code": "450311", 
        "sheng": "45", 
        "di": "03", 
        "xian": "11", 
        "name": "雁山区", 
        "level": 3
    }, 
    {
        "code": "450312", 
        "sheng": "45", 
        "di": "03", 
        "xian": "12", 
        "name": "临桂区", 
        "level": 3
    }, 
    {
        "code": "450321", 
        "sheng": "45", 
        "di": "03", 
        "xian": "21", 
        "name": "阳朔县", 
        "level": 3
    }, 
    {
        "code": "450323", 
        "sheng": "45", 
        "di": "03", 
        "xian": "23", 
        "name": "灵川县", 
        "level": 3
    }, 
    {
        "code": "450324", 
        "sheng": "45", 
        "di": "03", 
        "xian": "24", 
        "name": "全州县", 
        "level": 3
    }, 
    {
        "code": "450325", 
        "sheng": "45", 
        "di": "03", 
        "xian": "25", 
        "name": "兴安县", 
        "level": 3
    }, 
    {
        "code": "450326", 
        "sheng": "45", 
        "di": "03", 
        "xian": "26", 
        "name": "永福县", 
        "level": 3
    }, 
    {
        "code": "450327", 
        "sheng": "45", 
        "di": "03", 
        "xian": "27", 
        "name": "灌阳县", 
        "level": 3
    }, 
    {
        "code": "450328", 
        "sheng": "45", 
        "di": "03", 
        "xian": "28", 
        "name": "龙胜各族自治县", 
        "level": 3
    }, 
    {
        "code": "450329", 
        "sheng": "45", 
        "di": "03", 
        "xian": "29", 
        "name": "资源县", 
        "level": 3
    }, 
    {
        "code": "450330", 
        "sheng": "45", 
        "di": "03", 
        "xian": "30", 
        "name": "平乐县", 
        "level": 3
    }, 
    {
        "code": "450331", 
        "sheng": "45", 
        "di": "03", 
        "xian": "31", 
        "name": "荔浦县", 
        "level": 3
    }, 
    {
        "code": "450332", 
        "sheng": "45", 
        "di": "03", 
        "xian": "32", 
        "name": "恭城瑶族自治县", 
        "level": 3
    }, 
    {
        "code": "450400", 
        "sheng": "45", 
        "di": "04", 
        "xian": "00", 
        "name": "梧州市", 
        "level": 2
    }, 
    {
        "code": "450403", 
        "sheng": "45", 
        "di": "04", 
        "xian": "03", 
        "name": "万秀区", 
        "level": 3
    }, 
    {
        "code": "450405", 
        "sheng": "45", 
        "di": "04", 
        "xian": "05", 
        "name": "长洲区", 
        "level": 3
    }, 
    {
        "code": "450406", 
        "sheng": "45", 
        "di": "04", 
        "xian": "06", 
        "name": "龙圩区", 
        "level": 3
    }, 
    {
        "code": "450421", 
        "sheng": "45", 
        "di": "04", 
        "xian": "21", 
        "name": "苍梧县", 
        "level": 3
    }, 
    {
        "code": "450422", 
        "sheng": "45", 
        "di": "04", 
        "xian": "22", 
        "name": "藤县", 
        "level": 3
    }, 
    {
        "code": "450423", 
        "sheng": "45", 
        "di": "04", 
        "xian": "23", 
        "name": "蒙山县", 
        "level": 3
    }, 
    {
        "code": "450481", 
        "sheng": "45", 
        "di": "04", 
        "xian": "81", 
        "name": "岑溪市", 
        "level": 3
    }, 
    {
        "code": "450500", 
        "sheng": "45", 
        "di": "05", 
        "xian": "00", 
        "name": "北海市", 
        "level": 2
    }, 
    {
        "code": "450502", 
        "sheng": "45", 
        "di": "05", 
        "xian": "02", 
        "name": "海城区", 
        "level": 3
    }, 
    {
        "code": "450503", 
        "sheng": "45", 
        "di": "05", 
        "xian": "03", 
        "name": "银海区", 
        "level": 3
    }, 
    {
        "code": "450512", 
        "sheng": "45", 
        "di": "05", 
        "xian": "12", 
        "name": "铁山港区", 
        "level": 3
    }, 
    {
        "code": "450521", 
        "sheng": "45", 
        "di": "05", 
        "xian": "21", 
        "name": "合浦县", 
        "level": 3
    }, 
    {
        "code": "450600", 
        "sheng": "45", 
        "di": "06", 
        "xian": "00", 
        "name": "防城港市", 
        "level": 2
    }, 
    {
        "code": "450602", 
        "sheng": "45", 
        "di": "06", 
        "xian": "02", 
        "name": "港口区", 
        "level": 3
    }, 
    {
        "code": "450603", 
        "sheng": "45", 
        "di": "06", 
        "xian": "03", 
        "name": "防城区", 
        "level": 3
    }, 
    {
        "code": "450621", 
        "sheng": "45", 
        "di": "06", 
        "xian": "21", 
        "name": "上思县", 
        "level": 3
    }, 
    {
        "code": "450681", 
        "sheng": "45", 
        "di": "06", 
        "xian": "81", 
        "name": "东兴市", 
        "level": 3
    }, 
    {
        "code": "450700", 
        "sheng": "45", 
        "di": "07", 
        "xian": "00", 
        "name": "钦州市", 
        "level": 2
    }, 
    {
        "code": "450702", 
        "sheng": "45", 
        "di": "07", 
        "xian": "02", 
        "name": "钦南区", 
        "level": 3
    }, 
    {
        "code": "450703", 
        "sheng": "45", 
        "di": "07", 
        "xian": "03", 
        "name": "钦北区", 
        "level": 3
    }, 
    {
        "code": "450721", 
        "sheng": "45", 
        "di": "07", 
        "xian": "21", 
        "name": "灵山县", 
        "level": 3
    }, 
    {
        "code": "450722", 
        "sheng": "45", 
        "di": "07", 
        "xian": "22", 
        "name": "浦北县", 
        "level": 3
    }, 
    {
        "code": "450800", 
        "sheng": "45", 
        "di": "08", 
        "xian": "00", 
        "name": "贵港市", 
        "level": 2
    }, 
    {
        "code": "450802", 
        "sheng": "45", 
        "di": "08", 
        "xian": "02", 
        "name": "港北区", 
        "level": 3
    }, 
    {
        "code": "450803", 
        "sheng": "45", 
        "di": "08", 
        "xian": "03", 
        "name": "港南区", 
        "level": 3
    }, 
    {
        "code": "450804", 
        "sheng": "45", 
        "di": "08", 
        "xian": "04", 
        "name": "覃塘区", 
        "level": 3
    }, 
    {
        "code": "450821", 
        "sheng": "45", 
        "di": "08", 
        "xian": "21", 
        "name": "平南县", 
        "level": 3
    }, 
    {
        "code": "450881", 
        "sheng": "45", 
        "di": "08", 
        "xian": "81", 
        "name": "桂平市", 
        "level": 3
    }, 
    {
        "code": "450900", 
        "sheng": "45", 
        "di": "09", 
        "xian": "00", 
        "name": "玉林市", 
        "level": 2
    }, 
    {
        "code": "450902", 
        "sheng": "45", 
        "di": "09", 
        "xian": "02", 
        "name": "玉州区", 
        "level": 3
    }, 
    {
        "code": "450903", 
        "sheng": "45", 
        "di": "09", 
        "xian": "03", 
        "name": "福绵区", 
        "level": 3
    }, 
    {
        "code": "450904", 
        "sheng": "45", 
        "di": "09", 
        "xian": "04", 
        "name": "玉东新区", 
        "level": 3
    }, 
    {
        "code": "450921", 
        "sheng": "45", 
        "di": "09", 
        "xian": "21", 
        "name": "容县", 
        "level": 3
    }, 
    {
        "code": "450922", 
        "sheng": "45", 
        "di": "09", 
        "xian": "22", 
        "name": "陆川县", 
        "level": 3
    }, 
    {
        "code": "450923", 
        "sheng": "45", 
        "di": "09", 
        "xian": "23", 
        "name": "博白县", 
        "level": 3
    }, 
    {
        "code": "450924", 
        "sheng": "45", 
        "di": "09", 
        "xian": "24", 
        "name": "兴业县", 
        "level": 3
    }, 
    {
        "code": "450981", 
        "sheng": "45", 
        "di": "09", 
        "xian": "81", 
        "name": "北流市", 
        "level": 3
    }, 
    {
        "code": "451000", 
        "sheng": "45", 
        "di": "10", 
        "xian": "00", 
        "name": "百色市", 
        "level": 2
    }, 
    {
        "code": "451002", 
        "sheng": "45", 
        "di": "10", 
        "xian": "02", 
        "name": "右江区", 
        "level": 3
    }, 
    {
        "code": "451021", 
        "sheng": "45", 
        "di": "10", 
        "xian": "21", 
        "name": "田阳县", 
        "level": 3
    }, 
    {
        "code": "451022", 
        "sheng": "45", 
        "di": "10", 
        "xian": "22", 
        "name": "田东县", 
        "level": 3
    }, 
    {
        "code": "451023", 
        "sheng": "45", 
        "di": "10", 
        "xian": "23", 
        "name": "平果县", 
        "level": 3
    }, 
    {
        "code": "451024", 
        "sheng": "45", 
        "di": "10", 
        "xian": "24", 
        "name": "德保县", 
        "level": 3
    }, 
    {
        "code": "451026", 
        "sheng": "45", 
        "di": "10", 
        "xian": "26", 
        "name": "那坡县", 
        "level": 3
    }, 
    {
        "code": "451027", 
        "sheng": "45", 
        "di": "10", 
        "xian": "27", 
        "name": "凌云县", 
        "level": 3
    }, 
    {
        "code": "451028", 
        "sheng": "45", 
        "di": "10", 
        "xian": "28", 
        "name": "乐业县", 
        "level": 3
    }, 
    {
        "code": "451029", 
        "sheng": "45", 
        "di": "10", 
        "xian": "29", 
        "name": "田林县", 
        "level": 3
    }, 
    {
        "code": "451030", 
        "sheng": "45", 
        "di": "10", 
        "xian": "30", 
        "name": "西林县", 
        "level": 3
    }, 
    {
        "code": "451031", 
        "sheng": "45", 
        "di": "10", 
        "xian": "31", 
        "name": "隆林各族自治县", 
        "level": 3
    }, 
    {
        "code": "451081", 
        "sheng": "45", 
        "di": "10", 
        "xian": "81", 
        "name": "靖西市", 
        "level": 3
    }, 
    {
        "code": "451100", 
        "sheng": "45", 
        "di": "11", 
        "xian": "00", 
        "name": "贺州市", 
        "level": 2
    }, 
    {
        "code": "451102", 
        "sheng": "45", 
        "di": "11", 
        "xian": "02", 
        "name": "八步区", 
        "level": 3
    }, 
    {
        "code": "451103", 
        "sheng": "45", 
        "di": "11", 
        "xian": "03", 
        "name": "平桂区", 
        "level": 3
    }, 
    {
        "code": "451121", 
        "sheng": "45", 
        "di": "11", 
        "xian": "21", 
        "name": "昭平县", 
        "level": 3
    }, 
    {
        "code": "451122", 
        "sheng": "45", 
        "di": "11", 
        "xian": "22", 
        "name": "钟山县", 
        "level": 3
    }, 
    {
        "code": "451123", 
        "sheng": "45", 
        "di": "11", 
        "xian": "23", 
        "name": "富川瑶族自治县", 
        "level": 3
    }, 
    {
        "code": "451200", 
        "sheng": "45", 
        "di": "12", 
        "xian": "00", 
        "name": "河池市", 
        "level": 2
    }, 
    {
        "code": "451202", 
        "sheng": "45", 
        "di": "12", 
        "xian": "02", 
        "name": "金城江区", 
        "level": 3
    }, 
    {
        "code": "451221", 
        "sheng": "45", 
        "di": "12", 
        "xian": "21", 
        "name": "南丹县", 
        "level": 3
    }, 
    {
        "code": "451222", 
        "sheng": "45", 
        "di": "12", 
        "xian": "22", 
        "name": "天峨县", 
        "level": 3
    }, 
    {
        "code": "451223", 
        "sheng": "45", 
        "di": "12", 
        "xian": "23", 
        "name": "凤山县", 
        "level": 3
    }, 
    {
        "code": "451224", 
        "sheng": "45", 
        "di": "12", 
        "xian": "24", 
        "name": "东兰县", 
        "level": 3
    }, 
    {
        "code": "451225", 
        "sheng": "45", 
        "di": "12", 
        "xian": "25", 
        "name": "罗城仫佬族自治县", 
        "level": 3
    }, 
    {
        "code": "451226", 
        "sheng": "45", 
        "di": "12", 
        "xian": "26", 
        "name": "环江毛南族自治县", 
        "level": 3
    }, 
    {
        "code": "451227", 
        "sheng": "45", 
        "di": "12", 
        "xian": "27", 
        "name": "巴马瑶族自治县", 
        "level": 3
    }, 
    {
        "code": "451228", 
        "sheng": "45", 
        "di": "12", 
        "xian": "28", 
        "name": "都安瑶族自治县", 
        "level": 3
    }, 
    {
        "code": "451229", 
        "sheng": "45", 
        "di": "12", 
        "xian": "29", 
        "name": "大化瑶族自治县", 
        "level": 3
    }, 
    {
        "code": "451281", 
        "sheng": "45", 
        "di": "12", 
        "xian": "81", 
        "name": "宜州市", 
        "level": 3
    }, 
    {
        "code": "451300", 
        "sheng": "45", 
        "di": "13", 
        "xian": "00", 
        "name": "来宾市", 
        "level": 2
    }, 
    {
        "code": "451302", 
        "sheng": "45", 
        "di": "13", 
        "xian": "02", 
        "name": "兴宾区", 
        "level": 3
    }, 
    {
        "code": "451321", 
        "sheng": "45", 
        "di": "13", 
        "xian": "21", 
        "name": "忻城县", 
        "level": 3
    }, 
    {
        "code": "451322", 
        "sheng": "45", 
        "di": "13", 
        "xian": "22", 
        "name": "象州县", 
        "level": 3
    }, 
    {
        "code": "451323", 
        "sheng": "45", 
        "di": "13", 
        "xian": "23", 
        "name": "武宣县", 
        "level": 3
    }, 
    {
        "code": "451324", 
        "sheng": "45", 
        "di": "13", 
        "xian": "24", 
        "name": "金秀瑶族自治县", 
        "level": 3
    }, 
    {
        "code": "451381", 
        "sheng": "45", 
        "di": "13", 
        "xian": "81", 
        "name": "合山市", 
        "level": 3
    }, 
    {
        "code": "451400", 
        "sheng": "45", 
        "di": "14", 
        "xian": "00", 
        "name": "崇左市", 
        "level": 2
    }, 
    {
        "code": "451402", 
        "sheng": "45", 
        "di": "14", 
        "xian": "02", 
        "name": "江州区", 
        "level": 3
    }, 
    {
        "code": "451421", 
        "sheng": "45", 
        "di": "14", 
        "xian": "21", 
        "name": "扶绥县", 
        "level": 3
    }, 
    {
        "code": "451422", 
        "sheng": "45", 
        "di": "14", 
        "xian": "22", 
        "name": "宁明县", 
        "level": 3
    }, 
    {
        "code": "451423", 
        "sheng": "45", 
        "di": "14", 
        "xian": "23", 
        "name": "龙州县", 
        "level": 3
    }, 
    {
        "code": "451424", 
        "sheng": "45", 
        "di": "14", 
        "xian": "24", 
        "name": "大新县", 
        "level": 3
    }, 
    {
        "code": "451425", 
        "sheng": "45", 
        "di": "14", 
        "xian": "25", 
        "name": "天等县", 
        "level": 3
    }, 
    {
        "code": "451481", 
        "sheng": "45", 
        "di": "14", 
        "xian": "81", 
        "name": "凭祥市", 
        "level": 3
    }, 
    {
        "code": "460000", 
        "sheng": "46", 
        "di": "00", 
        "xian": "00", 
        "name": "海南省", 
        "level": 1
    }, 
    {
        "code": "460100", 
        "sheng": "46", 
        "di": "01", 
        "xian": "00", 
        "name": "海口市", 
        "level": 2
    }, 
    {
        "code": "460105", 
        "sheng": "46", 
        "di": "01", 
        "xian": "05", 
        "name": "秀英区", 
        "level": 3
    }, 
    {
        "code": "460106", 
        "sheng": "46", 
        "di": "01", 
        "xian": "06", 
        "name": "龙华区", 
        "level": 3
    }, 
    {
        "code": "460107", 
        "sheng": "46", 
        "di": "01", 
        "xian": "07", 
        "name": "琼山区", 
        "level": 3
    }, 
    {
        "code": "460108", 
        "sheng": "46", 
        "di": "01", 
        "xian": "08", 
        "name": "美兰区", 
        "level": 3
    }, 
    {
        "code": "460200", 
        "sheng": "46", 
        "di": "02", 
        "xian": "00", 
        "name": "三亚市", 
        "level": 2
    }, 
    {
        "code": "460202", 
        "sheng": "46", 
        "di": "02", 
        "xian": "02", 
        "name": "海棠区", 
        "level": 3
    }, 
    {
        "code": "460203", 
        "sheng": "46", 
        "di": "02", 
        "xian": "03", 
        "name": "吉阳区", 
        "level": 3
    }, 
    {
        "code": "460204", 
        "sheng": "46", 
        "di": "02", 
        "xian": "04", 
        "name": "天涯区", 
        "level": 3
    }, 
    {
        "code": "460205", 
        "sheng": "46", 
        "di": "02", 
        "xian": "05", 
        "name": "崖州区", 
        "level": 3
    }, 
    {
        "code": "460300", 
        "sheng": "46", 
        "di": "03", 
        "xian": "00", 
        "name": "三沙市", 
        "level": 2
    }, 
    {
        "code": "460321", 
        "sheng": "46", 
        "di": "03", 
        "xian": "21", 
        "name": "西沙群岛", 
        "level": 3
    }, 
    {
        "code": "460322", 
        "sheng": "46", 
        "di": "03", 
        "xian": "22", 
        "name": "南沙群岛", 
        "level": 3
    }, 
    {
        "code": "460323", 
        "sheng": "46", 
        "di": "03", 
        "xian": "23", 
        "name": "中沙群岛", 
        "level": 3
    }, 
    {
        "code": "460400", 
        "sheng": "46", 
        "di": "04", 
        "xian": "00", 
        "name": "儋州市", 
        "level": 2
    }, 
    {
        "code": "460401", 
        "sheng": "46", 
        "di": "04", 
        "xian": "01", 
        "name": "洋浦经济开发区", 
        "level": 3
    }, 
    {
        "code": "460402", 
        "sheng": "46", 
        "di": "04", 
        "xian": "02", 
        "name": "那大镇", 
        "level": 3
    }, 
    {
        "code": "460403", 
        "sheng": "46", 
        "di": "04", 
        "xian": "03", 
        "name": "南丰镇", 
        "level": 3
    }, 
    {
        "code": "460404", 
        "sheng": "46", 
        "di": "04", 
        "xian": "04", 
        "name": "雅星镇", 
        "level": 3
    }, 
    {
        "code": "460405", 
        "sheng": "46", 
        "di": "04", 
        "xian": "05", 
        "name": "和庆镇", 
        "level": 3
    }, 
    {
        "code": "460406", 
        "sheng": "46", 
        "di": "04", 
        "xian": "06", 
        "name": "大成镇", 
        "level": 3
    }, 
    {
        "code": "460407", 
        "sheng": "46", 
        "di": "04", 
        "xian": "07", 
        "name": "新州镇", 
        "level": 3
    }, 
    {
        "code": "460408", 
        "sheng": "46", 
        "di": "04", 
        "xian": "08", 
        "name": "光村镇", 
        "level": 3
    }, 
    {
        "code": "460409", 
        "sheng": "46", 
        "di": "04", 
        "xian": "09", 
        "name": "东成镇", 
        "level": 3
    }, 
    {
        "code": "460410", 
        "sheng": "46", 
        "di": "04", 
        "xian": "10", 
        "name": "中和镇", 
        "level": 3
    }, 
    {
        "code": "460411", 
        "sheng": "46", 
        "di": "04", 
        "xian": "11", 
        "name": "峨蔓镇", 
        "level": 3
    }, 
    {
        "code": "460412", 
        "sheng": "46", 
        "di": "04", 
        "xian": "12", 
        "name": "兰洋镇", 
        "level": 3
    }, 
    {
        "code": "460413", 
        "sheng": "46", 
        "di": "04", 
        "xian": "13", 
        "name": "王五镇", 
        "level": 3
    }, 
    {
        "code": "460414", 
        "sheng": "46", 
        "di": "04", 
        "xian": "14", 
        "name": "排浦镇", 
        "level": 3
    }, 
    {
        "code": "460415", 
        "sheng": "46", 
        "di": "04", 
        "xian": "15", 
        "name": "海头镇", 
        "level": 3
    }, 
    {
        "code": "460416", 
        "sheng": "46", 
        "di": "04", 
        "xian": "16", 
        "name": "木棠镇", 
        "level": 3
    }, 
    {
        "code": "460417", 
        "sheng": "46", 
        "di": "04", 
        "xian": "17", 
        "name": "白马井镇", 
        "level": 3
    }, 
    {
        "code": "460418", 
        "sheng": "46", 
        "di": "04", 
        "xian": "18", 
        "name": "三都镇", 
        "level": 3
    }, 
    {
        "code": "460419", 
        "sheng": "46", 
        "di": "04", 
        "xian": "19", 
        "name": "西培农场", 
        "level": 3
    }, 
    {
        "code": "460420", 
        "sheng": "46", 
        "di": "04", 
        "xian": "20", 
        "name": "西联农场", 
        "level": 3
    }, 
    {
        "code": "460421", 
        "sheng": "46", 
        "di": "04", 
        "xian": "21", 
        "name": "蓝洋农场", 
        "level": 3
    }, 
    {
        "code": "460422", 
        "sheng": "46", 
        "di": "04", 
        "xian": "22", 
        "name": "八一农场", 
        "level": 3
    }, 
    {
        "code": "460423", 
        "sheng": "46", 
        "di": "04", 
        "xian": "23", 
        "name": "西华农场", 
        "level": 3
    }, 
    {
        "code": "460424", 
        "sheng": "46", 
        "di": "04", 
        "xian": "24", 
        "name": "西庆农场", 
        "level": 3
    }, 
    {
        "code": "460425", 
        "sheng": "46", 
        "di": "04", 
        "xian": "25", 
        "name": "西流农场", 
        "level": 3
    }, 
    {
        "code": "460426", 
        "sheng": "46", 
        "di": "04", 
        "xian": "26", 
        "name": "新盈农场", 
        "level": 3
    }, 
    {
        "code": "460427", 
        "sheng": "46", 
        "di": "04", 
        "xian": "27", 
        "name": "龙山农场", 
        "level": 3
    }, 
    {
        "code": "460428", 
        "sheng": "46", 
        "di": "04", 
        "xian": "28", 
        "name": "红岭农场", 
        "level": 3
    }, 
    {
        "code": "469001", 
        "sheng": "46", 
        "di": "90", 
        "xian": "01", 
        "name": "五指山市", 
        "level": 2
    }, 
    {
        "code": "469002", 
        "sheng": "46", 
        "di": "90", 
        "xian": "02", 
        "name": "琼海市", 
        "level": 2
    }, 
    {
        "code": "469005", 
        "sheng": "46", 
        "di": "90", 
        "xian": "05", 
        "name": "文昌市", 
        "level": 2
    }, 
    {
        "code": "469006", 
        "sheng": "46", 
        "di": "90", 
        "xian": "06", 
        "name": "万宁市", 
        "level": 2
    }, 
    {
        "code": "469007", 
        "sheng": "46", 
        "di": "90", 
        "xian": "07", 
        "name": "东方市", 
        "level": 2
    }, 
    {
        "code": "469021", 
        "sheng": "46", 
        "di": "90", 
        "xian": "21", 
        "name": "定安县", 
        "level": 2
    }, 
    {
        "code": "469022", 
        "sheng": "46", 
        "di": "90", 
        "xian": "22", 
        "name": "屯昌县", 
        "level": 2
    }, 
    {
        "code": "469023", 
        "sheng": "46", 
        "di": "90", 
        "xian": "23", 
        "name": "澄迈县", 
        "level": 2
    }, 
    {
        "code": "469024", 
        "sheng": "46", 
        "di": "90", 
        "xian": "24", 
        "name": "临高县", 
        "level": 2
    }, 
    {
        "code": "469025", 
        "sheng": "46", 
        "di": "90", 
        "xian": "25", 
        "name": "白沙黎族自治县", 
        "level": 2
    }, 
    {
        "code": "469026", 
        "sheng": "46", 
        "di": "90", 
        "xian": "26", 
        "name": "昌江黎族自治县", 
        "level": 2
    }, 
    {
        "code": "469027", 
        "sheng": "46", 
        "di": "90", 
        "xian": "27", 
        "name": "乐东黎族自治县", 
        "level": 2
    }, 
    {
        "code": "469028", 
        "sheng": "46", 
        "di": "90", 
        "xian": "28", 
        "name": "陵水黎族自治县", 
        "level": 2
    }, 
    {
        "code": "469029", 
        "sheng": "46", 
        "di": "90", 
        "xian": "29", 
        "name": "保亭黎族苗族自治县", 
        "level": 2
    }, 
    {
        "code": "469030", 
        "sheng": "46", 
        "di": "90", 
        "xian": "30", 
        "name": "琼中黎族苗族自治县", 
        "level": 2
    }, 
    {
        "code": "469101", 
        "sheng": "46", 
        "di": "91", 
        "xian": "01", 
        "name": "通什镇", 
        "level": 3
    }, 
    {
        "code": "469102", 
        "sheng": "46", 
        "di": "91", 
        "xian": "02", 
        "name": "南圣镇", 
        "level": 3
    }, 
    {
        "code": "469103", 
        "sheng": "46", 
        "di": "91", 
        "xian": "03", 
        "name": "毛阳镇", 
        "level": 3
    }, 
    {
        "code": "469104", 
        "sheng": "46", 
        "di": "91", 
        "xian": "04", 
        "name": "番阳镇", 
        "level": 3
    }, 
    {
        "code": "469105", 
        "sheng": "46", 
        "di": "91", 
        "xian": "05", 
        "name": "畅好乡", 
        "level": 3
    }, 
    {
        "code": "469106", 
        "sheng": "46", 
        "di": "91", 
        "xian": "06", 
        "name": "毛道乡", 
        "level": 3
    }, 
    {
        "code": "469107", 
        "sheng": "46", 
        "di": "91", 
        "xian": "07", 
        "name": "水满乡", 
        "level": 3
    }, 
    {
        "code": "469201", 
        "sheng": "46", 
        "di": "92", 
        "xian": "01", 
        "name": "嘉积镇", 
        "level": 3
    }, 
    {
        "code": "469202", 
        "sheng": "46", 
        "di": "92", 
        "xian": "02", 
        "name": "万泉镇", 
        "level": 3
    }, 
    {
        "code": "469203", 
        "sheng": "46", 
        "di": "92", 
        "xian": "03", 
        "name": "石壁镇", 
        "level": 3
    }, 
    {
        "code": "469204", 
        "sheng": "46", 
        "di": "92", 
        "xian": "04", 
        "name": "中原镇", 
        "level": 3
    }, 
    {
        "code": "469205", 
        "sheng": "46", 
        "di": "92", 
        "xian": "05", 
        "name": "博鳌镇", 
        "level": 3
    }, 
    {
        "code": "469206", 
        "sheng": "46", 
        "di": "92", 
        "xian": "06", 
        "name": "阳江镇", 
        "level": 3
    }, 
    {
        "code": "469207", 
        "sheng": "46", 
        "di": "92", 
        "xian": "07", 
        "name": "龙江镇", 
        "level": 3
    }, 
    {
        "code": "469208", 
        "sheng": "46", 
        "di": "92", 
        "xian": "08", 
        "name": "潭门镇", 
        "level": 3
    }, 
    {
        "code": "469209", 
        "sheng": "46", 
        "di": "92", 
        "xian": "09", 
        "name": "塔洋镇", 
        "level": 3
    }, 
    {
        "code": "469210", 
        "sheng": "46", 
        "di": "92", 
        "xian": "10", 
        "name": "长坡镇", 
        "level": 3
    }, 
    {
        "code": "469211", 
        "sheng": "46", 
        "di": "92", 
        "xian": "11", 
        "name": "大路镇", 
        "level": 3
    }, 
    {
        "code": "469212", 
        "sheng": "46", 
        "di": "92", 
        "xian": "12", 
        "name": "会山镇", 
        "level": 3
    }, 
    {
        "code": "469213", 
        "sheng": "46", 
        "di": "92", 
        "xian": "13", 
        "name": "东太农场", 
        "level": 3
    }, 
    {
        "code": "469214", 
        "sheng": "46", 
        "di": "92", 
        "xian": "14", 
        "name": "东红农场", 
        "level": 3
    }, 
    {
        "code": "469215", 
        "sheng": "46", 
        "di": "92", 
        "xian": "15", 
        "name": "东升农场", 
        "level": 3
    }, 
    {
        "code": "469216", 
        "sheng": "46", 
        "di": "92", 
        "xian": "16", 
        "name": "南俸农场", 
        "level": 3
    }, 
    {
        "code": "469217", 
        "sheng": "46", 
        "di": "92", 
        "xian": "17", 
        "name": "彬村山华侨农场", 
        "level": 3
    }, 
    {
        "code": "469501", 
        "sheng": "46", 
        "di": "95", 
        "xian": "01", 
        "name": "文城镇", 
        "level": 3
    }, 
    {
        "code": "469502", 
        "sheng": "46", 
        "di": "95", 
        "xian": "02", 
        "name": "重兴镇", 
        "level": 3
    }, 
    {
        "code": "469503", 
        "sheng": "46", 
        "di": "95", 
        "xian": "03", 
        "name": "蓬莱镇", 
        "level": 3
    }, 
    {
        "code": "469504", 
        "sheng": "46", 
        "di": "95", 
        "xian": "04", 
        "name": "会文镇", 
        "level": 3
    }, 
    {
        "code": "469505", 
        "sheng": "46", 
        "di": "95", 
        "xian": "05", 
        "name": "东路镇", 
        "level": 3
    }, 
    {
        "code": "469506", 
        "sheng": "46", 
        "di": "95", 
        "xian": "06", 
        "name": "潭牛镇", 
        "level": 3
    }, 
    {
        "code": "469507", 
        "sheng": "46", 
        "di": "95", 
        "xian": "07", 
        "name": "东阁镇", 
        "level": 3
    }, 
    {
        "code": "469508", 
        "sheng": "46", 
        "di": "95", 
        "xian": "08", 
        "name": "文教镇", 
        "level": 3
    }, 
    {
        "code": "469509", 
        "sheng": "46", 
        "di": "95", 
        "xian": "09", 
        "name": "东郊镇", 
        "level": 3
    }, 
    {
        "code": "469510", 
        "sheng": "46", 
        "di": "95", 
        "xian": "10", 
        "name": "龙楼镇", 
        "level": 3
    }, 
    {
        "code": "469511", 
        "sheng": "46", 
        "di": "95", 
        "xian": "11", 
        "name": "昌洒镇", 
        "level": 3
    }, 
    {
        "code": "469512", 
        "sheng": "46", 
        "di": "95", 
        "xian": "12", 
        "name": "翁田镇", 
        "level": 3
    }, 
    {
        "code": "469513", 
        "sheng": "46", 
        "di": "95", 
        "xian": "13", 
        "name": "抱罗镇", 
        "level": 3
    }, 
    {
        "code": "469514", 
        "sheng": "46", 
        "di": "95", 
        "xian": "14", 
        "name": "冯坡镇", 
        "level": 3
    }, 
    {
        "code": "469515", 
        "sheng": "46", 
        "di": "95", 
        "xian": "15", 
        "name": "锦山镇", 
        "level": 3
    }, 
    {
        "code": "469516", 
        "sheng": "46", 
        "di": "95", 
        "xian": "16", 
        "name": "铺前镇", 
        "level": 3
    }, 
    {
        "code": "469517", 
        "sheng": "46", 
        "di": "95", 
        "xian": "17", 
        "name": "公坡镇", 
        "level": 3
    }, 
    {
        "code": "469518", 
        "sheng": "46", 
        "di": "95", 
        "xian": "18", 
        "name": "迈号镇", 
        "level": 3
    }, 
    {
        "code": "469519", 
        "sheng": "46", 
        "di": "95", 
        "xian": "19", 
        "name": "清谰镇", 
        "level": 3
    }, 
    {
        "code": "469520", 
        "sheng": "46", 
        "di": "95", 
        "xian": "20", 
        "name": "南阳镇", 
        "level": 3
    }, 
    {
        "code": "469521", 
        "sheng": "46", 
        "di": "95", 
        "xian": "21", 
        "name": "新桥镇", 
        "level": 3
    }, 
    {
        "code": "469522", 
        "sheng": "46", 
        "di": "95", 
        "xian": "22", 
        "name": "头苑镇", 
        "level": 3
    }, 
    {
        "code": "469523", 
        "sheng": "46", 
        "di": "95", 
        "xian": "23", 
        "name": "宝芳乡", 
        "level": 3
    }, 
    {
        "code": "469524", 
        "sheng": "46", 
        "di": "95", 
        "xian": "24", 
        "name": "龙马乡", 
        "level": 3
    }, 
    {
        "code": "469525", 
        "sheng": "46", 
        "di": "95", 
        "xian": "25", 
        "name": "湖山乡", 
        "level": 3
    }, 
    {
        "code": "469526", 
        "sheng": "46", 
        "di": "95", 
        "xian": "26", 
        "name": "东路农场", 
        "level": 3
    }, 
    {
        "code": "469527", 
        "sheng": "46", 
        "di": "95", 
        "xian": "27", 
        "name": "南阳农场", 
        "level": 3
    }, 
    {
        "code": "469528", 
        "sheng": "46", 
        "di": "95", 
        "xian": "28", 
        "name": "罗豆农场", 
        "level": 3
    }, 
    {
        "code": "469601", 
        "sheng": "46", 
        "di": "96", 
        "xian": "01", 
        "name": "万城镇", 
        "level": 3
    }, 
    {
        "code": "469602", 
        "sheng": "46", 
        "di": "96", 
        "xian": "02", 
        "name": "龙滚镇", 
        "level": 3
    }, 
    {
        "code": "469603", 
        "sheng": "46", 
        "di": "96", 
        "xian": "03", 
        "name": "和乐镇", 
        "level": 3
    }, 
    {
        "code": "469604", 
        "sheng": "46", 
        "di": "96", 
        "xian": "04", 
        "name": "后安镇", 
        "level": 3
    }, 
    {
        "code": "469605", 
        "sheng": "46", 
        "di": "96", 
        "xian": "05", 
        "name": "大茂镇", 
        "level": 3
    }, 
    {
        "code": "469606", 
        "sheng": "46", 
        "di": "96", 
        "xian": "06", 
        "name": "东澳镇", 
        "level": 3
    }, 
    {
        "code": "469607", 
        "sheng": "46", 
        "di": "96", 
        "xian": "07", 
        "name": "礼纪镇", 
        "level": 3
    }, 
    {
        "code": "469608", 
        "sheng": "46", 
        "di": "96", 
        "xian": "08", 
        "name": "长丰镇", 
        "level": 3
    }, 
    {
        "code": "469609", 
        "sheng": "46", 
        "di": "96", 
        "xian": "09", 
        "name": "山根镇", 
        "level": 3
    }, 
    {
        "code": "469610", 
        "sheng": "46", 
        "di": "96", 
        "xian": "10", 
        "name": "北大镇", 
        "level": 3
    }, 
    {
        "code": "469611", 
        "sheng": "46", 
        "di": "96", 
        "xian": "11", 
        "name": "南桥镇", 
        "level": 3
    }, 
    {
        "code": "469612", 
        "sheng": "46", 
        "di": "96", 
        "xian": "12", 
        "name": "三更罗镇", 
        "level": 3
    }, 
    {
        "code": "469613", 
        "sheng": "46", 
        "di": "96", 
        "xian": "13", 
        "name": "东岭农场", 
        "level": 3
    }, 
    {
        "code": "469614", 
        "sheng": "46", 
        "di": "96", 
        "xian": "14", 
        "name": "南林农场", 
        "level": 3
    }, 
    {
        "code": "469615", 
        "sheng": "46", 
        "di": "96", 
        "xian": "15", 
        "name": "东兴农场", 
        "level": 3
    }, 
    {
        "code": "469616", 
        "sheng": "46", 
        "di": "96", 
        "xian": "16", 
        "name": "东和农场", 
        "level": 3
    }, 
    {
        "code": "469617", 
        "sheng": "46", 
        "di": "96", 
        "xian": "17", 
        "name": "新中农场", 
        "level": 3
    }, 
    {
        "code": "469618", 
        "sheng": "46", 
        "di": "96", 
        "xian": "18", 
        "name": "兴隆华侨农场", 
        "level": 3
    }, 
    {
        "code": "469701", 
        "sheng": "46", 
        "di": "97", 
        "xian": "01", 
        "name": "八所镇", 
        "level": 3
    }, 
    {
        "code": "469702", 
        "sheng": "46", 
        "di": "97", 
        "xian": "02", 
        "name": "东河镇", 
        "level": 3
    }, 
    {
        "code": "469703", 
        "sheng": "46", 
        "di": "97", 
        "xian": "03", 
        "name": "大田镇", 
        "level": 3
    }, 
    {
        "code": "469704", 
        "sheng": "46", 
        "di": "97", 
        "xian": "04", 
        "name": "感城镇", 
        "level": 3
    }, 
    {
        "code": "469705", 
        "sheng": "46", 
        "di": "97", 
        "xian": "05", 
        "name": "板桥镇", 
        "level": 3
    }, 
    {
        "code": "469706", 
        "sheng": "46", 
        "di": "97", 
        "xian": "06", 
        "name": "三家镇", 
        "level": 3
    }, 
    {
        "code": "469707", 
        "sheng": "46", 
        "di": "97", 
        "xian": "07", 
        "name": "四更镇", 
        "level": 3
    }, 
    {
        "code": "469708", 
        "sheng": "46", 
        "di": "97", 
        "xian": "08", 
        "name": "新龙镇", 
        "level": 3
    }, 
    {
        "code": "469709", 
        "sheng": "46", 
        "di": "97", 
        "xian": "09", 
        "name": "天安乡", 
        "level": 3
    }, 
    {
        "code": "469710", 
        "sheng": "46", 
        "di": "97", 
        "xian": "10", 
        "name": "江边乡", 
        "level": 3
    }, 
    {
        "code": "469711", 
        "sheng": "46", 
        "di": "97", 
        "xian": "11", 
        "name": "广坝农场", 
        "level": 3
    }, 
    {
        "code": "469712", 
        "sheng": "46", 
        "di": "97", 
        "xian": "12", 
        "name": "东方华侨农场", 
        "level": 3
    }, 
    {
        "code": "469801", 
        "sheng": "46", 
        "di": "98", 
        "xian": "01", 
        "name": "定城镇", 
        "level": 3
    }, 
    {
        "code": "469802", 
        "sheng": "46", 
        "di": "98", 
        "xian": "02", 
        "name": "新竹镇", 
        "level": 3
    }, 
    {
        "code": "469803", 
        "sheng": "46", 
        "di": "98", 
        "xian": "03", 
        "name": "龙湖镇", 
        "level": 3
    }, 
    {
        "code": "469804", 
        "sheng": "46", 
        "di": "98", 
        "xian": "04", 
        "name": "雷鸣镇", 
        "level": 3
    }, 
    {
        "code": "469805", 
        "sheng": "46", 
        "di": "98", 
        "xian": "05", 
        "name": "龙门镇", 
        "level": 3
    }, 
    {
        "code": "469806", 
        "sheng": "46", 
        "di": "98", 
        "xian": "06", 
        "name": "龙河镇", 
        "level": 3
    }, 
    {
        "code": "469807", 
        "sheng": "46", 
        "di": "98", 
        "xian": "07", 
        "name": "岭口镇", 
        "level": 3
    }, 
    {
        "code": "469808", 
        "sheng": "46", 
        "di": "98", 
        "xian": "08", 
        "name": "翰林镇", 
        "level": 3
    }, 
    {
        "code": "469809", 
        "sheng": "46", 
        "di": "98", 
        "xian": "09", 
        "name": "富文镇", 
        "level": 3
    }, 
    {
        "code": "469810", 
        "sheng": "46", 
        "di": "98", 
        "xian": "10", 
        "name": "黄竹镇", 
        "level": 3
    }, 
    {
        "code": "469811", 
        "sheng": "46", 
        "di": "98", 
        "xian": "11", 
        "name": "金鸡岭农场", 
        "level": 3
    }, 
    {
        "code": "469812", 
        "sheng": "46", 
        "di": "98", 
        "xian": "12", 
        "name": "中瑞农场", 
        "level": 3
    }, 
    {
        "code": "469813", 
        "sheng": "46", 
        "di": "98", 
        "xian": "13", 
        "name": "南海农场", 
        "level": 3
    }, 
    {
        "code": "469814", 
        "sheng": "46", 
        "di": "98", 
        "xian": "14", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "469821", 
        "sheng": "46", 
        "di": "98", 
        "xian": "21", 
        "name": "屯城镇", 
        "level": 3
    }, 
    {
        "code": "469822", 
        "sheng": "46", 
        "di": "98", 
        "xian": "22", 
        "name": "新兴镇", 
        "level": 3
    }, 
    {
        "code": "469823", 
        "sheng": "46", 
        "di": "98", 
        "xian": "23", 
        "name": "枫木镇", 
        "level": 3
    }, 
    {
        "code": "469824", 
        "sheng": "46", 
        "di": "98", 
        "xian": "24", 
        "name": "乌坡镇", 
        "level": 3
    }, 
    {
        "code": "469825", 
        "sheng": "46", 
        "di": "98", 
        "xian": "25", 
        "name": "南吕镇", 
        "level": 3
    }, 
    {
        "code": "469826", 
        "sheng": "46", 
        "di": "98", 
        "xian": "26", 
        "name": "南坤镇", 
        "level": 3
    }, 
    {
        "code": "469827", 
        "sheng": "46", 
        "di": "98", 
        "xian": "27", 
        "name": "坡心镇", 
        "level": 3
    }, 
    {
        "code": "469828", 
        "sheng": "46", 
        "di": "98", 
        "xian": "28", 
        "name": "西昌镇", 
        "level": 3
    }, 
    {
        "code": "469829", 
        "sheng": "46", 
        "di": "98", 
        "xian": "29", 
        "name": "中建农场", 
        "level": 3
    }, 
    {
        "code": "469830", 
        "sheng": "46", 
        "di": "98", 
        "xian": "30", 
        "name": "中坤农场", 
        "level": 3
    }, 
    {
        "code": "469831", 
        "sheng": "46", 
        "di": "98", 
        "xian": "31", 
        "name": "县城内", 
        "level": 3
    }, 
    {
        "code": "469841", 
        "sheng": "46", 
        "di": "98", 
        "xian": "41", 
        "name": "金江镇", 
        "level": 3
    }, 
    {
        "code": "469842", 
        "sheng": "46", 
        "di": "98", 
        "xian": "42", 
        "name": "老城镇", 
        "level": 3
    }, 
    {
        "code": "469843", 
        "sheng": "46", 
        "di": "98", 
        "xian": "43", 
        "name": "瑞溪镇", 
        "level": 3
    }, 
    {
        "code": "469844", 
        "sheng": "46", 
        "di": "98", 
        "xian": "44", 
        "name": "永发镇", 
        "level": 3
    }, 
    {
        "code": "469845", 
        "sheng": "46", 
        "di": "98", 
        "xian": "45", 
        "name": "加乐镇", 
        "level": 3
    }, 
    {
        "code": "469846", 
        "sheng": "46", 
        "di": "98", 
        "xian": "46", 
        "name": "文儒镇", 
        "level": 3
    }, 
    {
        "code": "469847", 
        "sheng": "46", 
        "di": "98", 
        "xian": "47", 
        "name": "中兴镇", 
        "level": 3
    }, 
    {
        "code": "469848", 
        "sheng": "46", 
        "di": "98", 
        "xian": "48", 
        "name": "仁兴镇", 
        "level": 3
    }, 
    {
        "code": "469849", 
        "sheng": "46", 
        "di": "98", 
        "xian": "49", 
        "name": "福山镇", 
        "level": 3
    }, 
    {
        "code": "469850", 
        "sheng": "46", 
        "di": "98", 
        "xian": "50", 
        "name": "桥头镇", 
        "level": 3
    }, 
    {
        "code": "469851", 
        "sheng": "46", 
        "di": "98", 
        "xian": "51", 
        "name": "大丰镇", 
        "level": 3
    }, 
    {
        "code": "469852", 
        "sheng": "46", 
        "di": "98", 
        "xian": "52", 
        "name": "红光农场", 
        "level": 3
    }, 
    {
        "code": "469853", 
        "sheng": "46", 
        "di": "98", 
        "xian": "53", 
        "name": "西达农场", 
        "level": 3
    }, 
    {
        "code": "469854", 
        "sheng": "46", 
        "di": "98", 
        "xian": "54", 
        "name": "金安农场", 
        "level": 3
    }, 
    {
        "code": "469855", 
        "sheng": "46", 
        "di": "98", 
        "xian": "55", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "469861", 
        "sheng": "46", 
        "di": "98", 
        "xian": "61", 
        "name": "临城镇", 
        "level": 3
    }, 
    {
        "code": "469862", 
        "sheng": "46", 
        "di": "98", 
        "xian": "62", 
        "name": "波莲镇", 
        "level": 3
    }, 
    {
        "code": "469863", 
        "sheng": "46", 
        "di": "98", 
        "xian": "63", 
        "name": "东英镇", 
        "level": 3
    }, 
    {
        "code": "469864", 
        "sheng": "46", 
        "di": "98", 
        "xian": "64", 
        "name": "博厚镇", 
        "level": 3
    }, 
    {
        "code": "469865", 
        "sheng": "46", 
        "di": "98", 
        "xian": "65", 
        "name": "皇桐镇", 
        "level": 3
    }, 
    {
        "code": "469866", 
        "sheng": "46", 
        "di": "98", 
        "xian": "66", 
        "name": "多文镇", 
        "level": 3
    }, 
    {
        "code": "469867", 
        "sheng": "46", 
        "di": "98", 
        "xian": "67", 
        "name": "和舍镇", 
        "level": 3
    }, 
    {
        "code": "469868", 
        "sheng": "46", 
        "di": "98", 
        "xian": "68", 
        "name": "南宝镇", 
        "level": 3
    }, 
    {
        "code": "469869", 
        "sheng": "46", 
        "di": "98", 
        "xian": "69", 
        "name": "新盈镇", 
        "level": 3
    }, 
    {
        "code": "469870", 
        "sheng": "46", 
        "di": "98", 
        "xian": "70", 
        "name": "调楼镇", 
        "level": 3
    }, 
    {
        "code": "469871", 
        "sheng": "46", 
        "di": "98", 
        "xian": "71", 
        "name": "加来镇", 
        "level": 3
    }, 
    {
        "code": "469872", 
        "sheng": "46", 
        "di": "98", 
        "xian": "72", 
        "name": "红华农场", 
        "level": 3
    }, 
    {
        "code": "469873", 
        "sheng": "46", 
        "di": "98", 
        "xian": "73", 
        "name": "加来农场", 
        "level": 3
    }, 
    {
        "code": "469874", 
        "sheng": "46", 
        "di": "98", 
        "xian": "74", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "469881", 
        "sheng": "46", 
        "di": "98", 
        "xian": "81", 
        "name": "牙叉镇", 
        "level": 3
    }, 
    {
        "code": "469882", 
        "sheng": "46", 
        "di": "98", 
        "xian": "82", 
        "name": "七坊镇", 
        "level": 3
    }, 
    {
        "code": "469883", 
        "sheng": "46", 
        "di": "98", 
        "xian": "83", 
        "name": "邦溪镇", 
        "level": 3
    }, 
    {
        "code": "469884", 
        "sheng": "46", 
        "di": "98", 
        "xian": "84", 
        "name": "打安镇", 
        "level": 3
    }, 
    {
        "code": "469885", 
        "sheng": "46", 
        "di": "98", 
        "xian": "85", 
        "name": "细水乡", 
        "level": 3
    }, 
    {
        "code": "469886", 
        "sheng": "46", 
        "di": "98", 
        "xian": "86", 
        "name": "元门乡", 
        "level": 3
    }, 
    {
        "code": "469887", 
        "sheng": "46", 
        "di": "98", 
        "xian": "87", 
        "name": "南开乡", 
        "level": 3
    }, 
    {
        "code": "469888", 
        "sheng": "46", 
        "di": "98", 
        "xian": "88", 
        "name": "阜龙乡", 
        "level": 3
    }, 
    {
        "code": "469889", 
        "sheng": "46", 
        "di": "98", 
        "xian": "89", 
        "name": "青松乡", 
        "level": 3
    }, 
    {
        "code": "469890", 
        "sheng": "46", 
        "di": "98", 
        "xian": "90", 
        "name": "金波乡", 
        "level": 3
    }, 
    {
        "code": "469891", 
        "sheng": "46", 
        "di": "98", 
        "xian": "91", 
        "name": "荣邦乡", 
        "level": 3
    }, 
    {
        "code": "469892", 
        "sheng": "46", 
        "di": "98", 
        "xian": "92", 
        "name": "白沙农场", 
        "level": 3
    }, 
    {
        "code": "469893", 
        "sheng": "46", 
        "di": "98", 
        "xian": "93", 
        "name": "龙江农场", 
        "level": 3
    }, 
    {
        "code": "469894", 
        "sheng": "46", 
        "di": "98", 
        "xian": "94", 
        "name": "邦溪农场", 
        "level": 3
    }, 
    {
        "code": "469895", 
        "sheng": "46", 
        "di": "98", 
        "xian": "95", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "469901", 
        "sheng": "46", 
        "di": "99", 
        "xian": "01", 
        "name": "石碌镇", 
        "level": 3
    }, 
    {
        "code": "469902", 
        "sheng": "46", 
        "di": "99", 
        "xian": "02", 
        "name": "叉河镇", 
        "level": 3
    }, 
    {
        "code": "469903", 
        "sheng": "46", 
        "di": "99", 
        "xian": "03", 
        "name": "十月田镇", 
        "level": 3
    }, 
    {
        "code": "469904", 
        "sheng": "46", 
        "di": "99", 
        "xian": "04", 
        "name": "乌烈镇", 
        "level": 3
    }, 
    {
        "code": "469905", 
        "sheng": "46", 
        "di": "99", 
        "xian": "05", 
        "name": "海尾镇", 
        "level": 3
    }, 
    {
        "code": "469906", 
        "sheng": "46", 
        "di": "99", 
        "xian": "06", 
        "name": "南罗镇", 
        "level": 3
    }, 
    {
        "code": "469907", 
        "sheng": "46", 
        "di": "99", 
        "xian": "07", 
        "name": "太坡镇", 
        "level": 3
    }, 
    {
        "code": "469908", 
        "sheng": "46", 
        "di": "99", 
        "xian": "08", 
        "name": "昌化镇", 
        "level": 3
    }, 
    {
        "code": "469909", 
        "sheng": "46", 
        "di": "99", 
        "xian": "09", 
        "name": "七叉镇", 
        "level": 3
    }, 
    {
        "code": "469910", 
        "sheng": "46", 
        "di": "99", 
        "xian": "10", 
        "name": "保平乡", 
        "level": 3
    }, 
    {
        "code": "469911", 
        "sheng": "46", 
        "di": "99", 
        "xian": "11", 
        "name": "昌城乡", 
        "level": 3
    }, 
    {
        "code": "469912", 
        "sheng": "46", 
        "di": "99", 
        "xian": "12", 
        "name": "王下乡", 
        "level": 3
    }, 
    {
        "code": "469913", 
        "sheng": "46", 
        "di": "99", 
        "xian": "13", 
        "name": "霸王岭林场", 
        "level": 3
    }, 
    {
        "code": "469914", 
        "sheng": "46", 
        "di": "99", 
        "xian": "14", 
        "name": "红林农场", 
        "level": 3
    }, 
    {
        "code": "469915", 
        "sheng": "46", 
        "di": "99", 
        "xian": "15", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "469920", 
        "sheng": "46", 
        "di": "99", 
        "xian": "20", 
        "name": "抱由镇", 
        "level": 3
    }, 
    {
        "code": "469921", 
        "sheng": "46", 
        "di": "99", 
        "xian": "21", 
        "name": "万冲镇", 
        "level": 3
    }, 
    {
        "code": "469922", 
        "sheng": "46", 
        "di": "99", 
        "xian": "22", 
        "name": "大安镇", 
        "level": 3
    }, 
    {
        "code": "469923", 
        "sheng": "46", 
        "di": "99", 
        "xian": "23", 
        "name": "志仲镇", 
        "level": 3
    }, 
    {
        "code": "469924", 
        "sheng": "46", 
        "di": "99", 
        "xian": "24", 
        "name": "千家镇", 
        "level": 3
    }, 
    {
        "code": "469925", 
        "sheng": "46", 
        "di": "99", 
        "xian": "25", 
        "name": "九所镇", 
        "level": 3
    }, 
    {
        "code": "469926", 
        "sheng": "46", 
        "di": "99", 
        "xian": "26", 
        "name": "利国镇", 
        "level": 3
    }, 
    {
        "code": "469927", 
        "sheng": "46", 
        "di": "99", 
        "xian": "27", 
        "name": "黄流镇", 
        "level": 3
    }, 
    {
        "code": "469928", 
        "sheng": "46", 
        "di": "99", 
        "xian": "28", 
        "name": "佛罗镇", 
        "level": 3
    }, 
    {
        "code": "469929", 
        "sheng": "46", 
        "di": "99", 
        "xian": "29", 
        "name": "尖峰镇", 
        "level": 3
    }, 
    {
        "code": "469930", 
        "sheng": "46", 
        "di": "99", 
        "xian": "30", 
        "name": "莺歌海镇", 
        "level": 3
    }, 
    {
        "code": "469931", 
        "sheng": "46", 
        "di": "99", 
        "xian": "31", 
        "name": "乐中农场", 
        "level": 3
    }, 
    {
        "code": "469932", 
        "sheng": "46", 
        "di": "99", 
        "xian": "32", 
        "name": "山荣农场", 
        "level": 3
    }, 
    {
        "code": "469933", 
        "sheng": "46", 
        "di": "99", 
        "xian": "33", 
        "name": "乐光农场", 
        "level": 3
    }, 
    {
        "code": "469934", 
        "sheng": "46", 
        "di": "99", 
        "xian": "34", 
        "name": "报伦农场", 
        "level": 3
    }, 
    {
        "code": "469935", 
        "sheng": "46", 
        "di": "99", 
        "xian": "35", 
        "name": "福报农场", 
        "level": 3
    }, 
    {
        "code": "469936", 
        "sheng": "46", 
        "di": "99", 
        "xian": "36", 
        "name": "保国农场", 
        "level": 3
    }, 
    {
        "code": "469937", 
        "sheng": "46", 
        "di": "99", 
        "xian": "37", 
        "name": "保显农场", 
        "level": 3
    }, 
    {
        "code": "469938", 
        "sheng": "46", 
        "di": "99", 
        "xian": "38", 
        "name": "尖峰岭林业", 
        "level": 3
    }, 
    {
        "code": "469939", 
        "sheng": "46", 
        "di": "99", 
        "xian": "39", 
        "name": "莺歌海盐场", 
        "level": 3
    }, 
    {
        "code": "469940", 
        "sheng": "46", 
        "di": "99", 
        "xian": "40", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "469941", 
        "sheng": "46", 
        "di": "99", 
        "xian": "41", 
        "name": "椰林镇", 
        "level": 3
    }, 
    {
        "code": "469942", 
        "sheng": "46", 
        "di": "99", 
        "xian": "42", 
        "name": "光坡镇", 
        "level": 3
    }, 
    {
        "code": "469943", 
        "sheng": "46", 
        "di": "99", 
        "xian": "43", 
        "name": "三才镇", 
        "level": 3
    }, 
    {
        "code": "469944", 
        "sheng": "46", 
        "di": "99", 
        "xian": "44", 
        "name": "英州镇", 
        "level": 3
    }, 
    {
        "code": "469945", 
        "sheng": "46", 
        "di": "99", 
        "xian": "45", 
        "name": "隆广镇", 
        "level": 3
    }, 
    {
        "code": "469946", 
        "sheng": "46", 
        "di": "99", 
        "xian": "46", 
        "name": "文罗镇", 
        "level": 3
    }, 
    {
        "code": "469947", 
        "sheng": "46", 
        "di": "99", 
        "xian": "47", 
        "name": "本号镇", 
        "level": 3
    }, 
    {
        "code": "469948", 
        "sheng": "46", 
        "di": "99", 
        "xian": "48", 
        "name": "新村镇", 
        "level": 3
    }, 
    {
        "code": "469949", 
        "sheng": "46", 
        "di": "99", 
        "xian": "49", 
        "name": "黎安镇", 
        "level": 3
    }, 
    {
        "code": "469950", 
        "sheng": "46", 
        "di": "99", 
        "xian": "50", 
        "name": "提蒙乡", 
        "level": 3
    }, 
    {
        "code": "469951", 
        "sheng": "46", 
        "di": "99", 
        "xian": "51", 
        "name": "群英乡", 
        "level": 3
    }, 
    {
        "code": "469952", 
        "sheng": "46", 
        "di": "99", 
        "xian": "52", 
        "name": "岭门农场", 
        "level": 3
    }, 
    {
        "code": "469953", 
        "sheng": "46", 
        "di": "99", 
        "xian": "53", 
        "name": "南平农场", 
        "level": 3
    }, 
    {
        "code": "469954", 
        "sheng": "46", 
        "di": "99", 
        "xian": "54", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "469961", 
        "sheng": "46", 
        "di": "99", 
        "xian": "61", 
        "name": "保城镇", 
        "level": 3
    }, 
    {
        "code": "469962", 
        "sheng": "46", 
        "di": "99", 
        "xian": "62", 
        "name": "什玲镇", 
        "level": 3
    }, 
    {
        "code": "469963", 
        "sheng": "46", 
        "di": "99", 
        "xian": "63", 
        "name": "加茂镇", 
        "level": 3
    }, 
    {
        "code": "469964", 
        "sheng": "46", 
        "di": "99", 
        "xian": "64", 
        "name": "响水镇", 
        "level": 3
    }, 
    {
        "code": "469965", 
        "sheng": "46", 
        "di": "99", 
        "xian": "65", 
        "name": "新政镇", 
        "level": 3
    }, 
    {
        "code": "469966", 
        "sheng": "46", 
        "di": "99", 
        "xian": "66", 
        "name": "三道镇", 
        "level": 3
    }, 
    {
        "code": "469967", 
        "sheng": "46", 
        "di": "99", 
        "xian": "67", 
        "name": "六弓乡", 
        "level": 3
    }, 
    {
        "code": "469968", 
        "sheng": "46", 
        "di": "99", 
        "xian": "68", 
        "name": "南林乡", 
        "level": 3
    }, 
    {
        "code": "469969", 
        "sheng": "46", 
        "di": "99", 
        "xian": "69", 
        "name": "毛感乡", 
        "level": 3
    }, 
    {
        "code": "469970", 
        "sheng": "46", 
        "di": "99", 
        "xian": "70", 
        "name": "新星农场", 
        "level": 3
    }, 
    {
        "code": "469971", 
        "sheng": "46", 
        "di": "99", 
        "xian": "71", 
        "name": "金江农场", 
        "level": 3
    }, 
    {
        "code": "469972", 
        "sheng": "46", 
        "di": "99", 
        "xian": "72", 
        "name": "三道农场", 
        "level": 3
    }, 
    {
        "code": "469981", 
        "sheng": "46", 
        "di": "99", 
        "xian": "81", 
        "name": "营根镇", 
        "level": 3
    }, 
    {
        "code": "469982", 
        "sheng": "46", 
        "di": "99", 
        "xian": "82", 
        "name": "湾岭镇", 
        "level": 3
    }, 
    {
        "code": "469983", 
        "sheng": "46", 
        "di": "99", 
        "xian": "83", 
        "name": "黎母山镇", 
        "level": 3
    }, 
    {
        "code": "469984", 
        "sheng": "46", 
        "di": "99", 
        "xian": "84", 
        "name": "和平镇", 
        "level": 3
    }, 
    {
        "code": "469985", 
        "sheng": "46", 
        "di": "99", 
        "xian": "85", 
        "name": "长征镇", 
        "level": 3
    }, 
    {
        "code": "469986", 
        "sheng": "46", 
        "di": "99", 
        "xian": "86", 
        "name": "红毛镇", 
        "level": 3
    }, 
    {
        "code": "469987", 
        "sheng": "46", 
        "di": "99", 
        "xian": "87", 
        "name": "中平镇", 
        "level": 3
    }, 
    {
        "code": "469988", 
        "sheng": "46", 
        "di": "99", 
        "xian": "88", 
        "name": "上安乡", 
        "level": 3
    }, 
    {
        "code": "469989", 
        "sheng": "46", 
        "di": "99", 
        "xian": "89", 
        "name": "什运乡", 
        "level": 3
    }, 
    {
        "code": "469990", 
        "sheng": "46", 
        "di": "99", 
        "xian": "90", 
        "name": "吊罗山乡", 
        "level": 3
    }, 
    {
        "code": "469991", 
        "sheng": "46", 
        "di": "99", 
        "xian": "91", 
        "name": "阳江农场", 
        "level": 3
    }, 
    {
        "code": "469992", 
        "sheng": "46", 
        "di": "99", 
        "xian": "92", 
        "name": "乌石农场", 
        "level": 3
    }, 
    {
        "code": "469993", 
        "sheng": "46", 
        "di": "99", 
        "xian": "93", 
        "name": "加钗农场", 
        "level": 3
    }, 
    {
        "code": "469994", 
        "sheng": "46", 
        "di": "99", 
        "xian": "94", 
        "name": "长征农场", 
        "level": 3
    }, 
    {
        "code": "469995", 
        "sheng": "46", 
        "di": "99", 
        "xian": "95", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "500000", 
        "sheng": "50", 
        "di": "00", 
        "xian": "00", 
        "name": "重庆", 
        "level": 1
    }, 
    {
        "code": "500100", 
        "sheng": "50", 
        "di": "01", 
        "xian": "00", 
        "name": "重庆市", 
        "level": 2
    }, 
    {
        "code": "500101", 
        "sheng": "50", 
        "di": "01", 
        "xian": "01", 
        "name": "万州区", 
        "level": 3
    }, 
    {
        "code": "500102", 
        "sheng": "50", 
        "di": "01", 
        "xian": "02", 
        "name": "涪陵区", 
        "level": 3
    }, 
    {
        "code": "500103", 
        "sheng": "50", 
        "di": "01", 
        "xian": "03", 
        "name": "渝中区", 
        "level": 3
    }, 
    {
        "code": "500104", 
        "sheng": "50", 
        "di": "01", 
        "xian": "04", 
        "name": "大渡口区", 
        "level": 3
    }, 
    {
        "code": "500105", 
        "sheng": "50", 
        "di": "01", 
        "xian": "05", 
        "name": "江北区", 
        "level": 3
    }, 
    {
        "code": "500106", 
        "sheng": "50", 
        "di": "01", 
        "xian": "06", 
        "name": "沙坪坝区", 
        "level": 3
    }, 
    {
        "code": "500107", 
        "sheng": "50", 
        "di": "01", 
        "xian": "07", 
        "name": "九龙坡区", 
        "level": 3
    }, 
    {
        "code": "500108", 
        "sheng": "50", 
        "di": "01", 
        "xian": "08", 
        "name": "南岸区", 
        "level": 3
    }, 
    {
        "code": "500109", 
        "sheng": "50", 
        "di": "01", 
        "xian": "09", 
        "name": "北碚区", 
        "level": 3
    }, 
    {
        "code": "500110", 
        "sheng": "50", 
        "di": "01", 
        "xian": "10", 
        "name": "綦江区", 
        "level": 3
    }, 
    {
        "code": "500111", 
        "sheng": "50", 
        "di": "01", 
        "xian": "11", 
        "name": "大足区", 
        "level": 3
    }, 
    {
        "code": "500112", 
        "sheng": "50", 
        "di": "01", 
        "xian": "12", 
        "name": "渝北区", 
        "level": 3
    }, 
    {
        "code": "500113", 
        "sheng": "50", 
        "di": "01", 
        "xian": "13", 
        "name": "巴南区", 
        "level": 3
    }, 
    {
        "code": "500114", 
        "sheng": "50", 
        "di": "01", 
        "xian": "14", 
        "name": "黔江区", 
        "level": 3
    }, 
    {
        "code": "500115", 
        "sheng": "50", 
        "di": "01", 
        "xian": "15", 
        "name": "长寿区", 
        "level": 3
    }, 
    {
        "code": "500116", 
        "sheng": "50", 
        "di": "01", 
        "xian": "16", 
        "name": "江津区", 
        "level": 3
    }, 
    {
        "code": "500117", 
        "sheng": "50", 
        "di": "01", 
        "xian": "17", 
        "name": "合川区", 
        "level": 3
    }, 
    {
        "code": "500118", 
        "sheng": "50", 
        "di": "01", 
        "xian": "18", 
        "name": "永川区", 
        "level": 3
    }, 
    {
        "code": "500119", 
        "sheng": "50", 
        "di": "01", 
        "xian": "19", 
        "name": "南川区", 
        "level": 3
    }, 
    {
        "code": "500120", 
        "sheng": "50", 
        "di": "01", 
        "xian": "20", 
        "name": "璧山区", 
        "level": 3
    }, 
    {
        "code": "500151", 
        "sheng": "50", 
        "di": "01", 
        "xian": "51", 
        "name": "铜梁区", 
        "level": 3
    }, 
    {
        "code": "500152", 
        "sheng": "50", 
        "di": "01", 
        "xian": "52", 
        "name": "潼南区", 
        "level": 3
    }, 
    {
        "code": "500153", 
        "sheng": "50", 
        "di": "01", 
        "xian": "53", 
        "name": "荣昌区", 
        "level": 3
    }, 
    {
        "code": "500154", 
        "sheng": "50", 
        "di": "01", 
        "xian": "54", 
        "name": "开州区", 
        "level": 3
    }, 
    {
        "code": "500228", 
        "sheng": "50", 
        "di": "02", 
        "xian": "28", 
        "name": "梁平县", 
        "level": 3
    }, 
    {
        "code": "500229", 
        "sheng": "50", 
        "di": "02", 
        "xian": "29", 
        "name": "城口县", 
        "level": 3
    }, 
    {
        "code": "500230", 
        "sheng": "50", 
        "di": "02", 
        "xian": "30", 
        "name": "丰都县", 
        "level": 3
    }, 
    {
        "code": "500231", 
        "sheng": "50", 
        "di": "02", 
        "xian": "31", 
        "name": "垫江县", 
        "level": 3
    }, 
    {
        "code": "500232", 
        "sheng": "50", 
        "di": "02", 
        "xian": "32", 
        "name": "武隆县", 
        "level": 3
    }, 
    {
        "code": "500233", 
        "sheng": "50", 
        "di": "02", 
        "xian": "33", 
        "name": "忠县", 
        "level": 3
    }, 
    {
        "code": "500235", 
        "sheng": "50", 
        "di": "02", 
        "xian": "35", 
        "name": "云阳县", 
        "level": 3
    }, 
    {
        "code": "500236", 
        "sheng": "50", 
        "di": "02", 
        "xian": "36", 
        "name": "奉节县", 
        "level": 3
    }, 
    {
        "code": "500237", 
        "sheng": "50", 
        "di": "02", 
        "xian": "37", 
        "name": "巫山县", 
        "level": 3
    }, 
    {
        "code": "500238", 
        "sheng": "50", 
        "di": "02", 
        "xian": "38", 
        "name": "巫溪县", 
        "level": 3
    }, 
    {
        "code": "500240", 
        "sheng": "50", 
        "di": "02", 
        "xian": "40", 
        "name": "石柱土家族自治县", 
        "level": 3
    }, 
    {
        "code": "500241", 
        "sheng": "50", 
        "di": "02", 
        "xian": "41", 
        "name": "秀山土家族苗族自治县", 
        "level": 3
    }, 
    {
        "code": "500242", 
        "sheng": "50", 
        "di": "02", 
        "xian": "42", 
        "name": "酉阳土家族苗族自治县", 
        "level": 3
    }, 
    {
        "code": "500243", 
        "sheng": "50", 
        "di": "02", 
        "xian": "43", 
        "name": "彭水苗族土家族自治县", 
        "level": 3
    }, 
    {
        "code": "500300", 
        "sheng": "50", 
        "di": "03", 
        "xian": "00", 
        "name": "两江新区", 
        "level": 3
    }, 
    {
        "code": "500301", 
        "sheng": "50", 
        "di": "03", 
        "xian": "01", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "500302", 
        "sheng": "50", 
        "di": "03", 
        "xian": "02", 
        "name": "璧山高新区", 
        "level": 3
    }, 
    {
        "code": "510000", 
        "sheng": "51", 
        "di": "00", 
        "xian": "00", 
        "name": "四川省", 
        "level": 1
    }, 
    {
        "code": "510100", 
        "sheng": "51", 
        "di": "01", 
        "xian": "00", 
        "name": "成都市", 
        "level": 2
    }, 
    {
        "code": "510104", 
        "sheng": "51", 
        "di": "01", 
        "xian": "04", 
        "name": "锦江区", 
        "level": 3
    }, 
    {
        "code": "510105", 
        "sheng": "51", 
        "di": "01", 
        "xian": "05", 
        "name": "青羊区", 
        "level": 3
    }, 
    {
        "code": "510106", 
        "sheng": "51", 
        "di": "01", 
        "xian": "06", 
        "name": "金牛区", 
        "level": 3
    }, 
    {
        "code": "510107", 
        "sheng": "51", 
        "di": "01", 
        "xian": "07", 
        "name": "武侯区", 
        "level": 3
    }, 
    {
        "code": "510108", 
        "sheng": "51", 
        "di": "01", 
        "xian": "08", 
        "name": "成华区", 
        "level": 3
    }, 
    {
        "code": "510112", 
        "sheng": "51", 
        "di": "01", 
        "xian": "12", 
        "name": "龙泉驿区", 
        "level": 3
    }, 
    {
        "code": "510113", 
        "sheng": "51", 
        "di": "01", 
        "xian": "13", 
        "name": "青白江区", 
        "level": 3
    }, 
    {
        "code": "510114", 
        "sheng": "51", 
        "di": "01", 
        "xian": "14", 
        "name": "新都区", 
        "level": 3
    }, 
    {
        "code": "510115", 
        "sheng": "51", 
        "di": "01", 
        "xian": "15", 
        "name": "温江区", 
        "level": 3
    }, 
    {
        "code": "510116", 
        "sheng": "51", 
        "di": "01", 
        "xian": "16", 
        "name": "双流区", 
        "level": 3
    }, 
    {
        "code": "510121", 
        "sheng": "51", 
        "di": "01", 
        "xian": "21", 
        "name": "金堂县", 
        "level": 3
    }, 
    {
        "code": "510124", 
        "sheng": "51", 
        "di": "01", 
        "xian": "24", 
        "name": "郫县", 
        "level": 3
    }, 
    {
        "code": "510129", 
        "sheng": "51", 
        "di": "01", 
        "xian": "29", 
        "name": "大邑县", 
        "level": 3
    }, 
    {
        "code": "510131", 
        "sheng": "51", 
        "di": "01", 
        "xian": "31", 
        "name": "蒲江县", 
        "level": 3
    }, 
    {
        "code": "510132", 
        "sheng": "51", 
        "di": "01", 
        "xian": "32", 
        "name": "新津县", 
        "level": 3
    }, 
    {
        "code": "510180", 
        "sheng": "51", 
        "di": "01", 
        "xian": "80", 
        "name": "简阳市", 
        "level": 3
    }, 
    {
        "code": "510181", 
        "sheng": "51", 
        "di": "01", 
        "xian": "81", 
        "name": "都江堰市", 
        "level": 3
    }, 
    {
        "code": "510182", 
        "sheng": "51", 
        "di": "01", 
        "xian": "82", 
        "name": "彭州市", 
        "level": 3
    }, 
    {
        "code": "510183", 
        "sheng": "51", 
        "di": "01", 
        "xian": "83", 
        "name": "邛崃市", 
        "level": 3
    }, 
    {
        "code": "510184", 
        "sheng": "51", 
        "di": "01", 
        "xian": "84", 
        "name": "崇州市", 
        "level": 3
    }, 
    {
        "code": "510186", 
        "sheng": "51", 
        "di": "01", 
        "xian": "86", 
        "name": "天府新区", 
        "level": 3
    }, 
    {
        "code": "510187", 
        "sheng": "51", 
        "di": "01", 
        "xian": "87", 
        "name": "高新南区", 
        "level": 3
    }, 
    {
        "code": "510188", 
        "sheng": "51", 
        "di": "01", 
        "xian": "88", 
        "name": "高新西区", 
        "level": 3
    }, 
    {
        "code": "510300", 
        "sheng": "51", 
        "di": "03", 
        "xian": "00", 
        "name": "自贡市", 
        "level": 2
    }, 
    {
        "code": "510302", 
        "sheng": "51", 
        "di": "03", 
        "xian": "02", 
        "name": "自流井区", 
        "level": 3
    }, 
    {
        "code": "510303", 
        "sheng": "51", 
        "di": "03", 
        "xian": "03", 
        "name": "贡井区", 
        "level": 3
    }, 
    {
        "code": "510304", 
        "sheng": "51", 
        "di": "03", 
        "xian": "04", 
        "name": "大安区", 
        "level": 3
    }, 
    {
        "code": "510311", 
        "sheng": "51", 
        "di": "03", 
        "xian": "11", 
        "name": "沿滩区", 
        "level": 3
    }, 
    {
        "code": "510321", 
        "sheng": "51", 
        "di": "03", 
        "xian": "21", 
        "name": "荣县", 
        "level": 3
    }, 
    {
        "code": "510322", 
        "sheng": "51", 
        "di": "03", 
        "xian": "22", 
        "name": "富顺县", 
        "level": 3
    }, 
    {
        "code": "510400", 
        "sheng": "51", 
        "di": "04", 
        "xian": "00", 
        "name": "攀枝花市", 
        "level": 2
    }, 
    {
        "code": "510402", 
        "sheng": "51", 
        "di": "04", 
        "xian": "02", 
        "name": "东区", 
        "level": 3
    }, 
    {
        "code": "510403", 
        "sheng": "51", 
        "di": "04", 
        "xian": "03", 
        "name": "西区", 
        "level": 3
    }, 
    {
        "code": "510411", 
        "sheng": "51", 
        "di": "04", 
        "xian": "11", 
        "name": "仁和区", 
        "level": 3
    }, 
    {
        "code": "510421", 
        "sheng": "51", 
        "di": "04", 
        "xian": "21", 
        "name": "米易县", 
        "level": 3
    }, 
    {
        "code": "510422", 
        "sheng": "51", 
        "di": "04", 
        "xian": "22", 
        "name": "盐边县", 
        "level": 3
    }, 
    {
        "code": "510500", 
        "sheng": "51", 
        "di": "05", 
        "xian": "00", 
        "name": "泸州市", 
        "level": 2
    }, 
    {
        "code": "510502", 
        "sheng": "51", 
        "di": "05", 
        "xian": "02", 
        "name": "江阳区", 
        "level": 3
    }, 
    {
        "code": "510503", 
        "sheng": "51", 
        "di": "05", 
        "xian": "03", 
        "name": "纳溪区", 
        "level": 3
    }, 
    {
        "code": "510504", 
        "sheng": "51", 
        "di": "05", 
        "xian": "04", 
        "name": "龙马潭区", 
        "level": 3
    }, 
    {
        "code": "510521", 
        "sheng": "51", 
        "di": "05", 
        "xian": "21", 
        "name": "泸县", 
        "level": 3
    }, 
    {
        "code": "510522", 
        "sheng": "51", 
        "di": "05", 
        "xian": "22", 
        "name": "合江县", 
        "level": 3
    }, 
    {
        "code": "510524", 
        "sheng": "51", 
        "di": "05", 
        "xian": "24", 
        "name": "叙永县", 
        "level": 3
    }, 
    {
        "code": "510525", 
        "sheng": "51", 
        "di": "05", 
        "xian": "25", 
        "name": "古蔺县", 
        "level": 3
    }, 
    {
        "code": "510600", 
        "sheng": "51", 
        "di": "06", 
        "xian": "00", 
        "name": "德阳市", 
        "level": 2
    }, 
    {
        "code": "510603", 
        "sheng": "51", 
        "di": "06", 
        "xian": "03", 
        "name": "旌阳区", 
        "level": 3
    }, 
    {
        "code": "510623", 
        "sheng": "51", 
        "di": "06", 
        "xian": "23", 
        "name": "中江县", 
        "level": 3
    }, 
    {
        "code": "510626", 
        "sheng": "51", 
        "di": "06", 
        "xian": "26", 
        "name": "罗江县", 
        "level": 3
    }, 
    {
        "code": "510681", 
        "sheng": "51", 
        "di": "06", 
        "xian": "81", 
        "name": "广汉市", 
        "level": 3
    }, 
    {
        "code": "510682", 
        "sheng": "51", 
        "di": "06", 
        "xian": "82", 
        "name": "什邡市", 
        "level": 3
    }, 
    {
        "code": "510683", 
        "sheng": "51", 
        "di": "06", 
        "xian": "83", 
        "name": "绵竹市", 
        "level": 3
    }, 
    {
        "code": "510700", 
        "sheng": "51", 
        "di": "07", 
        "xian": "00", 
        "name": "绵阳市", 
        "level": 2
    }, 
    {
        "code": "510703", 
        "sheng": "51", 
        "di": "07", 
        "xian": "03", 
        "name": "涪城区", 
        "level": 3
    }, 
    {
        "code": "510704", 
        "sheng": "51", 
        "di": "07", 
        "xian": "04", 
        "name": "游仙区", 
        "level": 3
    }, 
    {
        "code": "510705", 
        "sheng": "51", 
        "di": "07", 
        "xian": "05", 
        "name": "安州区", 
        "level": 3
    }, 
    {
        "code": "510722", 
        "sheng": "51", 
        "di": "07", 
        "xian": "22", 
        "name": "三台县", 
        "level": 3
    }, 
    {
        "code": "510723", 
        "sheng": "51", 
        "di": "07", 
        "xian": "23", 
        "name": "盐亭县", 
        "level": 3
    }, 
    {
        "code": "510725", 
        "sheng": "51", 
        "di": "07", 
        "xian": "25", 
        "name": "梓潼县", 
        "level": 3
    }, 
    {
        "code": "510726", 
        "sheng": "51", 
        "di": "07", 
        "xian": "26", 
        "name": "北川羌族自治县", 
        "level": 3
    }, 
    {
        "code": "510727", 
        "sheng": "51", 
        "di": "07", 
        "xian": "27", 
        "name": "平武县", 
        "level": 3
    }, 
    {
        "code": "510781", 
        "sheng": "51", 
        "di": "07", 
        "xian": "81", 
        "name": "江油市", 
        "level": 3
    }, 
    {
        "code": "510782", 
        "sheng": "51", 
        "di": "07", 
        "xian": "82", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "510783", 
        "sheng": "51", 
        "di": "07", 
        "xian": "83", 
        "name": "经开区", 
        "level": 3
    }, 
    {
        "code": "510800", 
        "sheng": "51", 
        "di": "08", 
        "xian": "00", 
        "name": "广元市", 
        "level": 2
    }, 
    {
        "code": "510802", 
        "sheng": "51", 
        "di": "08", 
        "xian": "02", 
        "name": "利州区", 
        "level": 3
    }, 
    {
        "code": "510811", 
        "sheng": "51", 
        "di": "08", 
        "xian": "11", 
        "name": "昭化区", 
        "level": 3
    }, 
    {
        "code": "510812", 
        "sheng": "51", 
        "di": "08", 
        "xian": "12", 
        "name": "朝天区", 
        "level": 3
    }, 
    {
        "code": "510821", 
        "sheng": "51", 
        "di": "08", 
        "xian": "21", 
        "name": "旺苍县", 
        "level": 3
    }, 
    {
        "code": "510822", 
        "sheng": "51", 
        "di": "08", 
        "xian": "22", 
        "name": "青川县", 
        "level": 3
    }, 
    {
        "code": "510823", 
        "sheng": "51", 
        "di": "08", 
        "xian": "23", 
        "name": "剑阁县", 
        "level": 3
    }, 
    {
        "code": "510824", 
        "sheng": "51", 
        "di": "08", 
        "xian": "24", 
        "name": "苍溪县", 
        "level": 3
    }, 
    {
        "code": "510900", 
        "sheng": "51", 
        "di": "09", 
        "xian": "00", 
        "name": "遂宁市", 
        "level": 2
    }, 
    {
        "code": "510903", 
        "sheng": "51", 
        "di": "09", 
        "xian": "03", 
        "name": "船山区", 
        "level": 3
    }, 
    {
        "code": "510904", 
        "sheng": "51", 
        "di": "09", 
        "xian": "04", 
        "name": "安居区", 
        "level": 3
    }, 
    {
        "code": "510921", 
        "sheng": "51", 
        "di": "09", 
        "xian": "21", 
        "name": "蓬溪县", 
        "level": 3
    }, 
    {
        "code": "510922", 
        "sheng": "51", 
        "di": "09", 
        "xian": "22", 
        "name": "射洪县", 
        "level": 3
    }, 
    {
        "code": "510923", 
        "sheng": "51", 
        "di": "09", 
        "xian": "23", 
        "name": "大英县", 
        "level": 3
    }, 
    {
        "code": "510924", 
        "sheng": "51", 
        "di": "09", 
        "xian": "24", 
        "name": "经济技术开发区", 
        "level": 3
    }, 
    {
        "code": "511000", 
        "sheng": "51", 
        "di": "10", 
        "xian": "00", 
        "name": "内江市", 
        "level": 2
    }, 
    {
        "code": "511002", 
        "sheng": "51", 
        "di": "10", 
        "xian": "02", 
        "name": "市中区", 
        "level": 3
    }, 
    {
        "code": "511011", 
        "sheng": "51", 
        "di": "10", 
        "xian": "11", 
        "name": "东兴区", 
        "level": 3
    }, 
    {
        "code": "511024", 
        "sheng": "51", 
        "di": "10", 
        "xian": "24", 
        "name": "威远县", 
        "level": 3
    }, 
    {
        "code": "511025", 
        "sheng": "51", 
        "di": "10", 
        "xian": "25", 
        "name": "资中县", 
        "level": 3
    }, 
    {
        "code": "511028", 
        "sheng": "51", 
        "di": "10", 
        "xian": "28", 
        "name": "隆昌县", 
        "level": 3
    }, 
    {
        "code": "511100", 
        "sheng": "51", 
        "di": "11", 
        "xian": "00", 
        "name": "乐山市", 
        "level": 2
    }, 
    {
        "code": "511102", 
        "sheng": "51", 
        "di": "11", 
        "xian": "02", 
        "name": "市中区", 
        "level": 3
    }, 
    {
        "code": "511111", 
        "sheng": "51", 
        "di": "11", 
        "xian": "11", 
        "name": "沙湾区", 
        "level": 3
    }, 
    {
        "code": "511112", 
        "sheng": "51", 
        "di": "11", 
        "xian": "12", 
        "name": "五通桥区", 
        "level": 3
    }, 
    {
        "code": "511113", 
        "sheng": "51", 
        "di": "11", 
        "xian": "13", 
        "name": "金口河区", 
        "level": 3
    }, 
    {
        "code": "511123", 
        "sheng": "51", 
        "di": "11", 
        "xian": "23", 
        "name": "犍为县", 
        "level": 3
    }, 
    {
        "code": "511124", 
        "sheng": "51", 
        "di": "11", 
        "xian": "24", 
        "name": "井研县", 
        "level": 3
    }, 
    {
        "code": "511126", 
        "sheng": "51", 
        "di": "11", 
        "xian": "26", 
        "name": "夹江县", 
        "level": 3
    }, 
    {
        "code": "511129", 
        "sheng": "51", 
        "di": "11", 
        "xian": "29", 
        "name": "沐川县", 
        "level": 3
    }, 
    {
        "code": "511132", 
        "sheng": "51", 
        "di": "11", 
        "xian": "32", 
        "name": "峨边彝族自治县", 
        "level": 3
    }, 
    {
        "code": "511133", 
        "sheng": "51", 
        "di": "11", 
        "xian": "33", 
        "name": "马边彝族自治县", 
        "level": 3
    }, 
    {
        "code": "511181", 
        "sheng": "51", 
        "di": "11", 
        "xian": "81", 
        "name": "峨眉山市", 
        "level": 3
    }, 
    {
        "code": "511300", 
        "sheng": "51", 
        "di": "13", 
        "xian": "00", 
        "name": "南充市", 
        "level": 2
    }, 
    {
        "code": "511302", 
        "sheng": "51", 
        "di": "13", 
        "xian": "02", 
        "name": "顺庆区", 
        "level": 3
    }, 
    {
        "code": "511303", 
        "sheng": "51", 
        "di": "13", 
        "xian": "03", 
        "name": "高坪区", 
        "level": 3
    }, 
    {
        "code": "511304", 
        "sheng": "51", 
        "di": "13", 
        "xian": "04", 
        "name": "嘉陵区", 
        "level": 3
    }, 
    {
        "code": "511321", 
        "sheng": "51", 
        "di": "13", 
        "xian": "21", 
        "name": "南部县", 
        "level": 3
    }, 
    {
        "code": "511322", 
        "sheng": "51", 
        "di": "13", 
        "xian": "22", 
        "name": "营山县", 
        "level": 3
    }, 
    {
        "code": "511323", 
        "sheng": "51", 
        "di": "13", 
        "xian": "23", 
        "name": "蓬安县", 
        "level": 3
    }, 
    {
        "code": "511324", 
        "sheng": "51", 
        "di": "13", 
        "xian": "24", 
        "name": "仪陇县", 
        "level": 3
    }, 
    {
        "code": "511325", 
        "sheng": "51", 
        "di": "13", 
        "xian": "25", 
        "name": "西充县", 
        "level": 3
    }, 
    {
        "code": "511381", 
        "sheng": "51", 
        "di": "13", 
        "xian": "81", 
        "name": "阆中市", 
        "level": 3
    }, 
    {
        "code": "511400", 
        "sheng": "51", 
        "di": "14", 
        "xian": "00", 
        "name": "眉山市", 
        "level": 2
    }, 
    {
        "code": "511402", 
        "sheng": "51", 
        "di": "14", 
        "xian": "02", 
        "name": "东坡区", 
        "level": 3
    }, 
    {
        "code": "511403", 
        "sheng": "51", 
        "di": "14", 
        "xian": "03", 
        "name": "彭山区", 
        "level": 3
    }, 
    {
        "code": "511421", 
        "sheng": "51", 
        "di": "14", 
        "xian": "21", 
        "name": "仁寿县", 
        "level": 3
    }, 
    {
        "code": "511423", 
        "sheng": "51", 
        "di": "14", 
        "xian": "23", 
        "name": "洪雅县", 
        "level": 3
    }, 
    {
        "code": "511424", 
        "sheng": "51", 
        "di": "14", 
        "xian": "24", 
        "name": "丹棱县", 
        "level": 3
    }, 
    {
        "code": "511425", 
        "sheng": "51", 
        "di": "14", 
        "xian": "25", 
        "name": "青神县", 
        "level": 3
    }, 
    {
        "code": "511500", 
        "sheng": "51", 
        "di": "15", 
        "xian": "00", 
        "name": "宜宾市", 
        "level": 2
    }, 
    {
        "code": "511502", 
        "sheng": "51", 
        "di": "15", 
        "xian": "02", 
        "name": "翠屏区", 
        "level": 3
    }, 
    {
        "code": "511503", 
        "sheng": "51", 
        "di": "15", 
        "xian": "03", 
        "name": "南溪区", 
        "level": 3
    }, 
    {
        "code": "511521", 
        "sheng": "51", 
        "di": "15", 
        "xian": "21", 
        "name": "宜宾县", 
        "level": 3
    }, 
    {
        "code": "511523", 
        "sheng": "51", 
        "di": "15", 
        "xian": "23", 
        "name": "江安县", 
        "level": 3
    }, 
    {
        "code": "511524", 
        "sheng": "51", 
        "di": "15", 
        "xian": "24", 
        "name": "长宁县", 
        "level": 3
    }, 
    {
        "code": "511525", 
        "sheng": "51", 
        "di": "15", 
        "xian": "25", 
        "name": "高县", 
        "level": 3
    }, 
    {
        "code": "511526", 
        "sheng": "51", 
        "di": "15", 
        "xian": "26", 
        "name": "珙县", 
        "level": 3
    }, 
    {
        "code": "511527", 
        "sheng": "51", 
        "di": "15", 
        "xian": "27", 
        "name": "筠连县", 
        "level": 3
    }, 
    {
        "code": "511528", 
        "sheng": "51", 
        "di": "15", 
        "xian": "28", 
        "name": "兴文县", 
        "level": 3
    }, 
    {
        "code": "511529", 
        "sheng": "51", 
        "di": "15", 
        "xian": "29", 
        "name": "屏山县", 
        "level": 3
    }, 
    {
        "code": "511600", 
        "sheng": "51", 
        "di": "16", 
        "xian": "00", 
        "name": "广安市", 
        "level": 2
    }, 
    {
        "code": "511602", 
        "sheng": "51", 
        "di": "16", 
        "xian": "02", 
        "name": "广安区", 
        "level": 3
    }, 
    {
        "code": "511603", 
        "sheng": "51", 
        "di": "16", 
        "xian": "03", 
        "name": "前锋区", 
        "level": 3
    }, 
    {
        "code": "511621", 
        "sheng": "51", 
        "di": "16", 
        "xian": "21", 
        "name": "岳池县", 
        "level": 3
    }, 
    {
        "code": "511622", 
        "sheng": "51", 
        "di": "16", 
        "xian": "22", 
        "name": "武胜县", 
        "level": 3
    }, 
    {
        "code": "511623", 
        "sheng": "51", 
        "di": "16", 
        "xian": "23", 
        "name": "邻水县", 
        "level": 3
    }, 
    {
        "code": "511681", 
        "sheng": "51", 
        "di": "16", 
        "xian": "81", 
        "name": "华蓥市", 
        "level": 3
    }, 
    {
        "code": "511700", 
        "sheng": "51", 
        "di": "17", 
        "xian": "00", 
        "name": "达州市", 
        "level": 2
    }, 
    {
        "code": "511702", 
        "sheng": "51", 
        "di": "17", 
        "xian": "02", 
        "name": "通川区", 
        "level": 3
    }, 
    {
        "code": "511703", 
        "sheng": "51", 
        "di": "17", 
        "xian": "03", 
        "name": "达川区", 
        "level": 3
    }, 
    {
        "code": "511722", 
        "sheng": "51", 
        "di": "17", 
        "xian": "22", 
        "name": "宣汉县", 
        "level": 3
    }, 
    {
        "code": "511723", 
        "sheng": "51", 
        "di": "17", 
        "xian": "23", 
        "name": "开江县", 
        "level": 3
    }, 
    {
        "code": "511724", 
        "sheng": "51", 
        "di": "17", 
        "xian": "24", 
        "name": "大竹县", 
        "level": 3
    }, 
    {
        "code": "511725", 
        "sheng": "51", 
        "di": "17", 
        "xian": "25", 
        "name": "渠县", 
        "level": 3
    }, 
    {
        "code": "511781", 
        "sheng": "51", 
        "di": "17", 
        "xian": "81", 
        "name": "万源市", 
        "level": 3
    }, 
    {
        "code": "511800", 
        "sheng": "51", 
        "di": "18", 
        "xian": "00", 
        "name": "雅安市", 
        "level": 2
    }, 
    {
        "code": "511802", 
        "sheng": "51", 
        "di": "18", 
        "xian": "02", 
        "name": "雨城区", 
        "level": 3
    }, 
    {
        "code": "511803", 
        "sheng": "51", 
        "di": "18", 
        "xian": "03", 
        "name": "名山区", 
        "level": 3
    }, 
    {
        "code": "511822", 
        "sheng": "51", 
        "di": "18", 
        "xian": "22", 
        "name": "荥经县", 
        "level": 3
    }, 
    {
        "code": "511823", 
        "sheng": "51", 
        "di": "18", 
        "xian": "23", 
        "name": "汉源县", 
        "level": 3
    }, 
    {
        "code": "511824", 
        "sheng": "51", 
        "di": "18", 
        "xian": "24", 
        "name": "石棉县", 
        "level": 3
    }, 
    {
        "code": "511825", 
        "sheng": "51", 
        "di": "18", 
        "xian": "25", 
        "name": "天全县", 
        "level": 3
    }, 
    {
        "code": "511826", 
        "sheng": "51", 
        "di": "18", 
        "xian": "26", 
        "name": "芦山县", 
        "level": 3
    }, 
    {
        "code": "511827", 
        "sheng": "51", 
        "di": "18", 
        "xian": "27", 
        "name": "宝兴县", 
        "level": 3
    }, 
    {
        "code": "511900", 
        "sheng": "51", 
        "di": "19", 
        "xian": "00", 
        "name": "巴中市", 
        "level": 2
    }, 
    {
        "code": "511902", 
        "sheng": "51", 
        "di": "19", 
        "xian": "02", 
        "name": "巴州区", 
        "level": 3
    }, 
    {
        "code": "511903", 
        "sheng": "51", 
        "di": "19", 
        "xian": "03", 
        "name": "恩阳区", 
        "level": 3
    }, 
    {
        "code": "511921", 
        "sheng": "51", 
        "di": "19", 
        "xian": "21", 
        "name": "通江县", 
        "level": 3
    }, 
    {
        "code": "511922", 
        "sheng": "51", 
        "di": "19", 
        "xian": "22", 
        "name": "南江县", 
        "level": 3
    }, 
    {
        "code": "511923", 
        "sheng": "51", 
        "di": "19", 
        "xian": "23", 
        "name": "平昌县", 
        "level": 3
    }, 
    {
        "code": "512000", 
        "sheng": "51", 
        "di": "20", 
        "xian": "00", 
        "name": "资阳市", 
        "level": 2
    }, 
    {
        "code": "512002", 
        "sheng": "51", 
        "di": "20", 
        "xian": "02", 
        "name": "雁江区", 
        "level": 3
    }, 
    {
        "code": "512021", 
        "sheng": "51", 
        "di": "20", 
        "xian": "21", 
        "name": "安岳县", 
        "level": 3
    }, 
    {
        "code": "512022", 
        "sheng": "51", 
        "di": "20", 
        "xian": "22", 
        "name": "乐至县", 
        "level": 3
    }, 
    {
        "code": "513200", 
        "sheng": "51", 
        "di": "32", 
        "xian": "00", 
        "name": "阿坝藏族羌族自治州", 
        "level": 2
    }, 
    {
        "code": "513201", 
        "sheng": "51", 
        "di": "32", 
        "xian": "01", 
        "name": "马尔康市", 
        "level": 3
    }, 
    {
        "code": "513221", 
        "sheng": "51", 
        "di": "32", 
        "xian": "21", 
        "name": "汶川县", 
        "level": 3
    }, 
    {
        "code": "513222", 
        "sheng": "51", 
        "di": "32", 
        "xian": "22", 
        "name": "理县", 
        "level": 3
    }, 
    {
        "code": "513223", 
        "sheng": "51", 
        "di": "32", 
        "xian": "23", 
        "name": "茂县", 
        "level": 3
    }, 
    {
        "code": "513224", 
        "sheng": "51", 
        "di": "32", 
        "xian": "24", 
        "name": "松潘县", 
        "level": 3
    }, 
    {
        "code": "513225", 
        "sheng": "51", 
        "di": "32", 
        "xian": "25", 
        "name": "九寨沟县", 
        "level": 3
    }, 
    {
        "code": "513226", 
        "sheng": "51", 
        "di": "32", 
        "xian": "26", 
        "name": "金川县", 
        "level": 3
    }, 
    {
        "code": "513227", 
        "sheng": "51", 
        "di": "32", 
        "xian": "27", 
        "name": "小金县", 
        "level": 3
    }, 
    {
        "code": "513228", 
        "sheng": "51", 
        "di": "32", 
        "xian": "28", 
        "name": "黑水县", 
        "level": 3
    }, 
    {
        "code": "513230", 
        "sheng": "51", 
        "di": "32", 
        "xian": "30", 
        "name": "壤塘县", 
        "level": 3
    }, 
    {
        "code": "513231", 
        "sheng": "51", 
        "di": "32", 
        "xian": "31", 
        "name": "阿坝县", 
        "level": 3
    }, 
    {
        "code": "513232", 
        "sheng": "51", 
        "di": "32", 
        "xian": "32", 
        "name": "若尔盖县", 
        "level": 3
    }, 
    {
        "code": "513233", 
        "sheng": "51", 
        "di": "32", 
        "xian": "33", 
        "name": "红原县", 
        "level": 3
    }, 
    {
        "code": "513300", 
        "sheng": "51", 
        "di": "33", 
        "xian": "00", 
        "name": "甘孜藏族自治州", 
        "level": 2
    }, 
    {
        "code": "513301", 
        "sheng": "51", 
        "di": "33", 
        "xian": "01", 
        "name": "康定市", 
        "level": 3
    }, 
    {
        "code": "513322", 
        "sheng": "51", 
        "di": "33", 
        "xian": "22", 
        "name": "泸定县", 
        "level": 3
    }, 
    {
        "code": "513323", 
        "sheng": "51", 
        "di": "33", 
        "xian": "23", 
        "name": "丹巴县", 
        "level": 3
    }, 
    {
        "code": "513324", 
        "sheng": "51", 
        "di": "33", 
        "xian": "24", 
        "name": "九龙县", 
        "level": 3
    }, 
    {
        "code": "513325", 
        "sheng": "51", 
        "di": "33", 
        "xian": "25", 
        "name": "雅江县", 
        "level": 3
    }, 
    {
        "code": "513326", 
        "sheng": "51", 
        "di": "33", 
        "xian": "26", 
        "name": "道孚县", 
        "level": 3
    }, 
    {
        "code": "513327", 
        "sheng": "51", 
        "di": "33", 
        "xian": "27", 
        "name": "炉霍县", 
        "level": 3
    }, 
    {
        "code": "513328", 
        "sheng": "51", 
        "di": "33", 
        "xian": "28", 
        "name": "甘孜县", 
        "level": 3
    }, 
    {
        "code": "513329", 
        "sheng": "51", 
        "di": "33", 
        "xian": "29", 
        "name": "新龙县", 
        "level": 3
    }, 
    {
        "code": "513330", 
        "sheng": "51", 
        "di": "33", 
        "xian": "30", 
        "name": "德格县", 
        "level": 3
    }, 
    {
        "code": "513331", 
        "sheng": "51", 
        "di": "33", 
        "xian": "31", 
        "name": "白玉县", 
        "level": 3
    }, 
    {
        "code": "513332", 
        "sheng": "51", 
        "di": "33", 
        "xian": "32", 
        "name": "石渠县", 
        "level": 3
    }, 
    {
        "code": "513333", 
        "sheng": "51", 
        "di": "33", 
        "xian": "33", 
        "name": "色达县", 
        "level": 3
    }, 
    {
        "code": "513334", 
        "sheng": "51", 
        "di": "33", 
        "xian": "34", 
        "name": "理塘县", 
        "level": 3
    }, 
    {
        "code": "513335", 
        "sheng": "51", 
        "di": "33", 
        "xian": "35", 
        "name": "巴塘县", 
        "level": 3
    }, 
    {
        "code": "513336", 
        "sheng": "51", 
        "di": "33", 
        "xian": "36", 
        "name": "乡城县", 
        "level": 3
    }, 
    {
        "code": "513337", 
        "sheng": "51", 
        "di": "33", 
        "xian": "37", 
        "name": "稻城县", 
        "level": 3
    }, 
    {
        "code": "513338", 
        "sheng": "51", 
        "di": "33", 
        "xian": "38", 
        "name": "得荣县", 
        "level": 3
    }, 
    {
        "code": "513400", 
        "sheng": "51", 
        "di": "34", 
        "xian": "00", 
        "name": "凉山彝族自治州", 
        "level": 2
    }, 
    {
        "code": "513401", 
        "sheng": "51", 
        "di": "34", 
        "xian": "01", 
        "name": "西昌市", 
        "level": 3
    }, 
    {
        "code": "513422", 
        "sheng": "51", 
        "di": "34", 
        "xian": "22", 
        "name": "木里藏族自治县", 
        "level": 3
    }, 
    {
        "code": "513423", 
        "sheng": "51", 
        "di": "34", 
        "xian": "23", 
        "name": "盐源县", 
        "level": 3
    }, 
    {
        "code": "513424", 
        "sheng": "51", 
        "di": "34", 
        "xian": "24", 
        "name": "德昌县", 
        "level": 3
    }, 
    {
        "code": "513425", 
        "sheng": "51", 
        "di": "34", 
        "xian": "25", 
        "name": "会理县", 
        "level": 3
    }, 
    {
        "code": "513426", 
        "sheng": "51", 
        "di": "34", 
        "xian": "26", 
        "name": "会东县", 
        "level": 3
    }, 
    {
        "code": "513427", 
        "sheng": "51", 
        "di": "34", 
        "xian": "27", 
        "name": "宁南县", 
        "level": 3
    }, 
    {
        "code": "513428", 
        "sheng": "51", 
        "di": "34", 
        "xian": "28", 
        "name": "普格县", 
        "level": 3
    }, 
    {
        "code": "513429", 
        "sheng": "51", 
        "di": "34", 
        "xian": "29", 
        "name": "布拖县", 
        "level": 3
    }, 
    {
        "code": "513430", 
        "sheng": "51", 
        "di": "34", 
        "xian": "30", 
        "name": "金阳县", 
        "level": 3
    }, 
    {
        "code": "513431", 
        "sheng": "51", 
        "di": "34", 
        "xian": "31", 
        "name": "昭觉县", 
        "level": 3
    }, 
    {
        "code": "513432", 
        "sheng": "51", 
        "di": "34", 
        "xian": "32", 
        "name": "喜德县", 
        "level": 3
    }, 
    {
        "code": "513433", 
        "sheng": "51", 
        "di": "34", 
        "xian": "33", 
        "name": "冕宁县", 
        "level": 3
    }, 
    {
        "code": "513434", 
        "sheng": "51", 
        "di": "34", 
        "xian": "34", 
        "name": "越西县", 
        "level": 3
    }, 
    {
        "code": "513435", 
        "sheng": "51", 
        "di": "34", 
        "xian": "35", 
        "name": "甘洛县", 
        "level": 3
    }, 
    {
        "code": "513436", 
        "sheng": "51", 
        "di": "34", 
        "xian": "36", 
        "name": "美姑县", 
        "level": 3
    }, 
    {
        "code": "513437", 
        "sheng": "51", 
        "di": "34", 
        "xian": "37", 
        "name": "雷波县", 
        "level": 3
    }, 
    {
        "code": "520000", 
        "sheng": "52", 
        "di": "00", 
        "xian": "00", 
        "name": "贵州省", 
        "level": 1
    }, 
    {
        "code": "520100", 
        "sheng": "52", 
        "di": "01", 
        "xian": "00", 
        "name": "贵阳市", 
        "level": 2
    }, 
    {
        "code": "520102", 
        "sheng": "52", 
        "di": "01", 
        "xian": "02", 
        "name": "南明区", 
        "level": 3
    }, 
    {
        "code": "520103", 
        "sheng": "52", 
        "di": "01", 
        "xian": "03", 
        "name": "云岩区", 
        "level": 3
    }, 
    {
        "code": "520111", 
        "sheng": "52", 
        "di": "01", 
        "xian": "11", 
        "name": "花溪区", 
        "level": 3
    }, 
    {
        "code": "520112", 
        "sheng": "52", 
        "di": "01", 
        "xian": "12", 
        "name": "乌当区", 
        "level": 3
    }, 
    {
        "code": "520113", 
        "sheng": "52", 
        "di": "01", 
        "xian": "13", 
        "name": "白云区", 
        "level": 3
    }, 
    {
        "code": "520115", 
        "sheng": "52", 
        "di": "01", 
        "xian": "15", 
        "name": "观山湖区", 
        "level": 3
    }, 
    {
        "code": "520121", 
        "sheng": "52", 
        "di": "01", 
        "xian": "21", 
        "name": "开阳县", 
        "level": 3
    }, 
    {
        "code": "520122", 
        "sheng": "52", 
        "di": "01", 
        "xian": "22", 
        "name": "息烽县", 
        "level": 3
    }, 
    {
        "code": "520123", 
        "sheng": "52", 
        "di": "01", 
        "xian": "23", 
        "name": "修文县", 
        "level": 3
    }, 
    {
        "code": "520181", 
        "sheng": "52", 
        "di": "01", 
        "xian": "81", 
        "name": "清镇市", 
        "level": 3
    }, 
    {
        "code": "520182", 
        "sheng": "52", 
        "di": "01", 
        "xian": "82", 
        "name": "贵安新区", 
        "level": 3
    }, 
    {
        "code": "520183", 
        "sheng": "52", 
        "di": "01", 
        "xian": "83", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "520200", 
        "sheng": "52", 
        "di": "02", 
        "xian": "00", 
        "name": "六盘水市", 
        "level": 2
    }, 
    {
        "code": "520201", 
        "sheng": "52", 
        "di": "02", 
        "xian": "01", 
        "name": "钟山区", 
        "level": 3
    }, 
    {
        "code": "520203", 
        "sheng": "52", 
        "di": "02", 
        "xian": "03", 
        "name": "六枝特区", 
        "level": 3
    }, 
    {
        "code": "520221", 
        "sheng": "52", 
        "di": "02", 
        "xian": "21", 
        "name": "水城县", 
        "level": 3
    }, 
    {
        "code": "520222", 
        "sheng": "52", 
        "di": "02", 
        "xian": "22", 
        "name": "盘县", 
        "level": 3
    }, 
    {
        "code": "520300", 
        "sheng": "52", 
        "di": "03", 
        "xian": "00", 
        "name": "遵义市", 
        "level": 2
    }, 
    {
        "code": "520302", 
        "sheng": "52", 
        "di": "03", 
        "xian": "02", 
        "name": "红花岗区", 
        "level": 3
    }, 
    {
        "code": "520303", 
        "sheng": "52", 
        "di": "03", 
        "xian": "03", 
        "name": "汇川区", 
        "level": 3
    }, 
    {
        "code": "520304", 
        "sheng": "52", 
        "di": "03", 
        "xian": "04", 
        "name": "播州区", 
        "level": 3
    }, 
    {
        "code": "520322", 
        "sheng": "52", 
        "di": "03", 
        "xian": "22", 
        "name": "桐梓县", 
        "level": 3
    }, 
    {
        "code": "520323", 
        "sheng": "52", 
        "di": "03", 
        "xian": "23", 
        "name": "绥阳县", 
        "level": 3
    }, 
    {
        "code": "520324", 
        "sheng": "52", 
        "di": "03", 
        "xian": "24", 
        "name": "正安县", 
        "level": 3
    }, 
    {
        "code": "520325", 
        "sheng": "52", 
        "di": "03", 
        "xian": "25", 
        "name": "道真仡佬族苗族自治县", 
        "level": 3
    }, 
    {
        "code": "520326", 
        "sheng": "52", 
        "di": "03", 
        "xian": "26", 
        "name": "务川仡佬族苗族自治县", 
        "level": 3
    }, 
    {
        "code": "520327", 
        "sheng": "52", 
        "di": "03", 
        "xian": "27", 
        "name": "凤冈县", 
        "level": 3
    }, 
    {
        "code": "520328", 
        "sheng": "52", 
        "di": "03", 
        "xian": "28", 
        "name": "湄潭县", 
        "level": 3
    }, 
    {
        "code": "520329", 
        "sheng": "52", 
        "di": "03", 
        "xian": "29", 
        "name": "余庆县", 
        "level": 3
    }, 
    {
        "code": "520330", 
        "sheng": "52", 
        "di": "03", 
        "xian": "30", 
        "name": "习水县", 
        "level": 3
    }, 
    {
        "code": "520381", 
        "sheng": "52", 
        "di": "03", 
        "xian": "81", 
        "name": "赤水市", 
        "level": 3
    }, 
    {
        "code": "520382", 
        "sheng": "52", 
        "di": "03", 
        "xian": "82", 
        "name": "仁怀市", 
        "level": 3
    }, 
    {
        "code": "520400", 
        "sheng": "52", 
        "di": "04", 
        "xian": "00", 
        "name": "安顺市", 
        "level": 2
    }, 
    {
        "code": "520402", 
        "sheng": "52", 
        "di": "04", 
        "xian": "02", 
        "name": "西秀区", 
        "level": 3
    }, 
    {
        "code": "520403", 
        "sheng": "52", 
        "di": "04", 
        "xian": "03", 
        "name": "平坝区", 
        "level": 3
    }, 
    {
        "code": "520422", 
        "sheng": "52", 
        "di": "04", 
        "xian": "22", 
        "name": "普定县", 
        "level": 3
    }, 
    {
        "code": "520423", 
        "sheng": "52", 
        "di": "04", 
        "xian": "23", 
        "name": "镇宁布依族苗族自治县", 
        "level": 3
    }, 
    {
        "code": "520424", 
        "sheng": "52", 
        "di": "04", 
        "xian": "24", 
        "name": "关岭布依族苗族自治县", 
        "level": 3
    }, 
    {
        "code": "520425", 
        "sheng": "52", 
        "di": "04", 
        "xian": "25", 
        "name": "紫云苗族布依族自治县", 
        "level": 3
    }, 
    {
        "code": "520500", 
        "sheng": "52", 
        "di": "05", 
        "xian": "00", 
        "name": "毕节市", 
        "level": 2
    }, 
    {
        "code": "520502", 
        "sheng": "52", 
        "di": "05", 
        "xian": "02", 
        "name": "七星关区", 
        "level": 3
    }, 
    {
        "code": "520521", 
        "sheng": "52", 
        "di": "05", 
        "xian": "21", 
        "name": "大方县", 
        "level": 3
    }, 
    {
        "code": "520522", 
        "sheng": "52", 
        "di": "05", 
        "xian": "22", 
        "name": "黔西县", 
        "level": 3
    }, 
    {
        "code": "520523", 
        "sheng": "52", 
        "di": "05", 
        "xian": "23", 
        "name": "金沙县", 
        "level": 3
    }, 
    {
        "code": "520524", 
        "sheng": "52", 
        "di": "05", 
        "xian": "24", 
        "name": "织金县", 
        "level": 3
    }, 
    {
        "code": "520525", 
        "sheng": "52", 
        "di": "05", 
        "xian": "25", 
        "name": "纳雍县", 
        "level": 3
    }, 
    {
        "code": "520526", 
        "sheng": "52", 
        "di": "05", 
        "xian": "26", 
        "name": "威宁彝族回族苗族自治县", 
        "level": 3
    }, 
    {
        "code": "520527", 
        "sheng": "52", 
        "di": "05", 
        "xian": "27", 
        "name": "赫章县", 
        "level": 3
    }, 
    {
        "code": "520600", 
        "sheng": "52", 
        "di": "06", 
        "xian": "00", 
        "name": "铜仁市", 
        "level": 2
    }, 
    {
        "code": "520602", 
        "sheng": "52", 
        "di": "06", 
        "xian": "02", 
        "name": "碧江区", 
        "level": 3
    }, 
    {
        "code": "520603", 
        "sheng": "52", 
        "di": "06", 
        "xian": "03", 
        "name": "万山区", 
        "level": 3
    }, 
    {
        "code": "520621", 
        "sheng": "52", 
        "di": "06", 
        "xian": "21", 
        "name": "江口县", 
        "level": 3
    }, 
    {
        "code": "520622", 
        "sheng": "52", 
        "di": "06", 
        "xian": "22", 
        "name": "玉屏侗族自治县", 
        "level": 3
    }, 
    {
        "code": "520623", 
        "sheng": "52", 
        "di": "06", 
        "xian": "23", 
        "name": "石阡县", 
        "level": 3
    }, 
    {
        "code": "520624", 
        "sheng": "52", 
        "di": "06", 
        "xian": "24", 
        "name": "思南县", 
        "level": 3
    }, 
    {
        "code": "520625", 
        "sheng": "52", 
        "di": "06", 
        "xian": "25", 
        "name": "印江土家族苗族自治县", 
        "level": 3
    }, 
    {
        "code": "520626", 
        "sheng": "52", 
        "di": "06", 
        "xian": "26", 
        "name": "德江县", 
        "level": 3
    }, 
    {
        "code": "520627", 
        "sheng": "52", 
        "di": "06", 
        "xian": "27", 
        "name": "沿河土家族自治县", 
        "level": 3
    }, 
    {
        "code": "520628", 
        "sheng": "52", 
        "di": "06", 
        "xian": "28", 
        "name": "松桃苗族自治县", 
        "level": 3
    }, 
    {
        "code": "522300", 
        "sheng": "52", 
        "di": "23", 
        "xian": "00", 
        "name": "黔西南布依族苗族自治州", 
        "level": 2
    }, 
    {
        "code": "522301", 
        "sheng": "52", 
        "di": "23", 
        "xian": "01", 
        "name": "兴义市", 
        "level": 3
    }, 
    {
        "code": "522322", 
        "sheng": "52", 
        "di": "23", 
        "xian": "22", 
        "name": "兴仁县", 
        "level": 3
    }, 
    {
        "code": "522323", 
        "sheng": "52", 
        "di": "23", 
        "xian": "23", 
        "name": "普安县", 
        "level": 3
    }, 
    {
        "code": "522324", 
        "sheng": "52", 
        "di": "23", 
        "xian": "24", 
        "name": "晴隆县", 
        "level": 3
    }, 
    {
        "code": "522325", 
        "sheng": "52", 
        "di": "23", 
        "xian": "25", 
        "name": "贞丰县", 
        "level": 3
    }, 
    {
        "code": "522326", 
        "sheng": "52", 
        "di": "23", 
        "xian": "26", 
        "name": "望谟县", 
        "level": 3
    }, 
    {
        "code": "522327", 
        "sheng": "52", 
        "di": "23", 
        "xian": "27", 
        "name": "册亨县", 
        "level": 3
    }, 
    {
        "code": "522328", 
        "sheng": "52", 
        "di": "23", 
        "xian": "28", 
        "name": "安龙县", 
        "level": 3
    }, 
    {
        "code": "522600", 
        "sheng": "52", 
        "di": "26", 
        "xian": "00", 
        "name": "黔东南苗族侗族自治州", 
        "level": 2
    }, 
    {
        "code": "522601", 
        "sheng": "52", 
        "di": "26", 
        "xian": "01", 
        "name": "凯里市", 
        "level": 3
    }, 
    {
        "code": "522622", 
        "sheng": "52", 
        "di": "26", 
        "xian": "22", 
        "name": "黄平县", 
        "level": 3
    }, 
    {
        "code": "522623", 
        "sheng": "52", 
        "di": "26", 
        "xian": "23", 
        "name": "施秉县", 
        "level": 3
    }, 
    {
        "code": "522624", 
        "sheng": "52", 
        "di": "26", 
        "xian": "24", 
        "name": "三穗县", 
        "level": 3
    }, 
    {
        "code": "522625", 
        "sheng": "52", 
        "di": "26", 
        "xian": "25", 
        "name": "镇远县", 
        "level": 3
    }, 
    {
        "code": "522626", 
        "sheng": "52", 
        "di": "26", 
        "xian": "26", 
        "name": "岑巩县", 
        "level": 3
    }, 
    {
        "code": "522627", 
        "sheng": "52", 
        "di": "26", 
        "xian": "27", 
        "name": "天柱县", 
        "level": 3
    }, 
    {
        "code": "522628", 
        "sheng": "52", 
        "di": "26", 
        "xian": "28", 
        "name": "锦屏县", 
        "level": 3
    }, 
    {
        "code": "522629", 
        "sheng": "52", 
        "di": "26", 
        "xian": "29", 
        "name": "剑河县", 
        "level": 3
    }, 
    {
        "code": "522630", 
        "sheng": "52", 
        "di": "26", 
        "xian": "30", 
        "name": "台江县", 
        "level": 3
    }, 
    {
        "code": "522631", 
        "sheng": "52", 
        "di": "26", 
        "xian": "31", 
        "name": "黎平县", 
        "level": 3
    }, 
    {
        "code": "522632", 
        "sheng": "52", 
        "di": "26", 
        "xian": "32", 
        "name": "榕江县", 
        "level": 3
    }, 
    {
        "code": "522633", 
        "sheng": "52", 
        "di": "26", 
        "xian": "33", 
        "name": "从江县", 
        "level": 3
    }, 
    {
        "code": "522634", 
        "sheng": "52", 
        "di": "26", 
        "xian": "34", 
        "name": "雷山县", 
        "level": 3
    }, 
    {
        "code": "522635", 
        "sheng": "52", 
        "di": "26", 
        "xian": "35", 
        "name": "麻江县", 
        "level": 3
    }, 
    {
        "code": "522636", 
        "sheng": "52", 
        "di": "26", 
        "xian": "36", 
        "name": "丹寨县", 
        "level": 3
    }, 
    {
        "code": "522700", 
        "sheng": "52", 
        "di": "27", 
        "xian": "00", 
        "name": "黔南布依族苗族自治州", 
        "level": 2
    }, 
    {
        "code": "522701", 
        "sheng": "52", 
        "di": "27", 
        "xian": "01", 
        "name": "都匀市", 
        "level": 3
    }, 
    {
        "code": "522702", 
        "sheng": "52", 
        "di": "27", 
        "xian": "02", 
        "name": "福泉市", 
        "level": 3
    }, 
    {
        "code": "522722", 
        "sheng": "52", 
        "di": "27", 
        "xian": "22", 
        "name": "荔波县", 
        "level": 3
    }, 
    {
        "code": "522723", 
        "sheng": "52", 
        "di": "27", 
        "xian": "23", 
        "name": "贵定县", 
        "level": 3
    }, 
    {
        "code": "522725", 
        "sheng": "52", 
        "di": "27", 
        "xian": "25", 
        "name": "瓮安县", 
        "level": 3
    }, 
    {
        "code": "522726", 
        "sheng": "52", 
        "di": "27", 
        "xian": "26", 
        "name": "独山县", 
        "level": 3
    }, 
    {
        "code": "522727", 
        "sheng": "52", 
        "di": "27", 
        "xian": "27", 
        "name": "平塘县", 
        "level": 3
    }, 
    {
        "code": "522728", 
        "sheng": "52", 
        "di": "27", 
        "xian": "28", 
        "name": "罗甸县", 
        "level": 3
    }, 
    {
        "code": "522729", 
        "sheng": "52", 
        "di": "27", 
        "xian": "29", 
        "name": "长顺县", 
        "level": 3
    }, 
    {
        "code": "522730", 
        "sheng": "52", 
        "di": "27", 
        "xian": "30", 
        "name": "龙里县", 
        "level": 3
    }, 
    {
        "code": "522731", 
        "sheng": "52", 
        "di": "27", 
        "xian": "31", 
        "name": "惠水县", 
        "level": 3
    }, 
    {
        "code": "522732", 
        "sheng": "52", 
        "di": "27", 
        "xian": "32", 
        "name": "三都水族自治县", 
        "level": 3
    }, 
    {
        "code": "530000", 
        "sheng": "53", 
        "di": "00", 
        "xian": "00", 
        "name": "云南省", 
        "level": 1
    }, 
    {
        "code": "530100", 
        "sheng": "53", 
        "di": "01", 
        "xian": "00", 
        "name": "昆明市", 
        "level": 2
    }, 
    {
        "code": "530102", 
        "sheng": "53", 
        "di": "01", 
        "xian": "02", 
        "name": "五华区", 
        "level": 3
    }, 
    {
        "code": "530103", 
        "sheng": "53", 
        "di": "01", 
        "xian": "03", 
        "name": "盘龙区", 
        "level": 3
    }, 
    {
        "code": "530111", 
        "sheng": "53", 
        "di": "01", 
        "xian": "11", 
        "name": "官渡区", 
        "level": 3
    }, 
    {
        "code": "530112", 
        "sheng": "53", 
        "di": "01", 
        "xian": "12", 
        "name": "西山区", 
        "level": 3
    }, 
    {
        "code": "530113", 
        "sheng": "53", 
        "di": "01", 
        "xian": "13", 
        "name": "东川区", 
        "level": 3
    }, 
    {
        "code": "530114", 
        "sheng": "53", 
        "di": "01", 
        "xian": "14", 
        "name": "呈贡区", 
        "level": 3
    }, 
    {
        "code": "530122", 
        "sheng": "53", 
        "di": "01", 
        "xian": "22", 
        "name": "晋宁县", 
        "level": 3
    }, 
    {
        "code": "530124", 
        "sheng": "53", 
        "di": "01", 
        "xian": "24", 
        "name": "富民县", 
        "level": 3
    }, 
    {
        "code": "530125", 
        "sheng": "53", 
        "di": "01", 
        "xian": "25", 
        "name": "宜良县", 
        "level": 3
    }, 
    {
        "code": "530126", 
        "sheng": "53", 
        "di": "01", 
        "xian": "26", 
        "name": "石林彝族自治县", 
        "level": 3
    }, 
    {
        "code": "530127", 
        "sheng": "53", 
        "di": "01", 
        "xian": "27", 
        "name": "嵩明县", 
        "level": 3
    }, 
    {
        "code": "530128", 
        "sheng": "53", 
        "di": "01", 
        "xian": "28", 
        "name": "禄劝彝族苗族自治县", 
        "level": 3
    }, 
    {
        "code": "530129", 
        "sheng": "53", 
        "di": "01", 
        "xian": "29", 
        "name": "寻甸回族彝族自治县", 
        "level": 3
    }, 
    {
        "code": "530181", 
        "sheng": "53", 
        "di": "01", 
        "xian": "81", 
        "name": "安宁市", 
        "level": 3
    }, 
    {
        "code": "530182", 
        "sheng": "53", 
        "di": "01", 
        "xian": "82", 
        "name": "滇中新区", 
        "level": 3
    }, 
    {
        "code": "530183", 
        "sheng": "53", 
        "di": "01", 
        "xian": "83", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "530300", 
        "sheng": "53", 
        "di": "03", 
        "xian": "00", 
        "name": "曲靖市", 
        "level": 2
    }, 
    {
        "code": "530302", 
        "sheng": "53", 
        "di": "03", 
        "xian": "02", 
        "name": "麒麟区", 
        "level": 3
    }, 
    {
        "code": "530303", 
        "sheng": "53", 
        "di": "03", 
        "xian": "03", 
        "name": "沾益区", 
        "level": 3
    }, 
    {
        "code": "530321", 
        "sheng": "53", 
        "di": "03", 
        "xian": "21", 
        "name": "马龙县", 
        "level": 3
    }, 
    {
        "code": "530322", 
        "sheng": "53", 
        "di": "03", 
        "xian": "22", 
        "name": "陆良县", 
        "level": 3
    }, 
    {
        "code": "530323", 
        "sheng": "53", 
        "di": "03", 
        "xian": "23", 
        "name": "师宗县", 
        "level": 3
    }, 
    {
        "code": "530324", 
        "sheng": "53", 
        "di": "03", 
        "xian": "24", 
        "name": "罗平县", 
        "level": 3
    }, 
    {
        "code": "530325", 
        "sheng": "53", 
        "di": "03", 
        "xian": "25", 
        "name": "富源县", 
        "level": 3
    }, 
    {
        "code": "530326", 
        "sheng": "53", 
        "di": "03", 
        "xian": "26", 
        "name": "会泽县", 
        "level": 3
    }, 
    {
        "code": "530381", 
        "sheng": "53", 
        "di": "03", 
        "xian": "81", 
        "name": "宣威市", 
        "level": 3
    }, 
    {
        "code": "530400", 
        "sheng": "53", 
        "di": "04", 
        "xian": "00", 
        "name": "玉溪市", 
        "level": 2
    }, 
    {
        "code": "530402", 
        "sheng": "53", 
        "di": "04", 
        "xian": "02", 
        "name": "红塔区", 
        "level": 3
    }, 
    {
        "code": "530403", 
        "sheng": "53", 
        "di": "04", 
        "xian": "03", 
        "name": "江川区", 
        "level": 3
    }, 
    {
        "code": "530422", 
        "sheng": "53", 
        "di": "04", 
        "xian": "22", 
        "name": "澄江县", 
        "level": 3
    }, 
    {
        "code": "530423", 
        "sheng": "53", 
        "di": "04", 
        "xian": "23", 
        "name": "通海县", 
        "level": 3
    }, 
    {
        "code": "530424", 
        "sheng": "53", 
        "di": "04", 
        "xian": "24", 
        "name": "华宁县", 
        "level": 3
    }, 
    {
        "code": "530425", 
        "sheng": "53", 
        "di": "04", 
        "xian": "25", 
        "name": "易门县", 
        "level": 3
    }, 
    {
        "code": "530426", 
        "sheng": "53", 
        "di": "04", 
        "xian": "26", 
        "name": "峨山彝族自治县", 
        "level": 3
    }, 
    {
        "code": "530427", 
        "sheng": "53", 
        "di": "04", 
        "xian": "27", 
        "name": "新平彝族傣族自治县", 
        "level": 3
    }, 
    {
        "code": "530428", 
        "sheng": "53", 
        "di": "04", 
        "xian": "28", 
        "name": "元江哈尼族彝族傣族自治县", 
        "level": 3
    }, 
    {
        "code": "530500", 
        "sheng": "53", 
        "di": "05", 
        "xian": "00", 
        "name": "保山市", 
        "level": 2
    }, 
    {
        "code": "530502", 
        "sheng": "53", 
        "di": "05", 
        "xian": "02", 
        "name": "隆阳区", 
        "level": 3
    }, 
    {
        "code": "530521", 
        "sheng": "53", 
        "di": "05", 
        "xian": "21", 
        "name": "施甸县", 
        "level": 3
    }, 
    {
        "code": "530523", 
        "sheng": "53", 
        "di": "05", 
        "xian": "23", 
        "name": "龙陵县", 
        "level": 3
    }, 
    {
        "code": "530524", 
        "sheng": "53", 
        "di": "05", 
        "xian": "24", 
        "name": "昌宁县", 
        "level": 3
    }, 
    {
        "code": "530581", 
        "sheng": "53", 
        "di": "05", 
        "xian": "81", 
        "name": "腾冲市", 
        "level": 3
    }, 
    {
        "code": "530600", 
        "sheng": "53", 
        "di": "06", 
        "xian": "00", 
        "name": "昭通市", 
        "level": 2
    }, 
    {
        "code": "530602", 
        "sheng": "53", 
        "di": "06", 
        "xian": "02", 
        "name": "昭阳区", 
        "level": 3
    }, 
    {
        "code": "530621", 
        "sheng": "53", 
        "di": "06", 
        "xian": "21", 
        "name": "鲁甸县", 
        "level": 3
    }, 
    {
        "code": "530622", 
        "sheng": "53", 
        "di": "06", 
        "xian": "22", 
        "name": "巧家县", 
        "level": 3
    }, 
    {
        "code": "530623", 
        "sheng": "53", 
        "di": "06", 
        "xian": "23", 
        "name": "盐津县", 
        "level": 3
    }, 
    {
        "code": "530624", 
        "sheng": "53", 
        "di": "06", 
        "xian": "24", 
        "name": "大关县", 
        "level": 3
    }, 
    {
        "code": "530625", 
        "sheng": "53", 
        "di": "06", 
        "xian": "25", 
        "name": "永善县", 
        "level": 3
    }, 
    {
        "code": "530626", 
        "sheng": "53", 
        "di": "06", 
        "xian": "26", 
        "name": "绥江县", 
        "level": 3
    }, 
    {
        "code": "530627", 
        "sheng": "53", 
        "di": "06", 
        "xian": "27", 
        "name": "镇雄县", 
        "level": 3
    }, 
    {
        "code": "530628", 
        "sheng": "53", 
        "di": "06", 
        "xian": "28", 
        "name": "彝良县", 
        "level": 3
    }, 
    {
        "code": "530629", 
        "sheng": "53", 
        "di": "06", 
        "xian": "29", 
        "name": "威信县", 
        "level": 3
    }, 
    {
        "code": "530630", 
        "sheng": "53", 
        "di": "06", 
        "xian": "30", 
        "name": "水富县", 
        "level": 3
    }, 
    {
        "code": "530700", 
        "sheng": "53", 
        "di": "07", 
        "xian": "00", 
        "name": "丽江市", 
        "level": 2
    }, 
    {
        "code": "530702", 
        "sheng": "53", 
        "di": "07", 
        "xian": "02", 
        "name": "古城区", 
        "level": 3
    }, 
    {
        "code": "530721", 
        "sheng": "53", 
        "di": "07", 
        "xian": "21", 
        "name": "玉龙纳西族自治县", 
        "level": 3
    }, 
    {
        "code": "530722", 
        "sheng": "53", 
        "di": "07", 
        "xian": "22", 
        "name": "永胜县", 
        "level": 3
    }, 
    {
        "code": "530723", 
        "sheng": "53", 
        "di": "07", 
        "xian": "23", 
        "name": "华坪县", 
        "level": 3
    }, 
    {
        "code": "530724", 
        "sheng": "53", 
        "di": "07", 
        "xian": "24", 
        "name": "宁蒗彝族自治县", 
        "level": 3
    }, 
    {
        "code": "530800", 
        "sheng": "53", 
        "di": "08", 
        "xian": "00", 
        "name": "普洱市", 
        "level": 2
    }, 
    {
        "code": "530802", 
        "sheng": "53", 
        "di": "08", 
        "xian": "02", 
        "name": "思茅区", 
        "level": 3
    }, 
    {
        "code": "530821", 
        "sheng": "53", 
        "di": "08", 
        "xian": "21", 
        "name": "宁洱哈尼族彝族自治县", 
        "level": 3
    }, 
    {
        "code": "530822", 
        "sheng": "53", 
        "di": "08", 
        "xian": "22", 
        "name": "墨江哈尼族自治县", 
        "level": 3
    }, 
    {
        "code": "530823", 
        "sheng": "53", 
        "di": "08", 
        "xian": "23", 
        "name": "景东彝族自治县", 
        "level": 3
    }, 
    {
        "code": "530824", 
        "sheng": "53", 
        "di": "08", 
        "xian": "24", 
        "name": "景谷傣族彝族自治县", 
        "level": 3
    }, 
    {
        "code": "530825", 
        "sheng": "53", 
        "di": "08", 
        "xian": "25", 
        "name": "镇沅彝族哈尼族拉祜族自治县", 
        "level": 3
    }, 
    {
        "code": "530826", 
        "sheng": "53", 
        "di": "08", 
        "xian": "26", 
        "name": "江城哈尼族彝族自治县", 
        "level": 3
    }, 
    {
        "code": "530827", 
        "sheng": "53", 
        "di": "08", 
        "xian": "27", 
        "name": "孟连傣族拉祜族佤族自治县", 
        "level": 3
    }, 
    {
        "code": "530828", 
        "sheng": "53", 
        "di": "08", 
        "xian": "28", 
        "name": "澜沧拉祜族自治县", 
        "level": 3
    }, 
    {
        "code": "530829", 
        "sheng": "53", 
        "di": "08", 
        "xian": "29", 
        "name": "西盟佤族自治县", 
        "level": 3
    }, 
    {
        "code": "530900", 
        "sheng": "53", 
        "di": "09", 
        "xian": "00", 
        "name": "临沧市", 
        "level": 2
    }, 
    {
        "code": "530902", 
        "sheng": "53", 
        "di": "09", 
        "xian": "02", 
        "name": "临翔区", 
        "level": 3
    }, 
    {
        "code": "530921", 
        "sheng": "53", 
        "di": "09", 
        "xian": "21", 
        "name": "凤庆县", 
        "level": 3
    }, 
    {
        "code": "530922", 
        "sheng": "53", 
        "di": "09", 
        "xian": "22", 
        "name": "云县", 
        "level": 3
    }, 
    {
        "code": "530923", 
        "sheng": "53", 
        "di": "09", 
        "xian": "23", 
        "name": "永德县", 
        "level": 3
    }, 
    {
        "code": "530924", 
        "sheng": "53", 
        "di": "09", 
        "xian": "24", 
        "name": "镇康县", 
        "level": 3
    }, 
    {
        "code": "530925", 
        "sheng": "53", 
        "di": "09", 
        "xian": "25", 
        "name": "双江拉祜族佤族布朗族傣族自治县", 
        "level": 3
    }, 
    {
        "code": "530926", 
        "sheng": "53", 
        "di": "09", 
        "xian": "26", 
        "name": "耿马傣族佤族自治县", 
        "level": 3
    }, 
    {
        "code": "530927", 
        "sheng": "53", 
        "di": "09", 
        "xian": "27", 
        "name": "沧源佤族自治县", 
        "level": 3
    }, 
    {
        "code": "532300", 
        "sheng": "53", 
        "di": "23", 
        "xian": "00", 
        "name": "楚雄彝族自治州", 
        "level": 2
    }, 
    {
        "code": "532301", 
        "sheng": "53", 
        "di": "23", 
        "xian": "01", 
        "name": "楚雄市", 
        "level": 3
    }, 
    {
        "code": "532322", 
        "sheng": "53", 
        "di": "23", 
        "xian": "22", 
        "name": "双柏县", 
        "level": 3
    }, 
    {
        "code": "532323", 
        "sheng": "53", 
        "di": "23", 
        "xian": "23", 
        "name": "牟定县", 
        "level": 3
    }, 
    {
        "code": "532324", 
        "sheng": "53", 
        "di": "23", 
        "xian": "24", 
        "name": "南华县", 
        "level": 3
    }, 
    {
        "code": "532325", 
        "sheng": "53", 
        "di": "23", 
        "xian": "25", 
        "name": "姚安县", 
        "level": 3
    }, 
    {
        "code": "532326", 
        "sheng": "53", 
        "di": "23", 
        "xian": "26", 
        "name": "大姚县", 
        "level": 3
    }, 
    {
        "code": "532327", 
        "sheng": "53", 
        "di": "23", 
        "xian": "27", 
        "name": "永仁县", 
        "level": 3
    }, 
    {
        "code": "532328", 
        "sheng": "53", 
        "di": "23", 
        "xian": "28", 
        "name": "元谋县", 
        "level": 3
    }, 
    {
        "code": "532329", 
        "sheng": "53", 
        "di": "23", 
        "xian": "29", 
        "name": "武定县", 
        "level": 3
    }, 
    {
        "code": "532331", 
        "sheng": "53", 
        "di": "23", 
        "xian": "31", 
        "name": "禄丰县", 
        "level": 3
    }, 
    {
        "code": "532500", 
        "sheng": "53", 
        "di": "25", 
        "xian": "00", 
        "name": "红河哈尼族彝族自治州", 
        "level": 2
    }, 
    {
        "code": "532501", 
        "sheng": "53", 
        "di": "25", 
        "xian": "01", 
        "name": "个旧市", 
        "level": 3
    }, 
    {
        "code": "532502", 
        "sheng": "53", 
        "di": "25", 
        "xian": "02", 
        "name": "开远市", 
        "level": 3
    }, 
    {
        "code": "532503", 
        "sheng": "53", 
        "di": "25", 
        "xian": "03", 
        "name": "蒙自市", 
        "level": 3
    }, 
    {
        "code": "532504", 
        "sheng": "53", 
        "di": "25", 
        "xian": "04", 
        "name": "弥勒市", 
        "level": 3
    }, 
    {
        "code": "532523", 
        "sheng": "53", 
        "di": "25", 
        "xian": "23", 
        "name": "屏边苗族自治县", 
        "level": 3
    }, 
    {
        "code": "532524", 
        "sheng": "53", 
        "di": "25", 
        "xian": "24", 
        "name": "建水县", 
        "level": 3
    }, 
    {
        "code": "532525", 
        "sheng": "53", 
        "di": "25", 
        "xian": "25", 
        "name": "石屏县", 
        "level": 3
    }, 
    {
        "code": "532527", 
        "sheng": "53", 
        "di": "25", 
        "xian": "27", 
        "name": "泸西县", 
        "level": 3
    }, 
    {
        "code": "532528", 
        "sheng": "53", 
        "di": "25", 
        "xian": "28", 
        "name": "元阳县", 
        "level": 3
    }, 
    {
        "code": "532529", 
        "sheng": "53", 
        "di": "25", 
        "xian": "29", 
        "name": "红河县", 
        "level": 3
    }, 
    {
        "code": "532530", 
        "sheng": "53", 
        "di": "25", 
        "xian": "30", 
        "name": "金平苗族瑶族傣族自治县", 
        "level": 3
    }, 
    {
        "code": "532531", 
        "sheng": "53", 
        "di": "25", 
        "xian": "31", 
        "name": "绿春县", 
        "level": 3
    }, 
    {
        "code": "532532", 
        "sheng": "53", 
        "di": "25", 
        "xian": "32", 
        "name": "河口瑶族自治县", 
        "level": 3
    }, 
    {
        "code": "532600", 
        "sheng": "53", 
        "di": "26", 
        "xian": "00", 
        "name": "文山壮族苗族自治州", 
        "level": 2
    }, 
    {
        "code": "532601", 
        "sheng": "53", 
        "di": "26", 
        "xian": "01", 
        "name": "文山市", 
        "level": 3
    }, 
    {
        "code": "532622", 
        "sheng": "53", 
        "di": "26", 
        "xian": "22", 
        "name": "砚山县", 
        "level": 3
    }, 
    {
        "code": "532623", 
        "sheng": "53", 
        "di": "26", 
        "xian": "23", 
        "name": "西畴县", 
        "level": 3
    }, 
    {
        "code": "532624", 
        "sheng": "53", 
        "di": "26", 
        "xian": "24", 
        "name": "麻栗坡县", 
        "level": 3
    }, 
    {
        "code": "532625", 
        "sheng": "53", 
        "di": "26", 
        "xian": "25", 
        "name": "马关县", 
        "level": 3
    }, 
    {
        "code": "532626", 
        "sheng": "53", 
        "di": "26", 
        "xian": "26", 
        "name": "丘北县", 
        "level": 3
    }, 
    {
        "code": "532627", 
        "sheng": "53", 
        "di": "26", 
        "xian": "27", 
        "name": "广南县", 
        "level": 3
    }, 
    {
        "code": "532628", 
        "sheng": "53", 
        "di": "26", 
        "xian": "28", 
        "name": "富宁县", 
        "level": 3
    }, 
    {
        "code": "532800", 
        "sheng": "53", 
        "di": "28", 
        "xian": "00", 
        "name": "西双版纳傣族自治州", 
        "level": 2
    }, 
    {
        "code": "532801", 
        "sheng": "53", 
        "di": "28", 
        "xian": "01", 
        "name": "景洪市", 
        "level": 3
    }, 
    {
        "code": "532822", 
        "sheng": "53", 
        "di": "28", 
        "xian": "22", 
        "name": "勐海县", 
        "level": 3
    }, 
    {
        "code": "532823", 
        "sheng": "53", 
        "di": "28", 
        "xian": "23", 
        "name": "勐腊县", 
        "level": 3
    }, 
    {
        "code": "532900", 
        "sheng": "53", 
        "di": "29", 
        "xian": "00", 
        "name": "大理白族自治州", 
        "level": 2
    }, 
    {
        "code": "532901", 
        "sheng": "53", 
        "di": "29", 
        "xian": "01", 
        "name": "大理市", 
        "level": 3
    }, 
    {
        "code": "532922", 
        "sheng": "53", 
        "di": "29", 
        "xian": "22", 
        "name": "漾濞彝族自治县", 
        "level": 3
    }, 
    {
        "code": "532923", 
        "sheng": "53", 
        "di": "29", 
        "xian": "23", 
        "name": "祥云县", 
        "level": 3
    }, 
    {
        "code": "532924", 
        "sheng": "53", 
        "di": "29", 
        "xian": "24", 
        "name": "宾川县", 
        "level": 3
    }, 
    {
        "code": "532925", 
        "sheng": "53", 
        "di": "29", 
        "xian": "25", 
        "name": "弥渡县", 
        "level": 3
    }, 
    {
        "code": "532926", 
        "sheng": "53", 
        "di": "29", 
        "xian": "26", 
        "name": "南涧彝族自治县", 
        "level": 3
    }, 
    {
        "code": "532927", 
        "sheng": "53", 
        "di": "29", 
        "xian": "27", 
        "name": "巍山彝族回族自治县", 
        "level": 3
    }, 
    {
        "code": "532928", 
        "sheng": "53", 
        "di": "29", 
        "xian": "28", 
        "name": "永平县", 
        "level": 3
    }, 
    {
        "code": "532929", 
        "sheng": "53", 
        "di": "29", 
        "xian": "29", 
        "name": "云龙县", 
        "level": 3
    }, 
    {
        "code": "532930", 
        "sheng": "53", 
        "di": "29", 
        "xian": "30", 
        "name": "洱源县", 
        "level": 3
    }, 
    {
        "code": "532931", 
        "sheng": "53", 
        "di": "29", 
        "xian": "31", 
        "name": "剑川县", 
        "level": 3
    }, 
    {
        "code": "532932", 
        "sheng": "53", 
        "di": "29", 
        "xian": "32", 
        "name": "鹤庆县", 
        "level": 3
    }, 
    {
        "code": "533100", 
        "sheng": "53", 
        "di": "31", 
        "xian": "00", 
        "name": "德宏傣族景颇族自治州", 
        "level": 2
    }, 
    {
        "code": "533102", 
        "sheng": "53", 
        "di": "31", 
        "xian": "02", 
        "name": "瑞丽市", 
        "level": 3
    }, 
    {
        "code": "533103", 
        "sheng": "53", 
        "di": "31", 
        "xian": "03", 
        "name": "芒市", 
        "level": 3
    }, 
    {
        "code": "533122", 
        "sheng": "53", 
        "di": "31", 
        "xian": "22", 
        "name": "梁河县", 
        "level": 3
    }, 
    {
        "code": "533123", 
        "sheng": "53", 
        "di": "31", 
        "xian": "23", 
        "name": "盈江县", 
        "level": 3
    }, 
    {
        "code": "533124", 
        "sheng": "53", 
        "di": "31", 
        "xian": "24", 
        "name": "陇川县", 
        "level": 3
    }, 
    {
        "code": "533300", 
        "sheng": "53", 
        "di": "33", 
        "xian": "00", 
        "name": "怒江傈僳族自治州", 
        "level": 2
    }, 
    {
        "code": "533301", 
        "sheng": "53", 
        "di": "33", 
        "xian": "01", 
        "name": "泸水市", 
        "level": 3
    }, 
    {
        "code": "533323", 
        "sheng": "53", 
        "di": "33", 
        "xian": "23", 
        "name": "福贡县", 
        "level": 3
    }, 
    {
        "code": "533324", 
        "sheng": "53", 
        "di": "33", 
        "xian": "24", 
        "name": "贡山独龙族怒族自治县", 
        "level": 3
    }, 
    {
        "code": "533325", 
        "sheng": "53", 
        "di": "33", 
        "xian": "25", 
        "name": "兰坪白族普米族自治县", 
        "level": 3
    }, 
    {
        "code": "533400", 
        "sheng": "53", 
        "di": "34", 
        "xian": "00", 
        "name": "迪庆藏族自治州", 
        "level": 2
    }, 
    {
        "code": "533401", 
        "sheng": "53", 
        "di": "34", 
        "xian": "01", 
        "name": "香格里拉市", 
        "level": 3
    }, 
    {
        "code": "533422", 
        "sheng": "53", 
        "di": "34", 
        "xian": "22", 
        "name": "德钦县", 
        "level": 3
    }, 
    {
        "code": "533423", 
        "sheng": "53", 
        "di": "34", 
        "xian": "23", 
        "name": "维西傈僳族自治县", 
        "level": 3
    }, 
    {
        "code": "540000", 
        "sheng": "54", 
        "di": "00", 
        "xian": "00", 
        "name": "西藏自治区", 
        "level": 1
    }, 
    {
        "code": "540100", 
        "sheng": "54", 
        "di": "01", 
        "xian": "00", 
        "name": "拉萨市", 
        "level": 2
    }, 
    {
        "code": "540102", 
        "sheng": "54", 
        "di": "01", 
        "xian": "02", 
        "name": "城关区", 
        "level": 3
    }, 
    {
        "code": "540103", 
        "sheng": "54", 
        "di": "01", 
        "xian": "03", 
        "name": "堆龙德庆区", 
        "level": 3
    }, 
    {
        "code": "540121", 
        "sheng": "54", 
        "di": "01", 
        "xian": "21", 
        "name": "林周县", 
        "level": 3
    }, 
    {
        "code": "540122", 
        "sheng": "54", 
        "di": "01", 
        "xian": "22", 
        "name": "当雄县", 
        "level": 3
    }, 
    {
        "code": "540123", 
        "sheng": "54", 
        "di": "01", 
        "xian": "23", 
        "name": "尼木县", 
        "level": 3
    }, 
    {
        "code": "540124", 
        "sheng": "54", 
        "di": "01", 
        "xian": "24", 
        "name": "曲水县", 
        "level": 3
    }, 
    {
        "code": "540126", 
        "sheng": "54", 
        "di": "01", 
        "xian": "26", 
        "name": "达孜县", 
        "level": 3
    }, 
    {
        "code": "540127", 
        "sheng": "54", 
        "di": "01", 
        "xian": "27", 
        "name": "墨竹工卡县", 
        "level": 3
    }, 
    {
        "code": "540200", 
        "sheng": "54", 
        "di": "02", 
        "xian": "00", 
        "name": "日喀则市", 
        "level": 2
    }, 
    {
        "code": "540202", 
        "sheng": "54", 
        "di": "02", 
        "xian": "02", 
        "name": "桑珠孜区", 
        "level": 3
    }, 
    {
        "code": "540221", 
        "sheng": "54", 
        "di": "02", 
        "xian": "21", 
        "name": "南木林县", 
        "level": 3
    }, 
    {
        "code": "540222", 
        "sheng": "54", 
        "di": "02", 
        "xian": "22", 
        "name": "江孜县", 
        "level": 3
    }, 
    {
        "code": "540223", 
        "sheng": "54", 
        "di": "02", 
        "xian": "23", 
        "name": "定日县", 
        "level": 3
    }, 
    {
        "code": "540224", 
        "sheng": "54", 
        "di": "02", 
        "xian": "24", 
        "name": "萨迦县", 
        "level": 3
    }, 
    {
        "code": "540225", 
        "sheng": "54", 
        "di": "02", 
        "xian": "25", 
        "name": "拉孜县", 
        "level": 3
    }, 
    {
        "code": "540226", 
        "sheng": "54", 
        "di": "02", 
        "xian": "26", 
        "name": "昂仁县", 
        "level": 3
    }, 
    {
        "code": "540227", 
        "sheng": "54", 
        "di": "02", 
        "xian": "27", 
        "name": "谢通门县", 
        "level": 3
    }, 
    {
        "code": "540228", 
        "sheng": "54", 
        "di": "02", 
        "xian": "28", 
        "name": "白朗县", 
        "level": 3
    }, 
    {
        "code": "540229", 
        "sheng": "54", 
        "di": "02", 
        "xian": "29", 
        "name": "仁布县", 
        "level": 3
    }, 
    {
        "code": "540230", 
        "sheng": "54", 
        "di": "02", 
        "xian": "30", 
        "name": "康马县", 
        "level": 3
    }, 
    {
        "code": "540231", 
        "sheng": "54", 
        "di": "02", 
        "xian": "31", 
        "name": "定结县", 
        "level": 3
    }, 
    {
        "code": "540232", 
        "sheng": "54", 
        "di": "02", 
        "xian": "32", 
        "name": "仲巴县", 
        "level": 3
    }, 
    {
        "code": "540233", 
        "sheng": "54", 
        "di": "02", 
        "xian": "33", 
        "name": "亚东县", 
        "level": 3
    }, 
    {
        "code": "540234", 
        "sheng": "54", 
        "di": "02", 
        "xian": "34", 
        "name": "吉隆县", 
        "level": 3
    }, 
    {
        "code": "540235", 
        "sheng": "54", 
        "di": "02", 
        "xian": "35", 
        "name": "聂拉木县", 
        "level": 3
    }, 
    {
        "code": "540236", 
        "sheng": "54", 
        "di": "02", 
        "xian": "36", 
        "name": "萨嘎县", 
        "level": 3
    }, 
    {
        "code": "540237", 
        "sheng": "54", 
        "di": "02", 
        "xian": "37", 
        "name": "岗巴县", 
        "level": 3
    }, 
    {
        "code": "540300", 
        "sheng": "54", 
        "di": "03", 
        "xian": "00", 
        "name": "昌都市", 
        "level": 2
    }, 
    {
        "code": "540302", 
        "sheng": "54", 
        "di": "03", 
        "xian": "02", 
        "name": "卡若区", 
        "level": 3
    }, 
    {
        "code": "540321", 
        "sheng": "54", 
        "di": "03", 
        "xian": "21", 
        "name": "江达县", 
        "level": 3
    }, 
    {
        "code": "540322", 
        "sheng": "54", 
        "di": "03", 
        "xian": "22", 
        "name": "贡觉县", 
        "level": 3
    }, 
    {
        "code": "540323", 
        "sheng": "54", 
        "di": "03", 
        "xian": "23", 
        "name": "类乌齐县", 
        "level": 3
    }, 
    {
        "code": "540324", 
        "sheng": "54", 
        "di": "03", 
        "xian": "24", 
        "name": "丁青县", 
        "level": 3
    }, 
    {
        "code": "540325", 
        "sheng": "54", 
        "di": "03", 
        "xian": "25", 
        "name": "察雅县", 
        "level": 3
    }, 
    {
        "code": "540326", 
        "sheng": "54", 
        "di": "03", 
        "xian": "26", 
        "name": "八宿县", 
        "level": 3
    }, 
    {
        "code": "540327", 
        "sheng": "54", 
        "di": "03", 
        "xian": "27", 
        "name": "左贡县", 
        "level": 3
    }, 
    {
        "code": "540328", 
        "sheng": "54", 
        "di": "03", 
        "xian": "28", 
        "name": "芒康县", 
        "level": 3
    }, 
    {
        "code": "540329", 
        "sheng": "54", 
        "di": "03", 
        "xian": "29", 
        "name": "洛隆县", 
        "level": 3
    }, 
    {
        "code": "540330", 
        "sheng": "54", 
        "di": "03", 
        "xian": "30", 
        "name": "边坝县", 
        "level": 3
    }, 
    {
        "code": "540400", 
        "sheng": "54", 
        "di": "04", 
        "xian": "00", 
        "name": "林芝市", 
        "level": 2
    }, 
    {
        "code": "540402", 
        "sheng": "54", 
        "di": "04", 
        "xian": "02", 
        "name": "巴宜区", 
        "level": 3
    }, 
    {
        "code": "540421", 
        "sheng": "54", 
        "di": "04", 
        "xian": "21", 
        "name": "工布江达县", 
        "level": 3
    }, 
    {
        "code": "540422", 
        "sheng": "54", 
        "di": "04", 
        "xian": "22", 
        "name": "米林县", 
        "level": 3
    }, 
    {
        "code": "540423", 
        "sheng": "54", 
        "di": "04", 
        "xian": "23", 
        "name": "墨脱县", 
        "level": 3
    }, 
    {
        "code": "540424", 
        "sheng": "54", 
        "di": "04", 
        "xian": "24", 
        "name": "波密县", 
        "level": 3
    }, 
    {
        "code": "540425", 
        "sheng": "54", 
        "di": "04", 
        "xian": "25", 
        "name": "察隅县", 
        "level": 3
    }, 
    {
        "code": "540426", 
        "sheng": "54", 
        "di": "04", 
        "xian": "26", 
        "name": "朗县", 
        "level": 3
    }, 
    {
        "code": "540500", 
        "sheng": "54", 
        "di": "05", 
        "xian": "00", 
        "name": "山南市", 
        "level": 2
    }, 
    {
        "code": "540502", 
        "sheng": "54", 
        "di": "05", 
        "xian": "02", 
        "name": "乃东区", 
        "level": 3
    }, 
    {
        "code": "540521", 
        "sheng": "54", 
        "di": "05", 
        "xian": "21", 
        "name": "扎囊县", 
        "level": 3
    }, 
    {
        "code": "540522", 
        "sheng": "54", 
        "di": "05", 
        "xian": "22", 
        "name": "贡嘎县", 
        "level": 3
    }, 
    {
        "code": "540523", 
        "sheng": "54", 
        "di": "05", 
        "xian": "23", 
        "name": "桑日县", 
        "level": 3
    }, 
    {
        "code": "540524", 
        "sheng": "54", 
        "di": "05", 
        "xian": "24", 
        "name": "琼结县", 
        "level": 3
    }, 
    {
        "code": "540525", 
        "sheng": "54", 
        "di": "05", 
        "xian": "25", 
        "name": "曲松县", 
        "level": 3
    }, 
    {
        "code": "540526", 
        "sheng": "54", 
        "di": "05", 
        "xian": "26", 
        "name": "措美县", 
        "level": 3
    }, 
    {
        "code": "540527", 
        "sheng": "54", 
        "di": "05", 
        "xian": "27", 
        "name": "洛扎县", 
        "level": 3
    }, 
    {
        "code": "540528", 
        "sheng": "54", 
        "di": "05", 
        "xian": "28", 
        "name": "加查县", 
        "level": 3
    }, 
    {
        "code": "540529", 
        "sheng": "54", 
        "di": "05", 
        "xian": "29", 
        "name": "隆子县", 
        "level": 3
    }, 
    {
        "code": "540530", 
        "sheng": "54", 
        "di": "05", 
        "xian": "30", 
        "name": "错那县", 
        "level": 3
    }, 
    {
        "code": "540531", 
        "sheng": "54", 
        "di": "05", 
        "xian": "31", 
        "name": "浪卡子县", 
        "level": 3
    }, 
    {
        "code": "542400", 
        "sheng": "54", 
        "di": "24", 
        "xian": "00", 
        "name": "那曲地区", 
        "level": 2
    }, 
    {
        "code": "542421", 
        "sheng": "54", 
        "di": "24", 
        "xian": "21", 
        "name": "那曲县", 
        "level": 3
    }, 
    {
        "code": "542422", 
        "sheng": "54", 
        "di": "24", 
        "xian": "22", 
        "name": "嘉黎县", 
        "level": 3
    }, 
    {
        "code": "542423", 
        "sheng": "54", 
        "di": "24", 
        "xian": "23", 
        "name": "比如县", 
        "level": 3
    }, 
    {
        "code": "542424", 
        "sheng": "54", 
        "di": "24", 
        "xian": "24", 
        "name": "聂荣县", 
        "level": 3
    }, 
    {
        "code": "542425", 
        "sheng": "54", 
        "di": "24", 
        "xian": "25", 
        "name": "安多县", 
        "level": 3
    }, 
    {
        "code": "542426", 
        "sheng": "54", 
        "di": "24", 
        "xian": "26", 
        "name": "申扎县", 
        "level": 3
    }, 
    {
        "code": "542427", 
        "sheng": "54", 
        "di": "24", 
        "xian": "27", 
        "name": "索县", 
        "level": 3
    }, 
    {
        "code": "542428", 
        "sheng": "54", 
        "di": "24", 
        "xian": "28", 
        "name": "班戈县", 
        "level": 3
    }, 
    {
        "code": "542429", 
        "sheng": "54", 
        "di": "24", 
        "xian": "29", 
        "name": "巴青县", 
        "level": 3
    }, 
    {
        "code": "542430", 
        "sheng": "54", 
        "di": "24", 
        "xian": "30", 
        "name": "尼玛县", 
        "level": 3
    }, 
    {
        "code": "542431", 
        "sheng": "54", 
        "di": "24", 
        "xian": "31", 
        "name": "双湖县", 
        "level": 3
    }, 
    {
        "code": "542500", 
        "sheng": "54", 
        "di": "25", 
        "xian": "00", 
        "name": "阿里地区", 
        "level": 2
    }, 
    {
        "code": "542521", 
        "sheng": "54", 
        "di": "25", 
        "xian": "21", 
        "name": "普兰县", 
        "level": 3
    }, 
    {
        "code": "542522", 
        "sheng": "54", 
        "di": "25", 
        "xian": "22", 
        "name": "札达县", 
        "level": 3
    }, 
    {
        "code": "542523", 
        "sheng": "54", 
        "di": "25", 
        "xian": "23", 
        "name": "噶尔县", 
        "level": 3
    }, 
    {
        "code": "542524", 
        "sheng": "54", 
        "di": "25", 
        "xian": "24", 
        "name": "日土县", 
        "level": 3
    }, 
    {
        "code": "542525", 
        "sheng": "54", 
        "di": "25", 
        "xian": "25", 
        "name": "革吉县", 
        "level": 3
    }, 
    {
        "code": "542526", 
        "sheng": "54", 
        "di": "25", 
        "xian": "26", 
        "name": "改则县", 
        "level": 3
    }, 
    {
        "code": "542527", 
        "sheng": "54", 
        "di": "25", 
        "xian": "27", 
        "name": "措勤县", 
        "level": 3
    }, 
    {
        "code": "610000", 
        "sheng": "61", 
        "di": "00", 
        "xian": "00", 
        "name": "陕西省", 
        "level": 1
    }, 
    {
        "code": "610100", 
        "sheng": "61", 
        "di": "01", 
        "xian": "00", 
        "name": "西安市", 
        "level": 2
    }, 
    {
        "code": "610102", 
        "sheng": "61", 
        "di": "01", 
        "xian": "02", 
        "name": "新城区", 
        "level": 3
    }, 
    {
        "code": "610103", 
        "sheng": "61", 
        "di": "01", 
        "xian": "03", 
        "name": "碑林区", 
        "level": 3
    }, 
    {
        "code": "610104", 
        "sheng": "61", 
        "di": "01", 
        "xian": "04", 
        "name": "莲湖区", 
        "level": 3
    }, 
    {
        "code": "610111", 
        "sheng": "61", 
        "di": "01", 
        "xian": "11", 
        "name": "灞桥区", 
        "level": 3
    }, 
    {
        "code": "610112", 
        "sheng": "61", 
        "di": "01", 
        "xian": "12", 
        "name": "未央区", 
        "level": 3
    }, 
    {
        "code": "610113", 
        "sheng": "61", 
        "di": "01", 
        "xian": "13", 
        "name": "雁塔区", 
        "level": 3
    }, 
    {
        "code": "610114", 
        "sheng": "61", 
        "di": "01", 
        "xian": "14", 
        "name": "阎良区", 
        "level": 3
    }, 
    {
        "code": "610115", 
        "sheng": "61", 
        "di": "01", 
        "xian": "15", 
        "name": "临潼区", 
        "level": 3
    }, 
    {
        "code": "610116", 
        "sheng": "61", 
        "di": "01", 
        "xian": "16", 
        "name": "长安区", 
        "level": 3
    }, 
    {
        "code": "610117", 
        "sheng": "61", 
        "di": "01", 
        "xian": "17", 
        "name": "高陵区", 
        "level": 3
    }, 
    {
        "code": "610122", 
        "sheng": "61", 
        "di": "01", 
        "xian": "22", 
        "name": "蓝田县", 
        "level": 3
    }, 
    {
        "code": "610124", 
        "sheng": "61", 
        "di": "01", 
        "xian": "24", 
        "name": "周至县", 
        "level": 3
    }, 
    {
        "code": "610125", 
        "sheng": "61", 
        "di": "01", 
        "xian": "25", 
        "name": "户县", 
        "level": 3
    }, 
    {
        "code": "610127", 
        "sheng": "61", 
        "di": "01", 
        "xian": "27", 
        "name": "曲江新区", 
        "level": 3
    }, 
    {
        "code": "610128", 
        "sheng": "61", 
        "di": "01", 
        "xian": "28", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "610200", 
        "sheng": "61", 
        "di": "02", 
        "xian": "00", 
        "name": "铜川市", 
        "level": 2
    }, 
    {
        "code": "610202", 
        "sheng": "61", 
        "di": "02", 
        "xian": "02", 
        "name": "王益区", 
        "level": 3
    }, 
    {
        "code": "610203", 
        "sheng": "61", 
        "di": "02", 
        "xian": "03", 
        "name": "印台区", 
        "level": 3
    }, 
    {
        "code": "610204", 
        "sheng": "61", 
        "di": "02", 
        "xian": "04", 
        "name": "耀州区", 
        "level": 3
    }, 
    {
        "code": "610222", 
        "sheng": "61", 
        "di": "02", 
        "xian": "22", 
        "name": "宜君县", 
        "level": 3
    }, 
    {
        "code": "610300", 
        "sheng": "61", 
        "di": "03", 
        "xian": "00", 
        "name": "宝鸡市", 
        "level": 2
    }, 
    {
        "code": "610302", 
        "sheng": "61", 
        "di": "03", 
        "xian": "02", 
        "name": "渭滨区", 
        "level": 3
    }, 
    {
        "code": "610303", 
        "sheng": "61", 
        "di": "03", 
        "xian": "03", 
        "name": "金台区", 
        "level": 3
    }, 
    {
        "code": "610304", 
        "sheng": "61", 
        "di": "03", 
        "xian": "04", 
        "name": "陈仓区", 
        "level": 3
    }, 
    {
        "code": "610322", 
        "sheng": "61", 
        "di": "03", 
        "xian": "22", 
        "name": "凤翔县", 
        "level": 3
    }, 
    {
        "code": "610323", 
        "sheng": "61", 
        "di": "03", 
        "xian": "23", 
        "name": "岐山县", 
        "level": 3
    }, 
    {
        "code": "610324", 
        "sheng": "61", 
        "di": "03", 
        "xian": "24", 
        "name": "扶风县", 
        "level": 3
    }, 
    {
        "code": "610326", 
        "sheng": "61", 
        "di": "03", 
        "xian": "26", 
        "name": "眉县", 
        "level": 3
    }, 
    {
        "code": "610327", 
        "sheng": "61", 
        "di": "03", 
        "xian": "27", 
        "name": "陇县", 
        "level": 3
    }, 
    {
        "code": "610328", 
        "sheng": "61", 
        "di": "03", 
        "xian": "28", 
        "name": "千阳县", 
        "level": 3
    }, 
    {
        "code": "610329", 
        "sheng": "61", 
        "di": "03", 
        "xian": "29", 
        "name": "麟游县", 
        "level": 3
    }, 
    {
        "code": "610330", 
        "sheng": "61", 
        "di": "03", 
        "xian": "30", 
        "name": "凤县", 
        "level": 3
    }, 
    {
        "code": "610331", 
        "sheng": "61", 
        "di": "03", 
        "xian": "31", 
        "name": "太白县", 
        "level": 3
    }, 
    {
        "code": "610332", 
        "sheng": "61", 
        "di": "03", 
        "xian": "32", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "610400", 
        "sheng": "61", 
        "di": "04", 
        "xian": "00", 
        "name": "咸阳市", 
        "level": 2
    }, 
    {
        "code": "610402", 
        "sheng": "61", 
        "di": "04", 
        "xian": "02", 
        "name": "秦都区", 
        "level": 3
    }, 
    {
        "code": "610403", 
        "sheng": "61", 
        "di": "04", 
        "xian": "03", 
        "name": "杨陵区", 
        "level": 3
    }, 
    {
        "code": "610404", 
        "sheng": "61", 
        "di": "04", 
        "xian": "04", 
        "name": "渭城区", 
        "level": 3
    }, 
    {
        "code": "610422", 
        "sheng": "61", 
        "di": "04", 
        "xian": "22", 
        "name": "三原县", 
        "level": 3
    }, 
    {
        "code": "610423", 
        "sheng": "61", 
        "di": "04", 
        "xian": "23", 
        "name": "泾阳县", 
        "level": 3
    }, 
    {
        "code": "610424", 
        "sheng": "61", 
        "di": "04", 
        "xian": "24", 
        "name": "乾县", 
        "level": 3
    }, 
    {
        "code": "610425", 
        "sheng": "61", 
        "di": "04", 
        "xian": "25", 
        "name": "礼泉县", 
        "level": 3
    }, 
    {
        "code": "610426", 
        "sheng": "61", 
        "di": "04", 
        "xian": "26", 
        "name": "永寿县", 
        "level": 3
    }, 
    {
        "code": "610427", 
        "sheng": "61", 
        "di": "04", 
        "xian": "27", 
        "name": "彬县", 
        "level": 3
    }, 
    {
        "code": "610428", 
        "sheng": "61", 
        "di": "04", 
        "xian": "28", 
        "name": "长武县", 
        "level": 3
    }, 
    {
        "code": "610429", 
        "sheng": "61", 
        "di": "04", 
        "xian": "29", 
        "name": "旬邑县", 
        "level": 3
    }, 
    {
        "code": "610430", 
        "sheng": "61", 
        "di": "04", 
        "xian": "30", 
        "name": "淳化县", 
        "level": 3
    }, 
    {
        "code": "610431", 
        "sheng": "61", 
        "di": "04", 
        "xian": "31", 
        "name": "武功县", 
        "level": 3
    }, 
    {
        "code": "610481", 
        "sheng": "61", 
        "di": "04", 
        "xian": "81", 
        "name": "兴平市", 
        "level": 3
    }, 
    {
        "code": "610482", 
        "sheng": "61", 
        "di": "04", 
        "xian": "82", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "610500", 
        "sheng": "61", 
        "di": "05", 
        "xian": "00", 
        "name": "渭南市", 
        "level": 2
    }, 
    {
        "code": "610502", 
        "sheng": "61", 
        "di": "05", 
        "xian": "02", 
        "name": "临渭区", 
        "level": 3
    }, 
    {
        "code": "610503", 
        "sheng": "61", 
        "di": "05", 
        "xian": "03", 
        "name": "华州区", 
        "level": 3
    }, 
    {
        "code": "610522", 
        "sheng": "61", 
        "di": "05", 
        "xian": "22", 
        "name": "潼关县", 
        "level": 3
    }, 
    {
        "code": "610523", 
        "sheng": "61", 
        "di": "05", 
        "xian": "23", 
        "name": "大荔县", 
        "level": 3
    }, 
    {
        "code": "610524", 
        "sheng": "61", 
        "di": "05", 
        "xian": "24", 
        "name": "合阳县", 
        "level": 3
    }, 
    {
        "code": "610525", 
        "sheng": "61", 
        "di": "05", 
        "xian": "25", 
        "name": "澄城县", 
        "level": 3
    }, 
    {
        "code": "610526", 
        "sheng": "61", 
        "di": "05", 
        "xian": "26", 
        "name": "蒲城县", 
        "level": 3
    }, 
    {
        "code": "610527", 
        "sheng": "61", 
        "di": "05", 
        "xian": "27", 
        "name": "白水县", 
        "level": 3
    }, 
    {
        "code": "610528", 
        "sheng": "61", 
        "di": "05", 
        "xian": "28", 
        "name": "富平县", 
        "level": 3
    }, 
    {
        "code": "610581", 
        "sheng": "61", 
        "di": "05", 
        "xian": "81", 
        "name": "韩城市", 
        "level": 3
    }, 
    {
        "code": "610582", 
        "sheng": "61", 
        "di": "05", 
        "xian": "82", 
        "name": "华阴市", 
        "level": 3
    }, 
    {
        "code": "610600", 
        "sheng": "61", 
        "di": "06", 
        "xian": "00", 
        "name": "延安市", 
        "level": 2
    }, 
    {
        "code": "610602", 
        "sheng": "61", 
        "di": "06", 
        "xian": "02", 
        "name": "宝塔区", 
        "level": 3
    }, 
    {
        "code": "610621", 
        "sheng": "61", 
        "di": "06", 
        "xian": "21", 
        "name": "延长县", 
        "level": 3
    }, 
    {
        "code": "610622", 
        "sheng": "61", 
        "di": "06", 
        "xian": "22", 
        "name": "延川县", 
        "level": 3
    }, 
    {
        "code": "610623", 
        "sheng": "61", 
        "di": "06", 
        "xian": "23", 
        "name": "子长县", 
        "level": 3
    }, 
    {
        "code": "610624", 
        "sheng": "61", 
        "di": "06", 
        "xian": "24", 
        "name": "安塞区", 
        "level": 3
    }, 
    {
        "code": "610625", 
        "sheng": "61", 
        "di": "06", 
        "xian": "25", 
        "name": "志丹县", 
        "level": 3
    }, 
    {
        "code": "610626", 
        "sheng": "61", 
        "di": "06", 
        "xian": "26", 
        "name": "吴起县", 
        "level": 3
    }, 
    {
        "code": "610627", 
        "sheng": "61", 
        "di": "06", 
        "xian": "27", 
        "name": "甘泉县", 
        "level": 3
    }, 
    {
        "code": "610628", 
        "sheng": "61", 
        "di": "06", 
        "xian": "28", 
        "name": "富县", 
        "level": 3
    }, 
    {
        "code": "610629", 
        "sheng": "61", 
        "di": "06", 
        "xian": "29", 
        "name": "洛川县", 
        "level": 3
    }, 
    {
        "code": "610630", 
        "sheng": "61", 
        "di": "06", 
        "xian": "30", 
        "name": "宜川县", 
        "level": 3
    }, 
    {
        "code": "610631", 
        "sheng": "61", 
        "di": "06", 
        "xian": "31", 
        "name": "黄龙县", 
        "level": 3
    }, 
    {
        "code": "610632", 
        "sheng": "61", 
        "di": "06", 
        "xian": "32", 
        "name": "黄陵县", 
        "level": 3
    }, 
    {
        "code": "610700", 
        "sheng": "61", 
        "di": "07", 
        "xian": "00", 
        "name": "汉中市", 
        "level": 2
    }, 
    {
        "code": "610702", 
        "sheng": "61", 
        "di": "07", 
        "xian": "02", 
        "name": "汉台区", 
        "level": 3
    }, 
    {
        "code": "610721", 
        "sheng": "61", 
        "di": "07", 
        "xian": "21", 
        "name": "南郑县", 
        "level": 3
    }, 
    {
        "code": "610722", 
        "sheng": "61", 
        "di": "07", 
        "xian": "22", 
        "name": "城固县", 
        "level": 3
    }, 
    {
        "code": "610723", 
        "sheng": "61", 
        "di": "07", 
        "xian": "23", 
        "name": "洋县", 
        "level": 3
    }, 
    {
        "code": "610724", 
        "sheng": "61", 
        "di": "07", 
        "xian": "24", 
        "name": "西乡县", 
        "level": 3
    }, 
    {
        "code": "610725", 
        "sheng": "61", 
        "di": "07", 
        "xian": "25", 
        "name": "勉县", 
        "level": 3
    }, 
    {
        "code": "610726", 
        "sheng": "61", 
        "di": "07", 
        "xian": "26", 
        "name": "宁强县", 
        "level": 3
    }, 
    {
        "code": "610727", 
        "sheng": "61", 
        "di": "07", 
        "xian": "27", 
        "name": "略阳县", 
        "level": 3
    }, 
    {
        "code": "610728", 
        "sheng": "61", 
        "di": "07", 
        "xian": "28", 
        "name": "镇巴县", 
        "level": 3
    }, 
    {
        "code": "610729", 
        "sheng": "61", 
        "di": "07", 
        "xian": "29", 
        "name": "留坝县", 
        "level": 3
    }, 
    {
        "code": "610730", 
        "sheng": "61", 
        "di": "07", 
        "xian": "30", 
        "name": "佛坪县", 
        "level": 3
    }, 
    {
        "code": "610800", 
        "sheng": "61", 
        "di": "08", 
        "xian": "00", 
        "name": "榆林市", 
        "level": 2
    }, 
    {
        "code": "610802", 
        "sheng": "61", 
        "di": "08", 
        "xian": "02", 
        "name": "榆阳区", 
        "level": 3
    }, 
    {
        "code": "610803", 
        "sheng": "61", 
        "di": "08", 
        "xian": "03", 
        "name": "横山区", 
        "level": 3
    }, 
    {
        "code": "610821", 
        "sheng": "61", 
        "di": "08", 
        "xian": "21", 
        "name": "神木县", 
        "level": 3
    }, 
    {
        "code": "610822", 
        "sheng": "61", 
        "di": "08", 
        "xian": "22", 
        "name": "府谷县", 
        "level": 3
    }, 
    {
        "code": "610824", 
        "sheng": "61", 
        "di": "08", 
        "xian": "24", 
        "name": "靖边县", 
        "level": 3
    }, 
    {
        "code": "610825", 
        "sheng": "61", 
        "di": "08", 
        "xian": "25", 
        "name": "定边县", 
        "level": 3
    }, 
    {
        "code": "610826", 
        "sheng": "61", 
        "di": "08", 
        "xian": "26", 
        "name": "绥德县", 
        "level": 3
    }, 
    {
        "code": "610827", 
        "sheng": "61", 
        "di": "08", 
        "xian": "27", 
        "name": "米脂县", 
        "level": 3
    }, 
    {
        "code": "610828", 
        "sheng": "61", 
        "di": "08", 
        "xian": "28", 
        "name": "佳县", 
        "level": 3
    }, 
    {
        "code": "610829", 
        "sheng": "61", 
        "di": "08", 
        "xian": "29", 
        "name": "吴堡县", 
        "level": 3
    }, 
    {
        "code": "610830", 
        "sheng": "61", 
        "di": "08", 
        "xian": "30", 
        "name": "清涧县", 
        "level": 3
    }, 
    {
        "code": "610831", 
        "sheng": "61", 
        "di": "08", 
        "xian": "31", 
        "name": "子洲县", 
        "level": 3
    }, 
    {
        "code": "610900", 
        "sheng": "61", 
        "di": "09", 
        "xian": "00", 
        "name": "安康市", 
        "level": 2
    }, 
    {
        "code": "610902", 
        "sheng": "61", 
        "di": "09", 
        "xian": "02", 
        "name": "汉滨区", 
        "level": 3
    }, 
    {
        "code": "610921", 
        "sheng": "61", 
        "di": "09", 
        "xian": "21", 
        "name": "汉阴县", 
        "level": 3
    }, 
    {
        "code": "610922", 
        "sheng": "61", 
        "di": "09", 
        "xian": "22", 
        "name": "石泉县", 
        "level": 3
    }, 
    {
        "code": "610923", 
        "sheng": "61", 
        "di": "09", 
        "xian": "23", 
        "name": "宁陕县", 
        "level": 3
    }, 
    {
        "code": "610924", 
        "sheng": "61", 
        "di": "09", 
        "xian": "24", 
        "name": "紫阳县", 
        "level": 3
    }, 
    {
        "code": "610925", 
        "sheng": "61", 
        "di": "09", 
        "xian": "25", 
        "name": "岚皋县", 
        "level": 3
    }, 
    {
        "code": "610926", 
        "sheng": "61", 
        "di": "09", 
        "xian": "26", 
        "name": "平利县", 
        "level": 3
    }, 
    {
        "code": "610927", 
        "sheng": "61", 
        "di": "09", 
        "xian": "27", 
        "name": "镇坪县", 
        "level": 3
    }, 
    {
        "code": "610928", 
        "sheng": "61", 
        "di": "09", 
        "xian": "28", 
        "name": "旬阳县", 
        "level": 3
    }, 
    {
        "code": "610929", 
        "sheng": "61", 
        "di": "09", 
        "xian": "29", 
        "name": "白河县", 
        "level": 3
    }, 
    {
        "code": "611000", 
        "sheng": "61", 
        "di": "10", 
        "xian": "00", 
        "name": "商洛市", 
        "level": 2
    }, 
    {
        "code": "611002", 
        "sheng": "61", 
        "di": "10", 
        "xian": "02", 
        "name": "商州区", 
        "level": 3
    }, 
    {
        "code": "611021", 
        "sheng": "61", 
        "di": "10", 
        "xian": "21", 
        "name": "洛南县", 
        "level": 3
    }, 
    {
        "code": "611022", 
        "sheng": "61", 
        "di": "10", 
        "xian": "22", 
        "name": "丹凤县", 
        "level": 3
    }, 
    {
        "code": "611023", 
        "sheng": "61", 
        "di": "10", 
        "xian": "23", 
        "name": "商南县", 
        "level": 3
    }, 
    {
        "code": "611024", 
        "sheng": "61", 
        "di": "10", 
        "xian": "24", 
        "name": "山阳县", 
        "level": 3
    }, 
    {
        "code": "611025", 
        "sheng": "61", 
        "di": "10", 
        "xian": "25", 
        "name": "镇安县", 
        "level": 3
    }, 
    {
        "code": "611026", 
        "sheng": "61", 
        "di": "10", 
        "xian": "26", 
        "name": "柞水县", 
        "level": 3
    }, 
    {
        "code": "611100", 
        "sheng": "61", 
        "di": "11", 
        "xian": "00", 
        "name": "西咸新区", 
        "level": 2
    }, 
    {
        "code": "611101", 
        "sheng": "61", 
        "di": "11", 
        "xian": "01", 
        "name": "空港新城", 
        "level": 3
    }, 
    {
        "code": "611102", 
        "sheng": "61", 
        "di": "11", 
        "xian": "02", 
        "name": "沣东新城", 
        "level": 3
    }, 
    {
        "code": "611103", 
        "sheng": "61", 
        "di": "11", 
        "xian": "03", 
        "name": "秦汉新城", 
        "level": 3
    }, 
    {
        "code": "611104", 
        "sheng": "61", 
        "di": "11", 
        "xian": "04", 
        "name": "沣西新城", 
        "level": 3
    }, 
    {
        "code": "611105", 
        "sheng": "61", 
        "di": "11", 
        "xian": "05", 
        "name": "泾河新城", 
        "level": 3
    }, 
    {
        "code": "620000", 
        "sheng": "62", 
        "di": "00", 
        "xian": "00", 
        "name": "甘肃省", 
        "level": 1
    }, 
    {
        "code": "620100", 
        "sheng": "62", 
        "di": "01", 
        "xian": "00", 
        "name": "兰州市", 
        "level": 2
    }, 
    {
        "code": "620102", 
        "sheng": "62", 
        "di": "01", 
        "xian": "02", 
        "name": "城关区", 
        "level": 3
    }, 
    {
        "code": "620103", 
        "sheng": "62", 
        "di": "01", 
        "xian": "03", 
        "name": "七里河区", 
        "level": 3
    }, 
    {
        "code": "620104", 
        "sheng": "62", 
        "di": "01", 
        "xian": "04", 
        "name": "西固区", 
        "level": 3
    }, 
    {
        "code": "620105", 
        "sheng": "62", 
        "di": "01", 
        "xian": "05", 
        "name": "安宁区", 
        "level": 3
    }, 
    {
        "code": "620111", 
        "sheng": "62", 
        "di": "01", 
        "xian": "11", 
        "name": "红古区", 
        "level": 3
    }, 
    {
        "code": "620121", 
        "sheng": "62", 
        "di": "01", 
        "xian": "21", 
        "name": "永登县", 
        "level": 3
    }, 
    {
        "code": "620122", 
        "sheng": "62", 
        "di": "01", 
        "xian": "22", 
        "name": "皋兰县", 
        "level": 3
    }, 
    {
        "code": "620123", 
        "sheng": "62", 
        "di": "01", 
        "xian": "23", 
        "name": "榆中县", 
        "level": 3
    }, 
    {
        "code": "620124", 
        "sheng": "62", 
        "di": "01", 
        "xian": "24", 
        "name": "兰州新区", 
        "level": 3
    }, 
    {
        "code": "620125", 
        "sheng": "62", 
        "di": "01", 
        "xian": "25", 
        "name": "高新区", 
        "level": 3
    }, 
    {
        "code": "620126", 
        "sheng": "62", 
        "di": "01", 
        "xian": "26", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "620200", 
        "sheng": "62", 
        "di": "02", 
        "xian": "00", 
        "name": "嘉峪关市", 
        "level": 2
    }, 
    {
        "code": "620201", 
        "sheng": "62", 
        "di": "02", 
        "xian": "01", 
        "name": "雄关区", 
        "level": 3
    }, 
    {
        "code": "620202", 
        "sheng": "62", 
        "di": "02", 
        "xian": "02", 
        "name": "长城区", 
        "level": 3
    }, 
    {
        "code": "620203", 
        "sheng": "62", 
        "di": "02", 
        "xian": "03", 
        "name": "镜铁区", 
        "level": 3
    }, 
    {
        "code": "620300", 
        "sheng": "62", 
        "di": "03", 
        "xian": "00", 
        "name": "金昌市", 
        "level": 2
    }, 
    {
        "code": "620302", 
        "sheng": "62", 
        "di": "03", 
        "xian": "02", 
        "name": "金川区", 
        "level": 3
    }, 
    {
        "code": "620321", 
        "sheng": "62", 
        "di": "03", 
        "xian": "21", 
        "name": "永昌县", 
        "level": 3
    }, 
    {
        "code": "620400", 
        "sheng": "62", 
        "di": "04", 
        "xian": "00", 
        "name": "白银市", 
        "level": 2
    }, 
    {
        "code": "620402", 
        "sheng": "62", 
        "di": "04", 
        "xian": "02", 
        "name": "白银区", 
        "level": 3
    }, 
    {
        "code": "620403", 
        "sheng": "62", 
        "di": "04", 
        "xian": "03", 
        "name": "平川区", 
        "level": 3
    }, 
    {
        "code": "620421", 
        "sheng": "62", 
        "di": "04", 
        "xian": "21", 
        "name": "靖远县", 
        "level": 3
    }, 
    {
        "code": "620422", 
        "sheng": "62", 
        "di": "04", 
        "xian": "22", 
        "name": "会宁县", 
        "level": 3
    }, 
    {
        "code": "620423", 
        "sheng": "62", 
        "di": "04", 
        "xian": "23", 
        "name": "景泰县", 
        "level": 3
    }, 
    {
        "code": "620500", 
        "sheng": "62", 
        "di": "05", 
        "xian": "00", 
        "name": "天水市", 
        "level": 2
    }, 
    {
        "code": "620502", 
        "sheng": "62", 
        "di": "05", 
        "xian": "02", 
        "name": "秦州区", 
        "level": 3
    }, 
    {
        "code": "620503", 
        "sheng": "62", 
        "di": "05", 
        "xian": "03", 
        "name": "麦积区", 
        "level": 3
    }, 
    {
        "code": "620521", 
        "sheng": "62", 
        "di": "05", 
        "xian": "21", 
        "name": "清水县", 
        "level": 3
    }, 
    {
        "code": "620522", 
        "sheng": "62", 
        "di": "05", 
        "xian": "22", 
        "name": "秦安县", 
        "level": 3
    }, 
    {
        "code": "620523", 
        "sheng": "62", 
        "di": "05", 
        "xian": "23", 
        "name": "甘谷县", 
        "level": 3
    }, 
    {
        "code": "620524", 
        "sheng": "62", 
        "di": "05", 
        "xian": "24", 
        "name": "武山县", 
        "level": 3
    }, 
    {
        "code": "620525", 
        "sheng": "62", 
        "di": "05", 
        "xian": "25", 
        "name": "张家川回族自治县", 
        "level": 3
    }, 
    {
        "code": "620600", 
        "sheng": "62", 
        "di": "06", 
        "xian": "00", 
        "name": "武威市", 
        "level": 2
    }, 
    {
        "code": "620602", 
        "sheng": "62", 
        "di": "06", 
        "xian": "02", 
        "name": "凉州区", 
        "level": 3
    }, 
    {
        "code": "620621", 
        "sheng": "62", 
        "di": "06", 
        "xian": "21", 
        "name": "民勤县", 
        "level": 3
    }, 
    {
        "code": "620622", 
        "sheng": "62", 
        "di": "06", 
        "xian": "22", 
        "name": "古浪县", 
        "level": 3
    }, 
    {
        "code": "620623", 
        "sheng": "62", 
        "di": "06", 
        "xian": "23", 
        "name": "天祝藏族自治县", 
        "level": 3
    }, 
    {
        "code": "620700", 
        "sheng": "62", 
        "di": "07", 
        "xian": "00", 
        "name": "张掖市", 
        "level": 2
    }, 
    {
        "code": "620702", 
        "sheng": "62", 
        "di": "07", 
        "xian": "02", 
        "name": "甘州区", 
        "level": 3
    }, 
    {
        "code": "620721", 
        "sheng": "62", 
        "di": "07", 
        "xian": "21", 
        "name": "肃南裕固族自治县", 
        "level": 3
    }, 
    {
        "code": "620722", 
        "sheng": "62", 
        "di": "07", 
        "xian": "22", 
        "name": "民乐县", 
        "level": 3
    }, 
    {
        "code": "620723", 
        "sheng": "62", 
        "di": "07", 
        "xian": "23", 
        "name": "临泽县", 
        "level": 3
    }, 
    {
        "code": "620724", 
        "sheng": "62", 
        "di": "07", 
        "xian": "24", 
        "name": "高台县", 
        "level": 3
    }, 
    {
        "code": "620725", 
        "sheng": "62", 
        "di": "07", 
        "xian": "25", 
        "name": "山丹县", 
        "level": 3
    }, 
    {
        "code": "620800", 
        "sheng": "62", 
        "di": "08", 
        "xian": "00", 
        "name": "平凉市", 
        "level": 2
    }, 
    {
        "code": "620802", 
        "sheng": "62", 
        "di": "08", 
        "xian": "02", 
        "name": "崆峒区", 
        "level": 3
    }, 
    {
        "code": "620821", 
        "sheng": "62", 
        "di": "08", 
        "xian": "21", 
        "name": "泾川县", 
        "level": 3
    }, 
    {
        "code": "620822", 
        "sheng": "62", 
        "di": "08", 
        "xian": "22", 
        "name": "灵台县", 
        "level": 3
    }, 
    {
        "code": "620823", 
        "sheng": "62", 
        "di": "08", 
        "xian": "23", 
        "name": "崇信县", 
        "level": 3
    }, 
    {
        "code": "620824", 
        "sheng": "62", 
        "di": "08", 
        "xian": "24", 
        "name": "华亭县", 
        "level": 3
    }, 
    {
        "code": "620825", 
        "sheng": "62", 
        "di": "08", 
        "xian": "25", 
        "name": "庄浪县", 
        "level": 3
    }, 
    {
        "code": "620826", 
        "sheng": "62", 
        "di": "08", 
        "xian": "26", 
        "name": "静宁县", 
        "level": 3
    }, 
    {
        "code": "620900", 
        "sheng": "62", 
        "di": "09", 
        "xian": "00", 
        "name": "酒泉市", 
        "level": 2
    }, 
    {
        "code": "620902", 
        "sheng": "62", 
        "di": "09", 
        "xian": "02", 
        "name": "肃州区", 
        "level": 3
    }, 
    {
        "code": "620921", 
        "sheng": "62", 
        "di": "09", 
        "xian": "21", 
        "name": "金塔县", 
        "level": 3
    }, 
    {
        "code": "620922", 
        "sheng": "62", 
        "di": "09", 
        "xian": "22", 
        "name": "瓜州县", 
        "level": 3
    }, 
    {
        "code": "620923", 
        "sheng": "62", 
        "di": "09", 
        "xian": "23", 
        "name": "肃北蒙古族自治县", 
        "level": 3
    }, 
    {
        "code": "620924", 
        "sheng": "62", 
        "di": "09", 
        "xian": "24", 
        "name": "阿克塞哈萨克族自治县", 
        "level": 3
    }, 
    {
        "code": "620981", 
        "sheng": "62", 
        "di": "09", 
        "xian": "81", 
        "name": "玉门市", 
        "level": 3
    }, 
    {
        "code": "620982", 
        "sheng": "62", 
        "di": "09", 
        "xian": "82", 
        "name": "敦煌市", 
        "level": 3
    }, 
    {
        "code": "621000", 
        "sheng": "62", 
        "di": "10", 
        "xian": "00", 
        "name": "庆阳市", 
        "level": 2
    }, 
    {
        "code": "621002", 
        "sheng": "62", 
        "di": "10", 
        "xian": "02", 
        "name": "西峰区", 
        "level": 3
    }, 
    {
        "code": "621021", 
        "sheng": "62", 
        "di": "10", 
        "xian": "21", 
        "name": "庆城县", 
        "level": 3
    }, 
    {
        "code": "621022", 
        "sheng": "62", 
        "di": "10", 
        "xian": "22", 
        "name": "环县", 
        "level": 3
    }, 
    {
        "code": "621023", 
        "sheng": "62", 
        "di": "10", 
        "xian": "23", 
        "name": "华池县", 
        "level": 3
    }, 
    {
        "code": "621024", 
        "sheng": "62", 
        "di": "10", 
        "xian": "24", 
        "name": "合水县", 
        "level": 3
    }, 
    {
        "code": "621025", 
        "sheng": "62", 
        "di": "10", 
        "xian": "25", 
        "name": "正宁县", 
        "level": 3
    }, 
    {
        "code": "621026", 
        "sheng": "62", 
        "di": "10", 
        "xian": "26", 
        "name": "宁县", 
        "level": 3
    }, 
    {
        "code": "621027", 
        "sheng": "62", 
        "di": "10", 
        "xian": "27", 
        "name": "镇原县", 
        "level": 3
    }, 
    {
        "code": "621100", 
        "sheng": "62", 
        "di": "11", 
        "xian": "00", 
        "name": "定西市", 
        "level": 2
    }, 
    {
        "code": "621102", 
        "sheng": "62", 
        "di": "11", 
        "xian": "02", 
        "name": "安定区", 
        "level": 3
    }, 
    {
        "code": "621121", 
        "sheng": "62", 
        "di": "11", 
        "xian": "21", 
        "name": "通渭县", 
        "level": 3
    }, 
    {
        "code": "621122", 
        "sheng": "62", 
        "di": "11", 
        "xian": "22", 
        "name": "陇西县", 
        "level": 3
    }, 
    {
        "code": "621123", 
        "sheng": "62", 
        "di": "11", 
        "xian": "23", 
        "name": "渭源县", 
        "level": 3
    }, 
    {
        "code": "621124", 
        "sheng": "62", 
        "di": "11", 
        "xian": "24", 
        "name": "临洮县", 
        "level": 3
    }, 
    {
        "code": "621125", 
        "sheng": "62", 
        "di": "11", 
        "xian": "25", 
        "name": "漳县", 
        "level": 3
    }, 
    {
        "code": "621126", 
        "sheng": "62", 
        "di": "11", 
        "xian": "26", 
        "name": "岷县", 
        "level": 3
    }, 
    {
        "code": "621200", 
        "sheng": "62", 
        "di": "12", 
        "xian": "00", 
        "name": "陇南市", 
        "level": 2
    }, 
    {
        "code": "621202", 
        "sheng": "62", 
        "di": "12", 
        "xian": "02", 
        "name": "武都区", 
        "level": 3
    }, 
    {
        "code": "621221", 
        "sheng": "62", 
        "di": "12", 
        "xian": "21", 
        "name": "成县", 
        "level": 3
    }, 
    {
        "code": "621222", 
        "sheng": "62", 
        "di": "12", 
        "xian": "22", 
        "name": "文县", 
        "level": 3
    }, 
    {
        "code": "621223", 
        "sheng": "62", 
        "di": "12", 
        "xian": "23", 
        "name": "宕昌县", 
        "level": 3
    }, 
    {
        "code": "621224", 
        "sheng": "62", 
        "di": "12", 
        "xian": "24", 
        "name": "康县", 
        "level": 3
    }, 
    {
        "code": "621225", 
        "sheng": "62", 
        "di": "12", 
        "xian": "25", 
        "name": "西和县", 
        "level": 3
    }, 
    {
        "code": "621226", 
        "sheng": "62", 
        "di": "12", 
        "xian": "26", 
        "name": "礼县", 
        "level": 3
    }, 
    {
        "code": "621227", 
        "sheng": "62", 
        "di": "12", 
        "xian": "27", 
        "name": "徽县", 
        "level": 3
    }, 
    {
        "code": "621228", 
        "sheng": "62", 
        "di": "12", 
        "xian": "28", 
        "name": "两当县", 
        "level": 3
    }, 
    {
        "code": "622900", 
        "sheng": "62", 
        "di": "29", 
        "xian": "00", 
        "name": "临夏回族自治州", 
        "level": 2
    }, 
    {
        "code": "622901", 
        "sheng": "62", 
        "di": "29", 
        "xian": "01", 
        "name": "临夏市", 
        "level": 3
    }, 
    {
        "code": "622921", 
        "sheng": "62", 
        "di": "29", 
        "xian": "21", 
        "name": "临夏县", 
        "level": 3
    }, 
    {
        "code": "622922", 
        "sheng": "62", 
        "di": "29", 
        "xian": "22", 
        "name": "康乐县", 
        "level": 3
    }, 
    {
        "code": "622923", 
        "sheng": "62", 
        "di": "29", 
        "xian": "23", 
        "name": "永靖县", 
        "level": 3
    }, 
    {
        "code": "622924", 
        "sheng": "62", 
        "di": "29", 
        "xian": "24", 
        "name": "广河县", 
        "level": 3
    }, 
    {
        "code": "622925", 
        "sheng": "62", 
        "di": "29", 
        "xian": "25", 
        "name": "和政县", 
        "level": 3
    }, 
    {
        "code": "622926", 
        "sheng": "62", 
        "di": "29", 
        "xian": "26", 
        "name": "东乡族自治县", 
        "level": 3
    }, 
    {
        "code": "622927", 
        "sheng": "62", 
        "di": "29", 
        "xian": "27", 
        "name": "积石山保安族东乡族撒拉族自治县", 
        "level": 3
    }, 
    {
        "code": "623000", 
        "sheng": "62", 
        "di": "30", 
        "xian": "00", 
        "name": "甘南藏族自治州", 
        "level": 2
    }, 
    {
        "code": "623001", 
        "sheng": "62", 
        "di": "30", 
        "xian": "01", 
        "name": "合作市", 
        "level": 3
    }, 
    {
        "code": "623021", 
        "sheng": "62", 
        "di": "30", 
        "xian": "21", 
        "name": "临潭县", 
        "level": 3
    }, 
    {
        "code": "623022", 
        "sheng": "62", 
        "di": "30", 
        "xian": "22", 
        "name": "卓尼县", 
        "level": 3
    }, 
    {
        "code": "623023", 
        "sheng": "62", 
        "di": "30", 
        "xian": "23", 
        "name": "舟曲县", 
        "level": 3
    }, 
    {
        "code": "623024", 
        "sheng": "62", 
        "di": "30", 
        "xian": "24", 
        "name": "迭部县", 
        "level": 3
    }, 
    {
        "code": "623025", 
        "sheng": "62", 
        "di": "30", 
        "xian": "25", 
        "name": "玛曲县", 
        "level": 3
    }, 
    {
        "code": "623026", 
        "sheng": "62", 
        "di": "30", 
        "xian": "26", 
        "name": "碌曲县", 
        "level": 3
    }, 
    {
        "code": "623027", 
        "sheng": "62", 
        "di": "30", 
        "xian": "27", 
        "name": "夏河县", 
        "level": 3
    }, 
    {
        "code": "630000", 
        "sheng": "63", 
        "di": "00", 
        "xian": "00", 
        "name": "青海省", 
        "level": 1
    }, 
    {
        "code": "630100", 
        "sheng": "63", 
        "di": "01", 
        "xian": "00", 
        "name": "西宁市", 
        "level": 2
    }, 
    {
        "code": "630102", 
        "sheng": "63", 
        "di": "01", 
        "xian": "02", 
        "name": "城东区", 
        "level": 3
    }, 
    {
        "code": "630103", 
        "sheng": "63", 
        "di": "01", 
        "xian": "03", 
        "name": "城中区", 
        "level": 3
    }, 
    {
        "code": "630104", 
        "sheng": "63", 
        "di": "01", 
        "xian": "04", 
        "name": "城西区", 
        "level": 3
    }, 
    {
        "code": "630105", 
        "sheng": "63", 
        "di": "01", 
        "xian": "05", 
        "name": "城北区", 
        "level": 3
    }, 
    {
        "code": "630121", 
        "sheng": "63", 
        "di": "01", 
        "xian": "21", 
        "name": "大通回族土族自治县", 
        "level": 3
    }, 
    {
        "code": "630122", 
        "sheng": "63", 
        "di": "01", 
        "xian": "22", 
        "name": "湟中县", 
        "level": 3
    }, 
    {
        "code": "630123", 
        "sheng": "63", 
        "di": "01", 
        "xian": "23", 
        "name": "湟源县", 
        "level": 3
    }, 
    {
        "code": "630200", 
        "sheng": "63", 
        "di": "02", 
        "xian": "00", 
        "name": "海东市", 
        "level": 2
    }, 
    {
        "code": "630202", 
        "sheng": "63", 
        "di": "02", 
        "xian": "02", 
        "name": "乐都区", 
        "level": 3
    }, 
    {
        "code": "630203", 
        "sheng": "63", 
        "di": "02", 
        "xian": "03", 
        "name": "平安区", 
        "level": 3
    }, 
    {
        "code": "630222", 
        "sheng": "63", 
        "di": "02", 
        "xian": "22", 
        "name": "民和回族土族自治县", 
        "level": 3
    }, 
    {
        "code": "630223", 
        "sheng": "63", 
        "di": "02", 
        "xian": "23", 
        "name": "互助土族自治县", 
        "level": 3
    }, 
    {
        "code": "630224", 
        "sheng": "63", 
        "di": "02", 
        "xian": "24", 
        "name": "化隆回族自治县", 
        "level": 3
    }, 
    {
        "code": "630225", 
        "sheng": "63", 
        "di": "02", 
        "xian": "25", 
        "name": "循化撒拉族自治县", 
        "level": 3
    }, 
    {
        "code": "632200", 
        "sheng": "63", 
        "di": "22", 
        "xian": "00", 
        "name": "海北藏族自治州", 
        "level": 2
    }, 
    {
        "code": "632221", 
        "sheng": "63", 
        "di": "22", 
        "xian": "21", 
        "name": "门源回族自治县", 
        "level": 3
    }, 
    {
        "code": "632222", 
        "sheng": "63", 
        "di": "22", 
        "xian": "22", 
        "name": "祁连县", 
        "level": 3
    }, 
    {
        "code": "632223", 
        "sheng": "63", 
        "di": "22", 
        "xian": "23", 
        "name": "海晏县", 
        "level": 3
    }, 
    {
        "code": "632224", 
        "sheng": "63", 
        "di": "22", 
        "xian": "24", 
        "name": "刚察县", 
        "level": 3
    }, 
    {
        "code": "632300", 
        "sheng": "63", 
        "di": "23", 
        "xian": "00", 
        "name": "黄南藏族自治州", 
        "level": 2
    }, 
    {
        "code": "632321", 
        "sheng": "63", 
        "di": "23", 
        "xian": "21", 
        "name": "同仁县", 
        "level": 3
    }, 
    {
        "code": "632322", 
        "sheng": "63", 
        "di": "23", 
        "xian": "22", 
        "name": "尖扎县", 
        "level": 3
    }, 
    {
        "code": "632323", 
        "sheng": "63", 
        "di": "23", 
        "xian": "23", 
        "name": "泽库县", 
        "level": 3
    }, 
    {
        "code": "632324", 
        "sheng": "63", 
        "di": "23", 
        "xian": "24", 
        "name": "河南蒙古族自治县", 
        "level": 3
    }, 
    {
        "code": "632500", 
        "sheng": "63", 
        "di": "25", 
        "xian": "00", 
        "name": "海南藏族自治州", 
        "level": 2
    }, 
    {
        "code": "632521", 
        "sheng": "63", 
        "di": "25", 
        "xian": "21", 
        "name": "共和县", 
        "level": 3
    }, 
    {
        "code": "632522", 
        "sheng": "63", 
        "di": "25", 
        "xian": "22", 
        "name": "同德县", 
        "level": 3
    }, 
    {
        "code": "632523", 
        "sheng": "63", 
        "di": "25", 
        "xian": "23", 
        "name": "贵德县", 
        "level": 3
    }, 
    {
        "code": "632524", 
        "sheng": "63", 
        "di": "25", 
        "xian": "24", 
        "name": "兴海县", 
        "level": 3
    }, 
    {
        "code": "632525", 
        "sheng": "63", 
        "di": "25", 
        "xian": "25", 
        "name": "贵南县", 
        "level": 3
    }, 
    {
        "code": "632600", 
        "sheng": "63", 
        "di": "26", 
        "xian": "00", 
        "name": "果洛藏族自治州", 
        "level": 2
    }, 
    {
        "code": "632621", 
        "sheng": "63", 
        "di": "26", 
        "xian": "21", 
        "name": "玛沁县", 
        "level": 3
    }, 
    {
        "code": "632622", 
        "sheng": "63", 
        "di": "26", 
        "xian": "22", 
        "name": "班玛县", 
        "level": 3
    }, 
    {
        "code": "632623", 
        "sheng": "63", 
        "di": "26", 
        "xian": "23", 
        "name": "甘德县", 
        "level": 3
    }, 
    {
        "code": "632624", 
        "sheng": "63", 
        "di": "26", 
        "xian": "24", 
        "name": "达日县", 
        "level": 3
    }, 
    {
        "code": "632625", 
        "sheng": "63", 
        "di": "26", 
        "xian": "25", 
        "name": "久治县", 
        "level": 3
    }, 
    {
        "code": "632626", 
        "sheng": "63", 
        "di": "26", 
        "xian": "26", 
        "name": "玛多县", 
        "level": 3
    }, 
    {
        "code": "632700", 
        "sheng": "63", 
        "di": "27", 
        "xian": "00", 
        "name": "玉树藏族自治州", 
        "level": 2
    }, 
    {
        "code": "632701", 
        "sheng": "63", 
        "di": "27", 
        "xian": "01", 
        "name": "玉树市", 
        "level": 3
    }, 
    {
        "code": "632722", 
        "sheng": "63", 
        "di": "27", 
        "xian": "22", 
        "name": "杂多县", 
        "level": 3
    }, 
    {
        "code": "632723", 
        "sheng": "63", 
        "di": "27", 
        "xian": "23", 
        "name": "称多县", 
        "level": 3
    }, 
    {
        "code": "632724", 
        "sheng": "63", 
        "di": "27", 
        "xian": "24", 
        "name": "治多县", 
        "level": 3
    }, 
    {
        "code": "632725", 
        "sheng": "63", 
        "di": "27", 
        "xian": "25", 
        "name": "囊谦县", 
        "level": 3
    }, 
    {
        "code": "632726", 
        "sheng": "63", 
        "di": "27", 
        "xian": "26", 
        "name": "曲麻莱县", 
        "level": 3
    }, 
    {
        "code": "632800", 
        "sheng": "63", 
        "di": "28", 
        "xian": "00", 
        "name": "海西蒙古族藏族自治州", 
        "level": 2
    }, 
    {
        "code": "632801", 
        "sheng": "63", 
        "di": "28", 
        "xian": "01", 
        "name": "格尔木市", 
        "level": 3
    }, 
    {
        "code": "632802", 
        "sheng": "63", 
        "di": "28", 
        "xian": "02", 
        "name": "德令哈市", 
        "level": 3
    }, 
    {
        "code": "632821", 
        "sheng": "63", 
        "di": "28", 
        "xian": "21", 
        "name": "乌兰县", 
        "level": 3
    }, 
    {
        "code": "632822", 
        "sheng": "63", 
        "di": "28", 
        "xian": "22", 
        "name": "都兰县", 
        "level": 3
    }, 
    {
        "code": "632823", 
        "sheng": "63", 
        "di": "28", 
        "xian": "23", 
        "name": "天峻县", 
        "level": 3
    }, 
    {
        "code": "640000", 
        "sheng": "64", 
        "di": "00", 
        "xian": "00", 
        "name": "宁夏回族自治区", 
        "level": 1
    }, 
    {
        "code": "640100", 
        "sheng": "64", 
        "di": "01", 
        "xian": "00", 
        "name": "银川市", 
        "level": 2
    }, 
    {
        "code": "640104", 
        "sheng": "64", 
        "di": "01", 
        "xian": "04", 
        "name": "兴庆区", 
        "level": 3
    }, 
    {
        "code": "640105", 
        "sheng": "64", 
        "di": "01", 
        "xian": "05", 
        "name": "西夏区", 
        "level": 3
    }, 
    {
        "code": "640106", 
        "sheng": "64", 
        "di": "01", 
        "xian": "06", 
        "name": "金凤区", 
        "level": 3
    }, 
    {
        "code": "640121", 
        "sheng": "64", 
        "di": "01", 
        "xian": "21", 
        "name": "永宁县", 
        "level": 3
    }, 
    {
        "code": "640122", 
        "sheng": "64", 
        "di": "01", 
        "xian": "22", 
        "name": "贺兰县", 
        "level": 3
    }, 
    {
        "code": "640181", 
        "sheng": "64", 
        "di": "01", 
        "xian": "81", 
        "name": "灵武市", 
        "level": 3
    }, 
    {
        "code": "640182", 
        "sheng": "64", 
        "di": "01", 
        "xian": "82", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "640200", 
        "sheng": "64", 
        "di": "02", 
        "xian": "00", 
        "name": "石嘴山市", 
        "level": 2
    }, 
    {
        "code": "640202", 
        "sheng": "64", 
        "di": "02", 
        "xian": "02", 
        "name": "大武口区", 
        "level": 3
    }, 
    {
        "code": "640205", 
        "sheng": "64", 
        "di": "02", 
        "xian": "05", 
        "name": "惠农区", 
        "level": 3
    }, 
    {
        "code": "640221", 
        "sheng": "64", 
        "di": "02", 
        "xian": "21", 
        "name": "平罗县", 
        "level": 3
    }, 
    {
        "code": "640222", 
        "sheng": "64", 
        "di": "02", 
        "xian": "22", 
        "name": "经济开发区", 
        "level": 3
    }, 
    {
        "code": "640300", 
        "sheng": "64", 
        "di": "03", 
        "xian": "00", 
        "name": "吴忠市", 
        "level": 2
    }, 
    {
        "code": "640302", 
        "sheng": "64", 
        "di": "03", 
        "xian": "02", 
        "name": "利通区", 
        "level": 3
    }, 
    {
        "code": "640303", 
        "sheng": "64", 
        "di": "03", 
        "xian": "03", 
        "name": "红寺堡区", 
        "level": 3
    }, 
    {
        "code": "640323", 
        "sheng": "64", 
        "di": "03", 
        "xian": "23", 
        "name": "盐池县", 
        "level": 3
    }, 
    {
        "code": "640324", 
        "sheng": "64", 
        "di": "03", 
        "xian": "24", 
        "name": "同心县", 
        "level": 3
    }, 
    {
        "code": "640381", 
        "sheng": "64", 
        "di": "03", 
        "xian": "81", 
        "name": "青铜峡市", 
        "level": 3
    }, 
    {
        "code": "640400", 
        "sheng": "64", 
        "di": "04", 
        "xian": "00", 
        "name": "固原市", 
        "level": 2
    }, 
    {
        "code": "640402", 
        "sheng": "64", 
        "di": "04", 
        "xian": "02", 
        "name": "原州区", 
        "level": 3
    }, 
    {
        "code": "640422", 
        "sheng": "64", 
        "di": "04", 
        "xian": "22", 
        "name": "西吉县", 
        "level": 3
    }, 
    {
        "code": "640423", 
        "sheng": "64", 
        "di": "04", 
        "xian": "23", 
        "name": "隆德县", 
        "level": 3
    }, 
    {
        "code": "640424", 
        "sheng": "64", 
        "di": "04", 
        "xian": "24", 
        "name": "泾源县", 
        "level": 3
    }, 
    {
        "code": "640425", 
        "sheng": "64", 
        "di": "04", 
        "xian": "25", 
        "name": "彭阳县", 
        "level": 3
    }, 
    {
        "code": "640500", 
        "sheng": "64", 
        "di": "05", 
        "xian": "00", 
        "name": "中卫市", 
        "level": 2
    }, 
    {
        "code": "640502", 
        "sheng": "64", 
        "di": "05", 
        "xian": "02", 
        "name": "沙坡头区", 
        "level": 3
    }, 
    {
        "code": "640521", 
        "sheng": "64", 
        "di": "05", 
        "xian": "21", 
        "name": "中宁县", 
        "level": 3
    }, 
    {
        "code": "640522", 
        "sheng": "64", 
        "di": "05", 
        "xian": "22", 
        "name": "海原县", 
        "level": 3
    }, 
    {
        "code": "650000", 
        "sheng": "65", 
        "di": "00", 
        "xian": "00", 
        "name": "新疆维吾尔自治区", 
        "level": 1
    }, 
    {
        "code": "650100", 
        "sheng": "65", 
        "di": "01", 
        "xian": "00", 
        "name": "乌鲁木齐市", 
        "level": 2
    }, 
    {
        "code": "650102", 
        "sheng": "65", 
        "di": "01", 
        "xian": "02", 
        "name": "天山区", 
        "level": 3
    }, 
    {
        "code": "650103", 
        "sheng": "65", 
        "di": "01", 
        "xian": "03", 
        "name": "沙依巴克区", 
        "level": 3
    }, 
    {
        "code": "650104", 
        "sheng": "65", 
        "di": "01", 
        "xian": "04", 
        "name": "新市区", 
        "level": 3
    }, 
    {
        "code": "650105", 
        "sheng": "65", 
        "di": "01", 
        "xian": "05", 
        "name": "水磨沟区", 
        "level": 3
    }, 
    {
        "code": "650106", 
        "sheng": "65", 
        "di": "01", 
        "xian": "06", 
        "name": "头屯河区", 
        "level": 3
    }, 
    {
        "code": "650107", 
        "sheng": "65", 
        "di": "01", 
        "xian": "07", 
        "name": "达坂城区", 
        "level": 3
    }, 
    {
        "code": "650109", 
        "sheng": "65", 
        "di": "01", 
        "xian": "09", 
        "name": "米东区", 
        "level": 3
    }, 
    {
        "code": "650121", 
        "sheng": "65", 
        "di": "01", 
        "xian": "21", 
        "name": "乌鲁木齐县", 
        "level": 3
    }, 
    {
        "code": "650200", 
        "sheng": "65", 
        "di": "02", 
        "xian": "00", 
        "name": "克拉玛依市", 
        "level": 2
    }, 
    {
        "code": "650202", 
        "sheng": "65", 
        "di": "02", 
        "xian": "02", 
        "name": "独山子区", 
        "level": 3
    }, 
    {
        "code": "650203", 
        "sheng": "65", 
        "di": "02", 
        "xian": "03", 
        "name": "克拉玛依区", 
        "level": 3
    }, 
    {
        "code": "650204", 
        "sheng": "65", 
        "di": "02", 
        "xian": "04", 
        "name": "白碱滩区", 
        "level": 3
    }, 
    {
        "code": "650205", 
        "sheng": "65", 
        "di": "02", 
        "xian": "05", 
        "name": "乌尔禾区", 
        "level": 3
    }, 
    {
        "code": "650400", 
        "sheng": "65", 
        "di": "04", 
        "xian": "00", 
        "name": "吐鲁番市", 
        "level": 2
    }, 
    {
        "code": "650402", 
        "sheng": "65", 
        "di": "04", 
        "xian": "02", 
        "name": "高昌区", 
        "level": 3
    }, 
    {
        "code": "650421", 
        "sheng": "65", 
        "di": "04", 
        "xian": "21", 
        "name": "鄯善县", 
        "level": 3
    }, 
    {
        "code": "650422", 
        "sheng": "65", 
        "di": "04", 
        "xian": "22", 
        "name": "托克逊县", 
        "level": 3
    }, 
    {
        "code": "652200", 
        "sheng": "65", 
        "di": "22", 
        "xian": "00", 
        "name": "哈密市", 
        "level": 2
    }, 
    {
        "code": "652201", 
        "sheng": "65", 
        "di": "22", 
        "xian": "01", 
        "name": "伊州区", 
        "level": 3
    }, 
    {
        "code": "652222", 
        "sheng": "65", 
        "di": "22", 
        "xian": "22", 
        "name": "巴里坤哈萨克自治县", 
        "level": 3
    }, 
    {
        "code": "652223", 
        "sheng": "65", 
        "di": "22", 
        "xian": "23", 
        "name": "伊吾县", 
        "level": 3
    }, 
    {
        "code": "652300", 
        "sheng": "65", 
        "di": "23", 
        "xian": "00", 
        "name": "昌吉回族自治州", 
        "level": 2
    }, 
    {
        "code": "652301", 
        "sheng": "65", 
        "di": "23", 
        "xian": "01", 
        "name": "昌吉市", 
        "level": 3
    }, 
    {
        "code": "652302", 
        "sheng": "65", 
        "di": "23", 
        "xian": "02", 
        "name": "阜康市", 
        "level": 3
    }, 
    {
        "code": "652323", 
        "sheng": "65", 
        "di": "23", 
        "xian": "23", 
        "name": "呼图壁县", 
        "level": 3
    }, 
    {
        "code": "652324", 
        "sheng": "65", 
        "di": "23", 
        "xian": "24", 
        "name": "玛纳斯县", 
        "level": 3
    }, 
    {
        "code": "652325", 
        "sheng": "65", 
        "di": "23", 
        "xian": "25", 
        "name": "奇台县", 
        "level": 3
    }, 
    {
        "code": "652327", 
        "sheng": "65", 
        "di": "23", 
        "xian": "27", 
        "name": "吉木萨尔县", 
        "level": 3
    }, 
    {
        "code": "652328", 
        "sheng": "65", 
        "di": "23", 
        "xian": "28", 
        "name": "木垒哈萨克自治县", 
        "level": 3
    }, 
    {
        "code": "652700", 
        "sheng": "65", 
        "di": "27", 
        "xian": "00", 
        "name": "博尔塔拉蒙古自治州", 
        "level": 2
    }, 
    {
        "code": "652701", 
        "sheng": "65", 
        "di": "27", 
        "xian": "01", 
        "name": "博乐市", 
        "level": 3
    }, 
    {
        "code": "652702", 
        "sheng": "65", 
        "di": "27", 
        "xian": "02", 
        "name": "阿拉山口市", 
        "level": 3
    }, 
    {
        "code": "652722", 
        "sheng": "65", 
        "di": "27", 
        "xian": "22", 
        "name": "精河县", 
        "level": 3
    }, 
    {
        "code": "652723", 
        "sheng": "65", 
        "di": "27", 
        "xian": "23", 
        "name": "温泉县", 
        "level": 3
    }, 
    {
        "code": "652800", 
        "sheng": "65", 
        "di": "28", 
        "xian": "00", 
        "name": "巴音郭楞蒙古自治州", 
        "level": 2
    }, 
    {
        "code": "652801", 
        "sheng": "65", 
        "di": "28", 
        "xian": "01", 
        "name": "库尔勒市", 
        "level": 3
    }, 
    {
        "code": "652822", 
        "sheng": "65", 
        "di": "28", 
        "xian": "22", 
        "name": "轮台县", 
        "level": 3
    }, 
    {
        "code": "652823", 
        "sheng": "65", 
        "di": "28", 
        "xian": "23", 
        "name": "尉犁县", 
        "level": 3
    }, 
    {
        "code": "652824", 
        "sheng": "65", 
        "di": "28", 
        "xian": "24", 
        "name": "若羌县", 
        "level": 3
    }, 
    {
        "code": "652825", 
        "sheng": "65", 
        "di": "28", 
        "xian": "25", 
        "name": "且末县", 
        "level": 3
    }, 
    {
        "code": "652826", 
        "sheng": "65", 
        "di": "28", 
        "xian": "26", 
        "name": "焉耆回族自治县", 
        "level": 3
    }, 
    {
        "code": "652827", 
        "sheng": "65", 
        "di": "28", 
        "xian": "27", 
        "name": "和静县", 
        "level": 3
    }, 
    {
        "code": "652828", 
        "sheng": "65", 
        "di": "28", 
        "xian": "28", 
        "name": "和硕县", 
        "level": 3
    }, 
    {
        "code": "652829", 
        "sheng": "65", 
        "di": "28", 
        "xian": "29", 
        "name": "博湖县", 
        "level": 3
    }, 
    {
        "code": "652900", 
        "sheng": "65", 
        "di": "29", 
        "xian": "00", 
        "name": "阿克苏地区", 
        "level": 2
    }, 
    {
        "code": "652901", 
        "sheng": "65", 
        "di": "29", 
        "xian": "01", 
        "name": "阿克苏市", 
        "level": 3
    }, 
    {
        "code": "652922", 
        "sheng": "65", 
        "di": "29", 
        "xian": "22", 
        "name": "温宿县", 
        "level": 3
    }, 
    {
        "code": "652923", 
        "sheng": "65", 
        "di": "29", 
        "xian": "23", 
        "name": "库车县", 
        "level": 3
    }, 
    {
        "code": "652924", 
        "sheng": "65", 
        "di": "29", 
        "xian": "24", 
        "name": "沙雅县", 
        "level": 3
    }, 
    {
        "code": "652925", 
        "sheng": "65", 
        "di": "29", 
        "xian": "25", 
        "name": "新和县", 
        "level": 3
    }, 
    {
        "code": "652926", 
        "sheng": "65", 
        "di": "29", 
        "xian": "26", 
        "name": "拜城县", 
        "level": 3
    }, 
    {
        "code": "652927", 
        "sheng": "65", 
        "di": "29", 
        "xian": "27", 
        "name": "乌什县", 
        "level": 3
    }, 
    {
        "code": "652928", 
        "sheng": "65", 
        "di": "29", 
        "xian": "28", 
        "name": "阿瓦提县", 
        "level": 3
    }, 
    {
        "code": "652929", 
        "sheng": "65", 
        "di": "29", 
        "xian": "29", 
        "name": "柯坪县", 
        "level": 3
    }, 
    {
        "code": "653000", 
        "sheng": "65", 
        "di": "30", 
        "xian": "00", 
        "name": "克孜勒苏柯尔克孜自治州", 
        "level": 2
    }, 
    {
        "code": "653001", 
        "sheng": "65", 
        "di": "30", 
        "xian": "01", 
        "name": "阿图什市", 
        "level": 3
    }, 
    {
        "code": "653022", 
        "sheng": "65", 
        "di": "30", 
        "xian": "22", 
        "name": "阿克陶县", 
        "level": 3
    }, 
    {
        "code": "653023", 
        "sheng": "65", 
        "di": "30", 
        "xian": "23", 
        "name": "阿合奇县", 
        "level": 3
    }, 
    {
        "code": "653024", 
        "sheng": "65", 
        "di": "30", 
        "xian": "24", 
        "name": "乌恰县", 
        "level": 3
    }, 
    {
        "code": "653100", 
        "sheng": "65", 
        "di": "31", 
        "xian": "00", 
        "name": "喀什地区", 
        "level": 2
    }, 
    {
        "code": "653101", 
        "sheng": "65", 
        "di": "31", 
        "xian": "01", 
        "name": "喀什市", 
        "level": 3
    }, 
    {
        "code": "653121", 
        "sheng": "65", 
        "di": "31", 
        "xian": "21", 
        "name": "疏附县", 
        "level": 3
    }, 
    {
        "code": "653122", 
        "sheng": "65", 
        "di": "31", 
        "xian": "22", 
        "name": "疏勒县", 
        "level": 3
    }, 
    {
        "code": "653123", 
        "sheng": "65", 
        "di": "31", 
        "xian": "23", 
        "name": "英吉沙县", 
        "level": 3
    }, 
    {
        "code": "653124", 
        "sheng": "65", 
        "di": "31", 
        "xian": "24", 
        "name": "泽普县", 
        "level": 3
    }, 
    {
        "code": "653125", 
        "sheng": "65", 
        "di": "31", 
        "xian": "25", 
        "name": "莎车县", 
        "level": 3
    }, 
    {
        "code": "653126", 
        "sheng": "65", 
        "di": "31", 
        "xian": "26", 
        "name": "叶城县", 
        "level": 3
    }, 
    {
        "code": "653127", 
        "sheng": "65", 
        "di": "31", 
        "xian": "27", 
        "name": "麦盖提县", 
        "level": 3
    }, 
    {
        "code": "653128", 
        "sheng": "65", 
        "di": "31", 
        "xian": "28", 
        "name": "岳普湖县", 
        "level": 3
    }, 
    {
        "code": "653129", 
        "sheng": "65", 
        "di": "31", 
        "xian": "29", 
        "name": "伽师县", 
        "level": 3
    }, 
    {
        "code": "653130", 
        "sheng": "65", 
        "di": "31", 
        "xian": "30", 
        "name": "巴楚县", 
        "level": 3
    }, 
    {
        "code": "653131", 
        "sheng": "65", 
        "di": "31", 
        "xian": "31", 
        "name": "塔什库尔干塔吉克自治县", 
        "level": 3
    }, 
    {
        "code": "653200", 
        "sheng": "65", 
        "di": "32", 
        "xian": "00", 
        "name": "和田地区", 
        "level": 2
    }, 
    {
        "code": "653201", 
        "sheng": "65", 
        "di": "32", 
        "xian": "01", 
        "name": "和田市", 
        "level": 3
    }, 
    {
        "code": "653221", 
        "sheng": "65", 
        "di": "32", 
        "xian": "21", 
        "name": "和田县", 
        "level": 3
    }, 
    {
        "code": "653222", 
        "sheng": "65", 
        "di": "32", 
        "xian": "22", 
        "name": "墨玉县", 
        "level": 3
    }, 
    {
        "code": "653223", 
        "sheng": "65", 
        "di": "32", 
        "xian": "23", 
        "name": "皮山县", 
        "level": 3
    }, 
    {
        "code": "653224", 
        "sheng": "65", 
        "di": "32", 
        "xian": "24", 
        "name": "洛浦县", 
        "level": 3
    }, 
    {
        "code": "653225", 
        "sheng": "65", 
        "di": "32", 
        "xian": "25", 
        "name": "策勒县", 
        "level": 3
    }, 
    {
        "code": "653226", 
        "sheng": "65", 
        "di": "32", 
        "xian": "26", 
        "name": "于田县", 
        "level": 3
    }, 
    {
        "code": "653227", 
        "sheng": "65", 
        "di": "32", 
        "xian": "27", 
        "name": "民丰县", 
        "level": 3
    }, 
    {
        "code": "654000", 
        "sheng": "65", 
        "di": "40", 
        "xian": "00", 
        "name": "伊犁哈萨克自治州", 
        "level": 2
    }, 
    {
        "code": "654002", 
        "sheng": "65", 
        "di": "40", 
        "xian": "02", 
        "name": "伊宁市", 
        "level": 3
    }, 
    {
        "code": "654003", 
        "sheng": "65", 
        "di": "40", 
        "xian": "03", 
        "name": "奎屯市", 
        "level": 3
    }, 
    {
        "code": "654004", 
        "sheng": "65", 
        "di": "40", 
        "xian": "04", 
        "name": "霍尔果斯市", 
        "level": 3
    }, 
    {
        "code": "654021", 
        "sheng": "65", 
        "di": "40", 
        "xian": "21", 
        "name": "伊宁县", 
        "level": 3
    }, 
    {
        "code": "654022", 
        "sheng": "65", 
        "di": "40", 
        "xian": "22", 
        "name": "察布查尔锡伯自治县", 
        "level": 3
    }, 
    {
        "code": "654023", 
        "sheng": "65", 
        "di": "40", 
        "xian": "23", 
        "name": "霍城县", 
        "level": 3
    }, 
    {
        "code": "654024", 
        "sheng": "65", 
        "di": "40", 
        "xian": "24", 
        "name": "巩留县", 
        "level": 3
    }, 
    {
        "code": "654025", 
        "sheng": "65", 
        "di": "40", 
        "xian": "25", 
        "name": "新源县", 
        "level": 3
    }, 
    {
        "code": "654026", 
        "sheng": "65", 
        "di": "40", 
        "xian": "26", 
        "name": "昭苏县", 
        "level": 3
    }, 
    {
        "code": "654027", 
        "sheng": "65", 
        "di": "40", 
        "xian": "27", 
        "name": "特克斯县", 
        "level": 3
    }, 
    {
        "code": "654028", 
        "sheng": "65", 
        "di": "40", 
        "xian": "28", 
        "name": "尼勒克县", 
        "level": 3
    }, 
    {
        "code": "654200", 
        "sheng": "65", 
        "di": "42", 
        "xian": "00", 
        "name": "塔城地区", 
        "level": 2
    }, 
    {
        "code": "654201", 
        "sheng": "65", 
        "di": "42", 
        "xian": "01", 
        "name": "塔城市", 
        "level": 3
    }, 
    {
        "code": "654202", 
        "sheng": "65", 
        "di": "42", 
        "xian": "02", 
        "name": "乌苏市", 
        "level": 3
    }, 
    {
        "code": "654221", 
        "sheng": "65", 
        "di": "42", 
        "xian": "21", 
        "name": "额敏县", 
        "level": 3
    }, 
    {
        "code": "654223", 
        "sheng": "65", 
        "di": "42", 
        "xian": "23", 
        "name": "沙湾县", 
        "level": 3
    }, 
    {
        "code": "654224", 
        "sheng": "65", 
        "di": "42", 
        "xian": "24", 
        "name": "托里县", 
        "level": 3
    }, 
    {
        "code": "654225", 
        "sheng": "65", 
        "di": "42", 
        "xian": "25", 
        "name": "裕民县", 
        "level": 3
    }, 
    {
        "code": "654226", 
        "sheng": "65", 
        "di": "42", 
        "xian": "26", 
        "name": "和布克赛尔蒙古自治县", 
        "level": 3
    }, 
    {
        "code": "654300", 
        "sheng": "65", 
        "di": "43", 
        "xian": "00", 
        "name": "阿勒泰地区", 
        "level": 2
    }, 
    {
        "code": "654301", 
        "sheng": "65", 
        "di": "43", 
        "xian": "01", 
        "name": "阿勒泰市", 
        "level": 3
    }, 
    {
        "code": "654321", 
        "sheng": "65", 
        "di": "43", 
        "xian": "21", 
        "name": "布尔津县", 
        "level": 3
    }, 
    {
        "code": "654322", 
        "sheng": "65", 
        "di": "43", 
        "xian": "22", 
        "name": "富蕴县", 
        "level": 3
    }, 
    {
        "code": "654323", 
        "sheng": "65", 
        "di": "43", 
        "xian": "23", 
        "name": "福海县", 
        "level": 3
    }, 
    {
        "code": "654324", 
        "sheng": "65", 
        "di": "43", 
        "xian": "24", 
        "name": "哈巴河县", 
        "level": 3
    }, 
    {
        "code": "654325", 
        "sheng": "65", 
        "di": "43", 
        "xian": "25", 
        "name": "青河县", 
        "level": 3
    }, 
    {
        "code": "654326", 
        "sheng": "65", 
        "di": "43", 
        "xian": "26", 
        "name": "吉木乃县", 
        "level": 3
    }, 
    {
        "code": "659001", 
        "sheng": "65", 
        "di": "90", 
        "xian": "01", 
        "name": "石河子市", 
        "level": 2
    }, 
    {
        "code": "659002", 
        "sheng": "65", 
        "di": "90", 
        "xian": "02", 
        "name": "阿拉尔市", 
        "level": 2
    }, 
    {
        "code": "659003", 
        "sheng": "65", 
        "di": "90", 
        "xian": "03", 
        "name": "图木舒克市", 
        "level": 2
    }, 
    {
        "code": "659004", 
        "sheng": "65", 
        "di": "90", 
        "xian": "04", 
        "name": "五家渠市", 
        "level": 2
    }, 
    {
        "code": "659005", 
        "sheng": "65", 
        "di": "90", 
        "xian": "05", 
        "name": "北屯市", 
        "level": 2
    }, 
    {
        "code": "659006", 
        "sheng": "65", 
        "di": "90", 
        "xian": "06", 
        "name": "铁门关市", 
        "level": 2
    }, 
    {
        "code": "659007", 
        "sheng": "65", 
        "di": "90", 
        "xian": "07", 
        "name": "双河市", 
        "level": 2
    }, 
    {
        "code": "659008", 
        "sheng": "65", 
        "di": "90", 
        "xian": "08", 
        "name": "可克达拉市", 
        "level": 2
    }, 
    {
        "code": "659009", 
        "sheng": "65", 
        "di": "90", 
        "xian": "09", 
        "name": "昆玉市", 
        "level": 2
    }, 
    {
        "code": "659101", 
        "sheng": "65", 
        "di": "91", 
        "xian": "01", 
        "name": "新城街道", 
        "level": 3
    }, 
    {
        "code": "659102", 
        "sheng": "65", 
        "di": "91", 
        "xian": "02", 
        "name": "向阳街道", 
        "level": 3
    }, 
    {
        "code": "659103", 
        "sheng": "65", 
        "di": "91", 
        "xian": "03", 
        "name": "红山街道", 
        "level": 3
    }, 
    {
        "code": "659104", 
        "sheng": "65", 
        "di": "91", 
        "xian": "04", 
        "name": "老街街道", 
        "level": 3
    }, 
    {
        "code": "659105", 
        "sheng": "65", 
        "di": "91", 
        "xian": "05", 
        "name": "东城街道", 
        "level": 3
    }, 
    {
        "code": "659106", 
        "sheng": "65", 
        "di": "91", 
        "xian": "06", 
        "name": "北泉镇", 
        "level": 3
    }, 
    {
        "code": "659107", 
        "sheng": "65", 
        "di": "91", 
        "xian": "07", 
        "name": "石河子乡", 
        "level": 3
    }, 
    {
        "code": "659108", 
        "sheng": "65", 
        "di": "91", 
        "xian": "08", 
        "name": "一五二团", 
        "level": 3
    }, 
    {
        "code": "659201", 
        "sheng": "65", 
        "di": "92", 
        "xian": "01", 
        "name": "幸福路街道", 
        "level": 3
    }, 
    {
        "code": "659202", 
        "sheng": "65", 
        "di": "92", 
        "xian": "02", 
        "name": "金银川路街道", 
        "level": 3
    }, 
    {
        "code": "659203", 
        "sheng": "65", 
        "di": "92", 
        "xian": "03", 
        "name": "青松路街道", 
        "level": 3
    }, 
    {
        "code": "659204", 
        "sheng": "65", 
        "di": "92", 
        "xian": "04", 
        "name": "南口街道", 
        "level": 3
    }, 
    {
        "code": "659205", 
        "sheng": "65", 
        "di": "92", 
        "xian": "05", 
        "name": "托喀依乡", 
        "level": 3
    }, 
    {
        "code": "659206", 
        "sheng": "65", 
        "di": "92", 
        "xian": "06", 
        "name": "金银川镇", 
        "level": 3
    }, 
    {
        "code": "659301", 
        "sheng": "65", 
        "di": "93", 
        "xian": "01", 
        "name": "图木舒克市区", 
        "level": 3
    }, 
    {
        "code": "659302", 
        "sheng": "65", 
        "di": "93", 
        "xian": "02", 
        "name": "兵团四十四团", 
        "level": 3
    }, 
    {
        "code": "659303", 
        "sheng": "65", 
        "di": "93", 
        "xian": "03", 
        "name": "兵团四十九团", 
        "level": 3
    }, 
    {
        "code": "659304", 
        "sheng": "65", 
        "di": "93", 
        "xian": "04", 
        "name": "兵团五十团", 
        "level": 3
    }, 
    {
        "code": "659305", 
        "sheng": "65", 
        "di": "93", 
        "xian": "05", 
        "name": "兵团五十一团", 
        "level": 3
    }, 
    {
        "code": "659306", 
        "sheng": "65", 
        "di": "93", 
        "xian": "06", 
        "name": "兵团五十二团", 
        "level": 3
    }, 
    {
        "code": "659307", 
        "sheng": "65", 
        "di": "93", 
        "xian": "07", 
        "name": "兵团五十三团", 
        "level": 3
    }, 
    {
        "code": "659308", 
        "sheng": "65", 
        "di": "93", 
        "xian": "08", 
        "name": "喀拉拜勒镇", 
        "level": 3
    }, 
    {
        "code": "659309", 
        "sheng": "65", 
        "di": "93", 
        "xian": "09", 
        "name": "永安坝", 
        "level": 3
    }, 
    {
        "code": "659401", 
        "sheng": "65", 
        "di": "94", 
        "xian": "01", 
        "name": "城区", 
        "level": 3
    }, 
    {
        "code": "659402", 
        "sheng": "65", 
        "di": "94", 
        "xian": "02", 
        "name": "一零一团", 
        "level": 3
    }, 
    {
        "code": "659403", 
        "sheng": "65", 
        "di": "94", 
        "xian": "03", 
        "name": "一零二团", 
        "level": 3
    }, 
    {
        "code": "659404", 
        "sheng": "65", 
        "di": "94", 
        "xian": "04", 
        "name": "一零三团", 
        "level": 3
    }, 
    {
        "code": "659501", 
        "sheng": "65", 
        "di": "95", 
        "xian": "01", 
        "name": "新城区", 
        "level": 3
    }, 
    {
        "code": "659502", 
        "sheng": "65", 
        "di": "95", 
        "xian": "02", 
        "name": "老城区", 
        "level": 3
    }, 
    {
        "code": "659503", 
        "sheng": "65", 
        "di": "95", 
        "xian": "03", 
        "name": "工业园区", 
        "level": 3
    }, 
    {
        "code": "659504", 
        "sheng": "65", 
        "di": "95", 
        "xian": "04", 
        "name": "海川镇", 
        "level": 3
    }, 
    {
        "code": "659505", 
        "sheng": "65", 
        "di": "95", 
        "xian": "05", 
        "name": "丰庆镇", 
        "level": 3
    }, 
    {
        "code": "659506", 
        "sheng": "65", 
        "di": "95", 
        "xian": "06", 
        "name": "锡伯渡镇", 
        "level": 3
    }, 
    {
        "code": "659601", 
        "sheng": "65", 
        "di": "96", 
        "xian": "01", 
        "name": "二十九团场", 
        "level": 3
    }, 
    {
        "code": "659602", 
        "sheng": "65", 
        "di": "96", 
        "xian": "02", 
        "name": "库西经济工业园", 
        "level": 3
    }, 
    {
        "code": "659603", 
        "sheng": "65", 
        "di": "96", 
        "xian": "03", 
        "name": "博古其镇", 
        "level": 3
    }, 
    {
        "code": "659604", 
        "sheng": "65", 
        "di": "96", 
        "xian": "04", 
        "name": "双丰镇", 
        "level": 3
    }, 
    {
        "code": "659701", 
        "sheng": "65", 
        "di": "97", 
        "xian": "01", 
        "name": "八十一团", 
        "level": 3
    }, 
    {
        "code": "659702", 
        "sheng": "65", 
        "di": "97", 
        "xian": "02", 
        "name": "八十四团", 
        "level": 3
    }, 
    {
        "code": "659703", 
        "sheng": "65", 
        "di": "97", 
        "xian": "03", 
        "name": "八十五团", 
        "level": 3
    }, 
    {
        "code": "659704", 
        "sheng": "65", 
        "di": "97", 
        "xian": "04", 
        "name": "八十六团", 
        "level": 3
    }, 
    {
        "code": "659705", 
        "sheng": "65", 
        "di": "97", 
        "xian": "05", 
        "name": "八十九团", 
        "level": 3
    }, 
    {
        "code": "659706", 
        "sheng": "65", 
        "di": "97", 
        "xian": "06", 
        "name": "九十团", 
        "level": 3
    }, 
    {
        "code": "659801", 
        "sheng": "65", 
        "di": "98", 
        "xian": "01", 
        "name": "63团", 
        "level": 3
    }, 
    {
        "code": "659802", 
        "sheng": "65", 
        "di": "98", 
        "xian": "02", 
        "name": "64团", 
        "level": 3
    }, 
    {
        "code": "659803", 
        "sheng": "65", 
        "di": "98", 
        "xian": "03", 
        "name": "66团", 
        "level": 3
    }, 
    {
        "code": "659804", 
        "sheng": "65", 
        "di": "98", 
        "xian": "04", 
        "name": "67团", 
        "level": 3
    }, 
    {
        "code": "659805", 
        "sheng": "65", 
        "di": "98", 
        "xian": "05", 
        "name": "68团", 
        "level": 3
    }, 
    {
        "code": "659901", 
        "sheng": "65", 
        "di": "99", 
        "xian": "01", 
        "name": "皮山农场", 
        "level": 3
    }, 
    {
        "code": "659902", 
        "sheng": "65", 
        "di": "99", 
        "xian": "02", 
        "name": "二二四团", 
        "level": 3
    }, 
    {
        "code": "659903", 
        "sheng": "65", 
        "di": "99", 
        "xian": "03", 
        "name": "四十七团", 
        "level": 3
    }, 
    {
        "code": "659904", 
        "sheng": "65", 
        "di": "99", 
        "xian": "04", 
        "name": "一牧场", 
        "level": 3
    }, 
    {
        "code": "710000", 
        "sheng": "71", 
        "di": "00", 
        "xian": "00", 
        "name": "台湾", 
        "level": 1
    }, 
    {
        "code": "710100", 
        "sheng": "71", 
        "di": "01", 
        "xian": "00", 
        "name": "台北市", 
        "level": 2
    }, 
    {
        "code": "710101", 
        "sheng": "71", 
        "di": "01", 
        "xian": "01", 
        "name": "松山区", 
        "level": 3
    }, 
    {
        "code": "710102", 
        "sheng": "71", 
        "di": "01", 
        "xian": "02", 
        "name": "信义区", 
        "level": 3
    }, 
    {
        "code": "710103", 
        "sheng": "71", 
        "di": "01", 
        "xian": "03", 
        "name": "大安区", 
        "level": 3
    }, 
    {
        "code": "710104", 
        "sheng": "71", 
        "di": "01", 
        "xian": "04", 
        "name": "中山区", 
        "level": 3
    }, 
    {
        "code": "710105", 
        "sheng": "71", 
        "di": "01", 
        "xian": "05", 
        "name": "中正区", 
        "level": 3
    }, 
    {
        "code": "710106", 
        "sheng": "71", 
        "di": "01", 
        "xian": "06", 
        "name": "大同区", 
        "level": 3
    }, 
    {
        "code": "710107", 
        "sheng": "71", 
        "di": "01", 
        "xian": "07", 
        "name": "万华区", 
        "level": 3
    }, 
    {
        "code": "710108", 
        "sheng": "71", 
        "di": "01", 
        "xian": "08", 
        "name": "文山区", 
        "level": 3
    }, 
    {
        "code": "710109", 
        "sheng": "71", 
        "di": "01", 
        "xian": "09", 
        "name": "南港区", 
        "level": 3
    }, 
    {
        "code": "710110", 
        "sheng": "71", 
        "di": "01", 
        "xian": "10", 
        "name": "内湖区", 
        "level": 3
    }, 
    {
        "code": "710111", 
        "sheng": "71", 
        "di": "01", 
        "xian": "11", 
        "name": "士林区", 
        "level": 3
    }, 
    {
        "code": "710112", 
        "sheng": "71", 
        "di": "01", 
        "xian": "12", 
        "name": "北投区", 
        "level": 3
    }, 
    {
        "code": "710200", 
        "sheng": "71", 
        "di": "02", 
        "xian": "00", 
        "name": "高雄市", 
        "level": 2
    }, 
    {
        "code": "710201", 
        "sheng": "71", 
        "di": "02", 
        "xian": "01", 
        "name": "盐埕区", 
        "level": 3
    }, 
    {
        "code": "710202", 
        "sheng": "71", 
        "di": "02", 
        "xian": "02", 
        "name": "鼓山区", 
        "level": 3
    }, 
    {
        "code": "710203", 
        "sheng": "71", 
        "di": "02", 
        "xian": "03", 
        "name": "左营区", 
        "level": 3
    }, 
    {
        "code": "710204", 
        "sheng": "71", 
        "di": "02", 
        "xian": "04", 
        "name": "楠梓区", 
        "level": 3
    }, 
    {
        "code": "710205", 
        "sheng": "71", 
        "di": "02", 
        "xian": "05", 
        "name": "三民区", 
        "level": 3
    }, 
    {
        "code": "710206", 
        "sheng": "71", 
        "di": "02", 
        "xian": "06", 
        "name": "新兴区", 
        "level": 3
    }, 
    {
        "code": "710207", 
        "sheng": "71", 
        "di": "02", 
        "xian": "07", 
        "name": "前金区", 
        "level": 3
    }, 
    {
        "code": "710208", 
        "sheng": "71", 
        "di": "02", 
        "xian": "08", 
        "name": "苓雅区", 
        "level": 3
    }, 
    {
        "code": "710209", 
        "sheng": "71", 
        "di": "02", 
        "xian": "09", 
        "name": "前镇区", 
        "level": 3
    }, 
    {
        "code": "710210", 
        "sheng": "71", 
        "di": "02", 
        "xian": "10", 
        "name": "旗津区", 
        "level": 3
    }, 
    {
        "code": "710211", 
        "sheng": "71", 
        "di": "02", 
        "xian": "11", 
        "name": "小港区", 
        "level": 3
    }, 
    {
        "code": "710212", 
        "sheng": "71", 
        "di": "02", 
        "xian": "12", 
        "name": "凤山区", 
        "level": 3
    }, 
    {
        "code": "710213", 
        "sheng": "71", 
        "di": "02", 
        "xian": "13", 
        "name": "林园区", 
        "level": 3
    }, 
    {
        "code": "710214", 
        "sheng": "71", 
        "di": "02", 
        "xian": "14", 
        "name": "大寮区", 
        "level": 3
    }, 
    {
        "code": "710215", 
        "sheng": "71", 
        "di": "02", 
        "xian": "15", 
        "name": "大树区", 
        "level": 3
    }, 
    {
        "code": "710216", 
        "sheng": "71", 
        "di": "02", 
        "xian": "16", 
        "name": "大社区", 
        "level": 3
    }, 
    {
        "code": "710217", 
        "sheng": "71", 
        "di": "02", 
        "xian": "17", 
        "name": "仁武区", 
        "level": 3
    }, 
    {
        "code": "710218", 
        "sheng": "71", 
        "di": "02", 
        "xian": "18", 
        "name": "鸟松区", 
        "level": 3
    }, 
    {
        "code": "710219", 
        "sheng": "71", 
        "di": "02", 
        "xian": "19", 
        "name": "冈山区", 
        "level": 3
    }, 
    {
        "code": "710220", 
        "sheng": "71", 
        "di": "02", 
        "xian": "20", 
        "name": "桥头区", 
        "level": 3
    }, 
    {
        "code": "710221", 
        "sheng": "71", 
        "di": "02", 
        "xian": "21", 
        "name": "燕巢区", 
        "level": 3
    }, 
    {
        "code": "710222", 
        "sheng": "71", 
        "di": "02", 
        "xian": "22", 
        "name": "田寮区", 
        "level": 3
    }, 
    {
        "code": "710223", 
        "sheng": "71", 
        "di": "02", 
        "xian": "23", 
        "name": "阿莲区", 
        "level": 3
    }, 
    {
        "code": "710224", 
        "sheng": "71", 
        "di": "02", 
        "xian": "24", 
        "name": "路竹区", 
        "level": 3
    }, 
    {
        "code": "710225", 
        "sheng": "71", 
        "di": "02", 
        "xian": "25", 
        "name": "湖内区", 
        "level": 3
    }, 
    {
        "code": "710226", 
        "sheng": "71", 
        "di": "02", 
        "xian": "26", 
        "name": "茄萣区", 
        "level": 3
    }, 
    {
        "code": "710227", 
        "sheng": "71", 
        "di": "02", 
        "xian": "27", 
        "name": "永安区", 
        "level": 3
    }, 
    {
        "code": "710228", 
        "sheng": "71", 
        "di": "02", 
        "xian": "28", 
        "name": "弥陀区", 
        "level": 3
    }, 
    {
        "code": "710229", 
        "sheng": "71", 
        "di": "02", 
        "xian": "29", 
        "name": "梓官区", 
        "level": 3
    }, 
    {
        "code": "710230", 
        "sheng": "71", 
        "di": "02", 
        "xian": "30", 
        "name": "旗山区", 
        "level": 3
    }, 
    {
        "code": "710231", 
        "sheng": "71", 
        "di": "02", 
        "xian": "31", 
        "name": "美浓区", 
        "level": 3
    }, 
    {
        "code": "710232", 
        "sheng": "71", 
        "di": "02", 
        "xian": "32", 
        "name": "六龟区", 
        "level": 3
    }, 
    {
        "code": "710233", 
        "sheng": "71", 
        "di": "02", 
        "xian": "33", 
        "name": "甲仙区", 
        "level": 3
    }, 
    {
        "code": "710234", 
        "sheng": "71", 
        "di": "02", 
        "xian": "34", 
        "name": "杉林区", 
        "level": 3
    }, 
    {
        "code": "710235", 
        "sheng": "71", 
        "di": "02", 
        "xian": "35", 
        "name": "内门区", 
        "level": 3
    }, 
    {
        "code": "710236", 
        "sheng": "71", 
        "di": "02", 
        "xian": "36", 
        "name": "茂林区", 
        "level": 3
    }, 
    {
        "code": "710237", 
        "sheng": "71", 
        "di": "02", 
        "xian": "37", 
        "name": "桃源区", 
        "level": 3
    }, 
    {
        "code": "710238", 
        "sheng": "71", 
        "di": "02", 
        "xian": "38", 
        "name": "那玛夏区", 
        "level": 3
    }, 
    {
        "code": "710300", 
        "sheng": "71", 
        "di": "03", 
        "xian": "00", 
        "name": "基隆市", 
        "level": 2
    }, 
    {
        "code": "710301", 
        "sheng": "71", 
        "di": "03", 
        "xian": "01", 
        "name": "中正区", 
        "level": 3
    }, 
    {
        "code": "710302", 
        "sheng": "71", 
        "di": "03", 
        "xian": "02", 
        "name": "七堵区", 
        "level": 3
    }, 
    {
        "code": "710303", 
        "sheng": "71", 
        "di": "03", 
        "xian": "03", 
        "name": "暖暖区", 
        "level": 3
    }, 
    {
        "code": "710304", 
        "sheng": "71", 
        "di": "03", 
        "xian": "04", 
        "name": "仁爱区", 
        "level": 3
    }, 
    {
        "code": "710305", 
        "sheng": "71", 
        "di": "03", 
        "xian": "05", 
        "name": "中山区", 
        "level": 3
    }, 
    {
        "code": "710306", 
        "sheng": "71", 
        "di": "03", 
        "xian": "06", 
        "name": "安乐区", 
        "level": 3
    }, 
    {
        "code": "710307", 
        "sheng": "71", 
        "di": "03", 
        "xian": "07", 
        "name": "信义区", 
        "level": 3
    }, 
    {
        "code": "710400", 
        "sheng": "71", 
        "di": "04", 
        "xian": "00", 
        "name": "台中市", 
        "level": 2
    }, 
    {
        "code": "710401", 
        "sheng": "71", 
        "di": "04", 
        "xian": "01", 
        "name": "中区", 
        "level": 3
    }, 
    {
        "code": "710402", 
        "sheng": "71", 
        "di": "04", 
        "xian": "02", 
        "name": "东区", 
        "level": 3
    }, 
    {
        "code": "710403", 
        "sheng": "71", 
        "di": "04", 
        "xian": "03", 
        "name": "南区", 
        "level": 3
    }, 
    {
        "code": "710404", 
        "sheng": "71", 
        "di": "04", 
        "xian": "04", 
        "name": "西区", 
        "level": 3
    }, 
    {
        "code": "710405", 
        "sheng": "71", 
        "di": "04", 
        "xian": "05", 
        "name": "北区", 
        "level": 3
    }, 
    {
        "code": "710406", 
        "sheng": "71", 
        "di": "04", 
        "xian": "06", 
        "name": "西屯区", 
        "level": 3
    }, 
    {
        "code": "710407", 
        "sheng": "71", 
        "di": "04", 
        "xian": "07", 
        "name": "南屯区", 
        "level": 3
    }, 
    {
        "code": "710408", 
        "sheng": "71", 
        "di": "04", 
        "xian": "08", 
        "name": "北屯区", 
        "level": 3
    }, 
    {
        "code": "710409", 
        "sheng": "71", 
        "di": "04", 
        "xian": "09", 
        "name": "丰原区", 
        "level": 3
    }, 
    {
        "code": "710410", 
        "sheng": "71", 
        "di": "04", 
        "xian": "10", 
        "name": "东势区", 
        "level": 3
    }, 
    {
        "code": "710411", 
        "sheng": "71", 
        "di": "04", 
        "xian": "11", 
        "name": "大甲区", 
        "level": 3
    }, 
    {
        "code": "710412", 
        "sheng": "71", 
        "di": "04", 
        "xian": "12", 
        "name": "清水区", 
        "level": 3
    }, 
    {
        "code": "710413", 
        "sheng": "71", 
        "di": "04", 
        "xian": "13", 
        "name": "沙鹿区", 
        "level": 3
    }, 
    {
        "code": "710414", 
        "sheng": "71", 
        "di": "04", 
        "xian": "14", 
        "name": "梧栖区", 
        "level": 3
    }, 
    {
        "code": "710415", 
        "sheng": "71", 
        "di": "04", 
        "xian": "15", 
        "name": "后里区", 
        "level": 3
    }, 
    {
        "code": "710416", 
        "sheng": "71", 
        "di": "04", 
        "xian": "16", 
        "name": "神冈区", 
        "level": 3
    }, 
    {
        "code": "710417", 
        "sheng": "71", 
        "di": "04", 
        "xian": "17", 
        "name": "潭子区", 
        "level": 3
    }, 
    {
        "code": "710418", 
        "sheng": "71", 
        "di": "04", 
        "xian": "18", 
        "name": "大雅区", 
        "level": 3
    }, 
    {
        "code": "710419", 
        "sheng": "71", 
        "di": "04", 
        "xian": "19", 
        "name": "新社区", 
        "level": 3
    }, 
    {
        "code": "710420", 
        "sheng": "71", 
        "di": "04", 
        "xian": "20", 
        "name": "石冈区", 
        "level": 3
    }, 
    {
        "code": "710421", 
        "sheng": "71", 
        "di": "04", 
        "xian": "21", 
        "name": "外埔区", 
        "level": 3
    }, 
    {
        "code": "710422", 
        "sheng": "71", 
        "di": "04", 
        "xian": "22", 
        "name": "大安区", 
        "level": 3
    }, 
    {
        "code": "710423", 
        "sheng": "71", 
        "di": "04", 
        "xian": "23", 
        "name": "乌日区", 
        "level": 3
    }, 
    {
        "code": "710424", 
        "sheng": "71", 
        "di": "04", 
        "xian": "24", 
        "name": "大肚区", 
        "level": 3
    }, 
    {
        "code": "710425", 
        "sheng": "71", 
        "di": "04", 
        "xian": "25", 
        "name": "龙井区", 
        "level": 3
    }, 
    {
        "code": "710426", 
        "sheng": "71", 
        "di": "04", 
        "xian": "26", 
        "name": "雾峰区", 
        "level": 3
    }, 
    {
        "code": "710427", 
        "sheng": "71", 
        "di": "04", 
        "xian": "27", 
        "name": "太平区", 
        "level": 3
    }, 
    {
        "code": "710428", 
        "sheng": "71", 
        "di": "04", 
        "xian": "28", 
        "name": "大里区", 
        "level": 3
    }, 
    {
        "code": "710429", 
        "sheng": "71", 
        "di": "04", 
        "xian": "29", 
        "name": "和平区", 
        "level": 3
    }, 
    {
        "code": "710500", 
        "sheng": "71", 
        "di": "05", 
        "xian": "00", 
        "name": "台南市", 
        "level": 2
    }, 
    {
        "code": "710501", 
        "sheng": "71", 
        "di": "05", 
        "xian": "01", 
        "name": "东区", 
        "level": 3
    }, 
    {
        "code": "710502", 
        "sheng": "71", 
        "di": "05", 
        "xian": "02", 
        "name": "南区", 
        "level": 3
    }, 
    {
        "code": "710504", 
        "sheng": "71", 
        "di": "05", 
        "xian": "04", 
        "name": "北区", 
        "level": 3
    }, 
    {
        "code": "710506", 
        "sheng": "71", 
        "di": "05", 
        "xian": "06", 
        "name": "安南区", 
        "level": 3
    }, 
    {
        "code": "710507", 
        "sheng": "71", 
        "di": "05", 
        "xian": "07", 
        "name": "安平区", 
        "level": 3
    }, 
    {
        "code": "710508", 
        "sheng": "71", 
        "di": "05", 
        "xian": "08", 
        "name": "中西区", 
        "level": 3
    }, 
    {
        "code": "710509", 
        "sheng": "71", 
        "di": "05", 
        "xian": "09", 
        "name": "新营区", 
        "level": 3
    }, 
    {
        "code": "710510", 
        "sheng": "71", 
        "di": "05", 
        "xian": "10", 
        "name": "盐水区", 
        "level": 3
    }, 
    {
        "code": "710511", 
        "sheng": "71", 
        "di": "05", 
        "xian": "11", 
        "name": "白河区", 
        "level": 3
    }, 
    {
        "code": "710512", 
        "sheng": "71", 
        "di": "05", 
        "xian": "12", 
        "name": "柳营区", 
        "level": 3
    }, 
    {
        "code": "710513", 
        "sheng": "71", 
        "di": "05", 
        "xian": "13", 
        "name": "后壁区", 
        "level": 3
    }, 
    {
        "code": "710514", 
        "sheng": "71", 
        "di": "05", 
        "xian": "14", 
        "name": "东山区", 
        "level": 3
    }, 
    {
        "code": "710515", 
        "sheng": "71", 
        "di": "05", 
        "xian": "15", 
        "name": "麻豆区", 
        "level": 3
    }, 
    {
        "code": "710516", 
        "sheng": "71", 
        "di": "05", 
        "xian": "16", 
        "name": "下营区", 
        "level": 3
    }, 
    {
        "code": "710517", 
        "sheng": "71", 
        "di": "05", 
        "xian": "17", 
        "name": "六甲区", 
        "level": 3
    }, 
    {
        "code": "710518", 
        "sheng": "71", 
        "di": "05", 
        "xian": "18", 
        "name": "官田区", 
        "level": 3
    }, 
    {
        "code": "710519", 
        "sheng": "71", 
        "di": "05", 
        "xian": "19", 
        "name": "大内区", 
        "level": 3
    }, 
    {
        "code": "710520", 
        "sheng": "71", 
        "di": "05", 
        "xian": "20", 
        "name": "佳里区", 
        "level": 3
    }, 
    {
        "code": "710521", 
        "sheng": "71", 
        "di": "05", 
        "xian": "21", 
        "name": "学甲区", 
        "level": 3
    }, 
    {
        "code": "710522", 
        "sheng": "71", 
        "di": "05", 
        "xian": "22", 
        "name": "西港区", 
        "level": 3
    }, 
    {
        "code": "710523", 
        "sheng": "71", 
        "di": "05", 
        "xian": "23", 
        "name": "七股区", 
        "level": 3
    }, 
    {
        "code": "710524", 
        "sheng": "71", 
        "di": "05", 
        "xian": "24", 
        "name": "将军区", 
        "level": 3
    }, 
    {
        "code": "710525", 
        "sheng": "71", 
        "di": "05", 
        "xian": "25", 
        "name": "北门区", 
        "level": 3
    }, 
    {
        "code": "710526", 
        "sheng": "71", 
        "di": "05", 
        "xian": "26", 
        "name": "新化区", 
        "level": 3
    }, 
    {
        "code": "710527", 
        "sheng": "71", 
        "di": "05", 
        "xian": "27", 
        "name": "善化区", 
        "level": 3
    }, 
    {
        "code": "710528", 
        "sheng": "71", 
        "di": "05", 
        "xian": "28", 
        "name": "新市区", 
        "level": 3
    }, 
    {
        "code": "710529", 
        "sheng": "71", 
        "di": "05", 
        "xian": "29", 
        "name": "安定区", 
        "level": 3
    }, 
    {
        "code": "710530", 
        "sheng": "71", 
        "di": "05", 
        "xian": "30", 
        "name": "山上区", 
        "level": 3
    }, 
    {
        "code": "710531", 
        "sheng": "71", 
        "di": "05", 
        "xian": "31", 
        "name": "玉井区", 
        "level": 3
    }, 
    {
        "code": "710532", 
        "sheng": "71", 
        "di": "05", 
        "xian": "32", 
        "name": "楠西区", 
        "level": 3
    }, 
    {
        "code": "710533", 
        "sheng": "71", 
        "di": "05", 
        "xian": "33", 
        "name": "南化区", 
        "level": 3
    }, 
    {
        "code": "710534", 
        "sheng": "71", 
        "di": "05", 
        "xian": "34", 
        "name": "左镇区", 
        "level": 3
    }, 
    {
        "code": "710535", 
        "sheng": "71", 
        "di": "05", 
        "xian": "35", 
        "name": "仁德区", 
        "level": 3
    }, 
    {
        "code": "710536", 
        "sheng": "71", 
        "di": "05", 
        "xian": "36", 
        "name": "归仁区", 
        "level": 3
    }, 
    {
        "code": "710537", 
        "sheng": "71", 
        "di": "05", 
        "xian": "37", 
        "name": "关庙区", 
        "level": 3
    }, 
    {
        "code": "710538", 
        "sheng": "71", 
        "di": "05", 
        "xian": "38", 
        "name": "龙崎区", 
        "level": 3
    }, 
    {
        "code": "710539", 
        "sheng": "71", 
        "di": "05", 
        "xian": "39", 
        "name": "永康区", 
        "level": 3
    }, 
    {
        "code": "710600", 
        "sheng": "71", 
        "di": "06", 
        "xian": "00", 
        "name": "新竹市", 
        "level": 2
    }, 
    {
        "code": "710601", 
        "sheng": "71", 
        "di": "06", 
        "xian": "01", 
        "name": "东区", 
        "level": 3
    }, 
    {
        "code": "710602", 
        "sheng": "71", 
        "di": "06", 
        "xian": "02", 
        "name": "北区", 
        "level": 3
    }, 
    {
        "code": "710603", 
        "sheng": "71", 
        "di": "06", 
        "xian": "03", 
        "name": "香山区", 
        "level": 3
    }, 
    {
        "code": "710700", 
        "sheng": "71", 
        "di": "07", 
        "xian": "00", 
        "name": "嘉义市", 
        "level": 2
    }, 
    {
        "code": "710701", 
        "sheng": "71", 
        "di": "07", 
        "xian": "01", 
        "name": "东区", 
        "level": 3
    }, 
    {
        "code": "710702", 
        "sheng": "71", 
        "di": "07", 
        "xian": "02", 
        "name": "西区", 
        "level": 3
    }, 
    {
        "code": "710800", 
        "sheng": "71", 
        "di": "08", 
        "xian": "00", 
        "name": "新北市", 
        "level": 2
    }, 
    {
        "code": "710801", 
        "sheng": "71", 
        "di": "08", 
        "xian": "01", 
        "name": "板桥区", 
        "level": 3
    }, 
    {
        "code": "710802", 
        "sheng": "71", 
        "di": "08", 
        "xian": "02", 
        "name": "三重区", 
        "level": 3
    }, 
    {
        "code": "710803", 
        "sheng": "71", 
        "di": "08", 
        "xian": "03", 
        "name": "中和区", 
        "level": 3
    }, 
    {
        "code": "710804", 
        "sheng": "71", 
        "di": "08", 
        "xian": "04", 
        "name": "永和区", 
        "level": 3
    }, 
    {
        "code": "710805", 
        "sheng": "71", 
        "di": "08", 
        "xian": "05", 
        "name": "新庄区", 
        "level": 3
    }, 
    {
        "code": "710806", 
        "sheng": "71", 
        "di": "08", 
        "xian": "06", 
        "name": "新店区", 
        "level": 3
    }, 
    {
        "code": "710807", 
        "sheng": "71", 
        "di": "08", 
        "xian": "07", 
        "name": "树林区", 
        "level": 3
    }, 
    {
        "code": "710808", 
        "sheng": "71", 
        "di": "08", 
        "xian": "08", 
        "name": "莺歌区", 
        "level": 3
    }, 
    {
        "code": "710809", 
        "sheng": "71", 
        "di": "08", 
        "xian": "09", 
        "name": "三峡区", 
        "level": 3
    }, 
    {
        "code": "710810", 
        "sheng": "71", 
        "di": "08", 
        "xian": "10", 
        "name": "淡水区", 
        "level": 3
    }, 
    {
        "code": "710811", 
        "sheng": "71", 
        "di": "08", 
        "xian": "11", 
        "name": "汐止区", 
        "level": 3
    }, 
    {
        "code": "710812", 
        "sheng": "71", 
        "di": "08", 
        "xian": "12", 
        "name": "瑞芳区", 
        "level": 3
    }, 
    {
        "code": "710813", 
        "sheng": "71", 
        "di": "08", 
        "xian": "13", 
        "name": "土城区", 
        "level": 3
    }, 
    {
        "code": "710814", 
        "sheng": "71", 
        "di": "08", 
        "xian": "14", 
        "name": "芦洲区", 
        "level": 3
    }, 
    {
        "code": "710815", 
        "sheng": "71", 
        "di": "08", 
        "xian": "15", 
        "name": "五股区", 
        "level": 3
    }, 
    {
        "code": "710816", 
        "sheng": "71", 
        "di": "08", 
        "xian": "16", 
        "name": "泰山区", 
        "level": 3
    }, 
    {
        "code": "710817", 
        "sheng": "71", 
        "di": "08", 
        "xian": "17", 
        "name": "林口区", 
        "level": 3
    }, 
    {
        "code": "710818", 
        "sheng": "71", 
        "di": "08", 
        "xian": "18", 
        "name": "深坑区", 
        "level": 3
    }, 
    {
        "code": "710819", 
        "sheng": "71", 
        "di": "08", 
        "xian": "19", 
        "name": "石碇区", 
        "level": 3
    }, 
    {
        "code": "710820", 
        "sheng": "71", 
        "di": "08", 
        "xian": "20", 
        "name": "坪林区", 
        "level": 3
    }, 
    {
        "code": "710821", 
        "sheng": "71", 
        "di": "08", 
        "xian": "21", 
        "name": "三芝区", 
        "level": 3
    }, 
    {
        "code": "710822", 
        "sheng": "71", 
        "di": "08", 
        "xian": "22", 
        "name": "石门区", 
        "level": 3
    }, 
    {
        "code": "710823", 
        "sheng": "71", 
        "di": "08", 
        "xian": "23", 
        "name": "八里区", 
        "level": 3
    }, 
    {
        "code": "710824", 
        "sheng": "71", 
        "di": "08", 
        "xian": "24", 
        "name": "平溪区", 
        "level": 3
    }, 
    {
        "code": "710825", 
        "sheng": "71", 
        "di": "08", 
        "xian": "25", 
        "name": "双溪区", 
        "level": 3
    }, 
    {
        "code": "710826", 
        "sheng": "71", 
        "di": "08", 
        "xian": "26", 
        "name": "贡寮区", 
        "level": 3
    }, 
    {
        "code": "710827", 
        "sheng": "71", 
        "di": "08", 
        "xian": "27", 
        "name": "金山区", 
        "level": 3
    }, 
    {
        "code": "710828", 
        "sheng": "71", 
        "di": "08", 
        "xian": "28", 
        "name": "万里区", 
        "level": 3
    }, 
    {
        "code": "710829", 
        "sheng": "71", 
        "di": "08", 
        "xian": "29", 
        "name": "乌来区", 
        "level": 3
    }, 
    {
        "code": "712200", 
        "sheng": "71", 
        "di": "22", 
        "xian": "00", 
        "name": "宜兰县", 
        "level": 2
    }, 
    {
        "code": "712201", 
        "sheng": "71", 
        "di": "22", 
        "xian": "01", 
        "name": "宜兰市", 
        "level": 3
    }, 
    {
        "code": "712221", 
        "sheng": "71", 
        "di": "22", 
        "xian": "21", 
        "name": "罗东镇", 
        "level": 3
    }, 
    {
        "code": "712222", 
        "sheng": "71", 
        "di": "22", 
        "xian": "22", 
        "name": "苏澳镇", 
        "level": 3
    }, 
    {
        "code": "712223", 
        "sheng": "71", 
        "di": "22", 
        "xian": "23", 
        "name": "头城镇", 
        "level": 3
    }, 
    {
        "code": "712224", 
        "sheng": "71", 
        "di": "22", 
        "xian": "24", 
        "name": "礁溪乡", 
        "level": 3
    }, 
    {
        "code": "712225", 
        "sheng": "71", 
        "di": "22", 
        "xian": "25", 
        "name": "壮围乡", 
        "level": 3
    }, 
    {
        "code": "712226", 
        "sheng": "71", 
        "di": "22", 
        "xian": "26", 
        "name": "员山乡", 
        "level": 3
    }, 
    {
        "code": "712227", 
        "sheng": "71", 
        "di": "22", 
        "xian": "27", 
        "name": "冬山乡", 
        "level": 3
    }, 
    {
        "code": "712228", 
        "sheng": "71", 
        "di": "22", 
        "xian": "28", 
        "name": "五结乡", 
        "level": 3
    }, 
    {
        "code": "712229", 
        "sheng": "71", 
        "di": "22", 
        "xian": "29", 
        "name": "三星乡", 
        "level": 3
    }, 
    {
        "code": "712230", 
        "sheng": "71", 
        "di": "22", 
        "xian": "30", 
        "name": "大同乡", 
        "level": 3
    }, 
    {
        "code": "712231", 
        "sheng": "71", 
        "di": "22", 
        "xian": "31", 
        "name": "南澳乡", 
        "level": 3
    }, 
    {
        "code": "712300", 
        "sheng": "71", 
        "di": "23", 
        "xian": "00", 
        "name": "桃园市", 
        "level": 2
    }, 
    {
        "code": "712301", 
        "sheng": "71", 
        "di": "23", 
        "xian": "01", 
        "name": "桃园市", 
        "level": 3
    }, 
    {
        "code": "712302", 
        "sheng": "71", 
        "di": "23", 
        "xian": "02", 
        "name": "中坜市", 
        "level": 3
    }, 
    {
        "code": "712303", 
        "sheng": "71", 
        "di": "23", 
        "xian": "03", 
        "name": "平镇市", 
        "level": 3
    }, 
    {
        "code": "712304", 
        "sheng": "71", 
        "di": "23", 
        "xian": "04", 
        "name": "八德市", 
        "level": 3
    }, 
    {
        "code": "712305", 
        "sheng": "71", 
        "di": "23", 
        "xian": "05", 
        "name": "杨梅市", 
        "level": 3
    }, 
    {
        "code": "712306", 
        "sheng": "71", 
        "di": "23", 
        "xian": "06", 
        "name": "芦竹市", 
        "level": 3
    }, 
    {
        "code": "712321", 
        "sheng": "71", 
        "di": "23", 
        "xian": "21", 
        "name": "大溪镇", 
        "level": 3
    }, 
    {
        "code": "712324", 
        "sheng": "71", 
        "di": "23", 
        "xian": "24", 
        "name": "大园乡", 
        "level": 3
    }, 
    {
        "code": "712325", 
        "sheng": "71", 
        "di": "23", 
        "xian": "25", 
        "name": "龟山乡", 
        "level": 3
    }, 
    {
        "code": "712327", 
        "sheng": "71", 
        "di": "23", 
        "xian": "27", 
        "name": "龙潭乡", 
        "level": 3
    }, 
    {
        "code": "712329", 
        "sheng": "71", 
        "di": "23", 
        "xian": "29", 
        "name": "新屋乡", 
        "level": 3
    }, 
    {
        "code": "712330", 
        "sheng": "71", 
        "di": "23", 
        "xian": "30", 
        "name": "观音乡", 
        "level": 3
    }, 
    {
        "code": "712331", 
        "sheng": "71", 
        "di": "23", 
        "xian": "31", 
        "name": "复兴乡", 
        "level": 3
    }, 
    {
        "code": "712400", 
        "sheng": "71", 
        "di": "24", 
        "xian": "00", 
        "name": "新竹县", 
        "level": 2
    }, 
    {
        "code": "712401", 
        "sheng": "71", 
        "di": "24", 
        "xian": "01", 
        "name": "竹北市", 
        "level": 3
    }, 
    {
        "code": "712421", 
        "sheng": "71", 
        "di": "24", 
        "xian": "21", 
        "name": "竹东镇", 
        "level": 3
    }, 
    {
        "code": "712422", 
        "sheng": "71", 
        "di": "24", 
        "xian": "22", 
        "name": "新埔镇", 
        "level": 3
    }, 
    {
        "code": "712423", 
        "sheng": "71", 
        "di": "24", 
        "xian": "23", 
        "name": "关西镇", 
        "level": 3
    }, 
    {
        "code": "712424", 
        "sheng": "71", 
        "di": "24", 
        "xian": "24", 
        "name": "湖口乡", 
        "level": 3
    }, 
    {
        "code": "712425", 
        "sheng": "71", 
        "di": "24", 
        "xian": "25", 
        "name": "新丰乡", 
        "level": 3
    }, 
    {
        "code": "712426", 
        "sheng": "71", 
        "di": "24", 
        "xian": "26", 
        "name": "芎林乡", 
        "level": 3
    }, 
    {
        "code": "712427", 
        "sheng": "71", 
        "di": "24", 
        "xian": "27", 
        "name": "横山乡", 
        "level": 3
    }, 
    {
        "code": "712428", 
        "sheng": "71", 
        "di": "24", 
        "xian": "28", 
        "name": "北埔乡", 
        "level": 3
    }, 
    {
        "code": "712429", 
        "sheng": "71", 
        "di": "24", 
        "xian": "29", 
        "name": "宝山乡", 
        "level": 3
    }, 
    {
        "code": "712430", 
        "sheng": "71", 
        "di": "24", 
        "xian": "30", 
        "name": "峨眉乡", 
        "level": 3
    }, 
    {
        "code": "712431", 
        "sheng": "71", 
        "di": "24", 
        "xian": "31", 
        "name": "尖石乡", 
        "level": 3
    }, 
    {
        "code": "712432", 
        "sheng": "71", 
        "di": "24", 
        "xian": "32", 
        "name": "五峰乡", 
        "level": 3
    }, 
    {
        "code": "712500", 
        "sheng": "71", 
        "di": "25", 
        "xian": "00", 
        "name": "苗栗县", 
        "level": 2
    }, 
    {
        "code": "712501", 
        "sheng": "71", 
        "di": "25", 
        "xian": "01", 
        "name": "苗栗市", 
        "level": 3
    }, 
    {
        "code": "712521", 
        "sheng": "71", 
        "di": "25", 
        "xian": "21", 
        "name": "苑里镇", 
        "level": 3
    }, 
    {
        "code": "712522", 
        "sheng": "71", 
        "di": "25", 
        "xian": "22", 
        "name": "通霄镇", 
        "level": 3
    }, 
    {
        "code": "712523", 
        "sheng": "71", 
        "di": "25", 
        "xian": "23", 
        "name": "竹南镇", 
        "level": 3
    }, 
    {
        "code": "712524", 
        "sheng": "71", 
        "di": "25", 
        "xian": "24", 
        "name": "头份市", 
        "level": 3
    }, 
    {
        "code": "712525", 
        "sheng": "71", 
        "di": "25", 
        "xian": "25", 
        "name": "后龙镇", 
        "level": 3
    }, 
    {
        "code": "712526", 
        "sheng": "71", 
        "di": "25", 
        "xian": "26", 
        "name": "卓兰镇", 
        "level": 3
    }, 
    {
        "code": "712527", 
        "sheng": "71", 
        "di": "25", 
        "xian": "27", 
        "name": "大湖乡", 
        "level": 3
    }, 
    {
        "code": "712528", 
        "sheng": "71", 
        "di": "25", 
        "xian": "28", 
        "name": "公馆乡", 
        "level": 3
    }, 
    {
        "code": "712529", 
        "sheng": "71", 
        "di": "25", 
        "xian": "29", 
        "name": "铜锣乡", 
        "level": 3
    }, 
    {
        "code": "712530", 
        "sheng": "71", 
        "di": "25", 
        "xian": "30", 
        "name": "南庄乡", 
        "level": 3
    }, 
    {
        "code": "712531", 
        "sheng": "71", 
        "di": "25", 
        "xian": "31", 
        "name": "头屋乡", 
        "level": 3
    }, 
    {
        "code": "712532", 
        "sheng": "71", 
        "di": "25", 
        "xian": "32", 
        "name": "三义乡", 
        "level": 3
    }, 
    {
        "code": "712533", 
        "sheng": "71", 
        "di": "25", 
        "xian": "33", 
        "name": "西湖乡", 
        "level": 3
    }, 
    {
        "code": "712534", 
        "sheng": "71", 
        "di": "25", 
        "xian": "34", 
        "name": "造桥乡", 
        "level": 3
    }, 
    {
        "code": "712535", 
        "sheng": "71", 
        "di": "25", 
        "xian": "35", 
        "name": "三湾乡", 
        "level": 3
    }, 
    {
        "code": "712536", 
        "sheng": "71", 
        "di": "25", 
        "xian": "36", 
        "name": "狮潭乡", 
        "level": 3
    }, 
    {
        "code": "712537", 
        "sheng": "71", 
        "di": "25", 
        "xian": "37", 
        "name": "泰安乡", 
        "level": 3
    }, 
    {
        "code": "712700", 
        "sheng": "71", 
        "di": "27", 
        "xian": "00", 
        "name": "彰化县", 
        "level": 2
    }, 
    {
        "code": "712701", 
        "sheng": "71", 
        "di": "27", 
        "xian": "01", 
        "name": "彰化市", 
        "level": 3
    }, 
    {
        "code": "712721", 
        "sheng": "71", 
        "di": "27", 
        "xian": "21", 
        "name": "鹿港镇", 
        "level": 3
    }, 
    {
        "code": "712722", 
        "sheng": "71", 
        "di": "27", 
        "xian": "22", 
        "name": "和美镇", 
        "level": 3
    }, 
    {
        "code": "712723", 
        "sheng": "71", 
        "di": "27", 
        "xian": "23", 
        "name": "线西乡", 
        "level": 3
    }, 
    {
        "code": "712724", 
        "sheng": "71", 
        "di": "27", 
        "xian": "24", 
        "name": "伸港乡", 
        "level": 3
    }, 
    {
        "code": "712725", 
        "sheng": "71", 
        "di": "27", 
        "xian": "25", 
        "name": "福兴乡", 
        "level": 3
    }, 
    {
        "code": "712726", 
        "sheng": "71", 
        "di": "27", 
        "xian": "26", 
        "name": "秀水乡", 
        "level": 3
    }, 
    {
        "code": "712727", 
        "sheng": "71", 
        "di": "27", 
        "xian": "27", 
        "name": "花坛乡", 
        "level": 3
    }, 
    {
        "code": "712728", 
        "sheng": "71", 
        "di": "27", 
        "xian": "28", 
        "name": "芬园乡", 
        "level": 3
    }, 
    {
        "code": "712729", 
        "sheng": "71", 
        "di": "27", 
        "xian": "29", 
        "name": "员林市", 
        "level": 3
    }, 
    {
        "code": "712730", 
        "sheng": "71", 
        "di": "27", 
        "xian": "30", 
        "name": "溪湖镇", 
        "level": 3
    }, 
    {
        "code": "712731", 
        "sheng": "71", 
        "di": "27", 
        "xian": "31", 
        "name": "田中镇", 
        "level": 3
    }, 
    {
        "code": "712732", 
        "sheng": "71", 
        "di": "27", 
        "xian": "32", 
        "name": "大村乡", 
        "level": 3
    }, 
    {
        "code": "712733", 
        "sheng": "71", 
        "di": "27", 
        "xian": "33", 
        "name": "埔盐乡", 
        "level": 3
    }, 
    {
        "code": "712734", 
        "sheng": "71", 
        "di": "27", 
        "xian": "34", 
        "name": "埔心乡", 
        "level": 3
    }, 
    {
        "code": "712735", 
        "sheng": "71", 
        "di": "27", 
        "xian": "35", 
        "name": "永靖乡", 
        "level": 3
    }, 
    {
        "code": "712736", 
        "sheng": "71", 
        "di": "27", 
        "xian": "36", 
        "name": "社头乡", 
        "level": 3
    }, 
    {
        "code": "712737", 
        "sheng": "71", 
        "di": "27", 
        "xian": "37", 
        "name": "二水乡", 
        "level": 3
    }, 
    {
        "code": "712738", 
        "sheng": "71", 
        "di": "27", 
        "xian": "38", 
        "name": "北斗镇", 
        "level": 3
    }, 
    {
        "code": "712739", 
        "sheng": "71", 
        "di": "27", 
        "xian": "39", 
        "name": "二林镇", 
        "level": 3
    }, 
    {
        "code": "712740", 
        "sheng": "71", 
        "di": "27", 
        "xian": "40", 
        "name": "田尾乡", 
        "level": 3
    }, 
    {
        "code": "712741", 
        "sheng": "71", 
        "di": "27", 
        "xian": "41", 
        "name": "埤头乡", 
        "level": 3
    }, 
    {
        "code": "712742", 
        "sheng": "71", 
        "di": "27", 
        "xian": "42", 
        "name": "芳苑乡", 
        "level": 3
    }, 
    {
        "code": "712743", 
        "sheng": "71", 
        "di": "27", 
        "xian": "43", 
        "name": "大城乡", 
        "level": 3
    }, 
    {
        "code": "712744", 
        "sheng": "71", 
        "di": "27", 
        "xian": "44", 
        "name": "竹塘乡", 
        "level": 3
    }, 
    {
        "code": "712745", 
        "sheng": "71", 
        "di": "27", 
        "xian": "45", 
        "name": "溪州乡", 
        "level": 3
    }, 
    {
        "code": "712800", 
        "sheng": "71", 
        "di": "28", 
        "xian": "00", 
        "name": "南投县", 
        "level": 2
    }, 
    {
        "code": "712801", 
        "sheng": "71", 
        "di": "28", 
        "xian": "01", 
        "name": "南投市", 
        "level": 3
    }, 
    {
        "code": "712821", 
        "sheng": "71", 
        "di": "28", 
        "xian": "21", 
        "name": "埔里镇", 
        "level": 3
    }, 
    {
        "code": "712822", 
        "sheng": "71", 
        "di": "28", 
        "xian": "22", 
        "name": "草屯镇", 
        "level": 3
    }, 
    {
        "code": "712823", 
        "sheng": "71", 
        "di": "28", 
        "xian": "23", 
        "name": "竹山镇", 
        "level": 3
    }, 
    {
        "code": "712824", 
        "sheng": "71", 
        "di": "28", 
        "xian": "24", 
        "name": "集集镇", 
        "level": 3
    }, 
    {
        "code": "712825", 
        "sheng": "71", 
        "di": "28", 
        "xian": "25", 
        "name": "名间乡", 
        "level": 3
    }, 
    {
        "code": "712826", 
        "sheng": "71", 
        "di": "28", 
        "xian": "26", 
        "name": "鹿谷乡", 
        "level": 3
    }, 
    {
        "code": "712827", 
        "sheng": "71", 
        "di": "28", 
        "xian": "27", 
        "name": "中寮乡", 
        "level": 3
    }, 
    {
        "code": "712828", 
        "sheng": "71", 
        "di": "28", 
        "xian": "28", 
        "name": "鱼池乡", 
        "level": 3
    }, 
    {
        "code": "712829", 
        "sheng": "71", 
        "di": "28", 
        "xian": "29", 
        "name": "国姓乡", 
        "level": 3
    }, 
    {
        "code": "712830", 
        "sheng": "71", 
        "di": "28", 
        "xian": "30", 
        "name": "水里乡", 
        "level": 3
    }, 
    {
        "code": "712831", 
        "sheng": "71", 
        "di": "28", 
        "xian": "31", 
        "name": "信义乡", 
        "level": 3
    }, 
    {
        "code": "712832", 
        "sheng": "71", 
        "di": "28", 
        "xian": "32", 
        "name": "仁爱乡", 
        "level": 3
    }, 
    {
        "code": "712900", 
        "sheng": "71", 
        "di": "29", 
        "xian": "00", 
        "name": "云林县", 
        "level": 2
    }, 
    {
        "code": "712901", 
        "sheng": "71", 
        "di": "29", 
        "xian": "01", 
        "name": "斗六市", 
        "level": 3
    }, 
    {
        "code": "712921", 
        "sheng": "71", 
        "di": "29", 
        "xian": "21", 
        "name": "斗南镇", 
        "level": 3
    }, 
    {
        "code": "712922", 
        "sheng": "71", 
        "di": "29", 
        "xian": "22", 
        "name": "虎尾镇", 
        "level": 3
    }, 
    {
        "code": "712923", 
        "sheng": "71", 
        "di": "29", 
        "xian": "23", 
        "name": "西螺镇", 
        "level": 3
    }, 
    {
        "code": "712924", 
        "sheng": "71", 
        "di": "29", 
        "xian": "24", 
        "name": "土库镇", 
        "level": 3
    }, 
    {
        "code": "712925", 
        "sheng": "71", 
        "di": "29", 
        "xian": "25", 
        "name": "北港镇", 
        "level": 3
    }, 
    {
        "code": "712926", 
        "sheng": "71", 
        "di": "29", 
        "xian": "26", 
        "name": "古坑乡", 
        "level": 3
    }, 
    {
        "code": "712927", 
        "sheng": "71", 
        "di": "29", 
        "xian": "27", 
        "name": "大埤乡", 
        "level": 3
    }, 
    {
        "code": "712928", 
        "sheng": "71", 
        "di": "29", 
        "xian": "28", 
        "name": "莿桐乡", 
        "level": 3
    }, 
    {
        "code": "712929", 
        "sheng": "71", 
        "di": "29", 
        "xian": "29", 
        "name": "林内乡", 
        "level": 3
    }, 
    {
        "code": "712930", 
        "sheng": "71", 
        "di": "29", 
        "xian": "30", 
        "name": "二仑乡", 
        "level": 3
    }, 
    {
        "code": "712931", 
        "sheng": "71", 
        "di": "29", 
        "xian": "31", 
        "name": "仑背乡", 
        "level": 3
    }, 
    {
        "code": "712932", 
        "sheng": "71", 
        "di": "29", 
        "xian": "32", 
        "name": "麦寮乡", 
        "level": 3
    }, 
    {
        "code": "712933", 
        "sheng": "71", 
        "di": "29", 
        "xian": "33", 
        "name": "东势乡", 
        "level": 3
    }, 
    {
        "code": "712934", 
        "sheng": "71", 
        "di": "29", 
        "xian": "34", 
        "name": "褒忠乡", 
        "level": 3
    }, 
    {
        "code": "712935", 
        "sheng": "71", 
        "di": "29", 
        "xian": "35", 
        "name": "台西乡", 
        "level": 3
    }, 
    {
        "code": "712936", 
        "sheng": "71", 
        "di": "29", 
        "xian": "36", 
        "name": "元长乡", 
        "level": 3
    }, 
    {
        "code": "712937", 
        "sheng": "71", 
        "di": "29", 
        "xian": "37", 
        "name": "四湖乡", 
        "level": 3
    }, 
    {
        "code": "712938", 
        "sheng": "71", 
        "di": "29", 
        "xian": "38", 
        "name": "口湖乡", 
        "level": 3
    }, 
    {
        "code": "712939", 
        "sheng": "71", 
        "di": "29", 
        "xian": "39", 
        "name": "水林乡", 
        "level": 3
    }, 
    {
        "code": "713000", 
        "sheng": "71", 
        "di": "30", 
        "xian": "00", 
        "name": "嘉义县", 
        "level": 2
    }, 
    {
        "code": "713001", 
        "sheng": "71", 
        "di": "30", 
        "xian": "01", 
        "name": "太保市", 
        "level": 3
    }, 
    {
        "code": "713002", 
        "sheng": "71", 
        "di": "30", 
        "xian": "02", 
        "name": "朴子市", 
        "level": 3
    }, 
    {
        "code": "713023", 
        "sheng": "71", 
        "di": "30", 
        "xian": "23", 
        "name": "布袋镇", 
        "level": 3
    }, 
    {
        "code": "713024", 
        "sheng": "71", 
        "di": "30", 
        "xian": "24", 
        "name": "大林镇", 
        "level": 3
    }, 
    {
        "code": "713025", 
        "sheng": "71", 
        "di": "30", 
        "xian": "25", 
        "name": "民雄乡", 
        "level": 3
    }, 
    {
        "code": "713026", 
        "sheng": "71", 
        "di": "30", 
        "xian": "26", 
        "name": "溪口乡", 
        "level": 3
    }, 
    {
        "code": "713027", 
        "sheng": "71", 
        "di": "30", 
        "xian": "27", 
        "name": "新港乡", 
        "level": 3
    }, 
    {
        "code": "713028", 
        "sheng": "71", 
        "di": "30", 
        "xian": "28", 
        "name": "六脚乡", 
        "level": 3
    }, 
    {
        "code": "713029", 
        "sheng": "71", 
        "di": "30", 
        "xian": "29", 
        "name": "东石乡", 
        "level": 3
    }, 
    {
        "code": "713030", 
        "sheng": "71", 
        "di": "30", 
        "xian": "30", 
        "name": "义竹乡", 
        "level": 3
    }, 
    {
        "code": "713031", 
        "sheng": "71", 
        "di": "30", 
        "xian": "31", 
        "name": "鹿草乡", 
        "level": 3
    }, 
    {
        "code": "713032", 
        "sheng": "71", 
        "di": "30", 
        "xian": "32", 
        "name": "水上乡", 
        "level": 3
    }, 
    {
        "code": "713033", 
        "sheng": "71", 
        "di": "30", 
        "xian": "33", 
        "name": "中埔乡", 
        "level": 3
    }, 
    {
        "code": "713034", 
        "sheng": "71", 
        "di": "30", 
        "xian": "34", 
        "name": "竹崎乡", 
        "level": 3
    }, 
    {
        "code": "713035", 
        "sheng": "71", 
        "di": "30", 
        "xian": "35", 
        "name": "梅山乡", 
        "level": 3
    }, 
    {
        "code": "713036", 
        "sheng": "71", 
        "di": "30", 
        "xian": "36", 
        "name": "番路乡", 
        "level": 3
    }, 
    {
        "code": "713037", 
        "sheng": "71", 
        "di": "30", 
        "xian": "37", 
        "name": "大埔乡", 
        "level": 3
    }, 
    {
        "code": "713038", 
        "sheng": "71", 
        "di": "30", 
        "xian": "38", 
        "name": "阿里山乡", 
        "level": 3
    }, 
    {
        "code": "713300", 
        "sheng": "71", 
        "di": "33", 
        "xian": "00", 
        "name": "屏东县", 
        "level": 2
    }, 
    {
        "code": "713301", 
        "sheng": "71", 
        "di": "33", 
        "xian": "01", 
        "name": "屏东市", 
        "level": 3
    }, 
    {
        "code": "713321", 
        "sheng": "71", 
        "di": "33", 
        "xian": "21", 
        "name": "潮州镇", 
        "level": 3
    }, 
    {
        "code": "713322", 
        "sheng": "71", 
        "di": "33", 
        "xian": "22", 
        "name": "东港镇", 
        "level": 3
    }, 
    {
        "code": "713323", 
        "sheng": "71", 
        "di": "33", 
        "xian": "23", 
        "name": "恒春镇", 
        "level": 3
    }, 
    {
        "code": "713324", 
        "sheng": "71", 
        "di": "33", 
        "xian": "24", 
        "name": "万丹乡", 
        "level": 3
    }, 
    {
        "code": "713325", 
        "sheng": "71", 
        "di": "33", 
        "xian": "25", 
        "name": "长治乡", 
        "level": 3
    }, 
    {
        "code": "713326", 
        "sheng": "71", 
        "di": "33", 
        "xian": "26", 
        "name": "麟洛乡", 
        "level": 3
    }, 
    {
        "code": "713327", 
        "sheng": "71", 
        "di": "33", 
        "xian": "27", 
        "name": "九如乡", 
        "level": 3
    }, 
    {
        "code": "713328", 
        "sheng": "71", 
        "di": "33", 
        "xian": "28", 
        "name": "里港乡", 
        "level": 3
    }, 
    {
        "code": "713329", 
        "sheng": "71", 
        "di": "33", 
        "xian": "29", 
        "name": "盐埔乡", 
        "level": 3
    }, 
    {
        "code": "713330", 
        "sheng": "71", 
        "di": "33", 
        "xian": "30", 
        "name": "高树乡", 
        "level": 3
    }, 
    {
        "code": "713331", 
        "sheng": "71", 
        "di": "33", 
        "xian": "31", 
        "name": "万峦乡", 
        "level": 3
    }, 
    {
        "code": "713332", 
        "sheng": "71", 
        "di": "33", 
        "xian": "32", 
        "name": "内埔乡", 
        "level": 3
    }, 
    {
        "code": "713333", 
        "sheng": "71", 
        "di": "33", 
        "xian": "33", 
        "name": "竹田乡", 
        "level": 3
    }, 
    {
        "code": "713334", 
        "sheng": "71", 
        "di": "33", 
        "xian": "34", 
        "name": "新埤乡", 
        "level": 3
    }, 
    {
        "code": "713335", 
        "sheng": "71", 
        "di": "33", 
        "xian": "35", 
        "name": "枋寮乡", 
        "level": 3
    }, 
    {
        "code": "713336", 
        "sheng": "71", 
        "di": "33", 
        "xian": "36", 
        "name": "新园乡", 
        "level": 3
    }, 
    {
        "code": "713337", 
        "sheng": "71", 
        "di": "33", 
        "xian": "37", 
        "name": "崁顶乡", 
        "level": 3
    }, 
    {
        "code": "713338", 
        "sheng": "71", 
        "di": "33", 
        "xian": "38", 
        "name": "林边乡", 
        "level": 3
    }, 
    {
        "code": "713339", 
        "sheng": "71", 
        "di": "33", 
        "xian": "39", 
        "name": "南州乡", 
        "level": 3
    }, 
    {
        "code": "713340", 
        "sheng": "71", 
        "di": "33", 
        "xian": "40", 
        "name": "佳冬乡", 
        "level": 3
    }, 
    {
        "code": "713341", 
        "sheng": "71", 
        "di": "33", 
        "xian": "41", 
        "name": "琉球乡", 
        "level": 3
    }, 
    {
        "code": "713342", 
        "sheng": "71", 
        "di": "33", 
        "xian": "42", 
        "name": "车城乡", 
        "level": 3
    }, 
    {
        "code": "713343", 
        "sheng": "71", 
        "di": "33", 
        "xian": "43", 
        "name": "满州乡", 
        "level": 3
    }, 
    {
        "code": "713344", 
        "sheng": "71", 
        "di": "33", 
        "xian": "44", 
        "name": "枋山乡", 
        "level": 3
    }, 
    {
        "code": "713345", 
        "sheng": "71", 
        "di": "33", 
        "xian": "45", 
        "name": "三地门乡", 
        "level": 3
    }, 
    {
        "code": "713346", 
        "sheng": "71", 
        "di": "33", 
        "xian": "46", 
        "name": "雾台乡", 
        "level": 3
    }, 
    {
        "code": "713347", 
        "sheng": "71", 
        "di": "33", 
        "xian": "47", 
        "name": "玛家乡", 
        "level": 3
    }, 
    {
        "code": "713348", 
        "sheng": "71", 
        "di": "33", 
        "xian": "48", 
        "name": "泰武乡", 
        "level": 3
    }, 
    {
        "code": "713349", 
        "sheng": "71", 
        "di": "33", 
        "xian": "49", 
        "name": "来义乡", 
        "level": 3
    }, 
    {
        "code": "713350", 
        "sheng": "71", 
        "di": "33", 
        "xian": "50", 
        "name": "春日乡", 
        "level": 3
    }, 
    {
        "code": "713351", 
        "sheng": "71", 
        "di": "33", 
        "xian": "51", 
        "name": "狮子乡", 
        "level": 3
    }, 
    {
        "code": "713352", 
        "sheng": "71", 
        "di": "33", 
        "xian": "52", 
        "name": "牡丹乡", 
        "level": 3
    }, 
    {
        "code": "713400", 
        "sheng": "71", 
        "di": "34", 
        "xian": "00", 
        "name": "台东县", 
        "level": 2
    }, 
    {
        "code": "713401", 
        "sheng": "71", 
        "di": "34", 
        "xian": "01", 
        "name": "台东市", 
        "level": 3
    }, 
    {
        "code": "713421", 
        "sheng": "71", 
        "di": "34", 
        "xian": "21", 
        "name": "成功镇", 
        "level": 3
    }, 
    {
        "code": "713422", 
        "sheng": "71", 
        "di": "34", 
        "xian": "22", 
        "name": "关山镇", 
        "level": 3
    }, 
    {
        "code": "713423", 
        "sheng": "71", 
        "di": "34", 
        "xian": "23", 
        "name": "卑南乡", 
        "level": 3
    }, 
    {
        "code": "713424", 
        "sheng": "71", 
        "di": "34", 
        "xian": "24", 
        "name": "鹿野乡", 
        "level": 3
    }, 
    {
        "code": "713425", 
        "sheng": "71", 
        "di": "34", 
        "xian": "25", 
        "name": "池上乡", 
        "level": 3
    }, 
    {
        "code": "713426", 
        "sheng": "71", 
        "di": "34", 
        "xian": "26", 
        "name": "东河乡", 
        "level": 3
    }, 
    {
        "code": "713427", 
        "sheng": "71", 
        "di": "34", 
        "xian": "27", 
        "name": "长滨乡", 
        "level": 3
    }, 
    {
        "code": "713428", 
        "sheng": "71", 
        "di": "34", 
        "xian": "28", 
        "name": "太麻里乡", 
        "level": 3
    }, 
    {
        "code": "713429", 
        "sheng": "71", 
        "di": "34", 
        "xian": "29", 
        "name": "大武乡", 
        "level": 3
    }, 
    {
        "code": "713430", 
        "sheng": "71", 
        "di": "34", 
        "xian": "30", 
        "name": "绿岛乡", 
        "level": 3
    }, 
    {
        "code": "713431", 
        "sheng": "71", 
        "di": "34", 
        "xian": "31", 
        "name": "海端乡", 
        "level": 3
    }, 
    {
        "code": "713432", 
        "sheng": "71", 
        "di": "34", 
        "xian": "32", 
        "name": "延平乡", 
        "level": 3
    }, 
    {
        "code": "713433", 
        "sheng": "71", 
        "di": "34", 
        "xian": "33", 
        "name": "金峰乡", 
        "level": 3
    }, 
    {
        "code": "713434", 
        "sheng": "71", 
        "di": "34", 
        "xian": "34", 
        "name": "达仁乡", 
        "level": 3
    }, 
    {
        "code": "713435", 
        "sheng": "71", 
        "di": "34", 
        "xian": "35", 
        "name": "兰屿乡", 
        "level": 3
    }, 
    {
        "code": "713500", 
        "sheng": "71", 
        "di": "35", 
        "xian": "00", 
        "name": "花莲县", 
        "level": 2
    }, 
    {
        "code": "713501", 
        "sheng": "71", 
        "di": "35", 
        "xian": "01", 
        "name": "花莲市", 
        "level": 3
    }, 
    {
        "code": "713521", 
        "sheng": "71", 
        "di": "35", 
        "xian": "21", 
        "name": "凤林镇", 
        "level": 3
    }, 
    {
        "code": "713522", 
        "sheng": "71", 
        "di": "35", 
        "xian": "22", 
        "name": "玉里镇", 
        "level": 3
    }, 
    {
        "code": "713523", 
        "sheng": "71", 
        "di": "35", 
        "xian": "23", 
        "name": "新城乡", 
        "level": 3
    }, 
    {
        "code": "713524", 
        "sheng": "71", 
        "di": "35", 
        "xian": "24", 
        "name": "吉安乡", 
        "level": 3
    }, 
    {
        "code": "713525", 
        "sheng": "71", 
        "di": "35", 
        "xian": "25", 
        "name": "寿丰乡", 
        "level": 3
    }, 
    {
        "code": "713526", 
        "sheng": "71", 
        "di": "35", 
        "xian": "26", 
        "name": "光复乡", 
        "level": 3
    }, 
    {
        "code": "713527", 
        "sheng": "71", 
        "di": "35", 
        "xian": "27", 
        "name": "丰滨乡", 
        "level": 3
    }, 
    {
        "code": "713528", 
        "sheng": "71", 
        "di": "35", 
        "xian": "28", 
        "name": "瑞穗乡", 
        "level": 3
    }, 
    {
        "code": "713529", 
        "sheng": "71", 
        "di": "35", 
        "xian": "29", 
        "name": "富里乡", 
        "level": 3
    }, 
    {
        "code": "713530", 
        "sheng": "71", 
        "di": "35", 
        "xian": "30", 
        "name": "秀林乡", 
        "level": 3
    }, 
    {
        "code": "713531", 
        "sheng": "71", 
        "di": "35", 
        "xian": "31", 
        "name": "万荣乡", 
        "level": 3
    }, 
    {
        "code": "713532", 
        "sheng": "71", 
        "di": "35", 
        "xian": "32", 
        "name": "卓溪乡", 
        "level": 3
    }, 
    {
        "code": "713600", 
        "sheng": "71", 
        "di": "36", 
        "xian": "00", 
        "name": "澎湖县", 
        "level": 2
    }, 
    {
        "code": "713601", 
        "sheng": "71", 
        "di": "36", 
        "xian": "01", 
        "name": "马公市", 
        "level": 3
    }, 
    {
        "code": "713621", 
        "sheng": "71", 
        "di": "36", 
        "xian": "21", 
        "name": "湖西乡", 
        "level": 3
    }, 
    {
        "code": "713622", 
        "sheng": "71", 
        "di": "36", 
        "xian": "22", 
        "name": "白沙乡", 
        "level": 3
    }, 
    {
        "code": "713623", 
        "sheng": "71", 
        "di": "36", 
        "xian": "23", 
        "name": "西屿乡", 
        "level": 3
    }, 
    {
        "code": "713624", 
        "sheng": "71", 
        "di": "36", 
        "xian": "24", 
        "name": "望安乡", 
        "level": 3
    }, 
    {
        "code": "713625", 
        "sheng": "71", 
        "di": "36", 
        "xian": "25", 
        "name": "七美乡", 
        "level": 3
    }, 
    {
        "code": "713700", 
        "sheng": "71", 
        "di": "37", 
        "xian": "00", 
        "name": "金门县", 
        "level": 2
    }, 
    {
        "code": "713701", 
        "sheng": "71", 
        "di": "37", 
        "xian": "01", 
        "name": "金城镇", 
        "level": 3
    }, 
    {
        "code": "713702", 
        "sheng": "71", 
        "di": "37", 
        "xian": "02", 
        "name": "金湖镇", 
        "level": 3
    }, 
    {
        "code": "713703", 
        "sheng": "71", 
        "di": "37", 
        "xian": "03", 
        "name": "金沙镇", 
        "level": 3
    }, 
    {
        "code": "713704", 
        "sheng": "71", 
        "di": "37", 
        "xian": "04", 
        "name": "金宁乡", 
        "level": 3
    }, 
    {
        "code": "713705", 
        "sheng": "71", 
        "di": "37", 
        "xian": "05", 
        "name": "烈屿乡", 
        "level": 3
    }, 
    {
        "code": "713706", 
        "sheng": "71", 
        "di": "37", 
        "xian": "06", 
        "name": "乌丘乡", 
        "level": 3
    }, 
    {
        "code": "713800", 
        "sheng": "71", 
        "di": "38", 
        "xian": "00", 
        "name": "连江县", 
        "level": 2
    }, 
    {
        "code": "713801", 
        "sheng": "71", 
        "di": "38", 
        "xian": "01", 
        "name": "南竿乡", 
        "level": 3
    }, 
    {
        "code": "713802", 
        "sheng": "71", 
        "di": "38", 
        "xian": "02", 
        "name": "北竿乡", 
        "level": 3
    }, 
    {
        "code": "713803", 
        "sheng": "71", 
        "di": "38", 
        "xian": "03", 
        "name": "莒光乡", 
        "level": 3
    }, 
    {
        "code": "713804", 
        "sheng": "71", 
        "di": "38", 
        "xian": "04", 
        "name": "东引乡", 
        "level": 3
    }, 
    {
        "code": "810000", 
        "sheng": "81", 
        "di": "00", 
        "xian": "00", 
        "name": "香港特别行政区", 
        "level": 1
    }, 
    {
        "code": "810100", 
        "sheng": "81", 
        "di": "01", 
        "xian": "00", 
        "name": "香港岛", 
        "level": 2
    }, 
    {
        "code": "810101", 
        "sheng": "81", 
        "di": "01", 
        "xian": "01", 
        "name": "中西区", 
        "level": 3
    }, 
    {
        "code": "810102", 
        "sheng": "81", 
        "di": "01", 
        "xian": "02", 
        "name": "湾仔区", 
        "level": 3
    }, 
    {
        "code": "810103", 
        "sheng": "81", 
        "di": "01", 
        "xian": "03", 
        "name": "东区", 
        "level": 3
    }, 
    {
        "code": "810104", 
        "sheng": "81", 
        "di": "01", 
        "xian": "04", 
        "name": "南区", 
        "level": 3
    }, 
    {
        "code": "810200", 
        "sheng": "81", 
        "di": "02", 
        "xian": "00", 
        "name": "九龙", 
        "level": 2
    }, 
    {
        "code": "810201", 
        "sheng": "81", 
        "di": "02", 
        "xian": "01", 
        "name": "油尖旺区", 
        "level": 3
    }, 
    {
        "code": "810202", 
        "sheng": "81", 
        "di": "02", 
        "xian": "02", 
        "name": "深水埗区", 
        "level": 3
    }, 
    {
        "code": "810203", 
        "sheng": "81", 
        "di": "02", 
        "xian": "03", 
        "name": "九龙城区", 
        "level": 3
    }, 
    {
        "code": "810204", 
        "sheng": "81", 
        "di": "02", 
        "xian": "04", 
        "name": "黄大仙区", 
        "level": 3
    }, 
    {
        "code": "810205", 
        "sheng": "81", 
        "di": "02", 
        "xian": "05", 
        "name": "观塘区", 
        "level": 3
    }, 
    {
        "code": "810300", 
        "sheng": "81", 
        "di": "03", 
        "xian": "00", 
        "name": "新界", 
        "level": 2
    }, 
    {
        "code": "810301", 
        "sheng": "81", 
        "di": "03", 
        "xian": "01", 
        "name": "荃湾区", 
        "level": 3
    }, 
    {
        "code": "810302", 
        "sheng": "81", 
        "di": "03", 
        "xian": "02", 
        "name": "屯门区", 
        "level": 3
    }, 
    {
        "code": "810303", 
        "sheng": "81", 
        "di": "03", 
        "xian": "03", 
        "name": "元朗区", 
        "level": 3
    }, 
    {
        "code": "810304", 
        "sheng": "81", 
        "di": "03", 
        "xian": "04", 
        "name": "北区", 
        "level": 3
    }, 
    {
        "code": "810305", 
        "sheng": "81", 
        "di": "03", 
        "xian": "05", 
        "name": "大埔区", 
        "level": 3
    }, 
    {
        "code": "810306", 
        "sheng": "81", 
        "di": "03", 
        "xian": "06", 
        "name": "西贡区", 
        "level": 3
    }, 
    {
        "code": "810307", 
        "sheng": "81", 
        "di": "03", 
        "xian": "07", 
        "name": "沙田区", 
        "level": 3
    }, 
    {
        "code": "810308", 
        "sheng": "81", 
        "di": "03", 
        "xian": "08", 
        "name": "葵青区", 
        "level": 3
    }, 
    {
        "code": "810309", 
        "sheng": "81", 
        "di": "03", 
        "xian": "09", 
        "name": "离岛区", 
        "level": 3
    }, 
    {
        "code": "820000", 
        "sheng": "82", 
        "di": "00", 
        "xian": "00", 
        "name": "澳门特别行政区", 
        "level": 1
    }, 
    {
        "code": "820100", 
        "sheng": "82", 
        "di": "01", 
        "xian": "00", 
        "name": "澳门半岛", 
        "level": 2
    }, 
    {
        "code": "820101", 
        "sheng": "82", 
        "di": "01", 
        "xian": "01", 
        "name": "花地玛堂区", 
        "level": 3
    }, 
    {
        "code": "820102", 
        "sheng": "82", 
        "di": "01", 
        "xian": "02", 
        "name": "圣安多尼堂区", 
        "level": 3
    }, 
    {
        "code": "820103", 
        "sheng": "82", 
        "di": "01", 
        "xian": "03", 
        "name": "大堂区", 
        "level": 3
    }, 
    {
        "code": "820104", 
        "sheng": "82", 
        "di": "01", 
        "xian": "04", 
        "name": "望德堂区", 
        "level": 3
    }, 
    {
        "code": "820105", 
        "sheng": "82", 
        "di": "01", 
        "xian": "05", 
        "name": "风顺堂区", 
        "level": 3
    }, 
    {
        "code": "820200", 
        "sheng": "82", 
        "di": "02", 
        "xian": "00", 
        "name": "氹仔岛", 
        "level": 2
    }, 
    {
        "code": "820201", 
        "sheng": "82", 
        "di": "02", 
        "xian": "01", 
        "name": "嘉模堂区", 
        "level": 3
    }, 
    {
        "code": "820300", 
        "sheng": "82", 
        "di": "03", 
        "xian": "00", 
        "name": "路环岛", 
        "level": 2
    }, 
    {
        "code": "820301", 
        "sheng": "82", 
        "di": "03", 
        "xian": "01", 
        "name": "圣方济各堂区", 
        "level": 3
    }
];

  callBack(str);
}
module.exports.getAreaInfo = getAreaInfo;