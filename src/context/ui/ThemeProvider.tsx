import { FC, useReducer } from 'react'
import { ThemeContext, themeReducer } from '.'
export interface ThemeState {
  modeLight: boolean
}
const THEME_INITIAL_STATE: ThemeState = {
  modeLight: true
}
interface ProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, THEME_INITIAL_STATE)
  const lightMode = () => dispatch({ type: '[THEME] - light' })
  const darkMode = () => dispatch({ type: '[THEME] - dark' })

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        lightMode,
        darkMode
      }}>
      {children}
    </ThemeContext.Provider>
  )
}
