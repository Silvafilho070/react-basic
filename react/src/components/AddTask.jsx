import { useState } from "react";

export default function AddTask( { onAddTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="w-full flex flex-col items-center p-4 gap-2">

            <input 
                type="text"
                placeholder="Título da tarefa"
                value={title}
                onChange={(e) => setTitle(e.target.value)}  
            />

            <input 
                type="text"
                placeholder="Descrição da tarefa"
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
            />

            <button
                className="bg-[#019e4f] text-white w-[40%] h-[40px] rounded-lg shadow-md shadow-[#0000008a] hover:bg-[#404945] transition-all duration-300"
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        return(
                            alert("Preencha todos os campos!")+
                            setTitle("")+
                            setDescription("")
                        );
                    }
                    alert("Tarefa adicionada com sucesso!")
                    onAddTask(title, description);
                    setTitle("");
                    setDescription("");
                }}
            >
                Adicionar tarefa
            </button>
        </div>
    );

}