import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

function App() {
  const [task, setTask] = React.useState([
    { text: 'Cortar cebolla', completed: true },
    { text: 'Tomar el Curso de Intro a React.js', completed: false },
    { text: 'Llorar con la Llorona', completed: false },
    { text: 'LALALALALA', completed: false },
    { text: 'Conectar con el presente y el momento', completed: false },
  ]);
  const taskCompleted = task.filter((value) => !!value.completed).length;
  const [searchValue, setSearchValue] = React.useState('');
  
  const searchTasks = task.filter(
    item =>  item.text.toLocaleLowerCase().includes(searchValue.toLowerCase())
  )

  
  const createTask = (text) => {
    if(text !== ''){
      const newTask = [...task];
      
      newTask.push({
        text: text,
        completed: false
      })

      setTask(newTask)
    }
  }

  const checkTask = (text) => {
    const newTask = [...task];
    const index = newTask.findIndex(
      (task) => task.text === text
    );

    newTask[index].completed = true;
    setTask(newTask);
  }

  const deleteTask = (text) => {
    const newTask = [...task];
    const taskDelete = newTask.filter((value) => value.text !== text);
    
    setTask(taskDelete);
  }

  return (
    <>
      <TodoCounter completed={taskCompleted} total={task.length} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchTasks.map(task => (
          <TodoItem
            key={task.text}
            text={task.text}
            completed={task.completed}
            onComplete={() => checkTask(task.text)}
            onDelete={() => deleteTask(task.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton 
        onCreate={() => createTask(searchValue)}
      />
      
    </>
  );
}

export default App;