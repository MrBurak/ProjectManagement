import NewTask from "./NewTask";
import AntiButton from "./AntiButton";
import { useContext } from "react"
import { ProjectContext } from "../store/project-context"
export default function Tasks()
{
    const {tasks, onDeleteTask}=useContext(ProjectContext);
    function handleDelete(id)
    {
        onDeleteTask(id);
    }
    return(<section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
        <NewTask />
        <ul className="bg-stone-200">
        {tasks.length==0 && <p className="text-stone-800 mt-4">This project does not have any task yet</p>}
        {tasks.map(task=>
            <li key={task.id} className="flex justify-between my-4 px-4 py-2">
                <span>{task.text}</span>
                <AntiButton onClick={()=>handleDelete(task.id)} className="text-stone-700 hover:text-red-500">
                    Delete
                </AntiButton>
                </li>)}
        </ul>
    </section>)
}