import React, { FC, useContext } from 'react'
import { Difficulty, GameContext } from '../context'
const DifficultySelector: FC = () => {
  const { difficulty, setDifficulty } = useContext(GameContext)
  const handleDifficultyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedDifficulty = event.target.value as Difficulty
    setDifficulty(selectedDifficulty)
  }

  return (
    <div className='grid sm:flex gap-3 items-center mt-10'>
      <label
        htmlFor='difficulty'
        className='text-base sm:text-xl uppercase font-semibold'>
        Select difficulty:
      </label>
      <select
        className='bg-neutral-900 text-white px-2 py-1 rounded-md uppercase text-base sm:text-xl'
        id='difficulty'
        value={difficulty}
        onChange={handleDifficultyChange}>
        <option value={'Easy'}>Easy</option>
        <option value={'Medium'}>Medium</option>
        <option value={'Hard'}>Hard</option>
      </select>
    </div>
  )
}

export default DifficultySelector
