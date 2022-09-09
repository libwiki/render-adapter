import {CoordinateTypes, IVector, Vector2, Vector3} from "../interfaces/IVector";
import gcoord from 'gcoord';
import {CRSTypes} from "gcoord/src/crs";

const Types = {
    [CoordinateTypes.WGS84]: CRSTypes.WGS84, // WGS-84坐标系，GPS设备获取的经纬度坐标
    [CoordinateTypes.GCJ02]: CRSTypes.GCJ02, // GCJ-02坐标系，google中国地图、soso地图、aliyun地图、mapabc地图和高德地图所用的经纬度坐标
    [CoordinateTypes.BD09]: CRSTypes.BD09, // BD-09坐标系，百度地图采用的经纬度坐标
    [CoordinateTypes.WebMercator]: CRSTypes.WebMercator, // Web Mercator投影，墨卡托投影，同EPSG3857，单位：米
}

export class Vector implements IVector {
    static transform<T extends Vector2 | Vector3>(coordinate: T, type: CoordinateTypes): T;
    static transform<T extends Vector2 | Vector3>(coordinate: T[], type: CoordinateTypes): T[];
    static transform<T extends Vector2 | Vector3>(coordinate: T | T[], type: CoordinateTypes): T | T[] {
        if (Array.isArray(coordinate)) {
            return coordinate.map(v => Vector.transform(v, type));
        }
        if (coordinate.type === type) {
            return coordinate;
        }
        if ([coordinate.type, type].includes(CoordinateTypes.WebMercator)) { // WebMercator可能需要单独处理（gcoord库的转换缺少了zoom）

        }
        const ll = gcoord.transform([coordinate.lng, coordinate.lat], Types[coordinate.type], Types[type]);
        coordinate.lng = ll[0]
        coordinate.lat = ll[1]
        coordinate.type = type
        return coordinate;
    }

    transform<T extends Vector2 | Vector3>(coordinate: T, type: CoordinateTypes): T;
    transform<T extends Vector2 | Vector3>(coordinate: T[], type: CoordinateTypes): T[];
    transform<T extends Vector2 | Vector3>(coordinate: T[] | T, type: CoordinateTypes): T[] | T {
        if (Array.isArray(coordinate)) {
            return coordinate.map(v => Vector.transform(v, type));
        }
        return Vector.transform(coordinate, type);
    }

}
