// 坐标系类型
export enum CoordinateTypes {
    WGS84, // WGS-84坐标系，GPS设备获取的经纬度坐标
    GCJ02, // GCJ-02坐标系，google中国地图、soso地图、aliyun地图、mapabc地图和高德地图所用的经纬度坐标
    BD09, // BD-09坐标系，百度地图采用的经纬度坐标
    WebMercator, // Web Mercator投影，墨卡托投影，同EPSG3857，单位：米

}

// 2d坐标向量
export interface Vector2 {
    lng: number // lng
    lat: number // lat
    type: CoordinateTypes
    z?: number


}

// 3d坐标向量
export interface Vector3 extends Vector2 {
    distance?: number // 镜头距中心点距离(单位:米)
    pitch?: number // 上下旋转角度（俯仰），单位是度
    yaw?: number // 左右旋转角度（航向），单位是度。可选参数，如果没有设置或者设置为0，系统会自动设置默认值
}

// 坐标处理对象
export interface IVector {
    transform<T extends Vector2 | Vector3>(coordinate: T | T[], type: CoordinateTypes): T | T[]

}
