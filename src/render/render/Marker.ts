import {Component} from "./Component";
import {IMarker, Point} from "../interfaces/IMarker";

export class Marker extends Component implements IMarker {
    clear(): boolean {
        return this._render.marker.clear();
    }

    create(overlay: Point | Point[]): boolean {
        return false;
    }

    delete(id: string | string[]): boolean {
        return this._render.marker.delete(id);
    }

    focus(): boolean {
        return this._render.marker.focus();
    }

    get(id: string): Point;
    get(id: string[]): Point[];
    get(id: string | string[]): Point | Point[] {
        return this._render.marker.get(id);
    }

    hide(id: string | string[]): boolean {
        return this._render.marker.hide(id);
    }

    hideAll(): boolean {
        return this._render.marker.hideAll();
    }


    show(id: string | string[]): boolean {
        return this._render.marker.show(id);
    }

    showAll(): boolean {
        return this._render.marker.showAll();
    }


    update(overlay: Point | Point[]): boolean {
        return this._render.marker.update(overlay);
    }


}