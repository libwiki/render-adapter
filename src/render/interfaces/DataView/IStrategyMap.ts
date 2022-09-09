import {Vector3} from "../IVector";


// 线段类型
export enum StrategyLineTypes {
    solid,
    arrow,
    radial, // 射线
}

// 线段样式
export interface StrategyLineStyle {
    curvature: number, // [1~100]，默认值：50 此值越小曲线越平, 反之曲线越陡峭
    color: string
    width: number
}

// 线段、结束点数据对象
export interface StrategyLine {
    endPoint: Vector3
    lineStyle: StrategyLineStyle
}

// 迁移图对象
export interface IStrategyMap {
    id: string
    startPoint: Vector3
    lineType: StrategyLineTypes
    lines: StrategyLine[]
}
