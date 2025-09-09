import { createContext } from "react";

export const ProjectContext= createContext(
{
  selectedProjectId:undefined,
  projectData:{},
  projects:[],
  tasks:[],
  onDeleteProject:()=>{},
  onStartAddProject:()=>{},
  onCancelAddProject:()=>{},
  onAddProject:()=>{},
  onSelectProject:()=>{},
  onDeleteTask:()=>{},
  onAddTask:()=>{},
})