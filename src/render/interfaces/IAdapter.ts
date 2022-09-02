import {ICamera} from "./ICamera";
import {IMarker} from "./IMarker";
import {IPath} from "./IPath";
import {IShape} from "./IShape";

export interface IAdapter {
    camera: ICamera
    marker: IMarker
    path: IPath
    shape: IShape

    getName(): string

    getVersion(): string
}