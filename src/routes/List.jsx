import React, { useContext,useState } from 'react'
import data1 from "../data/Array_1.json"
import data2 from "../data/Array_2.json"

export default function List() {

  const [mergedArray, setMergedArray] = useState();
  const [arrayFir, setArrayFir] = useState(data1)
  const [arrayTwi, setArrayTwi] = useState(data2)
  console.log(arrayFir)
  const mergeArrays = () => {
    let merged = [];
    let i = 0;
    while (i < arrayFir.length) {
      merged.push(setArrayFir[i]);
      i++;
    }
    let j = 0;
    while (j < arrayTwi.length) {
      merged.push(setArrayTwi[j]);
      j++;
    }
    return setMergedArray(merged);
  
  };
  console.log("hello")


return <>


  {mergedArray.map((item)=>{
    return <ul>
      <li>{item.name}</li>
      <li>{item.body}</li>
    </ul>
  })}
    
</>
}
