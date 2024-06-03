import { Deck } from './decks-api'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'DECKS/SET_DECKS':
      return {
        ...state,
        decks: action.decks,
      }
    case 'DECKS/ADD_DECKS':
      return {
        ...state,
        decks: [action.deck, ...state.decks],
      }
    default:
      return state
  }
}

export const setDecks = (decks: Deck[]) => ({ type: 'DECKS/SET_DECKS', decks }) as const
export const addDecks = (deck: Deck) => ({ type: 'DECKS/ADD_DECKS', deck }) as const

type setDecksType = ReturnType<typeof setDecks>
type addDecksType = ReturnType<typeof addDecks>
type DecksActions = setDecksType | addDecksType
