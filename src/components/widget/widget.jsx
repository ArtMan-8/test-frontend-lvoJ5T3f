import React from 'react';
import PropTypes from 'prop-types';
import Field from '../field/field.jsx';
import style from './style.css';

export default function Widget({
  currentNumber, minNumber, maxNumber, onChangeNumber,
}) {
  return <section className={style.widget}>
    <Field title="Виджет"
      currentNumber={currentNumber}
      minNumber={minNumber}
      maxNumber={maxNumber}
      onChangeNumber={onChangeNumber}
    />
  </section>;
}

Widget.propTypes = {
  currentNumber: PropTypes.number.isRequired,
  minNumber: PropTypes.number.isRequired,
  maxNumber: PropTypes.number.isRequired,
  onChangeNumber: PropTypes.func.isRequired,
};
