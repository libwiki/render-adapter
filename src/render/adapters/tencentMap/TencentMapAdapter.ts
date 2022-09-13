import {IAdapter} from "../../interfaces/IAdapter";
import {CoordinateTypes} from "../../interfaces/IVector";
import {ICamera} from "../../interfaces/ICamera";
import {IMarker} from "../../interfaces/IMarker";
import {IDataView} from "../../interfaces/IDataView";
import {IPath} from "../../interfaces/IPath";
import {IShape} from "../../interfaces/IShape";
import {ITools} from "../../interfaces/ITools";
import {Option} from "../../interfaces/IRender";
import TencentMap from "./lib/TencentMap";

export class TencentMapAdapter implements IAdapter {
    _option: Option;
    CoordinateSystem: CoordinateTypes;
    camera: ICamera;
    dataView: IDataView;
    marker: IMarker;
    path: IPath;
    shape: IShape;
    tools: ITools;

    _originalRender: any;


    getAdapterName(): string {
        return "tencentMap";
    }

    getAdapterVersion(): string {
        return "1.0.0";
    }

    getOriginalRender(): any {
        return this._originalRender;
    }

    release(): Promise<boolean> {
        return Promise.resolve(false);
    }

    async render(option: Option): Promise<boolean> {
        try {
            await this._initMap()
            return true
        } catch (e) {
            return false;
        }
    }

    async _initMap() {
        const o = this._option;
        const tMap = await TencentMap.load(o.element, {mapKey: o.key})
        const myLatlng = new tMap.maps.LatLng(o.center.lat, o.center.lng);
        this._originalRender = new tMap.maps.Map(o.element, {
            zoom: o.center.z,
            center: myLatlng,
            mapTypeId: tMap.maps.MapTypeId.ROADMAP
        });
    }

}
