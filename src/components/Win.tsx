import { useContext } from "react"
import { GameContext } from "../context"
import {GiTrophyCup} from 'react-icons/gi'
export const Win = () => {
  const { notStarted } = useContext(GameContext)
  return (
    <>
      <div className='rounded-full bg-transparent  animate-pulse '>
        <GiTrophyCup size={50} className='text-yellow-500' />
      </div>
      <h2 className='text-white uppercase text-3xl font-bold tracking-wider'>
        You Win
      </h2>
      <button
        className='uppercase bg-green-500 font-semibold text-black rounded-md px-5 py-1 hover:opacity-90 hover:text-black transition-all duration-500 mb-3'
        onClick={notStarted}>
        Play Again
      </button>
    </>
  )
}
