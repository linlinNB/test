import React from 'react';
import axios from 'axios';
import {Pagination, Tabs, Icon, Row, Col, Menu, Table, Button} from 'antd';


class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
        }
    }

    /**
     * 通过get请求获取用户列表
     */
    getUserList() {
        axios.get('/api/users')
            .then((response) => {
                if (response.status === 200) {
                    console.log('初始化用户列表成功， 获取的用户列表 = ', response.data);
                    this.setState({userList: response.data});
                }
            })
            .catch((error) => {
                if (error) {
                    console.log('初始化用户列表失败， 错误原因 = ', error);
                }
            })
    }

    /**
     * 通过get请求进行用户删除操作
     */
    deleteUserInfoOne() {
        console.log('点击了删除用户信息按钮');
    }

    /**
     * 转跳到用户更新的页面
     */
    UpdateUserInfoOne() {
        console.log('点击了编辑用户信息按钮');
    }

    //进行User列表的初步请求,本人习惯是在componentDidMount中进行请求，因为此时已经经过render（）函数生成的js树，还没有正式
    //渲染到真正的DOM结构上
    componentDidMount() {
        this.getUserList();
    }

    render() {
        //获取当前state中的用户数据
        const userlist_state = this.state.userList;
        //设定用户列表的样式
        const columns = [{
            title: '用户名',
            dataIndex: 'name',
            key: 'username',
            render: text => <a href="#">{text}</a>,
        }, {
            title: '绑定邮箱',
            dataIndex: 'email',
            key: 'useremail',
        }, {
            title: '更多操作',
            key: 'TypeAction',
            render: (text, record, dataSource, index) => {
                const Id = record.ArticleId;
                return (
                    <div>
                        <Button onClick={this.deleteUserInfoOne}>删除</Button>
                        <Button onClick={this.UpdateUserInfoOne}>编辑</Button>
                    </div>
                )
            },
        }]
        return (
            <div>
                <Row>
                    <Table dataSource={userlist_state} columns={columns}></Table>
                </Row>
            </div>
        )
    }
}

export default UserList;