import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default class App extends Component {
    state = {
        todos: [
            { id: 1, name: '写代码', done: true },
            { id: 2, name: '吃饭', done: false },
            { id: 3, name: '打豆豆', done: false }
        ]
    }
    handleInput = (newObj) => {
        const {todos} = this.state;
        this.setState({todos: [newObj,...todos]})
    }
    changeCheckState = (id,done) => {
        const {todos} = this.state;
        const newArr = todos.map((value) => {
            if (value.id === id) {
                value.done = done;
                return value;
            } else {
                return value
            }
        })
        this.setState({todos:newArr})
    }
    allCheck = (flag) => {
        const {todos} = this.state;
        const newArr = todos.map((value) => {
            value.done = flag;
            return value;
        });
        this.setState({todos:newArr})
    }
    deleteItem = (id) => {
        const {todos} = this.state;
        const newArr = todos.filter((value) => {
            return value.id !== id;
        });
        this.setState({todos:newArr});
    }
    clearAllDoneItem = () => {
        const {todos} = this.state;
        const newArr = todos.filter((value) => {
            return value.done === false
        })
        this.setState({todos:newArr})
    }
    render() {
        const {todos} = this.state;
        return (
            <div className="todo-Continer">
                <h1>日事日毕</h1>
                <div className="todo-warp">
                    <Header handleInput={this.handleInput} />
                    <List todos={todos} changeCheckState={this.changeCheckState} deleteItem={this.deleteItem}/>
                    <Footer  todos={todos} allCheck = {this.allCheck} clearAllDoneItem={this.clearAllDoneItem}/>
                </div>
            </div>
        );
    }

}

