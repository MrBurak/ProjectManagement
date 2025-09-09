import Button from "./Button"
import Tasks from "./Tasks"
import { useContext } from "react"
import { ProjectContext } from "../store/project-context"
export default function SelectedProject()
{
    const {projectData, onDeleteProject}=useContext(ProjectContext);

    const formatedDate=new Date(projectData.dueDate).toLocaleDateString('en-US',
        {
            year:"numeric",
            month:"short",
            day:"2-digit"
        })
    return (
    <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-stone-600 mb-2 uppercase">{projectData.title}</h1>
                <Button onClick={onDeleteProject}>Delete</Button>
            </div>
            <p className="mb-4 text-stone-400">{formatedDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{projectData.description}</p>
        </header>
        <Tasks />       
    </div>)
}