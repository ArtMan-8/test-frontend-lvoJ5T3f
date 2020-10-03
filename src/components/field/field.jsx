import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

export default function Field({
  title, currentNumber, minNumber, maxNumber, onChangeNumber,
}) {
  return <div className={style.field}>
    <h3 className={style.h3}>{title}</h3>
    <button
      type="button"
      className={style.button}
      onClick={() => onChangeNumber(currentNumber - 1)}
    >-</button>

    <input
      type="number"
      className={style.input}
      value={currentNumber}
      min={minNumber}
      max={maxNumber}
      onChange={(evt) => onChangeNumber(parseInt(evt.target.value, 10))}
      onWheel={() => {}}
      onKeyDown={(evt) => {
        if (evt.key === '-') {
          evt.preventDefault();
          onChangeNumber(currentNumber - 1);
        }

        if (evt.key === '+') {
          evt.preventDefault();
          onChangeNumber(currentNumber + 1);
        }
      }}
    />

    <button
      type="button"
      className={style.button}
      onClick={() => onChangeNumber(currentNumber + 1)}
    >+</button>
  </div>;
}

Field.propTypes = {
  title: PropTypes.string.isRequired,
  currentNumber: PropTypes.number.isRequired,
  minNumber: PropTypes.number,
  maxNumber: PropTypes.number,
  onChangeNumber: PropTypes.func.isRequired,
};
