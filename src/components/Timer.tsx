import { FC, useContext, useEffect } from 'react'
import { GameContext } from '../context'
import { formatTime } from '../utils'
import { TimerProps } from '../interfaces'

export const Timer: FC<TimerProps> = ({ setTime, time }) => {
  const { loseGame, difficulty, status } = useContext(GameContext)
  useEffect(() => {
    const interval = setInterval(() => {
      if (status === 'In Progress') {
        if (time <= 1) {
          setTime(0)
          loseGame()
          return
        } else {
          setTime((time -= 1))
        }
      } else {
        setTime(time)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [setTime, difficulty, status])

  return (
    <>
      <p className='grid sm:flex justify-items-center items-center sm:gap-2'>
        Time:
        <span
          className={`
          ${time === 0 ? 'animate-none text-red-800' : ''}
          ${
            time < 5 && time > 0
              ? ' animate-ping font-extrabold text-red-800'
              : ''
          } `}>
          {formatTime(time)}
        </span>
      </p>
    </>
  )
}