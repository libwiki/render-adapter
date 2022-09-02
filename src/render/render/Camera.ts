import {ICamera} from "../interfaces/ICamera";
import {Vector3} from "../interfaces/ICoordinate";
import {Polyline} from "../interfaces/IPath";
import {Component} from "./Component";

export class Camera extends Component implements ICamera {

    get(): Vector3 {
        return this._render.camera.get();
    }

    pauseAnimation() {
        return this._render.camera.pauseAnimation();
    }

    playAnimation(points: Vector3[]) {
        return this._render.camera.playAnimation(points);
    }

    playAnimationByPolyline(polyline: Polyline) {
        return this._render.camera.playAnimationByPolyline(polyline);
    }

    reset() {
        return this._render.camera.reset();
    }

    resumeAnimation() {
        return this._render.camera.resumeAnimation();
    }

    set(coordinate: Vector3) {
        return this._render.camera.set(coordinate);
    }

    setDistance(distance: number) {
        return this._render.camera.setDistance(distance);
    }

    setPitch(pitch: number) {
        return this._render.camera.setPitch(pitch);
    }

    setYaw(yaw: number) {
        return this._render.camera.setYaw(yaw);
    }

    stopAnimation() {
        return this._render.camera.stopAnimation();
    }

}