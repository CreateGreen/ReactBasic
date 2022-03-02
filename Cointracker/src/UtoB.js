import {useState, useEffect} from "react";

const UtoB =()=>{
const [coins,setcoins]=useState([]);
useEffect(()=>{
  fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((json)=>{
      setcoins(json);  
},[])
})
const [usd,setusd]=useState(0);
const onChange=(event)=>{
    setusd(event.target.value)
}

return(
    <div>
    <input value={usd} onChange={onChange}></input>
    <input value={usd/coins.filter((coin)=>coin.name==="Bitcoin").map((coin)=>coin.quotes.USD.price)} type="number"></input>
    </div>
)
}



export default UtoB;