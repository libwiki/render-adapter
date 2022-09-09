import {Vector3} from "./IVector";
import {Polyline} from "./IPath";

// 相机事件
export enum CameraEvents {
    moveStart,
    moveEnd,
    animationStart,
    animationPause,
    animationResume,
    animationEnd,
}

// 相机处理对象
export interface ICamera {
    get(): Vector3

    set(coordinate: Vector3)

    reset()

    setYaw(yaw: number)

    setPitch(pitch: number)

    setDistance(distance: number)

    playAnimation(points: Vector3[])

    playAnimationByPolyline(polyline: Polyline)

    pauseAnimation()

    resumeAnimation()

    stopAnimation()
}
