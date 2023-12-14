import { useRef } from "react"
import { Todo } from "../models"

 
interface Props{
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=>void,
}

 const InputField:React.FC<Props> = ({todo,setTodo, handleAdd }) => {        
    const inputRef = useRef<HTMLInputElement>(null)
   return (
     <div>
       <form onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur()
       }}>
        <input ref={inputRef} className="border-[1px]  ml-[2%] shadow-100 outline-none border-black py-[0.5em] rounded-[40px] px-[1em] mt-[1em] focus:shadow-1000 focus:outline-none focus:shadow-slate-800 text-[25px] w-[80%]"  type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter the todo " />
        <button className="absolute bg-blue-800 p-[1.2em] shadow shadow-slate-700 rounded-[50%] text-white top-[1.6em] right-[21.7em]" type="submit">GO</button>
       </form>
     </div> 
   )    
 }
 
 export default InputField
 