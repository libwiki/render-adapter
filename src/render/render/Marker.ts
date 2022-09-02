import {Component} from "./Component";
import {IMarker, Point} from "../interfaces/IMarker";

export class Marker extends Component implements IMarker {
    clear(): boolean {
        return this._adapter.marker.clear();
    }

    create(overlay: Point | Point[]): boolean {
        return false;
    }

    delete(id: string | string[]): boolean {
        return this._adapter.marker.delete(id);
    }

    focus(): boolean {
        return this._adapter.marker.focus();
    }

    get(id: string): Point;
    get(id: string[]): Point[];
    get(id: string | string[]): Point | Point[] {
        return this._adapter.marker.get(id);
    }

    hide(id: string | string[]): boolean {
        return this._adapter.marker.hide(id);
    }

    hideAll(): boolean {
        return this._adapter.marker.hideAll();
    }


    show(id: string | string[]): boolean {
        return this._adapter.marker.show(id);
    }

    showAll(): boolean {
        return this._adapter.marker.showAll();
    }


    update(overlay: Point | Point[]): boolean {
        return this._adapter.marker.update(overlay);
    }


}