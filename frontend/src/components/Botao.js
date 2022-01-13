import React from 'react';
import css from './botao.module.css';

export default function Botao({ id, nome, selecionado, marcarBotao }) {
  const classBotao = marcarBotao ? css.botaoMarcado : css.botaoDesmarcado;
  const alteraBotao = () => {
    selecionado(id);
  };
  return (
    <button onClick={alteraBotao} className={`${css.botao} ${classBotao}`}>
      {nome}
    </button>
  );
}
