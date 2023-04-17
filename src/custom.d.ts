// 导出 key 所在的对象
// 原始的类名和相应的值都会被转换为这个对象
declare module "*.css" {
    const css : {[key:string]: string}
    export default css;
}