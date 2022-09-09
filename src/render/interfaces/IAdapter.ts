import {ICamera} from "./ICamera";
import {IMarker} from "./IMarker";
import {IPath} from "./IPath";
import {IShape} from "./IShape";
import {ITools} from "./ITools";
import {IDataView} from "./IDataView";
import {Option} from "./IRender";
import {CoordinateTypes} from "./IVector";

export interface RenderAttribute {
    camera: ICamera
    marker: IMarker
    path: IPath
    shape: IShape
    tools: ITools
    dataView: IDataView

    getAdapterName(): string

    getAdapterVersion(): string

    getOriginalRender(): any // 获取当前渲染图原始实例
}

export interface IAdapter extends RenderAttribute {
    CoordinateSystem: CoordinateTypes // 使用的坐标系

    render(option: Option): Promise<boolean>

    release(): Promise<boolean>
}
