import { useState } from "react"

interface props {
  editTask: (value:string , id:number) => void;
  todo: {
    id:number;
    task:string;
  }
}

export const EditTodoForm:React.FC<props> = ({editTask , todo}) => {

  const [value, setValue] = useState<string>(todo.task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTask(value , todo.id)
  }
  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <input type="text" className="placeholder-gray-500 border py-2 px-2 rounded" 
      value={value} placeholder="Updata Task" onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">Update Task</button>
    </form>
  )
}
