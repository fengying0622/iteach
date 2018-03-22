/**
 * Created by Feng Ying on 2018/3/22.
 */
/**
 * Created by Administrator on 2018/3/19.
 */
import React from "react"
import {Row,Icon,Button} from 'antd'
import {withRouter} from 'react-router-dom'

class BackTitle extends React.Component{
    clickHandler=()=>{
        const backUrl = this.props.backUrl;
        if(backUrl){
            this.props.history.push(backUrl)
        }else{
            window.history.back()
        }
    }
    render(){
        return (
            <div>
                <div className="backTitle"><Button onClick={this.clickHandler} className='button'><Icon type="left" />{this.props.title}</Button></div>
                <div><hr/></div>
            </div>

        )
    }
}
export default withRouter(BackTitle);