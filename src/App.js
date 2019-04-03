import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import { from } from 'rxjs';
import TagList from './components/TagList';
import SettingTemplate from './components/SettingTemplate';

class App extends Component {

  id = 3;
  state = {
    input: '',
    todos: [
      { id: 0, text: ' 1', checked: false, color: 'black', fontSize:10, tag:[{text:'공부', id:0},{text:'리액트', id:1}]},
      { id: 1, text: ' 리액트 공부', checked: true,  color: 'pink', fontSize: 20, tag:[]},
      { id: 2, text: ' 뷰!', checked: false,  color: 'green', fontSize: 15, tag:[]}
    ],
    tags: [
      {id: 0, text: '공부'},
      {id: 1, text: '운동'},
      {id: 2, text: '취미'},
    ],
    color:'black',
    fontSize: 16
  } 
  colors =  [
    {id: 0, text: 'black'},
    {id: 1, text: 'blue'},
    {id: 2, text: 'pink'},
    {id: 3, text: 'red'},
    {id: 4, text: 'green'},
  ]

  handleChange = (e) => {
    this.setState({
      input: e.target.value  //input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        tag:[{}],
        color:this.state.color,
        fontSize:this.state.fontSize
      }),
      color:'black'
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);// 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾는다.
    const selected = todos[index]; //선택한 객체 
    const nextTodos = [...todos]; //배열복사

    //기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked : !selected.checked
    };

    this.setState({
      todos: nextTodos
    })

  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
  handleUpdate = (id, data) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(
        todo => id === todo.id ? {...todo, ...data} : todo
      )
    })
  }

  
  handleTagRemove = (id) => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter(tags => tags.id !== id)
    });
  }
onDragOver = (ev) => {
    ev.preventDefault();
}
onDragStart = (ev, text) => {
  ev.dataTransfer.setData("text", text);
}
onDrop = (ev,id)=> {
  let text = ev.dataTransfer.getData("text");
  
  let todos = this.state.todos.filter((todo) => {
    if(todo.id == id){
      todo.tag = todo.tag.concat({text:text, id:this.id++})
    }
    return todo;
  });
  console.log(todos);
  this.setState({
    ...this.state,
    todos
  });
    
}
  onChangeFontColor = (ev, text) => {
    this.setState({
      color: text
    });
  }

  onChangeFontSize = (ev) => {
    this.setState({
      fontSize:parseInt(ev.target.value)
    });
  }


render() {
    const { input, tags, todos } = this.state;
    const colors = this.colors;
    const {
      handleChange,    
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleTagRemove,
      onDragOver,
      onDragStart,
      onDrop,
      onChangeFontColor,
      onChangeFontSize,
      handleUpdate
    } = this;
    return (
     <TodoListTemplate form={(
       <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
     )} SettingTemplate={(
        <SettingTemplate
        colors={colors}
        onChangeFontColor={onChangeFontColor}
        onChangeFontSize={onChangeFontSize}
        />
     )}  todos={( 
     <TodoItemList 
        todos={todos} 
        onToggle={handleToggle} 
        onRemove={handleRemove} 
        onDragStart={onDragStart}
        onUpdate={handleUpdate}
        onDragOver={onDragOver} 
        onDrop={onDrop}
     />)} tags={(
      <TagList 
          tags={tags} 
          onRemove={handleTagRemove} 
          onDragOver={onDragOver} 
          onDragStart={onDragStart} 
          onDrop={onDrop}/>)}>
       
     </TodoListTemplate>
    );
  }
}

export default App;
