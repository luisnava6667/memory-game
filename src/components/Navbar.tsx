import { FC, useContext } from 'react'
import { Confetti, Timer } from '.'
import DifficultySelector from './DifficultySelector'
import { GameContext } from '../context'
import { NavbarProps } from '../interfaces'


export const Navbar: FC<NavbarProps> = ({ mode, moves, time, setTime }) => {
  const { status, difficulty } = useContext(GameContext)

  return (
    <div
      className={`flex justify-center font-bold text-base sm:text-lg items-center mt-14 gap-4 ${
        mode ? 'text-neutral-900' : 'text-white '
      }`}>
      {status === 'Not Started' ? (
        <DifficultySelector />
      ) : status === 'Win' ? (
        <Confetti />
      ) : (
        <>
          <div className='grid sm:flex sm:gap-2 justify-items-center items-center'>
            <p>Moves:</p>
            <p>{moves}</p>
          </div>

          <Timer time={time} setTime={setTime} />
          <div className='grid sm:flex sm:gap-2 justify-items-center items-center'>
            <p>Difficulty:</p>
            <p>{difficulty}</p>
          </div>
        </>
      )}
    </div>
  )
}
