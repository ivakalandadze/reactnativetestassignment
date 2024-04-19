import React from 'react'
import { Link } from 'react-router-dom'



export const Home = () => {

  const func = () => {
    console.log('func')
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='list'>დაკლიკე და ჩაირიცხე</Link>
      </header>
      <button onClick={func}> sadsa </button>
    </div>
  )
  

}
