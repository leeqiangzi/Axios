import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

        this._fetchAll();
    }

    /**
     * 创建新的实例：每个实例可以拥有自己特殊的配置
     * @private
     */
    _fetchInstanceCreate() {
        const instance1 = axios.create({
            baseURL: 'http://111111xxxxxx',
            timeout: 5000,
            headers: {}
        });
        const instance2 = axios.create({
            baseURL: 'http://22222xxxxxx',
            timeout: 3000,
            headers: {}
        })
    }

    /**
     * 合并多个网络请求
     * @private
     */
    _fetchAll() {
        // const request1 = axios({
        //     url: 'http://httpbin.org/get',
        //     params: {name: 'why', age: 18}
        // });
        // const request2 = axios({
        //     url: 'http://httpbin.org/post',
        //     data: {name: 'why', age: 18},
        //     method: 'post'
        // });
        //
        // axios.all([request1, request2]).then(res => {
        //     console.log(res);
        // }).catch(error => {
        //     console.log(error);
        // })

        const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('promise1');
            }, 1000);
        });
        const promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('promise2');
            }, 3000);
        });
        Promise.all([promise1, promise2]).then(res => {
            console.log(res);
        })
    }

    /**
     * post请求
     * @private
     */
    _fetchPost() {
        axios({
            url: 'http://httpbin.org/post',
            data: {
                name: 'why',
                age: 18
            },
            method: 'post'
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }

    /**
     * get请求
     * @private
     */
    _fetchGet() {
        axios({
            url: 'http://httpbin.org/get',
            params: {
                name: 'why',
                age: 18
            }
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }

    /**
     * async await
     * @returns {Promise<void>}
     * @private
     */
    async _fetchData() {
        try {
            const result = await axios.get("http://httpbin.org/get", {
                params: {
                    name: 'why',
                    age: 18
                }
            });
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                Component1
            </div>
        );
    }
}

export default App;
