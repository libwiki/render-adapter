import {ICamera} from "./ICamera";
import {IMarker} from "./IMarker";
import {IPath} from "./IPath";
import {IShape} from "./IShape";
import {ITools} from "./ITools";
import {IDataView} from "./IDataView";
import {Option} from "./IRender";

export interface RenderAttribute {
    camera: ICamera
    marker: IMarker
    path: IPath
    shape: IShape
    tools: ITools
    dataView: IDataView

    getAdapterName(): string

    getAdapterVersion(): string
}

export interface IAdapter extends RenderAttribute {

    render(option: Option): Promise<boolean>

    release(): Promise<boolean>
}