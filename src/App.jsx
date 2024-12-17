import { useState } from 'react';
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
*/
export default function App(){
  const [items,setItems]=useState(["item1","item2","item3","item4"]);
  const [text, setText] = useState('');
  
  const handleChange = (e) => {
    setText(e.target.value); 
  };
  const handleSubmit = (e) => {
    if (text.trim()) { 
      setItems([...items, text]); 
      setText(''); 
    }
  };
  
  
  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  
return (
  
    <>
    <div>
    <h1>TO DO LIST</h1>
    <input type="text"value={text}onChange={handleChange}/>
    <button type="button" onClick={handleSubmit}>Add</button>
    <ul>
      {items.map((item, index) => (
        <><li key={index}>{item}<button onClick={() => handleDelete(index)}>Del</button></li></>
      ))}
    </ul>
    </div>
    
  </>
);
}




