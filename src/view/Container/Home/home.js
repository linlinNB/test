import React from 'react'
// import PropTypes from 'prop-types'
import {Row, Col, Layout, Button} from 'antd';
import {Link} from 'react-router-dom';

//引入自定义组件
import IndexSlider from '../../Component/Slider/IndexSlide';
import PhotoIcon from '../../Component/PhotoIcon/PhotoIcon';
import MyFooter from '../../Component/Footer/Footer';
import UserList from '../../Component/List/UserList';

//进行样式布局
import './PhotoIcon_Pos_Style.css';
import './IndexSlider_Pos_Style.css';

//引用先关UI库的实例
const {Header, Content, Footer} = Layout;

class HomeView extends React.Component {
    constructor(props) {
        super(...arguments)
        this.addUserAction = this.addUserAction.bind(this);
        this.state = {}
    }

    /**
     * 增加用户操作
     */
    addUserAction() {
        console.log('增加用户相关的操作');
    }

    render() {
        return (
            <Layout>
                <Header>
                    <Row type="flex" align="top" justify="start">
                        <Col push={6} span={1} className="photoIcon-style">
                            <PhotoIcon/>
                        </Col>
                        <Col push={16} span={1}>
                            <Button onClick={this.addUserAction}>增加用户</Button>
                        </Col>
                    </Row>
                </Header>
                <Content>
                    <Row>
                        <Col push={6} span={13} className="IndexSlider_Pos_Style">
                            <IndexSlider/>
                            <UserList/>
                        </Col>
                    </Row>
                    <div>
                    </div>
                </Content>
                <Footer>
                    <MyFooter/>
                </Footer>
            </Layout>
        )
    }
}

export default HomeView;


