import React from 'react';
import {Form, Input, Button, Radio} from 'antd';
import axios from 'axios';

//导入相关的样式
import './updateUser_Pos_Sty.css';

const {TextArea} = Input;
const RadioGroup = Radio.Group;

class UpdateUserView extends React.Component {
    constructor(props){
        super(props);
        this.onSubmitUpdateUserInfo = this.onSubmitUpdateUserInfo.bind(this);
        this.state = {
            name:'',
            email:'',
        }
    }

    /**
     * 获取用户信息
     */
    getUserInfo() {
        console.log('获取当前页面的ID = ', this.props.match.params.id)
        const userID = this.props.match.params.id;
        axios.get('/api/users')
            .then((response) => {
                if (response.status === 200) {
                    let userInfo = response.data.filter((item)=>(item.id == userID));
                    /*console.log('更新用户信息，获取的用户列表 = ', response.data);*/
                    this.setState({
                        name: userInfo[0].name,
                        email: userInfo[0].email,
                    });
                    console.log('获取当前state中的数据name = ', this.state.name, '  邮箱 = ', this.state.email);
                }
            })
            .catch((error) => {
                if (error) {
                    console.log('初始化用户列表失败， 错误原因 = ', error);
                }
            })
    }

    componentDidMount() {
        this.getUserInfo();
    }

    render() {
        const username = this.state.name;
        const useremail = this.state.email;
        return (
            <div className="updateUser-Pos-Style">
                <div>
                    <span>用户名:</span>
                    <input type="input" defaultValue={username} placeholder="请输入用户名" onChange={(value)=> this.onChangeUpdateUser('name', value)}/>
                </div>
                <div>
                    <span>电子邮箱:</span>
                    <input type="input" defaultValue={useremail} placeholder="请输入注册邮箱" onChange={(value)=> this.onChangeUpdateUser('email', value)}/>
                </div>
                <div>
                    <Button onClick={this.onSubmitUpdateUserInfo}>修改</Button>
                </div>
            </div>
        )
    }

    /**
     * 对于用户信息的实时更新
     * @param key
     * @param value
     */
    onChangeUpdateUser(key, event) {
        console.log('当前传递的数值 = ', key );
        this.setState({
            [key]: event.target.value
        })
        console.log('当前state中的name = ', this.state.name, '  当前state中email = ', this.state.email);
    }

    /**
     * 进行提交进行数据更新
     */
    onSubmitUpdateUserInfo() {
        console.log('点击更新按钮')
        axios.put(`/api/users/${this.props.match.params.id}`, {
            name: this.state.name,
            email: this.state.email
        })
            .then((response)=> {
                console.log('修改用户信息成功');
                window.location.href='/';
            })
            .catch((error)=> {
                console.log('修改用户信息出现问题, error = ',error);
            })
    }
}

export default UpdateUserView;