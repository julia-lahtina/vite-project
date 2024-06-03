import { Dispatch } from 'redux'
import { AddDeckParams, decksAPI } from './decks-api'
import { addDecks, setDecks } from './decks-reducer'

export const fetchDecksTC = () => (dispatch: Dispatch) => {
  decksAPI.getDecks().then((res) => {
    dispatch(setDecks(res.data.items)) // отправили колоды в наш стейт
  })
}

export const addDecksTC = (params: AddDeckParams) => (dispatch: Dispatch) => {
  decksAPI.addDeck(params).then((res) => {
    dispatch(addDecks(res.data))
  })
}
