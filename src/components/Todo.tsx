import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface props{
  todo: {
    task: string;
  };
}

export const Todo:React.FC<props> = ({todo}) => {
  return (
    <div className="mt-4 flex justify-between text-white bg-gray-800 font-bold py-2 px-2 rounded">
        <p>{todo.task}</p>
        <div>
          <button><EditIcon/></button>
          <button><DeleteIcon/></button>
        </div>
    </div>
  )
}
