let proUrl='http://vueshop.glbuys.com';
let devUrl='http://vueshop.glbuys.com';
let baseUrl=process.env.NODE_ENV==="development"?proUrl:devUrl;
export default{
    baseUrl:baseUrl,
    path:'/',
    token:'1ec949a15fb709370f'
}
