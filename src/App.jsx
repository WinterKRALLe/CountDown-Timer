import React from 'react'
import CountDown from './components/CountDown'

function App() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <CountDown staticDate='Jan 01 2023' string='Do nového roku zbývá:' />
    </div>
  )
}

export default App
