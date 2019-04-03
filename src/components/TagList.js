import React, { Component } from 'react';
import './TodoItem.css';
import Tag from './Tag.js';
import './Tag.css';

class TagList extends Component {
    render(){
        const { tags, onRemove, onDragOver, onDragStart, onDrop } = this.props;

        const tagList = tags.map(
            ({id, text}) => (
                <Tag
                    id={id}
                    text={text}
                    onRemove={onRemove}
                    onDragOver={onDragOver}
                    onDragStart={onDragStart}
                    onDrop={onDrop}
                    key={id}
                />
            )
        );

        return (
            <div className="tag-temp">
                <ul className="tags">
                    {tagList}
                </ul>
            </div>
        );
    }

}

export default TagList;