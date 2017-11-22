import React from 'react';
import {Carousel} from 'antd';
import './IndexSlide_Style.css'

class IndexSlide extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Carousel autoplay>
                <div>
                    <img src={require("../../Image/IndexSlideImg/1.jpg")}/>
                </div>
                <div>
                    <img src={require("../../Image/IndexSlideImg/2.jpg")}/>
                </div>
                <div>
                    <img src={require("../../Image/IndexSlideImg/3.jpg")}/>
                </div>
                <div>
                    <img src={require("../../Image/IndexSlideImg/4.jpg")}/>
                </div>
            </Carousel>
        )
    }
}

export default IndexSlide;