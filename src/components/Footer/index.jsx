import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    footerCheck = (event) => {
        this.props.allCheck(event.target.checked);
    }
    clearAllDone = () => {
        this.props.clearAllDoneItem();
    }
    render() {
        const { todos } = this.props;
        const haveDone = todos.reduce((pre, value) => pre + (value.done? 1:0), 0);
        const total = todos.length;
        
        return (
            <div className="todo-footer">
                <input type="checkbox" onChange = {this.footerCheck} checked={haveDone===total&&haveDone!==0? true:false}/> <span>已完成{haveDone} / 全部{total}</span> <button onClick={this.clearAllDone}>清除已完成任务</button>
            </div>
        )
        
    }
}
