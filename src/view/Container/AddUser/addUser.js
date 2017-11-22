import React from 'react';
import {Form, Input, Button, Radio} from 'antd';
import axios from 'axios';

class AddUserView extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitAddUser = this.onSubmitAddUser.bind(this);
        this.state = {
            name: '',
            email: '',
        }
    }

    render() {
        return (
            <div className="updateUser-Pos-Style">
                <div>
                    <span>用户名:</span>
                    <input type="input" placeholder="请输入用户名"
                           onChange={(value) => this.onChangeNewUser('name', value)}/>
                </div>
                <div>
                    <span>电子邮箱:</span>
                    <input type="input" placeholder="请输入注册邮箱"
                           onChange={(value) => this.onChangeNewUser('email', value)}/>
                </div>
                <div>
                    <Button onClick={this.onSubmitAddUser}>添加</Button>
                </div>
            </div>
        )
    }

    /**
     * 实时更新添加用户信息
     */
    onChangeNewUser(key, event) {
        console.log("修改信息传入的key = ", key);
        console.log("修改信息传入event中的value = ", event.target.value);
        this.setState({
            [key]: event.target.value,
    })
    }

    /**
     * 提交创建用户信息
     */
    onSubmitAddUser() {
        console.log('当前state中的name = ', this.state.name);
        console.log('当前state中的email = ',this.state.email);
        axios.post('/api/users', {
            name: this.state.name,
            email: this.state.email,
        })
            .then((response) => {
                    console.log('创建用户成功');
                    //创建成功就返回主页
                    window.location.href = '/';
            })
            .catch((error) => {
                if (error) {
                    console.log('创建用户失败， 错误对象 error = ', error);
                }
            })
    }
}

export default AddUserView;