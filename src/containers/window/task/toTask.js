/**
 * Created by Feng Ying on 2018/3/22.
 */
import React from 'react'
import BackTitle from '../public/backTitle'
import {Row} from 'antd'
import Content from './content'

class ToTask extends React.Component{
    render() {
        return (
            <Row>
                <BackTitle title="发布任务"/>
                <Content />
            </Row>

        )
    }
}
export default ToTask;