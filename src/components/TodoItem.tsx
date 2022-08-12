import React from 'react'
import { ITodo } from '../types/types';

interface TodoItemProps {
   todo: ITodo;
}

const TodoItem: React.FC<TodoItemProps>  = ({todo}) => {
  return (
   <div style={{padding:15,border:'1px solid gray'}}>
      <input type='checkbox' checked={todo.completed}/>
      #{todo.userId},{todo.id} live in {todo.title}
   </div>
  )
}



export default TodoItem