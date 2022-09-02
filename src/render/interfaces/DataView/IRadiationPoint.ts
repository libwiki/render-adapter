// 辐射圈对象
import {Vector3} from "../ICoordinate";
import {Text} from "../Common";

export interface IRadiationPoint {
    id: string
    radius: number
    color: string
    point: Vector3
    autoHeight: boolean // 自动判断下方是否有物体，设置正确高度，默认值：false
    text?: Text
}