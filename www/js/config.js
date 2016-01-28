/**
 * 配置文件
 */
angular.module('starter.config', [])
.constant('baseUrl', 'http://115.29.51.196:4000/')

.constant('SysPath', {
        1:{head:'html/sys-head/gongPeiDian.html',sysType:'dian'} ,
})

.constant('path',{
        'getDevParamsDetail':{
          'url':'APP_SystemInfo.GetDevParamsInfo',
          'data': function (PCode,DeviceID,DataCode) {
            var data={};
            data.PCode=PCode;
            data.DeviceID=DeviceID;
            data.DataCode=DataCode;
            return data;
          }
        }
    });
