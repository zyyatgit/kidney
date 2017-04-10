angular.module('tdy.controllers', ['ionic','kidney.services'])

/////////////////////////tongdanyang/////////////////
.controller('DoctorDiagnoseCtrl', ['$scope', 'Storage', function ($scope, Storage) {
  $scope.Hypers =
  [
    {Name:"是",Type:1},
    {Name:"否",Type:2}
  ]
  
  $scope.Diseases =
  [
    {Name:"肾移植",Type:1},
    {Name:"CKD1-2期",Type:2},
    {Name:"CKD3-4期",Type:3},
    {Name:"CDK5期未透析",Type:4},
    {Name:"腹透",Type:5},
    {Name:"血透",Type:6}
  ]

  $scope.Diagnose = 
  {
    "KidneyDisease": null,
    "DiseaseDetail": null,
    "OperationDate": null,
    "Hypertension": null,
    "DetailDiagnose": null
  }

  // --------datepicker设置----------------
  var  monthList=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
  var weekDaysList=["日","一","二","三","四","五","六"];
  
  // --------诊断日期----------------
  var DiagnosisdatePickerCallback = function (val) {
    if (typeof(val) === 'undefined') {
      console.log('No date selected');
    } else {
      $scope.datepickerObject1.inputDate=val;
      var dd=val.getDate();
      var mm=val.getMonth()+1;
      var yyyy=val.getFullYear();
      var d=dd<10?('0'+String(dd)):String(dd);
      var m=mm<10?('0'+String(mm)):String(mm);
      //日期的存储格式和显示格式不一致
      $scope.Diagnose.LastDiagnosisTime=yyyy+'/'+m+'/'+d;
    }
  };
  
  $scope.datepickerObject1 = {
    titleLabel: '诊断日期',  //Optional
    todayLabel: '今天',  //Optional
    closeLabel: '取消',  //Optional
    setLabel: '设置',  //Optional
    setButtonType : 'button-assertive',  //Optional
    todayButtonType : 'button-assertive',  //Optional
    closeButtonType : 'button-assertive',  //Optional
    inputDate: new Date(),    //Optional
    mondayFirst: false,    //Optional
    //disabledDates: disabledDates, //Optional
    weekDaysList: weekDaysList,   //Optional
    monthList: monthList, //Optional
    templateType: 'popup', //Optional
    showTodayButton: 'false', //Optional
    modalHeaderColor: 'bar-positive', //Optional
    modalFooterColor: 'bar-positive', //Optional
    from: new Date(1900, 1, 1),   //Optional
    to: new Date(),    //Optional
    callback: function (val) {    //Mandatory
      DiagnosisdatePickerCallback(val);
    }
  };  
  // --------手术日期----------------
  var OperationdatePickerCallback = function (val) {
    if (typeof(val) === 'undefined') {
      console.log('No date selected');
    } else {
      $scope.datepickerObject2.inputDate=val;
      var dd=val.getDate();
      var mm=val.getMonth()+1;
      var yyyy=val.getFullYear();
      var d=dd<10?('0'+String(dd)):String(dd);
      var m=mm<10?('0'+String(mm)):String(mm);
      //日期的存储格式和显示格式不一致
      $scope.Diagnose.OperationDate=yyyy+'/'+m+'/'+d;
    }
  };
  $scope.datepickerObject2 = {
    titleLabel: '手术日期',  //Optional
    todayLabel: '今天',  //Optional
    closeLabel: '取消',  //Optional
    setLabel: '设置',  //Optional
    setButtonType : 'button-assertive',  //Optional
    todayButtonType : 'button-assertive',  //Optional
    closeButtonType : 'button-assertive',  //Optional
    mondayFirst: false,    //Optional
    //disabledDates: disabledDates, //Optional
    weekDaysList: weekDaysList,   //Optional
    monthList: monthList, //Optional
    templateType: 'popup', //Optional
    showTodayButton: 'false', //Optional
    modalHeaderColor: 'bar-positive', //Optional
    modalFooterColor: 'bar-positive', //Optional
    from: new Date(1900, 1, 1),   //Optional
    to: new Date(),    //Optional
    callback: function (val) {    //Mandatory
      OperationdatePickerCallback(val);
    }
  };  
  // --------出生日期----------------
  var BirthdatePickerCallback = function (val) {
    if (typeof(val) === 'undefined') {
      console.log('No date selected');
    } else {
      $scope.datepickerObject3.inputDate=val;
      var dd=val.getDate();
      var mm=val.getMonth()+1;
      var yyyy=val.getFullYear();
      var d=dd<10?('0'+String(dd)):String(dd);
      var m=mm<10?('0'+String(mm)):String(mm);
      //日期的存储格式和显示格式不一致
      $scope.Diagnose.Birthday=yyyy+'/'+m+'/'+d;
    }
  };
  $scope.datepickerObject3 = {
    titleLabel: '出生日期',  //Optional
    todayLabel: '今天',  //Optional
    closeLabel: '取消',  //Optional
    setLabel: '设置',  //Optional
    setButtonType : 'button-assertive',  //Optional
    todayButtonType : 'button-assertive',  //Optional
    closeButtonType : 'button-assertive',  //Optional
    mondayFirst: false,    //Optional
    //disabledDates: disabledDates, //Optional
    weekDaysList: weekDaysList,   //Optional
    monthList: monthList, //Optional
    templateType: 'popup', //Optional
    showTodayButton: 'false', //Optional
    modalHeaderColor: 'bar-positive', //Optional
    modalFooterColor: 'bar-positive', //Optional
    from: new Date(1900, 1, 1),   //Optional
    to: new Date(),    //Optional
    callback: function (val) {    //Mandatory
      BirthdatePickerCallback(val);
    }
  };  
  // --------datepicker设置结束----------------
  $scope.showProgress = function(){
    //console.log($scope.User.KidneyDisease.t.Type);
    if($scope.Diagnose.KidneyDisease == 1 || $scope.Diagnose.KidneyDisease == null || $scope.Diagnose.KidneyDisease == "" ){
      return false;}
    else{
      return true;}
  }

  $scope.showOperationTime = function(){
    //console.log($scope.User.KidneyDisease.t.Type);
    if($scope.Diagnose.KidneyDisease == 1){
      return true;}
    else{
      return false;}
  }

  $scope.reset =function(){
    $scope.Diagnose = 
    {
      "KidneyDisease": null,
      "DiseaseDetail": null,
      "OperationDate": null,
      "Hypertension": null,
      "DetailDiagnose": null
    }
  }
}])
.controller('TestRecordCtrl', ['$scope', '$http','Storage', function ($scope,$http, Storage) {
  // $scope.$on('$ionicView.afterEnter', function() {  

//                 console.log('afterEnter');  

// }, false);  
 // console.log("mmb");
 //  $scope.$on('$ionicView.enter', function() 
 //  {
 //    console.log("mmb");
     $http.get("../data/pressure.json").success(function(data) {
         $scope.pressuredata = data;
         console.log($scope.pressuredata)
         createStockChart($scope.pressuredata,"血压","mmHg");
     });
  // })

  $scope.title="血压"
  $scope.unit="mmHg"
  $scope.chart = createStockChart($scope.data1,$scope.title,$scope.unit);
  ////提振参数选择下拉框选项 默认收缩压selected
  //下拉选择不同体征类型
  $scope.options = [{"SignName":"血压"},
    {"SignName":"体重"},
    {"SignName":"体温"},
    {"SignName":"尿量"},
    {"SignName":"心率"}
  ];  
  $scope.vitalInfo=$scope.options[0].SignName

  //切换体征
  $scope.changeVitalInfo = function(option) 
    {
       $scope.selectedname=option;
       console.log($scope.selectedname)
       drawcharts($scope.selectedname);
    };
    //根据体征类型画图
    var drawcharts=function(param){
    if (param=="血压") {
      $http.get("../data/pressure.json").success(function(data) {
         $scope.pressuredata = data;
         console.log($scope.pressuredata)
         createStockChart($scope.pressuredata,"血压","mmHg");
     });
      
      
    }
    if(param=="体温"){
      $http.get("../data/temperature.json").success(function(data) {
         $scope.temperature = data.dahjvhjkhs;
         console.log($scope.temperature)
         createStockChart($scope.temperature,"体温","℃");
     });
      
      
    }
  }
  //传参绘图
  function createStockChart(ChartData,title,unit) {

    chart="";
    var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "marginTop":0,
    "marginRight": 80,
    "dataProvider": ChartData,
    "valueAxes": [{
        "axisAlpha": 0,
        "position": "left"
    }],
    // "graphs": [{
    //       "balloonText": "[[category]]: <p>[[title]]：[[value]] [[unit]]</p>",
    //       "bullet": "round",
    //       "bulletSize": 8,
    //       "lineThickness": 2,
    //       "lineColor": "#d1655d",
    //       "type": "smoothedLine",
    //       "valueField": "Value",
    //       "title":title,
    //       "fillAlphas": 0
    //     }],
    "graphs": [{
        "id":"g1",
        "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",
        "bulletSize": 8,
        "lineColor": "#d1655d",
        "lineThickness": 2,
        "negativeLineColor": "#637bb6",
        "type": "smoothedLine",
        "valueField": "value"
    }],
    "chartScrollbar": {
        "graph":"g1",
        "gridAlpha":0,
        "color":"#888888",
        "scrollbarHeight":55,
        "backgroundAlpha":0,
        "selectedBackgroundAlpha":0.1,
        "selectedBackgroundColor":"#888888",
        "graphFillAlpha":0,
        "autoGridCount":true,
        "selectedGraphFillAlpha":0,
        "graphLineAlpha":0.2,
        "graphLineColor":"#c2c2c2",
        "selectedGraphLineColor":"#888888",
        "selectedGraphLineAlpha":1

    },
    "chartCursor": {
        "categoryBalloonDateFormat": "YYYY",
        "cursorAlpha": 0,
        "valueLineEnabled":true,
        "valueLineBalloonEnabled":true,
        "valueLineAlpha":0.5,
        "fullWidth":true
    },
    "dataDateFormat": "YYYY",
    "categoryField": "year",
    "categoryAxis": {
        "minPeriod": "YYYY",
        "parseDates": true,
        "minorGridAlpha": 0.1,
        "minorGridEnabled": true
    },
    "export": {
        "enabled": true
    }
});


// chart.addListener("rendered", zoomChart);
// if(chart.zoomChart){
//   chart.zoomChart();
// }

// function zoomChart(){
//     chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
// }
}
  
}])

//任务设置--GL
.controller('TaskSetCtrl', ['$scope', '$state', function ($scope, $state) {
  $scope.Units = ["天", "周", "年", "月"];
  $scope.Times = ["1", "2", "3", "4", "5"];
  $scope.Tasks = [{Name: "体温", Freq: {Time1:"1", Unit:"天", Time2:"1"}, Time:$scope.Times, Unit:$scope.Units}, 
                  {Name: "体重", Freq: {Time1:"1", Unit:"天", Time2:"1"}, Time:$scope.Times, Unit:$scope.Units},  
                  {Name: "血压", Freq: {Time1:"1", Unit:"天", Time2:"2"}, Time:$scope.Times, Unit:$scope.Units}, 
                  {Name: "心率", Freq: {Time1:"1", Unit:"天", Time2:"2"}, Time:$scope.Times, Unit:$scope.Units}, 
                  {Name: "血管通路情况", Freq:{Time1:"1", Unit:"天", Time2:"1"}, Time:$scope.Times, Unit:$scope.Units}, 
                  {Name: "复诊", Freq: {Time1:"1", Unit:"月", Time2:"1"}, Time:$scope.Times, Unit:$scope.Units}, 
                  {Name: "化验", Freq: {Time1:"2", Unit:"天", Time2:"1"}, Time:$scope.Times, Unit:$scope.Units}, 
                  {Name: "特殊评估", Freq: {Time1:"1", Unit:"年", Time2:"1"}, Time:$scope.Times, Unit:$scope.Units}];

  $scope.SetFreq = function()
  {
      
      $state.go('tab.patientDetail');
  }
}])

// .controller('groupQRCodeCtrl', ['$scope', 'Storage', function ($scope, Storage) {
//   $scope.groupQRCodedata = "www.baidu.com"
// }])