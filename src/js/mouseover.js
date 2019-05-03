import {changeColorOnMouseOver, resetColorOnMouseout} from './hover-color';
import {expandCircle, resetCircle} from './hover-expand';
import { initTooltip, moveTooltip, removeTooltip } from './tooltip';

export var mouseOver = (element, config) => {
    var bg = config.dataset.backgroundColor;
    var hoverBg = config.dataset.hoverBackgroundColor;
    var data = config.dataset.data;
    var bindedElement = d3.select(config.drawOn);
    element.on("mouseover", function(d,i) {
        changeColorOnMouseOver(hoverBg, i, this);
        initTooltip(bindedElement, data, i);
        if(d3.select(this).classed("pc-point-circle")) {
            expandCircle(this);
        }
    })
    .on("mousemove", function(d,i) {
        moveTooltip(bindedElement);
    })
    .on("mouseout", function(d, i) {
        resetColorOnMouseout(hoverBg, bg, this, i);
        removeTooltip();
        if(d3.select(this).classed("pc-point-circle")) {
            resetCircle(this);
        }
    });
}