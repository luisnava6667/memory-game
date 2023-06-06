import { FC } from 'react'
import { CardProps } from '../interfaces'

interface Card {
  card: CardProps
  handleClick: (id: number) => void
}
export const Card: FC<Card> = ({card, handleClick}) => {
  return (
    <div
      className={`drop-shadow-md flex items-center justify-center cursor-pointer h-16 w-16 hover:scale-105 rounded-xl transition-all duration-1000 ${
        card.flipped ? '[transform: rotateY(10deg)]' : 'bg-white'
      } `}
      onClick={() => handleClick(card.id)}>
      <div>
        <img
          src={card.img}
          alt='card'
          className={`h-1/6 scale-110 ${
            !card.flipped
              ? '[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000'
              : ''
          }`}
        />
      </div>
    </div>
  )
}
