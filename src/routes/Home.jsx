import React from 'react'
import { Link } from 'react-router-dom'




export const Home = () => {

  const javascript = () =>{
    
    for (let i = 0; i < arr.length; i += 2) {
  
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
  }

  return arr.join("");
}

const arr = [1, 2, 3, 4, 2, 3];
const exchangedArray = exchangeIndices(arr);
console.log(exchangedArray); 

//pirveli davaleba morchaa//

//meore davaleba daiwyo//

function maxPositiveDifference(arr) {
  let minSoFar = arr[0]; 
  let maxDiff = 0; 

  for (let i = 1; i < arr.length; i++) {
     
      if (arr[i] > minSoFar) {
       
          const diff = arr[i] - minSoFar;
      
          maxDiff = Math.max(maxDiff, diff);
      } else {
        
          minSoFar = arr[i];
      }
  }

  return maxDiff;
}


const example1 = [8, 2, 5, 6, 1, 4];
console.log(maxPositiveDifference(example1)); 

const example2 = [12, 10, 8, 5, 4];
console.log(maxPositiveDifference(example2));
const example3 = [9, 35, 5, 17, 1, 3];
console.log(maxPositiveDifference(example3)); 



//mesame davaleba daiwyoo 



function maxPositiveDifference(arr) {
  let minSoFar = arr[0]; 
  let maxDiff = 0; 

 
  for (let i = 1; i < arr.length; i++) {
   
      if (arr[i] > minSoFar) {
        
          const diff = arr[i] - minSoFar;
          maxDiff = Math.max(maxDiff, diff);
      } else {
          
          minSoFar = arr[i];
      }
  }

  return maxDiff;
}


const example1 = [8, 2, 5, 6, 1, 4];
console.log(maxPositiveDifference(example1)); // აუთფუთი იქნება: 4

const example2 = [12, 10, 8, 5, 4];
console.log(maxPositiveDifference(example2)); // აუთფუთი იქნება: 0

const example3 = [9, 35, 5, 17, 1, 3];
console.log(maxPositiveDifference(example3)); // აუთფუთი იქნება: 26



  }
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='list'>დაკლიკე და ჩაირიცხე</Link>
      </header>
    </div>
  )
}
