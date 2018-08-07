// histogram2.js

window.onload = function(){
    var dom = document.getElementById("time-limit-content-text2");
    var myChart = echarts.init(dom);
    
   
    var app = {};
    option = null;

    option = {
        color: ['#194E9F'],
        tooltip : {
            trigger: 'axis',
            // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            //     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            // }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '13%',
            containLabel: true
        },
        xAxis:  {
            type: 'value',
            axisLabel:{
                formatter:'{value} h'
            }
        },
        yAxis: {
            type: 'category',
            data: ['top1','top2','top3'],
            formatter: function (value) {
                return '{' + value + '| }\n{value|' + value + '}';
            },
        },
        series: [
            {
                name: '每单耗时',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data: [8,5,3]
            }
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}