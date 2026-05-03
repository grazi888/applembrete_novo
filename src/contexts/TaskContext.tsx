import React, { createContext, useState, useContext, ReactNode } from 'react';

type TaskContextType = {
  tasks: any[];
  addTask: (title: string, desc: string) => void;
  toggleTaskStatus: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, title: string, desc: string) => void;
};

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  toggleTaskStatus: () => {},
  deleteTask: () => {},
  editTask: () => {},
});

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'consulta medica', desc: 'psiquiatra 13h', status: 'pendente' },
    { id: '2', title: 'arrumar o carro', desc: 'levar na oficina', status: 'concluida' }
  ]);

  const addTask = (title: string, desc: string) => {
    const newTask = { id: Date.now().toString(), title, desc, status: 'pendente' };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (id: string) => {
    setTasks(tasks.map((t) => t.id === id ? { ...t, status: t.status === 'concluida' ? 'pendente' : 'concluida' } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id: string, title: string, desc: string) => {
    setTasks(tasks.map((t) => t.id === id ? { ...t, title, desc } : t));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskStatus, deleteTask, editTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);