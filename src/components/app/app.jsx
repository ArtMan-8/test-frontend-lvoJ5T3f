import React from 'react';
import Settings from '../settings/settings.jsx';
import Widget from '../widget/widget.jsx';
import './style.css';

export default function App() {
  const [minNumber, setMinNumber] = React.useState(0);
  const [maxNumber, setMaxNumber] = React.useState(100);
  const [currentNumber, setCurrentNumber] = React.useState(50);

  const widgetNumberChangeHandler = (number) => (
    (number <= maxNumber && number >= minNumber) && setCurrentNumber(number)
  );

  return <>
    <Settings
      currentNumber={currentNumber}
      minNumber={minNumber}
      maxNumber={maxNumber}
      setCurrentNumber={widgetNumberChangeHandler}
      setMinNumber={setMinNumber}
      setMaxNumber={setMaxNumber}
    />

    <Widget
      currentNumber={currentNumber}
      minNumber={minNumber}
      maxNumber={maxNumber}
      onChangeNumber={widgetNumberChangeHandler}
    />
  </>;
}
