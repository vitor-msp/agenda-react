import React from 'react';
import css from './tarefas.module.css';

export default function Tarefas({ dados, objetoTarefa }) {
  return (
    <ul className={css.ul}>
      {dados.map((tarefa) => {
        const { id, date, description, done } = tarefa;

        const liClass = done ? css.liDone : css.liUndone;

        const alteraTarefa = () => {
          objetoTarefa(tarefa);
        };

        return (
          <li
            key={id}
            className={`${css.li} ${liClass}`}
            onClick={alteraTarefa}
          >
            <span style={{ fontWeight: 'bold', marginRight: '5px' }}>
              {date.split('-').reverse().join('/')}
            </span>{' '}
            {description}
          </li>
        );
      })}
    </ul>
  );
}
