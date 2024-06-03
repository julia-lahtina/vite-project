import { Dispatch } from 'redux'
import { decksAPI } from './decks-api'
import { setDecks } from './decks-reducer'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.getDecks().then((res) => {
    dispatch(setDecks(res.data.items)) // отправили колоды в наш стейт
  })
}
