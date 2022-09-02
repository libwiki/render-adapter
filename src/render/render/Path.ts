import {Component} from "./Component";
import {IPath, Polyline, PolylineStyle} from "../interfaces/IPath";

export class Path extends Component implements IPath {
    clear(): boolean {
        return this._render.path.clear();
    }

    create(polyline: Polyline | Polyline[]): boolean {
        return this._render.path.create(polyline);
    }

    delete(id: string | string[]): boolean {
        return this._render.path.delete(id);
    }

    focus(): boolean {
        return this._render.path.focus();
    }

    get(id: string): Polyline;
    get(id: string[]): Polyline[];
    get(id: string | string[]): Polyline | Polyline[] {
        return this._render.path.get(id);
    }

    hide(id: string | string[]): boolean {
        return this._render.path.hide(id);
    }

    hideAll(): boolean {
        return this._render.path.hideAll();
    }

    show(id: string | string[]): boolean {
        return this._render.path.show(id);
    }

    showAll(): boolean {
        return this._render.path.clear();
    }

    update(polyline: Polyline | Polyline[]): boolean {
        return this._render.path.update(polyline);
    }

    updateStyle(id: string, style: PolylineStyle): boolean {
        return this._render.path.updateStyle(id, style);
    }

}