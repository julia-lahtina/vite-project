import { useEffect } from 'react'
import s from './DecksList.module.css'
import { decksAPI } from '../decks-api'
import { setDecks } from '../decks-reducer'
import { useAppDispatch, useAppSelector } from '../../../app/store'
import { DeckItem } from './DeckItem/DeckItem'

export const DecksList = () => {
  const dispatch = useAppDispatch()
  const decks = useAppSelector((state) => state.decksReducer.decks)

  useEffect(() => {
    decksAPI.getDecks().then((res) => {
      dispatch(setDecks(res.data.items)) // отправили колоды в наш стейт
    })
  }, [])
  return (
    <>
      <ul className={s.list}></ul>
      {decks.map((d, index) => {
        return <DeckItem key={index} deck={d} />
      })}
    </>
  )
}
