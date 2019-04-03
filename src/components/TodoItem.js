import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    static defaultProps = {
        todo: { id: 0, text: 'text', checked: false,  color: 'black', fontSize: 18, tag:[] }
    }
    state = {
        editing: false,
        text:'',
    }

    handleUpdateToggle = () => {
        const { editing } = this.state;
        this.setState({ editing: !editing });
    }

    handleChange = (e) => {
        this.setState({
          text: e.target.value  //text의 다음 바뀔 값
        });
      }
    handleEnter = (e) => {
        if(e.key === 'Enter'){
            console.log("enter");
        }
    }
 
    componentDidUpdate(prevProps, prevState) {
        const { text, checked, id, onToggle, onRemove, onUpdate, tag, color, fontSize } = this.props;
        if(!prevState.editing && this.state.editing) {
            this.setState({
                text : text
              });
        }

        if (prevState.editing && !this.state.editing) {
            // editing 값이 true -> false 로 전환 될 때
             onUpdate(id, {
                text: this.state.text
            }); 
          }
    }

    render(){
        const { text, checked, id, onToggle, onRemove, tag, color, fontSize, onDragOver, onDrop } = this.props;
        let styles = {
            color: color,   
            fontSize:fontSize
        };
        const { editing } = this.state;

        //수정모드
        if(editing) {
            return (
                <div className="todo-item" >
                    <div className="remove" onClick={(e) => {
                        //e.stopPropagation(); //ontoggle이 실행되지 않도록 함
                        onRemove(id)}
                    }>&times;</div>
                    <div className={`todo-text ${checked ? ' checked' : ''}`}>
                        <div>
                            <input
                                value={this.state.text}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>{tag.text}</div>
                    </div>
                    {
                        checked && (<div className="check-mark">✓</div>)
                    }
                    <div className="update">
                        <button  onClick={(e) => {
                        //e.stopPropagation();
                        this.handleUpdateToggle()}
                        }
                        onKeyPress={(e) => { this.handleEnter(e)}}
                        >적용</button>
                    </div>
                </div>
            );
        }

        //일반모드
        return (
            <div className="todo-item" onClick={() => onToggle(id)} draggable  onDrop={(e)=> onDrop(e,id)}
                style={styles} onDragOver={(e)=>onDragOver(e)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); //ontoggle이 실행되지 않도록 함
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked ? ' checked' : ''}`}>
                    <div>{text}</div>
                    <div className="tagList">
                        <ul>
                        {tag.map(
                            ({text,id}) => {
                                return <li className="tag" id={id} key={id}>{text}<span  className="tagRemove">x</span></li>
                            }
                        )}
                        </ul>
                    </div>
                 
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
                <div className="update">
                    <button onClick={(e) => {
                        e.stopPropagation();
                        this.handleUpdateToggle(id)}
                    }>수정</button>
                </div>
            </div>
        );
    }
}

export default TodoItem;