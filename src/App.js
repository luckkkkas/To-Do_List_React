import './App.css';
import { useRef, useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const ref = useRef(null);

  const adicionar1 = () => {
    if (novaTarefa.trim() === '') return;
    setTarefas(prevTarefas => [...prevTarefas, novaTarefa]);
    setNovaTarefa('');
    ref.current.focus();
  };

  const remove = (tarefaParaRemover) => {
    setTarefas(prevTarefas => prevTarefas.filter(tarefa => tarefa !== tarefaParaRemover));
  };

  return (
    <div className="body">
      <h1 className="title">To-Do List</h1>
      <input
        ref={ref}
        className='digitadd'
        required
        type="text"
        value={novaTarefa}
        onChange={e => setNovaTarefa(e.target.value)}
      />
      <button className='additem' onClick={adicionar1}>Adicionar Tarefa</button>
      {tarefas.length > 0 && (
        <ul className='items'>
          {tarefas.map((tarefa, index) => (
            <>
              <li key={index} className='item'>
              <input type='checkbox' />
              {tarefa}
              <button className='buttonX' onClick={() => remove(tarefa)}>X</button>
              </li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
