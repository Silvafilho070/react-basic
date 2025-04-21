import "./App.css";
import { useState } from "react";
import { ArrowRightIcon, DeleteIcon } from "lucide-react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";



function App() {

  const [task,setTasks] = useState([
    {
      id: 0,
      title: "Estudar React",
      description: "Estudar React para aprender a criar aplicações web.",
      isCompleted: false,
    },
    {
      id: 1,
      title: "Estudar JavaScript",
      description: "Estudar JavaScript para aprender a criar aplicações web.",
      isCompleted: false,
    }
  ])

  function onAddTask(title, description) {
    const newTasks = {
      id: Tasks.length + 1,
      title,
      description,
      isCompleted: false,
    }
    setTasks([...task, newTasks]);
  }

  function onTaskClick(taskId) {
    //Cria uma nova lista de tarefas
    //Usa o map para iterar sobre as tarefas
    //O map retorna uma nova lista de tarefas
    //A nova lista de tarefas é igual a lista de tarefas atual
    //Mas, se a tarefa for a tarefa clicada, inverte o valor de isCompleted

    const newTasks = task.map((task) => {
      //Verifica se o id da tarefa é igual ao id da tarefa clicada
      //Se for, inverte o valor de isCompleted
      //Se não for, retorna a tarefa sem alterações

      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //Não precisa retornar nada!
      //Se não for a tarefa clicada, retorna a tarefa sem alterações
      //Se for a tarefa clicada, retorna a tarefa com isCompleted invertido

      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="container w-screen h-screen flex justify-center bg-gradient-to-b from-[#6e7a75] to-40% to-[#404945] p-6">
      <div className="w-[500px] h-auto flex flex-col items-center rounded-[15px] bg-amber-200 shadow-lg shadow-[#0000008a] gap-5">
        <h1 className="texto font-bold text-black text-3xl p-6">
          Gerenciador de tarefas
        </h1>

        <AddTask onAddTask={onAddTask} />

        <Tasks 
          Tasks={Tasks}
          onTaskClick={onTaskClick}
        />

      </div>
    </div>
  );
}

export default App;
