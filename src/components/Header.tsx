import { FC, useContext } from 'react'
import { ThemeContext } from '../context/ui'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { GiBrain } from 'react-icons/gi'

export const Header: FC = () => {
  const { modeLight, darkMode, lightMode } = useContext(ThemeContext)
  const handleChangeTheme = () => {
    if (modeLight) {
      darkMode()
    } else {
      lightMode()
    }
  }
  return (
    <div
      className={`flex items-center justify-center font-bold text-xl md:text-3xl gap-4 px-5 pt-14 ${
        modeLight ? 'text-[#1E2A47]' : 'text-white'
      }`}>
      <div className='grid sm:flex items-center justify-center gap-4 justify-items-center'>
        <h1 className='font-bold text-3xl text-center '>Memory Game</h1>
        <GiBrain size={30} />
      </div>
      <div
        className=' items-center gap-1  absolute right-5 top-5 cursor-pointer z-20'
        onClick={handleChangeTheme}>
        {modeLight ? <BsFillMoonFill size={20} /> : <BsFillSunFill size={20} />}
      </div>
    </div>
  )
}
