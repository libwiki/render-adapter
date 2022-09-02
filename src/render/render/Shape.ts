import {Component} from "./Component";
import {Circle, IShape, Polygon, PolygonStyle} from "../interfaces/IShape";

export class Shape extends Component implements IShape {
    clear(): boolean {
        return this._adapter.shape.clear();
    }

    create<T extends Polygon | Circle>(polygon: T[] | T): boolean {
        return this._adapter.shape.create(polygon);
    }

    delete(id: string | string[]): boolean {
        return this._adapter.shape.delete(id);
    }

    focus(): boolean {
        return this._adapter.shape.focus();
    }

    get(id: string): Polygon;
    get(id: string[]): Polygon[];
    get<T extends Polygon | Circle>(id: string | string[]): T[] | T {
        return this._adapter.shape.get(id);
    }

    hide(id: string | string[]): boolean {
        return this._adapter.shape.hide(id);
    }

    hideAll(): boolean {
        return this._adapter.shape.hideAll();
    }

    show(id: string | string[]): boolean {
        return this._adapter.shape.show(id);
    }

    showAll(): boolean {
        return this._adapter.shape.showAll();
    }

    update<T extends Polygon | Circle>(polygon: T[] | T): boolean {
        return this._adapter.shape.update(polygon);
    }

    updateStyle(id: string, style: PolygonStyle): boolean {
        return this._adapter.shape.updateStyle(id, style);
    }

}