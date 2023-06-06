/* eslint-disable no-constant-condition */
import { useContext, useState, useEffect } from 'react'
import { Board, Header, Modal, Navbar } from './components'
import { ThemeContext } from './context/ui'
import { GameContext } from './context'
import { timeSelected } from './utils'

function App() {
  const [moves, setMoves] = useState(0)
  const [time, setTime] = useState(0)
  const { modeLight } = useContext(ThemeContext)
  const { startGame, status, difficulty } = useContext(GameContext)
  useEffect(() => {
    timeSelected({ difficulty, setTime, status })
    setMoves(0)
  }, [difficulty, status])

  return (
    <div
      className={` h-screen  w-screen ${
        modeLight ? 'bg-zinc-100' : 'bg-teal-950'
      }
       `}>
      <Header />
      <Navbar mode={modeLight} moves={moves} time={time} setTime={setTime} />
      {status === 'Not Started' && (
        <div className='flex justify-center items-center mt-52'>
          <button
            onClick={() => startGame()}
            className='p-2 bg-teal-700 rounded-md text-white font-bold text-2xl '>
            Start Game
          </button>
        </div>
      )}
      {status === 'In Progress' || status === 'Resume' ? (
        <Board setMoves={setMoves} moves={moves}/>
      ) : null}
      {(status === 'Lost' || status === 'Win') && <Modal />}
    </div>
  )
}

export default App
