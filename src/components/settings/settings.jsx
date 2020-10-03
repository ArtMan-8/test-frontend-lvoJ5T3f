import React from 'react';
import PropTypes from 'prop-types';
import Field from '../field/field.jsx';
import style from './style.css';

export default function Settings({
  minNumber, maxNumber, currentNumber, setCurrentNumber, setMinNumber, setMaxNumber,
}) {
  const setMinNumberHandler = (number) => number <= currentNumber && setMinNumber(number);
  const setMaxNumberHandler = (number) => number >= currentNumber && setMaxNumber(number);

  return <section className={style.settings}>
    <Field title="Начальное значение"
      currentNumber={currentNumber}
      onChangeNumber={setCurrentNumber}
    />

    <Field title="Минимальное значение"
      currentNumber={minNumber}
      onChangeNumber={setMinNumberHandler}
    />

    <Field title="Максимальное значение"
      currentNumber={maxNumber}
      onChangeNumber={setMaxNumberHandler}
    />
  </section>;
}

Settings.propTypes = {
  currentNumber: PropTypes.number.isRequired,
  minNumber: PropTypes.number.isRequired,
  maxNumber: PropTypes.number.isRequired,
  setCurrentNumber: PropTypes.func.isRequired,
  setMinNumber: PropTypes.func.isRequired,
  setMaxNumber: PropTypes.func.isRequired,
};
