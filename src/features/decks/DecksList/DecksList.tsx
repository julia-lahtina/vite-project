import s from './DecksList.module.css'
import { DeckItem } from './DeckItem/DeckItem'
import { useFetchDecks } from './DeckItem/useFetchDecks'

export const DecksList = () => {
  const { decks } = useFetchDecks()

  return (
    <ul className={s.list}>
      {decks.map((d) => {
        return <DeckItem key={d.id} deck={d} />
      })}
    </ul>
  )
}
