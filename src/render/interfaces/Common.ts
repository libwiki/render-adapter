// 可见状态类型
export enum VisibleState {
    auto,
    always,
    hover,
    click,
    none,
}

// 文字样式对象（属性待扩展）
export interface TextStyle {
    color: string
    size: number
    backgroundColor?: string
}

export interface Text extends TextStyle {
    visibleState?: VisibleState
    text?: string
    style?: TextStyle
}

// 高宽
export interface Size {
    width: number
    height: number
}

// 偏移量
export interface Offset {
    x: number
    y: number
}

// 图片对象
export interface Image extends Size {
    url: string
}