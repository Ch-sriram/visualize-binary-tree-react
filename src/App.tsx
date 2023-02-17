import './App.css';
import * as React from 'react';
import InputSubmit from './components/InputSubmit';
import RenderTree from './components/RenderTree';

// App Component
const App = () => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const [rawData, setRawData] = React.useState<string>('');

  const onSubmitBtnClick = () => {
    if (inputRef.current) {
      setRawData(inputRef.current.value);
    }
  };

  return (
    <div className="App">
      <InputSubmit onClick={onSubmitBtnClick} ref={inputRef} />
      {rawData && <RenderTree rawData={rawData} />}
    </div>
  );
};

export default App;
