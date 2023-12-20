//your JS code here. If required.
let info=document.getElementById("browser-info");
let browser=navigator.appName;
let version=navigator.appVersion;
info.innerText=`You are using ${browser} ${version} version.`;