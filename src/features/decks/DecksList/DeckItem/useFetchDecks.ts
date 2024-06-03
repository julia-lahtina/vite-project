import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../../app/store'
import { selectDecks } from '../../decks-selectors'
import { useEffect } from 'react'
import { fetchDecksTC } from '../../decks-thunks'

export const useFetchDecks = () => {
  const dispatch = useAppDispatch()
  const decks = useSelector(selectDecks)

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])

  return {
    decks,
  }
}
