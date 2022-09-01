import v1 from "./v1.js";
import * as VueRouter from "vue-router"

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes: [...v1], // `routes: routes` 的缩写
})

export default router