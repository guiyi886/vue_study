// 引入 axios 库，用于发送 HTTP 请求
import axios from "axios"

// 引入 querystring 模块，用于处理 URL 查询字符串
import qs from "querystring"

// 错误处理函数，根据不同的状态码输出相应的错误信息
const errorHandle = (status, info) => {
    switch (status) {
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }
}

// 创建 Axios 实例，设置请求超时时间为 5000 毫秒
const instance = axios.create({
    timeout: 5000
})

// 添加请求拦截器，在发送请求前对请求进行处理
instance.interceptors.request.use(
    config => {
        // 如果请求的方法是 "post"，则使用 qs.stringify() 方法将请求数据转换为 URL 查询字符串
        if (config.method === "post") {
            config.data = qs.stringify(config.data)
        }
        return config;
    },
    error => Promise.reject(error)
)

// 添加响应拦截器，在接收到响应后对响应进行处理
instance.interceptors.response.use(
    response => {
        // 如果响应的状态码是 200，则返回响应
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            // 否则，使用 errorHandle() 方法处理错误信息
            errorHandle(response.status, response.info)
        }
    },
    error => {
        // 如果发生错误，则使用 errorHandle() 方法处理错误信息
        const {response} = error;
        errorHandle(response.status, response.info)
        return Promise.reject(error);
    }
)

// 将封装好的 Axios 实例导出，以便其他地方可以引用和使用它进行网络请求
export default instance;
