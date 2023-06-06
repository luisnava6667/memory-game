import { createContext } from 'react'

export type Difficulty = 'Easy' | 'Medium' | 'Hard'
export interface InitialGameState {
  status: string
  difficulty: Difficulty
  setDifficulty: (difficulty: Difficulty) => void
  notStarted: () => void
  startGame: () => void
  winGame: () => void
  loseGame: () => void
}

export const GameContext = createContext({} as InitialGameState)
