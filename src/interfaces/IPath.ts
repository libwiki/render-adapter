import {Vector3} from "./ICoordinate";

// 线段样式类型
export enum PolylineStyleTypes {
    solid,
    arrow,
    arrowDot,
    dashed, // 普通虚线
    dashedDot, // 普通虚线
    flow, // 流动线
    beam, // 光流线
}

// 线段样式
export interface PolylineStyle {
    style: PolylineStyleTypes
    color: string // 颜色
    width: number // 路径宽度
    depthTest: Boolean //是否做深度检测，默认为true，true会被遮挡，false不会被遮挡
}

// 线段对象
export interface Polyline extends PolylineStyle {
    id: string
    points: Vector3[]
}


// 线段事件
export enum PolylineEvents {

}

// 路径处理对象
export interface IPath {
    get(id: string): Polyline

    get(ids: string[]): Polyline[]

    create(polyline: Polyline): boolean

    create(polyline: Polyline[]): boolean

    update(polyline: Polyline): boolean

    update(polyline: Polyline[]): boolean

    updateStyle(id: string, style: PolylineStyle): boolean

    delete(id: string): boolean

    delete(ids: string[]): boolean

    clear(): boolean

    focus(): boolean

    show(id: string): boolean

    show(ids: string[]): boolean

    hide(id: string): boolean

    hide(ids: string[]): boolean

    showAll(): boolean

    hideAll(): boolean
}