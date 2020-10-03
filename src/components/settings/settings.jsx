import React from 'react';
import Field from '../field/field.jsx';
import style from './style.css';

export default function Settings() {
  return <section className={style.settings}>
    <Field title="Начальное значение" />
    <Field title="Минимальное значение" />
    <Field title="Максимальное значение" />
  </section>;
}
