import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { useState, createContext } from 'react'
import List from './routes/List'


import { Home } from './routes/Home'

export const AppContext = createContext(null)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'list',
    element: <List />,
  },
])

function App() {
  //N1
  const arr = [1,2,3,4,2,3];
  let temp;
  for(let i = 0; i < arr.length - 1; i +=2) {
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    
  }
  console.log(arr);

  //N2
  

  //N3
  const str1 = 'abc';
  const str2 = str1.split('').reverse().join('');
  console.log(str2);
  
  const [state, setState] = useState(null)
  return (
    <AppContext.Provider value={{ state, setState }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App
