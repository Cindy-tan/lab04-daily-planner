import React from 'react';
import styles from './Task.module.css';

function Task({ task, index, toggleTaskDone, deleteTask }) {
  return (
    <li className={styles.list}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskDone(index)}
        className={task.completed ? styles.done : ''}
      />
      <span className={task.completed ? styles.done : ''}>{task.name}</span>

      <button onClick={() => deleteTask(index)} className={styles.removeBtn}>Remove</button>
    </li>
  );
}

export default Task;
