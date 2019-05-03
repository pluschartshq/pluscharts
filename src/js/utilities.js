export var largest = (x) => {
    return d3.max(x);
}

export var isArray = (x) => {
    return Array.isArray(x);
};

export var isJson = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export var isUndefined = (x) => {
    return typeof x === 'undefined';
};

export var isDefined = (x) => {
    return typeof x !== 'undefined';
};

export var sortAscendingByValue = (arr,value) => {
    arr.sort(function (a, b) {
        return a.x - b.x;
    });
    return arr;
}

export var getComputedWidth = (element) => {
    var elementNode = d3.select(element).node();
    return elementNode.offsetWidth - parseFloat(getComputedStyle(elementNode).paddingLeft) - parseFloat(getComputedStyle(elementNode).paddingRight);
}

export var getComputedHeight = (element) => {
    var elementNode = d3.select(element).node();
    return elementNode.offsetHeight - parseFloat(getComputedStyle(elementNode).paddingTop) - parseFloat(getComputedStyle(elementNode).paddingBottom);
}

export var getParentElementByClass = (childElement, parentClass) => {
    var child = d3.select(childElement);
    var parent = child.select(function() {
        var element = this;
        while (!d3.select(element).classed(parentClass)) {
            element = element.parentElement;
        }        
        return element;
    });
    return parent;
}