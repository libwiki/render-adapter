export interface IRenderAdapter {

}


export interface IRender {
    init()

    release()

    getVersion()

    switchRender()

    getRenderType()

    getRenderVersion()

    getRender()
}