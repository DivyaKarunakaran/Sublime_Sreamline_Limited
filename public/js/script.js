
var serverDataChart;

$(document).ready(function(){
    
    //making data for chart
    function makeChartData(jsonData) {
        var data = JSON.parse(jsonData);
        var chartData = [];
        for (var i = 0; i < data.length; i++) {
            var unitData = [];
            unitData['data_label'] = data[i]["data_label"];
            unitData['data_value'] = data[i]["data_value"];
            chartData.push(unitData);
        }
        return chartData;
    }

    //drawing chart based on server data
    function showChart(jsonData, url) {
        var chartData = makeChartData(jsonData);
        if (serverDataChart == undefined) {
            var serverDataChart = AmCharts.makeChart("chartdiv", {
                "type": "serial",
                "dataProvider": chartData,
                "titles": [
                    {
                        "text": url,
                        "size": 15
                    }
                ],
                "graphs": [{
                    "balloonText": "<b>[[category]] - [[value]]</b>",
                    "fillAlphas": 0,
                    "bullet": "round",
                    "bulletSize": 10,
                    "bulletAlpha": 0.3,
                    "liineThinkness": 2,
                    "lineColor": "#0022FF",
                    "type": "line",
                    "valueField": "data_value"
                }],
                "chartCursor": {
                    "categoryBalloonEnabled": false,
                    "cursorAlpha": 0,
                    "zoomable": true
                },
                "categoryField": "data_label",
                "categoryAxis": {
                    "gridPosition": "start",
                    "labelRotation": 45
                },
                "export": {
                    "enabled": true
                }

            });
        } else {
            serverDataChart.dataProvider = chartData; 
            serverDataChart.validateData();
        }
        
    }
    
    //event for select server names
    $('#server-list').on('change', function() {
        var selected_servername = $(this).find("option:selected").attr('value');
        //get data by a selected server name
        $.ajax({
            type: 'POST',
            url: 'data/serverdata/' + selected_servername,
            success: function(result) {
                showChart(result, selected_servername);
            }
        })
    });

    //initialize server names
    $('#server-list > option').removeAttr('selected')
    $('#server-list > option:nth-child(1)').attr('selected', true);
    $('#server-list').change();
});
