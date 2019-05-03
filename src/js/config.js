export var defaultBarConfig = {
    drawOn : undefined,
    type: "bar",
    dataset : {
        data: undefined,
        backgroundColor: "#7d85df", //can be array or single color
        borderColor: "#2430b6",
        borderWidth: 2,
        label: undefined,
        legend: undefined
    },
    options : {
        barPadding: 5,
        barHeight: 15,
        text: {
            display: true,
            color: "#6c478c"
        },
        axes: {
            x: {
                display: true,
                scale: 2,
                min: 0,
                max: 100
            },
            y: {
                display: true,
                scale: 3,
                min: 0,
                max: 100
            }
        },
        legends: {
            display: true,
            width: 20,
            height: 20
        }
    }
}

export var defaultColumnConfig = {
    drawOn : undefined,
    type: "column",
    dataset : {
        data: undefined,
        backgroundColor: "#7d85df", //can be array or single color
        borderColor: "#2430b6",
        borderWidth: 2,
        label: undefined,
        legend: undefined
    },
    options : {
        barPadding: 5,
        barWidth: 15,
        text: {
            display: true,
            color: "#6c478c"
        },
        axes: {
            x: {
                display: true,
                scale: 3,
                min: 0,
                max: 100
            },
            y: {
                display: true,
                scale: 3,
                min: 0,
                max: 100
            }
        },
        legends: {
            display: true,
            width: 20,
            height: 20
        }
    }
}

export var defaultLineConfig = {
    drawOn : undefined,
    type: "line",
    dataset : {
        data: undefined,
        lineWidth: 2,
        legendLabel: undefined
    },
    options: {
        text: {
            display: true,
            color: "#6c478c"
        },
        points: {
            display: true,
            radius: 3
        },
        axes: {
            x: {
                display: true,
                scale: 1,
                min: 0,
                max: 160
            },
            y: {
                display: true,
                scale: 3,
                min: 0,
                max: 100
            }
        },
        legends: {
            display: false,
            width: 20,
            height: 20
        }
    }
}

export var defaultAreaConfig  = {
    drawOn : undefined,
    type: "area",
    dataset : {
        data: undefined,
        lineColor: "#e46161",
        lineWidth: 2,
        fillColor: "#d8aabe",
        legendLabel: undefined
    },
    options: {
        text: {
            display: true,
            color: "#6c478c"
        },
        points: {
            display: true,
            radius: 3
        },
        axes: {
            x: {
                display: true,
                scale: 3,
                min: 0,
                max: 100
            },
            y: {
                display: true,
                scale: 3,
                min: 0,
                max: 100
            }
        },
        legends: {
            display: true,
            width: 20,
            height: 20
        }
    }
}

export var defaultSplineConfig = {
    drawOn : undefined,
    type: "spline",
    dataset : {
        data: undefined,
        lineColor: "#006dd5",
        lineWidth: 2,
        legendLabel: undefined
    },
    options: {
        text: {
            display: true,
            color: "#6c478c"
        },
        points: {
            display: true,
            radius: 3
        },
        axes: {
            x: {
                display: true,
                scale: 3,
                min: 0,
                max: 100
            },
            y: {
                display: true,
                scale: 3,
                min: 0,
                max: 100
            }
        },
        legends: {
            display: true,
            width: 20,
            height: 20
        }
    }
}

export var defaultSplineAreaConfig  = {
    drawOn : undefined,
    type: "spline-area",
    dataset : {
        data: undefined,
        lineColor: "#e46161",
        lineWidth: 2,
        fillColor: "#d8aabe",
        legendLabel: undefined
    },
    options: {
        text: {
            display: true,
            color: "#6c478c"
        },
        points: {
            display: true,
            radius: 3
        },
        axes: {
            x: {
                display: true,
                scale: 3,
                min: 0,
                max: 100
            },
            y: {
                display: true,
                scale: 3,
                min: 0,
                max: 100
            }
        },
        legends: {
            display: true,
            width: 20,
            height: 20
        }
    }
}

export var defaultPieConfig = {
    drawOn : undefined,
    type: "pie",
    dataset : {
        data: undefined,
        backgroundColor: ["#6182ce", "#d18a96", "#81c0a7"],
        borderColor: "#ffffff",
        borderWidth: 2,
        label: undefined
    },
    options: {
        text: {
            display: true,
            color: "#fdfdfd"
        },
        legends: {
            display: true,
            width: 20,
            height: 20
        }
    }
}

export var defaultDonutConfig = {
    drawOn : undefined,
    type: "donut",
    dataset : {
        data: undefined,
        backgroundColor: ["#324e8f", "#9c4a64", "#20b98e"],
        borderColor: "#ffffff",
        borderWidth: 2,
        label: undefined
    },
    options: {
        width: 60,
        text: {
            display: true,
            color: "#f6f6f6"
        },
        legends: {
            display: true,
            width: 20,
            height: 20
        }
    }
}

export var completeConfig = (defaultConfig, config) => {
    for (var key in defaultConfig) {
        if(findById(config, key)) {
            if(typeof defaultConfig[key] === 'object') {
                completeConfig(defaultConfig[key], config[key]);
            }
        }
        else {
            config[key] = defaultConfig[key];
        }
    }
}

function findById(obj, id) {
    var result = false;
    for (var key in obj) {
        if(id in obj) {
            result = true;
            break;
        }
        else {
            if(typeof obj[key] === 'object') {
                return findById(obj[key], id);
            }
        }
    }
    return result;
}