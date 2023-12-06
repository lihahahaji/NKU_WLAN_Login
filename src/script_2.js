// ==UserScript==
// @name         NKU_WLAN_login_2
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://202.113.18.106/2.htm?wlanuserip=10.22.100.63&wlanacname=zx_&wlanacip=202.113.18.105&mac=00-00-00-00-00-00&session=null&redirect=null&ACLogOut=5&RetCode=1&ErrorMsg=
// @icon         https://www.google.com/s2/favicons?sz=64&domain=18.106
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var loginButton = document.querySelector('.edit_lobo_cell[value="返回（Go Back）"]');
// 检查是否成功获取到元素
if (loginButton) {
    // 执行点击事件
    loginButton.click();
} else {
    console.error('无法找到登录按钮');
}
})();