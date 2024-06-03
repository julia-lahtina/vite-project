import { useEffect } from 'react'
import s from './DecksList.module.css'
import { useAppDispatch } from '../../../app/store'
import { DeckItem } from './DeckItem/DeckItem'
import { selectDecks } from '../decks-selectors'
import { useSelector } from 'react-redux'
import { fetchDecksTC } from '../decks-thunks'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useSelector(selectDecks)

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])
  return (
    <ul className={s.list}>
      {decks.map((d) => {
        return <DeckItem key={d.id} deck={d} />
      })}
    </ul>
  )
}
