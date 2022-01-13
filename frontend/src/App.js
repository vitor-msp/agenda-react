import React, { useState, useEffect } from "react";
import AreaFiltro from "./components/AreaFiltro";
import AreaDados from "./components/AreaDados";
import { api, update } from "./api/api.js";
import css from "./app.module.css";

export default function App() {
  const [mesAtual, setMesAtual] = useState(0);
  const [anoAtual, setAnoAtual] = useState(0);
  const [filtrados, setFiltrados] = useState([]);
  const [estadoTarefa, setEstadoTarefa] = useState(false);

  const filtraAno = (anoSelecionado) => {
    setAnoAtual(anoSelecionado);
  };
  const filtraMes = (mesSelecionado) => {
    setMesAtual(mesSelecionado);
  };

  const buscaDados = async () => {
    if (anoAtual !== 0 && mesAtual !== 0) {
      let res = await api(anoAtual, mesAtual);
      res = res.sort((a, b) => {
        return a.day - b.day;
      });
      setFiltrados(res);
    }
  };

  useEffect(() => {
    buscaDados();
    return () => {};
  }, [anoAtual]);

  useEffect(() => {
    buscaDados();
    return () => {};
  }, [mesAtual]);

  // useEffect(() => {
  //   return () => {};
  // }, [filtrados]);

  const alteraTarefa = (tarefa) => {
    tarefa.done = !tarefa.done;
    setEstadoTarefa(!estadoTarefa);
    update(tarefa);
  };

  return (
    <div className={css.app}>
      <AreaFiltro
        anoSelecionado={filtraAno}
        mesSelecionado={filtraMes}
        marcarBotaoAno={anoAtual}
        marcarBotaoMes={mesAtual}
      />

      <br />

      {filtrados.length === 0 ? (
        <p>Nenhum dado filtrado.</p>
      ) : (
        <AreaDados dados={filtrados} objetoTarefa={alteraTarefa} />
      )}
    </div>
  );
}
