/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, FC, useContext } from 'react'
import { Card } from '.'
import { createBoard } from '../utils'
import { GameContext } from '../context'
import { BoardProps, CardProps } from '../interfaces'

export const Board: FC<BoardProps> = ({ setMoves, moves }) => {
  const [cards, setCards] = useState<CardProps[]>([])
  const [flippedCards, setFlippedCards] = useState<CardProps[]>([])
  const [isDisable, setIsDisable] = useState(false)
  const { winGame, notStarted } = useContext(GameContext)

  useEffect(() => {
    createBoard(setCards)
  }, [])

  const handleClick = (id: number) => {
    if (isDisable) return
    const updatedCards = [...cards]
    const currentCardIndex = updatedCards.findIndex((card) => card.id === id)
    const currentCard = updatedCards[currentCardIndex]
    if (!currentCard.flipped && !currentCard.matched) {
      currentCard.flipped = true
      const newFlippedCards = [...flippedCards, currentCard]
      setFlippedCards(newFlippedCards)
      if (newFlippedCards.length === 2) {
        setIsDisable(true)
        const [firstCard, secondCard] = newFlippedCards
        if (firstCard.img === secondCard.img) {
          firstCard.matched = true
          secondCard.matched = true
          setIsDisable(false)
        } else {
          setTimeout(() => {
            firstCard.flipped = false
            secondCard.flipped = false
            setCards([...updatedCards])
            setIsDisable(false)
          }, 100)
        }
        setFlippedCards([])
        setMoves(moves + 1)
      }
      setCards([...updatedCards])
    }
    if (updatedCards.every((card) => card.matched)) {
      winGame()
      setIsDisable(true)
    }
  }
  const handleBack = () => {
    notStarted()
    setCards([])
    setMoves(0)
  }
  return (
    <>
      <div className='flex items-center mt-14'>
        <div className='mx-auto flex  flex-col items-center justify-center'>
          <div className='grid grid-cols-4 gap-3 justify-center items-center px-5 py-5 my-3'>
            {cards.map((card) => (
              <Card key={card.id} card={card} handleClick={handleClick} />
            ))}
          </div>

          <button
            className='p-2 bg-teal-700 rounded-md text-white font-bold text-2xl mt-10'
            onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </>
  )
}
