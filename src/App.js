import Form from './components/Form/Form'
import { useState } from 'react';
import './App.css';
import List from './components/ValueItems/List';

function App() { 
  const [itemList, setItemList] = useState([])

  function addItemsvalue(itemsData) {
    setItemList([itemsData, ...itemList])
  }

  return (
    <div className="App">
      <Form addItemsvalue={addItemsvalue}/>
      <List taskList={itemList}/>
    </div>
  );
}

export default App;
