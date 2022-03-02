import All from "./All.js";
import UtoB from "./UtoB.js";
import {useState, useEffect} from "react";


const App=()=>{
const [load,setload]=useState(true);
const [coins,setcoins]=useState([]);
useEffect(()=>{
  fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((json)=>{
      setcoins(json);
      setload(false);
    })
},[])
const [index,setindex]=useState(0);
const onSelect=(event)=>{
  setindex(event.target.value);
}
  return (
    <div>
      <h1>Coins</h1>
      {load ? <strong>Loading...</strong>:
      <select value={index} onChange={onSelect}>
        <option value="0" >All</option>
        <option value="1" >USD to BTC</option>
      </select>
      } 
    {index === "0" ? <All />:null}
    {index === "1" ? <UtoB />:null}
    </div>
  );
}

export default App;
