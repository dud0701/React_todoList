import React, { Component } from 'react';
import './Tag.css';

class Tag extends Component {
    render(){
        const { text, id, onRemove, onDragOver, onDrop, onDragStart } = this.props;

        return (
            
                <li className="tag-item" draggable onDragOver={(e)=>onDragOver(e)} onDragStart={(e)=>onDragStart(e,text)}>{text}<span  className="tagRemove">x</span></li>
                
                /* <div className="tag-item" draggable  onDragOver={(e)=>onDragOver(e)} onDragStart={(e)=>onDragStart(e,text)}>  
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); //ontoggle이 실행되지 않도록 함
                    onRemove(id)}
                }>&times;</div>
                <div className="tag-text">
                    <div>{text}</div>
                </div>
            </div> */
        );
    }
}

export default Tag;
