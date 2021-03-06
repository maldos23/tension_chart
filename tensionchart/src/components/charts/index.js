import React,{ Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Chart extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            scale:0,
            data:[]
        }  
    }

    componentDidMount() {
        let chart = am4core.create("chartdiv", am4charts.XYChart);
        
        // Add data
        chart.data = [
            {index:1, x:0.001,y:200},
            {index:2, x:0.023,y:400},
            {index:3, x:0.19,y:600},
            {index:4, x:0.29,y:800}
            ];
        
        // Creo ejes
        var xAxes = chart.xAxes.push(new am4charts.ValueAxis());
        xAxes.renderer.grid.template.location = 0;
        //xAxes.renderer.minGridDistance = 50;
        xAxes.title.text="Deformacion";
        xAxes.cursorTooltipEnabled = true;
        xAxes.tooltip.disabled=true;
        xAxes.renderer.labels.template.fill=am4core.color("#EE0979");
        xAxes.adapter.add("dataContextValue",(value,target) => {
            return value
        })

        var yAxes = chart.yAxes.push(new am4charts.ValueAxis());
        yAxes.title.text="Carga";
        // Create series
        function createSeries(field, name) {
            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = field;
            series.dataFields.valueX = "x";
            series.dataFields.categoryX= "index";
            series.name = name;
            series.tooltipText = "{valueY.value}";
            series.fill = am4core.color("#EE0979");
            series.stroke = am4core.color("#EE0979");
            series.strokeWidth = 2;
            // Set up tooltip
            chart.adapter.add("tooltipText", function(ev) {
            var text = "[bold]{valueY}[/]\n";
            chart.series.each(function(item) {
                text += "[" + item.stroke.hex + "]●[/] " + item.name + ": {" + item.dataFields.valueY + "}\n";
            });
            return text;
            });
            
            series.tooltip.getFillFromObject = true;
            series.tooltip.background.fill = am4core.color("#fff");
            series.tooltip.label.fill = am4core.color("#00");
            
            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.stroke = am4core.color("#fff");
            bullet.circle.strokeWidth = 2;
            
            return series;
        }
        
        createSeries("y", "Carga - Deformacion");
        
        chart.legend = new am4charts.Legend();
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.maxTooltipDistance = 0;
        chart.exporting.menu = new am4core.ExportMenu();
        this.chart = chart;
    }
    
    componentWillUnmount() {
        if (this.chart) {
          this.chart.dispose();
        }
    }
  
    render() {
      return (
        <div id="chartdiv" style={{ width: "100%", height: "480px" }}></div>
      );
    }
}

export default Chart;