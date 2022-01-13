import axios from 'axios';

export async function api(ano, mes) {
  const getLink = `http://localhost:3001/todos?year=${ano}&month=${mes}`;

  const res = await fetch(getLink);
  const json = await res.json();

  const filtrados = json.map(
    ({ id, day, month, year, date, description, done }) => {
      return {
        id,
        day,
        month,
        year,
        date,
        description,
        done,
      };
    }
  );

  return filtrados;
}
export async function update(tarefa) {
  const novaTarefa = Object.assign({}, tarefa);
  delete novaTarefa.id;

  const putLink = `http://localhost:3001/todos/${tarefa.id}`;
  await axios.put(putLink, novaTarefa);
}
