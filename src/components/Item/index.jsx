import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    // 定义鼠标移入与否的状态值
    state = {flagx: false};
    // 鼠标移入li事件
    enter = () => {
        this.setState({flagx: true});
    }
    leave = () => {
        this.setState({flagx: false});
    }
    // 解决复选框和状态的同步问题
    handleCheck = (id) => {
        return (event) => {
            this.props.changeCheckState(id,event.target.checked)
        }
    }
    delete = (id) => {
        return () => {
            this.props.deleteItem(id);
        }
    }
    render() {
        const {id,name,done} = this.props;
        return (
                <li style={{backgroundColor: this.state.flagx ? '#ddd':'white'}} onMouseEnter={this.enter} onMouseLeave={this.leave}>
                    <input type="checkbox" onChange={this.handleCheck(id)} checked={done}/><span>{name}</span>
                    <button onClick={this.delete(id)} className="btn" style={{display: this.state.flagx? 'block':'none'}}>删除</button>
                </li>
        )
    }
}
