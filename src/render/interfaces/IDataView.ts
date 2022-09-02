import {IHeatMap} from "./DataView/IHeatMap";
import {IRadiationPoint} from "./DataView/IRadiationPoint";
import {IStrategyMap} from "./DataView/IStrategyMap";

export type DataViewComponent = IHeatMap | IRadiationPoint | IStrategyMap

export interface IDataView {
    get<T extends DataViewComponent>(id: string | string[]): T | T[]

    create<T extends DataViewComponent>(polygon: T | T[]): boolean

    update<T extends DataViewComponent>(polygon: T | T[]): boolean

    delete(id: string | string[]): boolean


    clear(): boolean

    focus(): boolean

    show(id: string | string[]): boolean


    hide(id: string | string[]): boolean


    showAll(): boolean

    hideAll(): boolean
}