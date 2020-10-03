import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

export default function Field({ title }) {
  return <div className={style.field}>
    <h3 className={style.h3}>{title}</h3>
    <button
      type="button"
      className={style.button}
    >-</button>

    <input
      type="number"
      className={style.input}
    />

    <button
      type="button"
      className={style.button}
    >+</button>
  </div>;
}

Field.propTypes = {
  title: PropTypes.string.isRequired,
};
