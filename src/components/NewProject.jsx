import Input from "./Input"
import { useRef } from "react"
import Modal from "./Modal"

export default function NewProject({cancelClicked, onAddProject})
{
    const modal = useRef()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const dueDateRef = useRef()

    function handleSave()
    {
        const titleValue=titleRef.current.value.trim();
        const descriptionValue=descriptionRef.current.value.trim();
        const dueDateValue=dueDateRef.current.value.trim();
        if(titleValue==="" || descriptionValue==="" || dueDateValue==="")
        {
            modal.current.open();
            return;
        }

        onAddProject({title:titleValue, description:descriptionValue, dueDate:dueDateValue })
    }

    return<>
        <Modal ref={modal} buttonCaption={"Close"}>
            <h2 className="text-xl font-bold text-stone-700 mt-4 mb-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops... Looks like you forgot to enter a value</p>
            <p className="text-stone-600 mb-4">Please make sure you provided all required values</p>
        </Modal>
        <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick={cancelClicked} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="px-4 py-2 rounded-md  bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input type="text" label="Title" ref={titleRef} />
            <Input label="Description" textarea ref={descriptionRef} />
            <Input type="date" label="Due Date" ref={dueDateRef} />
        </div>
    </div>
    </>
}