import { BsExclamationOctagon } from 'react-icons/bs'
import { useContext } from 'react'
import { GameContext } from '../context'
export const Lost = () => {
  const { notStarted } = useContext(GameContext)
  return (
    <>
      <div className='rounded-full bg-transparent  animate-spin'>
        <BsExclamationOctagon size={50} className='text-red-500' />
      </div>
      <h2 className='text-white uppercase text-3xl font-bold tracking-wider'>
        You Lost
      </h2>
      <button
        className='uppercase bg-green-500 font-semibold text-black rounded-md px-5 py-1 hover:opacity-90 hover:text-black transition-all duration-500 mb-3'
        onClick={notStarted}>
        Try Again
      </button>
    </>
  )
}
