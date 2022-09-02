import {IAdapter, RenderAttribute} from "./IAdapter";


export interface Option {

}


export interface IRender extends RenderAttribute {

    // 注册适配器
    registerAdapter(adapter: IAdapter)

    // 开始渲染
    render(name: string, option: Option): Promise<boolean>

    // 释放
    release(): Promise<boolean>

    // 切换适配器并渲染
    switchAdapter(name: string, option?: Option): Promise<boolean>

    // 获取当前使用的适配器
    getCurrentAdapter(): IAdapter

    // 当前版本id
    getVersion(): string
}