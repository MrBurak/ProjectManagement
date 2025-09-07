
import { useRef } from "react"
export default function Tasks({projectData, onAddTask, onDeleteTask})
{
    const newTaskRef=useRef();
    return(<section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>
        <input type="text"></input><button></button>
        <p className="text-stone-400 mb-4">This project does not have a task yet</p>
        <ul>
        

        </ul>
    </section>)
}