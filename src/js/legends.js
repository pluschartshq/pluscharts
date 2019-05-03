import {isArray} from './utilities';
export var generateLegends  = (legendHeight, legendWidth, bg, legendLabel, svg, chartHeight, chartWidth) => {
    var legendGroup = svg.append('g').attr("class","pc-legend-group");
    var legendSpacing = 4;
    var legendPadding = 20;
    if(isArray(legendLabel)) {
        var legendElement = legendGroup.selectAll("g").data(legendLabel).enter().append('g');
    }
    else {
        var legendElement = legendGroup.append('g');
    }
    legendElement.append('rect')
    .attr('width', legendWidth)
    .attr('height', legendHeight)
    .style('fill', function(d,i){
        if(isArray(bg)) {
            return bg[i];
        }
        else {
            return bg;
        }
    })
    legendElement.append('text')
    .attr('x', legendWidth + legendSpacing)
    .attr('y', legendHeight - legendSpacing)
    .text(function(d,i) {
        if(isArray(legendLabel)) {
            return legendLabel[i]; 
        }
        else {
            return legendLabel;
        }
    })
    .attr("class","pc-legend-text");
    var previousLegendPosition = 0;
    legendElement.attr('transform', function(d,i) {
        if(isArray(legendLabel)) {
            var currentLegendPosition = previousLegendPosition;
            previousLegendPosition = previousLegendPosition + this.getBBox().width + legendPadding;
            return 'translate(' + currentLegendPosition + ',0)';
        }
        else {
            return 'translate(0,0)';
        }
    })
    var legendGroupHeight = legendGroup.node().getBBox().height;
    var legendGroupPositionX = (chartWidth - legendGroup.node().getBBox().width)/2;
    legendGroup.attr('transform', function() {
        return 'translate(' + legendGroupPositionX + ',' + (chartHeight-legendGroupHeight) + ')';
    });
}