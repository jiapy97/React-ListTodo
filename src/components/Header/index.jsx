import React, { Component } from 'react';
import {nanoid} from 'nanoid'
import './index.css';

export default class Header extends Component {
    handleKeyUp = (event) => {
        const {keyCode,target} = event;
        const {handleInput} = this.props;
        if (target.value.trim() === 0) return;
        if(keyCode === 13) {
            console.log(target.value);
            const newObj = {id: nanoid(),name: target.value,done:false};
            handleInput(newObj);
            target.value = ''
        }
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入今天的任务" onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}