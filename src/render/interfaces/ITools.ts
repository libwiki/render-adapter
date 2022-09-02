// 工具类型
export enum EditorTypes {
    measureTool, // 测量工具
    getCoordTool, // 取点工具
}


// 工具处理对象
export interface ITools {
    start(type: EditorTypes)

    stop()

    remove(id: string | number)
}