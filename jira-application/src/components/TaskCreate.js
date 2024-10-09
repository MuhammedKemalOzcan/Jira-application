import React, { useState } from 'react'

function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {

  /*
  Buradaki task ? task.title : "" nin anlamı: eğer butona basıldıysa(task diye bir prop gönderdiysem) title'ı "task.title olarak değiştir" tıklanmadıysa
  boş string gönder.
  */
  const [title, setTitle] = useState(task ? task.title : "");
  const [desc, setDesc] = useState(task ? task.desc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  }
  const handleTaskChange = (event) => {
    setDesc(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, desc);
    }
    else {
      onCreate(title, desc);
    }
    setTitle("");
    setDesc("");
  }


  return (

    <div>
      {taskFormUpdate ? <div className='task-update'>
        <h3>Lütfen Taskı Düzenleyiniz!</h3>
        <form className='task-form' >
          <label className='task-label'>Başlığı Düzenleyiniz!</label>
          <input className='task-input' value={title} onChange={handleChange} />
          <label className='task-label'>Taskı Düzenleyiniz!</label>
          <textarea className='task-input' rows={5} value={desc} onChange={handleTaskChange} />
          <button className='task-button update-button' onClick={handleSubmit} >Oluştur</button>
        </form>
      </div> :
        <div className='task-create'>
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className='task-form' >
            <label className='task-label'>Başlık</label>
            <input className='task-input' value={title} onChange={handleChange} />
            <label className='task-label'>Task Giriniz!</label>
            <textarea className='task-input' rows={5} value={desc} onChange={handleTaskChange} />
            <button className='task-button' onClick={handleSubmit} >Oluştur</button>
          </form>
        </div>}
    </div>


  )
}

export default TaskCreate
