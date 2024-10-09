import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete,onUpdate }) {

    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        onDelete(task.id);
    }
    const handleEdit = () => {
        /*
        Show edit false iken yani güncelle butonuna tıklanmamışken ilk görüntü oluşsun tıklandığı takdirde ise "taskCreate" componenti çalışsın
        yolladığımız "taskCreate" componenti edit mi task mi olduğunu anlayabilmek için {taskFormUpdate} adında bir props göndeririz.
        */
        setShowEdit(!showEdit)
    }
    const handleSubmit = (id,updatedTitle,updatedDesc) => {
        setShowEdit(false);
        onUpdate(id,updatedTitle,updatedDesc);
    }
    
    return (
        <div className="task-show" >
            {showEdit ? <TaskCreate task = {task} taskFormUpdate = {true} onUpdate={handleSubmit} /> : (<div>
                <h3>Göreviniz</h3>
                <p>{task.title}</p>
                <h3>Yapılacaklar</h3>
                <p>{task.desc}</p>
                <div>
                    <button className="task-delete" onClick={handleDelete}>Sil</button>
                    <button className="task-edit" onClick={handleEdit} >Güncelle</button>
                </div>
            </div>)}


        </div>
    );
}

export default TaskShow;