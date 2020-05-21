/**
 * 验证不能包含字母
 */
export const isNoWord = value => /^[^A-Za-z]*$/g.test(value);

/**
 * 验证中文和数字
 */
export const isCHNAndEN = value => /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(value);

/**
 * 验证邮政编码(中国)
 */
export const isPostcode = value => /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value);


/**
 * 验证微信号，6至20位，以字母开头，字母，数字，减号，下划线
 */
export const isWeChatNum = value => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);

/**
 * 验证16进制颜色
 */
export const isColor16 = value => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);

/**
 * 验证火车车次
 */
export const isTrainNum = value => /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value);

/**
 * 验证手机机身码(IMEI)
 */
export const isIMEI = value => /^\d{15,17}$/g.test(value);

/**
 * 验证必须带端口号的网址(或ip)
 */
export const isHttpAndPort = value => /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value);

/**
 * 验证网址(支持端口和"?+参数"和"#+参数)
 */
export const isRightWebsite = value => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(value);

/**
 * 验证统一社会信用代码
 */
export const isCreditCode = value => /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g.test(value);

/**
 * 验证迅雷链接
 */
export const isThunderLink = value => /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(value);

/**
 * 验证ed2k链接(宽松匹配)
 */
export const ised2k = value => /^ed2k:\/\/\|file\|.+\|\/$/g.test(value);

/**
 * 验证磁力链接(宽松匹配)
 */
export const isMagnet = value => /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value);


/**
 * 验证子网掩码
 */
export const isSubnetMask = value => /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/g.test(value);

/**
 * 验证linux"文件夹"路径
 */
export const isLinuxFolderPath = value => /^(\/[^/]+)+\/?$/g.test(value);

/**
 * 验证不能包含字母
 */
export const isNoWord = value => /^[^A-Za-z]*$/g.test(value);

/**
 * 验证linux"文件"路径
 */
export const isLinuxFilePath = value => /^(\/[^/]+)+$/g.test(value);


/**
 * 验证window"文件夹"路径
 */
export const isWindowsFolderPath = value => /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(value);


/**
 * 验证window下"文件"路径
 */
export const isWindowsFilePath = value => /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g.test(value);


/**
 * 验证股票代码(A股)
 */
export const isAShare = value => /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/g.test(value);


/**
 * 验证版本号格式必须为X.Y.Z
 */
export const isVersion = value => /^\d+(?:\.\d+){2}$/g.test(value);


/**
 * 验证视频链接地址（视频格式可按需增删）
 */
export const isVideoUrl = value => /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.test(value);


/**
 * 验证图片链接地址（图片格式可按需增删）
 */
export const isImageUrl = value => /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.test(value);


/**
 * 验证银行卡号（10到30位, 覆盖对公/私账户, 参考微信支付）
 */
export const isAccountNumber = value => /^[1-9]\d{9,29}$/g.test(value);


/**
 * 验证中文姓名
 */
export const isChineseName = value => /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);


/**
 * 验证英文姓名
 */
export const isEnglishName = value => /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g.test(value);


/**
 * 验证车牌号(新能源)
 */
export const isLicensePlateNumberNER = value => /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/g.test(value);

/**
 * 验证车牌号(非新能源)
 */
export const isLicensePlateNumberNNER = value => /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/g.test(value);


/**
 * 验证车牌号(新能源+非新能源)
 */
export const isLicensePlateNumber = value => /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/g.test(value);

/**
 * 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
 */
export const isMPStrict = value => /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value);


/**
 * 验证手机号中国(宽松), 只要是13,14,15,16,17,18,19开头即可

 */
export const isMPRelaxed = value => /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g.test(value);


/**
 * 验证email(邮箱)

 */
export const isEmail = value => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);


/**
 * 验证座机电话(国内),如: 0341-86091234

 */
export const isLandlineTelephone = value => /\d{3}-\d{8}|\d{4}-\d{7}/g.test(value);


/**
 * 验证身份证号(1代,15位数字)

 */
export const isIDCardOld = value => /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g.test(value);


/**
 * 验证身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X

 */
export const isIDCardNew = value => /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g.test(value);


/**
 * 验证身份证号, 支持1/2代(15位/18位数字)

 */
export const isIDCard = value => /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g.test(value);


/**
 * 验证护照（包含香港、澳门）

 */
export const isPassport = value => /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/g.test(value);

/**
 * 验证帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线组合

 */
export const isWebAccount = value => /^[a-zA-Z]\w{4,15}$/g.test(value);


/**
 * 验证中文/汉字

 */
export const isChineseCharacter = value => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);

/**
 * 验证小数

 */
export const isDecimal = value => /^\d+\.\d+$/g.test(value);


/**
 * 验证数字

 */
export const isNumber = value => /^\d{1,}$/g.test(value);


/**
 * 验证qq号格式

 */
export const isQQNum = value => /^[1-9][0-9]{4,10}$/g.test(value);


/**
 * 验证数字和字母组成

 */
export const isNumAndStr = value => /^[A-Za-z0-9]+$/g.test(value);


/**
 * 验证英文字母

 */
export const isEnglish = value => /^[a-zA-Z]+$/g.test(value);


/**
 * 验证大写英文字母

 */
export const isCapital = value => /^[A-Z]+$/g.test(value);


/**
 * 验证小写英文字母

 */
export const isLowercase = value => /^[a-z]+$/g.test(value);


/**
 * 获取url参数（第一种）

 */
export function getUrlParam(name, origin = null) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = null;
  if (origin == null) {
      r = window.location.search.substr(1).match(reg);
  } else {
      r = origin.substr(1).match(reg);
  }
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}


/**
 * 修改url中的参数

 */
export function replaceParamVal(paramName,replaceWith) {
  var oUrl = location.href.toString();
  var re=eval('/('+ paramName+'=)([^&]*)/gi');
  location.href = oUrl.replace(re,paramName+'='+replaceWith);
  return location.href;
}


/**
 * 删除url中指定的参数

 */
export function funcUrlDel(name){
  var loca =location;
  var baseUrl = loca.origin + loca.pathname + "?";
  var query = loca.search.substr(1);
  if (query.indexOf(name)>-1) {
      var obj = {};
      var arr = query.split("&");
      for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].split("=");
          obj[arr[i][0]] = arr[i][1];
      }
      delete obj[name];
      var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
      return url
  }
}

/**
 * 获取窗口可视范围的高度

 */
export function getClientHeight() {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  else {
      clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  return clientHeight;
}


/**
 * 获取窗口可视范围宽度

 */
export function getPageViewWidth() {
  let d = document,
      a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
  return a.clientWidth;
}

/**
 * 获取窗口宽度

 */
export function getPageWidth() {
  let g = document,
      a = g.body,
      f = g.documentElement,
      d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}


/**
 * 获取窗口尺寸
 */
export function getViewportOffset() {
  if (window.innerWidth) {
      return {
          w: window.innerWidth,
          h: window.innerHeight
      }
  } else {
      // ie8及其以下
      if (document.compatMode === "BackCompat") {
          // 怪异模式
          return {
              w: document.body.clientWidth,
              h: document.body.clientHeight
          }
      } else {
          // 标准模式
          return {
              w: document.documentElement.clientWidth,
              h: document.documentElement.clientHeight
          }
      }
  }
}


/**
 * 获取滚动条距顶部高度
 */
export function getPageScrollTop() {
  let a = document;
  return a.documentElement.scrollTop || a.body.scrollTop;
}


/**
 * 获取滚动条距左边的高度
 */
export function getPageScrollLeft() {
  let a = document;
  return a.documentElement.scrollLeft || a.body.scrollLeft;
}

/**
 * 开启全屏
 */
export function launchFullscreen(element) {
  if (element.requestFullscreen) {
      element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen()
  }
}


/**
 * 关闭全屏
 */
export function exitFullscreen() {
  if (document.exitFullscreen) {
      document.exitFullscreen()
  } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
  }
}


/**
 * 返回当前滚动条位置
 */
export const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});


/**
 * 滚动到指定元素区域
 */
export const smoothScroll = element =>{
  document.querySelector(element).scrollIntoView({
      behavior: 'smooth'
  });
};

/**
 * 平滑滚动到页面顶部
 */
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
  }
};


/**
 * http跳转https
 */
export const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};


/**
 * 检查页面底部是否可见
 */
export const bottomVisible = () =>{
  return document.documentElement.clientHeight + window.scrollY >=
      (document.documentElement.scrollHeight || document.documentElement.clientHeight);
};


/**
 * 打开一个窗口
 */
export function openWindow(url, windowName, width, height) {
  var x = parseInt(screen.width / 2.0) - width / 2.0;
  var y = parseInt(screen.height / 2.0) - height / 2.0;
  var isMSIE = navigator.appName == "Microsoft Internet Explorer";
  if (isMSIE) {
      var p = "resizable=1,location=no,scrollbars=no,width=";
      p = p + width;
      p = p + ",height=";
      p = p + height;
      p = p + ",left=";
      p = p + x;
      p = p + ",top=";
      p = p + y;
      window.open(url, windowName, p);
  } else {
      var win = window.open(
          url,
          "ZyiisPopup",
          "top=" +
          y +
          ",left=" +
          x +
          ",scrollbars=" +
          scrollbars +
          ",dialog=yes,modal=yes,width=" +
          width +
          ",height=" +
          height +
          ",resizable=no"
      );
      eval("try { win.resizeTo(width, height); } catch(e) { }");
      win.focus();
  }
}

//自适应页面（rem）

export function AutoResponse(width = 750) {
  const target = document.documentElement;
  target.clientWidth >= 600
      ? (target.style.fontSize = "80px")
      : (target.style.fontSize = target.clientWidth / width * 100 + "px");
}

//localStorage 存贮某一段时间失效

/**
 * @param {String} key  属性
 * @param {*} value 存贮值
 * @param { number } expire 过期时间,毫秒数
 */
export const localStorageSetExpire = (key, value, expire) => {
  if (typeof (value) === 'object') value = JSON.stringify(value);
  localStorage.setItem(key, value);
  setTimeout(() => {
      localStorage.removeItem(key)
  }, expire)
};

//金钱格式化，三位加逗号
export const formatMoney = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

//截取字符串并加身略号
export function subText(str, length) {
  if (str.length === 0) {
      return '';
  }
  if (str.length > length) {
      return str.substr(0, length) + "...";
  } else {
      return str;
  }
}

//获取文件base64编码
/**
 * @param file
 * @param format  指定文件格式
 * @param size  指定文件大小(字节)
 * @param formatMsg 格式错误提示
 * @param sizeMsg   大小超出限制提示
 * @returns {Promise<any>}
 */
export function fileToBase64String(file, format = ['jpg', 'jpeg', 'png', 'gif'], size = 20 * 1024 * 1024, formatMsg = '文件格式不正确', sizeMsg = '文件大小超出限制') {
  return new Promise((resolve, reject) => {
      // 格式过滤
      let suffix = file.type.split('/')[1].toLowerCase();
      let inFormat = false;
      for (let i = 0; i < format.length; i++) {
          if (suffix === format[i]) {
              inFormat = true;
              break;
          }
      }
      if (!inFormat) {
          reject(formatMsg);
      }
      // 大小过滤
      if (file.size > size) {
          reject(sizeMsg);
      }
      // 转base64字符串
      let fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
          let res = fileReader.result;
          resolve({base64String: res, suffix: suffix});
          reject('异常文件，请重新选择');
      }
  })
}

//B转换到KB,MB,GB并保留两位小数

/**
 * @param { number } fileSize
 */
export function formatFileSize(fileSize) {
  let temp;
  if (fileSize < 1024) {
      return fileSize + 'B';
  } else if (fileSize < (1024 * 1024)) {
      temp = fileSize / 1024;
      temp = temp.toFixed(2);
      return temp + 'KB';
  } else if (fileSize < (1024 * 1024 * 1024)) {
      temp = fileSize / (1024 * 1024);
      temp = temp.toFixed(2);
      return temp + 'MB';
  } else {
      temp = fileSize / (1024 * 1024 * 1024);
      temp = temp.toFixed(2);
      return temp + 'GB';
  }
}

//base64转file

/**
 *  @param { base64 } base64
 *  @param { string } filename 转换后的文件名
 */
export const base64ToFile = (base64, filename )=> {
  let arr = base64.split(',');
  let mime = arr[0].match(/:(.*?);/)[1];
  let suffix = mime.split('/')[1] ;// 图片后缀
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${filename}.${suffix}`, { type: mime })
};

//base64转blob
/**
 *  @param { base64 } base64
 */
export const base64ToBlob = base64 => {
  let arr = base64.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
  while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};

//blob转file

/**
 *  @param { blob } blob
 *  @param { string } fileName
 */
export const blobToFile = (blob, fileName) => {
  blob.lastModifiedDate = new Date();
  blob.name = fileName;
  return blob;
};

//file转base64

/**
 * @param { * } file 图片文件
 */
export const fileToBase64 = file => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function (e) {
      return e.target.result
  };
};

//递归生成树形结构

export function getTreeData(data, pid, pidName = 'parentId', idName = 'id', childrenName = 'children', key) {
  let arr = [];

  for (let i = 0; i < data.length; i++) {
      if (data[i][pidName] == pid) {
          data[i].key = data[i][idName];
          data[i][childrenName] = getTreeData(data, data[i][idName], pidName, idName, childrenName);
          arr.push(data[i]);
      }
  }

  return arr;
}

//遍历树节点

export function foreachTree(data, childrenName = 'children', callback) {
  for (let i = 0; i < data.length; i++) {
      callback(data[i]);
      if (data[i][childrenName] && data[i][childrenName].length > 0) {
          foreachTree(data[i][childrenName], childrenName, callback);
      }
  }
}

//追溯父节点
export function traceParentNode(pid, data, rootPid, pidName = 'parentId', idName = 'id', childrenName = 'children') {
  let arr = [];
  foreachTree(data, childrenName, (node) => {
      if (node[idName] == pid) {
          arr.push(node);
          if (node[pidName] != rootPid) {
              arr = arr.concat(traceParentNode(node[pidName], data, rootPid, pidName, idName));
          }
      }
  });
  return arr; 
}

//寻找所有子节点

export function traceChildNode(id, data, pidName = 'parentId', idName = 'id', childrenName = 'children') {
  let arr = [];
  foreachTree(data, childrenName, (node) => {
      if (node[pidName] == id) {
          arr.push(node);
          arr = arr.concat(traceChildNode(node[idName], data, pidName, idName, childrenName));
      }
  });
  return arr;
}

//根据pid生成树形结构

/**
 *  @param { object } items 后台获取的数据
 *  @param { * } id 数据中的id
 *  @param { * } link 生成树形结构的依据
 */
export const createTree = (items, id = null, link = 'pid') =>{
  items.filter(item => item[link] === id).map(item => ({ ...item, children: createTree(items, item.id) }));
};

//查询数组中是否存在某个元素并返回元素第一次出现的下标

/** 
 * @param {*} item 
 * @param { array } data
 */
export function inArray(item, data) {
  for (let i = 0; i < data.length; i++) {
      if (item === data[i]) {
          return i;
      }
  }
  return -1;
}

//Windows根据详细版本号判断当前系统名称
/**
 * @param { string } osVersion 
 */
export function OutOsName(osVersion) {
  if(!osVersion){
      return
  }
  let str = osVersion.substr(0, 3);
  if (str === "5.0") {
      return "Win 2000"
  } else if (str === "5.1") {
      return "Win XP"
  } else if (str === "5.2") {
      return "Win XP64"
  } else if (str === "6.0") {
      return "Win Vista"
  } else if (str === "6.1") {
      return "Win 7"
  } else if (str === "6.2") {
      return "Win 8"
  } else if (str === "6.3") {
      return "Win 8.1"
  } else if (str === "10.") {
      return "Win 10"
  } else {
      return "Win"
  }
}

//判断手机是Andoird还是IOS

/**
 *  0: ios
 *  1: android
 *  2: 其它
 */
export function getOSType() {
  let u = navigator.userAgent, app = navigator.appVersion;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
      return 0;
  }
  if (isAndroid) {
      return 1;
  }
  return 2;
}

//函数防抖

/**
 * @param { function } func
 * @param { number } wait 延迟执行毫秒数
 * @param { boolean } immediate  true 表立即执行，false 表非立即执行
 */
export function debounce(func,wait,immediate) {
  let timeout;
  return function () {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
          let callNow = !timeout;
          timeout = setTimeout(() => {
              timeout = null;
          }, wait);
          if (callNow) func.apply(context, args)
      }
      else {
          timeout = setTimeout(() => {
              func.apply(context, args)
          }, wait);
      }
  }
}

//函数节流

/**
 * @param { function } func 函数
 * @param { number } wait 延迟执行毫秒数
 * @param { number } type 1 表时间戳版，2 表定时器版
 */
export function throttle(func, wait ,type) {
  let previous, timeout;
  if(type===1){
      previous = 0;
  }else if(type===2){
      timeout = null;
  }
  return function() {
      let context = this;
      let args = arguments;
      if(type===1){
          let now = Date.now();

          if (now - previous > wait) {
              func.apply(context, args);
              previous = now;
          }
      }else if(type===2){
          if (!timeout) {
              timeout = setTimeout(() => {
                  timeout = null;
                  func.apply(context, args)
              }, wait)
          }
      }

  }
}

//判断数据类型
/**
 * @param {*} target 
 */
export function type(target) {
  let ret = typeof(target);
  let template = {
      "[object Array]": "array",
      "[object Object]":"object",
      "[object Number]":"number - object",
      "[object Boolean]":"boolean - object",
      "[object String]":'string-object'
  };

  if(target === null) {
      return 'null';
  }else if(ret == "object"){
      let str = Object.prototype.toString.call(target);
      return template[str];
  }else{
      return ret;
  }
}

//生成指定范围随机数

/**
 * @param { number } min 
 * @param { number } max 
 */
export const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//数组乱序
/**
 * @param {array} arr
 */
export function arrScrambling(arr) {
  let array = arr;
  let index = array.length;
  while (index) {
      index -= 1;
      let randomIndex = Math.floor(Math.random() * index);
      let middleware = array[index];
      array[index] = array[randomIndex];
      array[randomIndex] = middleware
  }
  return array
}

//数组交集
/**
 * @param { array} arr1
 * @param { array } arr2
 */
export const similarity = (arr1, arr2) => arr1.filter(v => arr2.includes(v));


//数组中某元素出现的次数
/**
 * @param { array } arr
 * @param {*} value
 */
export function countOccurrences(arr, value) {
    return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}

//加法函数（精度丢失问题）
/**
 * @param { number } arg1
 * @param { number } arg2
 */
export function add(arg1, arg2) {
    let r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m
}

//减法函数（精度丢失问题）
/**
 * @param { number } arg1
 * @param { number } arg2
 */
export function sub(arg1, arg2) {
    let r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    n = (r1 >= r2) ? r1 : r2;
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}


//除法函数（精度丢失问题）
/**
 * @param { number } num1
 * @param { number } num2
 */
export function division(num1,num2){
    let t1,t2,r1,r2;
    try{
        t1 = num1.toString().split('.')[1].length;
    }catch(e){
        t1 = 0;
    }
    try{
        t2=num2.toString().split(".")[1].length;
    }catch(e){
        t2=0;
    }
    r1=Number(num1.toString().replace(".",""));
    r2=Number(num2.toString().replace(".",""));
    return (r1/r2)*Math.pow(10,t2-t1);
}
//乘法函数（精度丢失问题）
/**
 * @param { number } num1
 * @param { number } num2
 */
export function mcl(num1,num2){
    let m=0,s1=num1.toString(),s2=num2.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}
//递归优化（尾递归）
/**
 * @param { function } f
 */
export function tco(f) {
    let value;
    let active = false;
    let accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
        }
    };
}
//生成随机整数
export function randomNumInteger(min, max) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * min + 1, 10);
        case 2:
            return parseInt(Math.random() * (max - min + 1) + min, 10);
        default:
            return 0
    }
}
//去除空格
/**
 * @param { string } str 待处理字符串
 * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
 */
export function trim(str, type = 1) {
    if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
    switch (type) {
        case 1:
            return str.replace(/\s/g, "");
        case 2:
            return str.replace(/(^\s)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s)/g, "");
        case 4:
            return str.replace(/(\s$)/g, "");
        default:
            return str;
    }
}
//大小写转换
/**
 * @param { string } str 待转换的字符串
 * @param { number } type 1-全大写 2-全小写 3-首字母大写 其他-不转换
 */

export function turnCase(str, type) {
    switch (type) {
        case 1:
            return str.toUpperCase();
        case 2:
            return str.toLowerCase();
        case 3:
            return str[0].toUpperCase() + str.substr(1).toLowerCase();
        default:
            return str;
    }
}
//随机16进制颜色 hexColor
/**
 * 方法一
 */
export function hexColor() {

    let str = '#';
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i++) {
        let index = Number.parseInt((Math.random() * 16).toString());
        str += arr[index]
    }
    return str;
}
//随机16进制颜色 randomHexColorCode
/**
 * 方法二
 */
export const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};
//转义html(防XSS攻击)
export const escapeHTML = str =>{
    str.replace(
        /[&<>'"]/g,
        tag =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
    );
};
//检测移动/PC设备
export const detectDeviceType = () => { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'; };
//隐藏所有指定标签
/**
 * 例: hide(document.querySelectorAll('img'))
 */
export const hideTag = (...el) => [...el].forEach(e => (e.style.display = 'none'));
//返回指定元素的生效样式
/**
 * @param { element} el  元素节点
 * @param { string } ruleName  指定元素的名称
 */
export const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
//检查是否包含子元素
/**
 * @param { element } parent
 * @param { element } child
 * 例：elementContains(document.querySelector('head'), document.querySelector('title')); // true
 */
export const elementContains = (parent, child) => parent !== child && parent.contains(child);
//数字超过规定大小加上加号“+”，如数字超过99显示99+
/**
 * @param { number } val 输入的数字
 * @param { number } maxNum 数字规定界限
 */
export const outOfNum = (val, maxNum) =>{
    val = val ? val-0 :0;
    if (val > maxNum ) {
        return `${maxNum}+`
    }else{
        return val;
    }
};

