import React from "react";
import BotoesAnos from "./BotoesAnos";
import BotoesMeses from "./BotoesMeses";
import Botao from "./Botao";
import css from "../app.module.css";

const anos = [{ nome: 2019 }, { nome: 2020 }, { nome: 2021 }];
const meses = [
  {
    id: 1,
    nome: "Jan",
  },
  {
    id: 2,
    nome: "Fev",
  },
  {
    id: 3,
    nome: "Mar",
  },
  {
    id: 4,
    nome: "Abr",
  },
  {
    id: 5,
    nome: "Mai",
  },
  {
    id: 6,
    nome: "Jun",
  },
  {
    id: 7,
    nome: "Jul",
  },
  {
    id: 8,
    nome: "Ago",
  },
  {
    id: 9,
    nome: "Set",
  },
  {
    id: 10,
    nome: "Out",
  },
  {
    id: 11,
    nome: "Nov",
  },
  {
    id: 12,
    nome: "Dez",
  },
];

export default function AreaFiltro({
  anoSelecionado,
  mesSelecionado,
  marcarBotaoAno,
  marcarBotaoMes,
}) {
  const enviaAno = (ano) => {
    anoSelecionado(ano);
  };
  const enviaMes = (mes) => {
    mesSelecionado(mes);
  };

  return (
    <div className={css.app}>
      <h3 style={{ textAlign: "center" }}>Agenda Pessoal</h3>
      <BotoesAnos>
        {anos.map(({ nome }) => {
          const marcarBotao = marcarBotaoAno === nome ? true : false;
          return (
            <Botao
              key={nome}
              nome={nome}
              id={nome}
              selecionado={enviaAno}
              marcarBotao={marcarBotao}
            />
          );
        })}
      </BotoesAnos>

      <BotoesMeses>
        {meses.map(({ id, nome }) => {
          const marcarBotao = marcarBotaoMes === id ? true : false;
          return (
            <Botao
              key={id}
              nome={nome}
              id={id}
              selecionado={enviaMes}
              marcarBotao={marcarBotao}
            />
          );
        })}
      </BotoesMeses>
    </div>
  );
}
