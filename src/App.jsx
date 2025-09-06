import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
const[projectState,setProjectState] = useState({
  selectedProjectId:undefined,
  project:[]
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

  function handleNewProjectCancelClick()
  {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId:undefined
      }
    }) 
  }

  let content;
  if(projectState.selectedProjectId===null)
    {
      content= <NewProject cancelClicked={handleNewProjectCancelClick} />
    }
    else if(projectState.selectedProjectId===undefined)
    {
      content= <NoProjectSelected onStartAddProjectClick={handleStartAddProjectClick} />
    }


  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectsSidebar onStartAddProjectClick={handleStartAddProjectClick}  />
    {content}
    </main>
  );
}
export default App;
