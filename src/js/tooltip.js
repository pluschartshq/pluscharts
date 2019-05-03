import { getComputedWidth, getComputedHeight } from "./utilities";

export var initTooltip = (bindedElement, data, i) => {
    var div = bindedElement.append("g")
    .attr("class", "pc-tooltip")
    .html(function() {
        var tooltipContent = ""+data[i].label+","+data[i].value;
        return tooltipContent;
    });
    positionTooltip(bindedElement);
}

export var moveTooltip = (bindedElement) => {
    positionTooltip(bindedElement);
}

export var removeTooltip = () => {
    d3.selectAll(".pc-tooltip").remove();
}

var positionTooltip = (bindedElement) => {
    bindedElement.style("position","relative");
    var bindedElementWidth = getComputedWidth(bindedElement.node());
    var bindedElementHeight = getComputedHeight(bindedElement.node());
    var mousePositionX = d3.mouse(bindedElement.node())[0];
    var mousePositionY = d3.mouse(bindedElement.node())[1];
    var tooltipRight = "auto", tooltipLeft="auto", tooltipTop="auto", tooltipBottom="auto";
    var tooltipHeight = d3.selectAll(".pc-tooltip").node().offsetHeight;
    var tooltipWidth = d3.selectAll(".pc-tooltip").node().offsetWidth;
    if((mousePositionX + tooltipWidth) > bindedElementWidth) {
        tooltipRight = bindedElementWidth - mousePositionX + 10 +"px";
    }
    else {
        tooltipLeft = mousePositionX + 10 + "px";
    }
    if((mousePositionY + tooltipHeight) > bindedElementHeight) {
        tooltipBottom = bindedElementHeight - mousePositionY + 10 + "px";
    }
    else {
        tooltipTop = mousePositionY + 10 + "px";
    }
    d3.selectAll(".pc-tooltip")
    .style("left", tooltipLeft)
    .style("right", tooltipRight)
    .style("top", tooltipTop)
    .style("bottom", tooltipBottom);
}