import React from "react";
import css from "./estatisticas.module.css";

export default function Estatisticas({
  totalTarefas,
  tarefasFeitas,
  tarefasNaoFeitas,
}) {
  return (
    <div className={css.estatisticas}>
      <span className={css.texto}>
        Total de tarefas: <span style={{ color: "blue" }}>{totalTarefas}</span>
      </span>
      <span className={css.texto} style={{ margin: "0px 20px" }}>
        Tarefas cumpridas:{" "}
        <span style={{ color: "green" }}>{tarefasFeitas}</span>
      </span>
      <span className={css.texto}>
        Tarefas não cumpridas:{" "}
        <span style={{ color: "red" }}>{tarefasNaoFeitas}</span>
      </span>
    </div>
  );
}
