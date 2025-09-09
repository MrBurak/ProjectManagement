import { useRef, useState } from "react"
import Modal from "./Modal";
import Button from "./Button";
import { useContext } from "react"
import { ProjectContext } from "../store/project-context"

export default function NewTask()
{
   const {tasks, onAddTask}=useContext(ProjectContext);
    const modal=useRef()
    const [enteredTask, setEnteredTask] = useState("");
    const [validateMessage, setValidateMessage] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() 
  {
    // Trim to handle cases with only spaces
    if (enteredTask.trim() === '') {
     
        setValidateMessage("Please make sure you provided a name for the task");
        modal.current.open();
        return;
    }
    var existing=tasks.find((task)=> task.text===enteredTask)
    if (existing) 
    {
        setValidateMessage("Please make sure you provided a name for the task does not exist");
        modal.current.open();
        return;
    }
    // 2️⃣ Use the onAddTask prop to add the task
    onAddTask(enteredTask);
    // 3️⃣ Clear the input field after adding the task
    setEnteredTask("");
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 mt-4 mb-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">{validateMessage}</p>
    </Modal>
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 rounded-sm px-2 py-1 bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <Button onClick={handleClick}>Add Task</Button>
    </div>
    </>
  );
}