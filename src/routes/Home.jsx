import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import array1 from "../data/Array_1.json";
import array2 from "../data/Array_2.json";
import { AppContext } from '../App';

export const Home = () => {
  const {setMainArray} = useContext(AppContext);

  const concatArrays = (arr1, arr2) => {
    const mainArr = [];

    for(let elem of arr1) {
      if(!mainArr.includes(JSON.stringify(elem))) mainArr.push(JSON.stringify(elem));
    }

    for(let elem of arr2) {
      if(!mainArr.includes(JSON.stringify(elem))) mainArr.push(JSON.stringify(elem));
    }

    for(let i = 0; i < mainArr.length; i++) {
      mainArr[i] = JSON.parse(mainArr[i]);
    }

    setMainArray(mainArr);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Link onClick={() => concatArrays(array1, array2)} to='list'>დაკლიკე და ჩაირიცხე</Link>
      </header>
    </div>
  )
}
