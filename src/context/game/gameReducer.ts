import { Difficulty, GameState } from '.'

type GameActionType =
  | { type: 'GAME - Not Started' }
  | { type: 'GAME - In Progress' }
  | { type: 'GAME - Win' }
  | { type: 'GAME - Lost' }
  | { type: 'SET_DIFFICULTY'; payload: Difficulty }
export const gameReducer = (state: GameState, action: GameActionType) => {
  switch (action.type) {
    case 'GAME - Not Started':
      return { ...state, status: 'Not Started' }
    case 'GAME - In Progress':
      return { ...state, status: 'In Progress' }
    case 'GAME - Win':
      return { ...state, status: 'Win' }
    case 'GAME - Lost':
      return { ...state, status: 'Lost' }
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.payload }
    default:
      return state
  }
}
