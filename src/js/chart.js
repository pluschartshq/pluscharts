import { defaultBarConfig, defaultColumnConfig, defaultLineConfig, defaultAreaConfig, defaultSplineConfig, defaultSplineAreaConfig, defaultPieConfig, defaultDonutConfig, completeConfig} from './config';
import { drawBarChart } from './bar';
import { drawColumnChart } from './column';
import { drawLineOrAreaChart } from './line-area-spline';
import { drawPieDonutChart } from './pie-donut';

export var draw = (config) => {
    switch (config.type) {
        case "bar": {
            completeConfig(defaultBarConfig, config);
            return drawBarChart(config);
        }
        case "column": {
            completeConfig(defaultColumnConfig, config);
            return drawColumnChart(config);
        }
        case "line": {
            completeConfig(defaultLineConfig, config);
            return drawLineOrAreaChart(config)
        }
        case "area": {
            completeConfig(defaultAreaConfig, config);
            return drawLineOrAreaChart(config)
        }
        case "spline": {
            completeConfig(defaultSplineConfig, config);
            return drawLineOrAreaChart(config)
        }
        case "spline-area": {
            completeConfig(defaultSplineAreaConfig, config);
            return drawLineOrAreaChart(config)
        }
        case "pie": {
            completeConfig(defaultPieConfig, config);
            return drawPieDonutChart(config)
        }
        case "donut": {
            completeConfig(defaultDonutConfig, config);
            return drawPieDonutChart(config)
        }
    }
}