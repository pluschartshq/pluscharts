export var expandCircle = (element) => {
    var originalRadius = +d3.select(element).attr("r");
    var hoverRadius = originalRadius + 2;
    d3.select(element).attr("r", hoverRadius);
}

export var resetCircle = (element) => {
    var hoverRadius = +d3.select(element).attr("r");
    var originalRadius = hoverRadius - 2;
    d3.select(element).attr("r", originalRadius);
}