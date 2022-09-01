// 坐标转换接口


enum CoordinateTypes {
    WGS84, // 国际通用地心坐标系
    GCJ02, // 国测局
    BD09, // 百度
}

interface Vector2 {
    lng: Number
    lat: Number
    type: CoordinateTypes
}

interface Vector3 extends Vector2 {
    z: Number
    pitch: Number // 上下旋转角度（俯仰），单位是度
    yaw: Number // 左右旋转角度（航向），单位是度。可选参数，如果没有设置或者设置为0，系统会自动设置默认值
}

interface ICoordinate {
    input(coordinate: Vector2): Vector2

    output(coordinate: Vector2): Vector2
}