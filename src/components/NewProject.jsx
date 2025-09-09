import FormInput from "./FormInput"
import { useRef, useState } from "react"
import Modal from "./Modal"
import Button from "./Button"
import AntiButton from "./AntiButton"
import { useContext } from "react"
import { ProjectContext } from "../store/project-context"

export default function NewProject()
{
    const {onCancelAddProject, projects, onAddProject}=useContext(ProjectContext);

    const modal = useRef()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const dueDateRef = useRef()
    const [validateMessage, setValidateMessage] = useState({
        header:"",
        message1:"",
        message2:""
    });

    function handleSave()
    {
        const titleValue=titleRef.current.value.trim();
        const descriptionValue=descriptionRef.current.value.trim();
        const dueDateValue=dueDateRef.current.value.trim();
        if(titleValue==="" || descriptionValue==="" || dueDateValue==="")
        {
            setValidateMessage(
                {
                    header:"Invalid Input",
                    message1:"Oops... Looks like you forgot to enter a value",
                    message2:"Please make sure you provided a name for the project",

                }
            );
            modal.current.open();
            return;
        }
        var existing=projects.find((project)=> project.title===titleValue)
        if (existing) 
        {
            setValidateMessage(
                {
                    header:"Validation failed",
                    message1:"Oops... Looks like you have this project",
                    message2:"Please make sure you provided a name for the project does not exist",

                }
            )
            modal.current.open();
            return;
        }    
    
    


        onAddProject({title:titleValue, description:descriptionValue, dueDate:dueDateValue })
    }

    return<>
        <Modal ref={modal} buttonCaption={"Close"}>
            <h2 className="text-xl font-bold text-stone-700 mt-4 mb-4">{validateMessage.header}</h2>
            <p className="text-stone-600 mb-4">{validateMessage.message1}</p>
            <p className="text-stone-600 mb-4">{validateMessage.message2}</p>
        </Modal>
        <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><AntiButton onClick={onCancelAddProject} >Cancel</AntiButton></li>
            <li><Button onClick={handleSave} >Save</Button></li>
        </menu>
        <div>
            <FormInput type="text" label="Title" ref={titleRef} />
            <FormInput label="Description" textarea ref={descriptionRef} />
            <FormInput type="date" label="Due Date" ref={dueDateRef} />
        </div>
    </div>
    </>
}