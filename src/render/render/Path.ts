import {Component} from "./Component";
import {IPath, Polyline, PolylineStyle} from "../interfaces/IPath";

export class Path extends Component implements IPath {
    clear(): boolean {
        return this._adapter.path.clear();
    }

    create(polyline: Polyline | Polyline[]): boolean {
        return this._adapter.path.create(polyline);
    }

    delete(id: string | string[]): boolean {
        return this._adapter.path.delete(id);
    }

    focus(): boolean {
        return this._adapter.path.focus();
    }

    get(id: string): Polyline;
    get(id: string[]): Polyline[];
    get(id: string | string[]): Polyline | Polyline[] {
        return this._adapter.path.get(id);
    }

    hide(id: string | string[]): boolean {
        return this._adapter.path.hide(id);
    }

    hideAll(): boolean {
        return this._adapter.path.hideAll();
    }

    show(id: string | string[]): boolean {
        return this._adapter.path.show(id);
    }

    showAll(): boolean {
        return this._adapter.path.clear();
    }

    update(polyline: Polyline | Polyline[]): boolean {
        return this._adapter.path.update(polyline);
    }

    updateStyle(id: string, style: PolylineStyle): boolean {
        return this._adapter.path.updateStyle(id, style);
    }

}