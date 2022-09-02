import {IRender} from "../interfaces/IRender";

export class Component {
    _render: IRender

    constructor(render: IRender) {
        this._render = render
    }
}