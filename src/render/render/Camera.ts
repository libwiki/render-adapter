import {ICamera} from "../interfaces/ICamera";
import {Vector3} from "../interfaces/IVector";
import {Polyline} from "../interfaces/IPath";
import {Component} from "./Component";

export class Camera extends Component implements ICamera {

    get(): Vector3 {
        return this._adapter.camera.get();
    }

    pauseAnimation() {
        return this._adapter.camera.pauseAnimation();
    }

    playAnimation(points: Vector3[]) {
        return this._adapter.camera.playAnimation(points);
    }

    playAnimationByPolyline(polyline: Polyline) {
        return this._adapter.camera.playAnimationByPolyline(polyline);
    }

    reset() {
        return this._adapter.camera.reset();
    }

    resumeAnimation() {
        return this._adapter.camera.resumeAnimation();
    }

    set(coordinate: Vector3) {
        return this._adapter.camera.set(coordinate);
    }

    setDistance(distance: number) {
        return this._adapter.camera.setDistance(distance);
    }

    setPitch(pitch: number) {
        return this._adapter.camera.setPitch(pitch);
    }

    setYaw(yaw: number) {
        return this._adapter.camera.setYaw(yaw);
    }

    stopAnimation() {
        return this._adapter.camera.stopAnimation();
    }

}
