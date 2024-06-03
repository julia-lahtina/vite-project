import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getDecks() {
    return instance.get<FetchDecksResponse>('/v2/decks')
  },
  addDeck(params: AddDeckParams) {
    return instance.post<Deck>('/v1/decks', params)
  },
}

type FetchDecksResponse = {
  items: Deck[]
  pagination: Pagination
  maxCardsCount: number
}

export interface Author {
  id: string
  name: string
}

export type Deck = {
  author: Author
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
  isFavorite: boolean
}

export interface Pagination {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type AddDeckParams = {
  name: string
}
