import { Todo } from "../models";
import { FaTrash } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
interface Props {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleCompleted: (id: number , todo:Todo) => void;
  editTodo: boolean;
  newTodo:string,
  setNewTodo:React.Dispatch<React.SetStateAction<string>>
  handleSubmitNewTodo:(e:React.FormEvent, id:number)=>void
  handleEditButtonClick:(id:number)=>void,
  setEditTodoId:React.Dispatch<React.SetStateAction<number | null>>,
  editTodoId:number| null,
  completedTasks:Todo[]
}
const DisplayTodos: React.FC<Props> = ({
  handleEditButtonClick,
  editTodoId,
  handleSubmitNewTodo,
  todos,
  handleDelete,
  newTodo,
  completedTasks,
  setNewTodo,
  handleCompleted,
}) => {
  return (
    <div className="flex flex-row  justify-between pr-[10%] mt-[2%] ">
     
      <div className="pl-[2%]">
      <h1 className="text-[30px]">Un completed todos</h1>

   
      {todos.map((t) => (
        <div
          key={t.id}
          className="bg-yellow-500 flex flex-row rounded-lg mt-[1em]  pl-[1em]  justify-evenly items-center py-[1em] w-fit pr-[3em]"
        >
          {editTodoId ===t.id ? (
            <form onSubmit={(e)=>handleSubmitNewTodo(e,t.id)}>
                          <input value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
            </form>
          ) : (
            <span
              className={
                t.isCompleted ? "text-[25px] line-through" : "text-[25px]"
              }
            >
              {t.todo}
            </span>
          )}
         
          <FiEdit2 className="mr-[1em] ml-[1em] text-[25px]"  onClick={()=>handleEditButtonClick(t.id)}     />
          <FaTrash
            className="mr-[1em] ml-[1em] text-[25px]"
            onClick={() => handleDelete(t.id)}
          />
          <MdDone
            className="mr-[1em] ml-[0.5em] text-[25px]"
            onClick={() => handleCompleted(t.id,t)}
          />
          
        </div>
      ))}
         </div>
         <div>
         <h1 className="text-[30px]">Completed todos</h1> 
         {completedTasks && completedTasks.map(data=>(
          <div key={data.id} className="bg-yellow-500 flex flex-row rounded-lg mt-[1em]  pl-[1em]  justify-evenly items-center py-[1em] w-fit pr-[3em]"
          >
            <span>{data.todo}</span>
          </div>
         ))}
      </div>
    </div>
  );
};

export default DisplayTodos;
