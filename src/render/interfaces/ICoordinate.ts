// 坐标系类型
export enum CoordinateTypes {
    WGS84, // 国际通用地心坐标系
    GCJ02, // 国测局
    BD09, // 百度
}

// 2d坐标向量
export interface Vector2 {
    lng: number
    lat: number
    type: CoordinateTypes
}

// 3d坐标向量
export interface Vector3 extends Vector2 {
    z: number
    distance?: number // 镜头距中心点距离(单位:米)
    pitch?: number // 上下旋转角度（俯仰），单位是度
    yaw?: number // 左右旋转角度（航向），单位是度。可选参数，如果没有设置或者设置为0，系统会自动设置默认值
}

// 坐标处理对象
export interface ICoordinate {
    input<T extends Vector2 | Vector3>(coordinate: T | T[], type: CoordinateTypes): T | T[]

    output<T extends Vector2 | Vector3>(coordinate: T | T[], type: CoordinateTypes): T | T[]

}