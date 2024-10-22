import React from 'react';
import styles from './Task.module.css'

function Task({ task, index, toggleTaskDone, deleteTask }) {
  return (
    <li style={`${styles.taskText} ${task.completed ? styles.list : ''}`} }>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskDone(index)}
        className={styles.done}
      />
      <span className={styles.taskText}>{task.name}</span>

      <button onClick={() => deleteTask(index)} className={styles.removeBtn}>Remove</button>
    </li>
  );
}

export default Task;
