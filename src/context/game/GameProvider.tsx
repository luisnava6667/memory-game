import { useReducer } from 'react'
import { Difficulty, GameContext } from './GameContext'
import { gameReducer } from './gameReducer'
import { FC } from 'react'
export interface GameState {
  status: string
  difficulty: Difficulty
}
const GAME_INITIAL_STATE: GameState = {
  status: 'Not Started',
  difficulty: 'Easy'
}
interface ProviderProps {
  children: React.ReactNode
}
export const GameProvider: FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, GAME_INITIAL_STATE)
  const notStarted = () => dispatch({ type: 'GAME - Not Started' })
  const startGame = () => dispatch({ type: 'GAME - In Progress' })
  const winGame = () => dispatch({ type: 'GAME - Win' })
  const loseGame = () => dispatch({ type: 'GAME - Lost' })
  const setDifficulty = (selectedDifficulty: Difficulty) => {
    dispatch({ type: 'SET_DIFFICULTY', payload: selectedDifficulty })
  }
  return (
    <GameContext.Provider
      value={{
        ...state,
        notStarted,
        startGame,
        winGame,
        loseGame,
        setDifficulty
      }}>
      {children}
    </GameContext.Provider>
  )
}
