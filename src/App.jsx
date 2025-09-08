import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";
import { v4 as uuid } from 'uuid'

function App() {
const[projectState,setProjectState] = useState({
  selectedProjectId:undefined,
  projects:[],
  tasks:[]
});


  function handleStartAddProjectClick()
  {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId:null
      }
    })
  }

  function handleCancelAddProjectClick()
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

  function handleProjectDelete(id)
  {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId:undefined,
        projects:prev.projects.filter(project=> project.id!=id),
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
      content= <NewProject 
                cancelClicked={handleCancelAddProjectClick} 
                onAddProject={handleAddProject}
                projects={projectState.projects}
                />
    }
    else if(projectState.selectedProjectId===undefined)
    {
      content= <NoProjectSelected 
                onStartAddProjectClick={handleStartAddProjectClick} />
    }
    else
    {
      const projectData = projectState.projects.find(project => project.id==projectState.selectedProjectId);
      const taskData=projectState.tasks.filter(task => task.projectId==projectState.selectedProjectId);
      content=<SelectedProject 
      projectData={projectData} 
      onDelete={handleProjectDelete}
      onAddProject={handleAddProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks= {taskData}
      />
    }

    
  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectsSidebar 
      onStartAddProjectClick={handleStartAddProjectClick}  
      projects={projectState.projects}
      onProjectSelect={handleProjectSelect}
      selectedProjectId={projectState.selectedProjectId}

      />
    {content}
    </main>
  );
}
export default App;
