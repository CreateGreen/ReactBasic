import {useState, useEffect} from "react";

const All =()=>{
const [coins,setcoins]=useState([]);
useEffect(()=>{
  fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then((json)=>{
      setcoins(json);
    })
},[])
return(
<ul>
    {coins.map((coin,index)=>
        <li key={index}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}USD
        </li>
    )}
</ul>
)
}



export default All;