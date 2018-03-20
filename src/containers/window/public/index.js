/**
 * Created by Administrator on 2018/3/19.
 */
import React from "react"

class Title extends React.Component{
    render(){
        return (
                <div>
                    <div className="title">{this.props.title}</div>
                    <div><hr /></div>
                </div>

            )
    }
}
export default Title;