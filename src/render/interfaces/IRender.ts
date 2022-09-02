import {IAdapter} from "./IAdapter";


export interface Option {

}


export interface IRender extends IAdapter {

    registerAdapter(name: string, adapter: IAdapter)

    init(name: string, option: Option): IAdapter

    switchAdapter(name: string, option?: Option): IAdapter

    getCurrentAdapter(): IAdapter

    release()
}