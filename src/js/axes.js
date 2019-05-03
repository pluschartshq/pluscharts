import {isDefined} from './utilities';

export var generateAxis = (config, innerHeight, chartGroup, translateChartGroup, yScale, xScale) => {
    if(config.type === "bar") { // Discrete axis
        var y_axis = d3.axisLeft()
                .scale(yScale)
                .ticks(config.dataset.data.length)
                .tickFormat(function(d,i) { 
                    return d;
                 })
                .tickSizeOuter(0)
    }
    else {
        var y_axis = d3.axisLeft()
                .scale(yScale);
    }
    if(isDefined(config.options.axes.y.ticks)) {
        y_axis.ticks(config.options.axes.y.ticks);
    }
    if(config.type === "column") { // Discrete axis
        var x_axis = d3.axisBottom()
                .scale(xScale)
                .ticks(config.dataset.data.length)
                .tickFormat(function(d,i) { return d })
                .tickSizeOuter(0)
    }
    else {
        var x_axis = d3.axisBottom()
                    .scale(xScale);
    }
    if(isDefined(config.options.axes.x.ticks)) {
        x_axis.ticks(config.options.axes.x.ticks);
    }
    if(config.options.axes.y.display) {
        var yAxisElement = chartGroup.append("g").call(y_axis);
        yAxisElement.attr("transform", "translate(0, 0)")
                    .attr("text-anchor", "end")
                    .attr("class","pc-y-axis");
    }
    if(config.options.axes.x.display) {
        var xAxisElement = chartGroup.append("g").call(x_axis);
        xAxisElement.attr("transform", "translate(0, "+(innerHeight)+")")
                    .attr("text-anchor", "middle")
                    .attr("class", "pc-x-axis") ;
    }
    chartGroup.attr("transform", "translate("+translateChartGroup.x+", "+translateChartGroup.y+")");
}