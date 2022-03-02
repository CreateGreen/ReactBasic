
import styles from "./App.module.css";
import {useState, useEffect} from "react";


const App=()=>{
  const [Do,setDo]= useState("");
  const [Dos,setDos]=useState([]);
  const onChange=(event)=>{
    setDo(event.target.value)
  }
  const onSubmit =(event)=> {
    event.preventDefault();
    if(Do ===""){
      return;
    }
    setDos(currentArray=>[Do,...currentArray]);
    setDo("");
    
  }
console.log(Dos);
  return (
    <div>
      <h1>My To Do ({Dos.length})</h1>
      <form onSubmit={onSubmit}>
      <input onChange={onChange} 
      value ={Do}
      type="text" 
      placeholder="Write your to do ..." />
      <button>Add to do</button>
      </form>
      <hr />
      <ul>
     {Dos.map((item,index)=><li key={index}>{item}</li>)}
     </ul>
    </div>
  );
}

export default App;
