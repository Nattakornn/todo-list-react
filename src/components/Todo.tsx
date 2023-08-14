import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface props{
  handleDelete:(id : number) => void;
  toggleComplete:(id :number) => void;
  editTodo:(id :number) => void;
  todo: {
    id: number;
    task: string;
    completed: boolean,
    isEditing: boolean,
  };
}

export const Todo:React.FC<props> = ({todo, handleDelete, toggleComplete, editTodo}) => {
  return (
    <div className="mt-4 flex justify-between text-white bg-gray-800 font-bold py-2 px-2 rounded">
        <p onClick={()=> toggleComplete(todo.id)} className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}>{todo.task}</p>
        <div>
          <button onClick={()=> editTodo(todo.id)}><EditIcon/></button>
          <button onClick={()=> handleDelete(todo.id)}><DeleteIcon/></button>
        </div>
    </div>
  )
}
