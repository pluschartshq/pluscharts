import {sortAscendingByValue, getComputedWidth, getComputedHeight, isDefined} from './utilities';
import {generateAxis} from './axes';
import {generateLegends} from './legends';
import { mouseOver } from './mouseover';

/* Line chart */
export var drawLineOrAreaChart = (config) => {
    var chartWidth,
        chartHeight;
    var marginForAxis = {top: 20, right: 20, bottom: 20, left: 30}; 
    var translateChartGroup = {x: 0, y:0};
    var bindedElement = config.drawOn;
    var options = config.options;
    var data = sortAscendingByValue(config.dataset.data, config.dataset.data.label);
    var lineColor = config.dataset.lineColor;
    var lineWidth = config.dataset.lineWidth;
    var fillColor = config.dataset.fillColor;
    var legendLabel = config.dataset.legendLabel;
    var legendWidth = options.legends.width;
    var legendHeight = options.legends.height;
    if(options.size.width === "container") {
        chartWidth = getComputedWidth(bindedElement);
    }
    else {
        chartWidth = options.size.width;
    }
    if(options.size.height === "container") {
        chartHeight = getComputedHeight(bindedElement);
    }
    else {
        chartHeight = options.size.height;
    }
    var innerHeight = chartHeight;
    var innerWidth = chartWidth;
    innerWidth = innerWidth - marginForAxis.left - marginForAxis.right;
    innerHeight = innerHeight - marginForAxis.top - marginForAxis.bottom;
    var svg = d3.select(bindedElement).append('svg')
                .attr("class","pc-chart-wrapper")
                .attr("height", chartHeight)
                .attr("width", chartWidth)
    var chartGroup = svg.append("g");
    var dataGroup = chartGroup.append("g");
    if(options.legends.display) {
        var legendMargin = 20;
        innerHeight = innerHeight - legendHeight - legendMargin;
        if(config.type === "area") {
            generateLegends(legendHeight, legendWidth, fillColor, legendLabel, svg, chartHeight, chartWidth);
        }
        else {
            generateLegends(legendHeight, legendWidth, lineColor, legendLabel, svg, chartHeight, chartWidth);
        }
    }
    var yScale = d3.scaleLinear()
            .domain([options.axes.y.min, options.axes.y.max])
            .range([innerHeight, 0]);
    var xScale = d3.scaleLinear()
            .domain([config.options.axes.x.min, config.options.axes.x.max])
            .range([0, innerWidth]);
    translateChartGroup.x = translateChartGroup.x + marginForAxis.left;
    translateChartGroup.y = translateChartGroup.y + marginForAxis.bottom;
    generateAxis(config, innerHeight, chartGroup, translateChartGroup, yScale, xScale);

    if(config.type === "area") {
        var area = d3.area()
                    .x(function(d) { return xScale(d.label); })
                    .y1(function(d) { return yScale(d.value); })
                    .y0(yScale(0))
                    .curve(d3.curveLinear);
        var path = dataGroup.append("path")
                    .datum(data)
                    .attr("fill", fillColor)
                    .attr("stroke", lineColor)
                    .attr("stroke-width", lineWidth)
                    .attr("d", area);
    }
    else if (config.type === "line"){
        var line = d3.line()
                    .x(function(d) { return xScale(d.label); })
                    .y(function(d) { return yScale(d.value); })
                    .curve(d3.curveLinear);
        var path = dataGroup.append("path")
                    .attr( "d", line(data))
                    .attr("fill", "none")    
                    .attr("stroke", lineColor)
                    .attr("stroke-width", lineWidth)
    }
    else if (config.type === "spline") {
        var line = d3.line()
                    .x(function(d) { return xScale(d.label) })
                    .y(function(d) { return yScale(d.value); })
                    .curve(d3.curveMonotoneX);
        var path = dataGroup.append("path")
                    .attr( "d", line(data))
                    .attr("fill", "none")    
                    .attr("stroke", lineColor)
                    .attr("stroke-width", lineWidth)
    }
    else {
        var area = d3.area()
                    .x(function(d) { return xScale(d.label); })
                    .y1(function(d) { return yScale(d.value); })
                    .y0(yScale(0))
                    .curve(d3.curveMonotoneX);
        var path = dataGroup.append("path")
                    .datum(data)
                    .attr("fill", fillColor)
                    .attr("stroke", lineColor)
                    .attr("stroke-width", lineWidth)
                    .attr("d", area);
    }
    if(options.text.display) {
        var g = dataGroup.append('g')
                .attr('class',"pc-text");
        var text = g.selectAll("text").data(data)
                .enter()
                .append("text")
                .text(function(d) {
                    return d.value;
                })
                .attr("y", function(d) {
                    return yScale(d.value);
                })
                .attr("x", function(d) {
                    return xScale(d.label);
                })
                .attr("dominant-baseline","text-before-edge")
                .attr("fill", options.text.color);
    }
    if(options.points.display) {
        var g = dataGroup.append("g");
        var points = g.selectAll("circle").data(data)
                .enter()
                .append("circle")
                .text(function(d) {
                    return d.value;
                })
                .attr("class", "pc-point-circle")
                .attr("r", options.points.radius)
                .attr("cy", function(d) {
                    return yScale(d.value);
                })
                .attr("cx", function(d) {
                    return xScale(d.label);
                })
                .attr("dominant-baseline","text-before-edge")
                .attr("fill", "#ffffff")
                .attr("stroke", options.points.color)
                .attr("stroke", function(){
                    if (isDefined(options.points.color)) {
                        return options.points.color;
                    }
                    else {
                        return lineColor;
                    }
                })
                .attr("stroke-width", 2);
        mouseOver(points, config, svg);
    }
}