import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState, createContext } from 'react'
import data1 from"./data/Array_1.json"
import data2 from "./data/Array_2.json"
import List from './routes/List'
import './App.css'

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
  const [state, setState] = useState(null)
  return (
    <AppContext.Provider value={{ state, setState }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App
