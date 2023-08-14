import { useState } from "react"
import { TodoForm } from "./TodoForm"
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";

interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

export const TodoWrapper: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (task: string) => {
    const newTodo: TodoItem = {
      id: Math.floor(Math.random() * 10000),
      task: task,
      completed: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
  };

  const hangleDelete = (id:number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id:number) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  }

  const editTodo = (id:number) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task:string , id:number) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, task:task ,isEditing: !todo.isEditing} : todo))
  }
  
  return (
    <div className="mt-20 bg-gray-600 p-8 rounded">
        <h1 className="text-white text-2xl mb-4 font-bold">Todo List !!</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => (todo.isEditing ?  <EditTodoForm editTask={editTask} todo={todo}/> :
        <Todo todo={todo} key={index} toggleComplete={toggleComplete} editTodo={editTodo} handleDelete={hangleDelete}/>
        ))
        }
    </div>
  )
}

