//地图
// 百度地图API功能
map = new BMap.Map("allmap");
map.centerAndZoom(new BMap.Point(109.035712,32.69127),12);
map.enableScrollWheelZoom();        		//开启鼠标滑轮缩放
var data_info = [[109.035712,32.69127,"地址：陕西省安康市市政府大楼"],
    [109.045845,32.697469,"地址：陕西省安康市人民医院"],
    [109.012536,32.695311,"地址：陕西省安康市明珠花园"],
    [109.06126,32.697924,"地址：陕西省安康市江南一品"],
    [114.456605,39.921585,"地址：北京市东城区东华门大街"],
    [106.953562, 24.276223,"地址：北京市东城区东华门大街"],
    [108.486605,39.921585,"地址：北京市东城区东华门大街"],
    [119.412222,39.912345,"地址：北京市东城区正义路甲5号"]
];
var opts = {
    width : 250,     // 信息窗口宽度
    height: 80,     // 信息窗口高度
    title : "信息窗口" , // 信息窗口标题
    enableMessage:true//设置允许信息窗发送短息
};
for(var i=0;i<data_info.length;i++){
    // var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
    var content = data_info[i][2];
    var myIcon = new BMap.Icon("./img/icon_location.png", new BMap.Size(30,40));
    var marker2 = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]),{icon:myIcon});

    map.addOverlay(marker2);               // 将标注添加到地图中
    addClickHandler(content,marker2);
}
function addClickHandler(content,marker2){
    marker2.addEventListener("click",function(e){
        openInfo(content,e)}
    );
}
function openInfo(content,e){
    var p = e.target;
    var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow,point); //开启信息窗口

}

//饼状图
var myChart = echarts.init(document.getElementById('chart'));
var  option = {
    title: {

    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y:'35%',
        textStyle:{
            color:'#999',
            fontSize:15
        },
        data: ['照明用电', '空调用电', '动力用电', '特殊用电']
    },
    color : [ '#ffe133', '#ff7b8c', '#4da1ff', '#7cd180'],
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '85%',
            center: ['30%', '50%'],
            label: {
                normal: {
                    position: 'inner',
                    show : false
                }
            },
            data: [
                {value: 335, name: '照明用电'},
                {value: 310, name: '空调用电'},
                {value: 234, name: '动力用电'},
                {value: 135, name: '特殊用电'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(255, 255, 255, 1)'
                }
            }
        }
    ]
};
myChart.setOption(option);

//柱状图
var myChartSwi = echarts.init(document.getElementById('chart-swi'));
var optionSwi = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show:true,
        x:'right',
        data: ['电', '水', '暖'],
        textStyle: {
            color: "#333"
        }

    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        top:'15%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['一月', '二月', '三月'],
            axisLine: {  //这是x轴文字颜色
                lineStyle: {
                    color: "#333",
                }
            },
            splitLine:{//去除网格线
                show:true,
                lineStyle: {
                    color: '#e5e5e5',
                    width: 1,
                    type: 'solid'
                },
            },
            axisLabel:{
                color:'#333'
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name:'统计量',
            nameTextStyle: {
                color:'#333'
            },
            axisLine: {  //这是x轴文字颜色
                lineStyle: {
                    color: "#333",
                }
            },
            splitLine:{//去除网格线
                show:true,
                lineStyle: {
                    color: '#e5e5e5',
                    width: 1,
                    type: 'solid'
                },
            },
            axisLabel:{
                color:'#333'
            },
        }
    ],
    series: [
        {
            name: '电',
            type: 'bar',
            data: [4502, 5450, 2880],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#1e9fff'
                    }, {
                        offset: 1,
                        color: '#1e9fff'
                    }]),
                }
            },
        },
        {
            name: '水',
            type: 'bar',
            stack: '广告',
            data: [500, 1200, 800],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#19d25b'
                    }, {
                        offset: 1,
                        color: '#19d25b'
                    }]),
                }
            },
        },
        {
            name: '暖',
            type: 'bar',
            data: [100, 80, 300],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ff7f50'
                    }, {
                        offset: 1,
                        color: '#ff7f50'
                    }]),
                }
            },
        },
    ]
};
myChartSwi.setOption(optionSwi);


//折线图
var myChart2 = echarts.init(document.getElementById('chart2'));
var myChart21 = echarts.init(document.getElementById('chart21'));
var myChart22 = echarts.init(document.getElementById('chart22'));
var  option1 = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['当日', '昨日'],
        x:'right',
        textStyle: {
            color: "#333"
        }
    },
    color : [ '#1E9FFF', '#d3772D'],
    grid: {
        left: '0%',
        right: '7%',
        bottom: '1%',
        top:'15%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        axisTick:{
            show:false//不显示坐标轴刻度线
        },
        type: 'category',
        // name:'h',
        data: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
        nameTextStyle: {
            color:'#333'
        },
        axisLine: {
            lineStyle: {
                color: '#1e9fff'
            },
            // symbol:['none','arrow']
        },
        axisLabel:{
            show:true,
            showMaxLabel: false,
            color:'#57b2de',
            interval: 2
        },

        boundaryGap: true,
        splitLine:{//去除网格线
            show:true,
            lineStyle: {
                color: '#e5e5e5',
                width: 1,
                type: 'solid'
            },
        },
    },
    yAxis: {
        axisTick:{
            show:false//不显示坐标轴刻度线
        },
        axisLine: {
            show: false,//不显示坐标轴线
        },
        axisLabel: {
            show: false,//不显示坐标轴上的文字
        },
        type: 'value',
        // name:'KW',
        nameTextStyle: {
            color:'#333'
        },
        boundaryGap: [0,0.5],
        // axisLine: {
        //     lineStyle: {
        //         color: '#1e9fff'
        //     },
        //     symbol:['none','arrow']
        // },
        splitLine:{//去除网格线
            show:true,
            lineStyle: {
                color: '#e5e5e5',
                width: 1,
                type: 'solid'
            },
        },
        // axisLabel:{
        //     show:true,
        //     showMaxLabel: false,
        //     color:'#333'
        // },
    },
    series: [
        {
            name: '当日',
            type: 'line',
            stack: '总量',
            symbol: 'none',
            data: [20, 232, 401, 234, 290, 230, 220,345,467,234,123,234,356,421,111,278,256,342,134,222,345,110,88,455],
            areaStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 1,
                            color: "#1E9FFF" // 0% 处的颜色
                        }, {
                            offset: 0,
                            color: "#1E9FFF" // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            itemStyle: {
                normal: {
                    lineStyle:{
                        type:'solid',
                        color:'rgba(255,0,0,.0)'
                    },
                }
            },
        },
        {
            name: '昨日',
            type: 'line',
            // smooth: 0.6,
            stack: '总量',
            symbol: 'none',
            data: [20, 232, 401, 234, 290, 230, 220,345,467,234,123,234,356,421,111,278,256,342,134,222,345,110,88,455],
            areaStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 1,
                            color: "#ff7f50" // 0% 处的颜色
                        }, {
                            offset: 0,
                            color: "#ff7f50" // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            itemStyle: {
                normal: {
                    lineStyle:{
                        type:'solid',
                        color:'rgba(255,0,0,.0)'
                    },
                }
            },
        },
    ]
};

myChart2.setOption(option1);
myChart21.setOption(option1);
myChart22.setOption(option1);
var myChart3 = echarts.init(document.getElementById('chart3'));
var myChart32 = echarts.init(document.getElementById('chart32'));
var myChart31 = echarts.init(document.getElementById('chart31'));

var  option3 = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['当月', '上月'],
        x:'right',
        textStyle: {
            color: "#333"
        }
    },
    color : [ '#c795ff', '#19d25b'],
    grid: {
        left: '1%',
        right: '7%',
        bottom: '1%',
        top:'15%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        axisTick:{
            show:false//不显示坐标轴刻度线
        },
        type: 'category',
        // name:'d',
        data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],

        axisLine: {
            lineStyle: {
                color: '#1e9fff'
            },
            // symbol:['none','arrow']
        },
        axisLabel:{
            show:true,
            // showMaxLabel: false,
            color:'#57b2de',
            interval:2,
        },
        boundaryGap: true,
        splitLine:{//去除网格线
            show:true,
            lineStyle: {
                color: '#e5e5e5',
                width: 1,
                type: 'solid'
            },
        }
    },
    yAxis: {
        axisTick:{
            show:false//不显示坐标轴刻度线
        },
        axisLine: {
            show: false,//不显示坐标轴线
        },
        axisLabel: {
            show: false,//不显示坐标轴上的文字
        },
        type: 'value',
        // name:'KW',
        nameTextStyle: {
            color:'#333'
        },
        boundaryGap: [0,0.5],
        // axisLine: {
        //     lineStyle: {
        //         color: '#1e9fff'
        //     },
        //     symbol:['none','arrow']
        // },
        splitLine:{//去除网格线
            show:true,
            lineStyle: {
                color: '#e5e5e5',
                width: 1,
                type: 'solid'
            },
        },
        // axisLabel:{
        //     show:true,
        //     showMaxLabel: false,
        //     color:'#333'
        // },
    },
    series: [
        {
            name: '当月',
            type: 'line',
            stack: '总量',
            symbol: 'none',
            data: [20, 232, 401, 234, 290, 230, 220,345,467,234,123,234,356,421,111,278,256,342,134,222,345,110,88,455,342,134,222,345,110,88,455],
            smooth: 0.6,
            areaStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: "#c795ff" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "#c795ff" // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            itemStyle: {
                normal: {
                    lineStyle:{
                        type:'solid',
                        color:'rgba(255,0,0,.0)'
                    },
                }
            },
        },
        {
            name: '上月',
            type: 'line',
            smooth: 0.6,
            stack: '总量',
            symbol: 'none',
            data: [20, 232, 401, 234, 290, 230, 220,345,467,234,123,234,356,421,111,278,256,342,134,222,345,110,88,455,342,134,222,345,110,88,455],
            // smooth: true,
            areaStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: "#19d25b" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "#19d25b" // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            itemStyle: {
                normal: {
                    lineStyle:{
                        type:'solid',
                        color:'rgba(255,0,0,.0)'
                    },
                }
            },
        },
    ]
};
myChart3.setOption(option3);
myChart31.setOption(option3);
myChart32.setOption(option3);


