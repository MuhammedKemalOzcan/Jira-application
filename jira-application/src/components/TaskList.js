import TaskShow from "./TaskShow";

function TaskList({tasks,onDelete,onUpdate }) {
    return ( 
    <div className="task-list">
        {
            tasks.map((task) =>{
                return <TaskShow 
                onDelete={onDelete} 
                onUpdate={onUpdate}  
                key={task.id} 
                task = {task} 
                />
            })
        }
    </div> 
    );
}

export default TaskList;