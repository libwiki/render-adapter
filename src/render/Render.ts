import {IRender, Option} from "./interfaces/IRender";
import {ICamera} from "./interfaces/ICamera";
import {IDataView} from "./interfaces/IDataView";
import {IMarker} from "./interfaces/IMarker";
import {IPath} from "./interfaces/IPath";
import {IShape} from "./interfaces/IShape";
import {ITools} from "./interfaces/ITools";
import {IAdapter} from "./interfaces/IAdapter";
import {Camera} from "./render/Camera";
import {DataView} from "./render/DataView";
import {Path} from "./render/Path";
import {Shape} from "./render/Shape";
import {Tools} from "./render/Tools";


// 渲染器
export class Render implements IRender {
    camera: ICamera; // 相机对象
    dataView: IDataView; // 数据可视化图表对象
    marker: IMarker; // 覆盖物、标记、标签与弹框等
    path: IPath; // 路径
    shape: IShape; // 图形绘制（多边形、环形、多洞等区域选择绘制）
    tools: ITools; // 点、线、面工具（绘制、取点、测距）
    _version = '1.0.0' // 渲染器版本（api改动时、版本号应该跟着改动）
    _option: Option // 配置项
    _currentAdapter: IAdapter // 当前使用的适配器
    _adapters: Map<string, IAdapter> = new Map; // 所有注册的适配器

    constructor(adapter: IAdapter) {
        this.registerAdapter(adapter)
        this._currentAdapter = adapter;
        this.initComponent();

    }

    // 注册组件
    initComponent() {
        this.camera = new Camera(this._currentAdapter)
        this.dataView = new DataView(this._currentAdapter)
        this.path = new Path(this._currentAdapter)
        this.shape = new Shape(this._currentAdapter)
        this.tools = new Tools(this._currentAdapter)
    }

    // 获取渲染器版本号
    getVersion(): string {
        return this._version;
    }

    // 获取当前使用的适配器
    getCurrentAdapter(): IAdapter {
        return this._currentAdapter;
    }

    // 获取当前使用的适配器名称
    getAdapterName(): string {
        return this._currentAdapter.getAdapterName();
    }

    // 获取当前使用的适配器版本号
    getAdapterVersion(): string {
        return this._currentAdapter.getAdapterVersion();
    }


    // 注册适配器
    registerAdapter(adapter: IAdapter) {
        this._adapters.set(adapter.getAdapterName(), adapter);
    }

    // 开始渲染
    async render(name: string, option: Option): Promise<boolean> {
        const renderRes = await this._currentAdapter.render(option);
        if (!renderRes) {
            throw new Error("渲染失败")
        }
        this._option = option;
        return true;
    }

    // 释放清理
    async release(): Promise<boolean> {
        return this._currentAdapter.release();
    }


    // 切换适配器并渲染
    async switchAdapter(name: string, option?: Option): Promise<boolean> {
        const adapter = this._adapters.get(name)
        if (!adapter) {
            throw new Error(`渲染器【${name}】未注册`)
        }
        const oldAdapter = this._currentAdapter;
        try {
            const releaseRes = await this.release(); // 释放旧渲染器
            if (!releaseRes) {
                throw new Error(`渲染器【${oldAdapter.getAdapterName()}】释放失败`)
            }
            this._currentAdapter = adapter; // 设置新的渲染器
            const renderRes = await this.render(name, option || this._option); // 渲染
            if (!renderRes) {
                throw new Error(`渲染器【${adapter.getAdapterName()}】渲染失败`)
            }
            this.initComponent(); // 重新注册组件
            return true;
        } catch (e) {
            console.log(e)
            this._currentAdapter = oldAdapter
            throw e;
        }
    }

    // 获取当前渲染图原始实例
    getOriginalRender(): any {
        return this._currentAdapter.getOriginalRender();
    }

}
