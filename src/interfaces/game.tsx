import { Difficulty } from "../context"

export interface CardProps {
  id: number
  img: string
  alt: string
  matched?: boolean
  flipped?: boolean
}
export interface TimeSelected {
  difficulty: Difficulty
  setTime: (time: number) => void
  status: string
}
export interface BoardProps {
  moves: number
  setMoves: (moves: number) => void
}
export interface TimerProps {
  time: number
  setTime: (timer: number) => void
}
export interface NavbarProps extends TimerProps {
  mode: boolean
  moves: number
}