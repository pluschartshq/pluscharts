import {isArray, isDefined, getComputedWidth, getComputedHeight} from './utilities';
import {generateLegends} from './legends';
import {mouseOver} from './mouseover';

/* Pie and donut chart */
export var drawPieDonutChart = (config) => {
    var chartWidth,
        chartHeight;
    var bindedElement = config.drawOn;
    var data = config.dataset.data;
    var bg = config.dataset.backgroundColor;
    var borderColor = config.dataset.borderColor;
    var borderWidth = config.dataset.borderWidth;
    var options = config.options;
    var legendWidth = options.legends.width;
    var legendHeight = options.legends.height;
    var label = [];
    // Copy label from the data array to a separate array
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
              label[key] = data[key].label;
        }
    }
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
    chartWidth = Math.min(chartHeight, chartWidth);
    chartHeight = Math.min(chartHeight, chartWidth);
    var innerHeight = chartHeight;
    var innerWidth = chartWidth;
    var svg = d3.select(bindedElement).append('svg')
                .attr("height", chartHeight)
                .attr("width", chartWidth);
    if(options.legends.display) {
        var legendMargin = 20;
        innerHeight = innerHeight - legendHeight - legendMargin;
        generateLegends(legendHeight, legendWidth, bg, label, svg, chartHeight, chartWidth);
    }
    var radius = Math.min(innerWidth, innerHeight) / 2 - borderWidth;
    var innerRadius = 0;
    var wrapperGroup = svg.append("g").attr("transform","translate("+(chartWidth - Math.min(innerWidth, innerHeight))/2 +", 0)");
    var g = wrapperGroup.append("g").attr("transform", "translate(" + (radius + (borderWidth)) + "," + (radius + (borderWidth)) + ")");
    if(config.type === "donut") {
        var outerWidth = config.options.width;
        innerRadius = radius - outerWidth;
    }
    var path = d3.arc()
                .outerRadius(radius)
                .innerRadius(innerRadius);
    var pie = d3.pie()
                .sort(null)
                .value(function(d) { 
                    return d.value;
                });
    var arc = g.selectAll(".pc-arc")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "pc-arc");
            
              arc.append("path")
                  .attr("d", path)
                  .attr("class", "pc-arc-path")
                  .attr("fill", function(d,i) {
                    if(isDefined(bg)) {
                        if(isArray(bg)) {
                            return bg[i];
                        }
                        else {
                            return bg;
                        }
                    }
                  })
                  .attr("stroke", function(d,i) {
                    if(isDefined(borderColor)) {
                        if(isArray(borderColor)) {
                            return borderColor[i];
                        }
                        else {
                            return borderColor;
                        }
                    }
                  })
                  .attr("stroke-width", function() {
                    if(isDefined(borderWidth)) {
                        return borderWidth;
                    }
                  });
    mouseOver(arc.select("path"), config);
    if(options.text.display) {
        var textPath = d3.arc()
            .outerRadius(radius - 30 - borderWidth)
            .innerRadius(radius - 30 - borderWidth);
        arc.append("text")
            .attr("transform", function(d) { return "translate(" + textPath.centroid(d.value) + ")"; })
            .attr("fill", options.text.color)
            .attr("text-anchor", "middle")
            .text(function(d) {return d.value; });
    }
}