import React, { useState } from 'react';
import ArrayOne from '../data/Array_1.json';
import ArrayTwo from '../data/Array_2.json';


export default function List({ ArrayOne, ArrayTwo }) {
  const [result, setResult] = useState([]);

  const combineUnique = (arr1, arr2) => {
    const unique = {};
    const result = [];

    const addItem = (item) => {
      if (!unique[item.id]) {
        unique[item.id] = true;
        result.push(item);
      }
    };

    for (let i = 0; i < arr1.length; i++) {
      addItem(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
      addItem(arr2[i]);
    }

    return result;
  };

  const handleCombine = () => {
    const combinedResult = combineUnique(ArrayOne, ArrayTwo);
    setResult(combinedResult);
  };

  const handleDelete = () => {
    setResult([]);
  };

  return (
    <div>
      <button onClick={handleCombine}>Combine</button>
      <button onClick={handleDelete}>Delete</button>
      <ul>
        {result.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}
