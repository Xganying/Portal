// histogram.js

window.onload = function(){
    var dom = document.getElementById("time-limit-content-text1");
    var myChart = echarts.init(dom);
   
    var app = {};
    option = null;

    option = {
        color: ['#194E9F'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '13%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['5月', '6月'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel:{
                    formatter:'{value} h'
                }
            }
        ],
        series : [
            {
                name:'每单耗时',
                type:'bar',
                barWidth: '60%',
                data:[47, 38],
                label: { // 在顶端显示具体数字
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                // markLine : { // 虚线效果
                //     lineStyle: {
                //         normal: {
                //             type: 'dashed'
                //         }
                //     },
                //     data : [
                //         [{type : 'max'},{type : 'min'}] //  
                //     ]
                // }
            },
        ]
    };
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}