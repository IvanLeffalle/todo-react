import { Todo } from "../types/Todos";
import { AiOutlineDelete } from "react-icons/ai";

interface TodoItemProps {
  todo: Todo;
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onCompleteChange, onDelete }: TodoItemProps) {
  return (
    <div className="flex ">
      <label className="flex items-center gap-2 border border-gray-400 bg-white rounded-md p-2 hover:bg-slate-50 grow">
        <input
          type="checkbox"
          className="scale-125"
          checked={todo.completed}
          onChange={(e) => onCompleteChange(todo.id, e.target.checked)}
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.title}
        </span>
      </label>
      <button onClick={() => onDelete(todo.id)} className="p-2">
        <AiOutlineDelete size={20} color="red" />
      </button>
    </div>
  );
}
export default TodoItem;
