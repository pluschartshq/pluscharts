import {isDefined, isArray} from './utilities';

export var changeColorOnMouseOver = (hoverBg, i, element) => {
    if(isDefined(hoverBg)) {
        d3.select(element).attr("fill",function() {
            if(isArray(hoverBg)) {
                return hoverBg[i];
            }
            else {
                return hoverBg;
            }
        })
    }
    else {
        d3.select(element).attr("fill-opacity",.7);
    }
}

export var resetColorOnMouseout = (hoverBg, bg, element, i) => {
    if(isDefined(hoverBg)) {
        d3.select(element).attr("fill",function() {
            if(isArray(bg)) {
                return bg[i];
            }
            else {
                return bg;
            }
        })
    }
    else {
        d3.select(element).attr("fill-opacity",1);
    }
}