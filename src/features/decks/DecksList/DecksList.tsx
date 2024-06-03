import { useEffect } from 'react'
import s from './DecksList.module.css'
import { decksAPI } from '../decks-api'
import { setDecks } from '../decks-reducer'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { DeckItem } from './DeckItem/DeckItem'
import { selectDecks } from '../decks-selectors'
import { useSelector } from 'react-redux'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useSelector(selectDecks)

  useEffect(() => {
    decksAPI.getDecks().then((res) => {
      dispatch(setDecks(res.data.items)) // отправили колоды в наш стейт
    })
  }, [])
  return (
    <ul className={s.list}>
      {decks.map((d) => {
        return <DeckItem key={d.id} deck={d} />
      })}
    </ul>
  )
}
