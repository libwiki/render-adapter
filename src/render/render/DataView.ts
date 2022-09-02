import {Component} from "./Component";
import {DataViewComponent, IDataView} from "../interfaces/IDataView";

export class DataView extends Component implements IDataView {
    clear(): boolean {
        return this._adapter.dataView.clear();
    }

    create<T extends DataViewComponent>(shape: T[] | T): boolean {
        return this._adapter.dataView.create(shape);
    }

    delete(id: string | string[]): boolean {
        return this._adapter.dataView.delete(id);
    }

    focus(): boolean {
        return this._adapter.dataView.focus();
    }

    get(id: string): DataViewComponent;
    get(id: string[]): DataViewComponent[];
    get<T extends DataViewComponent>(id: string | string[]): T[] | T {
        return this._adapter.dataView.get(id);
    }

    hide(id: string | string[]): boolean {
        return this._adapter.dataView.hide(id);
    }

    hideAll(): boolean {
        return this._adapter.dataView.hideAll();
    }

    show(id: string | string[]): boolean {
        return this._adapter.dataView.show(id);
    }

    showAll(): boolean {
        return this._adapter.dataView.showAll();
    }

    update<T extends DataViewComponent>(shape: T[] | T): boolean {
        return this._adapter.dataView.update(shape);
    }

}