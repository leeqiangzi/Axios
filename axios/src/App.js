import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // // 1、axios发送基本网络请求
        // axios({
        //     url: 'http://httpbin.org/get',
        //     params: {
        //         name: 'why',
        //         age: 18
        //     }
        // }).then(res => {
        //     console.log(res);
        // }).catch(error => {
        //     console.log(error);
        // });
        //
        //
        // axios({
        //     url: 'http://httpbin.org/post',
        //     data: {
        //         name: 'why',
        //         age: 18
        //     },
        //     method: 'post'
        // }).then(res => {
        //     console.log(res);
        // }).catch(error => {
        //     console.log(error);
        // });

        // async await
        this._fetchData();
    }

    async _fetchData() {
        try {
            const result = await axios.get("http://httpbin.org/get", {
                params:{
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
