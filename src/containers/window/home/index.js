import React, {Component} from 'react';
import {Row, Col, Icon, Carousel} from 'antd';
import {connect} from 'react-redux';
import '../../../assets/styles/home.css'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }


    render() {

        const carouselData = [
            {name: '轮播图一', url: 'http://www.njust.edu.cn/_upload/article/images/10/1a/acd8753241f5a2a839d1afb420d3/9ebacd76-5762-4598-81e1-fa3c4b3791c6.jpg'},
            {name: '轮播图二', url: 'http://www.njust.edu.cn/_upload/article/images/ce/70/aeda06594139b5dd66d2532aeda5/5c97b368-8c4f-4a97-a718-83f298809323.jpg'},
            {name: '轮播图三', url: 'http://www.njust.edu.cn/_upload/article/images/63/b5/c5e0860743ce846c4d037b14d123/cc3729bb-1685-4218-87f2-ce78ec31b271.jpg'},
            {name: '轮播图四', url: 'http://www.njust.edu.cn/_upload/article/images/cd/75/03d23f984080a0865be9ffde5af5/ed9b3b58-bcc9-49b0-8876-38ba4dbe150e.jpg'},
            {name: '轮播图五', url: 'http://www.njust.edu.cn/_upload/article/images/1e/6c/2e2942ef408e8d0c2725da8a57e7/863ad285-bf0d-4295-91a6-e001aeff86d0.jpg'},
            {name: '轮播图六', url: 'http://www.njust.edu.cn/_upload/article/images/43/10/52e94a0c4ac88097d80d45375061/56c18fbc-de42-4a35-90c3-5311cd4b6462.jpg'},
            {name: '轮播图七', url: 'http://www.njust.edu.cn/_upload/article/images/1e/6c/2e2942ef408e8d0c2725da8a57e7/863ad285-bf0d-4295-91a6-e001aeff86d0.jpg'}
        ];

        const size = this.props.size;

        return (
            <div className='home' style={{height: size.winHeight}}>
                <div className='banner' style={{height: size.winWidth * 0.3}}>
                    <Carousel className='imageList' autoplay  style={{height: size.winWidth * 0.3}}>
                        {carouselData.map((item)=>(
                            <img src={item.url}
                                 style={{width: size.winWidth, height: size.winWidth*0.3}}
                                 alt={item.name}
                                 key={item.name}
                            />
                        ))}

                    </Carousel>
                    <div className='titleList'>
                        <ul
                            className=''
                            style={{
                                height: size.winWidth * 0.3,
                            }}>

                        </ul>
                    </div>
                </div>

                <Row className='info'>
                    <Col span={13}>

                        <Row type='flex' justify='space-between'
                             className='nav' align='middle'>
                            <Col>
                                <span className='active'>热门资讯</span>
                                <span>最新资讯</span>
                                <span>教育咨询</span>
                            </Col>
                            <Col>
                                <Icon type='search'/>
                            </Col>
                        </Row>

                        <Row className='item'> </Row>
                        <Row className='item'> </Row>
                    </Col>
                    <Col span={11} className='timetables'>
                        <Row className='item'> </Row>
                        <Row className='item'> </Row>
                    </Col>
                </Row>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        size: state.size,
    }
};

export default connect(mapStateToProps)(Home);