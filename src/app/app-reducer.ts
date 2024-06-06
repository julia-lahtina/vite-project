export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'idle' as RequestStatusType,
  error: null as string | null,
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET_APP_STATUS':
      return { ...state, status: action.isLoading }
    default:
      return state
  }
}

export const setAppStatus = (isLoading: RequestStatusType) => ({ type: 'SET_APP_STATUS', isLoading }) as const

type setAppStatus = ReturnType<typeof setAppStatus>
type ActionsType = setAppStatus
