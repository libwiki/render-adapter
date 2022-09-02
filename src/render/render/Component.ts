import {IAdapter} from "../interfaces/IAdapter";

export class Component {
    _adapter: IAdapter

    constructor(adapter: IAdapter) {
        this._adapter = adapter
    }
}