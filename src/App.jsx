import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";
import { v4 as uuid } from 'uuid'
import { ProjectContext } from "./store/project-context";

function App() {
const[projectState,setProjectState] = useState({
  selectedProjectId:undefined,
  projects:[],
  tasks:[]
});


  function handleStartAddProject()
  {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId:null
      }
    })
  }

  function handleCancelAddProject()
  {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId:undefined
      }
    }) 
  }

  function handleProjectSelect(id)
  {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId:id
      }
    }) 
  }

  function handleAddProject(projectData)
  {


    setProjectState(prev => {
      const projectId=uuid()
      const newProject={
        ...projectData,
        id:projectId
      }

      return {
        ...prev,
        selectedProjectId:undefined,
        projects:[...prev.projects, newProject]
      }
    })
  }

  function handleProjectDelete()
  {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId:undefined,
        projects:prev.projects.filter(project=> project.id!=projectState.selectedProjectId),
        tasks:prev.tasks.filter(task=> task.projectId!=id)
      }
    }) 
  }

  function handleAddTask(text)
  {
    setProjectState(prev => {
      const taskId=uuid()
      const newTask={
        text:text,
        projectId:projectState.selectedProjectId,
        id:taskId
      }

      return {
        ...prev,
        tasks:[...prev.tasks, newTask]
      }
    })
  }
  function handleDeleteTask(id)
  {
    setProjectState(prev => {
      return {
        ...prev,
        tasks:prev.tasks.filter(task=> task.id!=id)
      }
    }) 
  }


  let content;
  if(projectState.selectedProjectId===null)
    {
      content= <NewProject />
    }
    else if(projectState.selectedProjectId===undefined)
    {
      content= <NoProjectSelected />
    }
    else
    {
      content=<SelectedProject />
    }
  const contextValue=
  {
    projectData : projectState.projects.find(project => project.id==projectState.selectedProjectId),
    selectedProjectId:projectState.selectedProjectId,
    projects:projectState.projects,
    tasks: projectState.tasks.filter(task => task.projectId==projectState.selectedProjectId),
    onDeleteProject:handleProjectDelete,
    onStartAddProject:handleStartAddProject,
    onCancelAddProject:handleCancelAddProject,
    onAddProject:handleAddProject,
    onSelectProject:handleProjectSelect,
    onDeleteTask:handleDeleteTask,
    onAddTask:handleAddTask,
  }
    
  return (
    <ProjectContext.Provider value={contextValue}>
    <main className="h-screen my-8 flex gap-8">
    <ProjectsSidebar />
    {content}
    </main>
    </ProjectContext.Provider>
  );
}
export default App;
