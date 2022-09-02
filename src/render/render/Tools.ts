import {Component} from "./Component";
import {EditorTypes, ITools} from "../interfaces/ITools";

export class Tools extends Component implements ITools {
    remove(id: string | number) {
        return this._adapter.tools.remove(id);
    }

    start(type: EditorTypes) {
        return this._adapter.tools.start(type);
    }

    stop() {
        return this._adapter.tools.stop();
    }

}