import { useState } from "react"

interface props {
  addTodo: (todo: string) => void;
}

export const TodoForm:React.FC<props> = ({addTodo}) => {

  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTodo(value)
    setValue("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="test" className="placeholder-gray-500 border py-2 px-2 rounded" 
      placeholder="Add Task Today?" onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">Add Task</button>
    </form>
  )
}
