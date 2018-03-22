/**
 * Created by Administrator on 2018/3/19.
 */
import React from "react"
import {Row} from 'antd'

class Title extends React.Component{
    render(){
        return (
                <Row>
                    <Row className="title">{this.props.title}</Row>
                    <Row><hr /></Row>
                </Row>

            )
    }
}
export default Title;