import React from 'react';
import {Avatar} from 'antd';

class PhotoIcon extends React.Component {
    render() {
        return (
            <Avatar shape="square" size="large" src={require('../../Image/PhotoIconImg/test.jpg')}/>
        )
    }

}


export default PhotoIcon;