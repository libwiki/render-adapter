import {Vector2, Vector3} from "./ICoordinate";

// 多边形样式类型
export enum PolygonStyleTypes {
    solid,
    dashed, // 普通虚线 点线
    box, // 块状的、体积的
    wave, // 波纹
    wideWave, // 宽波纹
    gradual, // 渐变
    dynamicGradual, // 动态渐变
    rotateLine, // 旋转线
    rotateArrow, // 旋转箭头
    rotateGradual, // 旋转渐变
}

// 多边形样式
export interface PolygonStyle {
    style: PolygonStyleTypes
    color: string // 颜色
    height: number // 围栏高度
    depthTest: Boolean //是否做深度检测，默认为true，true会被遮挡，false不会被遮挡
}

// 多边形对象
export interface Polygon extends PolygonStyle {
    id: string
    points: Vector3[]
    parts?: Vector3[] // 中间有孔洞
}

// 圆形对象
export interface Circle extends PolygonStyle {
    id: string
    center: Vector2 // 圆形坐标
    radius: number // 半径
}


// 多边形事件
export enum PolygonEvents {

}

// 图形绘制处理对象
export interface IShape {
    get<T extends Polygon | Circle>(id: string | string[]): T | T[]

    create<T extends Polygon | Circle>(polygon: T | T[]): boolean

    update<T extends Polygon | Circle>(polygon: T | T[]): boolean

    updateStyle(id: string, style: PolygonStyle): boolean

    delete(id: string | string[]): boolean


    clear(): boolean

    focus(): boolean

    show(id: string | string[]): boolean


    hide(id: string | string[]): boolean


    showAll(): boolean

    hideAll(): boolean
}