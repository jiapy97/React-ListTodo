import React, { Component } from 'react'
import './index.css'
import Item from '../Item'
export default class List extends Component {
    render() {
        const {todos} = this.props;
        return (
            <ul className="todo-list">
                {
                    todos.map((value) => {
                        return <Item {...value} key={value.id} changeCheckState={this.props.changeCheckState} deleteItem={this.props.deleteItem}/>
                    })
                }
                
            </ul>
        )
    }
}
