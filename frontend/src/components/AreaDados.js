import React from 'react';
import Estatisticas from './Estatisticas';
import Tarefas from './Tarefas';
import css from '../app.module.css';

export default function AreaDados({ dados, objetoTarefa }) {
  let tarefasFeitas = 0;
  let tarefasNaoFeitas = 0;
  dados.forEach(({ done }) => {
    done === true ? tarefasFeitas++ : tarefasNaoFeitas++;
  });
  const totalTarefas = tarefasFeitas + tarefasNaoFeitas;
  const alteraTarefa = (tarefa) => {
    objetoTarefa(tarefa);
  };
  return (
    <div className={css.app} style={{margin: "0px 20px"}}>
      <Estatisticas
        totalTarefas={totalTarefas}
        tarefasFeitas={tarefasFeitas}
        tarefasNaoFeitas={tarefasNaoFeitas}
      />
      <Tarefas dados={dados} objetoTarefa={alteraTarefa} />
    </div>
  );
}
