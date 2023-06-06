import { useContext } from 'react'
import { GameContext } from '../context'
import { Win } from '.'
import { Lost } from './Lost'
export const Modal = () => {
  const { status } = useContext(GameContext)
  return (
    <div className='fixed inset-0 bg-black opacity-80 '>
      <div
        className={`flex  flex-col justify-center items-center gap-7 bg-emerald-900 absolute w-[250px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg z-10`}>
        {status === 'Lost' && <Lost />}
        {status === 'Win' && <Win />}
      </div>
    </div>
  )
}
