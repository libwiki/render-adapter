
export {}
declare global {
    interface Window {
        qq: any;
        InitTencentMap: () => Promise<any>;
    }
}
