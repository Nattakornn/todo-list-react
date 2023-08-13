import { useState } from "react"
import { TodoForm } from "./TodoForm"
import { Todo } from "./Todo";

interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

export const TodoWrapper: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: string) => {
    const newTodo: TodoItem = {
      id: Math.floor(Math.random() * 10000),
      task: todo,
      completed: false,
      isEditing: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos)
  };


  return (
    <div className="mt-20 bg-gray-600 p-8 rounded">
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo, index) => 
          <Todo todo={todo} key={index}/>
        )}
    </div>
  )
}
