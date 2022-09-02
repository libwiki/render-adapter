import {Vector2} from "../ICoordinate";

// 限定区域对象
export interface Box {
    minX: number
    maxX: number
    minY: number
    maxY: number
    minZ?: number
    maxZ?: number
}

// 热力范围对象
export interface Range {
    min: number
    max: number
}

// 热力点
export interface HeatPoint extends Vector2 {
    value: number
}

// 热力图对象
export interface IHeatMap {
    id: string
    box: Box
    range: Range
    radius: number // 热力点影像半径范围，取值范围：[任意数值]
    points: HeatPoint[]
}