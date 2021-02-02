//电
doption = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '6%',
        right: '4%',
        bottom: '20%',
        top:"12%",
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
            // axisTick: {
            //     alignWithLabel: true
            // }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220,320,256,420,230,260]
        }
    ]
};
var lineOption1 = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        top:'10%',
        containLabel: true
    },
    color:["#1E9FFF"],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1时', '2时', '3时', '4时', '5时', '6时', '7时','8时','9时','10时','11时','12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时','24时']
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '电',
            type: 'line',
            stack: '总量',
            symbol: 'none',  //取消折点圆圈
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#1E9FFF" },
                        { offset: 1, color: "#FFFFFF" },
                    ])
                }
            },
            lineStyle: {
                color: "#1E9FFF",
                width: 1.5
            },
            data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201]
        },

    ]
};

const dOne = document.getElementsByClassName('d-one');
const dthree = document.getElementsByClassName('d-three');
for (let i = 0; i < dOne.length; i++) {
    const element = dOne[i];
    if (element.innerHTML === "") {
        echarts.init(element).setOption(doption)
    }
}
for (let i = 0; i < dthree.length; i++) {
    const element = dthree[i];
    if (element.innerHTML === "") {
        echarts.init(element).setOption(lineOption1)
    }
}
//水
soption = {
    color: ['#58CFC8'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '6%',
        right: '4%',
        bottom: '20%',
        top:"12%",
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
            // axisTick: {
            //     alignWithLabel: true
            // }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220,320,256,420,230,260]
        }
    ]
};
var lineOps = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        top:'10%',
        containLabel: true
    },
    color:["#58CFC8"],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1时', '2时', '3时', '4时', '5时', '6时', '7时','8时','9时','10时','11时','12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时','24时']
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '电',
            type: 'line',
            stack: '总量',
            symbol: 'none',  //取消折点圆圈
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#58CFC8" },
                        { offset: 1, color: "#FFFFFF" },
                    ])
                }
            },
            lineStyle: {
                color: "#58CFC8",
                width: 1.5
            },
            data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201]
        },

    ]
};

const sOne = document.getElementsByClassName('s-one');
const sthree = document.getElementsByClassName('s-three');
for (let i = 0; i < sOne.length; i++) {
    const element = sOne[i];
    if (element.innerHTML === "") {
        echarts.init(element).setOption(soption)
    }
}
for (let i = 0; i < sthree.length; i++) {
    const element = sthree[i];
    if (element.innerHTML === "") {
        echarts.init(element).setOption(lineOps)
    }
}
//暖
noption = {
    color: ['#FF8295'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '6%',
        right: '4%',
        bottom: '20%',
        top:"12%",
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
            // axisTick: {
            //     alignWithLabel: true
            // }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220,320,256,420,230,260]
        }
    ]
};
var lineOpn = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        top:'10%',
        containLabel: true
    },
    color:["#FF8295"],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1时', '2时', '3时', '4时', '5时', '6时', '7时','8时','9时','10时','11时','12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时','24时']
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '电',
            type: 'line',
            stack: '总量',
            symbol: 'none',  //取消折点圆圈
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#FF8295" },
                        { offset: 1, color: "#FFFFFF" },
                    ])
                }
            },
            lineStyle: {
                color: "#FF8295",
                width: 1.5
            },
            data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201]
        },

    ]
};

const nOne = document.getElementsByClassName('n-one');
const nthree = document.getElementsByClassName('n-three');
for (let i = 0; i < nOne.length; i++) {
    const element = nOne[i];
    if (element.innerHTML === "") {
        echarts.init(element).setOption(noption)
    }
}
for (let i = 0; i < nthree.length; i++) {
    const element = nthree[i];
    if (element.innerHTML === "") {
        echarts.init(element).setOption(lineOpn)
    }
}
//煤
moption = {
    color: ['#999999'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '6%',
        right: '4%',
        bottom: '20%',
        top:"12%",
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
            // axisTick: {
            //     alignWithLabel: true
            // }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220,320,256,420,230,260]
        }
    ]
};
var lineOpm = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        top:'10%',
        containLabel: true
    },
    color:["#999999"],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1时', '2时', '3时', '4时', '5时', '6时', '7时','8时','9时','10时','11时','12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时','24时']
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '电',
            type: 'line',
            stack: '总量',
            symbol: 'none',  //取消折点圆圈
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#999999" },
                        { offset: 1, color: "#FFFFFF" },
                    ])
                }
            },
            lineStyle: {
                color: "#999999",
                width: 1.5
            },
            data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201]
        },

    ]
};

const mOne = document.getElementsByClassName('m-one');
const mthree = document.getElementsByClassName('m-three');
for (let i = 0; i < mOne.length; i++) {
    const element = mOne[i];
    if (element.innerHTML === "") {
        echarts.init(element).setOption(moption)
    }
}
for (let i = 0; i < mthree.length; i++) {
    const element = mthree[i];
    if (element.innerHTML === "") {
        echarts.init(element).setOption(lineOpm)
    }
}
//柴油
toption = {
    color: ['#FFB186'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '6%',
        right: '4%',
        bottom: '20%',
        top:"12%",
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
            // axisTick: {
            //     alignWithLabel: true
            // }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220,320,256,420,230,260]
        }
    ]
};
var lineOpt = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        top:'10%',
        containLabel: true
    },
    color:["#FFB186"],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1时', '2时', '3时', '4时', '5时', '6时', '7时','8时','9时','10时','11时','12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时','24时']
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '电',
            type: 'line',
            stack: '总量',
            symbol: 'none',  //取消折点圆圈
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#FFB186" },
                        { offset: 1, color: "#FFFFFF" },
                    ])
                }
            },
            lineStyle: {
                color: "#FFB186",
                width: 1.5
            },
            data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201]
        },

    ]
};

const tOne = document.getElementsByClassName('t-one');
const tthree = document.getElementsByClassName('t-three');
for (let i = 0; i < tOne.length; i++) {
    const element = tOne[i];
    if (element.innerHTML === "") {
        echarts.init(element).setOption(toption)
    }
}
for (let i = 0; i < tthree.length; i++) {
    const element = tthree[i];
    if (element.innerHTML === "") {
        echarts.init(element).setOption(lineOpt)
    }
}
//柴油
coption = {
    color: ['#FFC663'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '6%',
        right: '4%',
        bottom: '20%',
        top:"12%",
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月','9月','10月','11月','12月'],
            // axisTick: {
            //     alignWithLabel: true
            // }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220,320,256,420,230,260]
        }
    ]
};
var lineOpc = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        top:'10%',
        containLabel: true
    },
    color:["#FFC663"],
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1时', '2时', '3时', '4时', '5时', '6时', '7时','8时','9时','10时','11时','12时','13时','14时','15时','16时','17时','18时','19时','20时','21时','22时','23时','24时']
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '电',
            type: 'line',
            stack: '总量',
            symbol: 'none',  //取消折点圆圈
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: "#FFC663" },
                        { offset: 1, color: "#FFFFFF" },
                    ])
                }
            },
            lineStyle: {
                color: "#FFC663",
                width: 1.5
            },
            data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330, 410,150, 232, 201]
        },

    ]
};

const cOne = document.getElementsByClassName('c-one');
const cthree = document.getElementsByClassName('c-three');
for (let i = 0; i < cOne.length; i++) {
    const element = cOne[i];
    if (element.innerHTML === "") {
        echarts.init(element).setOption(coption)
    }
}
for (let i = 0; i < cthree.length; i++) {
    const element = cthree[i];
    if (element.innerHTML === "") {
        echarts.init(element).setOption(lineOpc)
    }
}