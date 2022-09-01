import {Vector3} from "./ICoordinate";
import {Image, Offset, Size, Text, TextStyle, VisibleState} from "./Common";


export interface Popup extends Vector3 {
    url: string // 弹窗HTML链接或者视频文件路径，也支持rtsp协议实时视频流
    size: Size
    offset?: Offset
    textStyle?: TextStyle
    visibleState?: VisibleState
}

export interface Point extends Vector3 {
    id: string,
    popup?: Popup,
    imagePath?: Image,
    hoverImage?: Image,
    autoHeight?: boolean // 自动判断下方是否有物体，设置正确高度，默认值：false
    labelText?: Text
}

export interface IMarker {
    get(id: string): Point

    get(ids: string[]): Point[]

    create(overlay: Point): boolean

    create(overlay: Point[]): boolean

    update(overlay: Point): boolean

    update(overlay: Point[]): boolean

    delete(id: string): boolean

    delete(ids: string[]): boolean

    clear(): boolean

    focus(): boolean

    show(id: string): boolean

    show(ids: string[]): boolean

    hide(id: string): boolean

    hide(ids: string[]): boolean

    showAll(): boolean

    hideAll(): boolean
}