import { SetStateAction } from 'react'
import { imgs } from '../data'
import { CardProps, TimeSelected } from '../interfaces'

export const shuffleCards = (cards: CardProps[]): CardProps[] => {
  const shuffledCards = [...cards]
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]]
  }

  return shuffledCards
}
export const createBoard = (setCards: { (value: SetStateAction<CardProps[]>): void; (arg0: { flipped: boolean; matched: boolean; id: number; img: string; alt: string }[]): void } ) => {
    const duplicateCards = imgs.flatMap((img) => {
      const duplicate = {
        ...img,
        id: img.id + imgs.length
      }
      return [img, duplicate]
    })
    const newCards = shuffleCards(duplicateCards)
    const cards = newCards.map((card) => ({
      ...card,
      flipped: false,
      matched: false
    }))

    setCards(cards) 
  }
export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

export const timeSelected = ({ difficulty, setTime, status }: TimeSelected) => {
  if (status === 'Not Started') {
    if (difficulty === 'Easy') {
      return setTime(180)
    } else if (difficulty === 'Medium') {
      return setTime(120)
    } else if (difficulty === 'Hard') {
      return setTime(60)
    }
  }
}
