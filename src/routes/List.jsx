import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function List() {
  const {mainArray, setMainArray} = useContext(AppContext);

  const deleteItem = (item) => {
    const copyArray = mainArray.slice();
    copyArray.splice(copyArray.indexOf(item), 1)
    setMainArray(copyArray);
  }

  return (
  <div>
    {
      mainArray.length ?
        mainArray.map((obj) => {
          return (
            <div style={{display: 'flex', gap: "1rem"}}>
              <span>{obj.name}</span>
              <span>{obj.body}</span>
              <span style={{cursor: "pointer"}} onClick={() => deleteItem(obj)}>წაშლა</span>
            </div>
          );
        })
      : null
    }
  </div>
  );
}
