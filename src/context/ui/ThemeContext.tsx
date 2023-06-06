import { createContext } from 'react'

interface ContextProps {
  modeLight: boolean
  lightMode: ()=> void
  darkMode: ()=> void
}

export const ThemeContext = createContext({} as ContextProps)
