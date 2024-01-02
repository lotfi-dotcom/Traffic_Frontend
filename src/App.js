import Table from './Table';
import { useRef, useState } from 'react';

const App = () => {
  const RefTable = useRef();
  const [isTableVisible, setIsTableVisible] = useState(false);

  const handleOnClick = () => {
    // Zeige oder verstecke die Tabelle, abhängig vom aktuellen Zustand
    setIsTableVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className='root'>
      <button onClick={handleOnClick}>CMTS</button>
      {isTableVisible && <Table ref={RefTable} />}
    </div>
  );
};

export default App;
