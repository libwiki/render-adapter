/// <reference path="index.d.ts" />

interface Config {
    mapKey: string,
    mapVer?: string,
    mapApi?: string
}

class TencentMap {
    elements: HTMLElement;
    mapKey: string;
    mapVer: string = '2.exp';
    mapApi: string = 'https://map.qq.com/api/js';

    load(elements: HTMLElement, config: Config) {
        this.elements = elements
        this.mapKey = config.mapKey
        if (config.mapVer) {
            this.mapVer = config.mapVer
        }
        if (config.mapApi) {
            this.mapApi = config.mapApi
        }
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.id = 'InitQQMap'
        script.src = this.mapApi + '?v=' + this.mapVer + '&key=' + this.mapKey + '&callback=InitQQMap'
        const head = document.getElementsByTagName('head')[0] || document.body
        const consts = document.getElementById(script.id)
        if (consts) {
            head.removeChild(consts)
        }
        head.appendChild(script)
        return new Promise((resolve, reject) => {
            try {
                if (typeof resolve == 'function') {
                    window.tencentMap = window.qq || {}
                    resolve(window.tencentMap)
                } else {
                    throw new Error('resolve must function')
                }
            } catch (e) {
                reject(e)
            }
        })
    }
}

export default new TencentMap()
