import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, tags, todos, SettingTemplate}) => {
    return (
        <main className = "todo-list-template">
            <div className = "title">
                오늘 할 일
            </div>
            <section className = "form-wrapper">
                {form}
            </section>
            <section className = "setting-wrapper">
                {SettingTemplate}
            </section>
            <section className="tags-wrapper">
                { tags }
            </section>
            <section className="todos-wrapper">
                { todos }
            </section>
        </main>
    );
};

export default TodoListTemplate;