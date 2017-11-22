import React from 'react';
import axios from 'axios';
import {Pagination, Tabs, Icon, Row, Col, Menu, Table, Button} from 'antd';
//设置跳转路由
import {NavLink} from 'react-router-dom';


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
     * 通过get请求进行用户删除操作，此时操共分为两步：
     *  1.删除当前state中的数据，在可显示的界面中"清除数据"
     *  2.通过get请求删除数据库中的数据
     */
    deleteUserInfoOne(userID) {
        console.log('点击了删除用户信息按钮, 当前用户ID = ', userID);

        //发送请求进行数据库中的删除
        axios.delete(` /api/users/${userID}`)
            .then((response => {
                console.log('删除用户信息成功');
                this.getUserList();
            }))
            .catch((error) => {
                console.log('删除过程中出现问题，错误原因error = ', error);
            })
    }

    /**
     * 转跳到用户更新的页面
     */
    UpdateUserInfoOne(userID) {
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
                const Id = record.id;
                return (
                    <div>
                        <Button onClick={() => this.deleteUserInfoOne(Id)}>删除</Button>
                        <Button onClick={() => this.UpdateUserInfoOne(Id)}>
                            <NavLink to={`/updateUser/${Id}`}>修改</NavLink>
                        </Button>
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