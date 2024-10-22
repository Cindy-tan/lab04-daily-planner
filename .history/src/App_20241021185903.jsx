import React, { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function DayPlannerApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  const toggleTaskDone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const remainingTasksCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="formContainer">
      <h1>Daily Planner</h1>
      
      <TaskForm addTask={addTask} />
      <h2>You have {remainingTasksCount} tasks remaining </h2>
      <ul>
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            toggleTaskD={toggleTaskDone}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default DayPlannerApp;
