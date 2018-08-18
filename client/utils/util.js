const config = require("../config.js");

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatterDateTime() {
  var date = new Date()
  var month = date.getMonth() + 1
  var datetime = date.getFullYear()
    + ""// "年"
    + (month >= 10 ? month : "0" + month)
    + ""// "月"
    + (date.getDate() < 10 ? "0" + date.getDate() : date
      .getDate())
    + ""
    + (date.getHours() < 10 ? "0" + date.getHours() : date
      .getHours())
    + ""
    + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
      .getMinutes())
    + ""
    + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
      .getSeconds());
  return datetime;
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 显示繁忙提示
var showBusy = text => wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
    title: text,
    icon: 'success'
})

// 显示失败提示
var showModel = (title, content) => {
    wx.hideToast();

    wx.showModal({
        title,
        content: JSON.stringify(content),
        showCancel: false
    })
}
//loading提示
function showLoading(title = "请稍后", duration = 5000) {
  wx.showToast({
    title: title,
    icon: 'loading',
    duration: (duration <= 0) ? 5000 : duration
  });
}

function sourceRequest(parameters,callBack) {
  showBusy('请求中...')
  var that = this
  var options = {
    url: config.source.sourceURL,
    dataType: 'json',
    data: {
//      "showapi_timestamp": formatterDateTime(),
      showapi_appid: '72891', //这里需要改成自己的appid
      showapi_sign: '5b99cc7496a54aefbbf1f434eaaba440'  //这里需要改成自己的应用的密钥secret
    },
//    login: true,
    success(result) {
      showSuccess('请求成功完成');
      console.log('request success', result);
/*      that.setData({
        requestResult: JSON.stringify(result.showapi_res_code)
      })*/
      callBack(result);
    },
    fail(error) {
      showModel('请求失败', error);
      console.log('request fail', error);
    }
  }
  options.data.type = parameters.queryType;
  options.data.title = parameters.title;
  options.data.page = parameters.page;
  wx.request(options);
/*  if (this.data.takeSession) {  // 使用 qcloud.request 带登录态登录
    qcloud.request(options)
  } else {    // 使用 wx.request 则不带登录态
    wx.request(options)
  }*/
}

module.exports = {
  sourceRequest: sourceRequest,
  showBusy,
  showSuccess,
  showLoading: showLoading,
  showModel
}
