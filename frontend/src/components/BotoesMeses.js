import React from 'react';
import css from './areaBotoes.module.css';

export default function BotoesMeses({ children }) {
  return <div className={css.areaBotoes}>{children}</div>;
}
