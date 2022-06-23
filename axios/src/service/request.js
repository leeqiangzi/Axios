import axios from "axios";
import {BASE_URL, TIMEOUT} from "./config";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

// 请求拦截
instance.interceptors.request.use(config => {
    /**
     * 1、发送网络请求时，在页面的中间位置显示loading的组件
     *
     * 2、某一些请求要求用户必须携带token，如果没有携带，那么直接跳转到登录页面
     *
     * 3、params/data序列化操作
     */
    return config;
}, error => {
    // 一般不会在这里拦截
});

// 响应拦截
instance.interceptors.response.use(res => {
    return res.data;
}, error => {
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                console.log('请求错误');
                break;
            case 401:
                console.log('未授权错误');
                break;
            default:
                console.log('其他错误');
                break;
        }
    }
    return error;
});

export default instance;
