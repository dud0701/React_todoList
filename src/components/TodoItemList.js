import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const { todos, onToggle, onRemove, onDragStart, onUpdate, onDragOver, onDrop } = this.props;

        const todoList = todos.map(
            ({id, text, checked, tag, color, fontSize}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onDragStart={(e)=>onDragStart(e, todos.text)}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                    key={id}
                    tag={tag}
                    color={color}
                    onDragOver={onDragOver}
                    fontSize={fontSize}
                    onDrop={onDrop}
                />
            )
        );

        return (
            <div>
               {todoList}
            </div>
        );
    }
}

export default TodoItemList;